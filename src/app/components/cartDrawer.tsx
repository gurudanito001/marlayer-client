"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Trash2, ShoppingCart, ChevronRight, Plus, Minus } from "lucide-react";
import { useCartStore } from "@/app/store/cartStore"; // Assumes you have a Zustand store with cart logic

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // Pulling state and actions from your Zustand store
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCartStore();

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[150] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[200] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2EFEB] bg-[#FAFDFB]">
          <div className="flex items-center gap-3">
            <div className="bg-[#45B1A0]/10 p-2 rounded-lg text-[#45B1A0]">
              <ShoppingCart size={20} />
            </div>
            <h2 className="text-lg font-extrabold text-[#0D2B1E] tracking-tight">Requisition Cart</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-[#416B5C] hover:text-[#0D2B1E] hover:bg-[#E2EFEB] rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items Area */}
        <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-4 bg-white">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center opacity-70">
              <ShoppingCart size={48} className="text-[#E2EFEB] mb-4" />
              <p className="text-lg font-bold text-[#0D2B1E] mb-1">Your cart is empty</p>
              <p className="text-sm text-[#416B5C]">No hardware nodes selected for acquisition.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 border border-[#E2EFEB] rounded-2xl bg-[#FAFDFB] relative group">
                <div className="relative w-20 h-20 bg-white rounded-xl border border-[#E2EFEB] flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                </div>
                
                <div className="flex flex-col flex-grow justify-between py-1">
                  <div>
                    <h4 className="text-sm font-bold text-[#0D2B1E] line-clamp-1 pr-6">{item.name}</h4>
                    <p className="text-xs text-[#416B5C] font-semibold">${Number(item.price).toLocaleString()}</p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center bg-white border border-[#E2EFEB] rounded-lg">
                      <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="p-1 text-[#416B5C] hover:text-[#0D2B1E] transition-colors"><Minus size={14} /></button>
                      <span className="text-xs font-bold text-[#0D2B1E] w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 text-[#416B5C] hover:text-[#0D2B1E] transition-colors"><Plus size={14} /></button>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-4 right-4 text-[#416B5C] hover:text-red-500 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout Actions */}
        {cart.length > 0 && (
          <div className="border-t border-[#E2EFEB] p-6 bg-[#FAFDFB] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#416B5C] uppercase tracking-wider">Subtotal</span>
              <span className="text-2xl font-black text-[#0D2B1E]">${getCartTotal().toLocaleString()}</span>
            </div>
            <p className="text-[10px] text-[#416B5C] text-center mb-2">Taxes and logistics calculated at checkout.</p>
            <button className="w-full flex items-center justify-between bg-[#0D2B1E] text-white py-4 px-6 rounded-xl font-bold hover:bg-[#45B1A0] transition-colors shadow-lg">
              <span>Proceed to Checkout</span>
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}