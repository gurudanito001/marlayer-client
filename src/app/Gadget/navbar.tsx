"use client";

import Link from "next/link"; 
import Image from "next/image";
import { Search, ShoppingCart, X } from "lucide-react"; 
import { useState } from "react"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-1 lg:py-2 px-6 md:px-8 lg:px-16 sticky top-0 z-50">
      <div className="w-full py-4 flex items-center justify-between">

       
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image src="/images/marlayer-logo.svg" width={30} height={30} alt="Marlayer Logo" />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
          <Link href="/Phones" className="text-gray-700 hover:text-blue-600 transition">
            Phones
          </Link>

          <Link href="/Phones/Laptops" className="text-gray-700 hover:text-blue-600 transition">
            Laptops
          </Link>

          <Link href="/accessories" className="text-gray-700 hover:text-blue-600 transition">
            Accessories
          </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 text-gray-700 hover:text-blue-600 cursor-pointer transition" />
          <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-blue-600 cursor-pointer transition" />
          
          {/* Mobile Menu Button (Hamburger Icon) */}
          <button
            onClick={toggleMenu}
            className="btn btn-ghost btn-circle avatar lg:hidden"
            aria-label="Open mobile menu"
            aria-expanded={isMenuOpen}
          >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-[55] md:hidden"
              onClick={toggleMenu} // Close menu when clicking overlay
            ></div>
          )}

         
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[60] lg:hidden
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={toggleMenu} aria-label="Close mobile menu">
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>
            <ul className="menu p-4">
              {/* Links for mobile dropdown */}
              <li><Link href="/phones" className="text-base text-gray-800 py-3" onClick={toggleMenu}>Phones</Link></li>
              <li><Link href="/laptops" className="text-base text-gray-800 py-3" onClick={toggleMenu}>Laptops</Link></li>
              <li><Link href="/accessories" className="text-base text-gray-800 py-3" onClick={toggleMenu}>Accessories</Link></li>
              
            </ul>
          </div>
        </div>
      </div> 
    </nav>
  );
}