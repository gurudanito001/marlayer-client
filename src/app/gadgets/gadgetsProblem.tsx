"use client";

// Section 2 — The Problem
// Goal: Name the exact pains your buyer has lived through.
// When they nod reading this, they're already sold.

const problems = [
  {
    number: "01",
    headline: "You paid for quality. You received disappointment.",
    body: "Devices that looked great in photos arrived underpowered, incompatible, or outright fake. By the time you found out, the supplier was unreachable.",
  },
  {
    number: "02",
    headline: "Your team lost days setting up new equipment.",
    body: "Laptops and phones arrived out of the box with no software, no configuration, no accounts. Your staff spent 2 days doing IT work instead of their actual jobs.",
  },
  {
    number: "03",
    headline: "A device failed. Your support window was a WhatsApp ghost.",
    body: "Something broke 3 months in. The supplier stopped responding. You were left either absorbing the loss or starting the whole search over again.",
  },
  {
    number: "04",
    headline: "Every procurement cycle starts from scratch.",
    body: "No vendor relationship. No device history. No upgrade plan. Every time you need equipment, it's a new risk, a new negotiation, a new gamble.",
  },
];

export default function GadgetsProblem() {
  return (
    <section className="bg-[#F7F8FC] border-y border-[#E4E8F0] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[#0055FF] text-xs font-semibold tracking-widest uppercase mb-3 block">
            The Real Cost of Getting This Wrong
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] leading-tight mb-4">
            If any of this sounds familiar, you&apos;re not alone.
          </h2>
          <p className="text-[#6B7280] text-lg leading-relaxed">
            These aren&apos;t edge cases. They&apos;re the daily reality for businesses
            that haven&apos;t found the right procurement partner yet.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.number}
              className="group bg-white border border-[#E4E8F0] rounded-2xl p-7 hover:border-[#0055FF] hover:shadow-md transition-all duration-300"
            >
              {/* Number badge */}
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#E8EEFF] text-[#0055FF] text-xs font-bold flex items-center justify-center group-hover:bg-[#0055FF] group-hover:text-white transition-colors duration-300">
                  {problem.number}
                </span>
                <div>
                  <h3 className="text-[#0A0A0A] font-semibold text-base mb-2 leading-snug">
                    {problem.headline}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {problem.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge to solution */}
        <div className="mt-14 bg-[#0A0A0A] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-white text-lg md:text-xl font-semibold leading-snug mb-2">
              These are exactly the problems Marlayer was built to eliminate.
            </p>
            <p className="text-[#9CA3AF] text-sm">
              We&apos;ve built our entire process around removing every one of these risks — before they can ever affect your business.
            </p>
          </div>
          <a
            href="#how-it-works"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0055FF] hover:bg-[#0044CC] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            See how we solve this
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}