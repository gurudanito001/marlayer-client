"use client";

const reasons = [
  {
    number: "01",
    title: "Business-First Strategy",
    description:
      "Every technical decision is guided by your business goals, ensuring every feature contributes to measurable growth and long-term value.",
  },
  {
    number: "02",
    title: "Scalable Architecture",
    description:
      "We build software that grows with your business using modern, maintainable technologies and scalable system design principles.",
  },
  {
    number: "03",
    title: "Quality Engineering",
    description:
      "From clean code and rigorous testing to performance optimization, we deliver reliable software built to the highest engineering standards.",
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    description:
      "Our relationship doesn't end at launch. We provide ongoing support, improvements, and technical guidance as your business evolves.",
  },
];

export default function WhyChooseMarlayer() {
  return (
    <section className="w-full bg-[#071A10] py-24 border-b border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28">

        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-[#45B1A0] font-mono text-xs uppercase tracking-[0.2em] mb-4">
            // Why Choose Marlayer
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
            Built for businesses that expect more.
          </h2>

          <p className="text-white/50 text-lg leading-relaxed">
            We combine thoughtful strategy, modern engineering, and transparent
            collaboration to deliver software that is secure, scalable, and
            built to create lasting business value.
          </p>
        </div>

        {/* Reasons */}
        <div className="flex flex-col">

          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group border-t border-white/10 py-10 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-[120px_320px_1fr] gap-8 items-start">

                {/* Number */}
                <span className="text-5xl font-black text-white/10 group-hover:text-[#45B1A0] transition-colors duration-300">
                  {reason.number}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-[#45B1A0] transition-all duration-300 group-hover:translate-x-2">
                  {reason.title}
                </h3>

                {/* Description */}
                <div>
                  <p className="text-white/50 leading-8 text-lg">
                    {reason.description}
                  </p>

                  {/* Animated line */}
                  <div className="mt-6 h-[2px] w-0 bg-[#45B1A0] group-hover:w-full transition-all duration-700"></div>
                </div>

              </div>
            </div>
          ))}

          <div className="border-t border-white/10"></div>

        </div>

      </div>
    </section>
  );
}