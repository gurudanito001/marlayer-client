"use client";

import React, { useState } from 'react';

const faqs = [
  {
    question: "What programs are offered at the Marlayer Tech Academy?",
    answer: "We offer comprehensive training in modern frontend, backend and mobile development (including React, React Native, Next.js, and Node.js), UI/UX design, and Data Analytics to prepare you for a global tech career."
  },
  {
    question: "How does the flagship gadget installment plan work?",
    answer: "Through our hardware partnerships, businesses can acquire top-tier laptops and gadgets with flexible payment plans. Our services also include scheduled maintenance and repair services to keep your team productive."
  },
  {
    question: "Do you build custom software for startups?",
    answer: "Yes, we specialize in building scalable web and mobile applications tailored to your specific business needs, from initial MVPs to robust enterprise solutions."
  },
  {
    question: "How do I partner with Marlayer?",
    answer: "Whether you are an investor, hardware vendor, or corporate entity, you can reach out via our contact form to discuss collaboration opportunities with our team."
  },
  {
    question: "What kind of support is provided after software deployment?",
    answer: "We offer continuous maintenance, performance monitoring, and dedicated technical support to ensure your application runs smoothly, remains secure, and scales effortlessly with your growing user base."
  }
];

export default function FaqSection() {
  // Set the first FAQ as open by default, just like the design
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 xl:py-32 px-6 md:px-12 lg:px-16 xl:px-28">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Heading and Graphic */}
        <div className="w-full lg:w-[40%] flex flex-col items-start">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 text-sm font-medium mb-6 border border-orange-100">
            FAQs
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#11241E] mb-6 tracking-tight leading-[1.1]">
            Still have <br />
            questions?
          </h2>
          
          <p className="text-gray-500 text-lg mb-12 max-w-md">
            Our FAQ section provides all the information you need to get started with our academy, software, and gadget solutions.
          </p>

          {/* Decorative Vertical Bars Graphic */}
          <div className="flex items-end gap-1.5 h-32 w-full max-w-[280px]">
            {/* Dark Greens */}
            <div className="w-2.5 h-[90%] bg-[#0A4731] rounded-full"></div>
            <div className="w-2.5 h-full bg-[#115E41] rounded-full"></div>
            <div className="w-2.5 h-[95%] bg-[#1B7552] rounded-full"></div>
            <div className="w-2.5 h-[85%] bg-[#2A9168] rounded-full"></div>
            {/* Oranges */}
            <div className="w-2.5 h-full bg-[#F4A261] rounded-full ml-1"></div>
            <div className="w-2.5 h-[90%] bg-[#F4B27A] rounded-full"></div>
            <div className="w-2.5 h-[95%] bg-[#F6C6A0] rounded-full"></div>
            {/* Light Teals/Beiges */}
            <div className="w-2.5 h-full bg-[#E0ECE9] rounded-full ml-1"></div>
            <div className="w-2.5 h-[85%] bg-[#E5F0ED] rounded-full"></div>
            <div className="w-2.5 h-[90%] bg-[#EAF4F2] rounded-full"></div>
            <div className="w-2.5 h-[95%] bg-[#EEF6F4] rounded-full"></div>
            {/* Browns/Reds */}
            <div className="w-2.5 h-full bg-[#C97A63] rounded-full ml-1"></div>
            <div className="w-2.5 h-[90%] bg-[#D48F7A] rounded-full"></div>
            <div className="w-2.5 h-[95%] bg-[#DEAAA0] rounded-full"></div>
            <div className="w-2.5 h-[85%] bg-[#E8C4BE] rounded-full"></div>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="w-full lg:w-[60%] flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`w-full rounded-2xl transition-all duration-300 border ${
                  isOpen 
                    ? 'bg-[#F8F9F8] border-transparent shadow-sm' 
                    : 'bg-white border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg transition-colors ${isOpen ? 'font-semibold text-[#11241E]' : 'font-medium text-gray-700'}`}>
                    {index + 1}. {faq.question}
                  </span>
                  
                  {/* Icon Toggle */}
                  <div className={`flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded ${isOpen ? 'border border-[#0A4731] text-[#0A4731]' : 'text-gray-400'}`}>
                    {isOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    )}
                  </div>
                </button>
                
                {/* Expandable Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-500 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}