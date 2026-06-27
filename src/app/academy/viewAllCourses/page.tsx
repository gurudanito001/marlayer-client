"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/academy/(home)/footer";

// --- 1. Background Icons
const BackgroundIcons = () => {
  const paths = {
    gradCap: <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />,
    bulb: <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.829 1.58-1.936a4.5 4.5 0 00-1.325-8.86l-.105-.002M9.75 18v-.192c0-.983-.658-1.829-1.58-1.936a4.5 4.5 0 011.325-8.86l.105-.002" />,
    search: <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />,
    pencil: <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />,
    chart: <><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></>,
    atom: <><ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(45 12 12)" /><ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(-45 12 12)" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></>,
    book: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  };

  const scatterMap = [
    { type: 'gradCap', className: 'top-[2%] left-[5%] -rotate-12 w-12 h-12' },
    { type: 'book', className: 'top-[5%] left-[45%] rotate-12 w-10 h-10' },
    { type: 'atom', className: 'top-[8%] left-[85%] rotate-90 w-12 h-12 hidden md:block' },
    { type: 'search', className: 'top-[12%] left-[20%] -rotate-12 w-10 h-10' },
    { type: 'pencil', className: 'top-[15%] left-[75%] -rotate-45 w-10 h-10 hidden sm:block' },
    { type: 'chart', className: 'top-[18%] left-[35%] rotate-12 w-12 h-12' },
    { type: 'bulb', className: 'top-[22%] left-[80%] -rotate-12 w-14 h-14' },
    { type: 'book', className: 'top-[25%] left-[10%] rotate-12 w-12 h-12' },
    { type: 'atom', className: 'top-[28%] left-[50%] -rotate-45 w-14 h-14' },
    { type: 'gradCap', className: 'top-[32%] left-[85%] rotate-12 w-12 h-12' },
    { type: 'pencil', className: 'top-[35%] left-[20%] -rotate-45 w-10 h-10 hidden md:block' },
    { type: 'chart', className: 'top-[38%] left-[70%] rotate-12 w-10 h-10' },
    { type: 'search', className: 'top-[42%] left-[40%] -rotate-12 w-12 h-12' },
    { type: 'bulb', className: 'top-[45%] left-[85%] rotate-12 w-10 h-10 hidden sm:block' },
    { type: 'gradCap', className: 'top-[48%] left-[15%] -rotate-12 w-12 h-12' },
    { type: 'book', className: 'top-[52%] left-[60%] rotate-12 w-10 h-10' },
    { type: 'atom', className: 'top-[55%] left-[90%] rotate-90 w-12 h-12 hidden md:block' },
    { type: 'search', className: 'top-[58%] left-[25%] -rotate-12 w-10 h-10' },
    { type: 'pencil', className: 'top-[62%] left-[80%] -rotate-45 w-12 h-12 hidden sm:block' },
    { type: 'chart', className: 'top-[65%] left-[40%] rotate-12 w-12 h-12' },
    { type: 'bulb', className: 'top-[68%] left-[10%] -rotate-12 w-12 h-12' },
    { type: 'book', className: 'top-[72%] left-[55%] rotate-12 w-10 h-10' },
    { type: 'atom', className: 'top-[75%] left-[85%] -rotate-45 w-14 h-14' },
    { type: 'gradCap', className: 'top-[78%] left-[20%] rotate-12 w-10 h-10' },
    { type: 'pencil', className: 'top-[82%] left-[65%] -rotate-45 w-12 h-12 hidden md:block' },
    { type: 'chart', className: 'top-[85%] left-[15%] rotate-12 w-10 h-10' },
    { type: 'search', className: 'top-[88%] left-[90%] -rotate-12 w-12 h-12' },
    { type: 'bulb', className: 'top-[92%] left-[45%] rotate-12 w-10 h-10 hidden sm:block' },
    { type: 'book', className: 'top-[95%] left-[75%] -rotate-12 w-12 h-12' },
    { type: 'atom', className: 'top-[98%] left-[10%] rotate-45 w-12 h-12' },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.12]">
      {scatterMap.map((item, index) => (
        <svg key={index} className={`absolute text-white ${item.className}`} fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          {paths[item.type as keyof typeof paths]}
        </svg>
      ))}
    </div>
  );
};

// --- 2. Types & Data ---
type Course = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  duration: string;
  timeCommitment: string;
  rating: number;
  price: string;
  isActive?: boolean;
};

const allCourses: Course[] = [
  { href: "/academy/courses/computer-basics", imageSrc: "/images/tech-academy/computer-basics.jpg", imageAlt: "Person learning computer basics", title: "Computer Basics", duration: "6 Weeks", timeCommitment: "4hrs/week", rating: 4.8, price: "₦65,000", isActive: true },
  { href: "/academy/courses/frontend-development-1", imageSrc: "/images/tech-academy/lady-dev.png", imageAlt: "A lady who is a developer", title: "Frontend Development: 1", duration: "6 - 8 Weeks", timeCommitment: "4hrs/week", rating: 4.9, price: "₦150,000", isActive: true },
  { href: "/academy/courses/javascript", imageSrc: "/images/javascript.webp", imageAlt: "JavaScript logo", title: "JavaScript", duration: "6 Weeks", timeCommitment: "4hrs/week", rating: 4.8, price: "#150,000", isActive: true },
  { href: "/academy/courses/frontend-development-2", imageSrc: "/images/tech-academy/lady-dev.png", imageAlt: "A lady who is a developer", title: "Frontend Development: 2", duration: "12 Weeks", timeCommitment: "4hrs/week", rating: 4.7, price: "#250,000", isActive: true },
  { href: "/academy/courses/backend-development", imageSrc: "/images/tech-academy/guy-dev.jpg", imageAlt: "Young guy SWE", title: "Backend Development", duration: "12 Weeks", timeCommitment: "4hrs/week", rating: 4.9, price: "#250,000", isActive: true },
  { href: "/academy/courses/c-sharp", imageSrc: "/images/c-sharp.webp", imageAlt: "C# Logo", title: "C#", duration: "6 Weeks", timeCommitment: "4hrs/week", rating: 4.8, price: "#200,000", isActive: true },
  { href: "/academy/courses/mobile-app-development", imageSrc: "/images/tech-academy/mobile-app-dev.jpg", imageAlt: "Mobile phone showing app", title: "Mobile App Development", duration: "16 Weeks", timeCommitment: "4hrs/week", rating: 4.8, price: "#350,000", isActive: true },
];

// --- 3. Course Card ---
const CourseCard = ({ course }: { course: Course }) => (
  <div className="group flex flex-col bg-white/5 border border-white/5 rounded-[1.25rem] overflow-hidden transition-all duration-300 shadow-lg hover:-translate-y-1 h-full z-10 backdrop-blur-sm">
    <div className="relative aspect-[4/3] w-full bg-[#050E0B]">
      <Image src={course.imageSrc} className="object-cover group-hover:scale-105 transition-transform duration-500" fill alt={course.imageAlt} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-[#45B1A0] transition-colors">{course.title}</h3>
      <div className="flex items-center justify-between text-xs text-gray-400 mb-6 font-medium mt-auto">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          {course.duration}
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          {course.timeCommitment}
        </div>
        <div className="flex items-center gap-1.5 text-orange">
          <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          {course.rating}
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <span className="text-lg font-bold text-white tracking-wide">{course.price}</span>
        <Link href={course.href} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${course.isActive ? 'bg-orange hover:bg-orange/85 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
          View Syllabus
        </Link>
      </div>
    </div>
  </div>
);

// --- 4. Main Page Component ---
export default function CoursesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Navbar state
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoTeal = "#45B1A0";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqs = [
    {
    q: "What is the primary focus of the academy?",
    a: "Our academy bridges the gap between having an idea and bringing it to life. We provide hands-on, beginner-friendly training in software development, design, and entrepreneurship to help you build real-world products and launch a successful career in tech."
  },
  {
    q: "Who are these courses designed for?",
    a: "Our programs are tailored for complete beginners, aspiring entrepreneurs wanting to build their own tech products, and professionals looking to future-proof their careers. If you have the drive to learn, you belong here—no matter your background."
  },
  {
    q: "Do I need any prior coding experience to enroll?",
    a: "Not at all. Our curriculum is designed from the ground up for absolute beginners. We start with the fundamentals and progressively guide you through advanced concepts, ensuring you build confidence and practical skills every step of the way."
  },
  {
    q: "What kind of support will I receive if I get stuck?",
    a: "You will never have to learn in isolation. Our academy offers a vibrant community platform, live Q&A sessions, and direct access to experienced mentors who are ready to help you debug code, review your projects, and guide your learning journey. You will also have access to a workspace where you can collaborate with peers and share your progress."
  },
  {
    q: "What equipment do I need to get started?",
    a: "All you need is a stable internet connection and a standard laptop or desktop computer. You don't need a high-end machine; any relatively modern Mac, Windows, or Linux computer will work perfectly for our development and data courses."
  },
  {
    q: "How long does it typically take to complete a course?",
    a: "Course durations vary depending on the specific learning path you choose, typically ranging from 12 to 48 weeks. We design our programs with flexibility in mind, allowing you to balance your tech education with your personal and professional schedule."
  },
  {
    q: "Will I receive a certificate upon completion?",
    a: "Yes. After successfully finishing a course and its required projects, you will receive a verifiable digital certificate. This serves as proof of your hands-on experience and can be easily showcased on your resume or LinkedIn profile for employers."
  },
  {
    q: "What is the application and payment process?",
    a: "Simply submit your application through our enrollment page. Once reviewed, our admissions team will send you a message with your next steps and how to complete the payment. We offer flexible payment plans and scholarships for eligible students to ensure that financial constraints do not hinder your learning journey."
  }
  ];

  // Tech stack array for the marquee
  const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "React", "Firebase", "Node.js", "Figma", "C#", "Git"];

  return (
    <main className="bg-[#050E0B] relative min-h-screen flex flex-col font-sans text-white overflow-x-hidden">
      
      {/* Inline Styles for Marquee Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* --- INTEGRATED NAVBAR --- */}
      <nav className={`w-full fixed top-0 z-[999] transition-all duration-300 ${isScrolled ? 'bg-[#0E1F18]/80 backdrop-blur-lg py-4 border-b border-white/5' : 'py-6'}`}>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          <Link href="/academy" className="flex items-baseline">
            <div className="">
              <Image src="/images/marlayer-logo.svg" width={24} height={24} alt="Marlayer Logo" />
            </div>
            <span className="font-extrabold text-2xl ml-0.5" style={{ color: logoTeal }}>
              ARLAYER
            </span>
            <span className='font-extrabold text-2xl text-white ml-2'>ACADEMY</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 bg-white/5 border border-white/10 rounded-full px-8 py-2.5 backdrop-blur-sm">
            <a href="#courses" className="text-white hover:text-[#45B1A0] text-sm font-medium transition-colors">Courses</a>
            <a href="#how-we-teach" className="text-white hover:text-[#45B1A0] text-sm font-medium transition-colors">How we Teach</a>
            <a href="#faqs" className="text-white hover:text-[#45B1A0] text-sm font-medium transition-colors">FAQs</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/academy/sign-up" className="hidden md:flex bg-orange hover:bg-orange/85 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all">
              Sign Up
            </Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* --- GLOBAL BACKGROUNDS --- */}
      <BackgroundIcons />
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      ></div>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-24 border-b border-white/[0.05]">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#45B1A0]/10 blur-[150px] rounded-full z-0 pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="w-full lg:w-1/2 text-left z-10">
            <p className="text-[#45B1A0] font-mono text-xs mb-6 uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#45B1A0]"></span> THE TECH FOUNDATION
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Build on the <br />
              <span className="text-[#45B1A0]">Layer that powers</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg mb-10 font-medium">
              Marlayer Academy is the training ecosystem businesses rely on — delivering world-class tech education to help you scale your career with confidence.
            </p>
            <Link href="#courses">
              <button className="bg-[#5cc5b3] text-black font-bold py-4 px-10 rounded transition-all shadow-[0_0_15px_rgba(69,177,160,0.3)]">
                Explore Courses
              </button>
            </Link>
          </div>

          <div className="hidden lg:block w-full lg:w-1/2 relative z-10">
            <div className="relative w-full max-w-md mx-auto transform translate-x-4 lg:translate-x-10">
              <div className="absolute inset-0 bg-[#45B1A0]/20 blur-[80px] rounded-full"></div>
              
              <div className="relative bg-[#0A1A18]/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-4 text-xs text-white/40 font-mono">build_future.ts</span>
                </div>
                
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <p><span className="text-pink-400">import</span> <span className="text-white">{'{'}</span> Success <span className="text-white">{'}'}</span> <span className="text-pink-400">from</span> <span className="text-green-400">'marlayer-academy'</span>;</p>
                  <br/>
                  <p><span className="text-blue-400">const</span> <span className="text-yellow-300">student</span> <span className="text-white">=</span> <span className="text-pink-400">await</span> <span className="text-blue-300">enrollNow</span><span className="text-white">()</span>;</p>
                  <br/>
                  <p><span className="text-pink-400">if</span> <span className="text-white">(</span>student.isDedicated<span className="text-white">) {'{'}</span></p>
                  <p className="pl-4"><span className="text-white">student.</span><span className="text-blue-300">buildRealProducts</span><span className="text-white">()</span>;</p>
                  <p className="pl-4"><span className="text-white">student.</span><span className="text-blue-300">getHired</span><span className="text-white">()</span>;</p>
                  <p><span className="text-white">{'}'}</span></p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-8 bg-[#050E0B] border border-[#45B1A0]/30 p-4 rounded-xl shadow-2xl flex items-center gap-4 z-20 animate-[bounce_4s_infinite]">
                <div className="w-10 h-10 rounded-full bg-[#45B1A0]/20 flex items-center justify-center text-[#45B1A0]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider mb-0.5">Career Status</p>
                  <p className="text-sm font-bold text-white">Accelerated</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* --- NEW SECTION 1: Infinite Tech Stack Marquee (Now Smaller) --- */}
      <section className="w-full py-4 border-b border-white/[0.05] bg-[#0E1F18]/50 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050E0B] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050E0B] to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-[200%] animate-marquee">
          {/* Render the array twice to create a seamless loop */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 px-8 flex-shrink-0">
              <span className="text-white/40 font-mono text-sm font-semibold tracking-wider uppercase hover:text-[#45B1A0] transition-colors cursor-default">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- COURSE GRID SECTION --- */}
      <section id="courses" className="w-full py-24 relative z-10 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Available Programs</h2>
              <p className="text-[#45B1A0] font-mono text-xs uppercase tracking-widest">Select a path to view the curriculum</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course) => (
              <CourseCard key={course.href} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* --- LONG GRADIENT CONTAINER FOR METHODOLOGY & FAQ --- */}
      <div className="relative w-full bg-gradient-to-b from-transparent via-[#071410] to-[#0E1F18]">
        
        {/* --- METHODOLOGY SECTION --- */}
        <section id="how-we-teach" className="w-full py-24 relative z-10 border-b border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16 z-10 relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Teach</h2>
              <p className="text-white/60">We don't just teach syntax. We teach you how to think like an engineer and solve complex problems.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                { title: "Project-Based Learning", desc: "No boring slides. You will build real-world clones (like E-commerce stores and dashboards) from week one." },
                { title: "Industry Mentorship", desc: "Learn directly from senior developers who actively build and deploy enterprise software at Marlayer." },
                { title: "Career Preparation", desc: "We review your resume, help you build a standout portfolio, and conduct mock technical interviews." }
              ].map((item, i) => (
                <div key={i} className="bg-black/20 border border-[#45B1A0]/20 rounded-xl p-8 hover:border-[#45B1A0]/60 transition-colors shadow-xl backdrop-blur-sm">
                  <div className="w-10 h-10 border border-[#45B1A0]/30 rounded flex items-center justify-center text-[#45B1A0] text-sm font-mono font-bold mb-6">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section id="faqs" className="w-full pt-24 pb-24 relative z-10">
          <div className="max-w-[1000px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
            
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-black/20 border border-white/10 rounded-xl overflow-hidden z-10 relative backdrop-blur-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-6 flex justify-between items-center text-left hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="font-semibold text-white">{faq.q}</span>
                    <span className={`text-[#45B1A0] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- NEW SECTION 3: Community CTA Banner --- */}
        <section className="w-full pb-32 relative z-10">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#0A1A18] to-[#0E1F18] border border-[#45B1A0]/20 p-10 md:p-16 text-center shadow-2xl">
              {/* Background Glow inside CTA */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-[#45B1A0]/10 blur-[100px] z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-[#F97316] font-bold tracking-widest text-sm uppercase mb-4">Join The Movement</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Don't Learn To Code Alone.
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
                  Connect with mentors, collaborate with other ambitious builders, and get exclusive access to resources by joining our vibrant community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/academy/sign-up" className="bg-[#5cc5b3] text-black font-bold py-4 px-8 rounded-full transition-all">
                    Start Your Journey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}