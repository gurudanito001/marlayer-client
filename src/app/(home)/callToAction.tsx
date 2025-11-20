// components/CloudServicesSection.tsx
"use client"

import React from 'react';
import Image from 'next/image';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-primary text-white py-16 md:py-24 text-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold mb-6">
          Ready to Build Your Next Big Idea?
        </h2>
        <p className="text-lg md:text-lg lg:text-xl mb-10 max-w-3xl mx-auto">
          We are ready to partner with you to provide technical training, cloud infrastructure, or high-quality tech products tailored to your vision.
        </p>
        <a href='mailto:daniel.marlayer@gmail.com' className="btn btn-lg shadow-sm text-white bg-primary-2 border-0 rounded-sm  transition-all duration-300">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CallToAction;