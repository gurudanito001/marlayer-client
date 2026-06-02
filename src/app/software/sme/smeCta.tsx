"use client";

// SME Final CTA
// Warm, direct, low-friction. One primary action.
// The copy here should feel like a person talking, not a company selling.

import { useState } from "react";

export default function SMECTA() {
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", challenge: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    if (form.name && form.email) setSubmitted(true);
  }

  return (
    <section className="bg-[#0D2B1E] py-20 md:py-28 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#45B1A0]/6 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase mb-4">
              LET&apos;S TALK
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
              Your business deserves
              <br />
              <span className="text-[#45B1A0]">a presence that matches it.</span>
            </h2>
            <p className="text-[#7AADA4] text-base leading-relaxed mb-8">
              Fill in the form and we&apos;ll get back to you within 24 hours to set up
              a free conversation. No sales pitch — just a genuine talk about your
              business and what we can do for it.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Free, no-obligation conversation",
                "We respond within 24 hours",
                "No tech knowledge needed from you",
                "Fixed price after discovery — no surprises",
              ].map((g) => (
                <div key={g} className="flex items-center gap-3 text-sm text-white/50">
                  <svg className="w-4 h-4 text-[#45B1A0] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {g}
                </div>
              ))}
            </div>

            <div className="border-t border-white/[0.07] pt-7 space-y-4">
              <p className="text-white/25 text-xs font-mono uppercase tracking-widest">Or reach us directly</p>
              <a
                href="https://wa.me/2348000000000"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#45B1A0]/10 border border-[#45B1A0]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#45B1A0]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold group-hover:text-[#45B1A0] transition-colors">WhatsApp us</p>
                  <p className="text-white/25 text-xs font-mono">Usually responds within the hour</p>
                </div>
              </a>
              <a href="mailto:daniel.marlayer@gmail.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold group-hover:text-[#45B1A0] transition-colors">daniel.marlayer@gmail.com</p>
                  <p className="text-white/25 text-xs font-mono">Response within 24 hours</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="bg-white/[0.03] border border-[#45B1A0]/25 rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[460px]">
                <div className="w-14 h-14 rounded-full bg-[#45B1A0]/10 border border-[#45B1A0]/30 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-[#45B1A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">We&apos;ll be in touch soon.</h3>
                <p className="text-[#7AADA4] text-sm max-w-xs">
                  Expect a message within 24 hours. If it&apos;s urgent, WhatsApp is faster.
                </p>
              </div>
            ) : (
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7">
                <h3 className="text-white font-bold text-base mb-1">Tell us about your business</h3>
                <p className="text-white/25 text-xs font-mono mb-6">Free · No commitment · We respond in 24h</p>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { label: "YOUR NAME *", name: "name", placeholder: "First name" },
                      { label: "BUSINESS NAME", name: "business", placeholder: "Your company" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block text-[10px] font-mono text-white/30 mb-1.5 tracking-widest">{f.label}</label>
                        <input
                          type="text" name={f.name}
                          value={form[f.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={f.placeholder}
                          className="w-full bg-white/[0.04] border border-white/10 focus:border-[#45B1A0]/40 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/15 font-mono"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { label: "EMAIL *", name: "email", placeholder: "you@company.com", type: "email" },
                      { label: "WHATSAPP / PHONE", name: "phone", placeholder: "+234 800 000 0000", type: "tel" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block text-[10px] font-mono text-white/30 mb-1.5 tracking-widest">{f.label}</label>
                        <input
                          type={f.type} name={f.name}
                          value={form[f.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={f.placeholder}
                          className="w-full bg-white/[0.04] border border-white/10 focus:border-[#45B1A0]/40 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/15 font-mono"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-white/30 mb-1.5 tracking-widest">
                      WHAT&apos;S THE BIGGEST THING HOLDING YOUR BUSINESS BACK RIGHT NOW?
                    </label>
                    <textarea
                      name="challenge"
                      value={form.challenge}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Don't overthink it — just tell us what's on your mind..."
                      className="w-full bg-white/[0.04] border border-white/10 focus:border-[#45B1A0]/40 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/15 font-mono resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#45B1A0] hover:bg-[#359688] text-[#0D2B1E] font-bold text-base py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group"
                  >
                    Let&apos;s talk about your business
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <p className="text-center text-white/15 text-xs font-mono">
                    No tech knowledge needed. Just tell us about your business.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}