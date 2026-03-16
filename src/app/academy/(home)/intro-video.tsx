import React from 'react';
import Image from 'next/image';

const iconTypes = ['dna', 'atom', 'book', 'geo', 'bag'] as const;
type IconType = typeof iconTypes[number];

const BackgroundIcons = () => {
  // SVG paths stored as variables to keep the array clean
  const paths: Record<IconType, React.ReactNode> = {
    dna: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5c0-2.5 3-4 6-4s6 1.5 6 4M4.5 4.5c0 2.5 3 4 6 4s6-1.5 6-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 6v12M17 6v12M12 8v8M9.5 7v10M14.5 7v10" />
      </>
    ),
    atom: (
      <>
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(45 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(-45 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </>
    ),
    book: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
    geo: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </>
    ),
    bag: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    )
  };

  // 35 scattered items to completely fill the background
  const scatterMap: (
    | { type: IconType; className: string }
    | { type: 'text'; content: string; className: string }
  )[] = [
    // Row 1 (Top)
    { type: 'text', content: 'a × b = c', className: 'top-[4%] left-[5%] -rotate-12 text-2xl hidden md:block' },
    { type: 'dna', className: 'top-[8%] left-[20%] rotate-45 w-10 h-10' },
    { type: 'book', className: 'top-[5%] left-[38%] rotate-12 w-12 h-12' },
    { type: 'text', content: '??', className: 'top-[12%] left-[55%] -rotate-6 text-3xl' },
    { type: 'atom', className: 'top-[6%] left-[72%] rotate-90 w-14 h-14 hidden sm:block' },
    { type: 'text', content: 'x² + y² = z²', className: 'top-[8%] left-[88%] rotate-6 text-xl' },
    
    // Row 2
    { type: 'bag', className: 'top-[22%] left-[8%] rotate-12 w-10 h-10' },
    { type: 'text', content: '3 + 5 = 8', className: 'top-[26%] left-[25%] -rotate-12 text-xl hidden sm:block' },
    { type: 'geo', className: 'top-[20%] left-[45%] -rotate-6 w-14 h-14' },
    { type: 'dna', className: 'top-[28%] left-[65%] -rotate-45 w-12 h-12' },
    { type: 'book', className: 'top-[22%] left-[82%] rotate-12 w-10 h-10' },
    { type: 'bag', className: 'top-[25%] left-[95%] -rotate-12 w-12 h-12 hidden md:block' },

    // Row 3
    { type: 'atom', className: 'top-[42%] left-[4%] -rotate-45 w-16 h-16 hidden sm:block' },
    { type: 'book', className: 'top-[46%] left-[18%] -rotate-12 w-10 h-10' },
    { type: 'text', content: 'a × b = c', className: 'top-[40%] left-[35%] rotate-6 text-xl' },
    { type: 'bag', className: 'top-[48%] left-[52%] rotate-12 w-12 h-12 hidden md:block' },
    { type: 'geo', className: 'top-[42%] left-[70%] -rotate-12 w-10 h-10' },
    { type: 'text', content: '3 + 5 = 8', className: 'top-[46%] left-[88%] rotate-12 text-2xl' },

    // Row 4
    { type: 'text', content: '??', className: 'top-[65%] left-[10%] rotate-12 text-2xl hidden sm:block' },
    { type: 'geo', className: 'top-[68%] left-[28%] -rotate-12 w-12 h-12' },
    { type: 'dna', className: 'top-[62%] left-[48%] rotate-90 w-10 h-10' },
    { type: 'text', content: 'x² + y² = z²', className: 'top-[68%] left-[65%] -rotate-6 text-lg hidden md:block' },
    { type: 'book', className: 'top-[60%] left-[82%] -rotate-12 w-14 h-14' },
    { type: 'atom', className: 'top-[70%] left-[94%] rotate-45 w-12 h-12' },

    // Row 5 (Bottom)
    { type: 'book', className: 'top-[85%] left-[6%] rotate-12 w-12 h-12' },
    { type: 'dna', className: 'top-[90%] left-[22%] -rotate-45 w-14 h-14 hidden sm:block' },
    { type: 'text', content: 'a × b = c', className: 'top-[82%] left-[38%] rotate-12 text-xl' },
    { type: 'atom', className: 'top-[88%] left-[55%] -rotate-12 w-10 h-10' },
    { type: 'bag', className: 'top-[84%] left-[75%] -rotate-6 w-12 h-12 hidden md:block' },
    { type: 'text', content: '??', className: 'top-[92%] left-[88%] rotate-12 text-2xl' },

    // Extra scattered fillers for dense areas
    { type: 'geo', className: 'top-[15%] left-[80%] rotate-45 w-8 h-8 hidden lg:block' },
    { type: 'atom', className: 'top-[35%] left-[12%] rotate-12 w-8 h-8 opacity-50' },
    { type: 'book', className: 'top-[55%] left-[92%] -rotate-45 w-8 h-8 hidden md:block' },
    { type: 'dna', className: 'top-[78%] left-[45%] -rotate-12 w-8 h-8 opacity-50' },
    { type: 'text', content: '3 + 5 = 8', className: 'top-[35%] left-[78%] rotate-6 text-lg hidden lg:block' },
  ];

  return (
    // Lowered opacity slightly to 0.05 so the 5x concentration doesn't overpower the foreground text
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.05]">
      {scatterMap.map((item, index) => {
        if (item.type === 'text') {
          return (
            <div key={index} className={`absolute text-white font-mono font-medium ${item.className}`}>
              {item.content}
            </div>
          );
        }
        return (
          <svg
            key={index}
            className={`absolute text-white ${item.className}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            viewBox="0 0 24 24"
          >
            {paths[item.type]}
          </svg>
        );
      })}
    </div>
  );
};

export default function VideoSection() {
  return (
    <section className="bg-primary relative py-20 px-6 font-sans overflow-hidden min-h-[800px] flex items-center justify-center">
      
      {/* 5x Concentrated Scattered Icons Overlay */}
      <BackgroundIcons />

      {/* Ambient Teal Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#45B1A0]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-5xl w-full mx-auto text-center flex flex-col items-center">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight max-w-3xl">
          Build, Launch, and Grow With Us <br className="hidden md:block" />
          – Watch The Intro!
        </h2>

        <p className="text-gray-300 text-sm lg:text-lg font-light leading-relaxed max-w-2xl mb-12">
          Get a sneak peek into the Marlayer experience. Whether you are an aspiring entrepreneur or looking to land your dream tech job, see how we help you turn coding skills into shipped products.
        </p>

        <div className="relative w-full aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer border border-white/10">
          
          <Image
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
            alt="Student focusing on laptop with headphones"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            width={1200}
            height={675}
          />
          
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              className="w-16 h-16 md:w-20 md:h-20 bg-orange hover:bg-orange/85 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-[0_0_30px_rgba(255,165,0,0.3)]"
              aria-label="Play Intro Video"
            >
              <svg 
                className="w-6 h-6 md:w-8 md:h-8 text-white ml-1.5"
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}