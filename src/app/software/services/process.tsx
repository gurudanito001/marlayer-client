"use client";

export default function ProcessSection() {
  const steps = [
    {
      title: "Discovery & Strategy",
      desc: "We learn about your business, users, and objectives to define the right technical approach."
    },
    {
      title: "Solution Design",
      desc: "We design the system architecture, user experience, and implementation roadmap before development begins."
    },
    {
      title: "Engineering",
      desc: "Our team builds secure, scalable software using modern technologies and best engineering practices."
    },
    {
      title: "Launch & Support",
      desc: "After rigorous testing, we deploy your solution and provide ongoing support, monitoring, and continuous improvements."
    }
  ];

  return (
    <section className="w-full py-24 bg-[#071A10] border-b border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[#45B1A0] font-mono text-xs uppercase tracking-[0.2em] mb-4">
            // Our Process
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
            How We Deliver
          </h2>

          <p className="text-white/50 text-lg leading-relaxed">
            Every engagement follows a structured delivery process that keeps
            projects aligned with business goals, reduces risk, and ensures
            high-quality outcomes from planning through deployment.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

          {/* Connector Line */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-[#45B1A0]/20 via-[#45B1A0]/60 to-[#45B1A0]/20"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#0A1A18] border border-white/10 rounded-2xl p-8 hover:border-[#45B1A0]/40 hover:bg-[#0D221D] transition-all duration-300 group z-10"
            >
              {/* Step Number */}
              <div className="w-14 h-14 rounded-full bg-[#45B1A0]/10 border border-[#45B1A0]/20 flex items-center justify-center mb-6">
                <span className="text-[#45B1A0] font-bold text-lg">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#45B1A0] transition-colors">
                {step.title}
              </h3>

              <p className="text-white/50 leading-relaxed">
                {step.desc}
              </p>

              {/* Large Background Number */}
              <span className="absolute top-6 right-6 text-7xl font-black text-white/[0.03] group-hover:text-[#45B1A0]/10 transition-colors pointer-events-none">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}