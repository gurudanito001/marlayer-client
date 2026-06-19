"use client";

// Section 2 — Audience Selector
// The moment visitors identify themselves.
// Each card speaks directly to that buyer's core desire/fear.
// This is both a navigation tool AND a conversion moment.

const audiences = [
  {
    tag: "FOR GROWING BUSINESSES",
    href: "/software/sme",
    headline: "You're ready to stop looking small.",
    body: "You have a real business, real customers, and real ambition. But your digital presence isn't reflecting that yet. Competitors with bigger budgets are winning deals you should be winning. We build the systems — websites, platforms, automations — that make your business look and operate like a global brand from day one.",
    desires: [
      "Attract clients beyond your immediate geography",
      "Build credibility that closes deals before a pitch",
      "Automate the operations that eat your time",
      "Launch fast and iterate as you grow",
    ],
    cta: "Build my global presence →",
    accentColor: "#45B1A0",
    bgClass: "hover:border-[#45B1A0]/60",
    tagClass: "text-[#45B1A0] bg-[#45B1A0]/10 border-[#45B1A0]/20",
    ctaClass: "bg-[#45B1A0] hover:bg-[#359688] text-[#0D2B1E]",
  },
  {
    tag: "FOR ENTERPRISES",
    href: "/software/enterprise",
    headline: "You have a problem no tool in the market solves.",
    body: "Your business has outgrown generic software. You need something built specifically for the way your organization operates — custom workflows, integrations between systems, dashboards that give you real visibility, or internal tools your team actually uses. We go deep on your problem and build the exact solution you need.",
    desires: [
      "Eliminate workflows held together by spreadsheets",
      "Replace legacy systems that slow your team down",
      "Integrate tools that don't talk to each other",
      "Build internal tools your team will actually adopt",
    ],
    cta: "Solve my enterprise problem →",
    accentColor: "#ffffff",
    bgClass: "hover:border-white/30",
    tagClass: "text-white/70 bg-white/5 border-white/10",
    ctaClass: "bg-white/10 hover:bg-white/15 border border-white/20 text-white",
  },
];

export default function SoftwareAudienceSelector() {
  return (
    <section className="bg-[#071A10] border-y border-white/5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            WHO_ARE_YOU
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Two types of businesses. Two tailored solutions.
          </h2>
          <p className="text-primary-2 mt-3 max-w-lg mx-auto">
            Choose the one that describes where you are. We&apos;ll show you
            exactly how Marlayer solves your specific problem.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((aud) => (
            <a
              key={aud.tag}
              href={aud.href}
              className={`group relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10 transition-all duration-300 ${aud.bgClass} hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-2xl block`}
            >
              {/* Tag */}
              <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest uppercase border px-3 py-1 rounded-full mb-5 ${aud.tagClass}`}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: aud.accentColor }} />
                {aud.tag}
              </span>

              {/* Headline */}
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                {aud.headline}
              </h3>

              {/* Body */}
              <p className="text-[#7AADA4] text-sm leading-relaxed mb-7">
                {aud.body}
              </p>

              {/* Desire list */}
              <ul className="space-y-2.5 mb-8">
                {aud.desires.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-white/70">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: aud.accentColor }}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <span className={`inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 ${aud.ctaClass}`}>
                {aud.cta}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Not sure nudge */}
        <p className="text-center text-[#45B1A0]/60 text-sm mt-8 font-mono">
          Not sure which fits you?{" "}
          <a href="/contact" className="text-[#45B1A0] hover:underline font-semibold">
            Let&apos;s talk. →
          </a>
        </p>
      </div>
    </section>
  );
}