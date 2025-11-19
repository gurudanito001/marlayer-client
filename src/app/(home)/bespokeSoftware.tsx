


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
        <p className="text-sm md:text-lg text-gray-700 mb-12 mx-auto">
          At Marlayer, we believe technology should empower people — not overwhelm them. We build digital solutions, deliver authentic gadgets, and provide practical training designed to help individuals and businesses grow. Our ecosystem is built on reliability, innovation, and a deep commitment to helping our customers succeed.
          From software development to device procurement and tech education, everything we do is guided by six core values that shape our work and define the quality of every service we provide.

        </p>


        <h3 className="text-xl xl:text-2xl font-bold mb-6 text-primary">
          Our Core Values
        </h3>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-gray-50 p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4" style={{ color: primaryColor }} >
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>

            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>Integrity</h3>
            <p className="text-gray-700">We deliver only what we can stand behind. Whether it’s a piece of software, a gadget, or a training program, honesty and transparency guide every interaction with our clients, students, and partners.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-gray-50 p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" style={{ color: primaryColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>Quality</h3>
            <p className="text-gray-700">We never compromise on standards. Every product we sell, every platform we build, and every course we create is crafted to meet high-performance, reliability, and usability expectations.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-gray-50 p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" style={{ color: primaryColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>Innovation</h3>
            <p className="text-gray-700">Technology evolves fast — and so do we. We continuously experiment, learn, and adopt new ideas to ensure our customers always receive modern and forward-thinking solutions.</p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-gray-50 p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" style={{ color: primaryColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>Customer-Centricity</h3>
            <p className="text-gray-700">Your success is our priority. We listen, understand your needs, and tailor our services to deliver the real value you’re looking for. We don’t just offer solutions — we partner with you.</p>
          </div>

          {/* Feature Card 5 */}
          <div className="bg-gray-50 p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4" style={{ color: primaryColor }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>

            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>Excellence in Execution</h3>
            <p className="text-gray-700">Great ideas matter, but execution matters more. We focus on precision, efficiency, and consistency to ensure every project or service is delivered at the highest level.</p>
          </div>

          {/* Feature Card 6 */}
          <div className="bg-gray-50 p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" style={{ color: primaryColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
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