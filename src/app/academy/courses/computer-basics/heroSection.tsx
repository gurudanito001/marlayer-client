"use client"

import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const HeroSection = () => {
  const logoTeal = "#45B1A0";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCoursesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinkClasses = isScrolled
    ? "text-gray-300 hover:text-[#45B1A0]"
    : "text-gray-300 hover:text-white";

  return (
    <section className="relative flex flex-col pt-32 pb-20 px-6 md:px-12 lg:px-16 xl:px-28 bg-[#0B1A14] text-white overflow-hidden font-sans min-h-[85vh]">

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#45B1A0]/15 via-[#0B1A14]/0 to-transparent pointer-events-none"></div>

      {/* Integrated Navbar */}
      <nav className={`w-full left-0 top-0 z-[999] transition-all duration-300 ${isScrolled ? 'fixed bg-[#0B1A14]/90 backdrop-blur-lg shadow-lg py-4 border-b border-white/5' : 'absolute py-6'}`}>
        <div className="w-full max-w-[1900px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28 flex justify-between items-center relative">

          <div className="flex items-center">
            <Link href="/academy" className="flex items-baseline">
              <div className="">
                <Image src="/images/marlayer-logo.svg" width={24} height={24} alt="Marlayer Logo" />
              </div>
              <span
                className="font-extrabold text-2xl ml-0.5"
                style={{ color: logoTeal }}
              >
                ARLAYER
              </span>
              <span className="font-extrabold text-2xl text-white ml-2">ACADEMY</span>
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
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                className={`${navLinkClasses} font-medium transition-colors duration-200 text-sm flex items-center gap-1 outline-none`}
              >
                Courses
                <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${coursesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#0E1F18] rounded-xl shadow-2xl p-2 border border-white/10 origin-top animate-in fade-in zoom-in-95 duration-200 mt-2 ${coursesDropdownOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col text-gray-300 text-sm">
                  <li><Link href="/academy/courses/computer-basics" className="block px-4 py-2 hover:bg-white/5 hover:text-white rounded-lg transition-colors">Computer Fundamentals</Link></li>
                  <li><Link href="/academy/courses/frontend-development-1" className="block px-4 py-2 hover:bg-white/5 hover:text-white rounded-lg transition-colors">Frontend Development: 1</Link></li>
                  <li><Link href="/academy/courses/frontend-development-2" className="block px-4 py-2 hover:bg-white/5 hover:text-white rounded-lg transition-colors">Frontend Development: 2</Link></li>
                  <li><Link href="/academy/courses/backend-development" className="block px-4 py-2 hover:bg-white/5 hover:text-white rounded-lg transition-colors">Backend Development</Link></li>
                  <li><Link href="/academy/courses/mobile-app-development" className="block px-4 py-2 hover:bg-white/5 hover:text-white rounded-lg transition-colors">Mobile App Development</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Contact Us Button (Desktop) */}
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

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mt-12 md:mt-20 flex flex-col justify-center flex-grow">

        {/* Course Meta Tag */}
        <div className="inline-flex items-center gap-2 bg-[#45B1A0]/10 border border-[#45B1A0]/20 rounded-full px-4 py-1.5 mb-6 self-start">
          <span className="w-2 h-2 rounded-full bg-[#45B1A0] animate-pulse"></span>
          <span className="text-xs font-semibold text-[#45B1A0] tracking-wide uppercase">6-Week Intensive</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-semibold mb-6 leading-[1.1] tracking-tight text-white">
          Computer Fundamentals & <br className="hidden md:block" /> Office Productivity
        </h1>

        <p className="text-lg md:text-xl font-light text-gray-300 mb-10 max-w-3xl leading-relaxed">
          Go from absolute beginner to confident tech user in just 6 weeks. Master essential computer skills, cloud collaboration, and the core Microsoft Office suite to excel in any modern workplace.
        </p>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 mb-10 shadow-2xl">
          <h4 className="font-semibold text-2xl text-white mb-6">What You Will Achieve:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-base md:text-lg text-gray-300">
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-[#45B1A0] mr-3 flex-shrink-0 mt-0.5" />
              <span>Navigate operating systems and manage files securely.</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-[#45B1A0] mr-3 flex-shrink-0 mt-0.5" />
              <span>Create professional documents, spreadsheets, & presentations.</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-[#45B1A0] mr-3 flex-shrink-0 mt-0.5" />
              <span>Master professional email and calendar management.</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-[#45B1A0] mr-3 flex-shrink-0 mt-0.5" />
              <span>Collaborate seamlessly using cloud tools like OneDrive.</span>
            </li>
            <li className="flex items-start md:col-span-2">
              <CheckIcon className="w-6 h-6 text-[#45B1A0] mr-3 flex-shrink-0 mt-0.5" />
              <span>Build a hands-on Capstone Project to prove your real-world skills.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Link
            href="/academy/sign-up"
            className="bg-orange hover:bg-orange/85 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(255,165,0,0.3)] text-lg text-center w-full sm:w-auto"
          >
            Enroll Now
          </Link>
          <div className="flex flex-col">
            <span className="font-semibold text-white text-lg">Prerequisites:</span>
            <span className="text-gray-400 font-light">None. Just a willingness to learn!</span>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay (Updated for Dark Theme) */}
      <div className={`fixed inset-0 z-[1000] md:hidden ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Sidebar Content */}
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0B1A14] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col p-6 overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <header className="flex justify-between items-center mb-10 border-b border-white/10 pb-4">
            <Link href="/" className="flex items-center gap-1">
              <div className="relative w-6 h-6">
                <Image src="/images/marlayer-logo.svg" fill alt="Marlayer Logo" className="object-contain" />
              </div>
              <span className="font-extrabold text-lg text-white">
                M<span style={{ color: logoTeal }}>ARLAYER</span>
              </span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          <ul className="flex flex-col space-y-4">
            <li><Link href="/academy" className="text-lg font-medium text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li>
              <details className="group">
                <summary className="text-lg font-medium text-gray-300 hover:text-white flex justify-between items-center cursor-pointer list-none">Courses <ChevronDownIcon className="w-4 h-4 transition-transform group-open:rotate-180" /></summary>
                <ul className="mt-3 pl-4 space-y-3 border-l-2 border-white/10 ml-1">
                  <li><Link href="/academy/courses/computer-basics" className="text-gray-400 hover:text-[#45B1A0] block py-1" onClick={() => setMobileMenuOpen(false)}>Computer Fundamentals</Link></li>
                  <li><Link href="/academy/courses/frontend-development-1" className="text-gray-400 hover:text-[#45B1A0] block py-1" onClick={() => setMobileMenuOpen(false)}>Frontend Dev 1</Link></li>
                  <li><Link href="/academy/courses/frontend-development-2" className="text-gray-400 hover:text-[#45B1A0] block py-1" onClick={() => setMobileMenuOpen(false)}>Frontend Dev 2</Link></li>
                  <li><Link href="/academy/courses/backend-development" className="text-gray-400 hover:text-[#45B1A0] block py-1" onClick={() => setMobileMenuOpen(false)}>Backend Development</Link></li>
                  <li><Link href="/academy/courses/mobile-app-development" className="text-gray-400 hover:text-[#45B1A0] block py-1" onClick={() => setMobileMenuOpen(false)}>Mobile App Dev</Link></li>
                </ul>
              </details>
            </li>
            <li><Link href="/academy/plans" className="text-lg font-medium text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Learning Plans</Link></li>
            <li><Link href="/academy/faqs" className="text-lg font-medium text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>FAQs</Link></li>
            <li><Link href="/contact" className="text-lg font-medium text-[#45B1A0] mt-4 inline-block" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;