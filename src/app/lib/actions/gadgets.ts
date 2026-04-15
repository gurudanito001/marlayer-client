'use server'

import { createClient } from '@/app/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { GadgetSchema } from '../../../../types/gadgets'
import { z } from 'zod' // FIX 1: Imported z to prevent ReferenceError

// 1. Fetch All Gadgets (Read)
export async function fetchGadgets() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('gadgets')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw new Error(error.message)
  return data
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
  const supabase = await createClient(); // FIX 2: Added missing 'await'

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
  return { success: true, data } // Standardized the return object
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
  const supabase = await createClient(); // FIX 4: Added missing 'await'

  const { data, error } = await supabase
    .from('gadgets')
    .insert(validGadgets);

  if (error) return { success: false, message: error.message };
  
  revalidatePath('/gadgets');
  return { success: true, count: validGadgets.length };
}

// 7. Fetch by Category
export async function fetchGadgetsByCategory(category: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('gadgets')
    .select('*')
    .eq('category', category) 

  if (error) throw new Error(error.message)
  return data
}

// 8. Decrement Stock
export async function decrementStock(id: string, quantityToDeduct: number) {
  // FIX 5: Implemented the MVP logic so stock deduction actually works
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