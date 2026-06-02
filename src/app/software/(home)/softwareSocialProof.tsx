"use client";

// Section 6 — Social Proof
// Software buyers are high-consideration. They need evidence, not just claims.
// Case study previews + testimonials + a stats bar.

const caseStudies = [
  {
    tag: "SME · Brand System",
    headline: "How a Lagos-based logistics firm started winning enterprise clients after rebuilding their digital presence.",
    result: "+340% increase in qualified inbound enquiries within 90 days of launch.",
    metrics: [
      { value: "340%", label: "More inbound leads" },
      { value: "6 wks", label: "Design to launch" },
      { value: "0", label: "Manual follow-ups needed" },
    ],
    href: "/software/case-studies/logistics-brand",
  },
  {
    tag: "Enterprise · Custom Platform",
    headline: "How a healthcare organisation replaced 4 disconnected tools with one custom platform built by Marlayer.",
    result: "Reduced admin time by 14 hours per week per team member. Full adoption in 3 weeks.",
    metrics: [
      { value: "14h", label: "Saved per staff/week" },
      { value: "4 → 1", label: "Tools consolidated" },
      { value: "3 wks", label: "Team adoption" },
    ],
    href: "/software/case-studies/healthcare-platform",
  },
];

const testimonials = [
  {
    quote:
      "Marlayer didn't just build our website. They rebuilt how we present our business to the world. We started getting inbound enquiries from companies we were too afraid to cold-pitch.",
    name: "Toluwani A.",
    title: "CEO",
    company: "Logistics SME, Lagos",
    initials: "TA",
  },
  {
    quote:
      "What I appreciated most was that they pushed back when our brief was wrong. They asked questions no other agency asked and proposed a solution we hadn't even considered. The result speaks for itself.",
    name: "Dr. Funke O.",
    title: "Director of Operations",
    company: "Healthcare Organisation, Abuja",
    initials: "FO",
  },
  {
    quote:
      "Six months after launch, they're still our technical partner. When we needed a new feature, we didn't have to start from scratch or brief a new team. They knew our system and we shipped in 2 weeks.",
    name: "Chukwuemeka N.",
    title: "Founder",
    company: "B2B SaaS, Lagos",
    initials: "CN",
  },
];

const stats = [
  { value: "40+", label: "Products shipped" },
  { value: "100%", label: "On-time delivery rate" },
  { value: "6wk", label: "Avg. SME launch time" },
  { value: "0", label: "Projects abandoned" },
];

export default function SoftwareSocialProof() {
  return (
    <section className="bg-[#071A10] border-y border-white/5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            PROOF
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Results from businesses that chose
            <br />to build on Marlayer.
          </h2>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 text-center">
              <p className="text-[#45B1A0] text-3xl font-bold mb-1">{s.value}</p>
              <p className="text-white/40 text-xs font-mono">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {caseStudies.map((cs) => (
            <a
              key={cs.tag}
              href={cs.href}
              className="group bg-white/[0.03] border border-white/[0.07] hover:border-[#45B1A0]/40 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.05] block"
            >
              <span className="text-[#45B1A0] text-[10px] font-mono font-bold tracking-widest uppercase border border-[#45B1A0]/20 bg-[#45B1A0]/10 px-3 py-1 rounded-full inline-block mb-5">
                {cs.tag}
              </span>
              <h3 className="text-white font-semibold text-base leading-snug mb-4">
                {cs.headline}
              </h3>
              <p className="text-[#45B1A0] text-sm font-semibold mb-6 leading-relaxed">
                {cs.result}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6 pt-4 border-t border-white/[0.07]">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-white font-bold text-xl">{m.value}</p>
                    <p className="text-white/30 text-[10px] font-mono">{m.label}</p>
                  </div>
                ))}
              </div>

              <span className="text-[#45B1A0] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Read full case study →
              </span>
            </a>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-7 flex flex-col">
              <div className="text-3xl text-[#45B1A0]/30 font-serif mb-4 leading-none">&ldquo;</div>
              <p className="text-[#7AADA4] text-sm leading-relaxed flex-1 mb-5">{t.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.07]">
                <div className="w-9 h-9 rounded-full bg-[#45B1A0]/20 border border-[#45B1A0]/30 flex items-center justify-center text-[#45B1A0] text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">{t.name}</p>
                  <p className="text-white/30 text-[10px] font-mono">{t.title} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}