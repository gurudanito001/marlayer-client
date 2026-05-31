"use client";

// Section 7 — Final CTA
// Goal: Convert visitors who have scrolled this far. They're interested.
// Remove all remaining friction. Give them multiple ways to reach out.
// The form is the primary action; WhatsApp and meeting are secondary.

import { useState } from "react";

const deviceTypes = [
  "Laptops",
  "Smartphones",
  "Monitors & Peripherals",
  "Networking Equipment",
  "Mixed / Full Office Setup",
  "Other",
];

const timelines = [
  "As soon as possible (within 1 week)",
  "Within 2–4 weeks",
  "1–3 months",
  "Just exploring options",
];

export default function GadgetsCTA() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    deviceType: "",
    quantity: "",
    timeline: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    // Replace with your actual form submission logic
    if (formData.companyName && formData.email && formData.deviceType) {
      setSubmitted(true);
    }
  }

  return (
    <section className="bg-white py-20 md:py-28" id="get-quote">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left — Pitch */}
          <div>
            <span className="text-[#0055FF] text-xs font-semibold tracking-widest uppercase mb-3 block">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] leading-tight mb-5">
              Tell us what your business needs. We&apos;ll handle the rest.
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed mb-8">
              Fill in the form and we&apos;ll come back to you with a tailored quote
              within 24 hours. No obligation, no pressure — just clarity on what
              it would cost to equip your team properly.
            </p>

            {/* What happens next */}
            <div className="space-y-5 mb-10">
              {[
                {
                  step: "1",
                  title: "You submit the form",
                  body: "Takes less than 2 minutes. Just the basics — what you need and when.",
                },
                {
                  step: "2",
                  title: "We review and prepare your quote",
                  body: "A real person reviews your request and prepares a tailored recommendation within 24 hours.",
                },
                {
                  step: "3",
                  title: "We walk you through it",
                  body: "We present the quote on a quick call and answer any questions. No hard sell.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8EEFF] text-[#0055FF] text-xs font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-[#0A0A0A] font-semibold text-sm">{item.title}</p>
                    <p className="text-[#6B7280] text-sm mt-0.5">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Alternative contacts */}
            <div className="border-t border-[#E4E8F0] pt-8 space-y-4">
              <p className="text-[#374151] text-sm font-semibold">Prefer to reach out directly?</p>

              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D1FAE5] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#059669]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0A0A0A] text-sm font-semibold group-hover:text-[#059669] transition-colors">Chat on WhatsApp</p>
                  <p className="text-[#9CA3AF] text-xs">Fastest response · Usually within the hour</p>
                </div>
              </a>

              <a
                href="mailto:daniel.marlayer@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E8EEFF] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#0055FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0A0A0A] text-sm font-semibold group-hover:text-[#0055FF] transition-colors">Send an email</p>
                  <p className="text-[#9CA3AF] text-xs">daniel.marlayer@gmail.com</p>
                </div>
              </a>

              <a
                href="/contact?intent=meeting"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F7F8FC] border border-[#E4E8F0] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#374151]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0A0A0A] text-sm font-semibold group-hover:text-[#374151] transition-colors">Book a meeting</p>
                  <p className="text-[#9CA3AF] text-xs">30-min discovery call · No commitment</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Quote Form */}
          <div>
            {submitted ? (
              <div className="bg-[#F7F8FC] border border-[#E4E8F0] rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-[#D1FAE5] flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[#0A0A0A] font-bold text-xl mb-2">Request received!</h3>
                <p className="text-[#6B7280] text-sm max-w-xs">
                  We&apos;ll review your requirements and get back to you with a tailored quote within 24 hours.
                </p>
              </div>
            ) : (
              <div className="bg-[#F7F8FC] border border-[#E4E8F0] rounded-2xl p-7 md:p-8">
                <h3 className="text-[#0A0A0A] font-bold text-lg mb-1">Request a Quote</h3>
                <p className="text-[#9CA3AF] text-xs mb-6">Free · No obligation · Response within 24 hours</p>

                <div className="space-y-4">
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">Company Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Acme Ltd."
                        className="w-full border border-[#CBD2E0] rounded-xl px-4 py-2.5 text-sm text-[#0A0A0A] bg-white outline-none focus:ring-2 focus:ring-[#0055FF] focus:border-transparent placeholder:text-[#9CA3AF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-[#CBD2E0] rounded-xl px-4 py-2.5 text-sm text-[#0A0A0A] bg-white outline-none focus:ring-2 focus:ring-[#0055FF] focus:border-transparent placeholder:text-[#9CA3AF]"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full border border-[#CBD2E0] rounded-xl px-4 py-2.5 text-sm text-[#0A0A0A] bg-white outline-none focus:ring-2 focus:ring-[#0055FF] focus:border-transparent placeholder:text-[#9CA3AF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className="w-full border border-[#CBD2E0] rounded-xl px-4 py-2.5 text-sm text-[#0A0A0A] bg-white outline-none focus:ring-2 focus:ring-[#0055FF] focus:border-transparent placeholder:text-[#9CA3AF]"
                      />
                    </div>
                  </div>

                  {/* Device type */}
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1.5">What do you need? *</label>
                    <select
                      name="deviceType"
                      value={formData.deviceType}
                      onChange={handleChange}
                      className="w-full border border-[#CBD2E0] rounded-xl px-4 py-2.5 text-sm text-[#0A0A0A] bg-white outline-none focus:ring-2 focus:ring-[#0055FF] focus:border-transparent"
                    >
                      <option value="">Select device type...</option>
                      {deviceTypes.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  {/* Row 3 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">Approximate Quantity</label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 10"
                        min="1"
                        className="w-full border border-[#CBD2E0] rounded-xl px-4 py-2.5 text-sm text-[#0A0A0A] bg-white outline-none focus:ring-2 focus:ring-[#0055FF] focus:border-transparent placeholder:text-[#9CA3AF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full border border-[#CBD2E0] rounded-xl px-4 py-2.5 text-sm text-[#0A0A0A] bg-white outline-none focus:ring-2 focus:ring-[#0055FF] focus:border-transparent"
                      >
                        <option value="">Select timeline...</option>
                        {timelines.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1.5">Anything else we should know?</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Specific models, budget range, pre-configuration requirements..."
                      className="w-full border border-[#CBD2E0] rounded-xl px-4 py-2.5 text-sm text-[#0A0A0A] bg-white outline-none focus:ring-2 focus:ring-[#0055FF] focus:border-transparent placeholder:text-[#9CA3AF] resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#0055FF] hover:bg-[#0044CC] text-white font-semibold text-base py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 group"
                  >
                    Send Quote Request
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <p className="text-center text-[#9CA3AF] text-xs">
                    We respond within 24 hours. Your information is never shared.
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