"use client";

// OurCoreValues.tsx
// Matches the HeroSection dark/techy aesthetic
// ─────────────────────────────────────────────────────────────────────────────

import React, { useRef, useEffect, useState } from "react";

const TEAL = "#45B1A0";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const values = [
  {
    id: "01",
    title: "Integrity",
    desc: "We deliver only what we can stand behind. Honesty and transparency guide every interaction — from software to gadgets.",
    icon: (
      <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M12 3.75l8.25 4.5v5.25c0 4.28-3.18 7.98-8.25 9C8.88 21.48 5 17.78 5 13.5V8.25L12 3.75z" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Quality",
    desc: "We never compromise. Every product, platform, and course is crafted to meet high-performance standards, always.",
    icon: (
      <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Innovation",
    desc: "Technology evolves fast. We continuously experiment and adopt new ideas so you always get modern, future-proof solutions.",
    icon: (
      <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Customer First",
    desc: "Your success is our priority. We listen, adapt, and tailor every service to deliver real, measurable value for your goals.",
    icon: (
      <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Execution",
    desc: "Great ideas matter, but execution is everything. We focus on precision and accountability to ship projects that truly perform.",
    icon: (
      <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Growth",
    desc: "We empower people through knowledge. Our academy and culture reflect an unwavering commitment to continuous learning.",
    icon: (
      <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const OurCoreValues: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: sectionRef, inView } = useInView(0.1);

  // Auto-scroll
  useEffect(() => {
    const id = setInterval(() => {
      if (isPaused || !scrollRef.current) return;
      const container = scrollRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        setActiveIndex(0);
      } else {
        container.scrollBy({ left: container.clientWidth / 3, behavior: "smooth" });
        setActiveIndex(i => Math.min(i + 1, values.length - 1));
      }
    }, 3000);
    return () => clearInterval(id);
  }, [isPaused]);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth / 3;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setActiveIndex(i => dir === "left" ? Math.max(i - 1, 0) : Math.min(i + 1, values.length - 1));
  };

  return (
    <>
      <style>{`
        @keyframes marlayer-blink { 50% { opacity: 0; } }
        @keyframes marlayer-grid-pulse { 0%,100%{opacity:.4} 50%{opacity:.9} }
        .marlayer-values-scroll::-webkit-scrollbar { display: none; }
        .marlayer-values-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .marlayer-value-card:hover .marlayer-value-id { color: ${TEAL}; }
        .marlayer-value-card:hover { border-color: rgba(69,177,160,0.3) !important; background: rgba(69,177,160,0.06) !important; }
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
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(69,177,160,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(69,177,160,0.035) 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
          animation: "marlayer-grid-pulse 7s ease-in-out infinite",
        }} />

        {/* Top divider */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(69,177,160,0.25), transparent)", pointerEvents: "none" }} />

        <div ref={sectionRef} style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

          {/* Header row */}
          <div
            style={{
              display: "flex", flexDirection: "column", gap: 32,
              marginBottom: 56,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Space Mono', monospace", fontSize: 11, color: TEAL, letterSpacing: 2, textTransform: "uppercase" }}>
              <span style={{ width: 20, height: 1, background: TEAL, display: "inline-block" }} />
              Core Values
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
              <h2
                style={{
                  fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 700, color: "white",
                  lineHeight: 1.1, letterSpacing: -1,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.3)" }}>What makes</span>
                <br />
                <span style={{ color: TEAL }}>us different.</span>
              </h2>

              {/* Nav controls */}
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {/* Dots */}
                <div style={{ display: "flex", gap: 6, marginRight: 8 }}>
                  {values.map((_, i) => (
                    <span
                      key={i}
                      style={{
                        width: i === activeIndex ? 18 : 6,
                        height: 6,
                        borderRadius: 3,
                        background: i === activeIndex ? TEAL : "rgba(69,177,160,0.2)",
                        transition: "width 0.3s ease, background 0.3s ease",
                        display: "inline-block",
                      }}
                    />
                  ))}
                </div>
                {(["left", "right"] as const).map(dir => (
                  <button
                    key={dir}
                    onClick={() => scroll(dir)}
                    style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: "rgba(69,177,160,0.08)",
                      border: "1px solid rgba(69,177,160,0.25)",
                      color: TEAL, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(69,177,160,0.18)"; e.currentTarget.style.borderColor = TEAL; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(69,177,160,0.08)"; e.currentTarget.style.borderColor = "rgba(69,177,160,0.25)"; }}
                    aria-label={dir === "left" ? "Previous" : "Next"}
                  >
                    <svg width={14} height={14} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={dir === "left" ? "M15.75 19.5L8.25 12l7.5-7.5" : "M8.25 4.5l7.5 7.5-7.5 7.5"} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cards carousel */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={scrollRef}
              className="marlayer-values-scroll"
              style={{
                display: "flex",
                overflowX: "auto",
                gap: 14,
                scrollSnapType: "x mandatory",
              }}
            >
              {values.map((v, i) => (
                <div
                  key={v.id}
                  className="marlayer-value-card"
                  style={{
                    flexShrink: 0,
                    width: "calc(33.333% - 10px)",
                    minWidth: 260,
                    scrollSnapAlign: "start",
                    background: "rgba(69,177,160,0.03)",
                    border: "1px solid rgba(69,177,160,0.1)",
                    borderRadius: 12,
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                    cursor: "default",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(24px)",
                    // so we override with a combined transition string:
                    transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s, border-color 0.2s, background 0.2s`,
                  }}
                >
                  {/* Top row: icon + id */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: 8,
                      background: "rgba(69,177,160,0.08)", border: "1px solid rgba(69,177,160,0.18)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: TEAL,
                    }}>
                      {v.icon}
                    </div>
                    <span
                      className="marlayer-value-id"
                      style={{
                        fontFamily: "'Space Mono', monospace", fontSize: 11,
                        color: "rgba(255,255,255,0.2)", letterSpacing: 2,
                        transition: "color 0.2s",
                      }}
                    >
                      _{v.id}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <h4 style={{ fontSize: 17, fontWeight: 700, color: "white", marginBottom: 8, fontFamily: "'Space Grotesk', sans-serif" }}>
                      {v.title}
                    </h4>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                      {v.desc}
                    </p>
                  </div>

                  {/* Bottom line accent */}
                  <div style={{ height: 1, background: "linear-gradient(90deg, rgba(69,177,160,0.3), transparent)", marginTop: "auto" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCoreValues;
