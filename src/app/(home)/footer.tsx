import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import ComingSoonModal from "../components/comingSoon";

const Footer = ({showScrumMasterLink = false, showqalink = false}: { showScrumMasterLink?: boolean, showqalink?: boolean})=>{
  const currentYear = new Date().getFullYear();

  return(
    <footer className="bg-neutral text-gray-600 py-8 lg:py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-5">
           <p className="text-sm leading-relaxed max-w-xs">
             Empowering the next generation of tech innovators and building robust software solutions.
           </p>
           <div className="flex gap-4 mt-2">
              <Link href="https://x.com/marlayer" target="_blank">
                <Image src="/images/x.svg" width={40} height={40} alt="X (Twitter)" />
              </Link>
           </div>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-gray-900 font-semibold mb-5">Services</h6>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/academy" className="hover:text-gray-900 transition-colors duration-200">Academy</Link></li>
            <li><Link href="/Software" className="hover:text-gray-900 transition-colors duration-200">Software</Link></li>
            <li><Link href="/gadgets" className="hover:text-gray-900 transition-colors duration-200">Gadgets</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-gray-900 font-semibold mb-5">Company</h6>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/academy/faqs" className="hover:text-gray-900 transition-colors duration-200">FAQs</Link></li>
            <li><Link href="/privacyandpolicy" className="hover:text-gray-900 transition-colors duration-200">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className="text-gray-900 font-semibold mb-5">Contact Us</h6>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPinIcon className="w-5 h-5 text-gray-500 mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1">
                <p>6 Oremeta Street Oregun, Ikeja, Lagos</p>
                <p>12 Jogunosimi Street Alausa, Ikeja, Lagos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-5 h-5 text-gray-500 shrink-0" />
              <a href="mailto:daniel.marlayer@gmail.com" className="hover:text-gray-900 transition-colors duration-200">daniel.marlayer@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
        <p>Copyright © {currentYear} Marlayer. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer