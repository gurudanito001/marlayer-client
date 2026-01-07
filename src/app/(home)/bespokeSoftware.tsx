// components/CloudServicesSection.tsx
"use client"

import React, { useRef } from 'react';

const BespokeSoftware: React.FC = () => {
  const primaryColor = '#003C3C';
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 420; // Width of card + gap
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Extracting data to make the render clean and loopable
  const values = [
    {
      title: "Integrity",
      desc: "We deliver only what we can stand behind. Whether it’s a piece of software, a gadget, or a training program, honesty and transparency guide every interaction.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M12 3.75l8.25 4.5v5.25c0 4.28-3.18 7.98-8.25 9C8.88 21.48 5 17.78 5 13.5V8.25L12 3.75z" />
        </svg>
      )
    },
    {
      title: "Quality",
      desc: "We never compromise on standards. Every product we sell, every platform we build, and every course we create is crafted to meet high-performance and reliability expectations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414m-9.9-9.9L5.636 5.636m12.728 0l-1.414 1.414m-9.9 9.9L5.636 18.364M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      desc: "Technology evolves fast — and so do we. We continuously experiment, learn, and adopt new ideas to ensure our customers always receive modern solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25a6.75 6.75 0 00-3.472 12.53c.497.302.972.86.972 1.47v2.25h4.5v-2.25c0-.61.475-1.168.972-1.47A6.75 6.75 0 0012 2.25zM9.75 21h4.5" />
        </svg>
      )
    },
    {
      title: "Customer-Centricity",
      desc: "Your success is our priority. We listen, understand your needs, and tailor our services to deliver real value. We don’t just offer solutions — we partner with you.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      title: "Excellence in Execution",
      desc: "Great ideas matter, but execution matters more. We focus on precision, efficiency, and consistency to ensure every project or service is delivered at the highest level.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m6 2.91a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z" />
        </svg>
      )
    },
    {
      title: "Growth & Learning",
      desc: "We believe in empowering people through knowledge. Our academy, our internal processes, and our culture all reflect our commitment to continuous learning.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 13v5m4-10v10m4-6v6" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F7] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        

        {/* Section Header - mimicking "Why Apple..." */}
        <div className=" mb-10 mt-16">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight text-center">
            What Makes Us Different
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {values.map((item, index) => (
              <div 
                key={index}
                className="flex-none w-[310px] md:w-[380px] snap-center bg-white rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[320px]"
              >
                <div>
                  {/* Icon Top Left */}
                  <div className="mb-6" style={{ color: primaryColor }}>
                    {item.icon}
                  </div>
                  
                  {/* Title & Description */}
                  <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-sm md:text-lg text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Plus Icon */}
                <div className="flex justify-end mt-4">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Controls (Arrows) */}
          <div className="flex justify-end items-center gap-4 mt-4">
             {/* Left Arrow */}
             <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Previous"
             >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
             </button>

             {/* Right Arrow */}
             <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Next"
             >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
             </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BespokeSoftware;