import { fetchGadgets } from '@/app/lib/actions/gadgets'
import Link from 'next/link'
import DeleteButton from './DeleteButton'

export default async function ViewProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page } = await searchParams
  const currentPage = Number(page) || 1
  const limit = 12

  // Fetch gadgets server-side
  const { data: gadgets, totalPages, totalCount } = await fetchGadgets(currentPage, limit)

  return (
    <div className="max-w-6xl mx-auto p-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-primary">Manage Gadgets</h1>
        <Link 
          href="/gadgets/admin/product/upload" 
          className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-900 transition-colors"
        >
          + Upload New Gadget
        </Link>
      </div>

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
                          /* Using standard img tag instead of next/image to avoid requiring remote pattern config for external URLs */
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
                  <Link href="/gadgets/admin/product/upload" className="text-primary font-medium hover:underline mt-2 inline-block">
                    Upload your first gadget
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center items-center gap-4">
          <Link
            href={`/gadgets/admin/product/view-all?page=${currentPage - 1}`}
            className={`btn btn-sm ${currentPage === 1 ? 'btn-disabled pointer-events-none opacity-50' : 'bg-[#003C3C] text-white border-none hover:bg-teal-900'}`}
            aria-disabled={currentPage === 1}
          >
            Previous
          </Link>
          
          <div className="text-sm font-medium text-gray-600">
            Page <span className="text-primary font-bold">{currentPage}</span> of {totalPages}
            <span className="ml-2 text-gray-400">({totalCount} items)</span>
          </div>

          <Link
            href={`/gadgets/admin/product/view-all?page=${currentPage + 1}`}
            className={`btn btn-sm ${currentPage >= totalPages ? 'btn-disabled pointer-events-none opacity-50' : 'bg-[#003C3C] text-white border-none hover:bg-teal-900'}`}
            aria-disabled={currentPage >= totalPages}
          >
            Next
          </Link>
        </div>
      )}
    </div>
  )
}