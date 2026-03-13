"use client"

import React from 'react';
import Link from 'next/link'; // Corrected import for Next.js routing

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-b from-primary to-[#0E1F18] text-white py-16 md:py-24 text-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Ready to Build Your Next Big Idea?
        </h2>
        
        <p className="text-sm md:text-lg mb-10 max-w-3xl mx-auto">
          We are ready to partner with you to provide technical training, bespoke software solutions, or high-quality tech gadgets tailored to your vision.
        </p>
        
        <Link href='/contact' className="btn btn-lg shadow-sm text-white bg-primary-2 border-0 rounded-xl transition-all duration-300 hover:bg-opacity-90">
          Get in Touch
        </Link>
        
      </div>
    </section>
  );
};

