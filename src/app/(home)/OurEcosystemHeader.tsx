"use client";

// OurEcosystemHeader.tsx
// Transition section between the hero and the three layer sections.
// Matches the HeroSection dark/techy aesthetic.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect, useRef, useState } from "react";

const TEAL = "#45B1A0";

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const pillars = [
  {
    label: "Software",
    desc: "Custom platforms built to scale",
    icon: (
      <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M6.75 8.25L3 12l3.75 3.75M13.5 4.5l-3 15" />
      </svg>
    ),
  },
  {
    label: "Academy",
    desc: "Training that shapes careers",
    icon: (
      <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" />
      </svg>
    ),
  },
  {
    label: "Gadgets",
    desc: "Hardware that powers your work",
    icon: (
      <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
];

const OurEcosystemHeader: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`
        @keyframes marlayer-blink { 50%{ opacity:0; } }
        @keyframes marlayer-ecosystem-grid { 0%,100%{opacity:.3} 50%{opacity:.7} }
        @keyframes marlayer-pillar-glow {
          0%,100% { box-shadow: 0 0 0px rgba(69,177,160,0); }
          50%      { box-shadow: 0 0 14px rgba(69,177,160,0.15); }
        }
      `}</style>

      <section
        id="ecosystem"
        style={{
          background: "#020d0a",
          padding: "150px 24px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(69,177,160,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(69,177,160,0.05) 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
          animation: "marlayer-ecosystem-grid 6s ease-in-out infinite",
        }} />

        {/* Top gradient fade from hero */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 80,
          background: "linear-gradient(to bottom, #020d0a, transparent)",
          pointerEvents: "none", zIndex: 1,
        }} />

        {/* Central glow */}
        <div style={{
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: 600, height: 300, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(69,177,160,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div
          ref={ref}
          style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}
        >
          {/* Section label */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28,
              fontFamily: "'Space Mono', monospace", fontSize: 11,
              color: TEAL, letterSpacing: 2, textTransform: "uppercase",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <span style={{ width: 16, height: 1, background: TEAL, display: "inline-block" }} />
            Our Ecosystem
            <span style={{ width: 16, height: 1, background: TEAL, display: "inline-block" }} />
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: -1.5,
              marginBottom: 20,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.35)" }}>Everything you need</span>
            <br />
            <span style={{ color: TEAL }}>to succeed</span>{" "}
            <span style={{ color: "white" }}>in the digital age.</span>
          </h2>

          {/* Subtext */}
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.8,
              maxWidth: 560,
              marginBottom: 52,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            We blend hardware excellence, software innovation, and tech education — three layers working together as one seamless foundation for your growth.
          </p>

          {/* Three pillars */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            {pillars.map(({ label, desc, icon }, i) => (
              <div
                key={label}
                style={{
                  width: "100%",
                  maxWidth: 295,
                  display: "flex", alignItems: "center", gap: 12,
                  background: "rgba(69,177,160,0.05)",
                  border: "1px solid rgba(69,177,160,0.18)",
                  borderRadius: 10,
                  padding: "14px 20px",
                  animation: inView ? "marlayer-pillar-glow 4s ease-in-out infinite" : "none",
                  animationDelay: `${i * 0.8}s`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.5s ease ${i * 0.1 + 0.35}s, transform 0.5s ease ${i * 0.1 + 0.35}s`,
                }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: 6,
                  background: "rgba(69,177,160,0.1)", border: "1px solid rgba(69,177,160,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: TEAL, flexShrink: 0,
                }}>
                  {icon}
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "white", fontFamily: "'Space Grotesk', sans-serif" }}>{label}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{desc}</div>
                </div>
                {/* Layer number */}
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(69,177,160,0.35)", marginLeft: 8, letterSpacing: 1 }}>
                  {`0${i + 1}`}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll indicator — connects visually to the sections below */}
          {/* <div
            style={{
              marginTop: 56,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
              opacity: inView ? 0.5 : 0,
              transition: "opacity 0.6s ease 0.6s",
            }}
          >
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: 2, textTransform: "uppercase" }}>
              Scroll to explore
            </span>
            <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, rgba(69,177,160,0.5), transparent)" }} />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default OurEcosystemHeader;
