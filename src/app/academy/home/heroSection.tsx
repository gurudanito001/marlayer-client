"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

const HeroSection = ()=>{
  const logoTeal = "#45B1A0";
  const [isScrolled, setIsScrolled] = useState(false);

  const phrases = ["through learning"];

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
    <section className="relative w-full h-screen max-h-[700px] xl:max-h-[850px] flex items-center bg-[#45B1A0] overflow-hidden">
      
      {/* Integrated Navbar */}
      <nav className={`w-full left-0 top-0 z-[999] transition-all duration-300 ${isScrolled ? 'fixed bg-white  backdrop-blur-lg shadow-lg py-4' : 'absolute py-8'}`}>
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
                <a 
                  href="#coursePackages"
                  onClick={(e) => {
                    const element = document.getElementById('coursePackages');
                    if (element) {
                      e.preventDefault();
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`${navLinkClasses} font-medium transition-colors duration-200 py-1 text-[15px] border-b-2 border-transparent`}
                >
                  Courses
                </a>
      
                <Link 
                  href="/academy/plans" 
                  className={`${navLinkClasses} font-medium transition-colors duration-200 py-1 text-[15px] border-b-2 border-transparent`}
                >
                  Learning Plans
                </Link>
      
                <Link 
                  href="/academy/faqs" 
                  className={`${navLinkClasses} font-medium transition-colors duration-200 py-1 text-[15px] border-b-2 border-transparent`}
                >
                  FAQs
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
                    <a href="#coursePackages" className="py-2 hover:bg-white/10">Courses</a>
                  </li>
                  <li>
                    <Link href="/academy/plans" className="py-2 hover:bg-white/10">Learning Plans</Link>
                  </li>
                  <li>
                    <Link href="/academy/faqs" className="py-2 hover:bg-white/10">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/images/homepage/academy-banner.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001714] via-[#001700]/90 to-transparent"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1900px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28 flex flex-col justify-center">
        <article className="max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white mb-6 tracking-tight leading-10">
            Unlock Your Potential <br className="hidden md:block" />
            <span style={{ color: logoTeal }}>through learning</span>
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed max-w-lg font-light">
            Explore a world of knowledge with engaging courses designed to inspire and empower your growth.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href="/academy/sign-up"
              className="bg-primary border border-primary hover:bg-primary-2 text-white px-8 py-2.5 rounded shadow-lg font-medium transition-colors duration-300">
              Register Now
            </Link>
            <a 
              href='#coursePackages' 
              onClick={(e) => {
                const element = document.getElementById('coursePackages');
                if (element) {
                  e.preventDefault();
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-2.5 rounded font-medium transition-colors duration-300">
              View Courses
            </a>
          </div>
        </article>
      </div>

      {/* Scroll Down Indicator */}
      

    </section>
  );
};

export default HeroSection;
