// components/NavBar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import ComingSoonModal from "../components/comingSoon";
import { DM_Sans, Poppins } from "next/font/google";

// Font configurations
const dmSans = DM_Sans({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Varied weights for logo/headings
});

const NavBar = () => {
  const logoTeal = "#45B1A0"; // Adjust this hex if you need a specific shade of teal

  return (
    <nav className="bg-white shadow-sm py-4 lg:py-6 px-0 md:px-8 lg:px-16 sticky top-0 z-50">
      <div className="container flex justify-between items-center mx-auto">
        
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-baseline ml-3">
            <div className="">
             <Image src="/images/marlayer-logo.svg" width={24} height={24} alt="Marlayer Logo" />
            </div>
            <span 
              className="font-extrabold text-2xl"
              style={{ color: logoTeal }}
            >
              ARLAYER
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/learning" 
              className="hover:text-gray-900 font-medium text-gray-600 transition-colors duration-200 py-1 text-[15px] border-b-2 border-transparent hover:border-gray-800"
            >
              Academy
            </Link>
  
            <Link 
              href="/Software" 
              className="hover:text-gray-900 font-medium text-gray-600 transition-colors duration-200 py-1 text-[15px] border-b-2 border-transparent hover:border-gray-800"
            >
              Software
            </Link>
  
            <Link 
              href="/Gadget" 
              className="hover:text-gray-900 font-medium text-gray-600 transition-colors duration-200 py-1 text-[15px] border-b-2 border-transparent hover:border-gray-800"
            >
              Gadgets
            </Link>
          </div>
        </div>
        
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-md z-10 mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <Link href="/learning" className="py-2">Academy</Link>
              </li>
              <li>
                <ComingSoonModal 
                  linkText="Software" 
                  linkClasses="py-2" 
                  btnClasses="bg-secondary border-secondary min-w-40" 
                  modalTitle="Bespoke Software page is under maintenance" 
                  modalDescription="If you need this service and want to discuss about building a software solution, send an email to daniel.marlayer@gmail.com" 
                  modalImage="software-meeting.jpg" 
                />
              </li>
              <li>
                <Link href="/Gadget" className="py-2">Gadgets</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;