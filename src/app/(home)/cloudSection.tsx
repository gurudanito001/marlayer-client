// components/CloudServicesSection.tsx
"use client"

import React from 'react';
import Image from 'next/image';

const CloudServicesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/images/homepage/software-mockup.png"
                width={1000}
                height={1000}
                alt="Marlayer Cloud Services"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-right">
              <h2 className="text-sm md:text-lg font-bold mb-4" style={{ color: "#003C3C" }}>
                Marlayer Cloud
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#003C3C" }}>
                Powering Next-Gen Innovation
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                From robust backend-as-a-service to reliable blog hosting, Marlayer Cloud Services provides the infrastructure you need to scale your applications securely and efficiently, letting you focus on your core business.
              </p>
              <button className="btn text-white bg-primary-2 rounded-sm shadow-md hover:shadow-lg transition-all duration-300">
                Get Cloud Access
              </button>
            </div>
          </div>
        </section>
  );
};

export default CloudServicesSection;