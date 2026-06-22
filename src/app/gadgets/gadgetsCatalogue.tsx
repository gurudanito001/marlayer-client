"use client";
import Link from "next/link";

// Section 6 — Product Catalogue (B2B framed)
// Goal: Show products AFTER trust is built. Frame categories around business use cases.
// Includes a "Buying for your business?" CTA throughout.

const categories = [
  {
    id: "laptops",
    label: "For Remote & Office Engineering",
    category: "Laptops & Workstations",
    description:
      "High-performance architecture optimized for developers, data scientists, and executives. Sourced cleanly, verified locally, and deployed fully pre-configured.",
    href: "/gadgets/laptops",
    image: "https://www.marlayer.com/_next/image?url=%2Fimages%2Flaptop.png&w=800&q=75",
    tag: "High Demand",
    tagColor: "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]",
    specs: ["MacBook Pro (M-Series)", "Dell XPS Developer Edition", "HP EliteBook", "ThinkPad T-Series"],
  },
  {
    id: "phones",
    label: "For Distributed & Operations Teams",
    category: "Corporate Smartphones",
    description:
      "Premium, secure mobile endpoints for field ops and client-facing teams. Bulk supply ready with custom MDM profiling and asset tagging available.",
    href: "/gadgets/phones",
    image: "https://www.marlayer.com/_next/image?url=%2Fimages%2Fphones.png&w=800&q=75",
    tag: "MDM Deployment Ready",
    tagColor: "bg-[#E8F6F4] text-[#45B1A0] border-[#C2DCD6]",
    specs: ["iPhone Enterprise", "Google Pixel", "Samsung Galaxy Enterprise", "Managed Android"],
  },
  {
    id: "accessories",
    label: "For Complete Workspace Optimization",
    category: "Peripherals & Core Nodes",
    description:
      "Pro-grade external displays, mechanical inputs, active noise-canceling acoustics, and localized routing hardware to keep engineering pipelines moving.",
    href: "/gadgets/accessories",
    image: "https://www.marlayer.com/_next/image?url=%2Fimages%2Faccesories.png&w=800&q=75",
    tag: "Workspace Bundles",
    tagColor: "bg-[#E0E7FF] text-[#4F46E5] border-[#C7D2FE]",
    specs: ["4K USB-C Monitors", "Ergonomic Inputs", "ANC Headsets", "High-Throughput Routing"],
  },
];

export default function GadgetsCatalogue() {
  return (
    <section className="bg-[#F4F9F8] border-y border-[#E2EFEB] py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background Structural Accent */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#45B1A0]/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-[#45B1A0] text-xs font-bold tracking-widest uppercase mb-3 block">
              Sourcing Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2B1E] tracking-tight leading-tight mb-4">
              Hardware provisioned specifically for active operational roles.
            </h2>
            <p className="text-[#235843] sm:text-lg font-medium opacity-90 leading-relaxed">
              Every product node integrates seamlessly into Marlayer's managed deployment workflow—covering 
              stringent counterfeit intercept diagnostics, workspace profiling, and corporate warranty management.
            </p>
          </div>
        </div>

        {/* Business-Framed Category Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-16">
          {categories.map((cat) => (
            <li
              key={cat.id}
              className="group bg-white border border-[#E2EFEB] rounded-2xl overflow-hidden flex flex-col hover:border-[#45B1A0]/40 hover:shadow-xl hover:shadow-[#45B1A0]/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Preview Container */}
              {/* <div className="relative bg-[#F4F9F8] h-48 w-full border-b border-[#E2EFEB]/60 flex items-center justify-center overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.category}
                  className="w-full h-full object-contain p-6 transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <span className={`absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1.5 rounded-md border shadow-sm backdrop-blur-sm ${cat.tagColor}`}>
                  {cat.tag}
                </span>
              </div> */}

              {/* Card Meta Content Content */}
              <div className="p-6 xl:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[#45B1A0] text-[11px] font-bold uppercase tracking-wider block mb-1.5">
                    {cat.label}
                  </span>
                  <h3 className="text-[#0D2B1E] font-black text-lg xl:text-xl tracking-tight mb-3">
                    {cat.category}
                  </h3>
                  <p className="text-[#416B5C] text-sm leading-relaxed font-medium mb-6">
                    {cat.description}
                  </p>

                  {/* Specification Index Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {cat.specs.map((spec) => (
                      <span
                        key={spec}
                        className="bg-[#F4F9F8] border border-[#E2EFEB] text-[#1B4D3A] font-bold text-[11px] px-2.5 py-1 rounded-lg tracking-tight"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Inline Action Indicator */}
                <Link href="/contact" className="flex items-center gap-1.5 text-[#45B1A0] text-sm font-bold pt-4 border-t border-[#E2EFEB]/60 mt-auto">
                  <span>Contact us for {cat.category}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </li>
          ))}
        </div>

        {/* Bulk Sourcing Corporate Conversion Banner */}
        <div className="bg-[#45B1A0] rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl shadow-[#45B1A0]/10 relative overflow-hidden">
          {/* Subtle Aesthetic Geometric Underlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-white/5 blur-xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                Managing high-volume procurement for a scaling firm?
              </h4>
              <p className="text-[#E2F5F2] text-sm font-medium leading-relaxed opacity-95">
                Lock in commercial margin discounts, establish direct account management routing, and secure 
                end-to-end framework assembly. We streamline everything from sourcing arrays to multi-regional fulfillment.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto flex-shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#45B1A0] font-black text-sm tracking-wide px-6 py-4 rounded-xl hover:bg-[#F4F9F8] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Request Custom Volume Pricing
              </a>
              <a
                href="https://wa.me/2348140715723"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/20 text-white font-bold text-sm tracking-wide px-6 py-4 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-200 text-center"
              >
                <svg className="w-4 h-4 transition-transform group-hover:scale-105" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}