"use client";

// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link"; 
import Image from "next/image";
import { Search, ShoppingCart, Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E6F2F0] transition-all duration-200">
      {/* Top Multi-Tone Accent Accent to match Hero */}
{/*       <div className="h-1 bg-gradient-to-r from-[#45B1A0] via-[#F59E0B] to-[#0D2B1E]" />
 */}
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
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { name: "Phones", href: "/gadgets/Phones" },
                { name: "Laptops", href: "/gadgets/Laptops" },
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
            
            {/* Global Search Button */}
            <button 
              className="p-2 text-[#235843] hover:text-[#45B1A0] hover:bg-[#E8F6F4] rounded-full transition-all duration-200"
              aria-label="Search items"
            >
              <Search className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Shopping Cart Button with Dynamic Accent Badge */}
            <button 
              className="p-2 text-[#235843] hover:text-[#45B1A0] hover:bg-[#E8F6F4] rounded-full transition-all duration-200 relative"
              aria-label="View shopping cart"
            >
              <ShoppingCart className="w-5 h-5 stroke-[2.5]" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#D97706] ring-2 ring-white" />
            </button>

            {/* Action Quote Button (Desktop only) */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center bg-[#0D2B1E] hover:bg-[#1B4D3A] text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              Get Corporate Quote
            </Link>
            
            {/* Mobile Hamburger Menu Control */}
            <button
              onClick={toggleMenu}
              className="p-2 text-[#0D2B1E] hover:bg-[#E8F6F4] rounded-xl lg:hidden transition-colors"
              aria-label="Toggle navigation system menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-6 h-6 stroke-[2]" />
            </button>
          </div>

        </div>
      </div>

      {/* --- Mobile Menu Drawout Overlay System --- */}
      <div 
        className={`fixed inset-0 bg-[#0D2B1E]/40 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={toggleMenu}
      />

      {/* Mobile Drawer Sheet */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[70] lg:hidden transform transition-transform duration-300 ease-in-out border-l border-[#E2EFEB]
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#F0F7F5]">
          <span className="font-black text-xl text-[#45B1A0]">
            M<span className="text-[#0D2B1E] font-bold text-base tracking-wide">ARLAYER</span>
          </span>
          <button 
            onClick={toggleMenu} 
            className="p-2 text-[#0D2B1E] hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
        
        <div className="flex flex-col justify-between h-[calc(100%-80px)] p-6">
          <ul className="space-y-2">
            {[
              { name: "Phones", href: "/gadgets/Phones" },
              { name: "Laptops", href: "/gadgets/Laptops" },
              { name: "Accessories", href: "/gadgets/accessories" }
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="block text-base font-bold text-[#0D2B1E] hover:text-[#45B1A0] hover:bg-[#FAFDFD] p-3 rounded-xl transition-all border border-transparent hover:border-[#E6F3F1]" 
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Call for Mobile Drawer Footer */}
          <div className="space-y-3">
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="flex items-center justify-center w-full bg-[#45B1A0] text-white font-bold py-3.5 rounded-xl shadow-md text-sm"
            >
              Request a Quote
            </Link>
            <p className="text-center text-[11px] text-[#557D71] font-semibold tracking-wide">
              Procurement Solutions · Nigeria
            </p>
          </div>
        </div>
      </div> 

    </nav>
  );
}