"use client"

import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";


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

  const navLinkClasses = isScrolled 
    ? "text-gray-300 hover:text-[#45B1A0]" 
    : "text-gray-300 hover:text-white";

  return (
    <section className="relative flex flex-col pt-32 pb-14 px-3 lg:px-14 xl:px-28 bg-primary text-white mb-8 font-sans">
      
      {/* Integrated Navbar */}
      <nav className={`w-full left-0 top-0 z-[999] transition-all duration-300 ${isScrolled ? 'fixed bg-[#0E1F18]/90 backdrop-blur-lg shadow-lg py-4 border-b border-white/5' : 'absolute py-6'}`}>
        <div className="w-full max-w-[1900px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28 flex justify-between items-center relative">
          
          <div className="flex items-center">
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
          </div>

          {/* Desktop Navigation Links - Centered Pill */}
          <div className="hidden md:flex items-center space-x-6 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 backdrop-blur-sm absolute left-1/2 transform -translate-x-1/2">
              <Link 
                href="/academy" 
                className={`${navLinkClasses} font-medium transition-colors duration-200 text-sm`}
              >
                Home
              </Link>
    
              {/* Courses Dropdown */}
              <div className="relative group">
                <button className={`${navLinkClasses} font-medium transition-colors duration-200 text-sm flex items-center gap-1 outline-none`}>
                  Courses
                  <ChevronDownIcon className="w-3 h-3" />
                </button>
                
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-xl p-2 hidden group-hover:block border border-gray-100 origin-top animate-in fade-in zoom-in-95 duration-200">
                  <ul className="flex flex-col text-gray-800 text-sm">
                    <li><Link href="/academy/courses/computer-basics" className="block px-4 py-2 hover:bg-gray-50 rounded-lg">Computer Fundamentals</Link></li>
                    <li><Link href="/academy/courses/frontend-development-1" className="block px-4 py-2 hover:bg-gray-50 rounded-lg">Frontend Development: 1</Link></li>
                    <li><Link href="/academy/courses/frontend-development-2" className="block px-4 py-2 hover:bg-gray-50 rounded-lg">Frontend Development: 2</Link></li>
                    <li><Link href="/academy/courses/backend-development" className="block px-4 py-2 hover:bg-gray-50 rounded-lg">Backend Development</Link></li>
                    <li><Link href="/academy/courses/mobile-app-development" className="block px-4 py-2 hover:bg-gray-50 rounded-lg">Mobile App Development</Link></li>
                  </ul>
                </div>
              </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Contact Us Button (Desktop) */}
            <Link 
              href="/contact" 
              className={`hidden md:inline-flex items-center justify-center px-6 py-2 border rounded-full text-sm font-medium transition-colors duration-300 ${isScrolled ? 'border-[#45B1A0] text-[#45B1A0] hover:bg-[#45B1A0] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#45B1A0]'}`}
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className={`md:hidden btn btn-ghost btn-circle ${isScrolled ? 'text-gray-400' : 'text-white'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mt-8">
        <h2 className="text-4xl lg:text-7xl font-semibold mb-3 p-0">Frontend Development: 2</h2>
        <p className="text-lg font-light mt-5 mb-4">
          This hands-on course provides an in-depth introduction to JavaScript, the foundation of modern web development, and React, the popular JavaScript library for building interactive user interfaces. Students will start with the essentials of JavaScript, focusing on its syntax, data structures, and core programming concepts. Through a series of practical exercises, they&apos;ll develop strong programming fundamentals, including functions, asynchronous programming, and working with APIs.
        </p>

        <p className="text-lg font-light mt-5 mb-5">
          Once students are comfortable with JavaScript, the course will transition into React, where they&apos;ll learn to build powerful, scalable, and dynamic front-end applications. Key React topics will include state management, component-based architecture, hooks, and the context API. Students will also learn to integrate third-party libraries, manage application state effectively, and optimize for performance.
        </p>
        <h4 className="font-550 text-xl mb-3">Course Objectives:</h4>
        <ul className=" list-none list-outside flex flex-col gap-1 text-lg mb-5">
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Write efficient, modular JavaScript code and understand core programming principles.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Build dynamic web applications with React, using components, state, and hooks.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Fetch and integrate data from external APIs to create interactive applications.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" />Manage application state effectively and create scalable codebases.
          </li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" />Deploy their applications and understand best practices for modern web development.
          </li>
        </ul>

        <h4 className="font-550 text-xl mb-2">Prerequisites:</h4>
        <p className="text-lg font-light mb-4">
          Basic knowledge of HTML and CSS is recommended. No prior programming experience is necessary, although familiarity with basic coding concepts will be beneficial.
          This course is ideal for those looking to build a strong foundation in JavaScript and React, and create professional, interactive web applications.
        </p>
        <div className="mt-10">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeiNN8Y4g7MpvCxE8jGdHfgMvaXOkIehmuDVR9exZI8u7_Kcw/viewform" className=" btn btn-lg bg-secondary text-white rounded-lg px-10">Enroll Now</a>
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
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col p-6 overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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

          <ul className="flex flex-col space-y-4">
            <li><Link href="/academy" className="text-xl font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li>
              <details className="group">
                <summary className="text-xl font-medium text-gray-800 flex justify-between items-center cursor-pointer list-none">Courses <ChevronDownIcon className="w-4 h-4 transition-transform group-open:rotate-180" /></summary>
                <ul className="mt-2 pl-4 space-y-3 border-l-2 border-gray-100 ml-1">
                  <li><Link href="/academy/courses/computer-basics" className="text-gray-600 block py-1" onClick={() => setMobileMenuOpen(false)}>Computer Fundamentals</Link></li>
                  <li><Link href="/academy/courses/frontend-development-1" className="text-gray-600 block py-1" onClick={() => setMobileMenuOpen(false)}>Frontend Dev 1</Link></li>
                  <li><Link href="/academy/courses/frontend-development-2" className="text-gray-600 block py-1" onClick={() => setMobileMenuOpen(false)}>Frontend Dev 2</Link></li>
                  <li><Link href="/academy/courses/backend-development" className="text-gray-600 block py-1" onClick={() => setMobileMenuOpen(false)}>Backend Development</Link></li>
                  <li><Link href="/academy/courses/mobile-app-development" className="text-gray-600 block py-1" onClick={() => setMobileMenuOpen(false)}>Mobile App Dev</Link></li>
                </ul>
              </details>
            </li>
            <li><Link href="/academy/plans" className="text-xl font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Learning Plans</Link></li>
            <li><Link href="/academy/faqs" className="text-xl font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>FAQs</Link></li>
            <li><Link href="/contact" className="text-xl font-medium text-[#45B1A0]" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HeroSection