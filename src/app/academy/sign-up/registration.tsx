"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ['latin'] });

// --- 1. Background Icons for the Sidebar ---
const SidebarIcons = () => {
  const paths = {
    bulb: <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.829 1.58-1.936a4.5 4.5 0 00-1.325-8.86l-.105-.002M9.75 18v-.192c0-.983-.658-1.829-1.58-1.936a4.5 4.5 0 011.325-8.86l.105-.002" />,
    gradCap: <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />,
    rocket: <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45c.019-.104.039-.208.06-.311m-2.7-5.4a15.12 15.12 0 01-.06-1.5A14.98 14.98 0 001.5 2.25C6.182 2.25 10.318 4.67 12.631 8.41m0 0a15.12 15.12 0 011.5.06" />
  };

  const items = [
    { type: 'bulb', cls: 'top-[15%] left-[10%] rotate-12 w-12 h-12' },
    { type: 'gradCap', cls: 'top-[45%] left-[70%] -rotate-12 w-16 h-16 opacity-50' },
    { type: 'rocket', cls: 'bottom-[20%] left-[20%] rotate-45 w-14 h-14' },
    { type: 'bulb', cls: 'bottom-[10%] right-[15%] -rotate-6 w-10 h-10 opacity-40' },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-10">
      {items.map((item, i) => (
        <svg key={i} className={`absolute text-white ${item.cls}`} fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          {paths[item.type as keyof typeof paths]}
        </svg>
      ))}
    </div>
  );
};


// --- 2. Main Registration Component ---
export default function RegistrationPage() {
  const currentYear = new Date().getFullYear();
  const [countryCodes, setCountryCodes] = useState<any[]>([
    { name: "United States", code: "US", dial_code: "+1", flag: "https://flagcdn.com/us.svg" },
    { name: "United Kingdom", code: "GB", dial_code: "+44", flag: "https://flagcdn.com/gb.svg" },
    { name: "Nigeria", code: "NG", dial_code: "+234", flag: "https://flagcdn.com/ng.svg" },
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Nigeria",
    code: "NG",
    dial_code: "+234",
    flag: "https://flagcdn.com/ng.svg"
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: `${selectedCountry.dial_code} ${formData.get('phone')}`,
      course: formData.get('course'),
      level: formData.get('level'),
    };

    try {
      const response = await fetch('/api/academy-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset(); // Clear the form
        setTimeout(() => setStatus('idle'), 5000); // Reset the success message after 5 seconds
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,idd,cca2,flags");
        const data = await response.json();
        
        const codes = data
          .filter((country: any) => country.idd?.root)
          .map((country: any) => {
            const root = country.idd.root;
            const suffix = country.idd.suffixes?.length === 1 ? country.idd.suffixes[0] : "";
            return {
              name: country.name.common,
              code: country.cca2,
              dial_code: `${root}${suffix}`,
              flag: country.flags?.svg || country.flags?.png,
            };
          })
          .sort((a: any, b: any) => a.name.localeCompare(b.name));

        // Remove potential duplicates
        const uniqueCodes = Array.from(new Map(codes.map((item: any) => [item.code, item])).values()) as any[];
        setCountryCodes(uniqueCodes);
      } catch (error) {
        console.error("Failed to fetch country codes", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countryCodes.filter((c) => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.dial_code.includes(searchQuery) ||
    c.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen flex flex-col lg:flex-row bg-[#0B1A14] font-sans ${dmSans.className}`}>
      
      {/* LEFT COLUMN: Sidebar (Brand & Value Prop) */}
      <aside className="relative w-full lg:w-5/12 bg-primary px-8 py-12 lg:px-14 lg:py-16 flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#45B1A0]/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
        
        <SidebarIcons />

        {/* Logo Section */}
        <Link href="/academy" className="flex items-baseline">
          <div className="">
            <Image src="/images/marlayer-logo.svg" width={24} height={24} alt="Marlayer Logo" />
          </div>
          <span
            className="font-extrabold text-2xl ml-0.5"
            style={{ color: "#45B1A0" }}
          >
            ARLAYER
          </span>
          <span className="font-extrabold text-2xl text-white ml-2">ACADEMY</span>
        </Link>

        {/* Copy Section */}
        <div className="relative z-10 flex-1 flex flex-col justify-center mt-12 lg:mt-0 mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] text-white font-semibold leading-[1.15] mb-6 tracking-tight">
            Start Building <br className="hidden md:block"/>
            Your Future.
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
            Turn your ideas into reality. Join our academy to access project-based courses, expert mentorship, and a community of tech innovators.
          </p>
        </div>


         <p className="text-sm font-light text-[#9CAFAA]/60">
            Copyright © {currentYear} Marlayer. All rights reserved.
          </p>
      </aside>

      {/* RIGHT COLUMN: Enrollment Form */}
      <main className="w-full lg:w-7/12 px-6 py-12 md:px-12 lg:px-20 xl:px-28 flex items-center justify-center relative">
        
        {/* Form Container */}
        <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl backdrop-blur-md">
          
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">Enroll Now</h2>
            <p className="text-gray-400 text-sm">Please fill out the form below to register for a course.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300 ml-1">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  required
                  placeholder="John" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#45B1A0] focus:ring-1 focus:ring-[#45B1A0] transition-all" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  required
                  placeholder="Doe" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#45B1A0] focus:ring-1 focus:ring-[#45B1A0] transition-all" 
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="johndoe@email.com" 
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#45B1A0] focus:ring-1 focus:ring-[#45B1A0] transition-all" 
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Phone Number</label>
              <div className="flex gap-3">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-black/20 border border-white/10 rounded-xl px-3 py-3.5 text-white focus:outline-none focus:border-[#45B1A0] transition-all w-28 flex-shrink-0 flex items-center justify-between hover:bg-black/40"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-4 relative rounded-sm overflow-hidden flex-shrink-0 bg-gray-700">
                      {selectedCountry.flag && (
                        <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <span className="text-sm font-medium">{selectedCountry.dial_code}</span>
                  </div>
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="000 000 0000" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#45B1A0] focus:ring-1 focus:ring-[#45B1A0] transition-all" 
                />
              </div>
            </div>

            {/* Course Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Course of Interest</label>
              <select defaultValue="" name="course" required className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#45B1A0] focus:ring-1 focus:ring-[#45B1A0] transition-all cursor-pointer appearance-none">
                <option value="" disabled className="text-gray-500">Select a course...</option>
                <option value="computer-basics">Computer Basics</option>
                <option value="frontend-1">Frontend Development: Part 1</option>
                <option value="frontend-2">Frontend Development: Part 2</option>
                <option value="backend">Backend Development</option>
                <option value="mobile">Mobile App Development</option>
              </select>
            </div>

            {/* Experience Level */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Current Experience Level</label>
              <select defaultValue="" name="level" required className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#45B1A0] focus:ring-1 focus:ring-[#45B1A0] transition-all cursor-pointer appearance-none">
                <option value="" disabled className="text-gray-500">Select your level...</option>
                <option value="beginner">Total Beginner (No experience)</option>
                <option value="novice">Novice (Dabbled in tutorials)</option>
                <option value="intermediate">Intermediate (Built basic projects)</option>
              </select>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl text-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Application submitted successfully. We will be in touch soon!
              </div>
            )}
            
            {status === 'error' && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-6">
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-orange hover:bg-orange/85 disabled:bg-orange/50 disabled:cursor-not-allowed text-white font-semibold rounded-xl py-4 transition-all duration-300 shadow-[0_0_15px_rgba(255,165,0,0.15)] hover:shadow-[0_0_25px_rgba(255,165,0,0.3)] transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>

          </form>

          {/* Privacy Disclaimer */}
          {/* <p className="text-center text-xs text-gray-500 mt-6">
            By submitting this form, you agree to our <Link href="/terms" className="text-[#45B1A0] hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-[#45B1A0] hover:underline">Privacy Policy</Link>.
          </p> */}

        </div>
      </main>

      {/* Country Selection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
          {/* Overlay Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-[#0B1A14] border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Select Country</h3>
              <button type="button" onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            
            {/* Search Input */}
            <div className="p-4 border-b border-white/10">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
                </div>
                <input
                  type="text"
                  placeholder="Search by name or dial code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#45B1A0] focus:ring-1 focus:ring-[#45B1A0] transition-all"
                  autoFocus
                />
              </div>
            </div>
            
            {/* Countries List */}
            <div className="overflow-y-auto flex-1 p-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {filteredCountries.map((country, index) => (
                <button
                  key={`${country.code}-${index}`}
                  type="button"
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsModalOpen(false);
                    setSearchQuery("");
                  }}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors ${selectedCountry.code === country.code ? 'bg-white/10' : ''}`}
                >
                  <div className="w-8 h-5 relative flex-shrink-0 overflow-hidden rounded-sm bg-gray-700 shadow-sm border border-white/10">
                    {country.flag && (
                      <img src={country.flag} alt={country.name} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <span className="text-white text-left flex-1 truncate">{country.name}</span>
                  <span className="text-gray-400 text-sm font-medium">{country.dial_code}</span>
                  {selectedCountry.code === country.code && (
                    <svg className="w-5 h-5 text-[#45B1A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  )}
                </button>
              ))}
              {filteredCountries.length === 0 && (
                <div className="p-8 text-center text-gray-400">
                  No countries found matching "{searchQuery}"
                </div>
              )}
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
}