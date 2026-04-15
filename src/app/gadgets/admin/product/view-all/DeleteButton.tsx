'use client'

import { useState } from 'react'
import { deleteGadget } from '@/app/lib/actions/gadgets'

export default function DeleteButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleDelete() {
    const isConfirmed = window.confirm('Are you sure you want to delete this gadget? This action cannot be undone.')
    if (!isConfirmed) return
    
    setIsDeleting(true)
    
    try {
      await deleteGadget(id)
      // Next.js server action handles revalidating the path so the table will automatically update
    } catch (error) {
      console.error('Error deleting gadget:', error)
      alert('Failed to delete the gadget.')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button 
      onClick={handleDelete}
      disabled={isDeleting}
      className="btn btn-sm bg-section-red hover:bg-red-900 border-none text-white transition-colors"
    >
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  )
}