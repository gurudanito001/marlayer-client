import React from 'react';

export default function VideoSection() {
  return (
    <section className="bg-primary py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Text Content */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight max-w-3xl">
          Boost Your Productivity With Our <br className="hidden md:block" />
          Online Coaching – Watch The Intro!
        </h2>
        
        <p className="text-gray-300 text-sm lg:text-lg font-light leading-relaxed max-w-2xl mb-12">
          Supercharge your productivity with our tailored online coaching program. Whether you're a professional, entrepreneur, or student, our strategies will help you eliminate distractions
        </p>

        {/* Video Thumbnail Container */}
        <div className="relative w-full aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer">
          
          {/* Placeholder Image (Swap with your actual thumbnail) */}
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
            alt="Student focusing on laptop with headphones"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Subtle Dark Overlay to make the play button pop */}
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10"></div>

          {/* Centered Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              className="w-16 h-16 md:w-20 md:h-20 bg-orange hover:bg-orange/85 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110"
              aria-label="Play Intro Video"
            >
              {/* Play Icon (SVG) */}
              <svg 
                className="w-6 h-6 md:w-8 md:h-8 text-white ml-1.5" /* ml-1.5 visually centers the triangle */
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