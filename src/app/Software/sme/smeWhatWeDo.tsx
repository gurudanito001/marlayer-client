"use client";

// SME What We Do
// 4 specific things Marlayer does for growing businesses.
// Each one: named plainly, sold by outcome, explained simply.
// No tech terms unless unavoidable — and when used, explained immediately.

const services = [
  {
    number: "01",
    title: "A website that works for your business — not just one that exists.",
    plainName: "Website & Brand System",
    outcome: "Clients who find you online understand what you do, trust you, and know exactly how to reach you.",
    whatWeActuallyDo: [
      "We design and build your website from scratch — or rebuild the one you have.",
      "We write the copy (the words) so it speaks directly to the clients you want, not everyone.",
      "We set it up so Google can find it when people search for what you offer.",
      "We connect it to your booking system, payment tools, or contact forms so enquiries come in automatically.",
    ],
    withoutUs: "Potential clients visit, feel uncertain, and leave to contact someone who looks more established.",
    withUs: "Your website does the selling before you ever speak to anyone.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Attract clients from anywhere — not just people who already know you.",
    plainName: "Global Reach System",
    outcome: "People searching for what you offer — in Lagos, London, or anywhere — find you and contact you.",
    whatWeActuallyDo: [
      "We build your online presence to be found by people actively searching for your service.",
      "We set up your Google Business profile and make sure local searches surface your business first.",
      "We create a clear story about what makes your business different — so it resonates with clients you've never met.",
      "We make your website work in multiple markets without needing separate sites.",
    ],
    withoutUs: "Your business relies entirely on word-of-mouth and existing relationships to grow.",
    withUs: "New clients find you. You don't have to find them.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Stop doing manually what a system can handle for you.",
    plainName: "Business Automation",
    outcome: "Your business responds to enquiries, books appointments, sends invoices, and follows up — without you doing it manually every time.",
    whatWeActuallyDo: [
      "We map out the parts of your business that repeat — client onboarding, follow-ups, reminders, confirmations.",
      "We build simple systems that handle these automatically so your team isn't doing admin that software can do.",
      "We connect your tools — your calendar, payment system, WhatsApp, email — so they work together.",
      "We make it easy for clients to pay, book, or enquire without needing to contact you first.",
    ],
    withoutUs: "You and your team spend hours each week on tasks that should take minutes.",
    withUs: "Your business runs smoother. Your team focuses on work that actually moves the needle.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Look like a company that can handle serious clients — because you can.",
    plainName: "Professional Operations Platform",
    outcome: "Your proposals, client portal, invoices, and communications feel polished and trustworthy — even if it's just you and a small team.",
    whatWeActuallyDo: [
      "We build or set up the client-facing tools that make your business feel enterprise-grade.",
      "Proposal tools, onboarding flows, client dashboards, reporting — whatever your business needs.",
      "We make sure every touchpoint a client has with your business reflects the quality of your actual work.",
      "We document everything so your team can use and maintain it without needing us every time.",
    ],
    withoutUs: "Clients sense the gap between your quality of work and the professionalism of your process.",
    withUs: "Your process matches your product. Clients trust you from the first interaction.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function SMEWhatWeDo() {
  return (
    <section id="what-we-do" className="bg-[#0D2B1E] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            WHAT WE DO FOR YOU
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Four things that change
            <br />how your business grows.
          </h2>
          <p className="text-[#7AADA4] text-base leading-relaxed">
            No technical jargon. Just a plain explanation of what we build,
            why it matters, and what it does for your business.
          </p>
        </div>

        {/* Service cards */}
        <div className="space-y-6">
          {services.map((s, index) => (
            <div
              key={s.number}
              className="group bg-white/[0.02] border border-white/[0.07] hover:border-[#45B1A0]/25 rounded-2xl p-8 md:p-10 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">

                {/* Left */}
                <div>
                  {/* Number + plain name */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#45B1A0]/40 text-xs font-mono font-bold tracking-widest">
                      {s.number}
                    </span>
                    <span className="text-[#45B1A0] text-[10px] font-mono font-bold tracking-widest uppercase border border-[#45B1A0]/20 bg-[#45B1A0]/10 px-2.5 py-0.5 rounded-full">
                      {s.plainName}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-xl md:text-2xl leading-snug mb-4">
                    {s.title}
                  </h3>

                  {/* Outcome */}
                  <div className="bg-[#45B1A0]/8 border border-[#45B1A0]/15 rounded-xl px-5 py-4 mb-6">
                    <p className="text-[10px] font-mono font-bold text-[#45B1A0] tracking-widest uppercase mb-1">
                      THE OUTCOME
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed font-medium">
                      {s.outcome}
                    </p>
                  </div>

                  {/* What we actually do */}
                  <p className="text-white/30 text-[10px] font-mono tracking-widest uppercase mb-3">
                    WHAT THIS LOOKS LIKE IN PRACTICE
                  </p>
                  <ul className="space-y-2.5">
                    {s.whatWeActuallyDo.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-[#7AADA4] leading-relaxed">
                        <svg className="w-4 h-4 text-[#45B1A0] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — before/after */}
                <div className="flex flex-col gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#45B1A0]/10 border border-[#45B1A0]/20 flex items-center justify-center text-[#45B1A0] mb-2">
                    {s.icon}
                  </div>

                  {/* Without us */}
                  <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-red-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-white/25 text-[10px] font-mono tracking-widest uppercase">Without this</span>
                    </div>
                    <p className="text-white/35 text-sm leading-relaxed">{s.withoutUs}</p>
                  </div>

                  {/* With us */}
                  <div className="bg-[#45B1A0]/8 border border-[#45B1A0]/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-[#45B1A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#45B1A0] text-[10px] font-mono tracking-widest uppercase">With Marlayer</span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed font-medium">{s.withUs}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}