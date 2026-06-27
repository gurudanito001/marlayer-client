export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden border-b border-white/[0.05] bg-[#071A10]">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation: scanline 8s linear infinite;
        }
      `}} />

      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#45B1A0] to-transparent animate-scan shadow-[0_0_15px_rgba(69,177,160,0.8)]"></div>
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#45B1A0] to-transparent animate-scan shadow-[0_0_15px_rgba(69,177,160,0.8)]" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#45B1A0] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.15] animate-pulse z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#45B1A0] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.1] z-0"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28">
        <div className="max-w-4xl text-left">
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#45B1A0]/10 border border-[#45B1A0]/30 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#45B1A0] animate-pulse shadow-[0_0_10px_rgba(69,177,160,1)]"></span>
            <span className="text-[#45B1A0] font-mono text-xs font-bold uppercase tracking-[0.2em]">Engineering Services</span>
          </div>
          
          <h1 className="text-5xl md:text-5xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Building Software <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45B1A0] to-[#2A7568]">That Moves Businesses.</span>
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mb-12 font-medium">
            We design and develop custom software that solves real business problems. From enterprise platforms and customer-facing applications to internal tools and cloud infrastructure, we build secure, scalable solutions that grow with your business.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-[#45B1A0] hover:bg-[#348A7D] text-[#0D2B1E] px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(69,177,160,0.2)] hover:shadow-[0_0_30px_rgba(69,177,160,0.4)] flex items-center gap-2 group">
              Explore Our Services
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            
            <div className="hidden sm:flex items-center gap-4 text-white/40 font-mono text-sm">
              <span className="border border-white/10 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm">Web Applications</span>
              <span className="border border-white/10 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm">Mobile Apps</span>
              <span className="border border-white/10 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm">AI Integration</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}