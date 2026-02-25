// components/SoftwareSection.tsx
import React from 'react';

const SoftwareSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-40 max-w-full">
        
        {/* Feature Layout - Alternating: Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-5/12 flex flex-col items-start">
            
            {/* Light Purple Icon Box */}
            <div className="w-14 h-14 bg-[#752900]/15 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7 text-[#752900]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M6.75 8.25L3 12l3.75 3.75" />
              </svg>
            </div>

            <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
              Software Solutions
            </h4>
            
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              We don&apos;t just write code, we build relationships. Our custom software solutions are crafted through close collaboration, ensuring we solve your unique challenges with intuitive dashboards and robust architecture.
            </p>

            {/* Statistics Cards */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full">
              {/* Stat 1 */}
              <div className="bg-[#752900]/15 rounded-2xl p-6 shadow-sm border border-slate-100 flex-1">
                <div className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">98%</div>
                <div className="text-sm font-medium text-slate-500">Client Satisfaction</div>
              </div>
              
              {/* Stat 2 */}
              <div className="bg-[#752900]/15 rounded-2xl p-6 shadow-sm border border-slate-100 flex-1">
                <div className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">24/7</div>
                <div className="text-sm font-medium text-slate-500">Support Coverage</div>
              </div>
            </div>

            {/* CTA Link */}
            <a href="/software" className="inline-flex items-center gap-2 bg-[#471900]/90 text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-[#471900] transition-all shadow-md group">
              View Our Projects
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transform transition-transform group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

          </div>

          {/* Right Side: Image & Mockup Overlay */}
          <div className="w-full lg:w-7/12 relative group">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] w-full">
              {/* Replace the src with your actual image path */}
              <img 
                src="/images/homepage/marlayerSoftware.jpg" 
                alt="Colleagues discussing software on a tablet" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle Overlay to make the floating UI pop slightly more */}
              <div className="absolute inset-0 bg-black/5 z-0"></div>

              
            </div>

            {/* Custom Solutions Floating Badge */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm py-2.5 px-5 rounded-full shadow-lg flex items-center gap-2 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#752900]">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-slate-800">Custom Solutions</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;