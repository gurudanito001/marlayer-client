'use client'

import { useState, useEffect, use } from 'react'
import { getGadgetById, updateGadget } from '@/app/lib/actions/gadgets'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

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
    <div className="max-w-5xl mx-auto p-6 animate-fade-in">
      
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0D2B1E]">Edit Gadget</h1>
        <Link href="/gadgets/admin/product/view-all" className="text-[#003C3C] hover:underline font-bold">
          Cancel
        </Link>
      </div>

      {/* The Form */}
      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
        
        {/* Core Fields Section */}
        <div className="space-y-5">
          <h2 className="text-lg font-bold text-[#0D2B1E] border-b pb-2">Core Information</h2>
          
          {/* Image placed directly inside the Core Information section at the top */}
          {gadget.primary_image && (
            <div className="flex justify-center py-4">
              <div className="relative w-80 h-80 sm:w-[350px] sm:h-[350px] border border-[#E2EFEB] rounded-xl overflow-hidden bg-[#F4F9F8] flex items-center justify-center">
                <Image
                  src={gadget.primary_image}
                  alt={gadget.product_name || 'Gadget Image'}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-2 drop-shadow-sm"
                />
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-1.5 font-medium text-sm text-gray-700">SKU <span className="text-xs text-gray-400 font-normal">(Cannot be changed)</span></label>
              <input type="text" name="sku" value={gadget.sku} readOnly className="w-full border p-2.5 rounded-lg bg-gray-50 text-gray-500 focus:outline-none cursor-not-allowed text-sm" />
            </div>
            <div>
              <label className="block mb-1.5 font-medium text-sm text-gray-700">Product Name</label>
              <input type="text" name="product_name" defaultValue={gadget.product_name} required className="w-full border p-2.5 rounded-lg text-sm" placeholder="iPhone 14 Pro" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-1.5 font-medium text-sm text-gray-700">Brand</label>
              <input type="text" name="brand" defaultValue={gadget.brand} required className="w-full border p-2.5 rounded-lg text-sm" placeholder="Apple" />
            </div>
            <div>
              <label className="block mb-1.5 font-medium text-sm text-gray-700">Stock Quantity</label>
              <input type="number" name="stock_qty" defaultValue={gadget.stock_qty} min="0" required className="w-full border p-2.5 rounded-lg text-sm" placeholder="50" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block mb-1.5 font-medium text-sm text-gray-700">Base Cost ($) <span className="text-sm font-normal text-gray-500">(Optional)</span></label>
              <input type="number" name="base_cost" defaultValue={gadget.base_cost ?? ''} min="0" step="0.01" className="w-full border p-2.5 rounded-lg text-sm" placeholder="800" />
            </div>
            <div>
              <label className="block mb-1.5 font-medium text-sm text-gray-700">Selling Price ($) <span className="text-sm font-normal text-gray-500">(Optional)</span></label>
              <input type="number" name="selling_price" defaultValue={gadget.selling_price ?? ''} min="0" step="0.01" className="w-full border p-2.5 rounded-lg text-sm" placeholder="999.99" />
            </div>
            <div>
              <label className="block mb-1.5 font-medium text-sm text-gray-700">Installment Price ($) <span className="text-sm font-normal text-gray-500">(Optional)</span></label>
              <input type="number" name="installment_price" defaultValue={gadget.installment_price ?? ''} min="0" step="0.01" className="w-full border p-2.5 rounded-lg text-sm" placeholder="350.00" />
            </div>
          </div>

          <div>
            <label className="block mb-1.5 font-medium text-sm text-gray-700">Description</label>
            <textarea name="description" defaultValue={gadget.description} rows={3} required className="w-full border p-2.5 rounded-lg text-sm" placeholder="Detailed product description..." />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-1.5 font-medium text-sm text-gray-700">Primary Image URL</label>
              <input type="url" name="primary_image" defaultValue={gadget.primary_image} required className="w-full border p-2.5 rounded-lg text-sm" placeholder="https://example.com/image.png" />
            </div>
            <div>
              <label className="block mb-1.5 font-medium text-sm text-gray-700">Category</label>
              <select name="category" required className="w-full border p-2.5 rounded-lg bg-white text-sm" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="phones">Phones</option>
                <option value="laptops">Laptops</option>
                <option value="accessories">Accessories</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1.5 font-medium text-sm text-gray-700">Sub-category</label>
            {category === 'phones' ? (
              <select name="sub_category" defaultValue={gadget.sub_category} className="w-full border p-2.5 rounded-lg bg-white text-sm">
                <option value="android">Android</option>
                <option value="iPhone">iPhone</option>
              </select>
            ) : category === 'laptops' ? (
              <select name="sub_category" defaultValue={gadget.sub_category} className="w-full border p-2.5 rounded-lg bg-white text-sm">
                <option value="macbook">Macbook</option>
                <option value="windows">Windows</option>
              </select>
            ) : (
              <input type="text" name="sub_category" defaultValue={gadget.sub_category} className="w-full border p-2.5 rounded-lg text-sm" />
            )}
          </div>
        </div>

        {/* Dynamic Metafields Section */}
        <div className="space-y-5 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-bold text-[#0D2B1E] border-b pb-2">Specifications</h2>
          
          {category === 'phones' && (
            <div className="grid grid-cols-2 gap-6">
              <div><label className="block mb-1.5 font-medium text-sm text-gray-700">Storage Capacity</label><input type="text" name="storage_capacity" defaultValue={gadget.specs?.storage_capacity} className="w-full border p-2.5 rounded-lg text-sm bg-white" placeholder="256GB" /></div>
              <div><label className="block mb-1.5 font-medium text-sm text-gray-700">Color</label><input type="text" name="color" defaultValue={gadget.specs?.color} className="w-full border p-2.5 rounded-lg text-sm bg-white" placeholder="Space Black" /></div>
              <div><label className="block mb-1.5 font-medium text-sm text-gray-700">Battery Health (%)</label><input type="number" name="battery_health" defaultValue={gadget.specs?.battery_health} min="1" max="100" className="w-full border p-2.5 rounded-lg text-sm bg-white" placeholder="100" /></div>
              <div><label className="block mb-1.5 font-medium text-sm text-gray-700">Physical Condition</label><input type="text" name="physical_condition" defaultValue={gadget.specs?.physical_condition} required className="w-full border p-2.5 rounded-lg text-sm bg-white" placeholder="Mint" /></div>
              <div><label className="block mb-1.5 font-medium text-sm text-gray-700">Network Status</label><input type="text" name="network_status" defaultValue={gadget.specs?.network_status} className="w-full border p-2.5 rounded-lg text-sm bg-white" placeholder="Factory Unlocked" /></div>
              <div><label className="block mb-1.5 font-medium text-sm text-gray-700">Biometrics</label><input type="text" name="biometrics" defaultValue={gadget.specs?.biometrics} className="w-full border p-2.5 rounded-lg text-sm bg-white" placeholder="Face ID Working" /></div>
            </div>
          )}

          {category === 'laptops' && (
            <div className="grid grid-cols-2 gap-6">
              <div><label className="block mb-1.5 font-medium text-sm text-gray-700">Processor</label><input type="text" name="processor" defaultValue={gadget.specs?.processor} required className="w-full border p-2.5 rounded-lg text-sm bg-white" placeholder="Apple M2" /></div>
              <div><label className="block mb-1.5 font-medium text-sm text-gray-700">RAM</label><input type="text" name="ram" defaultValue={gadget.specs?.ram} required className="w-full border p-2.5 rounded-lg text-sm bg-white" placeholder="16GB" /></div>
              <div><label className="block mb-1.5 font-medium text-sm text-gray-700">Storage Drive</label><input type="text" name="storage_drive" defaultValue={gadget.specs?.storage_drive} required className="w-full border p-2.5 rounded-lg text-sm bg-white" placeholder="512GB SSD" /></div>
              <div><label className="block mb-1.5 font-medium text-sm text-gray-700">Screen Size</label><input type="text" name="screen_size" defaultValue={gadget.specs?.screen_size} required className="w-full border p-2.5 rounded-lg text-sm bg-white" placeholder="14-inch" /></div>
              <div><label className="block mb-1.5 font-medium text-sm text-gray-700">Graphics</label><input type="text" name="graphics" defaultValue={gadget.specs?.graphics} className="w-full border p-2.5 rounded-lg text-sm bg-white" placeholder="Integrated" /></div>
              <div><label className="block mb-1.5 font-medium text-sm text-gray-700">Battery Cycle Count</label><input type="number" name="battery_cycle_count" defaultValue={gadget.specs?.battery_cycle_count} min="0" className="w-full border p-2.5 rounded-lg text-sm bg-white" placeholder="142" /></div>
            </div>
          )}

          {category === 'accessories' && (
            <div className="grid grid-cols-2 gap-6">
              <div><label className="block mb-1.5 font-medium text-sm text-gray-700">Accessory Type</label><input type="text" name="accessory_type" defaultValue={gadget.specs?.accessory_type} required className="w-full border p-2.5 rounded-lg text-sm bg-white" placeholder="Charger" /></div>
              <div><label className="block mb-1.5 font-medium text-sm text-gray-700">Compatibility</label><input type="text" name="compatibility" defaultValue={gadget.specs?.compatibility} required className="w-full border p-2.5 rounded-lg text-sm bg-white" placeholder="iPhone 14 series" /></div>
            </div>
          )}

          {category === 'other' && (
            <div>
              <label className="block mb-1.5 font-medium text-sm text-gray-700">Custom Features (JSON)</label>
              <textarea name="custom_features" required rows={4} defaultValue={gadget.specs ? JSON.stringify(gadget.specs, null, 2) : '{}'} className="w-full border p-2.5 rounded-lg font-mono text-sm bg-white" placeholder='{"flight_time": "30 mins", "camera_resolution": "4K"}' />
              <p className="text-xs text-gray-500 mt-1.5">Enter valid JSON for custom key-value pairs (e.g. Drones, Smartwatches).</p>
            </div>
          )}
        </div>

        <button type="submit" disabled={isUpdating} className="w-full bg-[#003C3C] text-white font-bold py-3.5 px-4 rounded-xl hover:bg-teal-900 disabled:opacity-50 transition-colors shadow-sm text-base">
          {isUpdating ? 'Saving Changes...' : 'Save Changes'}
        </button>
      </form>

      {message && (
        <p className={`mt-6 text-center font-bold px-4 py-3 rounded-lg ${message.includes('successfully') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
          {message}
        </p>
      )}
    </div>
  )
}