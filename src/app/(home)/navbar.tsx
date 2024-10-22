
import Image from "next/image";
import Link from "next/link";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = () => {


  return (
    <nav className="navbar bg-white text-primary px-3 lg:px-28 sticky top-0 shadow-sm z-50">
      <div className="navbar-start w-auto">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.svg" className="" alt="Quales Consulting LOGO" width={50} height={50} />
        </Link>
      </div>

      <div className="navbar-end w-auto ml-auto">
        <ul className="menu menu-horizontal px-1 hidden md:flex gap-8">
          <li><Link href="/learning">Quales Academy</Link></li>
          <li><Link href="/usecases">Use Cases</Link></li>
          <li><Link href="/thought-leadership">Thought Leadership</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
        </ul>

        <div className="dropdown dropdown-end md:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost px-3">
                
                  <Bars3BottomRightIcon className="w-5" />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu min-h-full w-80 px-0 py-0 bg-primary text-white">
                {/* Sidebar content here */}
                <li className="h-16 m-0 flex px-5"> 
                  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="inline-block ml-auto my-auto">
                    <XMarkIcon className="w-6 text-white p-0" />
                  </label>
                  
                </li>
                <li><Link href="/learning" className="py-3 px-5 text-lg">Quales Academy</Link></li>
                <li><Link href="/usecases" className="py-3 px-5 text-lg" >Use Cases</Link></li>
                <li><Link href="/thought-leadership" className="py-3 px-5 text-lg">Thought Leadership</Link></li>
                <li><Link href="/about-us" className="py-3 px-5 text-lg">About Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;