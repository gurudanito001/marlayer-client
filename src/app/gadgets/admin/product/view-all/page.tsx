import { fetchGadgets } from '@/app/lib/actions/gadgets'
import Link from 'next/link'
import DeleteButton from './DeleteButton'

export default async function ViewProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; query?: string }>
}) {
  const { page, query } = await searchParams
  const currentPage = Number(page) || 1
  const searchQuery = query || ''
  const limit = 20 // Increased item count from 12 to 20

  // Fetch gadgets server-side (passing the search query alongside page & limit)
  const { data: gadgets, totalPages, totalCount } = await fetchGadgets(currentPage, limit, searchQuery)

  // Helper to build pristine pagination and search links dynamically
  const buildLink = (pageNumber: number) => {
    const params = new URLSearchParams()
    params.set('page', pageNumber.toString())
    if (searchQuery) params.set('query', searchQuery)
    return `/gadgets/admin/product/view-all?${params.toString()}`
  }

  // Generate numbered sequence for pagination buttons
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
    <div className="max-w-6xl mx-auto p-6 animate-fade-in">
      {/* Top Bar with Header, Search Input, and Upload Link */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto flex-1">
          <h1 className="text-2xl font-bold text-primary whitespace-nowrap">Manage Gadgets</h1>
          
          {/* Native GET Form for clean, state-free routing search */}
          <form method="GET" action="/gadgets/admin/product/view-all" className="w-full sm:w-72 relative">
            <input 
              type="text" 
              name="query" 
              defaultValue={searchQuery}
              placeholder="Search gadgets by name, SKU, or brand..." 
              className="input input-bordered w-full pr-10 rounded-lg text-sm bg-white"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>

        <Link 
          href="/gadgets/admin/product/upload" 
          className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-900 transition-colors shrink-0"
        >
          + Upload New Gadget
        </Link>
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
                  {searchQuery ? (
                    <Link href="/gadgets/admin/product/view-all" className="text-primary font-medium hover:underline mt-2 inline-block">
                      Clear search queries
                    </Link>
                  ) : (
                    <Link href="/gadgets/admin/product/upload" className="text-primary font-medium hover:underline mt-2 inline-block">
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
            Showing pages <span className="text-primary font-bold">{currentPage}</span> of {totalPages} 
            <span className="ml-2 text-gray-400">({totalCount} records found)</span>
          </div>

          <div className="join border border-gray-200 shadow-sm bg-white">
            {/* Previous Button */}
            <Link
              href={buildLink(currentPage - 1)}
              className={`join-item btn btn-sm bg-white border-gray-200 text-gray-700 hover:bg-gray-50 normal-case ${currentPage === 1 ? 'btn-disabled opacity-40 pointer-events-none' : ''}`}
              aria-disabled={currentPage === 1}
            >
              Prev
            </Link>
            
            {/* Numeric Page Buttons */}
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

            {/* Next Button */}
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
  )
}