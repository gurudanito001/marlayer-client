"use client";

// SME Process
// SME owners fear being confused, overcharged, or handed something they can't maintain.
// This section reassures them: the process is clear, they stay in control,
// they don't need to know anything technical.

const steps = [
  {
    step: "01",
    name: "We talk about your business",
    duration: "Week 1 · Free",
    description:
      "We start with a conversation — not a presentation. We ask about your business, your clients, what's working, and what isn't. You don't need to have a brief prepared or know anything about websites or software. Just talk to us like you'd talk to a trusted advisor.",
    whatYouDo: "Show up and talk about your business.",
    whatWeLeave: "A clear picture of what you need and what to build.",
    icon: "💬",
  },
  {
    step: "02",
    name: "We show you exactly what we'll build",
    duration: "Week 2",
    description:
      "Before we build anything, we show you what it will look like and how it will work. You can see the design, read the words we'll use, and understand what each part does — in plain language. Nothing gets built until you're happy with the plan.",
    whatYouDo: "Review, give feedback, and approve.",
    whatWeLeave: "A clear plan and design you've signed off on.",
    icon: "🎨",
  },
  {
    step: "03",
    name: "We build it and keep you in the loop",
    duration: "Weeks 3–6",
    description:
      "We build your system while you run your business. You don't have to manage us — we manage the process. Every week, we show you progress. You can ask questions, request changes, and see exactly where things stand. No going dark, no surprises.",
    whatYouDo: "Review progress weekly and give feedback.",
    whatWeLeave: "A finished, tested system ready to launch.",
    icon: "⚙️",
  },
  {
    step: "04",
    name: "We launch — and stay with you",
    duration: "Launch day onwards",
    description:
      "We launch your system, walk you through everything, and make sure your team knows how to use it. Then we stick around. Questions after launch? We're here. Something needs updating? We handle it. You are never left on your own with something you don't understand.",
    whatYouDo: "Use your new system and watch it work.",
    whatWeLeave: "A running system and an ongoing partner.",
    icon: "🚀",
  },
];

export default function SMEProcess() {
  return (
    <section className="bg-[#071A10] border-y border-white/5 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            What working with Marlayer actually looks like.
          </h2>
          <p className="text-[#7AADA4] text-base leading-relaxed">
            Four steps. Plain language. No surprises.
            You stay in control the entire time.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="absolute left-[28px] top-full w-px h-4 bg-[#45B1A0]/15 z-10" />
              )}

              <div className="group flex gap-5 bg-white/[0.02] border border-white/[0.07] hover:border-[#45B1A0]/25 rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.04]">

                {/* Icon circle */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#45B1A0]/10 border border-[#45B1A0]/20 flex items-center justify-center text-2xl group-hover:bg-[#45B1A0]/15 transition-colors">
                    {s.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-[#45B1A0]/40 text-[10px] font-mono font-bold tracking-widest">
                      STEP {s.step}
                    </span>
                    <span className="text-white/20 text-[10px] font-mono border border-white/10 px-2 py-0.5 rounded">
                      {s.duration}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                    {s.name}
                  </h3>

                  <p className="text-[#7AADA4] text-sm leading-relaxed mb-5">
                    {s.description}
                  </p>

                  {/* What you do / what we leave */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-white/[0.03] rounded-xl px-4 py-3">
                      <p className="text-white/20 text-[9px] font-mono tracking-widest uppercase mb-1">You do</p>
                      <p className="text-white/50 text-xs">{s.whatYouDo}</p>
                    </div>
                    <div className="bg-[#45B1A0]/8 rounded-xl px-4 py-3">
                      <p className="text-[#45B1A0]/60 text-[9px] font-mono tracking-widest uppercase mb-1">You leave with</p>
                      <p className="text-white/70 text-xs font-medium">{s.whatWeLeave}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom reassurance */}
        <div className="mt-10 text-center">
          <p className="text-white/30 text-sm mb-6">
            Most SME clients go from first conversation to a live system in{" "}
            <span className="text-white/60 font-semibold">4 to 8 weeks.</span>
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#45B1A0] hover:bg-[#359688] text-[#0D2B1E] font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
          >
            Start with a free conversation →
          </a>
        </div>
      </div>
    </section>
  );
}