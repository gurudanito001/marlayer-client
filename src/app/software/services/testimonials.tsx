"use client";
import { useState } from "react";

const testimonials = [
  { name: "Sarah Jenkins", co: "TechNova CEO", text: "The team exceeded our expectations with a sleek, modern design that truly represents our brand. Conversions skyrocketed!", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
  { name: "Michael Anderson", co: "Luxe Beauty", text: "From initial concept to final execution, they nailed every aspect of our UI/UX. The branding feels incredibly premium.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" },
  { name: "Mark Thompson", co: "FinCore Solutions", text: "Our platform was outdated, but they transformed it into a cutting-edge experience. Customer engagement has doubled!", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" },
  { name: "Elena Rodriguez", co: "Vantage Global", text: "Professional, responsive, and incredibly talented. They delivered our complex mobile app weeks ahead of schedule.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" },
  { name: "David Chen", co: "CloudScale", text: "The software architecture they designed for us is robust, secure, and handles our heavy traffic spikes effortlessly.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
  { name: "Jessica Blair", co: "Spark Creative", text: "Their branding strategy gave us a unique identity in a crowded market. The logo and guidelines are absolutely flawless.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop" }
];

export default function ServicesTestimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <section className="w-full bg-[#071A10] py-24 border-t border-white/[0.05] overflow-hidden relative">
      
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #45B1A0 1px, transparent 1px), linear-gradient(to bottom, #45B1A0 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28 relative z-10">
        
        {/* Call To Action Banner */}
        <div className="w-full rounded-3xl overflow-hidden bg-[#0D2B1E] border border-white/10 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl mb-32 relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#45B1A0]/10 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <p className="text-[#45B1A0] font-mono text-xs mb-4 uppercase tracking-[0.2em]">// Start a project</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white tracking-tight">
              Let&apos;s build something <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45B1A0] to-[#2A7568]">scaleable</span> together.
            </h2>
          </div>
          <div className="relative z-10 shrink-0">
            <button className="bg-[#45B1A0] hover:bg-[#348A7D] transition-colors text-[#0D2B1E] px-8 py-4 rounded-xl flex items-center gap-3 font-bold shadow-lg shadow-[#45B1A0]/10">
              Schedule a Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <p className="text-[#45B1A0] font-mono text-xs mb-2 uppercase tracking-[0.2em]">// Proof</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What Our Clients Say</h2>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setTestimonialIndex(0)}
              className={`w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center transition-all ${testimonialIndex === 0 ? 'bg-white/5 opacity-50 cursor-not-allowed text-white/50' : 'bg-white/10 hover:bg-white/20 text-white'}`}
              disabled={testimonialIndex === 0}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => setTestimonialIndex(1)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${testimonialIndex === 1 ? 'bg-[#45B1A0]/50 opacity-50 cursor-not-allowed text-[#0D2B1E]/50' : 'bg-[#45B1A0] hover:bg-[#348A7D] text-[#0D2B1E]'}`}
              disabled={testimonialIndex === 1}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="w-full relative min-h-[300px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" key={testimonialIndex}>
            {testimonials.slice(testimonialIndex * 3, testimonialIndex * 3 + 3).map((client, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/[0.07] hover:border-[#45B1A0]/30 transition-all duration-300">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative border border-[#45B1A0]/30 bg-[#071A10] flex-shrink-0">
                      <img src={client.img} alt={client.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white">{client.name}</h4>
                      <p className="text-[#45B1A0] font-mono text-[10px] uppercase tracking-widest">{client.co}</p>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed text-sm mb-8">&quot;{client.text}&quot;</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#45B1A0] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}