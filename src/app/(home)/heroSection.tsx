// components/HeroSection.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const logoTeal = "#45B1A0";
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phrases = ["Software Solutions", "Tech Education", "Flagship Gadgets"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      let nextSpeed = isDeleting ? 50 : 150;

      if (!isDeleting && text === fullText) {
        nextSpeed = 2000; // Pause at end of phrase
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        nextSpeed = 500; // Pause before starting new phrase
      }

      setTypingSpeed(nextSpeed);
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]); // phrases is constant

  useEffect(() => {
    const handleScroll = () => {
      // When scrollY is greater than 10, navbar becomes sticky
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClasses = isScrolled 
    ? "text-gray-300 hover:text-[#45B1A0] hover:border-[#45B1A0]" 
    : "text-gray-300 hover:text-white hover:border-white";

  return (
    <section className="relative w-full h-screen max-h-[800px] xl:max-h-[950px] flex items-center bg-[#45B1A0] overflow-hidden">
      
      {/* Integrated Navbar */}
      <nav className={`w-full left-0 top-0 z-[999] transition-all duration-300 ${isScrolled ? 'fixed bg-[#0E1F18]  backdrop-blur-lg shadow-lg py-2 lg:py-4' : 'absolute py-8'}`}>
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

            {/* Desktop Navigation Links - Centered */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
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
            
            <div className="flex items-center gap-4">
              {/* Contact Us Button (Desktop) */}
              <Link 
                href="/contact" 
                className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 border rounded-full font-medium transition-colors duration-300 ${isScrolled ? 'border-[#45B1A0] text-[#45B1A0] hover:bg-[#45B1A0] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#45B1A0]'}`}
              >
                Contact Us
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className={`md:hidden btn btn-ghost btn-circle ${isScrolled ? 'text-gray-600' : 'text-white'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

      {/* Background Image Container */}
      {/* Update the URL to point to your actual isometric background image */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-right lg:bg-center"
        style={{ backgroundImage: "url('/images/homepage/glass-house-2.jpg')" }}
      >

        {/* Overlay: Solid color with opacity to cover image but keep it visible */}
        <div className="absolute inset-0 bg-[#001714]/70"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1900px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28 flex flex-col justify-center items-center text-center">
        <article className="max-w-5xl flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white mb-6 tracking-tight leading-10">
            Leverage On World Class <br className="hidden md:block" />
            <span style={{ color: logoTeal }}>{text}</span>
            <span className="animate-pulse text-white">|</span>
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed max-w-lg font-light">
            We train innovators, We build powerful software, We provide reliable gadgets for your business needs.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href='/#ecosystem' 
              onClick={(e) => {
                const element = document.getElementById('ecosystem');
                if (element) {
                  e.preventDefault();
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary border border-primary hover:bg-primary-2 text-white px-8 py-2.5 rounded shadow-lg font-medium transition-colors duration-300">
              Learn More
            </a>
            <Link href="/contact" className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-2.5 rounded font-medium transition-colors duration-300">
              Get in Touch
            </Link>
          </div>
        </article>
      </div>

      {/* Scroll Down Indicator */}
      {/* <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={(e) => {
            const element = document.getElementById('ecosystem');
            if (element) {
              e.preventDefault();
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
      >
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/20 group-hover:bg-white/10 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 text-white/70 group-hover:text-white transition-colors" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <span className="text-white/60 text-[10px] tracking-widest uppercase font-light group-hover:text-white/90 transition-colors">
          Scroll Down
        </span>
      </button> */}

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 z-[1000] md:hidden ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Sidebar Content */}
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col px-6 py-4 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
              <Link href="/academy" className="text-xl font-medium text-gray-800 hover:text-[#45B1A0] transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Tech Academy
              </Link>
            </li>
            <li>
              <Link href="/software" className="text-xl font-medium text-gray-800 hover:text-[#45B1A0] transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Software Solutions
              </Link>
            </li>
            <li>
              <Link href="/gadgets" className="text-xl font-medium text-gray-800 hover:text-[#45B1A0] transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Flagship Gadgets
              </Link>
            </li>
          </ul>

          <div className="mt-auto">
             <Link href="/contact" className="block w-full text-center bg-[#45B1A0] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#369b8b] transition-all transform hover:-translate-y-1" onClick={() => setMobileMenuOpen(false)}>
                Get in Touch
             </Link>
             <p className="text-center text-gray-400 text-sm mt-6">© Marlayer {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
