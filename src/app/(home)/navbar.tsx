
import Image from "next/image";
import Link from "next/link";
import ComingSoonModal from "../components/comingSoon";
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({ subsets: ['latin'] });

const NavBar = () => {


  return (
    <nav className="bg-white shadow-sm py-1 lg:py-2 px-0 md:px-8 lg:px-16 sticky top-0 z-50">
      <div className="container flex justify-between">
        <div className="flex items-center space-x-8">
          {/* Marlayer Logo/Brand Name */}
          <Link href="/" className="flex items-center gap-3 ml-3">
            <Image src="/images/marlayer-logo.svg" width={30} height={30} alt="Marlayer Logo" />
            <span className={`font-bold text-primary text-xl`}>Marlayer</span>
          </Link>
          {/* Desktop Navigation Links - Hidden on small screens */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/learning" className="hover:text-gray-600 font-medium transition-colors duration-200 py-1 text-sm border-b-white border-b-2 hover:border-b-gray-800">Academy</Link>
  
            <ComingSoonModal linkText="Software" linkClasses="hover:text-gray-600 font-medium transition-colors duration-200 py-1 text-sm border-b-white border-b-2 hover:border-b-gray-800" btnClasses="bg-secondary border-secondary min-w-40" modalTitle="Bespoke Software page is under maintanence" modalDescription="If you need this service and want to discuss about building a software solution, send an email to daniel.marlayer@gmail.com" modalImage="software-meeting.jpg" />
  
            <ComingSoonModal linkText="Gadgets" linkClasses="hover:text-gray-600 font-medium transition-colors duration-200 py-1 text-sm border-b-white border-b-2 hover:border-b-gray-800" btnClasses="bg-sky-800 border-sky-800 min-w-40" modalTitle="Marlayer Cloud is Coming Soon ..." modalDescription="Marlayer Cloud is currently under development, meticulously crafted to bring you the most robust and seamless solutions. We&apos;re building something truly powerful!" modalImage="cloud-services.jpg" />
          </div>
          {/* Right-aligned icons (Search, Cart, User) - simplified for this example */}
          {/* <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
              <span className="badge badge-xs bg-primary rounded-full indicator-item"></span>
            </div>
          </button> */}


        </div>
        
        <div className="flex items-center">
          {/* Mobile Menu Button (Hamburger Icon) - uses DaisyUI's btn-ghost */}
          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-sm z-1 mt-1 w-screen p-2 shadow">
              <li>
                <Link href="/learning" className="hover:text-gray-600 font-medium transition-colors duration-200 py-1 text-sm border-b-white border-b-2 hover:border-b-gray-800">Academy</Link>
              </li>

              <li>
                <ComingSoonModal linkText="Software" linkClasses="hover:text-gray-600 font-medium transition-colors duration-200 py-1 text-sm border-b-white border-b-2 hover:border-b-gray-800" btnClasses="bg-secondary border-secondary min-w-40" modalTitle="Bespoke Software page is under maintanence" modalDescription="If you need this service and want to discuss about building a software solution, send an email to daniel.marlayer@gmail.com" modalImage="software-meeting.jpg" />
              </li>

              <li>
                <ComingSoonModal linkText="Gadgets" linkClasses="hover:text-gray-600 font-medium transition-colors duration-200 py-1 text-sm border-b-white border-b-2 hover:border-b-gray-800" btnClasses="bg-sky-800 border-sky-800 min-w-40" modalTitle="Marlayer Cloud is Coming Soon ..." modalDescription="Marlayer Cloud is currently under development, meticulously crafted to bring you the most robust and seamless solutions. We&apos;re building something truly powerful!" modalImage="cloud-services.jpg" />
              </li>
            </ul>
          </div>



        </div>
      </div>
    </nav>
  )
}

export default NavBar;