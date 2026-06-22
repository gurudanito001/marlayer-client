"use client"

import React, {useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from "../(home)/footer";
import { Metadata } from 'next';
import Image from 'next/image';
import NavBar from "../(home)/navbar";

/* export const metadata: Metadata = {
  title: 'Privacy Policy | Marlayer',
  description: "At Marlayer, we are committed to protecting your privacy across our tech academy, software solutions, and gadget sales platforms. Learn how we collect, use, and safeguard your data.",
}; */

const PrivacyPolicy = () => {


  const logoTeal = "#45B1A0";
  const TEAL = "#45B1A0";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phrases = ["Software Solutions", "Tech Education", "Flagship Gadgets"];
  

  
    /* const navLinkClasses = isScrolled 
      ? "text-gray-300 hover:text-[#45B1A0] hover:border-[#45B1A0]" 
      : "text-gray-300 hover:text-white hover:border-white"; */

      const navLinkClasses = isScrolled 
          ? "text-white shadow-none" 
          : "text-gray-600";
  

  return (
    <main className="bg-white min-h-screen font-sans selection:bg-[#45B1A0]/30">
      <NavBar darkTheme/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
 
        @keyframes marlayer-grid-pulse { 0%,100%{opacity:.6} 50%{opacity:1} }
        @keyframes marlayer-line-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
 
      <header
        className="relative w-full overflow-hidden"
        style={{
          background: "#020d0a",
          padding: "200px 64px",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            animation: "marlayer-grid-pulse 6s ease-in-out infinite",
            backgroundImage: `
              linear-gradient(rgba(69,177,160,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(69,177,160,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
 
        {/* Corner markers */}
        <div className="absolute top-3 left-3 w-5 h-5 z-10 pointer-events-none" style={{ borderTop: "1.5px solid rgba(69,177,160,0.4)", borderLeft: "1.5px solid rgba(69,177,160,0.4)" }} />
        <div className="absolute bottom-3 right-3 w-5 h-5 z-10 pointer-events-none" style={{ borderBottom: "1.5px solid rgba(69,177,160,0.4)", borderRight: "1.5px solid rgba(69,177,160,0.4)" }} />
 
        {/* Soft glow */}
        <div
          className="absolute z-0 pointer-events-none hidden md:block"
          style={{
            width: 360, height: 360, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(69,177,160,0.07) 0%, transparent 70%)",
            left: "50%", top: "-20%", transform: "translateX(-50%)",
          }}
        />
 
        {/* Centered content — original design was center-aligned, so we preserve that here */}
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Tag — same teal pill style as before, restyled to match the dark system */}
          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: TEAL, letterSpacing: 2, textTransform: "uppercase" }}
          >
            <span style={{ display: "block", width: 20, height: 1, background: TEAL }} />
            Legal & Compliance
            <span style={{ display: "block", width: 20, height: 1, background: TEAL }} />
          </div>
 
          {/* Headline */}
          <h1
            className="mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 700, color: "white", lineHeight: 1.05, letterSpacing: -1.5 }}
          >
            <span style={{ color: TEAL }}>Privacy</span>{" "}
            <span style={{ color: "rgba(255,255,255,0.35)" }}>Policy</span>
          </h1>
 
          {/* Subtext */}
          <p
            className="max-w-2xl"
            style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}
          >
            Welcome to Marlayer. We are committed to protecting your privacy and ensuring the security of your personal information across our educational platforms, software services, and e-commerce stores.
          </p>
 
          {/* Animated underline divider — centered this time */}
          <div
            style={{
              marginTop: 32, height: 1, width: 120,
              background: `linear-gradient(90deg, transparent, ${TEAL}, transparent)`,
              animation: "marlayer-line-grow 1.2s ease-out",
            }}
          />
        </div>
      </header>

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