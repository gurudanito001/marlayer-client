"use client";

// Section 4 — What's Included (Differentiators)
// Goal: Replace vague "Gold Standard Warranty" with concrete, benefit-led features.
// Each feature resonates with an engineering leader or procurement head's core operational needs.

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Verified Hardware Traceability",
    tagline: "Zero grey-market risk. Zero unverified assets.",
    description:
      "Every single machine is sourced via official channels and subjected to granular hardware validation before dispatch. You receive transparent serial registry logs and full OEM asset documentation.",
    decisionValue: "Protects your corporate investment",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Zero-Touch Pre-Configuration",
    tagline: "Out-of-the-box infrastructure deployment.",
    description:
      "We initialize operating systems, configure remote access controls, install toolchains, and inject localized security protocols prior to boxing. Your team signs in and works immediately.",
    decisionValue: "Eliminates weeks of localized IT load",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "End-to-End Warranty Proxy",
    tagline: "We manage the manufacturer interface.",
    description:
      "If a component fails, your team interfaces solely with Marlayer. We intercept the diagnostic overhead, manage logistics, and dispatch replacement hardware so production remains unbroken.",
    decisionValue: "Zero vendor friction, zero downtime",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Volume Optimization Engines",
    tagline: "Procurement scale without pricing friction.",
    description:
      "Whether provisioned for 5 workstation upgrades or a 50-device infrastructure expansion, we optimize your hardware margin structure directly with original distributors to pass cost savings downward.",
    decisionValue: "Predictable, compounding capital savings",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Lifecycle Tracking & Optimization",
    tagline: "Preemptive asset replacement roadmap.",
    description:
      "We trace each asset's performance lifecycle over time, providing clear alert points before degradation spikes. You eliminate emergency procurement bottlenecks and maintain full budget line predictability.",
    decisionValue: "Total asset visibility & budget stability",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Dedicated Technical Accounts",
    tagline: "Direct engineering contact. Zero ticket queues.",
    description:
      "Skip generic service portals and conversational AI routing. You receive an assignment path to a real systems coordinator who fully understands your network, setup history, and product specifications.",
    decisionValue: "Uncompromised, direct operational accountability",
  },
];

export default function GadgetsWhatIsIncluded() {
  return (
    <section className="bg-[#F4F9F8] border-y border-[#E2EFEB] py-20 lg:py-28 relative overflow-hidden">
      
      {/* Structural Subtle Vector Ring */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-[#45B1A0]/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        {/* Section Header Group */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <span className="text-[#45B1A0] text-xs font-bold tracking-widest uppercase mb-3 block">
              Marlayer Operational Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2B1E] tracking-tight leading-tight mb-4">
              The infrastructure layer that isolates you from hardware procurement vulnerabilities.
            </h2>
            <p className="text-[#235843] sm:text-lg font-medium opacity-90 leading-relaxed">
              We do not simply ship consumer electronics. We manage the operational life, reliability matrix, 
              and initial workspace configurations so your engineering force stays locked into core delivery goals.
            </p>
          </div>
          
          <a
            href="/contact"
            className="group flex-shrink-0 inline-flex items-center gap-2 bg-transparent border-2 border-[#45B1A0] text-[#45B1A0] hover:bg-[#45B1A0] hover:text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#45B1A0]/10 hover:-translate-y-0.5 active:translate-y-0 text-center justify-center"
          >
            Request Enterprise Alignment
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Differentiator Architecture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white border border-[#E2EFEB] rounded-2xl p-6 xl:p-8 flex flex-col hover:border-[#45B1A0]/40 hover:shadow-xl hover:shadow-[#45B1A0]/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Dynamic Icon Node */}
              <div className="w-11 h-11 rounded-xl bg-[#F4F9F8] text-[#45B1A0] flex items-center justify-center border border-[#E2EFEB] mb-6 group-hover:bg-[#45B1A0] group-hover:text-white group-hover:border-[#45B1A0] transition-all duration-300 shadow-sm">
                {feature.icon}
              </div>

              {/* Title & Technical Tagline */}
              <h3 className="text-[#0D2B1E] font-black sm:text-lg mb-1 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[#45B1A0] text-xs font-bold tracking-wide mb-4 opacity-95">
                {feature.tagline}
              </p>

              {/* Description Body */}
              <p className="text-[#416B5C] text-sm leading-relaxed font-medium mb-6 flex-get-growth">
                {feature.description}
              </p>

              {/* Decision-Value Badge Footer */}
              <div className="mt-auto pt-4 border-t border-[#E2EFEB]/80 flex items-center">
                <div className="inline-flex items-center gap-2 bg-[#F4F9F8] border border-[#E2EFEB] px-3 py-1.5 rounded-lg w-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#45B1A0] animate-pulse flex-shrink-0" />
                  <span className="text-[11px] font-bold tracking-wide text-[#1B4D3A] uppercase">
                    Value: <span className="text-[#416B5C] lowercase font-semibold normal-case text-xs ml-0.5">{feature.decisionValue}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}