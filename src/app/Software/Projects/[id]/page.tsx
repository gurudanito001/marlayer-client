"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/(home)/footer"; // Updated path based on your standard setup
import Image from "next/image";
import Link from "next/link";

// --- Extended Mock Database for the New Layout ---
const projectData = {
    pardomart: {
        title: "Pardomart Mobile Ecosystem",
        mission: "A highly synchronized multi-vendor marketplace connecting customers, vendors, and drivers in real-time.",
        themeColor: "from-[#13332D]", // Brand Sync: Subtle purple bleed
        client: "U.S. Based Startup",
        services: "Mobile App Development",
        timeline: "4 Months",
        heroImage: "/images/padomart.png",
        liveLink: "https://pardomart.com",
        status: "Active & Scaling",
        challenge: "The client needed a scalable marketplace that could handle 1,000+ concurrent users without lag. The core difficulty was synchronizing three separate applications (Customer, Vendor, Driver) instantly without data collision.",
        solution: "We engineered a robust backend architecture using Node.js and real-time WebSockets. The frontends were built using React Native (Expo) to ensure seamless deployment across both iOS and Android platforms simultaneously, reducing load times by 40%.",
        stats: [
            { label: "Dedicated Apps Built", value: "3" },
            { label: "Sync Latency", value: "<50ms" },
            { label: "Uptime", value: "99.9%" }
        ],
        features: [
            { title: "Real-Time Route Mapping", desc: "Live GPS integration for delivery partners to optimize delivery times.", image: "/images/padomart.png", reverse: false },
            { title: "Vendor Control Center", desc: "Instant inventory, sales, and analytics management on the go.", image: "/images/padomart.png", reverse: true }
        ],
        techStack: ["React Native", "Expo", "Node.js", "Firebase", "WebSockets", "Google Maps SDK"],
        nextProject: { name: "Peniga Escrow Platform", slug: "peniga", image: "/images/peniga.png" }
    },
    peniga: {
        title: "Peniga Escrow Platform",
        mission: "A bank-grade secure online escrow platform designed to make digital buying and selling completely fraud-proof.",
        themeColor: "from-[#081210]", // Brand Sync: Trust/Finance blue bleed
        client: "Fintech Startup",
        services: "Web App Development",
        timeline: "6 Months",
        heroImage: "/images/peniga.png",
        liveLink: "https://peniga.com",
        status: "Live in Production",
        challenge: "Handling other people's money requires absolute security and flawless logic. The platform needed bank-grade encryption, seamless identity verification, and an unbreakable contract enforcement flow.",
        solution: "We deployed a Next.js frontend paired with a highly secure, encrypted backend. We integrated Stripe Connect for robust payment routing and automated KYC (Know Your Customer) verifications.",
        stats: [
            { label: "Encryption", value: "AES-256" },
            { label: "Payment Routing", value: "Instant" },
            { label: "Fraud Rate", value: "0.0%" }
        ],
        features: [
            { title: "Automated KYC Verification", desc: "Bank-level identity checks processed in under 60 seconds.", image: "/images/peniga.png", reverse: false },
            { title: "Smart Contract Escrow", desc: "Funds are locked and only released when cryptographic conditions are met.", image: "/images/peniga.png", reverse: true }
        ],
        techStack: ["Next.js", "React", "AWS", "Stripe API", "PostgreSQL", "Tailwind CSS"],
        nextProject: { name: "LooseApp Wellbeing Space", slug: "looseapp", image: "/images/looseapp.png" }
    },
    looseapp: {
        title: "LooseApp Wellbeing Space",
        mission: "An anonymous social wellbeing app connecting users with empathetic listeners for secure, low-latency emotional support.",
        themeColor: "from-emerald-900/30", // Brand Sync: Calming green bleed
        client: "HealthTech Startup",
        services: "Backend Development",
        timeline: "3 Months",
        heroImage: "/images/looseapp.png",
        liveLink: "#",
        status: "Beta Testing",
        challenge: "The app required absolute anonymity, extremely low-latency chat capabilities, and scalable infrastructure to handle thousands of concurrent, private peer-to-peer connections.",
        solution: "We architected a custom WebRTC integration for secure, peer-to-peer communication, backed by a highly optimized PostgreSQL database to manage user states without compromising privacy.",
        stats: [
            { label: "User Privacy", value: "100%" },
            { label: "Chat Latency", value: "<20ms" },
            { label: "Concurrent Users", value: "5k+" }
        ],
        features: [
            { title: "Peer-to-Peer Encryption", desc: "Messages are never stored on central servers, ensuring total privacy.", image: "/images/looseapp.png", reverse: false },
            { title: "Dynamic Listener Routing", desc: "AI-assisted matchmaking to connect users with the right listener instantly.", image: "/images/looseapp.png", reverse: true }
        ],
        techStack: ["Python", "Django", "PostgreSQL", "WebRTC", "Redis", "Docker"],
        nextProject: { name: "Pardomart Ecosystem", slug: "pardomart", image: "/images/padomart.png" }
    }
};

const ProjectDetails = () => {
    const params = useParams();
    const id = params.id as string;
    const project = projectData[id as keyof typeof projectData];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0A1A18]">
                <h1 className="text-3xl font-bold text-white">Project Not Found</h1>
            </div>
        );
    }

    return (
        <div className="bg-[#0A1A18] min-h-screen flex flex-col selection:bg-[#45B1A0] selection:text-white">
            <Navbar />

            {/* --- 1. BRAND SYNC HERO --- */}
            <div className={`relative w-full min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b ${project.themeColor} to-[#0A1A18]`}>
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] opacity-50 pointer-events-none"></div>
                
                <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-left">
                        <p className="text-[#45B1A0] font-bold text-sm mb-6 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-[#45B1A0]"></span> Case Study
                        </p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-light">
                            {project.mission}
                        </p>
                    </div>
                    
                    {/* 3D Perspective Mockup Area */}
                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform lg:-rotate-2 lg:hover:rotate-0 transition-transform duration-700 border border-white/10 group">
                        <Image
                            src={project.heroImage}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* --- 2. THE CONTEXT GRID --- */}
            <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 -mt-10 relative z-20 mb-32">
                <div className="bg-[#112220] border border-white/5 rounded-3xl p-8 lg:p-12 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <p className="text-gray-500 text-sm mb-2 font-medium">Client</p>
                        <p className="text-white font-semibold text-lg">{project.client}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm mb-2 font-medium">Services</p>
                        <p className="text-white font-semibold text-lg">{project.services}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm mb-2 font-medium">Timeline</p>
                        <p className="text-white font-semibold text-lg">{project.timeline}</p>
                    </div>
                    <div className="flex items-center md:justify-end">
                        {project.liveLink !== "#" && (
                            <Link href={project.liveLink} target="_blank" className="flex items-center gap-2 text-[#45B1A0] hover:text-white font-bold transition-colors group">
                                Visit Live Site
                                <svg className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* --- 3. PROBLEM & SOLUTION NARRATIVE --- */}
            <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 py-10 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 tracking-tight">The Challenge</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {project.challenge}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 tracking-tight">The Marlayer Solution</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {project.solution}
                        </p>
                    </div>
                </div>
            </div>

            {/* --- TYPOGRAPHIC HIERARCHY / IMPACT STATS --- */}
            <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 mb-40">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-b border-white/10 py-16">
                    {project.stats.map((stat, i) => (
                        <div key={i} className="text-center md:text-left">
                            <h3 className="text-5xl lg:text-7xl font-semibold text-white mb-4 tracking-tighter">
                                {stat.value}
                            </h3>
                            <p className="text-[#45B1A0] font-medium text-lg uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- 4. ZIG-ZAG FEATURE SHOWCASE --- */}
            <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 mb-40">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-20 text-center tracking-tight">Core Mechanics</h2>
                
                <div className="flex flex-col gap-32">
                    {project.features.map((feature, i) => (
                        <div key={i} className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 group`}>
                            <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#112220] border border-white/5">
                                <Image src={feature.image} alt={feature.title} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h3 className="text-3xl font-bold text-white mb-6">{feature.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- 5. BENTO TECHNICAL GRID --- */}
            <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 mb-40">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-16 tracking-tight">The Engine Room</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Live Status Pill (Takes up 2 columns on mobile) */}
                    <div className="col-span-2 md:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-start h-32 hover:bg-white/10 transition-colors">
                        <p className="text-gray-400 text-sm mb-2 font-medium uppercase tracking-wider">System Status</p>
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#45B1A0] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#45B1A0]"></span>
                            </span>
                            <span className="text-white font-bold">{project.status}</span>
                        </div>
                    </div>

                    {/* Tech Stack Boxes */}
                    {project.techStack.map((tech, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center h-32 hover:bg-white/10 transition-colors group">
                            <span className="text-white font-medium text-lg group-hover:text-[#45B1A0] transition-colors">{tech}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- 6. BOTTOM NAVIGATION (Next Project) --- */}
            <Link href={`/software/Projects/${project.nextProject.slug}`} className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden group border-t border-white/10">
                <div className="absolute inset-0 z-0 bg-black">
                    <Image 
                        src={project.nextProject.image} 
                        alt={project.nextProject.name} 
                        fill 
                        className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000" 
                    />
                </div>
                <div className="relative z-10 text-center px-6">
                    <p className="text-[#45B1A0] font-bold text-sm mb-4 uppercase tracking-widest">Up Next</p>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                        {project.nextProject.name}
                    </h2>
                    <span className="inline-block border border-white/30 text-white px-8 py-4 rounded-full font-bold group-hover:bg-white group-hover:text-black transition-colors duration-300">
                        View Case Study
                    </span>
                </div>
            </Link>

            <Footer />
        </div>
    );
};

export default ProjectDetails;