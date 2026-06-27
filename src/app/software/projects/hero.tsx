"use client";

export default function ProjectsHero() {
  return (
    <section className="relative w-full pt-32 pb-24  lg:pb-32 overflow-hidden border-b border-white/[0.05] bg-[#071A10]">
      {/* Dark Wireframe Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(69,177,160,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(69,177,160,0.1) 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }}
      ></div>
      
      
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#45B1A0]/10 blur-[200px] rounded-full z-0 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28">
        <div className="max-w-4xl text-left mb-16">
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#45B1A0]/10 border border-[#45B1A0]/20 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#45B1A0] animate-pulse"></span>
            <span className="text-[#45B1A0] font-mono text-xs font-bold uppercase tracking-[0.2em]">Our Portfolio</span>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            We don't just write code. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45B1A0] to-[#2A7568]">We architect systems.</span>
          </h1>
          
          <p className="text-white/60 text-md md:text-lg leading-relaxed max-w-2xl font-medium">
            Explore how we transform complex challenges into elegant, scalable software solutions. From robust vendor management ecosystems to secure enterprise platforms, here is the proof of our execution.
          </p>
        </div>

        {/* Floating Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-md">
          {[
            { label: "Products Shipped", value: "40+" },
            { label: "Client Retention", value: "100%" },
            { label: "Avg. Deployment", value: "8 wks" },
            { label: "System Uptime", value: "99.9%" }
          ].map((stat, i) => (
            <div key={i} className="bg-[#05120B]/90 p-8 flex flex-col justify-center items-start hover:bg-white/[0.03] transition-colors relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#45B1A0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-3xl md:text-4xl font-black text-white mb-2 relative z-10">{stat.value}</span>
              <span className="text-xs font-mono text-[#45B1A0] font-bold uppercase tracking-widest relative z-10">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}