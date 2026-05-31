"use client";

// Section 1 — Hero
// Goal: In 5 seconds, make a business decision-maker feel understood.
// Copy speaks to fear (downtime, bad suppliers) not product features.

import Link from "next/link";

export default function GadgetsHero() {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0055FF 1px, transparent 1px), linear-gradient(90deg, #0055FF 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Blue accent bar — top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#0055FF]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-4xl">

          {/* Eyebrow label */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 bg-[#E8EEFF] text-[#0055FF] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-[#CCDAFF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF] animate-pulse" />
              Business Tech Procurement · Nigeria
            </span>
          </div>

          {/* Main headline — speaks to pain, not product */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A0A0A] leading-[1.1] tracking-tight mb-6">
            Your business runs on technology.{" "}
            <span className="text-[#0055FF]">
              Bad equipment shouldn&apos;t be the reason it slows down.
            </span>
          </h1>

          {/* Sub-headline — the value proposition */}
          <p className="text-lg md:text-xl text-[#374151] leading-relaxed mb-10 max-w-2xl">
            Marlayer handles your entire tech procurement — sourcing, verification,
            pre-configuration, delivery, and after-sale support. One partner,
            zero headaches.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0055FF] hover:bg-[#0044CC] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 group"
            >
              Request a Quote
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact?intent=meeting"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7F8FC] text-[#0A0A0A] font-semibold text-base px-8 py-4 rounded-xl border border-[#CBD2E0] transition-all duration-200 group"
            >
              Book a Consultation
              <svg
                className="w-4 h-4 text-[#6B7280] transition-transform group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>

          {/* Trust micro-signals */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { icon: "✓", text: "200+ businesses served" },
              { icon: "✓", text: "48-hour average delivery" },
              { icon: "✓", text: "12-month warranty on all devices" },
              { icon: "✓", text: "Pre-configured before delivery" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-[#374151]">
                <span className="text-[#059669] font-bold">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Floating stat cards — desktop only */}
        <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-4 w-56">
          {[
            { value: "200+", label: "Businesses Equipped", color: "bg-[#0055FF]" },
            { value: "48h", label: "Avg. Delivery Time", color: "bg-[#0A0A0A]" },
            { value: "100%", label: "Verified Hardware", color: "bg-[#059669]" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-[#E4E8F0] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className={`text-2xl font-bold ${stat.color.replace("bg-", "text-")}`}>
                {stat.value}
              </p>
              <p className="text-xs text-[#6B7280] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}