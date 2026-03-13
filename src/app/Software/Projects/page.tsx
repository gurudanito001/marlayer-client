"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/(home)/footer";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Navbar />
            <div className="relative w-full min-h-[95vh] flex items-center pt-32 pb-16 lg:pt-24 lg:pb-12">
                
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/projectimg.jpg"
                        alt="Marlayer Tech Portfolio"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Green Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A1A18] via-[#0A1A18]/90 to-transparent"></div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A1A18]/50 to-transparent lg:hidden"></div>

                {/* Hero Content */}
                <div className="relative z-20 w-full max-w-[1900px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 flex items-center">
                    <div className="max-w-2xl text-left">
                        {/* Eyebrow Text */}
                        <p className="text-[#45B1A0] font-bold text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-[#45B1A0]"></span> Our Portfolio
                        </p>
                        
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                            Where Vision Meets Execution
                        </h1>
                        
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mb-10">
                            Explore how we transform complex challenges into elegant, scalable software solutions. From robust mobile applications to secure enterprise platforms.
                        </p>

                        {/* CTA Button */}
                        <div className="flex items-center gap-4">
                            <button className="bg-[#45B1A0] text-white font-bold py-3.5 px-8 rounded-full hover:bg-[#348A7D] transition-colors shadow-lg shadow-[#45B1A0]/20 flex items-center gap-2 group">
                                View Case Studies
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* --- END HERO SECTION --- */}


            {/* --- MAIN PROJECTS SECTION --- */}
            <div className="max-w-[1200px] mx-auto w-full px-6 lg:px-16 py-24">
                
                {/* PROJECT 1: Image Left, Text Right */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-32 group">
                    <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200 group-hover:shadow-2xl transition-shadow duration-500">
                        <Image
                            src="/images/padomart.png"
                            alt="Ecommerce Website"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        
                        <h4 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                            Mobile App Development for Pardomart
                        </h4>
                        <p className="text-[#45B1A0] font-bold text-sm mb-3 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-[#45B1A0]"></span> Mobile Development
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-8">
                            Pardomart is a multi-vendor on-demand marketplace application developed for a client in the U.S.A that mirrors the functionality of Instacart, connecting customers with local vendors for fast and reliable product delivery. The platform consists of three dedicated mobile applications — one for customers to browse and order, one for vendors to manage inventory and sales, and one for delivery partners to handle real-time order fulfillment — all working seamlessly together to power a complete digital commerce ecosystem.
                        </p>
                        <Link href="/software/ProjectDetails" className="inline-block w-fit px-8 py-3 rounded-full border border-gray-300 text-sm font-semibold text-gray-900 hover:bg-[#45B1A0] hover:text-white hover:border-[#45B1A0] transition duration-300 shadow-sm">
                            Explore Project
                        </Link>
                    </div>
                </div>

                {/* PROJECT 2: Text Left, Image Right */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 mb-32 group">
                    <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200 group-hover:shadow-2xl transition-shadow duration-500">
                        <Image
                            src="/images/peniga.png"
                            alt="AI Software"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h4 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                            Web App Development for Peniga
                        </h4>
                        <p className="text-[#45B1A0] font-bold text-sm mb-3 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-[#45B1A0]"></span> Web Development
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-8">
                            Peniga is a trusted online escrow platform designed to make buying and selling safe and secure. It allows users to enter into binding agreements and hold funds in escrow until the terms of a transaction are fully met — protecting both buyers and sellers from fraud and ensuring smooth completion of trades. With features like secure fund handling, contract enforcement, and 24/7 support, Peniga helps users confidently trade a wide range of goods and services online.
                        </p>
                        <Link href="/software/ProjectDetails" className="inline-block w-fit px-8 py-3 rounded-full border border-gray-300 text-sm font-semibold text-gray-900 hover:bg-[#45B1A0] hover:text-white hover:border-[#45B1A0] transition duration-300 shadow-sm">
                            Explore Project
                        </Link>
                    </div>
                </div>

                {/* PROJECT 3: Image Left, Text Right */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-10 group">
                    <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200 group-hover:shadow-2xl transition-shadow duration-500">
                        <Image
                            src="/images/looseapp.png"
                            alt="AI Software"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h4 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                            Backend Infrastructure Development for LooseApp
                        </h4>
                        <p className="text-[#45B1A0] font-bold text-sm mb-3 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-[#45B1A0]"></span> Backend Development
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-8">
                            LooseApp is a social wellbeing app that connects users with empathetic listeners, offering a safe and supportive space to share thoughts and feelings on any topic. Whether you need to vent or simply want someone to listen, the app enables users to chat and communicate with trained listeners for emotional support and meaningful conversation.
                        </p>
                        <Link href="/software/ProjectDetails" className="inline-block w-fit px-8 py-3 rounded-full border border-gray-300 text-sm font-semibold text-gray-900 hover:bg-[#45B1A0] hover:text-white hover:border-[#45B1A0] transition duration-300 shadow-sm">
                            Explore Project
                        </Link>
                    </div>
                </div>
            </div>

            {/* --- GREEN NEWSLETTER SECTION--- */}
            <div className="w-full bg-[#F2F8F6] py-24 px-6 lg:px-16 mt-auto border-t border-gray-200">
                <div className="text-center w-full max-w-3xl mx-auto">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-black">
                        Subscribe To Our Newsletter
                    </h3>
                    <p className="text-gray-600 mb-10 md:text-lg">
                        Stay in touch with our expert team and get updates on our latest
                        creations and projects from our agency newsletter.
                    </p>

                    <div className="flex flex-col sm:flex-row border border-gray-200 items-center bg-white rounded-xl lg:rounded-full p-2 pl-6 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Email Address..."
                            className="flex-grow bg-transparent text-gray-900 focus:outline-none placeholder-gray-400 py-3 w-full"
                        />
                        {/* Contrasting Dark Button */}
                        <button className="bg-[#45B1A0] text-white font-bold py-3.5 px-8 rounded-lg lg:rounded-full hover:bg-[#348A7D] transition-colors w-full sm:w-auto mt-2 sm:mt-0 shadow-md">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Projects;