"use client";

// Section 3 — How It Works
// Goal: Make the process feel simple, safe, and professional.
// Decision-makers need to see clarity before they commit.

const steps = [
  {
    step: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Tell us what your business needs",
    description:
      "Start with a quick call or fill in our quote form. Tell us your team size, the devices you need, your timeline, and your budget. No technical jargon required — we speak business.",
    benefit: "No obligation. Free advisory.",
  },
  {
    step: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "We source, verify, and configure",
    description:
      "We procure only from verified channels. Every device is tested before it leaves our hands. We pre-install your software, configure accounts, and set up devices to your spec.",
    benefit: "Zero counterfeit risk.",
  },
  {
    step: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: "Delivered ready to use",
    description:
      "Devices arrive packaged, documented, and ready to hand to your team immediately. Full handover documentation included — serial numbers, warranty records, and setup notes.",
    benefit: "Your team starts on Day 1.",
  },
  {
    step: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "We stay your partner after the sale",
    description:
      "Warranty claims, repairs, replacements, and upgrade cycles — we manage all of it. One call to Marlayer handles everything. No running around between brands and vendors.",
    benefit: "Ongoing support included.",
  },
];

export default function GadgetsHowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[#0055FF] text-xs font-semibold tracking-widest uppercase mb-3 block">
            The Marlayer Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] leading-tight mb-4">
            From requirement to ready-to-use — in four steps.
          </h2>
          <p className="text-[#6B7280] text-lg leading-relaxed">
            We&apos;ve removed every bottleneck that normally makes tech procurement
            painful for businesses. This is what working with Marlayer looks like.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-[#E4E8F0]" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative flex flex-col">

                {/* Step icon circle */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#E8EEFF] border-2 border-[#CCDAFF] flex items-center justify-center text-[#0055FF] mb-6 group-hover:bg-[#0055FF] transition-colors">
                  {step.icon}
                </div>

                {/* Step number */}
                <span className="text-[#CBD2E0] text-xs font-bold tracking-widest uppercase mb-2">
                  Step {step.step}
                </span>

                {/* Title */}
                <h3 className="text-[#0A0A0A] font-semibold text-base mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed flex-1">
                  {step.description}
                </p>

                {/* Benefit pill */}
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#D1FAE5] text-[#059669] text-xs font-semibold px-3 py-1.5 rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {step.benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 bg-[#F7F8FC] border border-[#E4E8F0] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[#0A0A0A] font-semibold">Ready to simplify your tech procurement?</p>
            <p className="text-[#6B7280] text-sm mt-0.5">Most clients receive their quote within 24 hours.</p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0055FF] hover:bg-[#0044CC] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            Get your free quote →
          </a>
        </div>
      </div>
    </section>
  );
}