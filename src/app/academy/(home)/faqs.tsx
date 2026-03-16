"use client";

import React, { useState } from 'react';
import Link from "next/link";
import CTASection from './ctaSection';

// --- 1. Background Icons (FAQ & Curiosity Theme) ---
const BackgroundIcons = () => {
  const paths = {
    // Question Mark (Asking/Curiosity)
    question: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </>
    ),
    // Cog / Gear (Troubleshooting / How it works)
    cog: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
    // Chat Bubbles (Communication/Support)
    chat: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    ),
    // Lightbulb (Answers/Ideas)
    bulb: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.829 1.58-1.936a4.5 4.5 0 00-1.325-8.86l-.105-.002M9.75 18v-.192c0-.983-.658-1.829-1.58-1.936a4.5 4.5 0 011.325-8.86l.105-.002" />
    ),
    // Magnifying Glass (Searching for info)
    search: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    )
  };

  const scatterMap = [
    // Row 1 (Top)
    { type: 'question', className: 'top-[2%] left-[8%] rotate-12 w-14 h-14' },
    { type: 'bulb', className: 'top-[5%] left-[28%] -rotate-12 w-10 h-10 hidden sm:block' },
    { type: 'cog', className: 'top-[3%] left-[45%] rotate-45 w-12 h-12' },
    { type: 'search', className: 'top-[6%] left-[70%] -rotate-12 w-14 h-14' },
    { type: 'chat', className: 'top-[4%] left-[90%] rotate-6 w-12 h-12 hidden md:block' },
    
    // Row 2
    { type: 'chat', className: 'top-[15%] left-[12%] -rotate-6 w-10 h-10 hidden sm:block' },
    { type: 'search', className: 'top-[18%] left-[32%] rotate-12 w-12 h-12' },
    { type: 'question', className: 'top-[14%] left-[55%] -rotate-12 w-14 h-14 hidden md:block' },
    { type: 'bulb', className: 'top-[20%] left-[82%] rotate-45 w-10 h-10' },

    // Row 3
    { type: 'cog', className: 'top-[28%] left-[6%] -rotate-45 w-14 h-14' },
    { type: 'question', className: 'top-[30%] left-[25%] rotate-12 w-10 h-10 hidden sm:block' },
    { type: 'chat', className: 'top-[35%] left-[45%] -rotate-12 w-12 h-12' },
    { type: 'search', className: 'top-[28%] left-[68%] rotate-12 w-14 h-14 hidden md:block' },
    { type: 'cog', className: 'top-[32%] left-[88%] rotate-45 w-10 h-10' },

    // Row 4
    { type: 'bulb', className: 'top-[45%] left-[15%] rotate-12 w-12 h-12 hidden md:block' },
    { type: 'search', className: 'top-[50%] left-[35%] -rotate-12 w-10 h-10' },
    { type: 'cog', className: 'top-[42%] left-[58%] rotate-6 w-14 h-14 hidden lg:block' },
    { type: 'question', className: 'top-[48%] left-[78%] -rotate-12 w-12 h-12' },
    { type: 'chat', className: 'top-[52%] left-[95%] rotate-12 w-10 h-10 hidden sm:block' },

    // Row 5 
    { type: 'chat', className: 'top-[62%] left-[8%] -rotate-12 w-14 h-14' },
    { type: 'question', className: 'top-[68%] left-[28%] rotate-45 w-10 h-10 hidden sm:block' },
    { type: 'bulb', className: 'top-[65%] left-[48%] -rotate-6 w-12 h-12' },
    { type: 'cog', className: 'top-[70%] left-[72%] rotate-12 w-14 h-14 hidden md:block' },
    { type: 'search', className: 'top-[62%] left-[88%] -rotate-45 w-10 h-10' },

    // Row 6
    { type: 'search', className: 'top-[82%] left-[12%] rotate-12 w-12 h-12' },
    { type: 'cog', className: 'top-[80%] left-[35%] -rotate-45 w-10 h-10 hidden lg:block' },
    { type: 'question', className: 'top-[88%] left-[55%] rotate-12 w-14 h-14 hidden sm:block' },
    { type: 'chat', className: 'top-[85%] left-[80%] -rotate-12 w-12 h-12' },

    // Extra scattered fillers for dense areas
    { type: 'bulb', className: 'top-[10%] left-[55%] rotate-45 w-8 h-8 opacity-50 hidden xl:block' },
    { type: 'question', className: 'top-[40%] left-[85%] -rotate-12 w-8 h-8 opacity-50 hidden xl:block' },
    { type: 'chat', className: 'top-[75%] left-[18%] rotate-12 w-8 h-8 opacity-50 hidden lg:block' },
    { type: 'search', className: 'top-[22%] left-[15%] -rotate-6 w-8 h-8 opacity-50 hidden lg:block' },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.05]">
      {scatterMap.map((item, index) => (
        <svg
          key={index}
          className={`absolute text-white ${item.className}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          {paths[item.type as keyof typeof paths]}
        </svg>
      ))}
    </div>
  );
};

// --- 2. Dummy Data & Component ---
const faqsData = [
  {
    question: "What is the purpose of your online academy?",
    answer: "Our academy helps teenagers, young adults, and working professionals become technologically literate. We offer beginner-friendly courses that teach essential computer skills, web development, and data analysis, empowering you to use technology effectively in daily life or work."
  },
  {
    question: "Who are your courses designed for?",
    answer: "Our courses are perfect for individuals who have little to no experience using technology beyond basic entertainment, as well as professionals looking to catch up on how to use tech for office tasks."
  },
  {
    question: "Do I need any prior technical knowledge to enroll?",
    answer: "No prior technical knowledge is required! The courses are designed for complete beginners, with guidance tailored to help you develop your skills progressively."
  },
  {
    question: "How are the courses delivered?",
    answer: (
      <>
        <p className="mb-4">We offer classes in different formats depending on your subscription plan:</p>
        <ul className="list-disc list-outside space-y-2 pl-5">
          <li><strong>Standard Plan:</strong> Group classes with up to 12 participants via video conferencing (Google Meet, Skype).</li>
          <li><strong>Premium Plan:</strong> Group classes (up to 12 participants) and additional one-on-one sessions via video conferencing.</li>
          <li><strong>Platinum Plan:</strong> In-person classes and one-on-one sessions.</li>
        </ul>
      </>
    )
  },
  {
    question: "Will I receive a certificate after completing a course?",
    answer: "Yes, all students who complete a course receive a digital certificate, which can be used to showcase your new skills on your resume or online profiles."
  },
  {
    question: "How do I pay for the courses?",
    answer: "Go to the sign-up page, fill out the form, and submit it. We will send instructions to your email on how to complete the payment process. We accept all major credit cards, PayPal, and bank transfers."
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-gradient-to-b from-primary to-[#0E1F18] relative py-20 lg:py-28 overflow-hidden">
      
      {/* 5x Concentrated Scattered FAQ Icons */}
      <BackgroundIcons />

      {/* Center Spotlight behind accordion */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-[#45B1A0]/5 blur-[120px] rounded-[100%] pointer-events-none z-0"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 xl:px-28 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Frequently Asked Questions
        </h2>
        <p className="max-w-3xl text-center text-gray-300 text-base md:text-lg mt-4 mb-12">
          Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
        </p>
        
        <div className="w-full max-w-4xl flex flex-col gap-3">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`w-full rounded-2xl transition-all duration-300 border backdrop-blur-sm ${
                  isOpen 
                    ? 'bg-white/10 border-white/20 shadow-md' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg transition-colors pr-6 ${isOpen ? 'font-semibold text-[#45B1A0]' : 'font-medium text-white'}`}>
                    {faq.question}
                  </span>
                  
                  <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${isOpen ? 'bg-[#45B1A0]/20 text-[#45B1A0] rotate-180' : 'bg-white/10 text-gray-400'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                    {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col justify-center mt-12">
          <h6 className='text-white font-bold mb-5 text-center'>Have more questions?</h6>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#45B1A0] text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-[#3ca090] transition-all shadow-md group">
            Contact Support
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform transition-transform group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Assuming you have this imported properly in your real code! */}
      <CTASection />
      
    </section>
  )
}

export default FAQs;