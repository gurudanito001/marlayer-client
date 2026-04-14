"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/(home)/footer";
import Image from "next/image";

const About = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState("values");

    return (
        <section className="bg-white">
            {/* Custom Styles for the Infinite Marquee Animation */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
                .fade-in {
                    animation: fadeIn 0.5s ease-in-out forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <Navbar />
            
            {/* --- NEW HERO SECTION (Height Reduced) --- */}
            <div className="relative w-full min-h-[95vh] flex items-center pb-12 pt-32 lg:pt-24">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/aboutImg.webp"
                        alt="Team Meeting"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Dark Green Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A1A18] via-[#0A1A18]/95 lg:via-[#0A1A18]/90 to-transparent"></div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A1A18] to-transparent lg:hidden"></div>

                {/* Hero Content */}
                <div className="relative z-10 w-full max-w-[1900px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 flex flex-col justify-center">
                    <div className="max-w-4xl lg:pr-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                            <span className="text-[#45B1A0]">Leading Company</span> In Creating Powerful Software & Technology
                        </h1>

                        <p className="text-gray-300 mb-10 text-base md:text-lg leading-relaxed">
                            Starting from small requests, we design and execute seamless development processes that
                            bring your digital ideas to life. We prioritize a user-centric approach to deliver
                            exceptional and sustainable technology solutions.
                        </p>

                        {/* Video Play Button Area */}
                        <div className="flex items-center gap-5 cursor-pointer group w-fit">
                            <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-gray-500 group-hover:border-[#45B1A0] transition-colors duration-300 shrink-0">
                                <div className="w-12 h-12 bg-[#45B1A0] rounded-full flex items-center justify-center group-hover:bg-[#348A7D] transition-colors duration-300">
                                    <svg className="w-5 h-5 text-white fill-current ml-1" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-lg group-hover:text-[#45B1A0] transition-colors duration-300">Know more about us</h4>
                                <p className="text-gray-400 text-sm">Introduction by Our Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* --- END NEW HERO SECTION --- */}


            {/* --- WHAT WE OFFER SECTION --- */}
            <div className="w-full bg-gray-50 pt-24 pb-24 border-t border-gray-200">
                <div className="w-[90%] max-w-[1200px] mx-auto px-4 lg:px-0">
                    
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What We Offer?</h3>
                        <p className="text-black max-w-2xl mx-auto text-sm">
                            We provide end-to-end digital solutions tailored to elevate your business. From seamless designs to scalable architectures.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                        {/* 1. Software Design */}
                        <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-100 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                                <svg className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Software Design</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Design expertise in UI/UX and powerful back-end architecture to create seamless, scalable software that drives technology forward.
                            </p>
                        </div>

                        {/* 2. Software Development */}
                        <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-indigo-100 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors duration-300">
                                <svg className="w-6 h-6 text-indigo-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Software Development</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Full-cycle software development, agile sprints, API services, and infrastructure setup using modern frameworks like React, Node, and Python.
                            </p>
                        </div>

                        {/* 3. Website Development (Purple Accent) */}
                        <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-purple-100 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                                <svg className="w-6 h-6 text-purple-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Website Development</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Professional and 100% responsive eCommerce websites and custom business sites built for performance and modern online business trends.
                            </p>
                        </div>

                        {/* 4. Games Development (Rose Accent) */}
                        <div className="lg:col-start-2 lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-rose-100 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-lg bg-rose-50 flex items-center justify-center mb-6 group-hover:bg-rose-500 transition-colors duration-300">
                                <svg className="w-6 h-6 text-rose-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Games Development</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Immersive game logic and stunning graphic creation, using engines like Unity and Unreal, for both mobile and PC environments.
                            </p>
                        </div>

                        {/* 5. SEO Optimization (Amber Accent) */}
                        <div className="lg:col-start-4 lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-amber-100 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                                <svg className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">SEO Optimization</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Comprehensive on-page and technical SEO strategies that ensure maximum organic visibility and high-ranking search engine results.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* --- EXCELLENCE & MISSION SECTION --- */}
            <div className="w-full bg-white pb-24">
                
                {/* Tech Stack Marquee (Brand color hovers applied for maturity) */}
                <div className="w-full bg-[#F2F8F6] border-y border-gray-200 py-3 mb-32 overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F2F8F6] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F2F8F6] to-transparent z-10 pointer-events-none"></div>
                    
                    <div className="animate-marquee flex items-center">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="flex items-center gap-20 px-10 text-gray-500 font-bold text-md tracking-widest uppercase">
                                <span className="flex items-center gap-2 hover:text-[#61DAFB] transition-colors cursor-default">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.062 6.015c.608 0 1.096.502 1.096 1.116s-.488 1.116-1.096 1.116c-.608 0-1.096-.502-1.096-1.116s.488-1.116 1.096-1.116zm-12.093 0c.608 0 1.096.502 1.096 1.116s-.488 1.116-1.096 1.116c-.608 0-1.096-.502-1.096-1.116s.488-1.116 1.096-1.116zm6.046 2.06c2.78 0 5.034 2.296 5.034 5.127 0 2.83-2.254 5.126-5.034 5.126-2.78 0-5.034-2.296-5.034-5.126 0-2.83 2.254-5.127 5.034-5.127z"/></svg>
                                    React
                                </span>
                                <span className="flex items-center gap-2 hover:text-[#339933] transition-colors cursor-default">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.001 0a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12zm-4.71 16.583v-9.166l4.71-2.718 4.71 2.718v9.166l-4.71 2.718-4.71-2.718z"/></svg>
                                    Node.js
                                </span>
                                <span className="flex items-center gap-2 hover:text-[#3776AB] transition-colors cursor-default">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.996 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm-2.09 18.068l-3.35-3.35 1.41-1.41 1.94 1.94 5.25-5.25 1.41 1.41-6.66 6.66z"/></svg>
                                    Python
                                </span>
                                <span className="flex items-center gap-2 hover:text-[#FF9900] transition-colors cursor-default">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.08 11.23h19.84v1.54H2.08zM4.36 6.88h15.28v1.54H4.36zM6.64 2.53h10.72v1.54H6.64zM4.36 15.58h15.28v1.54H4.36zM6.64 19.93h10.72v1.54H6.64z"/></svg>
                                    AWS
                                </span>
                                <span className="flex items-center gap-2 hover:text-black transition-colors cursor-default">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm5.66 16.54h-1.63L11.77 9.8v6.74H10.1V7.46h1.63l4.26 6.74V7.46h1.67z"/></svg>
                                    Next.js
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-[90%] max-w-[1200px] mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-10 mt-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Pioneering Software & Tech Solutions
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
                            At MARLAYER, we focus on excellence and innovation in custom software development and scalable tech solutions, ensuring a seamless and exceptional digital experience for your users.
                        </p>
                    </div>

                    {/* Custom Toggle Tabs */}
                    <div className="flex justify-center flex-wrap gap-2 mb-16 bg-gray-50 p-2 rounded-full w-fit mx-auto border border-gray-200 shadow-sm">
                        <button 
                            onClick={() => setActiveTab('values')}
                            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm ${activeTab === 'values' ? 'bg-[#45B1A0] text-white shadow-md' : 'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-white'}`}
                        >
                            Our Values
                        </button>
                        <button 
                            onClick={() => setActiveTab('mission')}
                            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm ${activeTab === 'mission' ? 'bg-[#45B1A0] text-white shadow-md' : 'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-white'}`}
                        >
                            Our Mission
                        </button>
                        <button 
                            onClick={() => setActiveTab('vision')}
                            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm ${activeTab === 'vision' ? 'bg-[#45B1A0] text-white shadow-md' : 'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-white'}`}
                        >
                            Our Vision
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="w-full">
                        
                        {/* TAB 1: OUR VALUES */}
                        {activeTab === 'values' && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center fade-in">
                                {/* Left: Text & List */}
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                        What We Stand For
                                    </h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        Our core values drive our commitment to integrity, transparency, and exceptional code quality, ensuring a superior experience in software development, tailored to meet every client&apos;s digital needs.
                                    </p>

                                    <ul className="space-y-6">
                                        <li className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-[#45B1A0]/10 flex items-center justify-center flex-shrink-0 ">
                                                <svg className="w-4 h-4 text-[#45B1A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <p className="text-gray-700 text-sm">Leveraging modern tech stacks to make scaling your software easier.</p>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-[#45B1A0]/10 flex items-center justify-center flex-shrink-0 ">
                                                <svg className="w-4 h-4 text-[#45B1A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <p className="text-gray-700 text-sm">Promoting secure, optimized, and robust backend architectures.</p>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-[#45B1A0]/10 flex items-center justify-center flex-shrink-0 ">
                                                <svg className="w-4 h-4 text-[#45B1A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <p className="text-gray-700 text-sm">Clear project pricing, agile milestones, and no hidden fees.</p>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-[#45B1A0]/10 flex items-center justify-center flex-shrink-0 ">
                                                <svg className="w-4 h-4 text-[#45B1A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <p className="text-gray-700 text-sm">Your user&apos;s satisfaction and seamless experience is our top priority.</p>
                                        </li>
                                    </ul>
                                </div>

                                {/* Right: Single Unified Image */}
                                <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
                                    <img 
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                                        alt="Team Collaboration" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        )}

                        {/* TAB 2: OUR MISSION */}
                        {activeTab === 'mission' && (
                            <div className="fade-in">
                                <div className="text-center max-w-3xl mx-auto mb-12">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Our <span className="text-[#45B1A0]">Mission</span>
                                    </h3>
                                    <p className="text-gray-600 text-base md:text-lg">
                                        We are on a mission to empower businesses worldwide by building scalable, intuitive, and high-performance digital solutions that solve real-world problems.
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Indigo Accent */}
                                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-indigo-500">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Empower Innovation</h4>
                                        <p className="text-gray-600 leading-relaxed">Providing businesses with cutting-edge technological tools to disrupt their industries and stay ahead of the competition.</p>
                                    </div>
                                    
                                    {/* Purple Accent */}
                                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-purple-500">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Accelerate Growth</h4>
                                        <p className="text-gray-600 leading-relaxed">Streamlining complex digital transformations to help our clients scale rapidly and efficiently in a digital-first world.</p>
                                    </div>

                                    {/* Teal/Green Accent */}
                                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-[#45B1A0]">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Deliver Excellence</h4>
                                        <p className="text-gray-600 leading-relaxed">Committing strictly to clean code, robust security, and seamless user experiences across every platform we build.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TAB 3: OUR VISION (Multi-Color Accents) */}
                        {activeTab === 'vision' && (
                            <div className="fade-in">
                                <div className="text-center max-w-3xl mx-auto mb-12">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Our <span className="text-[#45B1A0]">Vision</span>
                                    </h3>
                                    <p className="text-gray-600 text-base md:text-lg">
                                        To be recognized globally as the premier technology partner for visionary brands, shaping the future of software and digital interactions.
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Blue Accent */}
                                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-500">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Global Tech Leadership</h4>
                                            <p className="text-gray-600 leading-relaxed">Expanding our footprint to become the trusted development arm for startups and enterprises across the globe.</p>
                                        </div>
                                    </div>
                                    
                                    {/* Rose Accent */}
                                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mb-6 text-rose-500">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Future-Proof Architecture</h4>
                                            <p className="text-gray-600 leading-relaxed">Pioneering the adoption of AI, Web3, and advanced cloud technologies to keep our clients ahead of the curve.</p>
                                        </div>
                                    </div>

                                    {/* Emerald Accent */}
                                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-6 text-emerald-500">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Sustainable Digital Ecosystems</h4>
                                            <p className="text-gray-600 leading-relaxed">Building software that is not only powerful today but highly maintainable and scalable for decades to come.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/* --- "WHY CHOOSE US" SECTION (Preserved Bento Box Layout with Color Accents) --- */}
            <div className="w-full bg-[#f8fafc] py-24 border-t border-gray-200">
                <div className="w-[90%] max-w-[1200px] mx-auto">
                    
                    {/* Header Left-Aligned */}
                    <div className="mb-16 max-w-2xl">
                        <span className="text-[#45B1A0] font-bold tracking-wider uppercase text-sm mb-3 block flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-[#45B1A0]"></span>
                            The Marlayer Advantage
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1A18] mb-6 leading-tight">
                            Built for Growth. <br className="hidden md:block"/> Designed for Excellence.
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We don&apos;t just write code; we build digital ecosystems. Discover why visionary brands choose us as their strategic technical partner.
                        </p>
                    </div>

                    {/* Preserved Bento Box Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[minmax(220px,auto)]">
                        
                        {/* 1. Enterprise Security (Tall Dark Card - Kept Brand Green for Anchor) */}
                        <div className="col-span-1 md:col-span-1 lg:col-span-5 row-span-2 bg-[#0A1A18] rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative shadow-xl hover:-translate-y-1 transition-all duration-300">
                            {/* Decorative Glow */}
                            <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-[#45B1A0] opacity-15 rounded-full blur-[80px] group-hover:opacity-30 transition-opacity duration-500"></div>
                            
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-[#45B1A0]/20 flex items-center justify-center mb-10 text-[#45B1A0]">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="relative z-10 mt-auto">
                                <h3 className="text-3xl font-bold text-white mb-4 leading-snug">Enterprise-Grade Security</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Bank-grade encryption, secure backend architectures, and rigorous compliance testing. We build fortresses, not just software.
                                </p>
                            </div>
                        </div>

                        {/* 2. Expert Developers (Blue Accent Added) */}
                        <div className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1 bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 flex flex-col justify-center">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Developers</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">A dedicated team of senior engineers equipped with cross-platform mastery and deep technical expertise.</p>
                        </div>

                        {/* 3. Client Satisfaction Stat (Kept Brand Green) */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 bg-[#45B1A0] rounded-[2rem] p-8 shadow-lg shadow-[#45B1A0]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
                            <h3 className="text-6xl font-black text-white mb-1 tracking-tighter">99<span className="text-3xl">%</span></h3>
                            <p className="text-white font-semibold text-lg">Client Retention</p>
                            <p className="text-white/80 text-sm mt-1">Satisfaction guaranteed</p>
                        </div>

                        {/* 4. Agile Delivery (Purple Accent Added) */}
                        <div className="col-span-1 md:col-span-1 lg:col-span-4 row-span-1 bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-purple-200 transition-all duration-300 flex flex-col justify-center relative overflow-hidden group">
                            {/* Purple Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6 text-purple-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Agile Delivery</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Rapid agile sprints and transparent milestones ensuring your product goes to market perfectly on schedule.</p>
                        </div>

                        {/* 5. 24/7 Support (Amber/Orange Accent Added) */}
                        <div className="col-span-1 md:col-span-1 lg:col-span-3 row-span-1 bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-orange-200 transition-all duration-300 flex flex-col justify-center">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6 text-orange-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Continuous server monitoring and dedicated maintenance support around the clock.</p>
                        </div>

                        {/* 6. Cost-Effective (Wide Banner Card - Kept Brand Green) */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-12 row-span-1 bg-gradient-to-r from-gray-900 to-[#0A1A18] rounded-[2rem] p-8 md:p-12 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-center justify-between overflow-hidden relative group">
                            
                            {/* Abstract Graphic Background */}
                            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-1/2 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500">
                                <svg className="w-full h-full text-[#45B1A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                </svg>
                            </div>
                            
                            <div className="relative z-10 max-w-3xl mb-8 md:mb-0 md:pr-10">
                                <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">Cost-Effective Scaling</h4>
                                <p className="text-gray-400 text-base md:text-lg">
                                    Optimized development cycles delivering high ROI without compromising on code quality. We treat your budget with as much respect as we treat your codebase.
                                </p>
                            </div>
                            
                            <div className="relative z-10 shrink-0 w-full md:w-auto">
                                <button className="w-full md:w-auto bg-[#45B1A0] hover:bg-[#348A7D] text-white px-8 py-4 rounded-full font-bold transition-colors duration-300 shadow-lg shadow-[#45B1A0]/20 flex items-center justify-center gap-2 group/btn">
                                    Discuss Pricing
                                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* --- GET STARTED CTA SECTION --- */}
            <div className="w-full bg-[#F2F8F6] pt-20 pb-24 border-t border-gray-200">
                <div className="px-6 lg:px-16 text-center w-full max-w-5xl mx-auto flex flex-col items-center">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                       Let&apos;s Build Something Extraordinary
                    </h3>
                    
                    <p className="text-gray-500 mb-10 text-base md:text-lg leading-relaxed max-w-2xl">
                       Partner with our expert team to create scalable, high-performing software tailored to your specific business goals.
                    </p>

                    <button className="bg-[#45B1A0] text-white font-bold py-4 px-10 rounded-full hover:bg-[#348A7D] shadow-lg shadow-[#45B1A0]/20 transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0 text-lg">
                        Start Your Project
                    </button>
                </div>
            </div>
            

            <Footer />
        </section>
    )
}

export default About;