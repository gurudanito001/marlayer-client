// components/EcosystemSection.tsx
import React from 'react';

const EcosystemSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-40 max-w-full">

        {/* Feature Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image & Badge */}
          <div className="w-full lg:w-7/12 relative group">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] w-full">
              {/* Replace the src with your actual image path */}
              <img 
                src="/images/homepage/gadgets.jpg" 
                alt="Image of Marlayer Gadgets" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Premium Quality Floating Badge */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm py-2.5 px-5 rounded-full shadow-lg flex items-center gap-2 z-10">
              {/* Verified Blue Check Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-slate-800">Premium Quality</span>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-5/12 flex flex-col items-start">
            
            {/* Light Blue Icon Box */}
            <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>

            <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
              Gadget Store
            </h4>
            
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Discover the latest tech that empowers your workflow. From high-performance laptops to essential accessories, we curate premium gadgets designed to elevate your daily experience. Unbox innovation and upgrade your lifestyle.
            </p>

            {/* Features Checklist */}
            <ul className="space-y-4 mb-10 w-full">
              {[
                "Latest flagship devices",
                "Authorized reseller warranty",
                "Expert setup support"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Link */}
            <a href="/gadgets" className="inline-flex items-center gap-2 bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-all shadow-md group">
              Shop Latest Tech
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transform transition-transform group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;