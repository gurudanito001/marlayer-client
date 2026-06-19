"use client";

// ContactHero.tsx
// Matches the HeroSection dark/techy aesthetic — no background image required,
// so nothing to lazy-load or wait on.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const TEAL = "#45B1A0";

interface NavProps {
  isScrolled: boolean;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}

const Navbar = ({ isScrolled, mobileOpen, setMobileOpen }: NavProps) => {
  const navLinks = [
    { label: "Tech Academy", href: "/academy" },
    { label: "Software",     href: "/software" },
    { label: "Gadgets",      href: "/gadgets" },
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
          <Link href="/" className="flex items-center gap-1.5 group select-none">
            <div className="relative flex items-center  gap-1.5 justify-center">
              <Image
                src="/images/marlayer-logo.svg"
                width={26}
                height={26}
                alt="Marlayer Logo"
                className="object-contain"
              />
              <span className="font-black text-2xl tracking-tight text-[#45B1A0] flex items-baseline mt-[2px]">
                <span className="text-[#45B1A0] font-extrabold text-xl tracking-wide leading-tight">ARLAYER</span>
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-8" style={{ listStyle: "none" }}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13, fontWeight: 500,
                    color: "rgba(255,255,255,0.5)", textDecoration: "none",
                    letterSpacing: 0.5, transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center"
            style={{
              fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700,
              color: TEAL, border: "1px solid rgba(69,177,160,0.5)",
              padding: "8px 18px", borderRadius: 4,
              background: "rgba(69,177,160,0.05)", letterSpacing: 1,
              textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(69,177,160,0.15)"; e.currentTarget.style.borderColor = TEAL; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(69,177,160,0.05)"; e.currentTarget.style.borderColor = "rgba(69,177,160,0.5)"; }}
          >
            Get in Touch
          </Link>

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

      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-[1000] md:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)", opacity: mobileOpen ? 1 : 0 }}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className="absolute right-0 top-0 h-full flex flex-col px-6 py-6 transition-transform duration-300 ease-out"
          style={{
            width: "85%", maxWidth: 340, background: "#020d0a",
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
                <Link href={href} onClick={() => setMobileOpen(false)} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 600, color: "white", textDecoration: "none" }}>
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
                display: "block", textAlign: "center", background: TEAL, color: "#020d0a",
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14,
                padding: "14px", borderRadius: 4, textDecoration: "none", letterSpacing: 1,
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

const ContactHero: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const topics = ["Tech Academy", "Software Solutions", "Flagship Gadgets"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        @keyframes marlayer-grid-pulse { 0%,100%{opacity:.6} 50%{opacity:1} }
        @keyframes marlayer-scan {
          0%   { top: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes marlayer-ring {
          0%   { opacity: 0.6; transform: translate(-50%, -50%) scale(0.7); }
          100% { opacity: 0;   transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes marlayer-blink { 50% { opacity: 0.3; } }
        @keyframes marlayer-float { 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-8px); } }
        @keyframes marlayer-line-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>

      <section
        className="relative w-full flex flex-col overflow-hidden"
        style={{
          maxHeight: "100svh",
          minHeight: 800,
          background: "#020d0a",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            animation: "marlayer-grid-pulse 6s ease-in-out infinite",
            backgroundImage: `
              linear-gradient(rgba(69,177,160,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(69,177,160,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Scan line */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            style={{
              position: "absolute", width: "100%", height: 2, top: 0,
              background: "linear-gradient(90deg, transparent, rgba(69,177,160,0.4), transparent)",
              animation: "marlayer-scan 4s linear infinite",
            }}
          />
        </div>

        {/* Corner markers */}
        <div className="absolute top-3 left-3 w-5 h-5 z-20 pointer-events-none" style={{ borderTop: "1.5px solid rgba(69,177,160,0.4)", borderLeft: "1.5px solid rgba(69,177,160,0.4)" }} />
        <div className="absolute bottom-3 right-3 w-5 h-5 z-20 pointer-events-none" style={{ borderBottom: "1.5px solid rgba(69,177,160,0.4)", borderRight: "1.5px solid rgba(69,177,160,0.4)" }} />

        {/* Glow orb + pulse rings — right side, balances the headline */}
        <div
          className="absolute z-0 pointer-events-none hidden lg:block"
          style={{
            width: 420, height: 420, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(69,177,160,0.08) 0%, transparent 70%)",
            right: "6%", top: "50%", transform: "translateY(-50%)",
          }}
        >
          {[200, 290, 380].map((size, i) => (
            <div
              key={size}
              style={{
                position: "absolute", borderRadius: "50%",
                border: "1px solid rgba(69,177,160,0.18)",
                width: size, height: size, left: "50%", top: "50%",
                animation: `marlayer-ring 3.2s ease-out ${i * 0.8}s infinite`,
              }}
            />
          ))}

          {/* Floating connection node icon in the center of the glow */}
          <div
            style={{
              position: "absolute", left: "50%", top: "50%",
              transform: "translate(-50%, -50%)",
              width: 88, height: 88, borderRadius: "50%",
              background: "rgba(69,177,160,0.08)",
              border: "1px solid rgba(69,177,160,0.35)",
              display: "flex", alignItems: "center", justifyContent: "center",
              animation: `marlayer-float 5s ease-in-out 0s infinite`,
            }}
          >
            <svg width={36} height={36} fill="none" stroke={TEAL} strokeWidth={1.6} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
        </div>

        {/* Status chips */}
        <div
          className="absolute z-10 pointer-events-none hidden lg:block"
          style={{ top: 100, right: "20%", fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(69,177,160,0.5)", letterSpacing: 1, animation: `marlayer-float 4s ease-in-out 0s infinite` }}
        >
          STATUS::AVAILABLE
        </div>
        <div
          className="absolute z-10 pointer-events-none hidden lg:block"
          style={{ bottom: 110, right: "24%", fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(69,177,160,0.5)", letterSpacing: 1, animation: `marlayer-float 4s ease-in-out 1.5s infinite` }}
        >
          RESPONSE::24H
        </div>

        {/* Navbar */}
        <Navbar isScrolled={isScrolled} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-center w-full max-w-[1900px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28">
          <div className="max-w-2xl pt-20 lg:pt-0">
            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 mb-6"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: TEAL, letterSpacing: 2, textTransform: "uppercase" }}
            >
              <span style={{ display: "block", width: 20, height: 1, background: TEAL }} />
              Let's Connect
            </div>

            {/* Headline */}
            <h1
              className="mb-8"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, color: "white", lineHeight: 1.05, letterSpacing: -1.5 }}
            >
              <span style={{ color: "rgba(255,255,255,0.35)" }}>Get in</span>{" "}
              <span style={{ color: TEAL }}>touch</span>
              <br />
              with us.
            </h1>

            {/* Sub copy */}
            <p
              className="mb-10"
              style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: 460 }}
            >
              Whether you're scaling your team, building your next platform, or upskilling your people — we're ready to help. Tell us what you need.
            </p>

            {/* Enquiry pills */}
            <div className="flex flex-wrap items-center gap-3">
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: 1, textTransform: "uppercase", marginRight: 4 }}>
                Enquire About
              </span>
              {topics.map(topic => {
                const active = activeTopic === topic;
                return (
                  <button
                    key={topic}
                    onClick={() => setActiveTopic(topic)}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 13, fontWeight: 500,
                      padding: "9px 20px", borderRadius: 20,
                      background: active ? "rgba(69,177,160,0.18)" : "rgba(69,177,160,0.05)",
                      border: `1px solid ${active ? TEAL : "rgba(69,177,160,0.25)"}`,
                      color: active ? TEAL : "rgba(255,255,255,0.6)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = "rgba(69,177,160,0.5)"; e.currentTarget.style.color = "white"; } }}
                    onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = "rgba(69,177,160,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; } }}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>

            {/* Animated underline divider */}
            <div
              style={{
                marginTop: 48, height: 1, width: 120,
                background: `linear-gradient(90deg, ${TEAL}, transparent)`,
                transformOrigin: "left",
                animation: "marlayer-line-grow 1.2s ease-out",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHero;