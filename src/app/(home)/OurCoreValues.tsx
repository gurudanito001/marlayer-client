"use client"

import React, { useRef, useEffect, useState } from 'react';

const OurCoreValues: React.FC = () => {
  const primaryColor = '#003C3C';
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        // If we are near the end, scroll back to the start
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise scroll right by one view width
          container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // On desktop, scroll the full width of the visible area (3 cards). 
      // On mobile, scroll one card width.
      const scrollAmount = container.clientWidth; 
      
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const values = [
    {
      title: "Integrity",
      // Shortened text
      desc: "We deliver only what we can stand behind. Honesty and transparency guide every interaction, from software to gadgets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M12 3.75l8.25 4.5v5.25c0 4.28-3.18 7.98-8.25 9C8.88 21.48 5 17.78 5 13.5V8.25L12 3.75z" />
        </svg>
      )
    },
    {
      title: "Quality",
      desc: "We never compromise. Every product, platform, and course is crafted to meet high-performance standards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414m-9.9-9.9L5.636 5.636m12.728 0l-1.414 1.414m-9.9 9.9L5.636 18.364M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      desc: "Technology evolves fast. We continuously experiment and adopt new ideas to ensure you get modern solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25a6.75 6.75 0 00-3.472 12.53c.497.302.972.86.972 1.47v2.25h4.5v-2.25c0-.61.475-1.168.972-1.47A6.75 6.75 0 0012 2.25zM9.75 21h4.5" />
        </svg>
      )
    },
    {
      title: "Customer First",
      desc: "Your success is our priority. We listen and tailor our services to deliver real value. We partner with you.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      title: "Execution",
      desc: "Great ideas matter, but execution matters more. We focus on precision to ensure projects are delivered perfectly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m6 2.91a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z" />
        </svg>
      )
    },
    {
      title: "Growth",
      desc: "We empower people through knowledge. Our academy and culture reflect a commitment to continuous learning.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 13v5m4-10v10m4-6v6" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-[#e3e9e9] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col mb-10 mt-8 items-center gap-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
            What Makes Us Different
          </h3>
          <div className="h-[3px] w-12 bg-gradient-to-r from-[#45B1A0] to-[#07453b] rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {values.map((item, index) => (
              // Mobile: w-full (1 card). Desktop: w-[calc(33.333%-16px)] (3 cards)
              <div 
                key={index}
                className="flex-none w-full md:w-[calc(33.333%-16px)] snap-center bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[250px]"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-4" style={{ color: primaryColor }}>
                    {item.icon}
                  </div>
                  
                  {/* Shorter Title & Desc */}
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm lg:text-md text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Smaller, Cute Plus Icon */}
                {/* <div className="flex justify-end mt-4">
                  <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                      <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
          
          {/* Navigation Controls (Bottom Right) */}
          <div className="flex justify-end items-center gap-3 mt-6">
             <button 
               onClick={() => scroll('left')}
               className="w-8 h-8 rounded-full bg-[#45B1A0] hover:bg-gray-300 flex items-center justify-center transition-colors focus:outline-none"
               aria-label="Previous"
             >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
               </svg>
             </button>

             <button 
               onClick={() => scroll('right')}
               className="w-8 h-8 rounded-full bg-[#45B1A0] hover:bg-gray-300 flex items-center justify-center transition-colors focus:outline-none"
               aria-label="Next"
             >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
               </svg>
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurCoreValues;