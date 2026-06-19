'use server'

import { createClient } from '@/app/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { GadgetSchema } from '../../../../types/gadgets'
import { z } from 'zod'


export async function fetchGadgets(
  page: number = 1, 
  limit: number = 12, 
  searchQuery?: string,
  category?: string,
  subCategory?: string 
) {
  const supabase = await createClient()
  const from = (page - 1) * limit
  const to = from + limit - 1

  let queryBuilder = supabase.from('gadgets').select('*', { count: 'exact' })

  // If a search query is passed from the admin page, apply the filters
  if (searchQuery && searchQuery.trim() !== "") {
    const term = searchQuery.trim()
    queryBuilder = queryBuilder.or(`product_name.ilike.%${term}%,brand.ilike.%${term}%,sku.ilike.%${term}%`)
  }

  // Apply category filter
  if (category) {
    queryBuilder = queryBuilder.eq('category', category.toLowerCase())
  }

  // Apply sub-category filter
  if (subCategory && subCategory.toLowerCase() !== 'all products') {
    queryBuilder = queryBuilder.eq('sub_category', subCategory.toLowerCase())
  }

  const { data, error, count } = await queryBuilder
    .order('created_at', { ascending: false }) // Shows newest uploads first
    .range(from, to)

  if (error) {
    console.error("Error fetching gadgets:", error)
    return { data: [], totalPages: 0, totalCount: 0 }
  }

  const totalCount = count || 0
  const totalPages = Math.ceil(totalCount / limit)

  return { 
    data, 
    totalPages, 
    totalCount 
  }
}

// 2. View One Gadget (Read)
export async function getGadgetById(id: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('gadgets')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw new Error(error.message)
  return data
}

// 3. Upload a Gadget (Create)
export async function uploadGadget(rawInput: unknown) {
  const validation = GadgetSchema.safeParse(rawInput);

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const validGadget = validation.data;
  const supabase = await createClient(); 

  const { data, error } = await supabase
    .from('gadgets')
    .insert([validGadget])
    .select();

  if (error) return { success: false, message: error.message };
  
  revalidatePath('/gadgets');
  return { success: true, data };
}

// 4. Update a Gadget
export async function updateGadget(id: string, updateData: unknown) {
  // Zod discriminated unions don't have a .partial() method. 
  // We map over the options to make each object in the union partial,
  // but we MUST keep the discriminator key ("category") required.
  const PartialGadgetSchema = z.discriminatedUnion(
    "category",
    GadgetSchema.options.map((option: any) => option.partial().extend({ category: option.shape.category })) as any
  );

  const validation = PartialGadgetSchema.safeParse(updateData);
  
  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const supabase = await createClient()
  const { data, error } = await supabase
    .from('gadgets')
    .update(validation.data)
    .eq('id', id)
    .select()

  if (error) throw new Error(error.message)
  
  revalidatePath('/gadgets')
  revalidatePath(`/gadgets/${id}`)
  return { success: true, data }
}

// 5. Delete a Gadget
export async function deleteGadget(id: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('gadgets')
    .delete()
    .eq('id', id)

  if (error) throw new Error(error.message)
  
  revalidatePath('/gadgets')
  return { success: true }
}

// 6. Bulk Upload Gadgets
export async function bulkUploadGadgets(rawArray: unknown[]) {
  const ArraySchema = z.array(GadgetSchema);
  const validation = ArraySchema.safeParse(rawArray);

  if (!validation.success) {
    return {
      success: false,
      message: "One or more items in the spreadsheet have invalid data.",
      errors: validation.error.flatten().fieldErrors, 
    };
  }

  const validGadgets = validation.data;
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('gadgets')
    .insert(validGadgets);

  if (error) return { success: false, message: error.message };
  
  revalidatePath('/gadgets');
  return { success: true, count: validGadgets.length };
}

// 7. Fetch by Category & Sub-category (Paginated)
export async function fetchGadgetsByCategory(
  category: string, 
  subCategory?: string, 
  page: number = 1, 
  limit: number = 12
) {
  const supabase = await createClient()
  
  const from = (page - 1) * limit
  const to = from + limit - 1

  let query = supabase
    .from('gadgets')
    .select('*', { count: 'exact' })
    .eq('category', category)

  if (subCategory) {
    query = query.eq('sub_category', subCategory)
  }

  const { data, error, count } = await query
    .order('created_at', { ascending: false })
    .range(from, to)

  if (error) throw new Error(error.message)

  const totalCount = count || 0
  const totalPages = Math.ceil(totalCount / limit)

  return { 
    data, 
    totalCount,
    totalPages,
    currentPage: page,
    hasMore: page < totalPages 
  }
}


// 8. Advanced Search (Name, Category, Sub-category, Brand)
export async function searchGadgets({
  searchTerm,
  minPrice,
  maxPrice,
  category,
  subCategory,
  page = 1,
  limit = 12
}: {
  searchTerm?: string,
  minPrice?: number,
  maxPrice?: number,
  category?: string,
  subCategory?: string,
  page?: number,
  limit?: number
}) {
  const supabase = await createClient()
  const from = (page - 1) * limit
  const to = from + limit - 1

  let queryBuilder = supabase.from('gadgets').select('*', { count: 'exact' })

  if (minPrice !== undefined) queryBuilder = queryBuilder.gte('selling_price', minPrice)
  if (maxPrice !== undefined) queryBuilder = queryBuilder.lte('selling_price', maxPrice)
  
  // 2. Normalize and check if search term itself is a category name override
  let activeCategory = category
  let activeSubCategory = subCategory

  if (searchTerm) {
    const cleanTerm = searchTerm.trim().toLowerCase()
    if (['phones', 'phone', 'telephones'].includes(cleanTerm)) {
      activeCategory = 'phones'
      searchTerm = undefined // Clear text search to show everything in this category
    } else if (['laptops', 'laptop', 'computers'].includes(cleanTerm)) {
      activeCategory = 'laptops'
      searchTerm = undefined
    } else if (['accessories', 'accessory'].includes(cleanTerm)) {
      activeCategory = 'accessories'
      searchTerm = undefined
    }
  }

  if (activeCategory) queryBuilder = queryBuilder.eq('category', activeCategory.toLowerCase())
  if (activeSubCategory) queryBuilder = queryBuilder.eq('sub_category', activeSubCategory.toLowerCase())

  if (searchTerm && searchTerm.trim() !== "") {
    const term = searchTerm.trim()
    
    const words = term.split(/\s+/).filter(word => word.length > 0)
    
    if (words.length > 1) {
      words.forEach(word => {
        queryBuilder = queryBuilder.or(`product_name.ilike.%${word}%,brand.ilike.%${word}%,sub_category.ilike.%${word}%`)
      })
    } else {
      queryBuilder = queryBuilder.or(`product_name.ilike.%${term}%,brand.ilike.%${term}%,sub_category.ilike.%${term}%`)
    }
  }

  const { data, error, count } = await queryBuilder
    .order('product_name', { ascending: true })
    .range(from, to)

  if (error) throw new Error(error.message)

  const totalCount = count || 0
  const totalPages = Math.ceil(totalCount / limit)

  return { 
    data, 
    totalCount,
    totalPages,
    currentPage: page,
    hasMore: page < totalPages 
  }
}

// 8. Decrement Stock
export async function decrementStock(id: string, quantityToDeduct: number) {
  const supabase = await createClient();
  
  // First, fetch the current stock
  const { data: gadget, error: fetchError } = await supabase
    .from('gadgets')
    .select('stock_qty')
    .eq('id', id)
    .single();
    
  if (fetchError) throw new Error(fetchError.message);
  
  // Prevent stock from going into negative numbers
  const newStock = Math.max(0, gadget.stock_qty - quantityToDeduct);
  
  // Update the database with the new stock count
  const { data, error: updateError } = await supabase
    .from('gadgets')
    .update({ stock_qty: newStock })
    .eq('id', id)
    .select();
    
  if (updateError) throw new Error(updateError.message);
  
  revalidatePath('/gadgets');
  revalidatePath(`/gadgets/${id}`);
  return { success: true, data };
}

// 9. Master Filter Function (For Boss's New Requirements)
export async function fetchGadgetsWithFilters({
  page = 1,
  limit = 20,
  category,
  subCategory,
  searchQuery
}: {
  page?: number
  limit?: number
  category?: string
  subCategory?: string
  searchQuery?: string
}) {
  const supabase = await createClient()
  const from = (page - 1) * limit
  const to = from + limit - 1

  let queryBuilder = supabase.from('gadgets').select('*', { count: 'exact' })

  if (category) {
    queryBuilder = queryBuilder.eq('category', category.toLowerCase())
  }

  if (subCategory && subCategory.toLowerCase() !== 'all products') {
    const tab = subCategory.toLowerCase()
    
    if (tab === 'iphone') {
      queryBuilder = queryBuilder.or('brand.ilike.%apple%,product_name.ilike.%iphone%')
    } else if (tab === 'android') {
      queryBuilder = queryBuilder.not('brand', 'ilike', '%apple%').not('product_name', 'ilike', '%iphone%')
    } else if (tab === 'macbook') {
      // NEW: Laptops Logic
      queryBuilder = queryBuilder.or('brand.ilike.%apple%,product_name.ilike.%macbook%')
    } else if (tab === 'windows') {
      // NEW: Laptops Logic
      queryBuilder = queryBuilder.not('brand', 'ilike', '%apple%').not('product_name', 'ilike', '%macbook%')
    } else {
      queryBuilder = queryBuilder.eq('sub_category', tab)
    }
  }

  if (searchQuery && searchQuery.trim() !== '') {
    const term = searchQuery.trim()
    queryBuilder = queryBuilder.or(`product_name.ilike.%${term}%,brand.ilike.%${term}%,sku.ilike.%${term}%`)
  }

  const { data, error, count } = await queryBuilder
    .order('created_at', { ascending: false })
    .range(from, to)

  if (error) {
    console.error('Database query failure:', error)
    return { data: [], totalPages: 0, totalCount: 0 }
  }

  const totalCount = count || 0
  const totalPages = Math.ceil(totalCount / limit)

  return { data, totalPages, totalCount }
}