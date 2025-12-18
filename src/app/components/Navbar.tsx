'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define your navigation links here
  const navLinks = [
    { name: 'Home', href: '/Software' },
    { name: 'About', href: '/Software/About' },
    { name: 'Service', href: '/Software/Services' },
    { name: 'Project', href: '/Software/Projects' },
    { name: 'Contact', href: '/Software/Contact' },
  ];

  return (
    <>
      <nav className="flex justify-between items-center bg-white shadow-sm py-4 lg:py-6 px-0 md:px-8 lg:px-16 sticky top-0 z-50 relative">
        
        {/* Logo Section */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/" className="flex items-center ml-3">
            <Image src="/images/marlayer-logo.svg" width={25} height={25} alt="Marlayer Logo" />
            <span className="font-extrabold text-primary text-xl">arlayer Software</span>
          </Link>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-10">
          {/* Navigation Links */}
          <ul className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-[15px] font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-[#5B5BF5] font-semibold' // Active Blue Color
                        : 'text-gray-500 hover:text-[#5B5BF5]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Signup Button*/}
          <div>
            <Link
              href="/signup"
              className="px-8 py-2.5 rounded-full border-[2px] border-[#FCE566] text-gray-800 text-sm font-semibold hover:bg-[#FCE566] transition-all duration-300"
            >
              Signup
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(true)} 
            aria-label="Open menu"
            className="p-2 focus:outline-none"
          >
           
            <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          
         
          <div className="flex justify-between items-center mb-12">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <Image src="/images/marlayer-logo.svg" width={24} height={24} alt="Marlayer Logo" />
              <span className="font-bold text-primary text-lg">Marlayer</span>
            </Link>
            
            <button 
              onClick={() => setIsMenuOpen(false)} 
              aria-label="Close menu"
              className="p-1 rounded-full hover:bg-gray-100 transition"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-xl font-medium block transition-colors duration-200 ${
                      isActive 
                        ? 'text-[#5B5BF5] font-semibold'
                        : 'text-gray-600 hover:text-[#5B5BF5]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

         
          <div className="mt-auto mb-4">
            <Link
              href="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-8 py-2.5 rounded-full border-[2px] border-[#FCE566] text-gray-800 text-sm font-semibold hover:bg-[#FCE566] transition-all duration-300"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;