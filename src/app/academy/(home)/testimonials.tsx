import React from 'react';
import Image from 'next/image';

// --- 1. Background Icons (Success & Review Theme) ---
const BackgroundIcons = () => {
  const paths = {
    // Star (Ratings/Excellence)
    star: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    ),
    // Chat Bubble (Reviews/Communication)
    chat: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    ),
    // Target (Goals/Productivity)
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
      </>
    ),
    // Paper Airplane (Progress/Sending)
    plane: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    ),
    // Scroll/Diploma (Success/Completion)
    scroll: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </>
    )
  };

  const scatterMap = [
    // Row 1 (Top)
    { type: 'star', className: 'top-[5%] left-[8%] rotate-12 w-10 h-10' },
    { type: 'chat', className: 'top-[8%] left-[28%] -rotate-12 w-12 h-12 hidden sm:block' },
    { type: 'target', className: 'top-[4%] left-[50%] rotate-6 w-14 h-14' },
    { type: 'plane', className: 'top-[6%] left-[75%] -rotate-45 w-10 h-10' },
    { type: 'scroll', className: 'top-[10%] left-[90%] rotate-12 w-12 h-12 hidden md:block' },
    
    // Row 2
    { type: 'plane', className: 'top-[20%] left-[15%] -rotate-12 w-14 h-14 hidden sm:block' },
    { type: 'star', className: 'top-[25%] left-[38%] rotate-45 w-8 h-8' },
    { type: 'scroll', className: 'top-[18%] left-[62%] -rotate-6 w-10 h-10 hidden md:block' },
    { type: 'chat', className: 'top-[22%] left-[85%] rotate-12 w-14 h-14' },

    // Row 3
    { type: 'scroll', className: 'top-[40%] left-[5%] -rotate-12 w-12 h-12' },
    { type: 'target', className: 'top-[35%] left-[25%] rotate-12 w-10 h-10 hidden sm:block' },
    { type: 'star', className: 'top-[38%] left-[45%] -rotate-12 w-10 h-10' },
    { type: 'plane', className: 'top-[42%] left-[68%] -rotate-45 w-12 h-12 hidden md:block' },
    { type: 'chat', className: 'top-[35%] left-[92%] rotate-12 w-10 h-10' },

    // Row 4
    { type: 'chat', className: 'top-[60%] left-[12%] rotate-12 w-10 h-10 hidden md:block' },
    { type: 'plane', className: 'top-[55%] left-[32%] -rotate-12 w-12 h-12' },
    { type: 'scroll', className: 'top-[62%] left-[52%] rotate-6 w-14 h-14 hidden lg:block' },
    { type: 'target', className: 'top-[58%] left-[75%] -rotate-12 w-10 h-10' },
    { type: 'star', className: 'top-[65%] left-[95%] rotate-45 w-8 h-8 hidden sm:block' },

    // Row 5 
    { type: 'target', className: 'top-[78%] left-[8%] -rotate-12 w-14 h-14' },
    { type: 'star', className: 'top-[82%] left-[28%] rotate-12 w-10 h-10 hidden sm:block' },
    { type: 'chat', className: 'top-[75%] left-[48%] -rotate-6 w-12 h-12' },
    { type: 'scroll', className: 'top-[85%] left-[68%] rotate-12 w-10 h-10 hidden md:block' },
    { type: 'plane', className: 'top-[78%] left-[88%] -rotate-45 w-12 h-12' },

    // Extra scattered fillers for dense areas
    { type: 'star', className: 'top-[15%] left-[48%] rotate-45 w-6 h-6 opacity-50 hidden xl:block' },
    { type: 'chat', className: 'top-[50%] left-[85%] -rotate-12 w-8 h-8 opacity-50 hidden xl:block' },
    { type: 'target', className: 'top-[88%] left-[18%] rotate-12 w-8 h-8 opacity-50 hidden lg:block' },
    { type: 'scroll', className: 'top-[28%] left-[12%] -rotate-6 w-8 h-8 opacity-50 hidden lg:block' },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.05]">
      {scatterMap.map((item, index) => (
        <svg
          key={index}
          className={`absolute text-white ${item.className}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          {paths[item.type as keyof typeof paths]}
        </svg>
      ))}
    </div>
  );
};

// --- Helper Functions ---
const getInitials = (name: string) => {
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

const getRelativeTime = (year?: number) => {
  if (!year) return "Recently";
  const currentYear = new Date().getFullYear();
  const diff = currentYear - year;
  if (diff <= 0) return "This year";
  if (diff === 1) return "1 year ago";
  return `${diff} years ago`;
};

// --- 2. Main Reviews Component ---
const reviews = [
  {
    id: 1,
    name: "Damilare Adebanjo",
    year: 2022,
    avatar: "/images/tech-academy/damilare.png",
    text: "Damilare took a course on Frontend development in 2018. He has since transformed his career and has led several successful projects at top tech companies as a product manager. He currently studies at Western Illinois University, Michigan.",
    location: "United States",
    flag: "🇺🇸"
  },
  {
    id: 2,
    name: "Delight Johnson",
    year: 2024,
    avatar: "/images/tech-academy/sis-johnson.png",
    text: "Delight took a brief course on Computer basics in 2024. She was able to apply the knowledge she gained in her job to execute tasks on a computer and qualify to handle more computer-based tasks.",
    location: "United Kingdom",
    flag: "🇬🇧"
  },
  {
    id: 3,
    name: "Salome Ikpegbu",
    year: 2024,
    avatar: null,
    text: "Salome took two courses on Marlayer from 2024 - 2025: Frontend Development Parts 1 and 2. She was retained by Marlayer as a frontend developer and has been working with us for close to a year. She has also been involved in several external projects handled by the company.",
    location: "Nigeria",
    flag: "🇳🇬"
  },
  {
    id: 4,
    name: "Joy Okolo",
    year: 2025,
    avatar: null,
    text: "Joy is an Alumni of Western Illinois University (WIU). She took a backend development course with Marlayer in 2025. This course was organized by the WIU and Marlayer worked with WIU to curate the Backend Development course.",
    location: "United States",
    flag: "🇺🇸"
  },
  {
    id: 5,
    name: "Kolawole Israel",
    year: 2025,
    avatar: null,
    text: "Kolawole took a Mobile App Development course on Marlayer from 2025 - 2026. He is a student of Marlayer Academy at the time of this posting.",
    location: "Nigeria",
    flag: "🇳🇬"
  },
  {
    id: 6,
    name: "David Akogwu",
    year: 2025,
    avatar: null,
    text: "David Akogwu is another beneficiary of the Backend Development course curated by Marlayer in conjunction with Western Illinois University. He has been able to accelerate his career with the knowledge he gained from the course.",
    location: "Nigeria",
    flag: "🇳🇬"
  },
  {
    id: 7,
    name: "Armour",
    year: 2025,
    avatar: null,
    text: "Armour is also a beneficiary of the Backend Development course curated by Marlayer in conjunction with Western Illinois University.",
    location: "Nigeria",
    flag: "🇳🇬"
  },
  {
    id: 8,
    name: "David Nwokocha",
    year: 2024,
    avatar: "/images/tech-academy/david.jpeg",
    text: "David Nwokocha was a student of a bootcamp organized by Marlayer back in 2024 for teens in secondary schools. He was an exceptional student and has been able to build fun and interesting projects after he left the bootcamp.",
    location: "Nigeria",
    flag: "🇳🇬"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-primary relative py-24 font-sans overflow-hidden">
      {/* Continuous scroll animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}} />
      
      {/* Scattered Review Icons Overlay */}
      <BackgroundIcons />

      {/* Ambient Orange & Teal Glows */}
      <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-orange/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute -right-40 bottom-20 w-[500px] h-[500px] bg-[#45B1A0]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center max-w-[1900px] mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mb-16 px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
            The Real-World Impact Of Our <br className="hidden md:block" />
            Courses On Their Success
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We could tell you how great our courses are, but we think our students say it best. Here are some of their experiences and the impact they've had on their careers.
          </p>
        </div>

        {/* Reviews Continuous Slider */}
        <div className="w-full max-w-[1600px] overflow-hidden relative group py-4">
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused] gap-6 px-6">
            {[...reviews, ...reviews].map((review, index) => (
              <div 
                key={`${review.id}-${index}`} 
                className="w-[85vw] sm:w-[320px] lg:w-[300px] xl:w-[340px] bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col h-auto min-h-[300px] shadow-lg hover:-translate-y-1 transition-transform duration-300 backdrop-blur-sm shrink-0 whitespace-normal"
              >
                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                    {review.avatar ? (
                      <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                    ) : (
                      <span className="text-white font-bold text-sm tracking-wider">
                        {getInitials(review.name)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold flex items-center gap-1">
                      {review.name}
                      {/* Verified Badge */}
                      <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </h4>
                    <p className="text-gray-500 text-[11px] mt-0.5">{getRelativeTime(review.year)}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#ff7a00]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {review.text}
                </p>

                {/* Footer (Location) */}
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
                  <span className="text-xl leading-none">{review.flag}</span>
                  <span className="text-sm text-gray-400 font-medium">
                    {review.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}