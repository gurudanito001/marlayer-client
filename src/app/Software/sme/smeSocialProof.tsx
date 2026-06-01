"use client";

// SME Social Proof
// Testimonials and results from growing businesses — not enterprises.
// The reader should see themselves in these stories.

const testimonials = [
  {
    quote:
      "I used to spend the first 20 minutes of every sales meeting convincing people our business was legit. After Marlayer rebuilt our website and brand, I stopped doing that. Clients show up already sold.",
    name: "Toluwani A.",
    title: "CEO",
    company: "Logistics company, Lagos",
    initials: "TA",
    result: "Inbound enquiries up 3x in 90 days",
  },
  {
    quote:
      "We wanted to start winning clients outside Nigeria. Marlayer built us a system that made us look like a global company — because the work we do is global-level work. The website finally reflects that.",
    name: "Seun B.",
    title: "Founder",
    company: "Creative agency, Lagos",
    initials: "SB",
    result: "First international client within 6 weeks of launch",
  },
  {
    quote:
      "I was spending 3 hours a day on admin — follow-ups, sending proposals, chasing payments. Marlayer automated all of it. I got those 3 hours back and my clients now say our process feels more professional than companies 10x our size.",
    name: "Chidinma O.",
    title: "Managing Director",
    company: "Consulting firm, Abuja",
    initials: "CO",
    result: "15+ hours saved per week across the team",
  },
];

const results = [
  { value: "3–6 wks", label: "Typical SME launch time" },
  { value: "3x", label: "Average increase in inbound enquiries" },
  { value: "100%", label: "Client satisfaction across all projects" },
  { value: "0", label: "Projects abandoned after discovery" },
];

const faqs = [
  {
    q: "Do I need to understand anything technical to work with you?",
    a: "No. We handle everything technical. All we need from you is time to talk about your business and feedback on what we show you. You never have to know what's happening under the hood.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on what your business needs. A focused website and brand system for an SME typically starts from ₦800k. After a free discovery call, we give you a fixed price — no surprises and no hidden costs.",
  },
  {
    q: "What if I already have a website?",
    a: "We can rebuild it, improve it, or start fresh — depending on what makes sense for your business. We'll tell you honestly which approach is worth it after we look at what you have.",
  },
  {
    q: "Who maintains it after you build it?",
    a: "We do, if you want. We offer ongoing maintenance so you never have to worry about something breaking or going outdated. Or we can hand it over fully documented if you prefer.",
  },
];

import { useState } from "react";

export default function SMESocialProof() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-[#071A10] border-y border-white/5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Testimonials header */}
        <div className="max-w-xl mb-12">
          <p className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            REAL RESULTS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            From growing businesses
            <br />that made the move.
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 flex flex-col"
            >
              <div className="text-3xl text-[#45B1A0]/25 font-serif leading-none mb-4">&ldquo;</div>
              <p className="text-[#7AADA4] text-sm leading-relaxed flex-1 mb-5">{t.quote}</p>

              {/* Result pill */}
              <div className="bg-[#45B1A0]/10 border border-[#45B1A0]/20 rounded-lg px-3 py-2 mb-5">
                <p className="text-[#45B1A0] text-xs font-semibold">{t.result}</p>
              </div>

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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {results.map((r) => (
            <div key={r.label} className="bg-[#0D2B1E] border border-white/[0.07] rounded-xl p-5 text-center">
              <p className="text-[#45B1A0] text-3xl font-bold mb-1">{r.value}</p>
              <p className="text-white/30 text-xs font-mono">{r.label}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <p className="text-white/30 text-xs font-mono tracking-widest uppercase text-center mb-6">
            Questions we always get
          </p>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  openFaq === i ? "border-[#45B1A0]/25 bg-[#45B1A0]/5" : "border-white/[0.07] bg-white/[0.02]"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className={`font-semibold text-sm transition-colors ${openFaq === i ? "text-white" : "text-white/60"}`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    openFaq === i ? "border-[#45B1A0] bg-[#45B1A0] text-[#0D2B1E] rotate-45" : "border-white/15 text-white/30"
                  }`}>
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[#7AADA4] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}