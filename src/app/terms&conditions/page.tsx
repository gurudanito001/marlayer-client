"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ChevronRight
} from "lucide-react";
import NavBar from "../(home)/navbar";
import Footer from "../(home)/footer";

const sections = [
  { id: "intro", label: "1. Introduction" },
  { id: "services", label: "2. Scope of Services" },
  { id: "payments", label: "3. Payments & Billing" },
  { id: "software", label: "4. Software Projects" },
  { id: "gadgets", label: "5. Gadget Sales Policy" },
  { id: "academy", label: "6. Academy & Training" },
  { id: "liability", label: "7. Liability & Indemnity" },
  { id: "contact", label: "8. Contact Us" },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("intro");

  // scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
       // Optional: Add intersection observer logic here if needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 flex flex-col">
      {/* <Navbar /> */}
      <NavBar darkTheme/>


      {/* --- HERO HEADER --- */}
      <header className="bg-[#003C3C] text-white py-20 px-6">
        <div className="container mx-auto max-w-[1400px]"> 
           <h1 className="text-3xl md:text-6xl font-bold mb-6">
             Terms of Service
           </h1>
           <p className="text-md md:text-xl text-teal-100/80 max-w-3xl">
             Please read these terms carefully. They govern your use of Marlayer's software solutions, gadget sales, and educational services.
           </p>
        </div>
      </header>

      {/* --- MAIN CONTENT LAYOUT --- */}
      <div className="container mx-auto max-w-[1400px] px-4 md:px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          
          {/* --- LEFT SIDEBAR (Sticky Navigation) --- */}
          <aside className="hidden lg:block w-[30%] shrink-0">
            <div className="sticky top-10 h-full max-h-[calc(100vh-80px)] overflow-y-auto pr-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase mb-6 pb-2 border-b border-gray-100">
                Table of Contents
              </h3>
              <nav className="space-y-2 border-l-2 border-gray-100 ml-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`group flex items-center justify-between w-full text-left pl-6 py-3 text-sm font-medium transition-all duration-200 border-l-2 -ml-[2px] ${
                      activeSection === section.id 
                        ? "border-[#003C3C] text-[#003C3C] bg-teal-50/50" 
                        : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
                    }`}
                  >
                    <span>{section.label}</span>
                    {activeSection === section.id && <ChevronRight size={14} className="text-[#003C3C]" />}
                  </button>
                ))}
              </nav>
              
              <div className="mt-10">
                <p className="text-sm font-semibold text-gray-900 mb-2">Have specific questions?</p>
                <a href="mailto:legal@marlayer.com" className="text-sm font-bold text-[#003C3C] border-b border-[#003C3C] pb-0.5 hover:text-teal-700 hover:border-teal-700 transition-colors">
                  Contact Legal Team
                </a>
              </div>
            </div>
          </aside>

          {/* --- RIGHT CONTENT--- */}
          <main className="w-full lg:w-[70%]">
            
            <div className="space-y-16 text-lg text-gray-600 leading-relaxed">
              
              {/* 1. INTRODUCTION */}
              <section id="intro" className="scroll-mt-32">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
                <div className="space-y-4 text-sm md:text-lg">
                  <p>
                    Welcome to <strong>Marlayer</strong>. By accessing our website, engaging our software services, purchasing products, or enrolling in our academy, you agree to be bound by these Terms and Conditions ("Terms").
                  </p>
                  <p>
                    If you do not agree with any part of these terms, you are prohibited from using our services. These terms apply to all visitors, users, and others who access or use the Service.
                  </p>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 2. SERVICES */}
              <section id="services" className="scroll-mt-32">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">2. Scope of Services</h2>
                <p className="mb-6 text-sm md:text-lg">Marlayer operates as a multi-faceted technology provider offering the following services:</p>
                <ul className="list-disc pl-6 space-y-4 marker:text-[#003C3C] text-sm md:text-lg">
                   <li>
                      <strong className="text-gray-900">Software Solutions:</strong> Custom web/app development, API integration, and technical consultancy services.
                   </li>
                   <li>
                      <strong className="text-gray-900">Marlayer Gadgets:</strong> Retail of high-performance laptops, mobile devices, and tech accessories.
                   </li>
                   <li>
                      <strong className="text-gray-900">Marlayer Academy:</strong> Vocational training, coding bootcamps, and career mentorship programs.
                   </li>
                </ul>
              </section>

              <hr className="border-gray-100" />

              {/* 3. PAYMENTS */}
              <section id="payments" className="scroll-mt-32">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">3. Payments & Billing</h2>
                <div className="space-y-6 text-sm md:text-lg">
                  <p>
                    <strong className="text-gray-900 block mb-1">1. Currency</strong>
                    All prices are quoted in Nigerian Naira (NGN) unless otherwise stated. International payments are calculated based on the exchange rate at the time of invoicing.
                  </p>
                  <p>
                    <strong className="text-gray-900 block mb-1">2. Project Deposits</strong>
                    For software projects, a non-refundable deposit (typically 50-70%) is required before work commences. The balance is due upon project completion or milestones.
                  </p>
                  <p>
                    <strong className="text-gray-900 block mb-1">3. Late Payments</strong>
                    Invoices not paid within 7 days of the due date may incur a late fee of 5% or suspension of services until payment is made.
                  </p>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 4. SOFTWARE */}
              <section id="software" className="scroll-mt-32">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">4. Software Development</h2>
                <div className="space-y-6 text-sm md:text-lg">
                   <div>
                     <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2">Ownership</h3>
                     <p>
                       Once you have paid in full, the website or app is <strong>100% yours</strong>. You own the final design and the code. We only retain the right to reuse our standard internal tools (like basic navigation logic) to help us build future projects faster.
                     </p>
                   </div>
                   
                   <div>
                     <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2">Revisions</h3>
                     <p>
                       We want you to be happy with the result, so we include <strong>two (2) of revisions</strong> in the price. This allows you to review the work and request corrections twice. If you need more changes after that, or want to add new features not in the original plan, we will charge an additional fee.
                     </p>
                   </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 5. GADGETS */}
              <section id="gadgets" className="scroll-mt-32">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">5. Gadget Sales Policy</h2>
                
                <div className="space-y-8 text-sm md:text-lg">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Returns & Exchange</h3>
                    <p>
                      Returns are accepted within <strong>7 days</strong> of purchase ONLY for factory defects. We do not accept returns for "change of mind." Items must be returned in their original packaging with all accessories.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Warranty Coverage</h3>
                    <ul className="list-disc pl-6 space-y-3 marker:text-[#003C3C] text-sm md:text-lg">
                       <li>
                          <strong className="text-gray-900">New Devices:</strong> Covered strictly by the manufacturer's global warranty policy. We assist with claims where possible.
                       </li>
                       <li>
                          <strong className="text-gray-900">Pre-Owned(UK Used):</strong> Sold with a 2-week guarantee. This covers system faults only. It does not cover screens cracked after purchase or water damage.
                       </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 6. ACADEMY */}
              <section id="academy" className="scroll-mt-32">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">6. Marlayer Academy</h2>
                <p className="text-sm md:text-lg">
                  Tuition fees for the Academy are <strong>non-refundable</strong> once the course has commenced. Students are expected to adhere to our Code of Conduct. Marlayer reserves the right to dismiss any student found violating these rules without refund. Access to course materials is for the enrolled student only and must not be shared.
                </p>
              </section>

              <hr className="border-gray-100" />

              {/* 7. LIABILITY */}
              <section id="liability" className="scroll-mt-32">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
                <p className="mb-6 text-sm md:text-lg">
                  To the maximum extent permitted by Nigerian law, Marlayer shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our software, gadgets, or training. Our total liability for any claim shall not exceed the amount paid by you for the specific service or product.
                </p>
                <div className="text-gray-900 font-medium text-sm md:text-lg">
                  <strong>Governing Law:</strong> These Terms shall be governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved in the courts of Lagos State.
                </div>
              </section>

              <hr className="border-gray-100" />

              {/* 8. CONTACT */}
              <section id="contact" className="scroll-mt-32 pb-10">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">8. Contact Us</h2>
                <div className="space-y-4 text-sm md:text-lg">
                   <p>If you have any questions about these Terms, please contact us:</p>
                   
                   <div className="mt-4 space-y-2">
                      <p>
                        <span className="font-bold text-gray-900">Email: </span> 
                        <a href="mailto:info@marlayer.com" className="text-[#003C3C] hover:underline">daniel.marlayer@gmail.com</a>
                      </p>
                      <p>
                        <span className="font-bold text-gray-900">Address: </span> 
                        6 Oremeta Street Oregun, Ikeja, Lagos, Nigeria
                      </p>
                      <p>
                        <span className="font-bold text-gray-900">Phone: </span> 
                        08140715723
                      </p>
                   </div>
                </div>
              </section>

            </div>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}