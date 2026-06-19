"use client";

// Section 8 — FAQ
// Addresses the real objections in a buyer's mind before they reach out.
// Also excellent for SEO and AI search — direct Q&A format gets indexed well.

import { useState } from "react";

const faqs = [
  {
    q: "How much does a software project with Marlayer cost?",
    a: "Project costs vary significantly based on scope, complexity, and timeline. A focused SME brand system typically starts from ₦800k–₦2M. A custom enterprise platform with integrations and data systems typically starts from ₦3M+. We give you a detailed proposal after a free discovery session — there are no surprise costs.",
  },
  {
    q: "How long does it take to build and launch?",
    a: "A focused brand website or web system for an SME typically launches in 4–8 weeks. A custom enterprise application is typically 3–6 months depending on complexity. We'll give you a realistic timeline upfront — we'd rather set honest expectations than overpromise.",
  },
  {
    q: "Do we own the code and intellectual property after the project?",
    a: "Yes. 100%. All code, designs, and assets created for your project belong to you. We transfer everything at handover and document it clearly. You are never dependent on Marlayer to access or run your own software.",
  },
  {
    q: "What happens if we need changes or new features after launch?",
    a: "We offer post-launch retainer partnerships for exactly this. You get a dedicated capacity allocation every month for maintenance, improvements, and new features — with no need to re-brief a new team. We already know your system.",
  },
  {
    q: "Can you work with our existing technology or improve something we've already built?",
    a: "Yes. We frequently inherit existing codebases, audit them, and extend or rebuild them as needed. We'll give you an honest technical assessment before committing to anything.",
  },
  {
    q: "How do we get started?",
    a: "Book a free discovery call. No pitch, no pressure — just a conversation about your business and what you're trying to solve. If there's a fit, we'll prepare a detailed proposal within 5 business days.",
  },
  {
    q: "Do you work with businesses outside Nigeria?",
    a: "Yes. We work remotely with clients across Africa and internationally. Our process is designed for distributed collaboration — weekly demos, staging environments, and direct communication tools keep everyone aligned regardless of location.",
  },
  {
    q: "What makes Marlayer different from a freelancer or a larger agency?",
    a: "A freelancer gives you one person with limited bandwidth and accountability. A large agency gives you a salesperson, then hands you to a junior team. Marlayer is a focused team of senior engineers and designers who own your project end-to-end — with the accountability of a partner, not a vendor.",
  },
];

export default function SoftwareFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#071A10] border-y border-white/5 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Questions you&apos;re probably thinking.
          </h2>
          <p className="text-primary-2 mt-3">
            Honest answers. No corporate fluff.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === i
                  ? "border-[#45B1A0]/30 bg-[#45B1A0]/5"
                  : "border-white/[0.07] bg-white/[0.02] hover:border-white/15"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-semibold text-sm md:text-base transition-colors !opacity-100 ${openIndex === i ? "!text-[#45B1A0]" : "!text-white"}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  openIndex === i
                    ? "border-[#45B1A0] bg-[#45B1A0] text-[#0D2B1E] rotate-45"
                    : "border-white/20 text-white/40"
                }`}>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-[#7AADA4] text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center">
          <p className="text-white/30 text-sm mb-3">Still have a specific question?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[#45B1A0] font-semibold text-sm hover:underline"
          >
            Send us a message — we respond within 24 hours →
          </a>
        </div>
      </div>
    </section>
  );
}