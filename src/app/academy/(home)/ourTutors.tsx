"use client";

import React, { useState } from "react";
import Image from "next/image";

// --- 1. Background Icons (Mentorship & Teaching Theme) ---
const BackgroundIcons = () => {
  const paths = {
    // Compass (Guidance/Direction)
    compass: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
      </>
    ),
    // Key (Unlocking Potential)
    key: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    ),
    // Easel/Whiteboard (Teaching/Presenting)
    easel: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 6l2 12M20 6l-2 12M9 18l-1 4M15 18l1 4M5 6V4a1 1 0 011-1h12a1 1 0 011 1v2M8 10h8M8 14h8" />
    ),
    // Quote Marks (Wisdom/Quotes)
    quote: (
      <path fill="currentColor" stroke="none" d="M11.3 7.39A5.85 5.85 0 0 0 8.5 6 5.84 5.84 0 0 0 2.66 11.84a5.85 5.85 0 0 0 2.8 5.06v.1h.04c.3.17.61.32.93.44A10.74 10.74 0 0 1 2 22h2a8.77 8.77 0 0 0 6.64-3.08A8.8 8.8 0 0 0 13.3 12a5.85 5.85 0 0 0-2-4.61zm10.6 0A5.85 5.85 0 0 0 19.1 6a5.84 5.84 0 0 0-5.84 5.84 5.85 5.85 0 0 0 2.8 5.06v.1h.04c.3.17.61.32.93.44A10.74 10.74 0 0 1 12.6 22h2a8.77 8.77 0 0 0 6.64-3.08A8.8 8.8 0 0 0 23.9 12a5.85 5.85 0 0 0-2-4.61z" />
    ),
    // Award Ribbon (Expertise/Qualification)
    award: (
      <>
        <circle cx="12" cy="9" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 12.5L8 20l4-2 4 2-2.5-7.5" />
      </>
    )
  };

  const scatterMap = [
    // Row 1 (Top)
    { type: 'compass', className: 'top-[4%] left-[6%] -rotate-12 w-12 h-12' },
    { type: 'quote', className: 'top-[8%] left-[24%] rotate-12 w-8 h-8 hidden sm:block' },
    { type: 'easel', className: 'top-[5%] left-[45%] -rotate-6 w-10 h-10' },
    { type: 'key', className: 'top-[7%] left-[68%] rotate-45 w-12 h-12' },
    { type: 'award', className: 'top-[10%] left-[88%] -rotate-12 w-14 h-14 hidden md:block' },
    
    // Row 2
    { type: 'key', className: 'top-[18%] left-[15%] -rotate-45 w-10 h-10 hidden sm:block' },
    { type: 'award', className: 'top-[22%] left-[35%] rotate-12 w-12 h-12' },
    { type: 'compass', className: 'top-[20%] left-[58%] -rotate-12 w-14 h-14 hidden md:block' },
    { type: 'quote', className: 'top-[18%] left-[82%] rotate-6 w-10 h-10' },

    // Row 3
    { type: 'easel', className: 'top-[35%] left-[8%] rotate-12 w-12 h-12' },
    { type: 'compass', className: 'top-[38%] left-[28%] -rotate-45 w-10 h-10 hidden sm:block' },
    { type: 'quote', className: 'top-[32%] left-[48%] rotate-12 w-14 h-14' },
    { type: 'key', className: 'top-[40%] left-[72%] -rotate-12 w-10 h-10 hidden md:block' },
    { type: 'award', className: 'top-[35%] left-[92%] rotate-45 w-12 h-12' },

    // Row 4
    { type: 'quote', className: 'top-[55%] left-[12%] -rotate-12 w-10 h-10 hidden md:block' },
    { type: 'key', className: 'top-[52%] left-[32%] rotate-12 w-14 h-14' },
    { type: 'easel', className: 'top-[60%] left-[55%] -rotate-6 w-12 h-12 hidden lg:block' },
    { type: 'compass', className: 'top-[58%] left-[78%] rotate-12 w-10 h-10' },
    { type: 'quote', className: 'top-[62%] left-[94%] -rotate-12 w-8 h-8 hidden sm:block' },

    // Row 5 
    { type: 'award', className: 'top-[75%] left-[6%] rotate-12 w-14 h-14' },
    { type: 'easel', className: 'top-[80%] left-[25%] -rotate-12 w-10 h-10 hidden sm:block' },
    { type: 'compass', className: 'top-[72%] left-[45%] rotate-45 w-12 h-12' },
    { type: 'key', className: 'top-[82%] left-[68%] -rotate-12 w-14 h-14 hidden md:block' },
    { type: 'easel', className: 'top-[78%] left-[88%] rotate-6 w-12 h-12' },

    // Row 6 (Bottom)
    { type: 'key', className: 'top-[92%] left-[15%] rotate-45 w-12 h-12' },
    { type: 'quote', className: 'top-[88%] left-[38%] -rotate-12 w-10 h-10 hidden lg:block' },
    { type: 'award', className: 'top-[95%] left-[58%] rotate-12 w-14 h-14 hidden sm:block' },
    { type: 'compass', className: 'top-[90%] left-[82%] -rotate-45 w-10 h-10' },

    // Extra scattered fillers for dense areas
    { type: 'easel', className: 'top-[15%] left-[50%] rotate-45 w-8 h-8 opacity-50 hidden xl:block' },
    { type: 'award', className: 'top-[50%] left-[88%] -rotate-12 w-8 h-8 opacity-50 hidden xl:block' },
    { type: 'key', className: 'top-[88%] left-[25%] rotate-12 w-8 h-8 opacity-50 hidden lg:block' },
    { type: 'compass', className: 'top-[28%] left-[12%] -rotate-6 w-8 h-8 opacity-50 hidden lg:block' },
  ];

  return (
    // Lowered opacity slightly so it layers nicely with your existing grid pattern
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.04]">
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


// --- 2. Dummy Data ---
const tutors = [
  {
    id: 1,
    name: "Dr. Ted Burgess",
    role: "Lead Software Engineering Tutor",
    quote: "“I have completed multiple post-graduate certificates in my life and always felt relief at the end. Teaching at Marlayer, I strive to make sure students feel a sense of loss when they have no new classes to attend because the learning is that engaging.”",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Senior UX/UI Design Instructor",
    quote: "“Design is more than just making things look pretty; it is about solving complex user problems. I love watching my students at Marlayer Academy have that 'aha' moment when they finally understand user empathy and flow.”",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Cloud Infrastructure Architect",
    quote: "“The cloud is the backbone of modern tech. My goal is to break down complex cloud architectures into bite-sized, practical lessons so our students can confidently deploy and scale real-world applications.”",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  },
];


// --- 3. Main Tutors Component ---
export default function TutorsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tutors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tutors.length) % tutors.length);
  };

  const currentTutor = tutors[currentIndex];

  return (
    <section className="bg-primary relative py-20 px-6 md:px-12 lg:px-24 font-sans overflow-hidden">
      
      {/* Scattered Tutors/Mentorship Icons */}
      <BackgroundIcons />

      {/* Subtle line grid pattern (Retained from your code) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 tracking-tight">
          Meet Our <span className="font-normal">Tutors</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col relative min-h-[350px] justify-center">
            <div key={currentTutor.id} className="animate-fade-in">
              {/* 5 Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#ff7a00]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-[22px] leading-[1.7] text-gray-300 font-light mb-10 max-w-lg">
                {currentTutor.quote}
              </p>

              {/* Tutor Info */}
              <div>
                <h4 className="text-lg font-bold text-white">{currentTutor.name}</h4>
                <p className="text-sm text-[#45B1A0] mt-1">{currentTutor.role}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 mt-10">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Previous Tutor"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-orange flex items-center justify-center text-white hover:bg-orange/85 transition-colors shadow-sm"
                aria-label="Next Tutor"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Image with Stacked Cards Effect */}
          <div className="relative w-full max-w-md mx-auto lg:ml-auto mt-10 lg:mt-0">
            <div className="absolute top-6 -right-6 md:top-10 md:-right-10 w-full h-full bg-white/5 border border-white/5 rounded-[2rem] transform rotate-6 z-0 transition-transform duration-500"></div>
            
            <div className="absolute top-3 -right-3 md:top-5 md:-right-5 w-full h-full bg-white/10 border border-white/10 rounded-[2rem] transform rotate-3 z-0 transition-transform duration-500"></div>

            <div key={`img-${currentTutor.id}`} className="relative z-10 aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-xl animate-fade-in">
              <Image 
                src={currentTutor.image} 
                alt={currentTutor.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}