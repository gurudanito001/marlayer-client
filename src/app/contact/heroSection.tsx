"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  const logoTeal = "#45B1A0";
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar scroll logic (kept exactly from your HeroSection)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClasses = isScrolled 
    ? "text-gray-600 hover:text-[#45B1A0] hover:border-[#45B1A0]" 
    : "text-gray-300 hover:text-white hover:border-white";

  return (
    <section className="relative w-full h-full min-h-[600px] xl:min-h-[750px] flex items-center bg-gray-900 overflow-hidden">
      
      {/* Integrated Navbar (Copied exactly from your HeroSection) */}
      <nav className={`w-full left-0 top-0 z-[999] transition-all duration-300 ${isScrolled ? 'fixed bg-white backdrop-blur-lg shadow-lg py-4' : 'absolute py-8'}`}>
        <div className="w-full max-w-[1900px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28 flex justify-between items-center">
          
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-baseline">
              <div className="">
                <Image src="/images/marlayer-logo.svg" width={24} height={24} alt="Marlayer Logo" />
              </div>
              <span 
                className="font-extrabold text-2xl ml-0.5"
                style={{ color: logoTeal }}
              >
                ARLAYER
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/academy" 
                className={`${navLinkClasses} font-medium transition-colors duration-200 py-1 text-[15px] border-b-2 border-transparent`}
              >
                Tech Academy
              </Link>
    
              <Link 
                href="/software" 
                className={`${navLinkClasses} font-medium transition-colors duration-200 py-1 text-[15px] border-b-2 border-transparent`}
              >
                Software Solutions
              </Link>
    
              <Link 
                href="/gadgets" 
                className={`${navLinkClasses} font-medium transition-colors duration-200 py-1 text-[15px] border-b-2 border-transparent`}
              >
                Flagship Gadgets
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <div className="dropdown dropdown-end md:hidden">
              <div tabIndex={0} role="button" className={`btn btn-ghost btn-circle avatar ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#0b1021] border border-white/10 text-white rounded-md z-10 mt-3 w-52 p-2 shadow-lg"
              >
                <li>
                  <Link href="/academy" className="py-2 hover:bg-white/10">Academy</Link>
                </li>
                <li>
                  <Link href="/software" className="py-2 hover:bg-white/10">Software</Link>
                </li>
                <li>
                  <Link href="/gadgets" className="py-2 hover:bg-white/10">Gadgets</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Background Image Container */}
      {/* Note: Update the URL to the image of the team putting hands together */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact/contact-team-bg.jpg')" }} 
      >
        {/* Dark overlay to ensure text and form readability */}
        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1900px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28 flex flex-col justify-center mt-24">
        
        <div className="max-w-3xl w-full">
          {/* Inspired Typography */}
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-10 tracking-tight leading-tight">
            Get in touch <br className="hidden md:block" />
            with us
          </h1>

          

          {/* Pill Tags (Inspired by "Recent search" section in your image) */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <span className="text-white/80 text-sm font-medium mr-2">Enquire About:</span>
            <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-colors">
              Tech Academy
            </button>
            <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-colors">
              Software Solutions
            </button>
            <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-colors">
              Flagship Gadgets
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;