"use client";

import {
  MapPinIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-12 pb-8 text-sm text-gray-600 relative overflow-hidden">
      
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #45B1A0 1px, transparent 1px), linear-gradient(to bottom, #45B1A0 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">

          {/* Brand & Description */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/marlayer-logo.svg"
                width={28}
                height={28}
                alt="Marlayer Logo"
              />
              <span className="text-2xl font-extrabold text-[#45B1A0]">
                ARLAYER
              </span>
            </Link>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-600">
              Your trusted destination for premium gadgets, accessories and
              enterprise technology solutions.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-12 w-full lg:w-auto">
            
            {/* Categories */}
            <div>
              <h5 className="text-gray-900 font-bold mb-5 tracking-wide">
                Shop Categories
              </h5>
              <ul className="space-y-3">
                <li>
                  <Link href="/gadgets/laptops" className="hover:text-[#45B1A0] transition-colors">
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link href="/gadgets/phones" className="hover:text-[#45B1A0] transition-colors">
                    Phones
                  </Link>
                </li>
                <li>
                  <Link href="/gadgets/accessories" className="hover:text-[#45B1A0] transition-colors">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="/gadgets" className="hover:text-[#45B1A0] transition-colors">
                    All Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="text-gray-900 font-bold mb-5 tracking-wide">
                Company
              </h5>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms-of-service" className="hover:text-[#45B1A0] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#45B1A0] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#45B1A0] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/software/projects" className="hover:text-[#45B1A0] transition-colors">
                    Software Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h5 className="text-gray-900 font-bold mb-5 tracking-wide">
                Contact Us
              </h5>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <MapPinIcon className="w-5 h-5 text-[#45B1A0] mt-0.5 shrink-0" />
                  <span className="group-hover:text-[#45B1A0] transition-colors leading-relaxed">
                    6 Oremeta Street,
                    <br />
                    Oregun, Ikeja, Lagos.
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <EnvelopeIcon className="w-5 h-5 text-[#45B1A0] shrink-0" />
                  <a href="mailto:daniel.marlayer@gmail.com" className="group-hover:text-[#45B1A0] transition-colors">
                    daniel.marlayer@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <PaperAirplaneIcon className="w-5 h-5 text-[#45B1A0] shrink-0" />
                  <Link href="/contact" className="group-hover:text-[#45B1A0] transition-colors">
                    Contact Sales Team
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          
          <p className="text-sm text-gray-500">
            Copyright © {currentYear} Marlayer. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <Link
              href="https://x.com/marlayer"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#071A10] hover:bg-[#45B1A0] transition-colors shadow-sm"
            >
              <Image src="/images/x.svg" width={16} height={16} alt="X" />
            </Link>

            <Link
              href="https://facebook.com/marlayer"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#071A10] hover:bg-[#45B1A0] transition-colors shadow-sm"
            >
              <Image src="/images/facebook.svg" width={16} height={16} alt="Facebook" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/marlayer/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#071A10] hover:bg-[#45B1A0] transition-colors shadow-sm"
            >
              <Image src="/images/linkedIn.svg" width={16} height={16} alt="LinkedIn" />
            </Link>

            <Link
              href="https://instagram.com/marlayers"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#071A10] hover:bg-[#45B1A0] transition-colors shadow-sm"
            >
              <Image src="/images/instagram.svg" width={16} height={16} alt="Instagram" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;