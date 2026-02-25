// components/AcademySection.tsx
import React from 'react';

const AcademySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-40 max-w-full">
        
        {/* Feature Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image & Bottom Overlay Badge */}
          <div className="w-full lg:w-7/12 relative group">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] w-full">
              {/* Replace the src with your actual image path */}
              <img 
                src="/images/homepage/academy-banner.jpg" 
                alt="Student smiling while using a laptop" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Bottom Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1021]/90 via-[#0b1021]/20 to-transparent opacity-90 z-0"></div>

              {/* "Next Batch" Info Badge */}
              {/* <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 z-10">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002c-.114.06-.227.119-.343.18-.114.06-.229.119-.343.18a.75.75 0 01-.607 0 49.904 49.904 0 00-10.589-4.272.75.75 0 01-.23-1.337A60.65 60.65 0 0111.7 2.805z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 01-.46.711 47.87 47.87 0 00-8.105 4.342.75.75 0 01-.832 0 47.87 47.87 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 001.481 1.453 45.42 45.42 0 003.09-.128 1.5 1.5 0 001.481-1.452v-1.27a48.56 48.56 0 012.608-1.58zM8.25 10.12l.09.049V15a.75.75 0 01-1.5 0v-5.266c.23-.131.464-.258.702-.381c.238-.124.478-.244.72-.361v.128z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-white font-bold text-lg leading-tight">Next Batch Starting Soon</h5>
                  <p className="text-white/80 text-sm font-medium">Join 500+ students today</p>
                </div>
              </div> */}
            </div>

            {/* Expert Mentorship Floating Badge */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm py-2.5 px-5 rounded-full shadow-lg flex items-center gap-2 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#A33900]">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-slate-800">Expert Mentorship</span>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-5/12 flex flex-col items-start">
            
            {/* Light Orange Icon Box */}
            <div className="w-14 h-14 bg-[#ffedd5] rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#A33900]">
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002c-.114.06-.227.119-.343.18-.114.06-.229.119-.343.18a.75.75 0 01-.607 0 49.904 49.904 0 00-10.589-4.272.75.75 0 01-.23-1.337A60.65 60.65 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 01-.46.711 47.87 47.87 0 00-8.105 4.342.75.75 0 01-.832 0 47.87 47.87 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.56 48.56 0 0013.06 15.473z" />
              </svg>
            </div>

            <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
              Marlayer Academy
            </h4>
            
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Unlock your potential with future-ready skills. Our academy offers hands-on mentorship from industry experts in a collaborative environment. Whether it's coding, design, or AI, we guide you from novice to professional.
            </p>

            {/* Pill Tags */}
            <div className="flex flex-wrap gap-3 mb-10 w-full">
              {[
                "Web and Mobile Development",
                "UI/UX Design",
                "Data Analytics",
              ].map((tag, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Link */}
            <a href="/academy" className="inline-flex items-center gap-2 bg-[#A33900] text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-[#c2410c] transition-all shadow-md group">
              View Course Catalog
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

export default AcademySection;