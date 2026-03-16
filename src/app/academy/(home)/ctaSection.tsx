import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 px-6 font-sans relative flex justify-center">
      
      {/* Background Glow Effect behind the box */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-primary-2/20 blur-[100px] pointer-events-none"></div>

      {/* Main CTA Container */}
      <div className="relative w-full max-w-5xl bg-white/5 border border-white/5 rounded-[2rem] py-20 px-6 md:px-16 text-center shadow-2xl">
        
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white mb-6 leading-tight max-w-3xl mx-auto">
          Join Marlayer Academy And Turn
          Your Ideas Into Reality
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Whether you want to launch a startup, gain real-world product experience for your resume, or find a supportive tribe of tech innovators, our community-driven programs give you the exact skills you need to build and succeed.
        </p>

        <Link 
          href="/academy/sign-up" 
          className="inline-flex justify-center items-center bg-orange hover:bg-orange/85 text-white px-10 py-3.5 rounded-full font-medium transition-all"
        >
          Enroll Now
        </Link>
        
      </div>
    </section>
  );
}