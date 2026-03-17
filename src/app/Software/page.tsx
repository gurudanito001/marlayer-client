"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../(home)/footer';
import Image from 'next/image';

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

            {/*ACCORDION SECTION*/}
            <div className="relative w-full pb-20 pt-24 lg:pt-32 bg-gray-50 text-black">
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

           
            <div className=" bg-white pb-20">

                <div className="w-[90%]  mx-auto mt-24 mb-16 text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-2xl mx-auto text-center leading-tight">
                        <span className="text-blue-600">Powerful Software</span> At The Forefront Of Digital Excellence & Technology
                    </h1>
                </div>

                <div className="relative w-[90%] mx-auto -mb-24">
                    <div className="flex flex-col lg:flex-row items-end gap-6">

                        {/* IMAGE CONTAINER */}
                        <div className="w-full max-w-[1400px] mx-auto flex items-start">

                            <div className="relative w-full lg:w-[60%] aspect-[16/7] rounded">
                                <Image
                                    src="/images/forefrontImg1.webp"
                                    alt="Forefront"
                                    fill
                                    className="object-cover"
                                />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-10 h-10 lg:w-16 lg:h-16 bg-[#564AF7] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
                                        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* ARROWS AREA */}
                            <div className="hidden lg:flex w-[25%] justify-center gap-4 mt-28">

                                {/* Left Arrow */}
                                <button className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-700 text-gray-400 hover:bg-gray-600 transition">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                {/* Right Arrow */}
                                <button className="w-12 h-12 rounded-full flex items-center justify-center bg-[#564AF7] text-white hover:bg-purple-700 transition">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[90%] max-w-[1400px] mx-auto bg-[#1C1B20] text-white rounded pt-40 lg:pt-48 pb-16">

                    <div className="px-6 lg:px-16">

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16">Latest Projects</h3>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-20">
                            <div className="relative w-full lg:w-[35%] aspect-[4/3] rounded">
                                <Image src="/images/lastestProjectImg1.webp" alt="Project 1" fill className="object-cover" />
                            </div>
                            <div className="">
                                <h4 className="text-sm md:text-lg font-bold mb-2 max-w-md">eCommerce Website Design For Fashion Brand</h4>
                                <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">— UI/UX & Dev</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
                                    Our company was dedicated to building professional and 100% responsive eCommerce websites...
                                </p>
                                <button className="px-8 py-3 rounded-full border border-gray-600 text-sm font-semibold hover:bg-white hover:text-black transition duration-300">
                                    Explore Project
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-28">
                            <div className="relative w-full lg:w-[35%] aspect-[4/3] rounded">
                                <Image src="/images/lastestProjectImg2.webp" alt="Project 2" fill className="object-cover" />
                            </div>
                            <div className="">
                                <h4 className="text-sm lg:text-lg font-bold mb-2 max-w-md">AI-Powered Software For Digital Recruitment</h4>
                                <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">— Development</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
                                    We have recently created innovative, top-class AI-powered technology for digital recruitment...
                                </p>
                                <button className="px-8 py-3 rounded-full border border-gray-600 text-sm font-semibold hover:bg-white hover:text-black transition duration-300">
                                    Explore Project
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="relative w-full aspect-[16/6] mb-20">
                        <Image
                            src="/images/lastestProjectImg3.jpg"
                            alt="Design Leading Software"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="px-6 lg:px-16 text-center w-full max-w-3xl mx-auto">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                            Subscribe To Our Newsletter
                        </h3>
                        <p className="text-gray-400 mb-10 text-sm">
                            Stay in touch with our expert team and get updates on our latest
                            creations and projects.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center bg-[#27262D] rounded lg:rounded-full p-2 pl-6 border border-gray-700 max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="Email Address..."
                                className="flex-grow bg-transparent text-white focus:outline-none placeholder-gray-500 py-3 w-full"
                            />
                            <button className="bg-[#564AF7] text-white font-bold py-3 px-8 rounded-full w-full sm:w-auto mt-2 sm:mt-0">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;