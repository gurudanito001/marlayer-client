"use client";

import { useState } from "react";
import Link from "next/link"; 
import Image from "next/image";
import { Search, ShoppingCart, Menu, X } from "lucide-react"; 
import { useCartStore } from "../store/cartStore";
import SearchModal from "../components/searchModal";
import CartDrawer from "../components/cartDrawer";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); 

  // Get total items in cart
  const cart = useCartStore((state) => state.cart);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E6F2F0] transition-all duration-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
          <div className="h-20 flex items-center justify-between">

            {/* --- Logo & Desktop Links --- */}
            <div className="flex items-center gap-10">
              <Link href="/" className="flex items-center gap-1.5 group select-none">
                <div className="relative flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                  <Image 
                    src="/images/marlayer-logo.svg" 
                    width={26} 
                    height={26} 
                    alt="Marlayer Logo" 
                    className="object-contain"
                  />
                </div>
                <span className="font-black text-2xl tracking-tight text-[#45B1A0] flex items-baseline">
                  <span className="text-[#0D2B1E] font-extrabold text-xl tracking-wide">ARLAYER</span>
                </span>
              </Link>
              
              <div className="hidden lg:flex items-center gap-8">
                {[
                  { name: "Phones", href: "/gadgets/Phones" },
                  { name: "Laptops", href: "/gadgets/laptops" },
                  { name: "Accessories", href: "/gadgets/accessories" }
                ].map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className="text-sm font-semibold text-[#235843] hover:text-[#45B1A0] tracking-wide transition-colors duration-150 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#45B1A0] hover:after:w-full after:transition-all after:duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* --- Right Actions Utility Area --- */}
            <div className="flex items-center gap-4 sm:gap-6">
              
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#235843] hover:text-[#45B1A0] hover:bg-[#E8F6F4] rounded-full transition-all duration-200"
                aria-label="Search items"
              >
                <Search className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* 3. Attached the onClick handler to open the drawer */}
              <button 
                onClick={() => setIsCartOpen(true)} 
                className="p-2 text-[#235843] hover:text-[#45B1A0] hover:bg-[#E8F6F4] rounded-full transition-all duration-200 relative"
                aria-label="View shopping cart"
              >
                <ShoppingCart className="w-5 h-5 stroke-[2.5]" />
                {cartItemCount > 0 ? (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#D97706] text-[9px] font-bold text-white ring-2 ring-white">
                    {cartItemCount}
                  </span>
                ) : (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#D97706] ring-2 ring-white" />
                )}
              </button>

              <Link href="/contact" className="hidden sm:inline-flex items-center bg-[#0D2B1E] hover:bg-[#1B4D3A] text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-lg transition-colors shadow-sm">
                Get Corporate Quote
              </Link>
              
              <button onClick={toggleMenu} className="p-2 text-[#0D2B1E] hover:bg-[#E8F6F4] rounded-xl lg:hidden transition-colors">
                <Menu className="w-6 h-6 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>

        {/* --- Mobile Menu Drawout Overlay System --- */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-[#0D2B1E]/40 backdrop-blur-sm lg:hidden">
            <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white p-6 shadow-xl flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-[#E6F2F0] pb-4">
                <span className="font-extrabold text-sm text-[#0D2B1E] uppercase tracking-wider">Navigation</span>
                <button onClick={toggleMenu} className="p-1.5 rounded-lg hover:bg-[#F4F9F8]">
                  <X className="w-5 h-5 text-[#0D2B1E]" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { name: "Phones", href: "/gadgets/Phones" },
                  { name: "Laptops", href: "/gadgets/laptops" },
                  { name: "Accessories", href: "/gadgets/accessories" }
                ].map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    onClick={toggleMenu}
                    className="text-base font-bold text-[#235843] hover:text-[#45B1A0] py-1 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link href="/contact" onClick={toggleMenu} className="mt-auto w-full text-center bg-[#0D2B1E] text-white text-xs font-bold tracking-wider uppercase py-3 rounded-xl shadow-sm">
                Get Corporate Quote
              </Link>
            </div>
          </div>
        )}
        
      </nav>

      {/* Overlays Rendered Here */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* 4. Placed the CartDrawer component */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}