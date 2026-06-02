"use client";

// SME Gap — The Recognition Moment
// Names the 4 specific situations that SME owners live through.
// When they read this and nod, they are already sold.
// Plain English — zero jargon.

const gaps = [
  {
    icon: "😬",
    situation: "A potential client Googled your business before a meeting.",
    consequence:
      "They found a website that looked outdated, a Facebook page with old posts, and nothing that matched the quality of the proposal you sent. They showed up with doubts you had to spend the whole meeting dissolving.",
  },
  {
    icon: "💸",
    situation: "You lost a deal to a competitor you know you're better than.",
    consequence:
      "They had a cleaner website, a more professional presence, and a smoother process. The client never said it — but their digital presence made them look like the safer choice. Yours didn't.",
  },
  {
    icon: "🌍",
    situation: "You want clients from outside your city — or outside Nigeria.",
    consequence:
      "But your current website wasn't built for that. There's no clear way for someone who doesn't already know you to understand what you do, trust you, and take the next step.",
  },
  {
    icon: "⏰",
    situation: "You're spending time on things a system should handle.",
    consequence:
      "Manually following up on enquiries. Sending the same information over and over. Chasing payments. Booking meetings by WhatsApp back-and-forth. These are not CEO tasks — they're tasks a well-built system eliminates.",
  },
];

export default function SMEGap() {
  return (
    <section className="bg-[#071A10] border-y border-white/5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            THE REAL PROBLEM
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            The gap between how good your business is
            <br className="hidden md:block" />
            <span className="text-[#45B1A0]"> and how it looks online</span>{" "}
            is costing you.
          </h2>
          <p className="text-[#7AADA4] text-base leading-relaxed">
            None of this is about the quality of your work. It&apos;s about whether
            the right people can see that quality before they ever speak to you.
          </p>
        </div>

        {/* Gap cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {gaps.map((g) => (
            <div
              key={g.situation}
              className="group bg-white/[0.02] border border-white/[0.07] hover:border-[#45B1A0]/30 rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.04]"
            >
              <span className="text-3xl block mb-5">{g.icon}</span>
              <p className="text-white font-semibold text-base mb-3 leading-snug">
                {g.situation}
              </p>
              <p className="text-[#7AADA4] text-sm leading-relaxed">
                {g.consequence}
              </p>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div className="bg-[#45B1A0]/10 border border-[#45B1A0]/20 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <p className="text-white font-semibold text-lg max-w-xl leading-snug">
            These are exactly the problems Marlayer was built to solve for growing businesses.
            Not with jargon — with results you can see and measure.
          </p>
          <a
            href="#what-we-do"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#45B1A0] hover:bg-[#359688] text-[#0D2B1E] font-bold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            Here&apos;s how we fix it →
          </a>
        </div>
      </div>
    </section>
  );
}