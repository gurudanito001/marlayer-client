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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (formData.companyName && formData.email && formData.deviceType) {
      setSubmitted(true);
    }
  }

  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden" id="get-quote">
      {/* Background Ambience Node */}
      <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-[#45B1A0]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column — Value Pitch & Operational Steps */}
          <div className="lg:col-span-6">
            <span className="text-[#45B1A0] text-xs font-bold tracking-widest uppercase mb-3 block">
              Initiate Onboarding
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D2B1E] tracking-tight leading-tight mb-5">
              Specify your hardware targets. We manage the operational layout.
            </h2>
            <p className="text-[#416B5C] font-medium leading-relaxed mb-10">
              Submit your workspace deployment requirements below. A dedicated systems manager will compile and route 
              a tailored, margin-optimized asset quotation to your team within 24 hours.
            </p>

            {/* Validation Progress Roadmap */}
            <div className="space-y-6 mb-12">
              {[
                {
                  step: "1",
                  title: "Requirement Submission",
                  body: "Takes less than 2 minutes. Outline your hardware models, absolute timelines, and initialization rules.",
                },
                {
                  step: "2",
                  title: "Ecosystem Mapping & Diagnostics",
                  body: "We cross-reference distributor networks to build out volume optimization pricing structures and verify asset access paths.",
                },
                {
                  step: "3",
                  title: "Strategic Blueprint Walkthrough",
                  body: "We review the optimized configuration blueprint over a brief sync. Clean execution without vendor hassle.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#F4F9F8] text-[#45B1A0] text-xs font-mono font-black flex items-center justify-center border border-[#E2EFEB]">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-[#0D2B1E] font-bold text-sm tracking-tight">{item.title}</h4>
                    <p className="text-[#416B5C] text-xs leading-relaxed font-medium mt-0.5">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            
          </div>

          {/* Right Column — Enterprise Sourcing Form Panel */}
          <div className="lg:col-span-6 w-full mt-auto">
            
            {/* Direct Multi-Channel Escalation Array */}
            <div className="pt-8 space-y-6 mb-12">
              <p className="text-[#0D2B1E] text-xs font-bold tracking-wider uppercase opacity-85">
                Prefer to interface directly?
              </p>

              {/* WhatsApp Loop */}
              <a
                href="https://wa.me/2348140715723"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group bg-white border border-[#E2EFEB] p-3.5 rounded-2xl hover:border-[#2B7A6E]/30 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E6F7F0] flex items-center justify-center flex-shrink-0 border border-[#C2EDDA]">
                  <svg className="w-5 h-5 text-[#2B7A6E]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0D2B1E] text-sm font-bold group-hover:text-[#2B7A6E] transition-colors">Instant Signal on WhatsApp</p>
                  <p className="text-[#557D71] text-xs font-medium">Real-time engagement · Usually inside 45 minutes</p>
                </div>
              </a>

              {/* Email Loop */}
              <a
                href="mailto:daniel.marlayer@gmail.com"
                className="flex items-center gap-4 group bg-white border border-[#E2EFEB] p-3.5 rounded-2xl hover:border-[#45B1A0]/30 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F4F9F8] flex items-center justify-center flex-shrink-0 border border-[#E2EFEB]">
                  <svg className="w-5 h-5 text-[#45B1A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0D2B1E] text-sm font-bold group-hover:text-[#45B1A0] transition-colors">Direct Desk Email</p>
                  <p className="text-[#557D71] text-xs font-semibold">daniel.marlayer@gmail.com</p>
                </div>
              </a>

              {/* Sync Meeting Loop */}
              <a
                href="/contact#bookMeeting"
                className="flex items-center gap-4 group bg-white border border-[#E2EFEB] p-3.5 rounded-2xl hover:border-[#0D2B1E]/30 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F4F9F8] border border-[#E2EFEB] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#0D2B1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0D2B1E] text-sm font-bold transition-colors">Lock Infrastructure Sync Call</p>
                  <p className="text-[#557D71] text-xs font-medium">30-min architecture brief · Zero operational friction</p>
                </div>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}