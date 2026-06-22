"use client";

// EcosystemSection.tsx  (Gadget Store)
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

// ── Gadget spec card ─────────────────────────────────────────────────────────
interface SpecCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  delay: number;
  inView: boolean;
}

const SpecCard = ({ label, value, icon, delay, inView }: SpecCardProps) => (
  <div
    style={{
      background: "rgba(69,177,160,0.04)",
      border: "1px solid rgba(69,177,160,0.12)",
      borderRadius: 10,
      padding: "16px 18px",
      display: "flex",
      alignItems: "center",
      gap: 14,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
    }}
  >
    <div style={{
      width: 36, height: 36, borderRadius: 8, flexShrink: 0,
      background: "rgba(69,177,160,0.08)", border: "1px solid rgba(69,177,160,0.18)",
      display: "flex", alignItems: "center", justifyContent: "center", color: TEAL,
    }}>
      {icon}
    </div>
    <div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "'Space Mono', monospace", letterSpacing: 1, textTransform: "uppercase" }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: "white", fontFamily: "'Space Grotesk', sans-serif", marginTop: 2 }}>{value}</div>
    </div>
  </div>
);

// ── Product display panel ─────────────────────────────────────────────────────
const ProductPanel = ({ inView }: { inView: boolean }) => {
  const products = [
    { name: "High-Performance Laptops", badge: "FLAGSHIP", dot: "#45B1A0" },
    { name: "Pro Workstation Monitors",  badge: "IN STOCK", dot: "#6fc9bb" },
    { name: "Networking & Connectivity", badge: "NEW",      dot: "#45B1A0" },
    { name: "Peripherals & Accessories", badge: "IN STOCK", dot: "#3a8a80" },
  ];

  return (
    <div style={{
      background: "#010a07",
      border: "1px solid rgba(69,177,160,0.18)",
      borderRadius: 12,
      overflow: "hidden",
    }}>
      {/* Panel header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 20px",
        borderBottom: "1px solid rgba(69,177,160,0.1)",
        background: "rgba(69,177,160,0.03)",
      }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: 2 }}>INVENTORY_STATUS</span>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ff5f57", "#febc2e", "#28c840"].map(c => (
            <span key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "inline-block" }} />
          ))}
        </div>
      </div>

      {/* Product rows */}
      {products.map((p, i) => (
        <div
          key={p.name}
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 20px",
            borderBottom: i < products.length - 1 ? "1px solid rgba(69,177,160,0.06)" : "none",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-10px)",
            transition: `opacity 0.4s ease ${i * 0.1 + 0.2}s, transform 0.4s ease ${i * 0.1 + 0.2}s`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: p.dot, flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}</span>
          </div>
          <span style={{
            fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 1,
            color: "rgba(69,177,160,0.7)",
            background: "rgba(69,177,160,0.08)", border: "1px solid rgba(69,177,160,0.15)",
            padding: "3px 8px", borderRadius: 4,
          }}>
            {p.badge}
          </span>
        </div>
      ))}

      {/* Footer */}
      <div style={{
        padding: "12px 20px",
        background: "rgba(69,177,160,0.03)",
        borderTop: "1px solid rgba(69,177,160,0.1)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: 1 }}>AUTHORIZED RESELLER</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: TEAL, letterSpacing: 1 }}>WARRANTY_INCLUDED</span>
      </div>
    </div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const EcosystemSection: React.FC = () => {
  const { ref, inView } = useInView();

  const specs = [
    {
      label: "Product Range",
      value: "Laptops, Monitors, Peripherals",
      icon: (
        <svg width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
    {
      label: "Warranty",
      value: "Authorized Reseller Coverage",
      icon: (
        <svg width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      label: "Support",
      value: "Expert Setup & Configuration",
      icon: (
        <svg width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @keyframes marlayer-blink   { 50% { opacity: 0; } }
        @keyframes marlayer-grid-pulse { 0%,100%{opacity:.35} 50%{opacity:.8} }
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
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(69,177,160,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(69,177,160,0.04) 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
          animation: "marlayer-grid-pulse 8s ease-in-out infinite",
        }} />

        {/* Top divider glow */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(69,177,160,0.25), transparent)",
          pointerEvents: "none",
        }} />

        {/* Glow orb — bottom-right */}
        <div style={{
          position: "absolute", bottom: -60, right: -60, width: 380, height: 380, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(69,177,160,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div
          ref={ref}
          style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: 64 }}
        >
          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Space Mono', monospace", fontSize: 11, color: TEAL, letterSpacing: 2, textTransform: "uppercase" }}>
            <span style={{ width: 20, height: 1, background: TEAL, display: "inline-block" }} />
            Layer 03 — Gadgets
          </div>

          {/* Two-column */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "start" }}>

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
                <span style={{ color: "rgba(255,255,255,0.3)" }}>Equip your team</span>
                <br />
                <span style={{ color: TEAL }}>with hardware</span>
                <br />
                built to perform.
              </h2>

              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: 440, marginBottom: 32 }}>
                Great work starts with the right tools. We source and supply premium, business-grade hardware — curated for reliability, speed, and the demands of modern teams.
              </p>

              {/* Spec cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
                {specs.map((s, i) => (
                  <SpecCard key={s.label} {...s} delay={i * 0.1 + 0.2} inView={inView} />
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/search?search=iPhone"
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
                Shop Latest Tech
                <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Right: product panel + badges */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Live indicator */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(69,177,160,0.06)", border: "1px solid rgba(69,177,160,0.2)",
                borderRadius: 6, padding: "6px 14px",
                fontFamily: "'Space Mono', monospace", fontSize: 11, color: TEAL, letterSpacing: 1,
                alignSelf: "flex-start",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL, animation: "marlayer-blink 1.5s ease-in-out infinite" }} />
                LIVE CATALOG
              </div>

              <ProductPanel inView={inView} />

              {/* Two mini-stat cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  { num: "50+", label: "Brands Stocked" },
                  { num: "48h", label: "Avg. Delivery" },
                ].map(({ num, label }) => (
                  <div
                    key={label}
                    style={{
                      background: "rgba(69,177,160,0.04)",
                      border: "1px solid rgba(69,177,160,0.12)",
                      borderRadius: 10,
                      padding: "16px 18px",
                    }}
                  >
                    <div style={{ fontSize: 22, fontWeight: 700, color: "white", fontFamily: "'Space Grotesk', sans-serif" }}>{num}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: 1, textTransform: "uppercase", fontFamily: "'Space Mono', monospace", marginTop: 4 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcosystemSection;
