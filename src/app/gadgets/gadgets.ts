import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key are required!');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Gadget {
  id: string;
  product_name: string;
  brand: string;
  stock_qty: number;
  base_cost: number | null;
  selling_price: number | null;
  installment_price: number | null;
  description: string;
  primary_image: string;
  category: string;
  sub_category: string | null;
  specs: Record<string, any>;
}

export async function uploadGadget(gadgetData: Omit<Gadget, 'id'>) {
  try {
    const { data, error } = await supabase
      .from('gadgets')
      .insert([gadgetData])
      .select();

    if (error) {
      console.error('Error uploading gadget:', error);
      return { success: false, message: error.message, errors: error.details };
    }

    return { success: true, message: 'Gadget uploaded successfully!', data };
  } catch (error: any) {
    console.error('Unexpected error during gadget upload:', error);
    return { success: false, message: error.message };
  }
}

export async function fetchGadgetsByCategory(
  category: string,
  subCategory?: string,
  page: number = 1,
  limit: number = 20
) {
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  let query = supabase.from('gadgets').select('*').eq('category', category);

  if (subCategory) {
    query = query.eq('sub_category', subCategory);
  }

  const { data, error } = await query.range(start, end);

  if (error) {
    console.error('Error fetching gadgets by category:', error);
    return { data: [], error };
  }

  return { data, error: null };
}

export async function searchGadgets({ 
  searchTerm, 
  category, 
  page = 1, 
  limit = 20 
}: { 
  searchTerm: string; 
  category?: string; 
  page?: number; 
  limit?: number; 
}) {
  const term = searchTerm?.trim() || "";
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  let dbQuery = supabase.from('gadgets').select('*');

  const lowerTerm = term.toLowerCase();
  
  // Define keywords for priority matching
  const categoryKeywords = ['phones', 'laptops', 'accessories'];
  const subCategoryKeywords = ['iphone', 'android', 'macbook', 'windows'];

  if (categoryKeywords.includes(lowerTerm)) {
    // If search term is a category, show ONLY that category
    dbQuery = dbQuery.eq('category', lowerTerm);
  } else if (subCategoryKeywords.includes(lowerTerm)) {
    // If search term is a sub-category (like iPhone), show ONLY that sub-category
    dbQuery = dbQuery.ilike('sub_category', term);
  } else {
    // Default to product name or brand search (allows pasting exact names)
    dbQuery = dbQuery.or(`product_name.ilike.%${term}%,brand.ilike.%${term}%`);
  }

  // If an external category filter is applied via UI, ensure it's respected
  if (category && !categoryKeywords.includes(lowerTerm)) {
    dbQuery = dbQuery.eq('category', category);
  }

  const { data, error } = await dbQuery.range(start, end);

  if (error) {
    console.error('Error searching gadgets:', error);
    return { data: [], error };
  }

  return { data, error: null };
}