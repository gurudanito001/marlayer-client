'use client'

import { useState, useEffect } from 'react'
import { uploadGadget } from '@/app/lib/actions/gadgets'

const generateSku = () => 'SKU-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();

export default function UploadGadgetPage() {
  const [category, setCategory] = useState('phones')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [sku, setSku] = useState('')

  useEffect(() => {
    setSku(generateSku())
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    
    let specs = {}
    const selectedCategory = formData.get('category') as string

    // Dynamically build the specs object based on the category
    if (selectedCategory === 'phones') {
      specs = {
        storage_capacity: formData.get('storage_capacity'),
        color: formData.get('color'),
        battery_health: Number(formData.get('battery_health')),
        physical_condition: formData.get('physical_condition'),
        network_status: formData.get('network_status'),
        biometrics: formData.get('biometrics'),
      }
    } else if (selectedCategory === 'laptops') {
      specs = {
        processor: formData.get('processor'),
        ram: formData.get('ram'),
        storage_drive: formData.get('storage_drive'),
        screen_size: formData.get('screen_size'),
        graphics: formData.get('graphics'),
        battery_cycle_count: Number(formData.get('battery_cycle_count')),
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
        setIsLoading(false)
        return
      }
    }

    const rawInstallment = formData.get('installment_price')

    // Construct the gadget object matching your Supabase schema
    const gadgetData = {
      sku: formData.get('sku'),
      product_name: formData.get('product_name'),
      brand: formData.get('brand'),
      stock_qty: Number(formData.get('stock_qty')),
      base_cost: Number(formData.get('base_cost')),
      selling_price: Number(formData.get('selling_price')),
      installment_price: rawInstallment ? Number(rawInstallment) : null,
      description: formData.get('description'),
      primary_image: formData.get('primary_image'),
      category: selectedCategory,
      specs
    }

    try {
      const response = await uploadGadget(gadgetData) as any
      
      if (response?.success === false) {
        if (response.errors) {
          setMessage(`Validation Error: ${JSON.stringify(response.errors)}`)
        } else {
          setMessage(`Error: ${response.message}`)
        }
      } else {
        setMessage('Gadget uploaded successfully! 🎉')
        form.reset() // Clear the form on success
        setSku(generateSku()) // Generate a new SKU for the next upload
      }
    } catch (error: any) {
      setMessage(`Error: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Upload New Gadget</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Core Fields Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Core Information</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">SKU</label>
              <input 
                type="text" 
                name="sku" 
                value={sku} 
                readOnly 
                className="w-full border p-2 rounded bg-gray-100 text-gray-500 focus:outline-none cursor-not-allowed" 
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Product Name</label>
              <input type="text" name="product_name" required className="w-full border p-2 rounded" placeholder="iPhone 14 Pro" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Brand</label>
              <input type="text" name="brand" required className="w-full border p-2 rounded" placeholder="Apple" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Stock Quantity</label>
              <input type="number" name="stock_qty" min="0" required className="w-full border p-2 rounded" placeholder="50" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 font-medium">Base Cost ($)</label>
              <input type="number" name="base_cost" min="0" step="0.01" required className="w-full border p-2 rounded" placeholder="800" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Selling Price ($)</label>
              <input type="number" name="selling_price" min="0" step="0.01" required className="w-full border p-2 rounded" placeholder="999.99" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Installment Price ($) <span className="text-sm font-normal text-gray-500">(Optional)</span></label>
              <input type="number" name="installment_price" min="0" step="0.01" className="w-full border p-2 rounded" placeholder="350.00" />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea name="description" rows={3} required className="w-full border p-2 rounded" placeholder="Detailed product description..." />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Primary Image URL</label>
              <input type="url" name="primary_image" required className="w-full border p-2 rounded" placeholder="https://example.com/image.png" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Category</label>
              <select 
                name="category" 
                required 
                className="w-full border p-2 rounded bg-white"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="phones">Phones</option>
                <option value="laptops">Laptops</option>
                <option value="accessories">Accessories</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Dynamic Metafields Section */}
        <div className="space-y-4 bg-gray-50 p-6 rounded-lg border">
          <h2 className="text-xl font-semibold border-b pb-2">Specifications</h2>
          
          {category === 'phones' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Storage Capacity</label>
                <input type="text" name="storage_capacity" required className="w-full border p-2 rounded" placeholder="256GB" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Color</label>
                <input type="text" name="color" required className="w-full border p-2 rounded" placeholder="Space Black" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Battery Health (%)</label>
                <input type="number" name="battery_health" min="1" max="100" required className="w-full border p-2 rounded" placeholder="100" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Physical Condition</label>
                <input type="text" name="physical_condition" required className="w-full border p-2 rounded" placeholder="Mint" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Network Status</label>
                <input type="text" name="network_status" required className="w-full border p-2 rounded" placeholder="Factory Unlocked" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Biometrics</label>
                <input type="text" name="biometrics" required className="w-full border p-2 rounded" placeholder="Face ID Working" />
              </div>
            </div>
          )}

          {category === 'laptops' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Processor</label>
                <input type="text" name="processor" required className="w-full border p-2 rounded" placeholder="Apple M2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">RAM</label>
                <input type="text" name="ram" required className="w-full border p-2 rounded" placeholder="16GB" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Storage Drive</label>
                <input type="text" name="storage_drive" required className="w-full border p-2 rounded" placeholder="512GB SSD" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Screen Size</label>
                <input type="text" name="screen_size" required className="w-full border p-2 rounded" placeholder="14-inch" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Graphics</label>
                <input type="text" name="graphics" required className="w-full border p-2 rounded" placeholder="Integrated" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Battery Cycle Count</label>
                <input type="number" name="battery_cycle_count" min="0" required className="w-full border p-2 rounded" placeholder="142" />
              </div>
            </div>
          )}

          {category === 'accessories' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Accessory Type</label>
                <input type="text" name="accessory_type" required className="w-full border p-2 rounded" placeholder="Charger" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Compatibility</label>
                <input type="text" name="compatibility" required className="w-full border p-2 rounded" placeholder="iPhone 14 series" />
              </div>
            </div>
          )}

          {category === 'other' && (
            <div>
              <label className="block mb-1 font-medium">Custom Features (JSON)</label>
              <textarea 
                name="custom_features" 
                required 
                rows={4}
                className="w-full border p-2 rounded font-mono text-sm" 
                placeholder='{"flight_time": "30 mins", "camera_resolution": "4K"}' 
              />
              <p className="text-sm text-gray-500 mt-1">Enter valid JSON for custom key-value pairs (e.g. Drones, Smartwatches).</p>
            </div>
          )}
        </div>

        <button type="submit" disabled={isLoading} className="w-full bg-[#003C3C] text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-900 disabled:opacity-50 transition-colors">
          {isLoading ? 'Uploading...' : 'Upload Gadget'}
        </button>
      </form>

      {message && <p className="mt-4 text-center font-medium">{message}</p>}
    </div>
  )
}