
import Image from "next/image";
import Link from "next/link";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = ({ darkTheme }: { darkTheme?: boolean }) => {


  return (
    <nav className={`navbar ${darkTheme ? "bg-primary text-white" : "bg-white text-primary"} sticky top-0 px-3 lg:px-14 xl:px-28 py-4 z-50`}>
      <div className="navbar-start w-auto">
        <Link href="/" className="flex items-center gap-3">
          <h1 className="font-bold text-xl">Marlayer</h1>
        </Link>
      </div>

      <div className="navbar-end w-auto ml-auto">
        <ul className="menu menu-horizontal px-1 hidden lg:flex gap-8">
          <li>
            <details>
              <summary className="text-md font-semibold">Courses</summary>
              <ul className={`bg-white text-primary rounded-t-none p-2 w-72`}>
                <li><Link href="/learning">Computer Basics</Link></li>
                <li><Link href="/learning">Responsive Web Design</Link></li>
              </ul>
            </details>
          </li>
          <li className="font-semibold"><Link href="/learning">Learning Plans</Link></li>
          <li className="font-semibold"><Link href="/learning/faqs">FAQs</Link></li>
          <li>
            <details>
              <summary className={`text-md font-semibold ${darkTheme ? "bg-primary-2 text-white" : "bg-primary text-white"} rounded-md`}>Register</summary>
              <ul className="rounded-t-none p-2 w-72 bg-white text-primary">
                <li><Link href="/learning">Register as Individual</Link></li>
                <li><Link href="/learning">Register as Company</Link></li>
              </ul>
            </details>
          </li>

          <li className="font-semibold bg-secondary text-white rounded-md"><Link href="/learning">Sign In</Link></li>
        </ul>

        <div className="dropdown dropdown-end lg:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost px-3">

                <Bars3BottomRightIcon className="w-5" />
              </label>
            </div>
            <div className="drawer-side text-lg">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu min-h-full w-80 px-0 py-0 bg-primary text-white text-lg">
                {/* Sidebar content here */}
                <li className="h-16 m-0 flex">
                  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="inline-block ml-auto my-auto">
                    <XMarkIcon className="w-6 text-white p-0" />
                  </label>
                </li>
                <li>
                  <details>
                    <summary className={`font-semibold`}>Courses</summary>
                    <ul className={`rounded-t-none p-2 w-72 bg-white text-primary`}>
                      <li><Link href="/learning">Computer Basics</Link></li>
                      <li><Link href="/learning">Responsive Web Design</Link></li>
                    </ul>
                  </details>
                </li>
                <li className="font-semibold"><Link href="/learning">Learning Plans</Link></li>
                <li className="font-semibold"><Link href="/learning/faqs">FAQs</Link></li>
                <li className="mx-3 max-w-44 mb-3">
                  <details>
                    <summary className={`font-semibold bg-primary-2 text-white rounded-md`}>Register</summary>
                    <ul className={`rounded-t-none p-2 w-72 bg-white text-primary`}>
                      <li><Link href="/learning">Register as Individual</Link></li>
                      <li><Link href="/learning">Register as Company</Link></li>
                    </ul>
                  </details>
                </li>

                <li className="font-semibold bg-secondary text-white rounded-md max-w-44 mx-3"><Link href="/learning">Sign In</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;