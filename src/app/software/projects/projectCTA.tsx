"use client";

import Link from "next/link";

export default function ProjectsCTA() {
  return (
    <section className="w-full bg-[#071A10] py-32 px-6 border-t border-white/[0.05] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(to right, #45B1A0 1px, transparent 1px), linear-gradient(to bottom, #45B1A0 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#45B1A0]/10 blur-[150px] z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl backdrop-blur-md">
        <p className="text-[#45B1A0] font-mono text-xs mb-4 uppercase tracking-[0.2em] font-bold">
          // Technical Insights
        </p>
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-white tracking-tight">
          Ready to Build Your Next Project?
        </h3>
        <p className="text-white/50 mb-10 text-lg max-w-3xl mx-auto">
          Whether you're launching a new product, modernizing an existing platform, or scaling your business, we're here to help turn your ideas into reliable, high-perfomance software. Let's discuss your project.
        </p>

        <form className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Engineering email address..."
            className="w-full bg-[#05120B] border border-white/20 text-white placeholder-white/30 px-6 py-4 rounded-xl focus:outline-none focus:border-[#45B1A0] focus:ring-1 focus:ring-[#45B1A0] transition-all font-mono text-sm"
          />
          <Link
  href="/contact"
  className="inline-flex items-center justify-center whitespace-nowrap bg-[#45B1A0] hover:bg-[#359688] text-[#0D2B1E] font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#45B1A0]/20"
>
  Let's Talk
</Link>
        </form>
      </div>
    </section>
  );
}