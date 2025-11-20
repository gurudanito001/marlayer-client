


// components/CloudServicesSection.tsx
"use client"

import React from 'react';
import Image from 'next/image';

const BespokeSoftware: React.FC = () => {
  const primaryColor = '#003C3C';
  return (
    <section className="py-24 md:py-36 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        {/* Section Title */}
        <h2 className="text-xl md:text-3xl font-semibold text-primary mb-5">About Marlayer</h2>
        {/* <h3 className="text-3xl xl:text-4xl font-bold mb-6 text-primary">
          Bring your ideas to life.
        </h3> */}
        {/* Section Description */}
        <p className="text-sm md:text-lg text-gray-700 mb-12 mx-auto max-w-3xl">
          At Marlayer, we believe technology should empower people — not overwhelm them. We build digital solutions, deliver authentic gadgets, and provide practical training designed to help individuals and businesses grow. Our ecosystem is built on reliability, innovation, and a deep commitment to helping our customers succeed.

        </p>


        <h3 className="text-xl xl:text-2xl font-bold mb-6 text-primary">
          Our Core Values
        </h3>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-gray-50 p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4" style={{ color: primaryColor }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M12 3.75l8.25 4.5v5.25c0 4.28-3.18 7.98-8.25 9C8.88 21.48 5 17.78 5 13.5V8.25L12 3.75z" />
            </svg>

            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>Integrity</h3>
            <p className="text-gray-700">We deliver only what we can stand behind. Whether it’s a piece of software, a gadget, or a training program, honesty and transparency guide every interaction with our clients, students, and partners.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-gray-50 p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4" style={{ color: primaryColor }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414m-9.9-9.9L5.636 5.636m12.728 0l-1.414 1.414m-9.9 9.9L5.636 18.364M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>Quality</h3>
            <p className="text-gray-700">We never compromise on standards. Every product we sell, every platform we build, and every course we create is crafted to meet high-performance, reliability, and usability expectations.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-gray-50 p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4" style={{ color: primaryColor }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25a6.75 6.75 0 00-3.472 12.53c.497.302.972.86.972 1.47v2.25h4.5v-2.25c0-.61.475-1.168.972-1.47A6.75 6.75 0 0012 2.25zM9.75 21h4.5" />
            </svg>
            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>Innovation</h3>
            <p className="text-gray-700">Technology evolves fast — and so do we. We continuously experiment, learn, and adopt new ideas to ensure our customers always receive modern and forward-thinking solutions.</p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-gray-50 p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4" style={{ color: primaryColor }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s8-4.5 8-10.5A4.5 4.5 0 0012 6a4.5 4.5 0 00-8 4.5C4 16.5 12 21 12 21z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>Customer-Centricity</h3>
            <p className="text-gray-700">Your success is our priority. We listen, understand your needs, and tailor our services to deliver the real value you’re looking for. We don’t just offer solutions — we partner with you.</p>
          </div>

          {/* Feature Card 5 */}
          <div className="bg-gray-50 p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4" style={{ color: primaryColor }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m6 2.91a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z" />
            </svg>

            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>Excellence in Execution</h3>
            <p className="text-gray-700">Great ideas matter, but execution matters more. We focus on precision, efficiency, and consistency to ensure every project or service is delivered at the highest level.</p>
          </div>

          {/* Feature Card 6 */}
          <div className="bg-gray-50 p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4" style={{ color: primaryColor }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 13v5m4-10v10m4-6v6" />
            </svg>
            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>Growth & Learning</h3>
            <p className="text-gray-700">We believe in empowering people through knowledge. Our academy, our internal processes, and our culture all reflect our commitment to continuous learning and improvement.</p>
          </div>
        </div>

        {/* Call to Action Button for this section */}
        {/* <button className="btn btn-lg text-white rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 mt-12" style={{ backgroundColor: primaryColor, borderColor: primaryColor }}>
          Start Your Project
        </button> */}
      </div>
    </section>
  );
};

export default BespokeSoftware;