"use client";
import { useState } from "react";
import {
  PenTool,
  Code2,
  Globe,
  Smartphone,
  Server,
  LayoutTemplate,
  Workflow,
  ShieldCheck
} from "lucide-react";

const servicesData = [
  {
    id: "sec-1",
    title: "Product Strategy & Design",
    description: "We transform ideas into intuitive digital experiences through user research, interface design, and rapid prototyping that align business objectives with customer needs.",
    subServices: [
      { title: "Wireframing & Prototyping", content: "Interactive concepts that validate user flows before development.", icon: LayoutTemplate },
      { title: "UI Design", content: "Beautiful, accessible interfaces built around your brand identity.", icon: PenTool },
      { title: "UX Research", content: "Research-driven experiences focused on usability and engagement.", icon: Workflow }
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80"
  },
  {
    id: "sec-2",
    title: "Custom Software Developmen",
    description: "From internal platforms to enterprise applications, we engineer scalable software solutions tailored to your unique business processes.",
    subServices: [
      { title: "Custom Software", content: "Purpose-built software designed around your workflows.", icon: Code2 },
      { title: "API Integration", content: "Connect modern and legacy systems seamlessly.", icon: Workflow },
      { title: "Quality Assurance", content: "Automated and manual testing to ensure reliable deployments.", icon: ShieldCheck }
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
  },
  {
    id: "sec-3",
    title: "Web Platforms",
    description: "Modern, responsive websites and web applications optimized for performance, security, and long-term scalability.",
    subServices: [
      { title: "Full-Stack Web Apps", content: "Robust web applications powered by modern technologies.", icon: Globe },
      { title: "E-commerce Platforms", content: "Online stores built for growth and conversion.", icon: Workflow },

      { title: "Headless CMS", content: "Flexible content management systems for fast publishing.", icon: LayoutTemplate }
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
  },
  {
    id: "sec-4",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile applications delivering seamless experiences across iOS and Android",
    subServices: [
      { title: "Native Apps", content: "High-performance mobile experiences built specifically for each platform.", icon: Smartphone },
      { title: "Cross-Platform Apps", content: "Efficient development using modern frameworks like React Native.", icon: Code2 },
      { title: "Interactive Experiences", content: "Engaging applications designed to maximize user retention.", icon: PenTool }
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"
  },
  {
    id: "sec-5",
    title: "Cloud & System Architecture",
    description: "Reliable infrastructures engineered to scale under demanding workloads while maintaining security and performance.",
    subServices: [
      { title: "Cloud Infrastructure", content: "AWS, Azure, and Google Cloud deployment strategies.", icon: Server },
      { title: "Database Architecture", content: "Efficient, secure data models optimized for speed.", icon: Workflow },
      { title: "Microservices", content: "Scalable distributed systems built for continuous growth.", icon: Code2 }
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
  }
];

export default function ServicesList() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const activeService = servicesData.find(s => s.id === activeTab) || servicesData[0];

  return (
    <section className="w-full py-24 bg-[#0A1A18] relative z-10 border-b border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">

          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 flex flex-col gap-2 shrink-0 border-l-2 border-white/10 pl-6">
            <p className="text-[#45B1A0] uppercase tracking-[0.2em] text-xs font-mono mb-3">
    // Service Overview
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">
              What We Build
            </h2>

            <p className="text-white/50 leading-relaxed mb-10">
              Explore our core capabilities and discover how we design, engineer,
              and scale software solutions for ambitious businesses.
            </p>
            {servicesData.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`text-left py-4 px-6 rounded-r-xl transition-all duration-300 relative group ${activeTab === service.id
                    ? "bg-[#45B1A0]/10 text-[#45B1A0]"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
              >
                {activeTab === service.id && (
                  <div className="absolute left-[-26px] top-0 bottom-0 w-1 bg-[#45B1A0] rounded-r-md shadow-[0_0_10px_rgba(69,177,160,0.5)]"></div>
                )}
                <span className="font-mono text-xs block mb-1 opacity-70">0{index + 1}</span>
                <span className="text-lg md:text-xl font-bold tracking-tight">{service.title}</span>
              </button>
            ))}
          </div>

          <div className="w-full lg:w-2/3 min-h-[600px]">
            <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-forwards">

              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
                {activeService.title}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl">
                {activeService.description}
              </p>

              <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden relative border border-white/10 group mb-12">

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A10]/70 via-transparent to-transparent z-10" />

                <div className="absolute inset-0 bg-[#45B1A0]/20 mix-blend-overlay z-20 group-hover:opacity-0 transition-opacity duration-700" />

                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeService.subServices.map((sub, idx) => {
                  const Icon = sub.icon;

                  return (
                    <div
                      key={idx}
                      className="h-full bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#45B1A0]/30 transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#45B1A0]/10 flex items-center justify-center mb-5">
                        <Icon className="w-5 h-5 text-[#45B1A0]" />
                      </div>

                      <h3 className="text-white font-bold mb-3">
                        {sub.title}
                      </h3>

                      <p className="text-white/50 text-sm leading-relaxed">
                        {sub.content}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}