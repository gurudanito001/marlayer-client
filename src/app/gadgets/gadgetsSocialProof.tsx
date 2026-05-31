"use client";

// Section 5 — Social Proof
// Goal: Reduce the last remaining risk in the buyer's mind — "but will it work for me?"
// Testimonials from business buyers, case study stat block, and trust logos.

// NOTE TO DEVELOPER: Replace placeholder testimonials with real ones as they come in.
// Priority order: get testimonials from operations/finance managers, not just founders.

const testimonials = [
  {
    quote:
      "We needed 12 laptops configured and delivered for a new team in 5 days. Marlayer had them at our office in 3 days, pre-set up with all our tools. Our onboarding used to take 2 days — it took 2 hours.",
    name: "Adebayo F.",
    title: "Operations Manager",
    company: "Fintech Startup, Lagos",
    initials: "AF",
    color: "#0055FF",
  },
  {
    quote:
      "We used to buy from different vendors and chase warranty claims for weeks. Since we moved all procurement to Marlayer, I haven't had to deal with a single supplier. Everything goes through one channel.",
    name: "Chioma O.",
    title: "Head of Admin",
    company: "Marketing Agency, Abuja",
    initials: "CO",
    color: "#059669",
  },
  {
    quote:
      "The pre-configuration service alone is worth it. Our IT consultant used to bill us for a full day every time we onboarded new staff. That cost is completely gone now.",
    name: "Emeka N.",
    title: "Founder & CEO",
    company: "Logistics Company, Port Harcourt",
    initials: "EN",
    color: "#7C3AED",
  },
];

const stats = [
  { value: "200+", label: "Businesses served across Nigeria" },
  { value: "48h", label: "Average delivery time" },
  { value: "0", label: "Counterfeit devices in our history" },
  { value: "12mo", label: "Minimum warranty on all devices" },
];

export default function GadgetsSocialProof() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <span className="text-[#0055FF] text-xs font-semibold tracking-widest uppercase mb-3 block">
            What Our Clients Say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] leading-tight">
            Businesses that stopped gambling on tech procurement.
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#F7F8FC] border border-[#E4E8F0] rounded-2xl p-7 flex flex-col"
            >
              {/* Quote marks */}
              <div className="text-4xl text-[#CBD2E0] font-serif leading-none mb-4">&ldquo;</div>

              {/* Quote */}
              <p className="text-[#374151] text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#E4E8F0]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#0A0A0A] text-sm font-semibold">{t.name}</p>
                  <p className="text-[#9CA3AF] text-xs">{t.title} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-[#0A0A0A] rounded-2xl p-8 md:p-10">
          <p className="text-[#9CA3AF] text-xs font-semibold tracking-widest uppercase mb-8 text-center">
            By the numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-[#6B7280] text-xs leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case study teaser — shows depth of relationship */}
        <div className="mt-8 border border-[#E4E8F0] rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-[#E8EEFF] flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-[#0055FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs text-[#0055FF] font-semibold uppercase tracking-widest mb-1">Case Study</p>
            <p className="text-[#0A0A0A] font-semibold text-base">
              How a 20-person startup in Lagos equipped their entire office in under 72 hours — fully configured and warranty-backed.
            </p>
          </div>
          <a
            href="/gadgets/case-studies"
            className="flex-shrink-0 inline-flex items-center gap-2 text-[#0055FF] text-sm font-semibold hover:gap-3 transition-all"
          >
            Read the story →
          </a>
        </div>
      </div>
    </section>
  );
}