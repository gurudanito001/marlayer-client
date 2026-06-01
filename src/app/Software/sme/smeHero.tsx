"use client";

// SME Hero
// Speaks directly to a founder who knows their business is better than it looks online.
// No jargon. No "digital transformation". Real language, real frustration, real outcome.

export default function SMEHero() {
  return (
    <section className="relative bg-[#0D2B1E] overflow-hidden min-h-[92vh] flex flex-col justify-center">

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#45B1A0 1px, transparent 1px), linear-gradient(90deg, #45B1A0 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#45B1A0]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#45B1A0]/6 blur-3xl pointer-events-none" />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#45B1A0] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36 w-full">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 bg-[#45B1A0]/10 border border-[#45B1A0]/25 text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#45B1A0] animate-pulse" />
              For Growing Businesses
            </span>
          </div>

          {/* Main headline — names the exact frustration */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Your business is serious.
            <br />
            <span className="text-[#45B1A0]">Your online presence should say so.</span>
          </h1>

          {/* Subheadline — speaks to the consequence */}
          <p className="text-[#7AADA4] text-lg md:text-xl leading-relaxed mb-5 max-w-2xl">
            Right now, potential clients are visiting your website, your socials,
            or searching your name online — and leaving without reaching out.
            Not because your business isn't good enough. Because your digital
            presence isn't reflecting how good you actually are.
          </p>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            Marlayer builds the websites, systems, and tools that fix that —
            so the next client who finds you online stays, trusts you, and contacts you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#what-we-do"
              className="group inline-flex items-center justify-center gap-2 bg-[#45B1A0] hover:bg-[#359688] text-[#0D2B1E] font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#45B1A0]/25"
            >
              Show me what you can do
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#45B1A0]/40 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
            >
              Book a free conversation
            </a>
          </div>

          {/* Simple trust signals — no numbers made up, just honest signals */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              "No tech knowledge needed from you",
              "Fixed price — no surprise invoices",
              "You own everything we build",
              "We stay with you after launch",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-white/40">
                <svg className="w-3.5 h-3.5 text-[#45B1A0] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Floating quote card — desktop */}
        <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 max-w-xs">
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
            <div className="text-2xl text-[#45B1A0]/40 font-serif mb-3">&ldquo;</div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              We started getting inbound enquiries from companies we were too afraid to cold-pitch — within 3 months of launching with Marlayer.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.07]">
              <div className="w-8 h-8 rounded-full bg-[#45B1A0]/20 border border-[#45B1A0]/30 flex items-center justify-center text-[#45B1A0] text-xs font-bold">
                TA
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Toluwani A.</p>
                <p className="text-white/30 text-[10px]">CEO · Logistics SME, Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}