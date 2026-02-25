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
    ? "text-gray-600 hover:text-[#45B1A0] hover:border-[#45B1A0]" 
    : "text-gray-300 hover:text-white hover:border-white";

  return (
    <section className="relative w-full h-screen max-h-[800px] xl:max-h-[950px] flex items-center bg-[#45B1A0] overflow-hidden">
      
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
      {/* Update the URL to point to your actual isometric background image */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-right lg:bg-center"
        style={{ backgroundImage: "url('/images/homepage/glass-house-2.jpg')" }}
      >

        {/* Gradient Overlay: Deep blue on the left fading to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001714] via-[#001700]/90 to-transparent"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1900px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28 flex flex-col justify-center">
        <article className="max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white mb-6 tracking-tight leading-10">
            Leverage On World Class <br className="hidden md:block" />
            <span style={{ color: logoTeal }}>{text}</span>
            <span className="animate-pulse text-white">|</span>
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed max-w-lg font-light">
            We train innovators, We build powerful software, We provide reliable gadgets for your business needs.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href='/#ecosystem' 
              onClick={(e) => {
                const element = document.getElementById('ecosystem');
                if (element) {
                  e.preventDefault();
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary hover:bg-primary-2 text-white px-8 py-2.5 rounded shadow-lg font-medium transition-colors duration-300">
              Explore Our Services
            </a>
            <button className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-2.5 rounded font-medium transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </article>
      </div>

      {/* Scroll Down Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group">
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
      </div> */}

    </section>
  );
};

export default HeroSection;
