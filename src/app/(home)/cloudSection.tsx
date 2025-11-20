// components/CloudServicesSection.tsx
"use client"

import React from 'react';
import Image from 'next/image';
import ComingSoonModal from '../components/comingSoon';

const CloudServicesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <Image
                src="/images/marlayerSoftware.jpg"
                width={1000}
                height={1000}
                alt="Marlayer Cloud Services"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 text-left lg:text-right">
              <h2 className="text-sm md:text-lg font-bold mb-4" style={{ color: "#003C3C" }}>
                Marlayer Software
              </h2>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#003C3C" }}>
                Engineering Solutions for Real Problems
              </h3>
              <p className="md:text-lg text-gray-700 mb-6 mt-6">
                At Marlayer, we turn ideas into working technology. We build software that solves real problems, improves processes, and helps businesses grow. Our approach is simple: understand your needs, apply expert engineering, and deliver reliable solutions.
              </p>
              {/* <button className="btn text-white bg-primary-2 rounded-sm shadow-md hover:shadow-lg transition-all duration-300">
                Get Cloud Access
              </button> */}
              <ComingSoonModal linkText="Learn More" linkClasses="btn text-white bg-[#202733] rounded-sm shadow-md hover:shadow-lg transition-all duration-300" btnClasses="bg-sky-800 border-sky-800 min-w-40" modalTitle="Marlayer Cloud is Coming Soon ..." modalDescription="Marlayer Cloud is currently under development, meticulously crafted to bring you the most robust and seamless solutions. We&apos;re building something truly powerful!" modalImage="cloud-services.jpg" />
            </div>
          </div>
        </section>
  );
};

export default CloudServicesSection;