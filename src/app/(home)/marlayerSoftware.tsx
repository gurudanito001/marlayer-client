"use client";

// SoftwareSection.tsx
// Matches the HeroSection dark/techy aesthetic:
//   bg: #020d0a  |  accent: #45B1A0  |  fonts: Space Grotesk + Space Mono
// ─────────────────────────────────────────────────────────────────────────────

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

const TEAL = "#45B1A0";

// ── Animated counter hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1400, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

// ── Intersection observer hook ───────────────────────────────────────────────
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

// ── Terminal card: animated code lines ──────────────────────────────────────
const TerminalCard = () => {
  const lines = [
    { text: "$ marlayer init --project=dashboard", color: TEAL },
    { text: "  ✓ Architecture mapped", color: "rgba(255,255,255,0.5)" },
    { text: "  ✓ API layer scaffolded", color: "rgba(255,255,255,0.5)" },
    { text: "  ✓ Auth module injected", color: "rgba(255,255,255,0.5)" },
    { text: "  ✓ CI/CD pipeline ready", color: "rgba(255,255,255,0.5)" },
    { text: "  > Deploying to production...", color: "#6fc9bb" },
    { text: "  ██████████ 100%  BUILD OK", color: TEAL },
  ];
  const [visible, setVisible] = useState(0);
  const { ref, inView } = useInView(0.2);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setVisible(i);
      if (i >= lines.length) clearInterval(id);
    }, 220);
    return () => clearInterval(id);
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={ref}
      style={{
        background: "#010a07",
        border: "1px solid rgba(69,177,160,0.2)",
        borderRadius: 12,
        padding: "20px 24px",
        fontFamily: "'Space Mono', monospace",
        fontSize: 13,
        lineHeight: 2,
      }}
    >
      {/* Terminal header */}
      <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
        {["#ff5f57", "#febc2e", "#28c840"].map(c => (
          <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "inline-block" }} />
        ))}
      </div>
      {lines.map((l, i) => (
        <div
          key={i}
          style={{
            color: l.color,
            opacity: i < visible ? 1 : 0,
            transform: i < visible ? "translateX(0)" : "translateX(-8px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            whiteSpace: "pre",
          }}
        >
          {l.text}
          {i === visible - 1 && i < lines.length - 1 && (
            <span style={{ borderRight: `2px solid ${TEAL}`, marginLeft: 2, animation: "marlayer-blink 0.8s step-end infinite" }} />
          )}
        </div>
      ))}
    </div>
  );
};

// ── Stat card ────────────────────────────────────────────────────────────────
const StatCard = ({ num, suffix = "", label, inView }: { num: number; suffix?: string; label: string; inView: boolean }) => {
  const count = useCountUp(num, 1400, inView);
  return (
    <div
      style={{
        background: "rgba(69,177,160,0.05)",
        border: "1px solid rgba(69,177,160,0.15)",
        borderRadius: 10,
        padding: "20px 24px",
        flex: 1,
      }}
    >
      <div style={{ fontSize: 28, fontWeight: 700, color: "white", fontFamily: "'Space Grotesk', sans-serif" }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: 1, textTransform: "uppercase", fontFamily: "'Space Mono', monospace", marginTop: 4 }}>
        {label}
      </div>
    </div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const SoftwareSection: React.FC = () => {
  const { ref, inView } = useInView(0.2);

  const capabilities = [
    "Custom web & mobile apps",
    "Dashboard & data platforms",
    "API design & integration",
    "Cloud infrastructure & DevOps",
  ];

  return (
    <>
      <style>{`
        @keyframes marlayer-blink { 50% { opacity: 0; } }
        @keyframes marlayer-grid-pulse { 0%,100%{opacity:.5} 50%{opacity:1} }
        @keyframes marlayer-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        style={{
          background: "#020d0a",
          padding: "96px 0",
          overflow: "hidden",
          position: "relative",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {/* Subtle grid bg */}
        <div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `linear-gradient(rgba(69,177,160,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(69,177,160,0.04) 1px,transparent 1px)`,
            backgroundSize: "40px 40px",
            animation: "marlayer-grid-pulse 6s ease-in-out infinite",
          }}
        />

        {/* Corner markers */}
        {[
          { top: 16, left: 16, borderTop: true, borderLeft: true },
          { bottom: 16, right: 16, borderBottom: true, borderRight: true },
        ].map((pos, i) => (
          <div key={i} style={{ position: "absolute", width: 20, height: 20, pointerEvents: "none", zIndex: 2,
            ...(pos.top !== undefined && { top: pos.top }), ...(pos.bottom !== undefined && { bottom: pos.bottom }),
            ...(pos.left !== undefined && { left: pos.left }), ...(pos.right !== undefined && { right: pos.right }),
            ...(pos.borderTop    && { borderTop:    "1.5px solid rgba(69,177,160,0.3)" }),
            ...(pos.borderLeft   && { borderLeft:   "1.5px solid rgba(69,177,160,0.3)" }),
            ...(pos.borderBottom && { borderBottom: "1.5px solid rgba(69,177,160,0.3)" }),
            ...(pos.borderRight  && { borderRight:  "1.5px solid rgba(69,177,160,0.3)" }),
          }} />
        ))}

        <div
          ref={ref}
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            flexDirection: "column",
            gap: 64,
          }}
        >
          {/* Section label */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Space Mono', monospace", fontSize: 11, color: TEAL, letterSpacing: 2, textTransform: "uppercase" }}>
              <span style={{ width: 20, height: 1, background: TEAL, display: "inline-block" }} />
              Layer 01 — Software
            </div>
            <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, rgba(69,177,160,0.4), transparent)", marginLeft: 9 }} />
          </div>

          {/* Two-column layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* Left: copy */}
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
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.3)" }}>We don't just</span>
                <br />
                <span style={{ color: TEAL }}>write code.</span>
                <br />
                We build systems.
              </h2>

              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: 440, marginBottom: 32 }}>
                Every product we ship starts with understanding your business deeply. We architect scalable, maintainable software — from MVPs to enterprise platforms — built to grow with you.
              </p>

              {/* Capability list */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                {capabilities.map((item, i) => (
                  <li
                    key={item}
                    style={{
                      display: "flex", alignItems: "center", gap: 10,
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(-12px)",
                      transition: `opacity 0.5s ease ${i * 0.1 + 0.3}s, transform 0.5s ease ${i * 0.1 + 0.3}s`,
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", fontFamily: "'Space Grotesk', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div style={{ display: "flex", gap: 12, marginBottom: 36 }}>
                <StatCard num={98}  suffix="%" label="Client Satisfaction" inView={inView} />
                <StatCard num={24}  suffix="/7" label="Support Coverage"   inView={inView} />
              </div>

              {/* CTA */}
              <Link
                href="/software"
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
                View Our Projects
                <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Right: terminal card + glow */}
            <div style={{ position: "relative" }}>
              {/* Glow behind card */}
              <div style={{
                position: "absolute", inset: -40, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(69,177,160,0.07) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              {/* Top badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(69,177,160,0.08)", border: "1px solid rgba(69,177,160,0.25)",
                borderRadius: 6, padding: "6px 14px", marginBottom: 16,
                fontFamily: "'Space Mono', monospace", fontSize: 11, color: TEAL, letterSpacing: 1,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL, animation: "marlayer-blink 1.5s ease-in-out infinite" }} />
                LIVE BUILD PREVIEW
              </div>

              <TerminalCard />

              {/* Bottom info strip */}
              <div style={{
                marginTop: 12, padding: "12px 16px",
                background: "rgba(69,177,160,0.04)", border: "1px solid rgba(69,177,160,0.1)",
                borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: 1 }}>STACK</span>
                {["React", "Node", "PostgreSQL", "AWS"].map(t => (
                  <span key={t} style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(69,177,160,0.6)", letterSpacing: 1 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareSection;
