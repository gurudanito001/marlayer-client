"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Software", href: "/software" },
  { label: "Gadgets", href: "/gadgets" },
  { label: "Academy", href: "/academy" },
];

const softwareDropdown = [
  { label: "Growing Businesses", href: "/software/sme", desc: "Global brand & web systems" },
  { label: "Enterprise", href: "/software/enterprise", desc: "Custom software solutions" },
  { label: "Case Studies", href: "/software/case-studies", desc: "Results from real clients" },
];

export default function SoftwareNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#071A10]/95 backdrop-blur-md border-b border-white/[0.07] shadow-xl shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Top teal accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#45B1A0]/60 to-transparent" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group flex-shrink-0"
            >
              <div className="w-7 h-7 rounded-lg bg-[#45B1A0] flex items-center justify-center">
                <span className="text-[#0D2B1E] text-xs font-black font-mono">M</span>
              </div>
              <span className="text-white font-bold text-base tracking-tight group-hover:text-[#45B1A0] transition-colors">
                MARLAYER
              </span>
              <span className="hidden sm:inline text-[#45B1A0]/40 text-[10px] font-mono border border-[#45B1A0]/20 px-1.5 py-0.5 rounded">
                SOFTWARE
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                const isSoftware = link.href === "/software";

                if (isSoftware) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "text-[#45B1A0] bg-[#45B1A0]/10"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown */}
                      <div className={`absolute top-full left-0 mt-2 w-60 transition-all duration-200 ${
                        dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                      }`}>
                        <div className="bg-[#071A10] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/40 p-1.5">
                          {softwareDropdown.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex flex-col px-4 py-3 rounded-lg hover:bg-[#45B1A0]/10 transition-colors group"
                            >
                              <span className="text-white text-sm font-medium group-hover:text-[#45B1A0] transition-colors">
                                {item.label}
                              </span>
                              <span className="text-white/30 text-xs font-mono mt-0.5">
                                {item.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-[#45B1A0] bg-[#45B1A0]/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/software/case-studies"
                className="text-white/50 hover:text-white text-sm font-medium transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#45B1A0] hover:bg-[#359688] text-[#0D2B1E] font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#45B1A0]/20"
              >
                Start a Project
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
              aria-label="Toggle navigation"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="bg-[#071A10] border-t border-white/[0.07] px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname.startsWith(link.href)
                    ? "text-[#45B1A0] bg-[#45B1A0]/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile dropdown items */}
            <div className="pt-1 pb-1">
              <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest px-4 py-2">
                Software Solutions
              </p>
              {softwareDropdown.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2.5 rounded-xl text-sm text-white/40 hover:text-white hover:bg-white/5 transition-colors pl-8"
                >
                  → {item.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-white/[0.07]">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#45B1A0] text-[#0D2B1E] font-bold text-sm px-5 py-3.5 rounded-xl w-full transition-colors hover:bg-[#359688]"
              >
                Start a Project →
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-16 md:h-18" />
    </>
  );
}