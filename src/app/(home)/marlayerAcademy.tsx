"use client";

// AcademySection.tsx
// Matches the HeroSection dark/techy aesthetic
// ─────────────────────────────────────────────────────────────────────────────

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

const TEAL = "#45B1A0";

function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Course card ──────────────────────────────────────────────────────────────
interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
  delay: number;
  inView: boolean;
}

const CourseCard = ({ icon, title, desc, tag, delay, inView }: CourseCardProps) => (
  <div
    style={{
      background: "rgba(69,177,160,0.04)",
      border: "1px solid rgba(69,177,160,0.13)",
      borderRadius: 10,
      padding: "20px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div style={{
        width: 38, height: 38, borderRadius: 8,
        background: "rgba(69,177,160,0.1)", border: "1px solid rgba(69,177,160,0.2)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: TEAL, flexShrink: 0,
      }}>
        {icon}
      </div>
      <span style={{
        fontFamily: "'Space Mono', monospace", fontSize: 10,
        color: "rgba(69,177,160,0.7)", letterSpacing: 1,
        background: "rgba(69,177,160,0.08)", border: "1px solid rgba(69,177,160,0.15)",
        padding: "3px 8px", borderRadius: 4,
      }}>
        {tag}
      </span>
    </div>
    <div style={{ fontSize: 14, fontWeight: 600, color: "white", fontFamily: "'Space Grotesk', sans-serif" }}>{title}</div>
    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{desc}</div>
  </div>
);

// ── Progress bar ─────────────────────────────────────────────────────────────
const ProgressBar = ({ label, pct, inView, delay }: { label: string; pct: number; inView: boolean; delay: number }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif" }}>{label}</span>
      <span style={{ fontSize: 12, color: TEAL, fontFamily: "'Space Mono', monospace" }}>{pct}%</span>
    </div>
    <div style={{ height: 4, background: "rgba(69,177,160,0.1)", borderRadius: 2, overflow: "hidden" }}>
      <div style={{
        height: "100%", borderRadius: 2,
        background: `linear-gradient(90deg, ${TEAL}, #6fc9bb)`,
        width: inView ? `${pct}%` : "0%",
        transition: `width 1s ease ${delay}s`,
      }} />
    </div>
  </div>
);

// ── Main component ────────────────────────────────────────────────────────────
const AcademySection: React.FC = () => {
  const { ref, inView } = useInView();

  const courses = [
    {
      tag: "TRACK_01",
      title: "Web & Mobile Development",
      desc: "Build production-grade apps from scratch using modern frameworks.",
      icon: (
        <svg width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M6.75 8.25L3 12l3.75 3.75M13.5 4.5l-3 15" />
        </svg>
      ),
    },
    {
      tag: "TRACK_02",
      title: "UI/UX Design",
      desc: "Design intuitive interfaces and experiences that delight users.",
      icon: (
        <svg width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
    },
    {
      tag: "TRACK_03",
      title: "Data Analytics",
      desc: "Turn raw data into business intelligence using Python and BI tools.",
      icon: (
        <svg width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
  ];

  const outcomes = [
    { label: "Job Placement Rate", pct: 87 },
    { label: "Curriculum Completion", pct: 94 },
    { label: "Mentor Satisfaction",  pct: 96 },
  ];

  return (
    <>
      <style>{`
        @keyframes marlayer-blink { 50% { opacity: 0; } }
        @keyframes marlayer-grid-pulse { 0%,100%{opacity:.4} 50%{opacity:.9} }
      `}</style>

      <section
        style={{
          background: "#030f0b",
          padding: "96px 0",
          overflow: "hidden",
          position: "relative",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {/* Grid bg — slightly different tint to create section separation */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(69,177,160,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(69,177,160,0.035) 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
          animation: "marlayer-grid-pulse 7s ease-in-out infinite",
        }} />

        {/* Horizontal divider glow at top */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(69,177,160,0.3), transparent)",
          pointerEvents: "none",
        }} />

        <div
          ref={ref}
          style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: 64 }}
        >
          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Space Mono', monospace", fontSize: 11, color: TEAL, letterSpacing: 2, textTransform: "uppercase" }}>
            <span style={{ width: 20, height: 1, background: TEAL, display: "inline-block" }} />
            Layer 02 — Academy
          </div>

          {/* Two-column */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "start" }}>

            {/* Left: course cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* Header above cards */}
              <div style={{
                fontFamily: "'Space Mono', monospace", fontSize: 11,
                color: "rgba(255,255,255,0.3)", letterSpacing: 2, marginBottom: 4,
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL, animation: "marlayer-blink 1.5s ease-in-out infinite" }} />
                ACTIVE TRACKS
              </div>

              {courses.map((c, i) => (
                <CourseCard key={c.title} {...c} delay={i * 0.12} inView={inView} />
              ))}

              {/* Outcome metrics */}
              <div style={{
                marginTop: 8,
                background: "rgba(69,177,160,0.03)",
                border: "1px solid rgba(69,177,160,0.1)",
                borderRadius: 10,
                padding: "20px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: 2 }}>OUTCOME METRICS</span>
                {outcomes.map((o, i) => (
                  <ProgressBar key={o.label} label={o.label} pct={o.pct} inView={inView} delay={i * 0.15 + 0.4} />
                ))}
              </div>
            </div>

            {/* Right: copy */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <h2
                style={{
                  fontSize: "clamp(30px, 3.5vw, 44px)",
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1.1,
                  letterSpacing: -1,
                  marginBottom: 16,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.3)" }}>Train the minds</span>
                <br />
                <span style={{ color: TEAL }}>that build</span>
                <br />
                tomorrow's tech.
              </h2>

              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: 440, marginBottom: 32 }}>
                Our academy isn't a bootcamp — it's a launchpad. Industry practitioners teach what actually works in production, mentoring students from zero knowledge to job-ready professionals.
              </p>

              {/* Highlights */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
                {[
                  { label: "Hands-on from day one", sub: "No fluff. Real projects, real feedback." },
                  { label: "Industry mentors",      sub: "Learn from professionals actively building products." },
                  { label: "Cohort-based learning", sub: "Grow alongside peers with shared goals." },
                ].map(({ label, sub }, i) => (
                  <div
                    key={label}
                    style={{
                      display: "flex", gap: 14,
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(16px)",
                      transition: `opacity 0.5s ease ${i * 0.1 + 0.4}s, transform 0.5s ease ${i * 0.1 + 0.4}s`,
                    }}
                  >
                    <div style={{
                      width: 32, height: 32, borderRadius: 6, flexShrink: 0, marginTop: 2,
                      background: "rgba(69,177,160,0.1)", border: "1px solid rgba(69,177,160,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width={14} height={14} fill="none" stroke={TEAL} strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "white", marginBottom: 2 }}>{label}</div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Next cohort badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "rgba(69,177,160,0.06)", border: "1px solid rgba(69,177,160,0.2)",
                borderRadius: 8, padding: "12px 16px", marginBottom: 28,
                alignSelf: "flex-start",
              }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: TEAL, animation: "marlayer-blink 1.4s ease-in-out infinite" }} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: TEAL, letterSpacing: 1 }}>NEXT COHORT ENROLLING NOW</span>
              </div>

              {/* CTA */}
              <Link
                href="/academy"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: TEAL, color: "#020d0a",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13, fontWeight: 700,
                  padding: "12px 28px", borderRadius: 4,
                  textDecoration: "none", letterSpacing: 0.5,
                  transition: "background 0.2s",
                  alignSelf: "flex-start",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#5cc5b3")}
                onMouseLeave={e => (e.currentTarget.style.background = TEAL)}
              >
                View Course Catalog
                <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademySection;
