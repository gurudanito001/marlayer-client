"use client"

import React, {useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from "../(home)/footer";
import { Metadata } from 'next';
import Image from 'next/image';

/* export const metadata: Metadata = {
  title: 'Privacy Policy | Marlayer',
  description: "At Marlayer, we are committed to protecting your privacy across our tech academy, software solutions, and gadget sales platforms. Learn how we collect, use, and safeguard your data.",
}; */

const PrivacyPolicy = () => {


  const logoTeal = "#45B1A0";
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    const phrases = ["Software Solutions", "Tech Education", "Flagship Gadgets"];
  

  
    const navLinkClasses = isScrolled 
      ? "text-gray-300 hover:text-[#45B1A0] hover:border-[#45B1A0]" 
      : "text-gray-300 hover:text-white hover:border-white";
  

  return (
    <main className="bg-white min-h-screen font-sans selection:bg-[#45B1A0]/30">
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
                className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 border rounded-full font-medium transition-colors duration-300 ${isScrolled ? 'border-[#45B1A0] text-[#45B1A0] hover:bg-[#45B1A0] hover:text-white' : 'border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white'}`}
              >
                Contact Us
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className={`md:hidden btn btn-ghost btn-circle ${isScrolled ? 'text-gray-300' : 'text-gray-600'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      
      {/* Hero Section */}
      <section className="bg-[#FAFAFA] py-20 lg:py-32 px-6 md:px-12 lg:px-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E0ECE9] text-[#0A4731] text-sm font-semibold mb-6 border border-[#0A4731]/10">
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#11241E] mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
            Welcome to Marlayer. We are committed to protecting your privacy and ensuring the security of your personal information across our educational platforms, software services, and e-commerce stores.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 lg:py-24">
        <article className="max-w-3xl mx-auto flex flex-col gap-12">
          
          {/* Introduction */}
          <div className="flex flex-col gap-4 border-b border-gray-100 pb-12">
            <h2 className="text-3xl font-bold text-[#11241E]">Introduction</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Marlayer, we operate a diverse ecosystem including a Tech Academy, Custom Software Solutions, and Flagship Gadget Sales. This Privacy Policy explains how we collect, use, share, and protect the personal information you provide to us across all our services. By accessing our platforms or purchasing our products, you agree to the terms outlined in this policy.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <div className="flex flex-col gap-5 border-b border-gray-100 pb-12">
            <h2 className="text-2xl font-bold text-[#11241E] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F2F8F6] text-[#0A4731] text-sm">1</span>
              Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">We collect information depending on how you interact with our varied services:</p>
            
            <div className="mt-2 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#11241E] mb-2">1.1 Personal & Account Information</h3>
                <ul className="list-disc list-outside space-y-2 ml-5 text-gray-600 marker:text-[#45B1A0]">
                  <li><strong className="text-gray-800">Contact Details:</strong> Full Name, Email address, and Phone number.</li>
                  <li><strong className="text-gray-800">Logistics:</strong> Billing and Shipping Addresses (specifically for gadget purchases).</li>
                  <li><strong className="text-gray-800">Academy Data:</strong> Educational background and current experience level (for Academy enrollment).</li>
                  <li><strong className="text-gray-800">Business Data:</strong> Business requirements and company details (for Software Solution clients).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#11241E] mb-2">1.2 Financial Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  For course enrollments, software retainers, or gadget purchases, we collect payment data. Please note that credit card details are processed securely by our third-party payment gateways and are not stored directly on our servers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#11241E] mb-2">1.3 Automated Information</h3>
                <ul className="list-disc list-outside space-y-2 ml-5 text-gray-600 marker:text-[#45B1A0]">
                  <li>IP addresses, browser types, and device information.</li>
                  <li>Browsing activity and interaction with our learning management system (LMS) or e-commerce store.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="flex flex-col gap-5 border-b border-gray-100 pb-12">
            <h2 className="text-2xl font-bold text-[#11241E] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F2F8F6] text-[#0A4731] text-sm">2</span>
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">We use your data to provide a seamless experience across our ecosystem:</p>
            <ul className="space-y-4 text-gray-600 mt-2">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[#45B1A0] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span><strong className="text-[#11241E]">Tech Academy:</strong> To manage your course progress, deliver curriculum, facilitate mentorship sessions, and issue certificates.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[#45B1A0] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span><strong className="text-[#11241E]">Gadget Sales:</strong> To process orders, manage inventory, handle shipping logistics, and provide warranty support.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[#45B1A0] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span><strong className="text-[#11241E]">Software Solutions:</strong> To communicate regarding project scope, deliver digital products, and provide ongoing technical maintenance.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[#45B1A0] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span><strong className="text-[#11241E]">General:</strong> To send important account updates, promotional offers (which you can opt out of), and to improve our platform's security.</span>
              </li>
            </ul>
          </div>

          {/* 3. How We Share Your Information */}
          <div className="flex flex-col gap-5 border-b border-gray-100 pb-12">
            <h2 className="text-2xl font-bold text-[#11241E] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F2F8F6] text-[#0A4731] text-sm">3</span>
              How We Share Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">We do not sell your personal data. We only share information with trusted third parties necessary to run our business:</p>
            <ul className="list-disc list-outside space-y-2 ml-5 text-gray-600 marker:text-[#45B1A0]">
              <li><strong className="text-gray-800">Logistics Partners:</strong> Shipping details are shared with delivery partners to fulfill gadget orders.</li>
              <li><strong className="text-gray-800">Service Providers:</strong> Payment processors, cloud hosting providers, and email delivery services.</li>
              <li><strong className="text-gray-800">Legal Authorities:</strong> If required by law, court order, or to protect our legal rights.</li>
            </ul>
          </div>

          {/* 4. Data Security */}
          <div className="flex flex-col gap-5 border-b border-gray-100 pb-12">
            <h2 className="text-2xl font-bold text-[#11241E] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F2F8F6] text-[#0A4731] text-sm">4</span>
              Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard encryption, secure server architecture, and strict access controls to protect your data. While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          {/* 5. Your Rights */}
          <div className="flex flex-col gap-5 border-b border-gray-100 pb-12">
            <h2 className="text-2xl font-bold text-[#11241E] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F2F8F6] text-[#0A4731] text-sm">5</span>
              Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-outside space-y-2 ml-5 text-gray-600 marker:text-[#45B1A0]">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your account and personal data.</li>
              <li>Opt-out of marketing communications at any time.</li>
            </ul>
          </div>

          {/* 6. Cookies Policy */}
          <div className="flex flex-col gap-5 border-b border-gray-100 pb-12">
            <h2 className="text-2xl font-bold text-[#11241E] flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F2F8F6] text-[#0A4731] text-sm">6</span>
              Cookies and Tracking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies to keep you logged into the Academy, remember your shopping cart for gadgets, and analyze site traffic. You can configure your browser to reject cookies, though this may limit your ability to use certain features of our platform.
            </p>
          </div>

          {/* 7. Contact Us */}
          <div className="flex flex-col gap-5 bg-[#F2F8F6] border border-[#E0ECE9] p-8 md:p-10 rounded-[2rem] mt-4 shadow-sm">
            <h2 className="text-2xl font-bold text-[#11241E]">7. Contact Us</h2>
            <p className="text-[#4A5E57] leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, your data, or your interactions with Marlayer, please contact our support team:
            </p>
            
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white p-2 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-[#0A4731]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email Address</p>
                  <a href="mailto:daniel.marlayer@gmail.com" className="text-[#11241E] font-semibold hover:text-[#45B1A0] transition-colors">daniel.marlayer@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white p-2 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-[#0A4731]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone Number</p>
                  <p className="text-[#11241E] font-semibold">+234 814 0715 723</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white p-2 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-[#0A4731]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Office Addresses</p>
                  <p className="text-[#11241E] font-semibold">6 Oremeta Street Oregun, Ikeja, Lagos</p>
                  <p className="text-[#11241E] font-semibold mt-1">12 Jogunosimi Street Alausa, Ikeja, Lagos</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-[#0A4731]/10 mt-6 pt-6">
              <p className="text-sm font-medium text-[#0A4731]">
                Last Updated: March 16, 2026
              </p>
            </div>
          </div>

        </article>
      </section>

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

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;