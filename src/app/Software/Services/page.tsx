"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/(home)/footer";

// --- TypeScript Interfaces ---
interface SubService {
  id: string;
  title: string;
  content: string;
}

interface ServiceData {
  id: string;
  sectionTitle: string;
  description: string;
  subServices: SubService[];
  images: string[];
}

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

// --- Reusable Accordion Component ---
const AccordionItem = ({ title, content, isOpen, onClick }: AccordionItemProps) => (
  <div className="border-b border-gray-200 py-5 w-full">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left group"
    >
      <span className="text-lg text-gray-900 font-bold group-hover:text-[#45B1A0] transition-colors">
        {title}
      </span>
      <span className="text-gray-400 transition-transform duration-300">
        {isOpen ? (
          <svg className="w-5 h-5 text-[#45B1A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5 group-hover:text-[#45B1A0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="text-sm text-gray-600 leading-relaxed pr-8 pb-2">
        {content}
      </div>
    </div>
  </div>
);

// --- Dynamic Bento Grid Layouts ---
const BentoGridLeftLarge = ({ images }: { images: string[] }) => (
  <div className="relative w-full aspect-[4/3] rounded-3xl p-3 flex gap-3 bg-gray-50 border border-gray-200 shadow-xl overflow-hidden">
    <div className="relative w-1/2 h-full rounded-2xl overflow-hidden bg-gray-200">
      <img src={images[0]} alt="Service Large" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="flex flex-col gap-3 w-1/2 h-full">
      <div className="relative w-full h-1/2 rounded-2xl overflow-hidden bg-gray-200">
        <img src={images[1]} alt="Service Small Top" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="relative w-full h-1/2 rounded-2xl overflow-hidden bg-gray-200">
        <img src={images[2]} alt="Service Small Bottom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
      </div>
    </div>
  </div>
);

const BentoGridRightLarge = ({ images }: { images: string[] }) => (
  <div className="relative w-full aspect-[4/3] rounded-3xl p-3 flex gap-3 bg-gray-50 border border-gray-200 shadow-xl overflow-hidden">
    <div className="flex flex-col gap-3 w-1/2 h-full">
      <div className="relative w-full h-1/2 rounded-2xl overflow-hidden bg-gray-200">
        <img src={images[1]} alt="Service Small Top" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="relative w-full h-1/2 rounded-2xl overflow-hidden bg-gray-200">
        <img src={images[2]} alt="Service Small Bottom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
      </div>
    </div>
    <div className="relative w-1/2 h-full rounded-2xl overflow-hidden bg-gray-200">
      <img src={images[0]} alt="Service Large" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
  </div>
);

// --- Single Section Component ---
const ServiceSection = ({ data, index }: { data: ServiceData; index: number }) => {
  const [openId, setOpenId] = useState<string>(data.subServices[0].id);
  const isEven = index % 2 !== 0;
  const sectionBg = isEven ? "bg-[#F7FAFA]" : "bg-white";

  return (
    <div className={`w-full py-24 border-b border-gray-100 ${sectionBg}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{data.sectionTitle}</h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">{data.description}</p>
          
          <div className="flex flex-col w-full">
            {data.subServices.map((item) => (
              <AccordionItem
                key={item.id}
                title={item.title}
                content={item.content}
                isOpen={openId === item.id}
                onClick={() => setOpenId(openId === item.id ? "" : item.id)}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          {isEven ? <BentoGridRightLarge images={data.images} /> : <BentoGridLeftLarge images={data.images} />}
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
const Services = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    { name: "Sarah Jenkins", co: "TechNova CEO", text: "The team exceeded our expectations with a sleek, modern design that truly represents our brand. Conversions skyrocketed!", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
    { name: "Michael Anderson", co: "Luxe Beauty", text: "From initial concept to final execution, they nailed every aspect of our UI/UX. The branding feels incredibly premium.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" },
    { name: "Mark Thompson", co: "FinCore Solutions", text: "Our platform was outdated, but they transformed it into a cutting-edge experience. Customer engagement has doubled!", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" },
    { name: "Elena Rodriguez", co: "Vantage Global", text: "Professional, responsive, and incredibly talented. They delivered our complex mobile app weeks ahead of schedule.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" },
    { name: "David Chen", co: "CloudScale", text: "The software architecture they designed for us is robust, secure, and handles our heavy traffic spikes effortlessly.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
    { name: "Jessica Blair", co: "Spark Creative", text: "Their branding strategy gave us a unique identity in a crowded market. The logo and guidelines are absolutely flawless.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop" }
  ];

  const servicesData: ServiceData[] = [
    {
      id: "sec-1",
      sectionTitle: "01/ Software Design",
      description: "Seamless, user-centric design that enhances engagement and delivers an intuitive experience.",
      subServices: [
        { id: "1-1", title: "Wireframing & Prototyping", content: "We provide the best and most innovative software design services, tailored to your specific business needs." },
        { id: "1-2", title: "User Interface (UI) Design", content: "Focuses on creating visually appealing, intuitive, and user-friendly digital experiences." },
        { id: "1-3", title: "User Experience (UX) Research", content: "Deep dives into user behaviors to ensure seamless navigation and optimized workflows." }
      ],
      images: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80", 
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80", 
        "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&q=80"  
      ]
    },
    {
      id: "sec-2",
      sectionTitle: "02/ Software Development",
      description: "Robust, scalable, and high-performing software tailored to solve your unique business challenges.",
      subServices: [
        { id: "2-1", title: "Custom Software Solutions", content: "We provide the best and most innovative software development services from ground up." },
        { id: "2-2", title: "API Development & Integration", content: "Connecting your software seamlessly with third-party tools and services." },
        { id: "2-3", title: "Quality Assurance & Testing", content: "Rigorous testing to ensure bug-free, highly optimized software deployment." }
      ],
      images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80", 
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80", 
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"  
      ]
    },
    {
      id: "sec-3",
      sectionTitle: "03/ Website Development",
      description: "High-performance, responsive websites that combine aesthetics with top-tier functionality.",
      subServices: [
        { id: "3-1", title: "Frontend & Backend Development", content: "Working together to create seamless, high-performing digital web experiences." },
        { id: "3-2", title: "E-commerce Development", content: "Building scalable and secure online stores optimized for high conversion rates." },
        { id: "3-3", title: "CMS Integration", content: "Integrating powerful CMS platforms like WordPress and Webflow for easy content management." }
      ],
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80", 
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", 
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80"  
      ]
    },
    {
      id: "sec-4",
      sectionTitle: "04/ Apps & Games Development",
      description: "Engaging and innovative mobile applications and gaming experiences for iOS and Android.",
      subServices: [
        { id: "4-1", title: "Mobile App Development", content: "We provide the best and most innovative mobile app development services, tailored to your requirements." },
        { id: "4-2", title: "Game Design & Mechanics", content: "Crafting addictive gameplay loops, mechanics, and beautiful in-game assets." },
        { id: "4-3", title: "Cross-Platform Development", content: "Building once and deploying everywhere using modern frameworks like React Native or Flutter." }
      ],
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80", 
        "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&q=80", 
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"  
      ]
    },
    {
      id: "sec-5",
      sectionTitle: "05/ Software Architecture",
      description: "Laying the perfect structural foundation to ensure your digital products can scale infinitely.",
      subServices: [
        { id: "5-1", title: "System Design", content: "Mapping out secure and highly available server architectures." },
        { id: "5-2", title: "Cloud Infrastructure", content: "Deploying solutions using scalable cloud providers like AWS, Azure, or Google Cloud." },
        { id: "5-3", title: "Database Optimization", content: "Ensuring fast and secure data retrieval for data-heavy applications." }
      ],
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", 
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", 
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"  
      ]
    },
    {
      id: "sec-6",
      sectionTitle: "06/ Branding & Identity",
      description: "Transform your brand into a powerful identity with strategic branding solutions.",
      subServices: [
        { id: "6-1", title: "Logo & Visual Identity", content: "Creating memorable logos and visual assets that represent your core mission." },
        { id: "6-2", title: "Brand Strategy & Positioning", content: "Defining how a brand stands out in the market by establishing its unique values." },
        { id: "6-3", title: "Typography & Color Guidelines", content: "Building comprehensive brand kits for consistency across all touchpoints." }
      ],
      images: [
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80", 
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80", 
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"  
      ]
    },
    {
      id: "sec-7",
      sectionTitle: "07/ Digital Marketing",
      description: "Data-driven marketing strategies that amplify your reach and convert leads into loyal customers.",
      subServices: [
        { id: "7-1", title: "Search Engine Optimization (SEO)", content: "Optimizing your digital footprint to rank higher on search engines organically." },
        { id: "7-2", title: "Social Media Campaigns", content: "Engaging your audience directly through targeted social media advertising." },
        { id: "7-3", title: "Conversion Rate Optimization", content: "Analyzing user behavior to turn more of your current traffic into paying users." }
      ],
      images: [
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80", 
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", 
        "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80"  
      ]
    },
    {
      id: "sec-8",
      sectionTitle: "08/ Maintenance & Support",
      description: "Ongoing technical support to ensure your platforms remain secure, updated, and fast.",
      subServices: [
        { id: "8-1", title: "24/7 Monitoring", content: "Constant oversight to prevent downtime and resolve issues before they affect users." },
        { id: "8-2", title: "Security Patches & Updates", content: "Keeping your codebase up to date with the latest security standards." },
        { id: "8-3", title: "Performance Scaling", content: "Upgrading your servers and databases as your user base grows." }
      ],
      images: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", 
        "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&q=80",
        "https://images.unsplash.com/photo-1607799279861-4dd97b876258?w=800&q=80" 
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900 selection:bg-[#45B1A0] selection:text-white">
      
      <style>{`
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }
        @keyframes float-reverse { 0% { transform: translateY(0px); } 50% { transform: translateY(20px); } 100% { transform: translateY(0px); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.4s ease-out forwards; }
      `}</style>

      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative w-full min-h-[95vh] bg-[#0A1A18] flex items-center justify-center overflow-hidden pt-32 pb-24 lg:pt-40">
        
        {/* Vertical Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A18] via-[#0A1A18]/80 to-transparent z-5"></div>

        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="geomPattern" patternUnits="userSpaceOnUse" width="100" height="173.2" patternTransform="scale(0.8)">
                <path d="M50 0 L100 28.85 L100 86.6 L50 115.45 L0 86.6 L0 28.85 Z" fill="none" stroke="#45B1A0" strokeWidth="0.5"/>
                <path d="M50 0 L50 57.7 L100 86.6 M50 57.7 L0 86.6" fill="none" stroke="#45B1A0" strokeWidth="0.5"/>
                <path d="M50 115.45 L100 144.3 L100 202.05 L50 230.9 L0 202.05 L0 144.3 Z" fill="none" stroke="#45B1A0" strokeWidth="0.5"/>
                <path d="M50 115.45 L50 173.15 L100 202.05 M50 173.15 L0 202.05" fill="none" stroke="#45B1A0" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geomPattern)" />
          </svg>
        </div>
        
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#45B1A0] rounded-full mix-blend-screen filter blur-[150px] opacity-40 animate-pulse z-1"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#45B1A0] rounded-full mix-blend-screen filter blur-[150px] opacity-20 z-1"></div>

        {/* Updated px-4 sm:px-6 lg:px-8 to properly align with Navbar */}
        <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-start gap-16">
          
          <div className="w-full max-w-3xl text-center lg:text-left">
            <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-[#45B1A0] text-xs md:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
              What We Do
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.15]">
              Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45B1A0] to-teal-200">
                Technology Solutions
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              We go beyond writing code. We design, build, and scale world-class software solutions that transform businesses and elevate user experiences.
            </p>
            <button className="bg-[#45B1A0] hover:bg-[#348A7D] text-white px-8 py-4 rounded-full font-bold">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full flex flex-col">
        {servicesData.map((data, index) => (
          <ServiceSection key={data.id} data={data} index={index} />
        ))}
      </div>

      {/* --- UNIFIED CTA & TESTIMONIALS SECTION --- */}
      <section className="w-full bg-[#F2F8F6] py-24 border-t border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative w-full rounded-3xl overflow-hidden bg-[#0A1A18] py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl mb-32">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#45B1A0]/20 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                Let&apos;s Create Something<br />
                <span className="text-[#45B1A0]">Amazing</span> Together!
              </h2>
            </div>
            <div className="relative z-10">
              <button className="bg-[#45B1A0] hover:bg-[#348A7D] transition-colors text-white px-8 py-4 rounded-full flex items-center gap-3 font-bold shadow-lg shadow-[#45B1A0]/20">
                Schedule a Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setTestimonialIndex(0)}
                className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all ${testimonialIndex === 0 ? 'bg-gray-100 opacity-50 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
                disabled={testimonialIndex === 0}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => setTestimonialIndex(1)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${testimonialIndex === 1 ? 'bg-gray-400 opacity-50 cursor-not-allowed' : 'bg-[#45B1A0] hover:bg-[#348A7D]'}`}
                disabled={testimonialIndex === 1}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          {/* Testimonials */}
          <div className="w-full relative min-h-[300px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" key={testimonialIndex}>
              {testimonials.slice(testimonialIndex * 3, testimonialIndex * 3 + 3).map((client, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-xl p-8 flex flex-col justify-between shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden relative border-2 border-[#45B1A0]/20 bg-gray-100 flex-shrink-0">
                        <img src={client.img} alt={client.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">{client.name}</h4>
                        <p className="text-gray-500 text-sm font-medium">{client.co}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm mb-8 italic">&quot;{client.text}&quot;</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;