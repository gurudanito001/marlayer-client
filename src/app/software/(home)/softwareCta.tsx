"use client";

// Section 9 — Final CTA
// The last thing a visitor sees. Make it count.
// Clear, direct, removes friction. Two entry points: form or call.
// Dark and bold — this section should feel like a decision point.

import { useState } from "react";
import Link from "next/link";

export default function SoftwareCTA() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", type: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    if (form.name && form.email && form.type) setSubmitted(true);
  }

  return (
    <section className="bg-[#0D2B1E] py-20 md:py-28 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#45B1A0]/6 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — the pitch */}
          <div>
            <p className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase mb-4">
              START_PROJECT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
              Let&apos;s build
              <br />
              <span className="text-[#45B1A0]">something real.</span>
            </h2>
            <p className="text-primary-2 leading-relaxed mb-10">
              Whether you&apos;re a growing business ready to compete globally or an
              enterprise with a problem that needs a bespoke solution — we start
              with a free discovery conversation. No pitch. Just clarity.
            </p>

            {/* Guarantees */}
            <div className="space-y-4 mb-10">
              {[
                { icon: "✓", text: "Free, no-obligation discovery session" },
                { icon: "✓", text: "Detailed proposal within 5 business days" },
                { icon: "✓", text: "Fixed-price projects — no scope creep surprises" },
                { icon: "✓", text: "You own 100% of the code from day one" },
              ].map((g) => (
                <div key={g.text} className="flex items-center gap-3 text-sm text-white/60">
                  <span className="text-[#45B1A0] font-bold">{g.icon}</span>
                  {g.text}
                </div>
              ))}
            </div>

          </div>

          {/* Right — contact methods */}
          <div className="flex flex-col border-white/10 rounded-xl p-6">
            

            {/* Direct contact alternatives */}
            <div className="border-b border-white/[0.07] py-8 space-y-4 mt-auto">
              <p className="text-white/30 text-xs font-mono uppercase tracking-widest">
                Prefer direct contact?
              </p>

              <a
                href="https://wa.me/2348140715723"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#45B1A0]/10 border border-[#45B1A0]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#45B1A0]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold group-hover:text-[#45B1A0] transition-colors">
                    Chat on WhatsApp
                  </p>
                  <p className="text-white/30 text-xs font-mono">Usually responds within the hour</p>
                </div>
              </a>

              <a href="mailto:daniel.marlayer@gmail.com" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold group-hover:text-[#45B1A0] transition-colors">
                    daniel.marlayer@gmail.com
                  </p>
                  <p className="text-white/30 text-xs font-mono">Response within 24 hours</p>
                </div>
              </a>
            </div>


            <Link
              href="/contact#bookMeeting"
              className="w-full bg-[#45B1A0] hover:bg-[#359688] text-primary font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group"
            >
              Book a discovery session
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}