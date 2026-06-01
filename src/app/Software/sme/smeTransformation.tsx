"use client";

// SME Transformation — Before vs After
// The most conversion-effective section on the page.
// Sells the life change, not the service.
// SME owners should read the "Before" column and feel seen.
// They should read the "After" column and want it.

const transformations = [
  {
    area: "When someone searches for your business",
    before: "They find an outdated website, a Facebook page that hasn't been updated, and nothing that builds confidence.",
    after: "They land on a professional, well-written website that immediately tells them who you are, what you do, and why you're the right choice.",
  },
  {
    area: "When a potential client asks for a referral check",
    before: "Your online presence raises more questions than it answers. Some people decide not to reach out.",
    after: "Your online presence confirms everything the referral said. It builds trust before you've spoken a word.",
  },
  {
    area: "When a new enquiry comes in",
    before: "You get a WhatsApp message, respond when you can, explain your services manually, send a PDF proposal, and hope they follow up.",
    after: "Your website answers their questions, a simple form captures their details, and your system sends them everything they need to take the next step.",
  },
  {
    area: "When you want to win clients outside your current network",
    before: "Growth depends entirely on referrals and people who already know you. New markets feel out of reach.",
    after: "People searching for your service in new markets find you. Your website speaks to them, builds credibility, and invites them to reach out.",
  },
  {
    area: "When you're onboarding a new client",
    before: "You're sending the same emails, same contracts, same documents manually every time. It takes hours you don't have.",
    after: "Your onboarding runs on a system. New clients receive everything automatically, in the right order, at the right time.",
  },
  {
    area: "When a big company considers hiring you",
    before: "Your operational process doesn't match the quality of your work. They take a chance — or choose a competitor who looks more established.",
    after: "Every touchpoint — your website, your proposal, your onboarding — signals that you're a professional outfit that can handle serious work.",
  },
];

export default function SMETransformation() {
  return (
    <section className="bg-[#0D2B1E] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            THE DIFFERENCE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            What changes when you fix your digital presence.
          </h2>
          <p className="text-[#7AADA4] text-base leading-relaxed">
            Not theory. These are the specific situations that play out
            differently after working with Marlayer.
          </p>
        </div>

        {/* Column headers */}
        <div className="grid md:grid-cols-[200px_1fr_1fr] gap-4 mb-3 hidden md:grid">
          <div />
          <div className="flex items-center gap-2 px-5">
            <svg className="w-4 h-4 text-red-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-white/25 text-xs font-mono tracking-widest uppercase">Without this</span>
          </div>
          <div className="flex items-center gap-2 px-5">
            <svg className="w-4 h-4 text-[#45B1A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[#45B1A0] text-xs font-mono tracking-widest uppercase">With Marlayer</span>
          </div>
        </div>

        {/* Transformation rows */}
        <div className="space-y-3">
          {transformations.map((t) => (
            <div
              key={t.area}
              className="grid md:grid-cols-[200px_1fr_1fr] gap-0 md:gap-4 rounded-2xl overflow-hidden border border-white/[0.07] hover:border-[#45B1A0]/20 transition-colors"
            >
              {/* Area label */}
              <div className="bg-white/[0.04] px-5 py-5 flex items-center">
                <p className="text-white/50 text-xs font-semibold leading-snug">{t.area}</p>
              </div>

              {/* Before */}
              <div className="bg-white/[0.02] px-5 py-5 border-t md:border-t-0 md:border-l border-white/[0.06]">
                <p className="text-white/25 text-[10px] font-mono tracking-widest uppercase mb-2 md:hidden">
                  ✗ Without this
                </p>
                <p className="text-[#7AADA4] text-sm leading-relaxed">{t.before}</p>
              </div>

              {/* After */}
              <div className="bg-[#45B1A0]/5 px-5 py-5 border-t md:border-t-0 md:border-l border-[#45B1A0]/10">
                <p className="text-[#45B1A0]/60 text-[10px] font-mono tracking-widest uppercase mb-2 md:hidden">
                  ✓ With Marlayer
                </p>
                <p className="text-white/75 text-sm leading-relaxed">{t.after}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 md:p-10 text-center">
          <h3 className="text-white font-bold text-2xl mb-3">
            Ready for the &ldquo;with Marlayer&rdquo; version of your business?
          </h3>
          <p className="text-[#7AADA4] text-base mb-7 max-w-lg mx-auto">
            Start with a free conversation. No tech knowledge needed — just tell us about your business and what you want it to do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#45B1A0] hover:bg-[#359688] text-[#0D2B1E] font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-[#45B1A0]/20"
            >
              Book a free conversation →
            </a>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all"
            >
              <svg className="w-4 h-4 text-[#45B1A0]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}