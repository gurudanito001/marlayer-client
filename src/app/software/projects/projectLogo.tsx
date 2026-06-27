"use client";

export default function ProjectsLogos() {
  const partners = ["PARDOMART", "IMUSU GLOBAL", "PENIGA", "LooseApp"];

  return (
    <section className="w-full bg-[#05120B] py-6 border-b border-white/[0.05] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <span className="text-white/40 font-mono text-xs uppercase tracking-widest shrink-0">
          Trusted By Industry Leaders
        </span>
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-16 w-full">
          {partners.map((partner, i) => (
            <span key={i} className="text-white/30 font-bold text-xl md:text-xl tracking-tighter uppercase grayscale hover:grayscale-0 hover:text-white transition-all cursor-default">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}