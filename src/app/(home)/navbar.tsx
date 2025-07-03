
import Image from "next/image";
import Link from "next/link";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({ subsets: ['latin'] });

const NavBar = () => {


  return (
    <nav className="bg-white shadow-sm py-1 lg:py-2 px-4 md:px-8 lg:px-16 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Marlayer Logo/Brand Name */}
        <Link href="/learning" className="flex items-center gap-3">
          <Image src="/images/marlayer-logo.svg" width={30} height={30} alt="Marlayer Logo"/>
          <h1 className={`font-bold text-gray-600 text-xl`}>Marlayer</h1>
        </Link>
        {/* Desktop Navigation Links - Hidden on small screens */}
        <div className="hidden lg:flex flex-grow justify-center space-x-8">
          <Link href="/learning" className="hover:text-gray-600 font-medium transition-colors duration-200 py-1 text-sm border-b-white border-b-2 hover:border-b-gray-800">Academy</Link>
          <a href="#" className="hover:text-gray-600 font-medium transition-colors duration-200 py-1 text-sm border-b-white border-b-2 hover:border-b-gray-800">Cloud Services</a>
          <a href="#" className="hover:text-gray-600 font-medium transition-colors duration-200 py-1 text-sm border-b-white border-b-2 hover:border-b-gray-800">Bespoke Software</a>
        </div>
        {/* Right-aligned icons (Search, Cart, User) - simplified for this example */}
        <div className="flex items-center space-x-4">
          <button className="btn btn-ghost btn-circle rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          {/* Mobile Menu Button (Hamburger Icon) - uses DaisyUI's btn-ghost */}
          <button className="lg:hidden btn btn-ghost btn-circle rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;