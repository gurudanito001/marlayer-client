"use client";

const domains = [
  {
    id: "01",
    title: "Enterprise Web Applications",
    desc: "We design and develop scalable web applications tailored to business operations, customer experiences, and internal workflows."
  },
  {
    id: "02",
    title: "Administrative Dashboards",
    desc: "Powerful management systems that simplify complex operations through intuitive interfaces, analytics, automation, and real-time reporting."
  },
  {
    id: "03",
    title: "E-commerce & Marketplace Platforms",
    desc: "From online stores to multi-vendor ecosystems, we build secure, high-performance platforms that scale as your business grows."
  },
  {
    id: "04",
    title: "Custom Business Software",
    desc: "Every business is unique. We engineer bespoke software solutions that streamline operations, improve productivity, and support long-term growth."
  }
];

export default function ProjectsExpertise() {
  return (
    <section className="w-full bg-[#0A1A18] py-24 border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28">

        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              What We Build
            </h2>

            <p className="text-white/50 text-lg leading-relaxed">
              Every business has unique challenges. We design and develop
              software solutions that are secure, scalable, and built around
              your goals—helping you operate more efficiently and grow with
              confidence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className="bg-white/5 border border-white/10 p-10 lg:p-12 rounded-3xl hover:bg-white/10 hover:border-[#45B1A0]/30 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-bold text-white group-hover:text-[#45B1A0] transition-colors">
                  {domain.title}
                </h4>

                <span className="text-white/20 font-mono font-bold text-xl group-hover:text-[#45B1A0]/50 transition-colors">
                  {domain.id}
                </span>
              </div>

              <p className="text-white/50 leading-relaxed">
                {domain.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}