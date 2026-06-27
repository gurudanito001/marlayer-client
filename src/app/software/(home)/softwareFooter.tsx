"use client";

import Link from "next/link";
import Image from "next/image";

// 1. Restructured & Professional Link Categories
const footerLinks = [
  {
    heading: "Expertise",
    links: [
      { label: "Software Development", href: "/software/development" },
      { label: "Cloud Architecture", href: "/software/architecture" },
      { label: "Mobile Ecosystems", href: "/software/mobile" },
      { label: "UI/UX Engineering", href: "/software/design" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Marlayer", href: "/software/about" },
      { label: "Case Studies", href: "/software/projects" },
      { label: "Careers", href: "/software/careers" },
      { label: "Tech Blog", href: "/software/blog" },
    ],
  },
  {
    heading: "Support & Legal",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "System Status", href: "/software/status" },
    ],
  },
];

const socialLinks = [
  {
    label: "Twitter / X",
    href: "https://x.com/marlayer",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/marlayer/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/marlayers/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/marlayer",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function SoftwareFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071A10] border-t border-white/[0.07]">

      {/* Pre-footer CTA strip */}
      <div className="border-b border-white/[0.07]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-lg">
              Ready to build something real?
            </p>
            <p className="text-white/40 text-sm font-mono mt-0.5">
              // Discovery session is free. No commitment required.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="https://wa.me/2348140715723"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all"
            >
              <svg className="w-4 h-4 text-[#45B1A0]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#45B1A0] hover:bg-[#359688] text-[#0D2B1E] font-bold text-sm px-5 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-[#45B1A0]/20"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer body (Academy Structure) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28 pt-16 pb-12 flex flex-col justify-between">
        
        {/* Top Section: Brand & Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 w-full mb-16">
          
          {/* Left Side: Brand Info */}
          <div className="flex flex-col gap-6 max-w-xs xl:max-w-sm">
            <Link href="/" className="flex items-center gap-1.5 group select-none">
              <div className="relative flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/images/marlayer-logo.svg"
                  width={26}
                  height={26}
                  alt="Marlayer Logo"
                  className="object-contain"
                />
                <span className="font-black text-2xl tracking-tight flex items-baseline ml-1" style={{ color: '#45B1A0' }}>
                  <span className="text-white font-extrabold text-xl tracking-wide">ARLAYER</span>
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-[14px] leading-relaxed font-medium">
              The technology foundation businesses rely on — software solutions, premium gadgets, and world-class tech training.
            </p>

            {/* Status indicator */}
            <div className="flex items-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#45B1A0] animate-pulse" />
              <span className="text-[#45B1A0]/60 text-[10px] font-mono tracking-widest uppercase">
                SYSTEM_STATUS: ONLINE
              </span>
            </div>

            {/* Address */}
            <div className="mt-2 space-y-1.5">
              <p className="text-white/20 text-xs font-mono">6 Oremeta St, Oregun, Ikeja, Lagos</p>
              <a
                href="mailto:daniel.marlayer@gmail.com"
                className="text-[#45B1A0]/50 hover:text-[#45B1A0] text-xs font-mono transition-colors block"
              >
                daniel.marlayer@gmail.com
              </a>
            </div>
          </div>

          {/* Right Side: Columns Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24 w-full lg:w-auto">
            {footerLinks.map((col) => (
              <div className="flex flex-col gap-6" key={col.heading}>
                <h6 className="text-white/20 text-[10px] font-mono font-bold tracking-widest uppercase">
                  {col.heading}
                </h6>
                <ul className="flex flex-col gap-4 text-[13px] font-medium">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {/* 2. Added Translation & Teal Hover Effect */}
                      <Link
                        href={link.href}
                        className="inline-block text-white/40 hover:text-[#45B1A0] hover:translate-x-1 transition-all duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-white/[0.07] mb-8" />

        {/* Bottom Section: Copyright, Legal & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-mono text-center md:text-left">
            © {currentYear} Marlayer. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] hover:bg-[#45B1A0]/10 hover:border-[#45B1A0]/30 text-white/30 hover:text-[#45B1A0] flex items-center justify-center transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-white/20 hover:text-white/50 text-xs font-mono transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/10 text-xs">·</span>
            <Link href="/terms-of-service" className="text-white/20 hover:text-white/50 text-xs font-mono transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}