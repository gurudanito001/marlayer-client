"use client";

// Section 5 — Social Proof
// Goal: Reduce the last remaining risk in the buyer's mind — "but will it work for me?"
// Testimonials from business buyers, case study stat block, and trust logos.

const testimonials = [
  {
    quote:
      "We needed 12 laptops configured and delivered for an incoming team in 5 days. Marlayer had them at our office in 3 days, pre-configured with our technical environment. Our onboarding pipeline used to take 2 full days — it took 2 hours.",
    name: "Adebayo F.",
    title: "Operations Manager",
    company: "Fintech Startup, Lagos",
    initials: "AF",
    bgClass: "bg-[#45B1A0]",
  },
  {
    quote:
      "We used to source from fragmented vendors and chase broken warranty claims for weeks on end. Moving our entire technology procurement cycle to Marlayer eliminated that overhead completely. Everything goes through one clean loop.",
    name: "Chioma O.",
    title: "Head of Admin",
    company: "Marketing Agency, Abuja",
    initials: "CO",
    bgClass: "bg-[#2B7A6E]",
  },
  {
    quote:
      "The zero-touch pre-configuration service pays for itself. Our outside IT specialist used to invoice us a full day's rate every single time we introduced a new engineer. That operational cost is completely optimized now.",
    name: "Emeka N.",
    title: "Founder & CEO",
    company: "Logistics Fleet, Port Harcourt",
    initials: "EN",
    bgClass: "bg-[#0D2B1E]",
  },
];

const stats = [
  { value: "200+", label: "Nigerian scale operations equipped" },
  { value: "48h", label: "Average target fulfillment window" },
  { value: "0%", label: "Counterfeit or unverified hardware history" },
  { value: "12mo", label: "Minimum contract warranty protection" },
];

export default function GadgetsSocialProof() {
  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-[#45B1A0] text-xs font-bold tracking-widest uppercase mb-3 block">
            Validated Accountability
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2B1E] tracking-tight leading-tight">
            The standard for scaling teams that stopped gambling on critical hardware procurement.
          </h2>
        </div>

        {/* Testimonials Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#F4F9F8] border border-[#E2EFEB] rounded-2xl p-6 xl:p-8 flex flex-col justify-between hover:border-[#45B1A0]/30 hover:shadow-xl hover:shadow-[#45B1A0]/5 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div>
                {/* Visual Quote Accent Mark */}
                <div className="text-5xl text-[#C2DCD6]/60 font-serif leading-none mb-2 select-none">&ldquo;</div>
                
                {/* Review Body */}
                <p className="text-[#1F4A3C] text-sm leading-relaxed font-medium mb-8">
                  {t.quote}
                </p>
              </div>

              {/* Attribution Meta Data Footer */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-[#E2EFEB]">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-sm ${t.bgClass}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#0D2B1E] text-sm font-bold tracking-tight">{t.name}</p>
                  <p className="text-[#557D71] text-xs font-medium mt-0.5">{t.title} · <span className="opacity-85">{t.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High-Contrast Corporate Stats Dashboard Block */}
        <div className="bg-[#0D2B1E] rounded-3xl p-8 md:p-10 lg:p-12 shadow-xl shadow-[#0D2B1E]/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#45B1A0]/5 blur-[60px] pointer-events-none" />
          
          <p className="text-[#A3BFB9] text-xs font-bold tracking-widest uppercase mb-10 text-center lg:text-left">
            Operational Assurance Blueprint
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center lg:items-start">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
                  {stat.value}
                </p>
                <p className="text-[#A3BFB9] text-xs font-medium leading-snug text-center lg:text-left max-w-[180px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Case Study Content Teaser Card */}
        <div className="group mt-8 border border-[#E2EFEB] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#45B1A0]/40 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start md:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#F4F9F8] text-[#45B1A0] flex items-center justify-center flex-shrink-0 border border-[#E2EFEB] group-hover:bg-[#45B1A0] group-hover:text-white transition-colors duration-300 shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold text-[#45B1A0] uppercase tracking-widest block mb-1">
                Deep-Dive Deployment Analysis
              </span>
              <p className="text-[#0D2B1E] font-extrabold text-base tracking-tight leading-snug">
                How a 20-person scaling workforce in Lagos completely initialized their local workspace hardware profile layer inside 72 hours.
              </p>
            </div>
          </div>
          
          <a
            href="/gadgets/case-studies"
            className="inline-flex items-center justify-center gap-2 bg-[#F4F9F8] border border-[#E2EFEB] text-[#45B1A0] font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200 group-hover:bg-[#45B1A0] group-hover:text-white group-hover:border-[#45B1A0] whitespace-nowrap w-full md:w-auto text-center"
          >
            Review Case Study
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}