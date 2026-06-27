"use client";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "pardomart",
    title: "Pardomart Admin Infrastructure",
    category: "Multi-Vendor Ecosystem",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Custom API"],
    desc: "A complete administrative command center for a complex multi-vendor ecosystem. We engineered highly optimized sub-store management interfaces, robust API endpoint integrations, and state management solutions to handle massive data inputs seamlessly.",
   /*  metrics: [
      { label: "Data Rendering", value: "< 100ms" },
      { label: "Vendor Capacity", value: "10k+" }
    ], */
    img: "/images/padomart.png"
  },
  {
    id: "peniga",
    title: "Peniga Secure Escrow Platform",
    category: "Financial Infrastructure",
    tech: ["Next.js", "NestJS", "Stripe API", "PostgreSQL"],
    desc: "A trusted digital escrow platform allowing users to hold funds securely until transaction terms are met. We engineered a seamless payment flow, robust dispute resolution mechanisms, and bank-grade security protocols to protect both parties from fraud.",
    /* metrics: [
      { label: "Transaction Security", value: "AES-256" },
      { label: "Payment Processing", value: "Instant" }
    ], */
    img: "/images/peniga.png"
  },
  {
    id: "imusuglobal",
    title: "imusuGlobal Wellness Hub",
    category: "Global Directory & Editorial",
    tech: ["React", "Next.js App Router", "Zustand"],
    desc: "A premium magazine-style global affiliate directory. We architected complex regional redirect logic, advanced category filtering, and a high-fidelity editorial UI that maintains strict performance standards across all devices.",
    /* metrics: [
      { label: "Global Traffic", value: "Optimized" },
      { label: "SEO Score", value: "98/100" }
    ], */
    img: "/images/imusu (2).png"
  },
  {
    id: "looseapp",
    title: "LooseApp Wellbeing Platform",
    category: "Real-Time Architecture",
    tech: ["WebSockets", "Redis", "Express", "Node.js"],
    desc: "A secure, real-time communication platform connecting users with empathetic listeners for emotional support. We engineered a highly scalable WebSocket architecture backed by Redis to ensure zero-latency message delivery and robust connection stability under heavy load.",
    /* metrics: [
      { label: "Message Latency", value: "< 50ms" },
      { label: "Concurrent Users", value: "10k+" }
    ], */
    img: "/images/looseapp.png"
  }
];

export default function ProjectsList() {
  return (
    <section className="w-full bg-[#0A1A18] py-32 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28">

        <div className="mb-24 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Featured Projects</h2>
          <p className="text-white/50 text-lg">A selection of platforms we've designed and engineered to solve complex business challenges across fintech, enterprise, logistics, and digital commerce.</p>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((proj, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <div key={proj.id} className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-stretch group`}>

                {/* Project Image Box */}
                <div className="w-full lg:w-1/2">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#071A10] border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 bg-[#45B1A0]/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                    <Image
                      src={proj.img}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <p className="text-[#45B1A0] font-mono text-xs mb-4 uppercase tracking-[0.2em]">
                    // {proj.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {proj.title}
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    {proj.desc}
                  </p>

                  {/* Internal Metrics / Tech */}
                  {/* <div className="grid grid-cols-2 gap-6 mb-10 py-6 border-y border-white/10">
                    {proj.metrics.map((m, i) => (
                      <div key={i}>
                        <p className="text-2xl font-bold text-white mb-1">{m.value}</p>
                        <p className="text-[#45B1A0] font-mono text-[10px] uppercase tracking-widest">{m.label}</p>
                      </div>
                    ))}
                  </div> */}

                  <div className="flex flex-wrap gap-2 mb-10">
                    {proj.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-white/70 backdrop-blur-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link href={`/software/projects/${proj.id}`} className="inline-flex items-center gap-3 w-fit bg-transparent border border-[#45B1A0] text-[#45B1A0] hover:bg-[#45B1A0] hover:text-[#0D2B1E] font-bold px-8 py-3 rounded-xl transition-all duration-300 group/btn">
                    Read Case Study
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}