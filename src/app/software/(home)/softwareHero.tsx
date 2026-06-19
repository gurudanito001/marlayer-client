"use client";

// Section 1 — Hero
// Dark background. Terminal energy. Punchy copy.
// Must immediately separate Marlayer from "just another dev agency."
// Two audiences addressed: SMEs wanting global reach, Enterprises needing custom systems.

import { useState, useEffect } from "react";

const rotatingWords = [
  "competes globally.",
  "scales without limits.",
  "wins more clients.",
  "runs on systems.",
  "outlasts competitors.",
];

export default function SoftwareHero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setVisible(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#0D2B1E] overflow-hidden min-h-screen flex flex-col justify-center">

      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#45B1A0 1px, transparent 1px), linear-gradient(90deg, #45B1A0 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow — top left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#45B1A0]/10 blur-3xl pointer-events-none" />
      {/* Radial glow — bottom right */}
      <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-[#45B1A0]/8 blur-3xl pointer-events-none" />

      {/* Teal accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#45B1A0] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36 w-full">
        <div className="max-w-4xl">

          {/* Terminal-style eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-1.5 bg-[#45B1A0]/10 border border-[#45B1A0]/30 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#45B1A0] animate-pulse" />
              <span className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase">
                SOFTWARE_SOLUTIONS // MARLAYER
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-4">
            We build software
            <br />
            <span className="text-white">your business </span>
            <span
              className="text-[#45B1A0] transition-opacity duration-300"
              style={{ opacity: visible ? 1 : 0 }}
            >
              {rotatingWords[wordIndex]}
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-[#7AADA4] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            From small businesses breaking into global markets to enterprises 
            solving problems no off-the-shelf tool can handle — Marlayer builds 
            the digital systems that make it happen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="/software/sme"
              className="group inline-flex items-center justify-center gap-2 bg-[#45B1A0] hover:bg-[#359688] text-primary font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#45B1A0]/25"
            >
              I&apos;m a growing business
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/software/enterprise"
              className="group inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#45B1A0]/50 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
            >
              I need custom enterprise software
              <svg className="w-4 h-4 text-[#45B1A0] transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Live terminal card */}
          <div className="bg-[#071A10] border border-[#45B1A0]/20 rounded-2xl overflow-hidden max-w-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-[#45B1A0]/50 text-xs font-mono">marlayer — build</span>
            </div>
            {/* Terminal content */}
            <div className="px-5 py-5 font-mono text-sm space-y-1.5">
              <p className="text-[#45B1A0]">$ marlayer init --client=your-business</p>
              <p className="text-white/40">→ Discovery session scheduled</p>
              <p className="text-white/40">→ Architecture designed for your goals</p>
              <p className="text-white/40">→ Development sprint started</p>
              <p className="text-white/40">→ QA &amp; testing passed</p>
              <p className="text-white/40">→ Deployed to production</p>
              <p className="text-[#45B1A0] flex items-center gap-2 mt-2">
                <span>██████████</span>
                <span className="text-white font-semibold">LAUNCH COMPLETE ✓</span>
              </p>
            </div>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-4 w-52">
          {[
            { value: "40+", label: "Products Shipped", sub: "web, mobile & platforms" },
            { value: "100%", label: "Client Satisfaction", sub: "rated across all projects" },
            { value: "24/7", label: "Post-Launch Support", sub: "we don't disappear" },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 hover:border-[#45B1A0]/40 rounded-2xl p-5 transition-colors">
              <p className="text-[#45B1A0] text-2xl font-bold">{s.value}</p>
              <p className="text-white text-xs font-semibold mt-0.5">{s.label}</p>
              <p className="text-white/30 text-[10px] mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}