"use client";

// Section 3 — How It Works
// Goal: Make the process feel simple, safe, and professional.
// Decision-makers need to see clarity before they commit.

const steps = [
  {
    step: "01",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Define Business Scope",
    description:
      "Connect via a discovery call or submit your digital spec sheet. Tell us your team scale, required machine configurations, and target deployment cycle — no complex jargon required.",
    benefit: "Free consultation. Zero lock-in.",
  },
  {
    step: "02",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Verify & Configure",
    description:
      "We source hardware through direct, authorized partner lines. Every device completes a comprehensive internal stress-test before we pre-inject your internal core profiles.",
    benefit: "100% certified supply chain.",
  },
  {
    step: "03",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: "Turnkey Deployment",
    description:
      "Hardware arrives completely optimized, documented, and packaged for out-of-the-box operation. Your corporate setup sheets and warranty trackers come pre-indexed.",
    benefit: "Operational from Day One.",
  },
  {
    step: "04",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Lifecycle Management",
    description:
      "We handle direct warranty escalations, local component repairs, and planned asset replacement loops. One centralized partner line handles your infrastructure logistics.",
    benefit: "After-sale support included.",
  },
];

export default function GadgetsHowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-[#FAFDFD] py-20 lg:py-28 overflow-hidden">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#45B1A0]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">

        {/* Section Header Layout */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 bg-[#E8F6F4] text-[#348A7C] text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[#CCEAE5] mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            Procurement Lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2B1E] tracking-tight leading-tight mb-4">
            From architecture specs to field-ready —{" "}
            <span className="text-[#45B1A0]">in four stages.</span>
          </h2>
          <p className="text-[#235843] text-lg font-medium opacity-90 max-w-2xl leading-relaxed">
            We have eliminated the procurement vulnerabilities, hidden lead times, and hardware defects 
            that disrupt modern companies. Here is how your setup scales.
          </p>
        </div>

        {/* Interactive Steps Grid System */}
        <div className="relative group/container">
          
          {/* Timeline Connector Track Layer — Desktop Only */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#E2EFEB] via-[#45B1A0]/20 to-[#E2EFEB] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 relative z-10">
            {steps.map((step) => (
              <div 
                key={step.step} 
                className="group relative flex flex-col bg-white border border-[#E2EFEB] rounded-2xl p-6 xl:p-8 shadow-sm hover:shadow-xl hover:shadow-[#45B1A0]/5 hover:border-[#45B1A0]/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                
                {/* Visual Header Block: Icon container and Step tracking index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F6F4] text-[#45B1A0] border border-[#CCEAE5] flex items-center justify-center transition-all duration-300 group-hover:bg-[#45B1A0] group-hover:text-white group-hover:scale-105 group-hover:shadow-md group-hover:shadow-[#45B1A0]/20">
                    {step.icon}
                  </div>
                  <span className="font-mono font-black text-2xl tracking-tight text-[#E2EFEB] group-hover:text-[#F59E0B] transition-colors duration-300">
                    {step.step}
                  </span>
                </div>

                {/* Card Context Information Headers */}
                <span className="text-[#348A7C] text-[10px] font-extrabold tracking-widest uppercase mb-1.5 block">
                  Phase Identifier
                </span>
                <h3 className="text-[#0D2B1E] font-black text-lg mb-3 tracking-tight leading-snug">
                  {step.title}
                </h3>

                {/* Body Core Content */}
                <p className="text-[#416B5C] text-sm leading-relaxed font-medium flex-1 mb-6">
                  {step.description}
                </p>

                {/* Footer Validation Badge */}
                <div className="pt-4 border-t border-[#F0F7F5] mt-auto">
                  <span className="inline-flex items-center gap-1.5 bg-[#E6F9F3] text-[#059669] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#C6F3E5]">
                    <svg className="w-3.5 h-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {step.benefit}
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Integrated Bottom Engagement Hub */}
        <div className="mt-16 bg-white border border-[#E2EFEB] rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg shadow-[#45B1A0]/5 relative overflow-hidden backdrop-blur-sm">
          {/* Top Multi-Tone Indicator on Banner */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#45B1A0] to-[#F59E0B]" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div>
              <h4 className="text-xl font-extrabold text-[#0D2B1E] tracking-tight">
                Ready to secure your technology supply layer?
              </h4>
              <p className="text-[#235843] font-medium text-sm mt-1.5 opacity-90 max-w-xl">
                Our operations team evaluates requirements and dispatches comprehensive corporate cost breakdowns in under 24 hours.
              </p>
            </div>
            
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0D2B1E] hover:bg-[#1B4D3A] text-white font-bold text-sm tracking-wide px-7 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group w-full lg:w-auto"
            >
              Request Free Feasibility Analysis
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