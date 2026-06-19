import { fetchGadgetsWithFilters } from '@/app/lib/actions/gadgets' 
import Link from 'next/link'
import DeleteButton from './DeleteButton'
import Navbar from '@/app/gadgets/gadgetsNavbar' 

export default async function ViewProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; query?: string; category?: string; sub_category?: string }>
}) {
  const { page, query, category, sub_category } = await searchParams
  
  const currentPage = Number(page) || 1
  const limit = 20
  
  // Extract base parameters
  const rawQuery = query || ''
  let fetchQuery = rawQuery
  let activeCategory = category?.toLowerCase() || ''
  let activeSubCategory = sub_category?.toLowerCase() || ''

  const normalizedQuery = rawQuery.trim().toLowerCase()
  
  if (normalizedQuery === 'accessories') {
    activeCategory = 'accessories'
    fetchQuery = '' 
  } else if (normalizedQuery === 'phones' || normalizedQuery === 'phone') {
    activeCategory = 'phones'
    fetchQuery = ''
  } else if (normalizedQuery === 'laptops' || normalizedQuery === 'laptop') {
    activeCategory = 'laptops'
    fetchQuery = ''
  } else if (normalizedQuery === 'apple' || normalizedQuery === 'iphone' || normalizedQuery === 'iphones') {
    activeCategory = 'phones'
    activeSubCategory = 'iphone'
    fetchQuery = '' 
  } else if (normalizedQuery === 'android' || normalizedQuery === 'androids') {
    activeCategory = 'phones'
    activeSubCategory = 'android'
    fetchQuery = ''
  } else if (normalizedQuery === 'windows') {
    activeCategory = 'laptops'
    activeSubCategory = 'windows'
    fetchQuery = ''
  } else if (normalizedQuery === 'macbook' || normalizedQuery === 'macbooks' || normalizedQuery === 'mac') {
    activeCategory = 'laptops'
    activeSubCategory = 'macbook'
    fetchQuery = ''
  }

  // Fetch using the smart-mapped parameters
  const { data: gadgets, totalPages, totalCount } = await fetchGadgetsWithFilters({
    page: currentPage, 
    limit: limit, 
    searchQuery: fetchQuery,
    category: activeCategory,
    subCategory: activeSubCategory
  })

  // URL Builders
  const buildLink = (pageNumber: number) => {
    const params = new URLSearchParams()
    params.set('page', pageNumber.toString())
    if (rawQuery) params.set('query', rawQuery)
    if (activeCategory) params.set('category', activeCategory)
    if (activeSubCategory) params.set('sub_category', activeSubCategory)
    return `/gadgets/admin/product/view-all?${params.toString()}`
  }

  const getCategoryUrl = (cat: string) => {
    const params = new URLSearchParams()
    if (cat) params.set('category', cat)
    return `/gadgets/admin/product/view-all?${params.toString()}`
  }

  const getSubCategoryUrl = (sub: string) => {
    const params = new URLSearchParams()
    
    
    if (sub === 'iphone' || sub === 'android') {
      params.set('category', 'phones')
    } else if (sub === 'macbook' || sub === 'windows') {
      params.set('category', 'laptops')
    } else if (activeCategory && !sub) {
      params.set('category', activeCategory)
    }
    
    if (sub) params.set('sub_category', sub)
    return `/gadgets/admin/product/view-all?${params.toString()}`
  }

  const getPageNumbers = () => {
    const pages = []
    const startPage = Math.max(1, currentPage - 2)
    const endPage = Math.min(totalPages, startPage + 4)
    const adjustedStart = Math.max(1, endPage - 4)

    for (let i = adjustedStart; i <= endPage; i++) {
      pages.push(i)
    }
    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <>
      <Navbar /> 
      <div className="max-w-6xl mx-auto p-6 animate-fade-in">
        
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-[#E2EFEB] pb-4">
          
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <h1 className="text-xl sm:text-2xl font-black text-[#0D2B1E] whitespace-nowrap">Manage Gadgets</h1>
            
            <div className="flex items-center gap-2">
              {/* Category Dropdown */}
              <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn btn-xs sm:btn-sm h-8 px-3 bg-[#F4F9F8] border-[#E2EFEB] text-[#416B5C] hover:bg-[#E2EFEB] font-bold rounded-lg flex items-center gap-1.5 capitalize">
                  {activeCategory || "Category"}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-1.5 shadow-lg bg-white border border-[#E2EFEB] rounded-xl w-36 mt-1">
                  <li><Link href={getCategoryUrl('')} className={`text-xs font-bold ${!activeCategory ? 'bg-[#003C3C]/10 text-[#003C3C]' : 'text-[#416B5C] hover:text-[#0D2B1E]'}`}>All Categories</Link></li>
                  <li><Link href={getCategoryUrl('phones')} className={`text-xs font-bold ${activeCategory === 'phones' ? 'bg-[#003C3C]/10 text-[#003C3C]' : 'text-[#416B5C] hover:text-[#0D2B1E]'}`}>Phones</Link></li>
                  <li><Link href={getCategoryUrl('laptops')} className={`text-xs font-bold ${activeCategory === 'laptops' ? 'bg-[#003C3C]/10 text-[#003C3C]' : 'text-[#416B5C] hover:text-[#0D2B1E]'}`}>Laptops</Link></li>
                  <li><Link href={getCategoryUrl('accessories')} className={`text-xs font-bold ${activeCategory === 'accessories' ? 'bg-[#003C3C]/10 text-[#003C3C]' : 'text-[#416B5C] hover:text-[#0D2B1E]'}`}>Accessories</Link></li>
                </ul>
              </div>

              {/* Sub-Category Dropdown */}
              <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn btn-xs sm:btn-sm h-8 px-3 bg-[#F4F9F8] border-[#E2EFEB] text-[#416B5C] hover:bg-[#E2EFEB] font-bold rounded-lg flex items-center gap-1.5 capitalize">
                  {activeSubCategory === 'iphone' ? 'Apple' : activeSubCategory || "Sub-category"}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-1.5 shadow-lg bg-white border border-[#E2EFEB] rounded-xl w-36 mt-1">
                  <li><Link href={getSubCategoryUrl('')} className={`text-xs font-bold ${!activeSubCategory ? 'bg-[#003C3C]/10 text-[#003C3C]' : 'text-[#416B5C] hover:text-[#0D2B1E]'}`}>All</Link></li>
                  <li><Link href={getSubCategoryUrl('iphone')} className={`text-xs font-bold ${activeSubCategory === 'iphone' ? 'bg-[#003C3C]/10 text-[#003C3C]' : 'text-[#416B5C] hover:text-[#0D2B1E]'}`}>Apple</Link></li>
                  <li><Link href={getSubCategoryUrl('android')} className={`text-xs font-bold ${activeSubCategory === 'android' ? 'bg-[#003C3C]/10 text-[#003C3C]' : 'text-[#416B5C] hover:text-[#0D2B1E]'}`}>Android</Link></li>
                  <li><Link href={getSubCategoryUrl('windows')} className={`text-xs font-bold ${activeSubCategory === 'windows' ? 'bg-[#003C3C]/10 text-[#003C3C]' : 'text-[#416B5C] hover:text-[#0D2B1E]'}`}>Windows</Link></li>
                  <li><Link href={getSubCategoryUrl('macbook')} className={`text-xs font-bold ${activeSubCategory === 'macbook' ? 'bg-[#003C3C]/10 text-[#003C3C]' : 'text-[#416B5C] hover:text-[#0D2B1E]'}`}>Macbook</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            
            <form method="GET" action="/gadgets/admin/product/view-all" className="relative flex items-center group">
              <div className="absolute left-2.5 z-10 pointer-events-none text-[#45B1A0] group-focus-within:text-[#003C3C] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <input 
                type="text" 
                name="query" 
                defaultValue={rawQuery}
                placeholder="Search database globally..." 
                className="w-9 h-9 rounded-full bg-[#F4F9F8] border border-transparent focus:bg-white focus:border-[#45B1A0] focus:ring-2 focus:ring-[#45B1A0]/20 focus:w-56 transition-all duration-300 ease-in-out text-sm pl-9 pr-3 cursor-pointer focus:cursor-text text-[#0D2B1E] placeholder:text-transparent focus:placeholder:text-[#416B5C]/60 outline-none"
              />
            </form>

            <Link 
              href="/gadgets/admin/product/upload" 
              className="bg-[#003C3C] text-white font-bold h-9 px-4 rounded-lg hover:bg-teal-900 transition-colors shrink-0 flex items-center justify-center text-sm shadow-sm"
            >
              + Upload
            </Link>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
          <table className="table table-zebra w-full">
            <thead className="bg-gray-50 text-gray-700 text-sm">
              <tr>
                <th>Image</th>
                <th>Product Details</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Prices</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {gadgets && gadgets.length > 0 ? (
                gadgets.map((gadget: any) => (
                  <tr key={gadget.id} className="hover:bg-gray-50">
                    <td>
                      <div className="avatar">
                        <div className="w-14 h-14 rounded-md border bg-gray-100 flex items-center justify-center overflow-hidden">
                          {gadget.primary_image ? (
                            <img 
                              src={gadget.primary_image} 
                              alt={gadget.product_name} 
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <span className="text-xs text-gray-400">No img</span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold text-base text-gray-800">{gadget.product_name}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        <span className="font-medium text-gray-700">SKU:</span> {gadget.sku}
                      </div>
                      <div className="text-xs text-gray-500">
                        <span className="font-medium text-gray-700">Brand:</span> {gadget.brand}
                      </div>
                    </td>
                    <td className="capitalize font-medium">
                      <span className="bg-gray-100 px-2 py-1 rounded text-gray-700 text-xs border">
                        {gadget.category}
                        {gadget.sub_category && (
                          <span className="text-gray-400 font-normal ml-1">({gadget.sub_category})</span>
                        )}
                      </span>
                    </td>
                    <td>
                      <div className={`badge ${gadget.stock_qty > 0 ? 'bg-primary-2 text-white border-none' : 'badge-error'} font-medium`}>
                        {gadget.stock_qty} in stock
                      </div>
                    </td>
                    <td>
                      <div className="font-semibold text-gray-800">${gadget.selling_price?.toFixed(2)}</div>
                      {gadget.base_cost && (
                        <div className="text-xs text-gray-400">
                          Cost: ${gadget.base_cost?.toFixed(2)}
                        </div>
                      )}
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Link 
                          href={`/gadgets/admin/product/${gadget.id}`}
                          className="btn btn-sm bg-[#003C3C] hover:bg-teal-900 border-none text-white transition-colors"
                        >
                          View
                        </Link>
                        <DeleteButton id={gadget.id} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-gray-500">
                    <p className="text-lg">No gadgets found.</p>
                    {rawQuery || activeCategory || activeSubCategory ? (
                      <Link href="/gadgets/admin/product/view-all" className="text-[#003C3C] font-medium hover:underline mt-2 inline-block">
                        Clear all filters
                      </Link>
                    ) : (
                      <Link href="/gadgets/admin/product/upload" className="text-[#003C3C] font-medium hover:underline mt-2 inline-block">
                        Upload your first gadget
                      </Link>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Numbered Pagination Layout */}
        {totalPages > 1 && (
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-100 pt-4">
            <div className="text-sm font-medium text-gray-500">
              Showing pages <span className="text-[#003C3C] font-bold">{currentPage}</span> of {totalPages} 
              <span className="ml-2 text-gray-400">({totalCount} records found)</span>
            </div>

            <div className="join border border-gray-200 shadow-sm bg-white">
              <Link
                href={buildLink(currentPage - 1)}
                className={`join-item btn btn-sm bg-white border-gray-200 text-gray-700 hover:bg-gray-50 normal-case ${currentPage === 1 ? 'btn-disabled opacity-40 pointer-events-none' : ''}`}
                aria-disabled={currentPage === 1}
              >
                Prev
              </Link>
              
              {pageNumbers.map((p) => (
                <Link
                  key={p}
                  href={buildLink(p)}
                  className={`join-item btn btn-sm border-gray-200 ${
                    p === currentPage 
                      ? 'bg-[#003C3C] text-white border-none hover:bg-teal-900 font-bold' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 font-normal'
                  }`}
                >
                  {p}
                </Link>
              ))}

              <Link
                href={buildLink(currentPage + 1)}
                className={`join-item btn btn-sm bg-white border-gray-200 text-gray-700 hover:bg-gray-50 normal-case ${currentPage >= totalPages ? 'btn-disabled opacity-40 pointer-events-none' : ''}`}
                aria-disabled={currentPage >= totalPages}
              >
                Next
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}