"use client";

// Section 5 — Why Marlayer
// Addresses the unspoken fears about hiring a software agency:
// "Will they disappear? Will they understand my business? Will it actually work?"
// Framed as a comparison — what we do vs what the industry normally does.

const differentiators = [
  {
    fear: "Agencies that don't understand your business.",
    marlayer: "We start with your business, not your brief.",
    detail:
      "Before we propose anything, we spend time understanding how you make money, where you lose it, and what your customers actually need. The technology follows the strategy.",
    icon: "🧠",
  },
  {
    fear: "Teams that go dark mid-project.",
    marlayer: "You see progress every single week.",
    detail:
      "Every sprint ends with a demo. You get a staging link, weekly updates, and a direct line to the team building your product. No surprises. No excuses.",
    icon: "👁",
  },
  {
    fear: "Beautiful designs that don't convert.",
    marlayer: "We build for outcomes, not aesthetics.",
    detail:
      "Design is a means to an end. Every UI decision is made with your user's journey and your business goal in mind. We measure success by what your software does for you.",
    icon: "🎯",
  },
  {
    fear: "Software that breaks when you need it most.",
    marlayer: "We build with reliability baked in.",
    detail:
      "Testing isn't an afterthought at Marlayer. Every system is built with error handling, monitoring, and fallback logic from the start. It performs when the pressure is real.",
    icon: "🔒",
  },
  {
    fear: "Agencies that hand over code and disappear.",
    marlayer: "We partner with you long-term.",
    detail:
      "The best software evolves. We offer post-launch retainers and stay on as your technical partner — maintaining, improving, and scaling your system as your business grows.",
    icon: "🤝",
  },
  {
    fear: "Solutions that stop working as you scale.",
    marlayer: "We architect for the version of you 3 years from now.",
    detail:
      "We don't build for today's traffic and today's team. Every system is designed with scalability, security, and maintainability as requirements — not afterthoughts.",
    icon: "📈",
  },
];

export default function SoftwareWhyMarlayer() {
  return (
    <section className="bg-[#0D2B1E] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            WHY_MARLAYER
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            The software agency you&apos;ve been burned by before?
            <br className="hidden md:block" />
            <span className="text-[#45B1A0]"> That&apos;s not us.</span>
          </h2>
          <p className="text-[#7AADA4] text-base leading-relaxed">
            We built Marlayer&apos;s approach specifically around every frustration
            businesses have with software partners.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((d) => (
            <div
              key={d.fear}
              className="group bg-white/[0.02] border border-white/[0.07] hover:border-[#45B1A0]/30 rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.04]"
            >
              {/* Emoji icon */}
              <span className="text-2xl block mb-5">{d.icon}</span>

              {/* The fear — crossed out */}
              <div className="flex items-start gap-2 mb-3">
                <svg className="w-4 h-4 text-red-400/60 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-white/30 text-xs line-through leading-snug">{d.fear}</p>
              </div>

              {/* The Marlayer way */}
              <div className="flex items-start gap-2 mb-4">
                <svg className="w-4 h-4 text-[#45B1A0] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-white font-semibold text-sm leading-snug">{d.marlayer}</p>
              </div>

              {/* Detail */}
              <p className="text-[#7AADA4] text-sm leading-relaxed pl-6">{d.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}