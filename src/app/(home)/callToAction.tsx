"use client"

import React from 'react';
import Link from 'next/link'; // Corrected import for Next.js routing
const TEAL = "#45B1A0";

export default function CallToAction() {
  return (
    <section 
      style={{
        background: "#020d0a",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <style>{`
        @keyframes marlayer-grid-pulse { 0%,100%{opacity:.4} 50%{opacity:.8} }
        @keyframes marlayer-cta-glow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.05; }
          50%      { transform: translate(-50%, -50%) scale(1.1); opacity: 0.08; }
        }
      `}</style>

      {/* Grid Background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(69,177,160,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(69,177,160,0.05) 1px,transparent 1px)`,
        backgroundSize: "40px 40px",
        animation: "marlayer-grid-pulse 8s ease-in-out infinite",
      }} />

      {/* Central Glow */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        width: 800, height: 400, borderRadius: "50%",
        background: `radial-gradient(ellipse, ${TEAL} 0%, transparent 70%)`,
        pointerEvents: "none",
        animation: "marlayer-cta-glow 10s ease-in-out infinite",
      }} />

      {/* Corner Markers */}
      {[
        { top: 24, left: 24, borderTop: true, borderLeft: true },
        { bottom: 24, right: 24, borderBottom: true, borderRight: true },
      ].map((pos, i) => (
        <div key={i} style={{ 
          position: "absolute", width: 30, height: 30, pointerEvents: "none",
          ...(pos.top && { top: pos.top }), ...(pos.bottom && { bottom: pos.bottom }),
          ...(pos.left && { left: pos.left }), ...(pos.right && { right: pos.right }),
          ...(pos.borderTop && { borderTop: `1.5px solid rgba(69,177,160,0.3)` }),
          ...(pos.borderLeft && { borderLeft: `1.5px solid rgba(69,177,160,0.3)` }),
          ...(pos.borderBottom && { borderBottom: `1.5px solid rgba(69,177,160,0.3)` }),
          ...(pos.borderRight && { borderRight: `1.5px solid rgba(69,177,160,0.3)` }),
        }} />
      ))}

      <div 
        className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center"
      >
        {/* Section label */}
        <div style={{ 
          display: "flex", alignItems: "center", gap: 10, 
          fontFamily: "'Space Mono', monospace", fontSize: 11, 
          color: TEAL, letterSpacing: 3, textTransform: "uppercase",
          marginBottom: 32
        }}>
          <span style={{ width: 30, height: 1, background: TEAL }} />
          Ready — To - Launch
          <span style={{ width: 30, height: 1, background: TEAL }} />
        </div>
        
        <h2 
          style={{ 
            fontSize: "clamp(32px, 5vw, 64px)", 
            fontWeight: 700, 
            color: "white", 
            lineHeight: 1.1, 
            letterSpacing: -1.5,
            marginBottom: 24
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.35)" }}>Ready to build your</span>
          <br />
          Next Big Idea?
        </h2>
        
        <p 
          style={{ 
            fontSize: "clamp(15px, 1.2vw, 18px)", 
            color: "rgba(255,255,255,0.45)", 
            lineHeight: 1.8, 
            maxWidth: 600, 
            marginBottom: 48 
          }}
        >
          We are ready to partner with you to provide technical training, bespoke software solutions, or high-quality tech gadgets tailored to your vision.
        </p>
        
        <Link 
          href='/contact' 
          style={{
            background: TEAL,
            color: "#020d0a",
            fontSize: 14,
            fontWeight: 700,
            padding: "16px 48px",
            borderRadius: 4,
            textTransform: "uppercase",
            letterSpacing: 1,
            transition: "all 0.2s",
            boxShadow: `0 0 30px rgba(69,177,160,0.2)`
          }}
        >
          Start Collaboration →
        </Link>
      </div>
    </section>
  );
};
