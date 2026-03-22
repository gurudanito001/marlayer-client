"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../(home)/footer';
import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
    {
        id: '01',
        title: 'UI/UX Design',
        desc: 'Our UI/UX design process helps you visualize your software solution before development begins. Through wireframes, prototypes, and user flows, we transform ideas into interactive experiences — forming a critical phase in delivering a successful, user-centered product.',
        img: '/images/uiux.jpg'
    },
    {
        id: '02',
        title: 'Web Development',
        desc: 'Our web development process brings your approved designs to life with clean, scalable, and high-performance code. As a critical phase in delivering your complete software solution, we build responsive, secure, and fully functional web applications that transform your vision into a powerful digital product ready for real-world use.',
        img: '/images/webdev.jpg'
    },
    {
        id: '03',
        title: 'Mobile Development',
        desc: 'Our mobile development process transforms your validated designs into fast, reliable, and user-friendly mobile applications. As a key phase in delivering your complete software solution, we build scalable iOS and Android apps that extend your product’s reach and deliver seamless experiences across devices.',
        img: '/images/mobileDev.jpg'
    },
    {
        id: '04',
        title: 'Data Analysis',
        desc: 'Our data analysis process transforms raw data into clear, actionable insights that guide smarter decision-making. As a strategic phase in delivering your complete software solution, we collect, structure, and interpret your data to uncover patterns, optimize performance, and drive measurable business growth.',
        img: '/images/dataAnalysis.png'
    }
];

const Home = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    return (
        <div className="w-full bg-white">
            <Navbar />
            <section className="relative w-full h-[70vh] min-h-[750px] flex items-center justify-center">

                {/* Hero Background Image */}
                <Image
                    src="/images/hero.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-black/65 z-0"></div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-10">
                    <p className="text-sm md:text-lg text-gray-300 mb-6 font-medium tracking-widest">
                        Your Technology Partner for Custom-Built Software Solutions
                    </p>
                    <h1 className="text-2xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
                        Transforming Ideas Into Powerful Digital Systems
                    </h1>
                </div>

            </section>

            {/* --- UNIFIED LIGHT SECTION: Accordion + Powerful Software + Projects --- */}
            <div className="w-full bg-gray-50">
                
                {/*ACCORDION SECTION*/}
                <div className="relative w-full pb-10 pt-24 lg:pt-32 text-black">
                    <div className="mx-auto max-w-[1400px] px-6 lg:px-20">

                        <div className="max-w-3xl mb-12 lg:mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-gray-900 text-center lg:text-left">
                                Turning Your Ideas Into <span className="text-[#45B1A0]">Cutting-edge</span> Technologies
                            </h2>
                        </div>

                        <div className="flex flex-col">
                            {servicesData.map((service, index) => {
                                const isOpen = openSection === service.id;
                                const isLast = index === servicesData.length - 1;

                                return (
                                    <div
                                        key={service.id}
                                        className={`group w-full overflow-hidden transition-colors duration-500 hover:border-[#000000] ${isLast ? '' : 'border-b border-gray-200'}`}
                                    >
                                        
                                        <div
                                            onClick={() => setOpenSection(isOpen ? null : service.id)}
                                            className="flex items-center justify-between py-8 lg:py-10 cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3 lg:gap-10">
                                                {/* Number */}
                                                <span className={`text-xl md:text-2xl font-light transition-colors duration-500 text-gray-900`}>
                                                    {service.id}/
                                                </span>
                                                {/* Title */}
                                                <span className={`text-sm md:text-2xl font-semibold tracking-tight transition-colors duration-500 text-gray-900`}>
                                                    {service.title}
                                                </span>
                                            </div>

                                            {/* Text Button */}
                                            <span className={`text-sm underline tracking-widest font-semibold transition-colors duration-300 whitespace-nowrap ${isOpen ? 'text-[#45B1A0]' : 'text-[#45B1A0] group-hover:text-[#45B1A0]'
                                                }`}>
                                                {isOpen ? "Close Information" : "More Information"}
                                            </span>
                                        </div>

                                        {/* Accordion Content (Revealed on Click) */}
                                        <div
                                            className={`grid transition-all duration-700 ease-in-out ${isOpen
                                                    ? 'grid-rows-[1fr] opacity-100 pb-10 lg:pb-12'
                                                    : 'grid-rows-[0fr] opacity-0'
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:pl-[5.5rem] pt-4">

                                                    {/* Text Content */}
                                                    <div className="flex flex-col w-full lg:max-w-lg justify-between">
                                                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                                                            {service.desc}
                                                        </p>

                                                        <button className="flex items-center gap-2 text-sm font-bold text-[#45B1A0] transition underline w-max group/btn">
                                                            Let&apos;s Work Together
                                                            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    {/* Image Content */}
                                                    <div className="relative w-full lg:w-[400px] aspect-[4/3] group/img overflow-hidden rounded-xl shadow-lg mt-6 lg:mt-0">
                                                        <Image
                                                            src={service.img}
                                                            alt={service.title}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Powerful Software Header */}
                <div className="w-[90%] mx-auto py-20 text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-2xl mx-auto text-center leading-tight text-gray-900">
                        <span className="text-[#45B1A0]">Powerful Software</span> At The Forefront Of Digital Excellence & Technology
                    </h1>
                </div>

                {/* --- LATEST PROJECTS SECTION --- */}
                <div className="w-full pb-20 lg:pb-24">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

                        {/* Heading & View All Header */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Latest Projects</h3>
                            <Link href="/software/Projects" className="px-8 py-3 text-sm font-semibold text-[#45B1A0] underline">
                                View All Projects
                            </Link>
                        </div>

                        {/* Project 1 (Vertically Centered) */}
                        <div className="flex flex-col lg:flex-row items-center gap-20 mb-20 group">
                            <div className="relative w-full lg:w-[40%] aspect-[4/3] rounded-xl overflow-hidden shrink-0">
                                <Image src="/images/padomart.png" alt="Project 1" fill className="object-cover group-hover:scale-105 transition duration-700" />
                            </div>
                            <div className="lg:w-[60%] flex flex-col justify-center">
                                <h4 className="text-xl md:text-2xl font-bold mb-3 max-w-md text-gray-900">Mobile App Development for Pardomart</h4>
                                <p className="text-[#45B1A0] font-semibold text-sm mb-4 uppercase tracking-wider"> — Mobile Development</p>
                                <p className="text-gray-600 text-sm leading-snug mb-6 max-w-sm">
                                    Pardomart is a multi-vendor on-demand marketplace application developed for a client in the U.S.A that mirrors the functionality of Instacart, connecting customers with local vendors for fast and reliable product delivery. The platform consists of three dedicated mobile applications — one for customers to browse and order, one for vendors to manage inventory and sales, and one for delivery partners to handle real-time order fulfillment — all working seamlessly together to power a complete digital commerce ecosystem.
                                </p>
                                <Link href="/software/Projects/pardomart" className="inline-block w-fit px-8 py-3 rounded-full border border-gray-300 text-sm font-semibold text-gray-900 hover:bg-[#45B1A0] hover:text-white hover:border-[#45B1A0] transition duration-300 shadow-sm">
                                    Explore Project
                                </Link>
                            </div>
                        </div>

                        {/* Project 2 (Vertically Centered) */}
                        <div className="flex flex-col lg:flex-row items-center gap-20 group">
                            <div className="relative w-full lg:w-[40%] aspect-[4/3] rounded-xl overflow-hidden shrink-0">
                                <Image src="/images/peniga.png" alt="Project 2" fill className="object-cover group-hover:scale-105 transition duration-700" />
                            </div>
                            <div className="lg:w-[60%] flex flex-col justify-center">
                                <h4 className="text-xl md:text-2xl font-bold mb-3 max-w-md text-gray-900"> Web App Development for Peniga</h4>
                                <p className="text-[#45B1A0] font-semibold text-sm mb-4 uppercase tracking-wider">— Web Development</p>
                                <p className="text-gray-600 text-sm leading-snug mb-6 max-w-sm">
                                    Peniga is a trusted online escrow platform designed to make buying and selling safe and secure. It allows users to enter into binding agreements and hold funds in escrow until the terms of a transaction are fully met — protecting both buyers and sellers from fraud and ensuring smooth completion of trades. With features like secure fund handling, contract enforcement, and 24/7 support, Peniga helps users confidently trade a wide range of goods and services online.
                                </p>
                                <Link href="/software/Projects/peniga" className="inline-block w-fit px-8 py-3 rounded-full border border-gray-300 text-sm font-semibold text-gray-900 hover:bg-[#45B1A0] hover:text-white hover:border-[#45B1A0] transition duration-300 shadow-sm">
                                    Explore Project
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* --- END UNIFIED LIGHT SECTION --- */}

            {/* --- NEWSLETTER SECTION (Flushed with Footer) --- */}
            <div className="bg-gradient-to-b from-primary to-[#0E1F18] text-white py-16 md:py-24 text-center">
                <div className="max-w-3xl mx-auto px-6 lg:px-16 text-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                        Subscribe To Our Newsletter
                    </h3>
                    <p className="text-white mb-10 text-sm">
                        Stay in touch with our expert team and get updates on our latest
                        creations and projects.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center bg-white/5 rounded lg:rounded-full p-2 pl-6 border border-white/10 max-w-xl mx-auto focus-within:border-[#45B1A0] transition-colors shadow-lg">
                        <input
                            type="email"
                            placeholder="Email Address..."
                            className="flex-grow bg-transparent text-white focus:outline-none placeholder-gray-500 py-3 w-full"
                        />
                        <button className="bg-[#45B1A0] text-white font-bold py-3 px-8 rounded-full w-full sm:w-auto mt-2 sm:mt-0 hover:bg-[#348A7D] transition-colors shadow-md">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;