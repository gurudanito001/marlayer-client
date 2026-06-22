"use client";

// Section 1 — Hero
// Goal: In 5 seconds, make a business decision-maker feel understood.
// Copy speaks to fear (downtime, bad suppliers) not product features.

import Link from "next/link";

export default function GadgetsHero() {
  return (
    <section className="relative bg-[#FAFDFD] overflow-hidden min-h-screen flex items-center">
      
      {/* Background Layer: Subtle grid + Soft organic glowing blobs */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#45B1A0 1px, transparent 1px), linear-gradient(90deg, #45B1A0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#45B1A0] opacity-[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#D97706] opacity-[0.03] blur-[100px] pointer-events-none" />

      {/* Top Multi-Tone Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#45B1A0] via-[#F59E0B] to-[#0D2B1E]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content & Copy */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center z-10">
            
            {/* Eyebrow label */}
            <div className="flex items-center mb-6">
              <span className="inline-flex items-center gap-2 bg-[#E8F6F4] text-[#348A7C] text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[#CCEAE5] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                Business Tech Procurement · Nigeria
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0D2B1E] leading-[1.1] tracking-tight mb-6">
              Your business runs on technology.{" "}
              <span className="bg-gradient-to-r from-[#45B1A0] via-[#3B9E8F] to-[#2B7A6E] bg-clip-text text-transparent block mt-2">
                Bad equipment shouldn&apos;t slow it down.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-[#235843] leading-relaxed mb-8 max-w-xl font-medium opacity-90">
              Marlayer handles your entire tech procurement cycle — sourcing, 100% hardware verification,
              pre-configuration, delivery, and after-sale support. One partner, zero headaches.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#45B1A0] hover:bg-[#379485] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-[#45B1A0]/20 hover:-translate-y-0.5 active:translate-y-0 group"
              >
                Request a Quote
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="/contact#bookMeeting"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F4FAF9] text-primary-2 font-bold px-8 py-4 rounded-xl border-2 border-[#D1E5E1] hover:border-[#45B1A0] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group"
              >
                Book a Consultation
                <svg
                  className="w-5 h-5 text-primary-2 transition-transform group-hover:text-[#D97706]"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>

            {/* Trust micro-signals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 border-t border-[#E6F2F0] pt-8 max-w-lg">
              {[
                { text: "200+ businesses equipped" },
                { text: "48-hour average delivery nationwide" },
                { text: "12-month warranty on all devices" },
                { text: "Pre-configured & optimized out-of-box" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-2.5 text-sm font-semibold text-[#1B4D3A]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D1EFEA] flex items-center justify-center text-[#227063]">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Scaled Visual Interface Mockup & Floating Metrics */}
          <div className="lg:col-span-5 xl:col-span-6 relative w-full flex items-center justify-center lg:justify-end min-h-[460px] xl:min-h-[520px]">
            
            {/* Main Interactive Frame Container */}
            <div className="relative w-full max-w-[440px] md:max-w-[480px] xl:max-w-[540px] transition-all duration-300">
              
              {/* Central Panel Card */}
              <div className="w-full bg-white border border-[#E2EFEB] rounded-3xl p-6 md:p-8 shadow-xl shadow-[#45B1A0]/5 overflow-hidden backdrop-blur-sm relative z-10">
                
                {/* Panel Header */}
                <div className="flex items-center justify-between border-b border-[#F0F7F5] pb-5 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                    <span className="text-xs font-mono font-bold text-[#A3BFB9] ml-2 tracking-wider">BATCH_VERIFY_LOG</span>
                  </div>
                  <span className="text-[11px] font-extrabold bg-[#FEF3C7] text-[#D97706] px-2.5 py-1 rounded-md tracking-wide shadow-sm">
                    LIVE INSPECTION
                  </span>
                </div>

                {/* Dashboard Steps Stack */}
                <div className="space-y-4">
                  <div className="p-4 bg-[#FAFDFD] border border-[#E6F3F1] rounded-xl flex items-center gap-4 hover:border-[#45B1A0]/30 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[#E8F6F4] flex items-center justify-center text-[#45B1A0] font-bold text-sm">01</div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#0D2B1E]">Hardware Tier Diagnostic</p>
                      <p className="text-xs text-[#557D71] mt-0.5">Battery health threshold & SSD health verification</p>
                    </div>
                    <span className="text-xs font-extrabold text-[#059669] bg-[#E6F9F3] px-2 py-1 rounded">Passed</span>
                  </div>

                  <div className="p-4 bg-[#FAFDFD] border border-[#E6F3F1] rounded-xl flex items-center gap-4 hover:border-[#45B1A0]/30 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[#E8F6F4] flex items-center justify-center text-[#45B1A0] font-bold text-sm">02</div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#0D2B1E]">Enterprise Profile Injected</p>
                      <p className="text-xs text-[#557D71] mt-0.5">Custom software deployment & configurations complete</p>
                    </div>
                    <span className="text-xs font-extrabold text-[#45B1A0] bg-[#E8F6F4] px-2 py-1 rounded">Configured</span>
                  </div>

                  <div className="p-4 bg-[#FAFDFD] border border-[#E6F3F1] rounded-xl flex items-center gap-4 opacity-70">
                    <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 font-bold text-sm">03</div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-700">Transit Routing Protocol</p>
                      <p className="text-xs text-gray-400 mt-0.5">Dedicated cargo verification & dispatch matching</p>
                    </div>
                    <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">In Queue</span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 1: Positioned outside the frame to prevent layout clipping */}
              <div className="absolute -bottom-6 -right-4 md:right-4 xl:-right-8 bg-[#0D2B1E] text-white p-5 rounded-2xl shadow-xl border border-[#1B4D3A] z-20 max-w-[180px] transform hover:scale-105 transition-transform duration-200">
                <p className="text-3xl font-black text-[#F59E0B]">48h</p>
                <div className="w-6 h-1 bg-[#45B1A0] my-2 rounded" />
                <p className="text-[11px] font-bold text-[#A3BFB9] leading-tight">Average Delivery Response Time Nationwide</p>
              </div>

              {/* Floating Stat Card 2 */}
              <div className="absolute top-12 -left-8 md:-left-12 bg-white border border-[#E2EFEB] p-4 rounded-2xl shadow-lg z-20 flex items-center gap-3.5 transform hover:scale-105 transition-transform duration-200">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97706] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D97706]"></span>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#0D2B1E] leading-none">200+</p>
                  <p className="text-[11px] font-bold text-[#557D71] mt-1 whitespace-nowrap">Businesses Covered</p>
                </div>
              </div>

            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}