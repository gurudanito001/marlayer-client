"use client";

import React from 'react';

export default function ContactServices() {
  return (
    <section className="w-full bg-white flex flex-col items-center pt-20">
      
      {/* Header Content */}
      <div className="text-center px-6 mb-16 lg:mb-28 max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 text-sm font-medium mb-6 border border-orange-100">
          Divisions
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#11241E] mb-4 tracking-tight">
          Connect with Us <br className="hidden md:block" />
          Based on Your Needs
        </h2>
        <p className="text-gray-500 text-lg">
          Whether it's academy enrollment, software development, hardware partnerships, or staff training, we're here to help.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: General Inquiries */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C05621" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#11241E] mb-3">General Inquiries</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              For general questions about the Marlayer ecosystem, services, or general assistance.
            </p>
          </div>

          {/* Card 2: Partnerships */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C05621" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.999 2.999 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.999 2.999 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#11241E] mb-3">Partnerships</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              For businesses, hardware providers, and investors interested in collaborating with us.
            </p>
          </div>

          {/* Card 3: Tech Academy */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C05621" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#11241E] mb-3">Tech Academy</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Help with enrollment, curriculum details, schedules, and student support.
            </p>
          </div>

          {/* Card 4: Software & Gadgets */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C05621" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#11241E] mb-3">Software & Gadgets</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Inquiries regarding development quotes, flagship laptops, or installment plans.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Dark Contact Bar */}
      <div className="w-full bg-[#11241E] py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Address Block */}
            <div className="bg-[#1C3A31] rounded-2xl p-6 flex items-center gap-4 border border-white/5">
              <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <span className="text-white text-lg font-medium">Lagos, Nigeria</span>
            </div>

            {/* Phone Block */}
            <div className="bg-[#1C3A31] rounded-2xl p-6 flex items-center gap-4 border border-white/5">
              <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <span className="text-white text-lg font-medium">+234 814 0715 723</span>
            </div>

            {/* Email Block */}
            <div className="bg-[#1C3A31] rounded-2xl p-6 flex items-center gap-4 border border-white/5">
              <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <span className="text-white text-lg font-medium">daniel.marlayer@gmail.com</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}