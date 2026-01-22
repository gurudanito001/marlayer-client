import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
// import ComingSoonModal from "../components/comingSoon"; // Keep if you need it

interface FooterProps {
  showScrumMasterLink?: boolean;
  showqalink?: boolean;
  theme?: "light" | "dark";
}

const Footer = ({
  showScrumMasterLink = false,
  showqalink = false,
  theme = "light",
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const isDark = theme === "dark";

  const containerClasses = isDark 
    ? "bg-[#003C3C] text-teal-100 border-t border-teal-800" 
    : "bg-neutral text-gray-600 border-t border-gray-200";

  const headingClasses = isDark 
    ? "text-white font-semibold mb-5" 
    : "text-gray-900 font-semibold mb-5";

  const linkHoverClasses = isDark 
    ? "hover:text-white transition-colors duration-200" 
    : "hover:text-gray-900 transition-colors duration-200";

  const iconClasses = isDark 
    ? "w-5 h-5 text-teal-400 mt-0.5 shrink-0" 
    : "w-5 h-5 text-gray-500 mt-0.5 shrink-0";
  
  const copyrightBorderClass = isDark 
    ? "border-teal-800 text-teal-100/60" 
    : "border-gray-200 text-gray-600";

  return (
    <footer className={`${containerClasses} py-8 lg:py-12 transition-colors duration-300`}>
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div className="flex flex-col gap-5">
           <p className="text-sm leading-relaxed max-w-xs opacity-90">
             Empowering the next generation of tech innovators and building robust software solutions.
           </p>
           <div className="flex gap-4 mt-2">
              <Link href="https://x.com/marlayer" target="_blank">
                <Image src="/images/x.svg" width={40} height={40} alt="X (Twitter)" className={isDark ? "invert" : ""} />
              </Link>
           </div>
        </div>

        {/* Services */}
        <div>
          <h6 className={headingClasses}>Services</h6>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/academy" className={linkHoverClasses}>Academy</Link></li>
            <li><Link href="/Software" className={linkHoverClasses}>Software</Link></li>
            <li><Link href="/gadgets" className={linkHoverClasses}>Gadgets</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className={headingClasses}>Company</h6>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/academy/faqs" className={linkHoverClasses}>FAQs</Link></li>
            <li><Link href="/privacyandpolicy" className={linkHoverClasses}>Privacy Policy</Link></li>
            {showScrumMasterLink && <li><Link href="#" className={linkHoverClasses}>Scrum Master</Link></li>}
            {showqalink && <li><Link href="#" className={linkHoverClasses}>QA</Link></li>}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className={headingClasses}>
            <Link href="/contactUs" className={linkHoverClasses}>Contact Us</Link>
          </h6>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPinIcon className={iconClasses} />
              <div className="flex flex-col gap-1 opacity-90">
                <p>6 Oremeta Street Oregun, Ikeja, Lagos</p>
                <p>12 Jogunosimi Street Alausa, Ikeja, Lagos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <EnvelopeIcon className={iconClasses} />
              <a href="mailto:daniel.marlayer@gmail.com" className={linkHoverClasses}>daniel.marlayer@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className={`container mx-auto px-6 lg:px-16 mt-8 pt-8 border-t ${copyrightBorderClass} text-center text-sm`}>
        <p>Copyright © {currentYear} Marlayer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;