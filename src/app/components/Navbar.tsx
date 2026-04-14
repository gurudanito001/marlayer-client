'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const logoTeal = "#45B1A0";
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Determine which pages should have the transparent-to-solid scroll effect.
  const transparentHeaderPages = ['/', '/software', '/software/About', '/software/Services', '/software/Projects'];
  const isTransparentHeroPage = transparentHeaderPages.includes(pathname) || 
    pathname.startsWith('/software/Projects/');

  // 2. The Navbar should be solid white IF we are NOT on one of the pages above, 
  // OR if we are on one of those pages and have scrolled down.
  const showSolidNav = !isTransparentHeroPage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/software' },
    { name: 'About', href: '/software/About' },
    { name: 'Service', href: '/software/Services' },
    { name: 'Project', href: '/software/Projects' },
    { name: 'Contact', href: '/software/Contact' },
  ];

  return (
    <>
      <nav 
        className={`${
          isTransparentHeroPage ? 'fixed' : 'sticky'
        } top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out flex justify-between items-center py-4 lg:py-6 px-4 md:px-8 lg:px-16 ${
          showSolidNav ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link href="/" className="flex items-baseline ml-3">
            <div>
              <Image src="/images/marlayer-logo.svg" width={24} height={24} alt="Marlayer Logo" />
            </div>
            <span 
              className="font-extrabold text-2xl"
              style={{ color: logoTeal }}
            >
              ARLAYER
            </span>
          </Link>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-[15px] font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-[#45B1A0] font-semibold' // Active Teal Color
                        : showSolidNav 
                          ? 'text-gray-600 hover:text-[#45B1A0]'
                          : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Signup Button */}
          <div>
            <Link
              href="/signup"
              className={`px-8 py-2.5 rounded-full border-[2px] text-sm font-semibold transition-all duration-300 ${
                showSolidNav 
                  ? 'border-[#45B1A0] text-gray-800 hover:bg-[#45B1A0] hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-gray-900'         
              }`}
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
            <svg 
              className={`h-6 w-6 ${showSolidNav ? 'text-gray-800' : 'text-white'}`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAYS --- */}
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
              <span className="font-bold text-primary text-lg" style={{ color: logoTeal }}>Marlayer</span>
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
                        ? 'text-[#45B1A0] font-semibold'
                        : 'text-gray-600 hover:text-[#45B1A0]'
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
              className="block w-full text-center px-8 py-2.5 rounded-full border-[2px] border-[#45B1A0] text-gray-800 text-sm font-semibold hover:bg-[#45B1A0] hover:text-white transition-all duration-300"
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