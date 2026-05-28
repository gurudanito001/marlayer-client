"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ─── Font import ───────────────────────────────────────────────────────────────
// Add this to your globals.css or layout.tsx <head>:
//   @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
// And add to your tailwind.config.js fontFamily:
//   'space-grotesk': ['Space Grotesk', 'sans-serif'],
//   'space-mono':    ['Space Mono', 'monospace'],

const PHRASES = ["your growth.", "your vision.", "your future.", "your business."];
const TEAL = "#45B1A0";

// ─── Sub-components ────────────────────────────────────────────────────────────

const GridBackground = () => (
  <div
    className="absolute inset-0 z-0 marlayer-grid-bg"
    style={{
      backgroundImage: `
        linear-gradient(rgba(69,177,160,0.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(69,177,160,0.07) 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    }}
  />
);

const ScanLine = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="marlayer-scan-line" />
  </div>
);

const CornerMarkers = () => (
  <>
    <div
      className="absolute top-3 left-3 w-5 h-5 z-20 pointer-events-none"
      style={{
        borderTop: `1.5px solid rgba(69,177,160,0.4)`,
        borderLeft: `1.5px solid rgba(69,177,160,0.4)`,
      }}
    />
    <div
      className="absolute bottom-3 right-3 w-5 h-5 z-20 pointer-events-none"
      style={{
        borderBottom: `1.5px solid rgba(69,177,160,0.4)`,
        borderRight: `1.5px solid rgba(69,177,160,0.4)`,
      }}
    />
  </>
);

const GlowOrb = () => (
  <div
    className="absolute z-0 pointer-events-none"
    style={{
      width: 700,
      height: 700,
      borderRadius: "50%",
      background: `radial-gradient(circle, rgba(69,177,160,0.12) 0%, transparent 70%)`,
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {[600, 700, 800].map((size, i) => (
      <div
        key={size}
        className="marlayer-pulse-ring"
        style={{
          position: "absolute",
          borderRadius: "50%",
          border: `1px solid rgba(69,177,160,0.2)`,
          width: size,
          height: size,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          animationDelay: `${i * 0.8}s`,
        }}
      />
    ))}
  </div>
);

const LayerStack = () => {
  const layers = [
    { label: "Software Solutions", opacity: 0.12, borderOpacity: 0.6, textColor: "#45B1A0", top: 20 },
    { label: "Tech Academy", opacity: 0.08, borderOpacity: 0.4, textColor: "#6fc9bb", top: 95 },
    { label: "Flagship Gadgets", opacity: 0.05, borderOpacity: 0.25, textColor: "#3a8a80", top: 170 },
  ];

  return (
    <div
      className="absolute z-10 pointer-events-none hidden lg:block"
      style={{ 
        right: "12%", // Adjusted from 8%
        top: "40%", 
        transform: "translateY(-50%) scale(clamp(1, 100vw / 1300, 1.4))", 
        width: 400, // Increased from 280
        height: 350, // Increased from 300
        perspective: 1000 
      }}
    >
      <GlowOrb />
      <div className="marlayer-layer-3d" style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d" }}>
        {layers.map(({ label, opacity, borderOpacity, textColor, top }, i) => (
          <React.Fragment key={label}>
            <div
              className="layer-chip"
              style={{
                position: "absolute",
                width: 400, // Increased from 350
                height: 70, // Increased from 65
                borderRadius: 8,
                left: "50%",
                transform: "translateX(-50%)",
                top,
                display: "flex",
                alignItems: "center",
                padding: "12px 20px", // Increased from 10px 18px
                gap: 10,
                background: `rgba(69,177,160,${opacity})`,
                border: `1px solid rgba(69,177,160,${borderOpacity})`,
                color: textColor,
                fontFamily: "'Space Mono', monospace",
                fontSize: 20, // Increased from 18
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                animationDelay: `${i * 0.2}s`,
                
              }}
            >
              <span
                className="marlayer-blink-dot"
                style={{
                  width: 8, height: 8, borderRadius: "50%", // Increased from 7x7
                  background: textColor, flexShrink: 0,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
              {label}
            </div>
            {/* Connector line */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: 1, // Keep as is
                top: top + 70, // Adjusted to new chip height (top + chipHeight)
                height: 20,
                background: `linear-gradient(to bottom, rgba(69,177,160,0.6), rgba(69,177,160,0.1))`,
              }}
            />
          </React.Fragment>
        ))}
        {/* Base layer */}
        <div
          style={{
            position: "absolute",
            width: 450, // Increased from 400
            height: 25, // Increased from 20
            background: "rgba(69,177,160,0.15)",
            border: "1.5px solid rgba(69,177,160,0.7)",
            borderRadius: 4,
            left: "50%",
            transform: "translateX(-50%)",
            top: 245, // Adjusted to new stack layout (last chip top + chipHeight + spacing)
            boxShadow: "0 0 20px rgba(69,177,160,0.3), 0 0 40px rgba(69,177,160,0.1)",
          }}
        />
      </div>
    </div>
  );
};

const FloatingChips = () => (
  <>
    <div
      className="floating-chip"
      style={{ position: "absolute", top: 80, right: "38%", fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(69,177,160,0.5)", letterSpacing: 1, pointerEvents: "none", animationDelay: "0s" }}
    >
      SYS::ONLINE
    </div>
    <div
      className="floating-chip"
      style={{ position: "absolute", bottom: 90, right: "42%", fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(69,177,160,0.5)", letterSpacing: 1, pointerEvents: "none", animationDelay: "1.5s" }}
    >
      v2.0_STABLE
    </div>
  </>
);

// ─── Typewriter hook ───────────────────────────────────────────────────────────

function useTypewriter(phrases: string[]) {
  const [displayed, setDisplayed] = useState(phrases[0]);
  const state = useRef({ phraseIdx: 0, charIdx: phrases[0].length, deleting: false });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const { phraseIdx, charIdx, deleting } = state.current;
      const phrase = phrases[phraseIdx];

      if (!deleting) {
        const next = phrase.substring(0, charIdx + 1);
        setDisplayed(next);
        if (charIdx + 1 >= phrase.length) {
          state.current.deleting = true;
          timeout = setTimeout(tick, 2000);
        } else {
          state.current.charIdx++;
          timeout = setTimeout(tick, 80);
        }
      } else {
        const next = phrase.substring(0, charIdx);
        setDisplayed(next);
        if (charIdx <= 0) {
          state.current.deleting = false;
          state.current.phraseIdx = (phraseIdx + 1) % phrases.length;
          state.current.charIdx = 0;
          timeout = setTimeout(tick, 400);
        } else {
          state.current.charIdx--;
          timeout = setTimeout(tick, 40);
        }
      }
    };

    timeout = setTimeout(tick, 1500);
    return () => clearTimeout(timeout);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return displayed;
}

// ─── Navbar ────────────────────────────────────────────────────────────────────

interface NavProps {
  isScrolled: boolean;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}

const Navbar = ({ isScrolled, mobileOpen, setMobileOpen }: NavProps) => {
  const navLinks = [
    { label: "Tech Academy",      href: "/academy" },
    { label: "Software",          href: "/software" },
    { label: "Gadgets",           href: "/gadgets" },
  ];

  return (
    <>
      <nav
        className="w-full left-0 top-0 z-50 transition-all duration-300"
        style={{
          position: isScrolled ? "fixed" : "absolute",
          background: isScrolled ? "rgba(2,13,10,0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(69,177,160,0.1)" : "none",
          padding: isScrolled ? "12px 0" : "20px 0",
        }}
      >
        <div className="w-full max-w-[1900px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: 2, color: "white", textDecoration: "none" }}>
            <span style={{ color: "rgba(69,177,160,0.5)" }}>[</span>
            <span>M</span>
            <span style={{ color: TEAL }}>ARLAYER</span>
            <span style={{ color: "rgba(69,177,160,0.5)" }}>]</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" style={{ listStyle: "none" }}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    letterSpacing: 0.5,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              fontWeight: 700,
              color: TEAL,
              border: "1px solid rgba(69,177,160,0.5)",
              padding: "8px 18px",
              borderRadius: 4,
              background: "rgba(69,177,160,0.05)",
              letterSpacing: 1,
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(69,177,160,0.15)"; e.currentTarget.style.borderColor = TEAL; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(69,177,160,0.05)"; e.currentTarget.style.borderColor = "rgba(69,177,160,0.5)"; }}
          >
            Get in Touch
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
            style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: 4 }}
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[1000] md:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)", opacity: mobileOpen ? 1 : 0 }}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className="absolute right-0 top-0 h-full flex flex-col px-6 py-6 transition-transform duration-300 ease-out"
          style={{
            width: "85%",
            maxWidth: 340,
            background: "#020d0a",
            borderLeft: "1px solid rgba(69,177,160,0.2)",
            transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <div className="flex justify-between items-center mb-10 pb-4" style={{ borderBottom: "1px solid rgba(69,177,160,0.1)" }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: 2, color: "white" }}>
              <span style={{ color: "rgba(69,177,160,0.5)" }}>[</span>M<span style={{ color: TEAL }}>ARLAYER</span><span style={{ color: "rgba(69,177,160,0.5)" }}>]</span>
            </span>
            <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer" }} aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 24 }}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 600, color: "white", textDecoration: "none" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                background: TEAL,
                color: "#020d0a",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                padding: "14px",
                borderRadius: 4,
                textDecoration: "none",
                letterSpacing: 1,
              }}
            >
              Get in Touch
            </Link>
            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.2)", fontSize: 12, marginTop: 20, fontFamily: "'Space Mono', monospace" }}>
              © Marlayer {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const typedText = useTypewriter(PHRASES);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToEcosystem = (e: React.MouseEvent) => {
    const el = document.getElementById("ecosystem");
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
  };

  return (
    <>
      {/* ── Keyframe styles injected once ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        @keyframes gridPulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        @keyframes scanMove {
          0%   { top: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes floatRotate {
          0%, 100% { transform: rotateX(20deg) rotateY(-15deg) translateY(0px); }
          50%       { transform: rotateX(20deg) rotateY(-15deg) translateY(-12px); }
        }
        @keyframes expandRing {
          0%   { opacity: 0.6; transform: translate(-50%, -50%) scale(0.7); }
          100% { opacity: 0;   transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes blinkDot {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes floatChip {
          0%, 100% { transform: translateY(0);    opacity: 0.5; }
          50%       { transform: translateY(-6px); opacity: 0.9; }
        }
        @keyframes cursorBlink {
          50% { border-color: transparent; }
        }

        .marlayer-grid-bg     { animation: gridPulse 6s ease-in-out infinite; }
        .marlayer-scan-line   { position: absolute; width: 100%; height: 2px; background: linear-gradient(90deg, transparent, rgba(69,177,160,0.4), transparent); animation: scanMove 4s linear infinite; top: 0; }
        .marlayer-layer-3d    { animation: floatRotate 8s ease-in-out infinite; }
        .marlayer-pulse-ring  { animation: expandRing 3s ease-out infinite; }
        .marlayer-blink-dot   { animation: blinkDot 2s ease-in-out infinite; }
        .marlayer-float-chip  { animation: floatChip 4s ease-in-out infinite; }
        .marlayer-typed       { border-right: 2px solid #45B1A0; animation: cursorBlink 0.8s step-end infinite; padding-right: 3px; }
      `}</style>

      <section
        className="relative w-full flex flex-col overflow-hidden"
        style={{
          minHeight: "100svh",
          maxHeight: 950,
          background: "#020d0a",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {/* Backgrounds */}
        <GridBackground />
        <ScanLine />
        <CornerMarkers />

        {/* Floating status chips */}
        {(["SYS::ONLINE", "v2.0_STABLE"] as const).map((label, i) => (
          <div
            key={label}
            className="marlayer-float-chip absolute z-10 pointer-events-none hidden lg:block"
            style={{
              [i === 0 ? "top" : "bottom"]: i === 0 ? 80 : 90,
              right: i === 0 ? "38%" : "42%",
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              color: "rgba(69,177,160,0.5)",
              letterSpacing: 1,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            {label}
          </div>
        ))}

        {/* Navbar */}
        <Navbar isScrolled={isScrolled} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

        {/* Hero body */}
        <div className="relative z-10 flex-1 flex items-center w-full max-w-[1900px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28">
          {/* Left: copy */}
          <div className="max-w-[100%] lg:max-w-[52%]">
            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 mb-5"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: TEAL, letterSpacing: 2, textTransform: "uppercase" }}
            >
              <span style={{ display: "block", width: 20, height: 1, background: TEAL }} />
              The Tech Foundation
            </div>

            {/* Headline */}
            <h1
              className="mb-4"
              style={{ 
                fontSize: "clamp(32px, 5vw, 68px)", 
                fontWeight: 700, 
                color: "white", 
                lineHeight: 1.1, 
                letterSpacing: -1 
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.35)" }}>Build on the</span>
              <br />
              <span style={{ color: TEAL }}>Layer that powers</span>
              <br />
              <span className="marlayer-typed">{typedText}</span>
            </h1>

            {/* Sub */}
            <p
              className="mb-8"
              style={{ 
                fontSize: "clamp(15px, 1.2vw, 18px)", 
                color: "rgba(255,255,255,0.45)", 
                lineHeight: 1.75, 
                maxWidth: 520, 
                fontWeight: 400 
              }}
            >
              Marlayer is the technology foundation businesses rely on — delivering software solutions,
              flagship hardware, and world-class tech training to help you scale with confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/#ecosystem"
                onClick={scrollToEcosystem}
                style={{
                  background: TEAL,
                  color: "#020d0a",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  padding: "12px 28px",
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: 0.5,
                  textDecoration: "none",
                  transition: "background 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#5cc5b3")}
                onMouseLeave={e => (e.currentTarget.style.background = TEAL)}
              >
                Explore Ecosystem
              </a>
              <Link
                href="/contact"
                style={{
                  background: "transparent",
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  padding: "12px 24px",
                  borderRadius: 4,
                  border: "1px solid rgba(255,255,255,0.15)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.color = "white"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
              >
                Get in Touch →
              </Link>
            </div>

            {/* Stats */}
            <div
              className="flex gap-6 mt-9 pt-7"
              style={{ borderTop: "1px solid rgba(69,177,160,0.1)" }}
            >
              {[
                { num: "3",    label: "Core Layers" },
                { num: "200+", label: "Businesses Served" },
                { num: "100%", label: "Tech Focused" },
              ].map(({ num, label }, i) => (
                <React.Fragment key={label}>
                  {i > 0 && <div style={{ width: 1, background: "rgba(255,255,255,0.08)", alignSelf: "stretch" }} />}
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontSize: "clamp(22px, 2.2vw, 32px)", fontWeight: 700, color: "white", fontFamily: "'Space Grotesk', sans-serif" }}>{num}</span>
                    <span style={{ fontSize: "clamp(10px, 0.9vw, 13px)", color: "rgba(255,255,255,0.35)", letterSpacing: 1, textTransform: "uppercase", fontFamily: "'Space Mono', monospace" }}>{label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right: Layer stack */}
          <LayerStack />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
