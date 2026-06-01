"use client";

// Section 4 — How We Work
// Buyers need to see a clear process before they trust a software partner.
// This section removes the "will they actually deliver?" fear.
// Styled like a deployment pipeline — techy, visual, clean.

const phases = [
  {
    phase: "01",
    name: "DISCOVER",
    title: "We learn your business before writing a line.",
    description:
      "Every project starts with deep discovery. We map your goals, your users, your constraints, and the problems you actually need solved — not the ones that just sound good in a brief.",
    deliverable: "Project brief + architecture proposal",
    duration: "Week 1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    phase: "02",
    name: "ARCHITECT",
    title: "We design the system, not just the screens.",
    description:
      "We design the technical architecture and user experience before development begins. You see exactly what you're getting — and we align on it — before we build anything.",
    deliverable: "Technical spec + UI/UX designs",
    duration: "Week 2–3",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    phase: "03",
    name: "BUILD",
    title: "Iterative sprints. You see progress every week.",
    description:
      "Development happens in structured sprints. You get weekly demos, access to a staging environment, and a direct line to the team. No going dark for 3 months and delivering a surprise.",
    deliverable: "Working product increments",
    duration: "Sprint cycles",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    phase: "04",
    name: "LAUNCH",
    title: "Tested, documented, deployed.",
    description:
      "Before anything goes live, it passes our QA process. We handle deployment, write the documentation, and train your team. You get a system you own and understand — not a black box.",
    deliverable: "Production launch + documentation",
    duration: "Final sprint",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
  },
  {
    phase: "05",
    name: "EVOLVE",
    title: "We stay your partner after launch.",
    description:
      "The best software evolves with the business. We offer post-launch retainers for maintenance, new features, and technical guidance. One partner through the full lifecycle.",
    deliverable: "Monthly retainer partnership",
    duration: "Ongoing",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function SoftwareHowWeWork() {
  return (
    <section className="bg-[#071A10] border-y border-white/5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            PROCESS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            How we turn your problem
            <br />into a working system.
          </h2>
          <p className="text-[#7AADA4] text-base leading-relaxed">
            No surprises. No going dark. No guessing if the project is on track.
            This is how every Marlayer engagement runs.
          </p>
        </div>

        {/* Phase steps */}
        <div className="space-y-4">
          {phases.map((phase, index) => (
            <div
              key={phase.phase}
              className="group relative flex gap-6 bg-white/[0.02] border border-white/[0.07] hover:border-[#45B1A0]/30 hover:bg-white/[0.04] rounded-2xl p-7 transition-all duration-300"
            >
              {/* Vertical connector */}
              {index < phases.length - 1 && (
                <div className="absolute left-[52px] top-full w-px h-4 bg-[#45B1A0]/20 z-10" />
              )}

              {/* Phase icon circle */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div className="w-11 h-11 rounded-xl bg-[#45B1A0]/10 border border-[#45B1A0]/20 flex items-center justify-center text-[#45B1A0] group-hover:bg-[#45B1A0]/20 transition-colors">
                  {phase.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-[#45B1A0] text-[10px] font-mono font-bold tracking-widest">
                    PHASE_{phase.phase}
                  </span>
                  <span className="text-white/20 text-xs font-mono">//</span>
                  <span className="text-white/40 text-[10px] font-mono tracking-wider">
                    {phase.name}
                  </span>
                  <span className="ml-auto text-[10px] font-mono text-white/20 border border-white/10 px-2 py-0.5 rounded">
                    {phase.duration}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-base mb-2">{phase.title}</h3>
                <p className="text-[#7AADA4] text-sm leading-relaxed">{phase.description}</p>

                <div className="mt-3 flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-[#45B1A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-[#45B1A0]/70 text-xs font-mono">
                    Deliverable: {phase.deliverable}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-[#45B1A0]/10 border border-[#45B1A0]/20 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="text-white font-semibold">Ready to start Phase 01?</p>
            <p className="text-[#7AADA4] text-sm mt-0.5">
              Discovery sessions are free and commitment-free.
            </p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#45B1A0] hover:bg-[#359688] text-[#0D2B1E] font-bold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            Book a discovery call →
          </a>
        </div>
      </div>
    </section>
  );
}