"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const logoTeal = "#45B1A0";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-primary overflow-hidden font-sans selection:bg-blue-500/30">
      
      {/* 1. Background Image (Doodles) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/images/tech-academy/academy-hero-bg.jpg')" }} /* Update this path to wherever you save the attached SVG */
      ></div>

      {/* 2. Green bg-primary Overlay (Makes the image barely visible) */}
      {/* Adjust the opacity-95 down (e.g., opacity-90) if you want to see the image more clearly */}
      <div className="absolute inset-0 z-0 bg-primary/90 pointer-events-none"></div>

      {/* Subtle Background Glow/Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030614]/0 to-transparent pointer-events-none z-0"></div>

      {/* Navbar */}
      <nav className={`w-full fixed top-0 z-[999] transition-all duration-300 ${isScrolled ? 'bg-[#0E1F18]/80 backdrop-blur-lg py-4 border-b border-white/5' : 'py-6'}`}>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
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
            <span className='font-extrabold text-2xl text-white ml-2'>ACADEMY</span>
          </Link>

          {/* Desktop Centered Pill Navigation */}
          <div className="hidden md:flex items-center space-x-6 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 backdrop-blur-sm">
            
            <a 
              href="/academy#coursePackages"
              onClick={(e) => {
                const element = document.getElementById('coursePackages');
                if (element) {
                  e.preventDefault();
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-white hover:text-primary-2 text-sm font-medium transition-colors"
            >
              Courses
            </a>
            <a 
              href="/academy#testimonials"
              onClick={(e) => {
                const element = document.getElementById('testimonials');
                if (element) {
                  e.preventDefault();
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-white hover:text-primary-2 text-sm font-medium transition-colors"
            >
              Testimonial
            </a>
            <a 
              href="/academy#faqs"
              onClick={(e) => {
                const element = document.getElementById('faqs');
                if (element) {
                  e.preventDefault();
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-white hover:text-primary-2 text-sm font-medium transition-colors"
            >
              FAQs
            </a>
          </div>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/academy/sign-up" 
              className="hidden md:flex bg-orange hover:bg-orange/85 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all"
            >
              Sign Up
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-white p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 mx-auto">
        
        {/* Social Proof Pill (Added to match your design) */}
        <div className="flex items-center gap-3 bg-primary-2/50 border border-white/10 rounded-full pl-2 pr-4 py-1.5 mb-8 backdrop-blur-sm">
          <div className="flex -space-x-2">
            {/* Placeholder avatars to match the design - swap with real images later */}
            <div className="w-7 h-7 rounded-full bg-gray-500 border-2 border-[#030614] overflow-hidden"><Image src="/images/tech-academy/damilare.png" alt="student" width={20} height={20} /></div>
            <div className="w-7 h-7 rounded-full bg-gray-400 border-2 border-[#030614] overflow-hidden"><Image src="/images/tech-academy/david.jpeg" alt="student" width={20} height={20} /></div>
            <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-[#030614] overflow-hidden"><Image src="/images/tech-academy/sis-johnson.png" alt="student" width={20} height={20} /></div>
            <div className="w-7 h-7 rounded-full bg-blue-600 border-2 border-[#030614] flex items-center justify-center text-[7px] font-bold text-white">500+</div>
          </div>
          <div className="flex items-center text-xs text-gray-300 font-medium">
            <span className="text-yellow-400 mr-1">★</span> 4.6 <span className="opacity-60 ml-1">( Based on Student Reviews )</span>
          </div>
        </div>

        {/* Headlines */}
        <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-bold text-white mb-6 tracking-tight leading-[1.15]">
          Build Products. Launch Careers.  <br className="hidden md:block" />
          Find Your Tribe.
        </h1>
        
        <p className="text-gray-300 md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto font-light">
          Master the skills to build your own startup or stand out to employers with real-world product experience. At Marlayer Academy, you don't just learn to code—you grow alongside a community dedicated to your success.
        </p>

        {/* Centered Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link 
            href="/academy/sign-up"
            className="bg-orange hover:bg-orange/85 text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 min-w-[160px]"
          >
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
            className="bg-primary-2/10 border border-primary-2/5 text-white hover:bg-primary-2/20 px-8 py-3.5 rounded-full font-medium transition-all duration-300 min-w-[160px] backdrop-blur-sm"
          >
            View Courses
          </a>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 z-[1000] md:hidden ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Sidebar Content */}
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col p-6 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <header className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
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
            <button onClick={() => setMobileMenuOpen(false)} className="btn btn-ghost btn-circle btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          <ul className="flex flex-col space-y-6">
            
            <li>
              <a 
                href="#coursePackages" 
                className="text-xl font-medium text-gray-800 hover:text-primary-2 transition-colors" 
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  const element = document.getElementById('coursePackages');
                  if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Courses
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                className="text-xl font-medium text-gray-800 hover:text-primary-2 transition-colors" 
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  const element = document.getElementById('testimonials');
                  if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Testimonial
              </a>
            </li>
            <li>
              <a 
                href="#faqs" 
                className="text-xl font-medium text-gray-800 hover:text-primary-2 transition-colors" 
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  const element = document.getElementById('faqs');
                  if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                FAQs
              </a>
            </li>
          </ul>

          <div className="mt-auto">
             <Link href="/academy/sign-up" className="block w-full text-center bg-[#45B1A0] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#369b8b] transition-all transform hover:-translate-y-1" onClick={() => setMobileMenuOpen(false)}>
                Sign Up
             </Link>
             <p className="text-center text-gray-400 text-sm mt-6">© Marlayer {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;