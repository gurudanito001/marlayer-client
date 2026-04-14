import { MapPinIcon, EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0E1F18] text-[#9CAFAA] overflow-hidden">
      
      {/* The Wireframe Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1F18] via-transparent to-[#0E1F18] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1F18] via-transparent to-[#0E1F18] opacity-80"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-28 pt-24 pb-12 flex flex-col min-h-[400px] justify-between">
        
        {/* Top Section: Brand & Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 w-full">
          
          {/* Left Side: Brand Info */}
          <div className="flex flex-col gap-6 max-w-xs xl:max-w-sm">
            <Link href="/" className="flex items-baseline">
              <div className="">
                <Image src="/images/marlayer-logo.svg" width={24} height={24} alt="Marlayer Logo" />
              </div>
              <span
                className="font-extrabold text-2xl ml-0.5"
                style={{ color: '#45B1A0' }}
              >
                ARLAYER
              </span>
            </Link>
            <p className="text-[15px] leading-relaxed font-light">
              Empowering the next generation of tech innovators through world-class education.
            </p>
          </div>

          {/* Right Side: Columns Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24 w-full lg:w-auto">
            
            {/* Top Courses Column */}
            <div className="flex flex-col gap-6">
              <h6 className="text-white text-base font-medium">Top Courses</h6>
              <ul className="flex flex-col gap-5 text-[15px] font-light">
                <li><Link href="/academy/courses/computer-basics" className="hover:text-white transition-colors duration-200">Computer Fundamentals</Link></li>
                <li><Link href="/academy/courses/frontend-development-1" className="hover:text-white transition-colors duration-200">Frontend Development: 1</Link></li>
                <li><Link href="/academy/courses/javascript" className="hover:text-white transition-colors duration-200">JavaScript</Link></li>
                <li><Link href="/academy/courses/frontend-development-2" className="hover:text-white transition-colors duration-200">Frontend Development: 2</Link></li>
                <li><Link href="/academy/courses/backend-development" className="hover:text-white transition-colors duration-200">Backend Development</Link></li>
                <li><Link href="/academy/courses/c-sharp" className="hover:text-white transition-colors duration-200">C#</Link></li>
                <li><Link href="/academy/courses/mobile-app-development" className="hover:text-white transition-colors duration-200">Mobile App Development</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-6">
              <h6 className="text-white text-base font-medium">Company</h6>
              <ul className="flex flex-col gap-5 text-[15px] font-light">
                <li><Link href="/academy" className="hover:text-white transition-colors duration-200">Tech Academy</Link></li>
                <li><Link href="/software" className="hover:text-white transition-colors duration-200">Software Solutions</Link></li>
                <li><Link href="/gadgets" className="hover:text-white transition-colors duration-200">Flagship Gadgets</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
              <h6 className="text-white text-base font-medium">Contact Us</h6>
              <ul className="flex flex-col gap-5 text-[15px] font-light">
                <li className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
                  <span className="leading-snug">6 Oremeta Street Oregun, Ikeja, Lagos</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
                  <span className="leading-snug">12 Jogunosimi Street Alausa, Ikeja, Lagos</span>
                </li>
                <li className="flex items-center gap-3">
                  <EnvelopeIcon className="w-5 h-5 text-white/50 shrink-0" />
                  <a href="mailto:daniel.marlayer@gmail.com" className="hover:text-white transition-colors duration-200">
                    daniel.marlayer@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <PaperAirplaneIcon className="w-5 h-5 text-white/50 shrink-0" />
                  <Link href="/contact" className="hover:text-white transition-colors duration-200">
                    Contact Sales Team
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="mt-24 flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
          <p className="text-sm font-light text-[#9CAFAA]/60">
            Copyright © {currentYear} Marlayer Academy. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <Link
              href="https://x.com/marlayer"
              target="_blank"
              className=" rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              {/* Assuming x.svg is white/transparent. If not, you might need a CSS filter or a different icon */}
              <Image src="/images/x.svg" width={36} height={36} alt="X (Twitter)" className="opacity-80 hover:opacity-100" />
            </Link>
            <Link
              href="https://x.com/marlayer"
              target="_blank"
              className=" rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              {/* Assuming x.svg is white/transparent. If not, you might need a CSS filter or a different icon */}
              <Image src="/images/facebook.svg" width={36} height={36} alt="Facebook" className="opacity-80 hover:opacity-100" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/marlayer/"
              target="_blank"
              className=" rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              {/* Assuming x.svg is white/transparent. If not, you might need a CSS filter or a different icon */}
              <Image src="/images/linkedIn.svg" width={36} height={36} alt="LinkedIn" className="opacity-80 hover:opacity-100" />
            </Link>
            <Link
              href="https://www.instagram.com/marlayers/s/"
              target="_blank"
              className=" rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              {/* Assuming x.svg is white/transparent. If not, you might need a CSS filter or a different icon */}
              <Image src="/images/instagram.svg" width={36} height={36} alt="Instagram" className="opacity-80 hover:opacity-100" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;