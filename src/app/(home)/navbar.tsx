"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { DM_Sans, Poppins } from "next/font/google";


const dmSans = DM_Sans({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], 
});
const TEAL = "#45B1A0"

interface NavBarProps {
  isScrolled?: boolean;
  mobileOpen?: boolean;
  setMobileOpen?: (v: boolean) => void;
  darkTheme?: boolean;
}

const NavBar = ({ isScrolled: isScrolledProp, mobileOpen: mobileOpenProp, setMobileOpen: setMobileOpenProp, darkTheme = false }: NavBarProps) => {
  const navLinks = [
    { label: "Tech Academy", href: "/academy" },
    { label: "Software", href: "/software" },
    { label: "Gadgets", href: "/gadgets" },
  ];

  // Manage scroll state internally when parent doesn't provide it
  const [internalScrolled, setInternalScrolled] = useState(false);
  useEffect(() => {
    if (typeof isScrolledProp === "boolean") return; // parent controls it
    const onScroll = () => setInternalScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrolledProp]);
  const isScrolled = typeof isScrolledProp === "boolean" ? isScrolledProp : internalScrolled;

  // Manage mobile open state internally when parent doesn't provide it
  const [internalMobileOpen, setInternalMobileOpen] = useState(false);
  const mobileOpen = typeof mobileOpenProp === "boolean" ? mobileOpenProp : internalMobileOpen;
  const setMobileOpen = setMobileOpenProp ?? setInternalMobileOpen;

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

export default NavBar;