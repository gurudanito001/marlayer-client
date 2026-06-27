"use client";

export default function ProjectsImpact() {
  return (
    <section className="w-full bg-[#071A10] py-24 border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Engineering software <br />that drives business.
            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-8">
              We build more than applications—we create software solutions that
              improve efficiency, support growth, and deliver lasting value.
              Every feature is designed with performance, scalability, security,
              and maintainability at its core.
            </p>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-[#0D2B1E] p-8 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#45B1A0]/20 flex items-center justify-center text-[#45B1A0] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h4 className="text-white font-bold mb-2">
                Performance First
              </h4>

              <p className="text-white/40 text-sm leading-relaxed">
                Fast, responsive applications engineered to deliver an excellent
                user experience while remaining reliable as your business grows.
              </p>
            </div>

            <div className="bg-[#0D2B1E] p-8 rounded-2xl border border-white/10 sm:translate-y-8">
              <div className="w-10 h-10 rounded-full bg-[#45B1A0]/20 flex items-center justify-center text-[#45B1A0] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>

              <h4 className="text-white font-bold mb-2">
                Built to Scale
              </h4>

              <p className="text-white/40 text-sm leading-relaxed">
                Flexible architectures designed to support growing users,
                expanding features, and evolving business requirements without
                compromising performance.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}