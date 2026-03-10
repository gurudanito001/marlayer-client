"use client";

import React, { useState } from 'react';
import Link from "next/link";

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
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-28 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
          Frequently Asked Questions
        </h2>
        <p className="max-w-3xl text-center text-gray-600 text-base md:text-lg mt-4 mb-12">
          Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
        </p>
        
        <div className="w-full max-w-4xl flex flex-col gap-3">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`w-full rounded-2xl transition-all duration-300 border ${
                  isOpen 
                    ? 'bg-white border-gray-200 shadow-md' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg transition-colors ${isOpen ? 'font-semibold text-primary' : 'font-medium text-gray-800'}`}>
                    {faq.question}
                  </span>
                  
                  <div className={`flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${isOpen ? 'bg-primary/10 text-primary rotate-180' : 'bg-gray-100 text-gray-500'}`}>
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
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/academy/faqs" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-primary-2 transition-all shadow-md group">
            View More FAQs
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform transition-transform group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FAQs