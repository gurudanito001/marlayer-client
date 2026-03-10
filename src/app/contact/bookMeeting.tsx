"use client";

import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

export default function CtaSection() {
  // Format: https://wa.me/<country-code><number> without + or spaces
  const whatsappLink = "https://wa.me/2348140715723?text=Hello%20Marlayer,%20I%20would%20like%20to%20discuss%20about%20a%20project.";

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", { 
        theme: "light", 
        // This injects your brand's forest green into the Cal.com UI!
        styles: { branding: { brandColor: "#0A4731" } }, 
        hideEventTypeDetails: false, 
        layout: "month_view" 
      });
    })();
  }, []);

  return (
    <section className="w-full bg-[#F2F8F6] py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#11241E] mb-5 tracking-tight">
          Turn your vision into reality
        </h2>
        
        {/* Subheading */}
        <p className="text-[#4A5E57] text-lg mb-10">
          Book a meeting and choose a time for us to discuss your project, or drop us a quick message on WhatsApp to get started immediately.
        </p>
        
        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary Button: Triggers the Cal.com Modal */}
          <button 
            data-cal-link="marlayer/consulting" // Make sure this matches your exact Cal.com slug!
            data-cal-config='{"layout":"month_view"}'
            className="w-full sm:w-auto bg-[#0A4731] hover:bg-[#073624] text-white font-medium px-8 py-3.5 rounded-[14px] transition-colors duration-200 flex items-center justify-center"
          >
            Book a meeting
          </button>

          {/* Secondary Button: WhatsApp */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent border border-[#0A4731] text-[#0A4731] hover:bg-[#0A4731] hover:text-white font-medium px-8 py-3.5 rounded-[14px] transition-all duration-200 flex items-center justify-center"
          >
            Chat on WhatsApp
          </a>
          
        </div>
      </div>
    </section>
  );
}