'use client'

import { useState, useEffect, use } from 'react'
import { getGadgetById, updateGadget } from '@/app/lib/actions/gadgets'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function EditGadgetPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = use(params)
  const router = useRouter()
  
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)
  const [message, setMessage] = useState('')
  
  const [gadget, setGadget] = useState<any>(null)
  const [category, setCategory] = useState('phones')

  useEffect(() => {
    let isMounted = true
    async function fetchGadget() {
      try {
        const data = await getGadgetById(id)
        if (data && isMounted) {
          setGadget(data)
          setCategory(data.category)
        } else if (isMounted) {
          setMessage('Gadget not found.')
        }
      } catch (error: any) {
        if (isMounted) setMessage(`Error fetching gadget: ${error.message}`)
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }
    fetchGadget()
    return () => { isMounted = false }
  }, [id])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsUpdating(true)
    setMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    
    let specs = {}
    const selectedCategory = formData.get('category') as string

    // Dynamically build the specs object based on the category
    if (selectedCategory === 'phones') {
      const batteryHealth = formData.get('battery_health');
      specs = {
        storage_capacity: formData.get('storage_capacity'),
        color: formData.get('color'),
        battery_health: batteryHealth ? Number(batteryHealth) : null,
        physical_condition: formData.get('physical_condition'),
        network_status: formData.get('network_status'),
        biometrics: formData.get('biometrics'),
      }
    } else if (selectedCategory === 'laptops') {
      const batteryCycle = formData.get('battery_cycle_count');
      specs = {
        processor: formData.get('processor'),
        ram: formData.get('ram'),
        storage_drive: formData.get('storage_drive'),
        screen_size: formData.get('screen_size'),
        graphics: formData.get('graphics'),
        battery_cycle_count: batteryCycle ? Number(batteryCycle) : null,
      }
    } else if (selectedCategory === 'accessories') {
      specs = {
        accessory_type: formData.get('accessory_type'),
        compatibility: formData.get('compatibility'),
      }
    } else if (selectedCategory === 'other') {
      try {
        specs = JSON.parse((formData.get('custom_features') as string) || '{}')
      } catch (err) {
        setMessage('Error: Invalid JSON provided in custom features.')
        setIsUpdating(false)
        return
      }
    }

    const rawInstallment = formData.get('installment_price')
    const rawBaseCost = formData.get('base_cost')
    const rawSellingPrice = formData.get('selling_price')

    const updateData = {
      product_name: formData.get('product_name'),
      brand: formData.get('brand'),
      stock_qty: Number(formData.get('stock_qty')),
      base_cost: rawBaseCost ? Number(rawBaseCost) : null,
      selling_price: rawSellingPrice ? Number(rawSellingPrice) : null,
      installment_price: rawInstallment ? Number(rawInstallment) : null,
      description: formData.get('description'),
      primary_image: formData.get('primary_image'),
      category: selectedCategory,
      sub_category: formData.get('sub_category') || null,
      specs
    }

    try {
      const response = await updateGadget(id, updateData) as any
      
      if (response?.success === false) {
        if (response.errors) {
          setMessage(`Validation Error: ${JSON.stringify(response.errors)}`)
        } else {
          setMessage(`Error: ${response.message}`)
        }
      } else {
        setMessage('Gadget updated successfully! 🎉')
        setTimeout(() => {
          router.push('/gadgets/admin/product/view-all')
        }, 1500)
      }
    } catch (error: any) {
      setMessage(`Error: ${error.message}`)
    } finally {
      setIsUpdating(false)
    }
  }

  if (isLoading) return <div className="p-6 text-center text-gray-500 font-medium">Loading gadget data...</div>
  if (!gadget) return <div className="p-6 text-center text-red-500 font-medium">{message || 'Gadget not found'}</div>

  return (
    <div className="max-w-4xl mx-auto p-6 animate-fade-in">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Edit Gadget</h1>
        <Link href="/gadgets/admin/product/view-all" className="text-primary hover:underline font-medium">
          Cancel
        </Link>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        {/* Core Fields Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Core Information</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">SKU <span className="text-xs text-gray-400 font-normal">(Cannot be changed)</span></label>
              <input type="text" name="sku" value={gadget.sku} readOnly className="w-full border p-2 rounded bg-gray-100 text-gray-500 focus:outline-none cursor-not-allowed" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Product Name</label>
              <input type="text" name="product_name" defaultValue={gadget.product_name} required className="w-full border p-2 rounded" placeholder="iPhone 14 Pro" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Brand</label>
              <input type="text" name="brand" defaultValue={gadget.brand} required className="w-full border p-2 rounded" placeholder="Apple" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Stock Quantity</label>
              <input type="number" name="stock_qty" defaultValue={gadget.stock_qty} min="0" required className="w-full border p-2 rounded" placeholder="50" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 font-medium">Base Cost ($) <span className="text-sm font-normal text-gray-500">(Optional)</span></label>
              <input type="number" name="base_cost" defaultValue={gadget.base_cost ?? ''} min="0" step="0.01" className="w-full border p-2 rounded" placeholder="800" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Selling Price ($) <span className="text-sm font-normal text-gray-500">(Optional)</span></label>
              <input type="number" name="selling_price" defaultValue={gadget.selling_price ?? ''} min="0" step="0.01" className="w-full border p-2 rounded" placeholder="999.99" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Installment Price ($) <span className="text-sm font-normal text-gray-500">(Optional)</span></label>
              <input type="number" name="installment_price" defaultValue={gadget.installment_price ?? ''} min="0" step="0.01" className="w-full border p-2 rounded" placeholder="350.00" />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea name="description" defaultValue={gadget.description} rows={3} required className="w-full border p-2 rounded" placeholder="Detailed product description..." />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Primary Image URL</label>
              <input type="url" name="primary_image" defaultValue={gadget.primary_image} required className="w-full border p-2 rounded" placeholder="https://example.com/image.png" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Category</label>
              <select name="category" required className="w-full border p-2 rounded bg-white" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="phones">Phones</option>
                <option value="laptops">Laptops</option>
                <option value="accessories">Accessories</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Sub-category</label>
            {category === 'phones' ? (
              <select name="sub_category" defaultValue={gadget.sub_category} className="w-full border p-2 rounded bg-white">
                <option value="android">Android</option>
                <option value="iPhone">iPhone</option>
              </select>
            ) : category === 'laptops' ? (
              <select name="sub_category" defaultValue={gadget.sub_category} className="w-full border p-2 rounded bg-white">
                <option value="macbook">Macbook</option>
                <option value="windows">Windows</option>
              </select>
            ) : (
              <input type="text" name="sub_category" defaultValue={gadget.sub_category} className="w-full border p-2 rounded" />
            )}
          </div>
        </div>

        {/* Dynamic Metafields Section */}
        <div className="space-y-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold border-b pb-2">Specifications</h2>
          
          {category === 'phones' && (
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block mb-1 font-medium text-sm">Storage Capacity <span className="text-xs font-normal text-gray-400">(Optional)</span></label><input type="text" name="storage_capacity" defaultValue={gadget.specs?.storage_capacity} className="w-full border p-2 rounded text-sm" placeholder="256GB" /></div>
              <div><label className="block mb-1 font-medium text-sm">Color <span className="text-xs font-normal text-gray-400">(Optional)</span></label><input type="text" name="color" defaultValue={gadget.specs?.color} className="w-full border p-2 rounded text-sm" placeholder="Space Black" /></div>
              <div><label className="block mb-1 font-medium text-sm">Battery Health (%) <span className="text-xs font-normal text-gray-400">(Optional)</span></label><input type="number" name="battery_health" defaultValue={gadget.specs?.battery_health} min="1" max="100" className="w-full border p-2 rounded text-sm" placeholder="100" /></div>
              <div><label className="block mb-1 font-medium text-sm">Physical Condition</label><input type="text" name="physical_condition" defaultValue={gadget.specs?.physical_condition} required className="w-full border p-2 rounded text-sm" placeholder="Mint" /></div>
              <div><label className="block mb-1 font-medium text-sm">Network Status <span className="text-xs font-normal text-gray-400">(Optional)</span></label><input type="text" name="network_status" defaultValue={gadget.specs?.network_status} className="w-full border p-2 rounded text-sm" placeholder="Factory Unlocked" /></div>
              <div><label className="block mb-1 font-medium text-sm">Biometrics <span className="text-xs font-normal text-gray-400">(Optional)</span></label><input type="text" name="biometrics" defaultValue={gadget.specs?.biometrics} className="w-full border p-2 rounded text-sm" placeholder="Face ID Working" /></div>
            </div>
          )}

          {category === 'laptops' && (
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block mb-1 font-medium text-sm">Processor</label><input type="text" name="processor" defaultValue={gadget.specs?.processor} required className="w-full border p-2 rounded text-sm" placeholder="Apple M2" /></div>
              <div><label className="block mb-1 font-medium text-sm">RAM</label><input type="text" name="ram" defaultValue={gadget.specs?.ram} required className="w-full border p-2 rounded text-sm" placeholder="16GB" /></div>
              <div><label className="block mb-1 font-medium text-sm">Storage Drive</label><input type="text" name="storage_drive" defaultValue={gadget.specs?.storage_drive} required className="w-full border p-2 rounded text-sm" placeholder="512GB SSD" /></div>
              <div><label className="block mb-1 font-medium text-sm">Screen Size</label><input type="text" name="screen_size" defaultValue={gadget.specs?.screen_size} required className="w-full border p-2 rounded text-sm" placeholder="14-inch" /></div>
              <div><label className="block mb-1 font-medium text-sm">Graphics <span className="text-xs font-normal text-gray-400">(Optional)</span></label><input type="text" name="graphics" defaultValue={gadget.specs?.graphics} className="w-full border p-2 rounded text-sm" placeholder="Integrated" /></div>
              <div><label className="block mb-1 font-medium text-sm">Battery Cycle Count <span className="text-xs font-normal text-gray-400">(Optional)</span></label><input type="number" name="battery_cycle_count" defaultValue={gadget.specs?.battery_cycle_count} min="0" className="w-full border p-2 rounded text-sm" placeholder="142" /></div>
            </div>
          )}

          {category === 'accessories' && (
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block mb-1 font-medium text-sm">Accessory Type</label><input type="text" name="accessory_type" defaultValue={gadget.specs?.accessory_type} required className="w-full border p-2 rounded text-sm" placeholder="Charger" /></div>
              <div><label className="block mb-1 font-medium text-sm">Compatibility</label><input type="text" name="compatibility" defaultValue={gadget.specs?.compatibility} required className="w-full border p-2 rounded text-sm" placeholder="iPhone 14 series" /></div>
            </div>
          )}

          {category === 'other' && (
            <div>
              <label className="block mb-1 font-medium text-sm">Custom Features (JSON)</label>
              <textarea name="custom_features" required rows={4} defaultValue={gadget.specs ? JSON.stringify(gadget.specs, null, 2) : '{}'} className="w-full border p-2 rounded font-mono text-sm" placeholder='{"flight_time": "30 mins", "camera_resolution": "4K"}' />
              <p className="text-xs text-gray-500 mt-1">Enter valid JSON for custom key-value pairs (e.g. Drones, Smartwatches).</p>
            </div>
          )}
        </div>

        <button type="submit" disabled={isUpdating} className="w-full bg-[#003C3C] text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-900 disabled:opacity-50 transition-colors">
          {isUpdating ? 'Saving Changes...' : 'Save Changes'}
        </button>
      </form>

      {message && <p className={`mt-4 text-center font-medium ${message.includes('successfully') ? 'text-green-600' : 'text-red-500'}`}>{message}</p>}
    </div>
  )
}
