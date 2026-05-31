"use client";

// Section 4 — What's Included (Differentiators)
// Goal: Replace vague "Gold Standard Warranty" with concrete, benefit-led features.
// Each feature should resonate with a decision-maker's specific concern.

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Verified Hardware Only",
    tagline: "No fakes. No grey-market risk.",
    description:
      "Every device is sourced through authorised channels and tested before it reaches you. You get full serial number documentation and purchase records.",
    decisionValue: "Protects your investment",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Pre-Configuration Service",
    tagline: "Devices arrive ready to work.",
    description:
      "We set up software, accounts, security policies, and any business-specific configuration before delivery. Your team opens the box and gets straight to work.",
    decisionValue: "Saves days of IT time",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Warranty Management",
    tagline: "We handle claims on your behalf.",
    description:
      "When something goes wrong, you call Marlayer — not the manufacturer. We manage the entire warranty and repair process so your operations stay uninterrupted.",
    decisionValue: "Zero chasing, zero downtime",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Bulk & Volume Procurement",
    tagline: "Scale without price penalties.",
    description:
      "Equipping 5 people or 50? We negotiate on your behalf and pass volume discounts directly to you. One order, one delivery, one invoice.",
    decisionValue: "Better pricing at scale",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Lifecycle & Upgrade Planning",
    tagline: "Know what to replace, and when.",
    description:
      "We track your device inventory and flag when equipment is due for replacement — before it starts failing. No more unexpected costs or emergency purchases.",
    decisionValue: "Budget predictability",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Dedicated Account Support",
    tagline: "A real person who knows your setup.",
    description:
      "You get a dedicated point of contact who understands your business, your devices, and your history. No ticket systems. No robots. Just a person you can call.",
    decisionValue: "Accountability you can feel",
  },
];

export default function GadgetsWhatIsIncluded() {
  return (
    <section className="bg-[#F7F8FC] border-y border-[#E4E8F0] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-[#0055FF] text-xs font-semibold tracking-widest uppercase mb-3 block">
              Everything Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] leading-tight mb-3">
              This is what separates Marlayer from every other gadget supplier.
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed">
              We don&apos;t just sell hardware. We remove every risk and bottleneck
              that comes with it — so you can focus on running your business.
            </p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-[#0055FF] text-[#0055FF] hover:bg-[#0055FF] hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200"
          >
            Talk to us about your needs →
          </a>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white border border-[#E4E8F0] rounded-2xl p-6 hover:border-[#0055FF] hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#E8EEFF] text-[#0055FF] flex items-center justify-center mb-5 group-hover:bg-[#0055FF] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title + tagline */}
              <h3 className="text-[#0A0A0A] font-semibold text-base mb-1">
                {feature.title}
              </h3>
              <p className="text-[#0055FF] text-xs font-semibold mb-3">
                {feature.tagline}
              </p>

              {/* Description */}
              <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Decision value tag */}
              <div className="pt-4 border-t border-[#E4E8F0]">
                <span className="text-xs font-semibold text-[#374151] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
                  For decision-makers: {feature.decisionValue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}