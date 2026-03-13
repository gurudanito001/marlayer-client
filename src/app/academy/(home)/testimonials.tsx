import React from 'react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: "Michael Peterson",
    time: "3 Days Ago",
    avatar: "https://i.pravatar.cc/150?img=11",
    text: '"The Productivity Blueprint course gave me the exact tools I needed to overcome procrastination"',
  },
  {
    id: 2,
    name: "Carla Septimus",
    time: "2 Days Ago",
    avatar: "https://i.pravatar.cc/150?img=5",
    text: '"I struggled with constant interruptions and lack of focus. This program helped me build habits that increased"',
  },
  {
    id: 3,
    name: "Jaydon Aminoff",
    time: "23 Hours Ago",
    avatar: "https://i.pravatar.cc/150?img=12",
    text: '"The Science of High Performance course taught me how to structure my time, and now I study smarter"',
  },
  {
    id: 4,
    name: "Kaiya Dias",
    time: "11 Hours Ago",
    avatar: "https://i.pravatar.cc/150?img=43",
    text: '"The Productivity Blueprint course gave me the exact tools I needed to overcome procrastination"',
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-primary py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
            The Real-World Impact Of Our <br className="hidden md:block" />
            Course On Their Success
          </h2>
          <p className="text-gray-300 leading-relaxed">
            By focusing on eliminating distractions, enhancing focus, and building deep work
            habits, we equip professionals, entrepreneurs, and students with the tools
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col h-full shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-700">
                  <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold flex items-center gap-1">
                    {review.name}
                    {/* Verified Badge */}
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </h4>
                  <p className="text-gray-500 text-[11px] mt-0.5">{review.time}</p>
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

              {/* Footer (Google) */}
              <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
                {/* Minimal Google G SVG */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <div className="text-[10px] text-gray-500 leading-tight">
                  Posted on <br />
                  <span className="text-gray-300 font-medium">Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-3 bg-orange rounded-full"></div>
          <div className="w-3 h-3 bg-white/20 rounded-full cursor-pointer hover:bg-white/40 transition-colors"></div>
          <div className="w-3 h-3 bg-white/20 rounded-full cursor-pointer hover:bg-white/40 transition-colors"></div>
          <div className="w-3 h-3 bg-white/20 rounded-full cursor-pointer hover:bg-white/40 transition-colors"></div>
          <div className="w-3 h-3 bg-white/20 rounded-full cursor-pointer hover:bg-white/40 transition-colors"></div>
        </div>

      </div>
    </section>
  );
}