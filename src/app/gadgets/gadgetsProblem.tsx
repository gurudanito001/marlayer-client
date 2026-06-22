"use client";

// Section 2 — The Problem
// Goal: Name the exact pains your buyer has lived through.
// When they nod reading this, they're already sold.

const problems = [
  {
    number: "01",
    headline: "You paid for premium quality. You received deep disappointment.",
    body: "Devices that looked immaculate in digital portfolios arrived underpowered, internally degraded, or outright mismatched. By the time your team flagged the performance issues, the supplier was completely unreachable.",
  },
  {
    number: "02",
    headline: "Your technical team lost critical days initializing equipment.",
    body: "Laptops and workstations arrived blank with zero local optimization, missing profiles, and unconfigured accounts. Your senior staff wasted 48 business hours debugging infrastructure instead of executing their core roles.",
  },
  {
    number: "03",
    headline: "A mission-critical device failed. Your support window is a ghost.",
    body: "Hardware glitched three months post-deployment. The vendor stopped answering calls, forcing your finance team to either fully absorb the capital loss or restart the stressful vendor search loop from scratch.",
  },
  {
    number: "04",
    headline: "Every infrastructure procurement cycle restarts from absolute zero.",
    body: "No historical data logs. No unified warranty registry. No systematic device replacement roadmaps. Every single device purchase turns into a high-stakes corporate gamble, a new negotiation, and a fresh operational risk.",
  },
];

export default function GadgetsProblem() {
  return (
    <section className="relative bg-[#F4F9F8] border-y border-[#E2EFEB] py-20 lg:py-28 overflow-hidden">
      
      {/* Background Graphic Vignette */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#D97706]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#45B1A0]/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 bg-[#FEF3C7] text-[#D97706] text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[#FDE68A] mb-4 shadow-sm">
            <svg className="w-3.5 h-3.5 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            The True Friction of Technology Procurement
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2B1E] tracking-tight leading-tight mb-4">
            If your operation has faced any of these hurdles,{" "}
            <span className="text-[#D97706]">you are not alone.</span>
          </h2>
          <p className="text-[#235843] text-lg font-medium opacity-90 max-w-2xl leading-relaxed">
            These are not rare edge cases. This is the costly, unoptimized operational baseline for 
            growing businesses that have not consolidated their hardware layer under one verified system.
          </p>
        </div>

        {/* Problem Matrix Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
          {problems.map((problem) => (
            <div
              key={problem.number}
              className="group bg-white border border-[#E2EFEB] rounded-2xl p-6 xl:p-8 hover:border-[#D97706]/40 hover:shadow-xl hover:shadow-[#D97706]/5 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-5">
                {/* Micro Number Badge */}
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F4F9F8] text-[#557D71] text-xs font-mono font-black flex items-center justify-center border border-[#E2EFEB] group-hover:bg-[#FEF3C7] group-hover:text-[#D97706] group-hover:border-[#FDE68A] transition-all duration-300">
                  {problem.number}
                </span>
                
                <div className="flex-1">
                  <h3 className="text-[#0D2B1E] font-black sm:text-lg mb-2.5 tracking-tight leading-snug group-hover:text-[#D97706] transition-colors duration-200">
                    {problem.headline}
                  </h3>
                  <p className="text-[#416B5C] text-sm leading-relaxed font-medium">
                    {problem.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge To Solutions Hub Card Banner */}
        <div className="mt-16 bg-[#0D2B1E] rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl shadow-[#0D2B1E]/10 relative overflow-hidden">
          
          {/* Dynamic Top Indicator Alignment Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D97706] via-[#45B1A0] to-[#2B7A6E]" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug mb-2">
                Marlayer was deliberately structured to phase out these exact systemic vulnerabilities.
              </h4>
              <p className="text-[#A3BFB9] text-sm font-medium leading-relaxed opacity-90">
                We engineered our end-to-end framework to intercept hardware defects, automate profile deployment, 
                and supply ongoing local diagnostics before downtime breaks your operational workflow.
              </p>
            </div>
            
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-[#45B1A0] hover:bg-[#379485] text-white font-bold text-sm tracking-wide px-7 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-[#45B1A0]/20 hover:-translate-y-0.5 active:translate-y-0 group w-full lg:w-auto whitespace-nowrap"
            >
              Analyze Our Operational Framework
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}