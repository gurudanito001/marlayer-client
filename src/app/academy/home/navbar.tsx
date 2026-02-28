
import Image from "next/image";
import Link from "next/link";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({ subsets: ['latin'] });

const NavBar = ({ darkTheme }: { darkTheme?: boolean }) => {
 const logoTeal = "#45B1A0";

  return (
    <nav className={`navbar ${darkTheme ? "bg-primary text-white" : "bg-white text-primary"} shadow-sm py-4 lg:py-4 px-3 md:px-8 lg:px-16 sticky top-0 z-50`}>
      <div className="navbar-start w-auto">
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
      </div>

      <div className="navbar-end w-auto ml-auto">
        <ul className="menu menu-horizontal px-1 hidden lg:flex gap-8">
          <li>
            <details>
              <summary className="text-md font-semibold">Courses</summary>
              <ul className={`bg-white text-primary rounded-t-none p-2 w-72`}>
                <li><Link href="/academy/courses/computer-basics">Computer Fundamentals</Link></li>
                <li><Link href="/academy/courses/responsive-web-design">Responsive Web Design</Link></li>
                <li><Link href="/academy/courses/dynamic-web-development">Dynamic Web Development</Link></li>
                <li><Link href="/academy/courses/backend-development">Backend Development</Link></li>
                <li><Link href="/academy/courses/mobile-app-development">Mobile App Development</Link></li>
              </ul>
            </details>
          </li>
          <li className="font-semibold"><Link href="/academy/plans">Learning Plans</Link></li>
          <li className="font-semibold"><Link href="/academy/faqs">FAQs</Link></li>
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
              <ul className="menu min-h-full w-full px-0 sm:px-5 md:px-10 py-0 bg-neutral text-gray-800 text-lg">
                {/* Sidebar content here */}
                <li className=" m-0 py-5 flex flex-row justify-center">
                  <Link href="/academy" className="flex items-center gap-3">
                    <Image src="/images/marlayer-logo.svg" width={30} height={30} alt="Marlayer Logo" />
                    <span className={`font-bold text-primary text-xl`}>Marlayer Academy</span>
                  </Link>
                  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="inline-block ml-auto my-auto">
                    <XMarkIcon className="h-6 text-gray-800 p-0" />
                  </label>
                </li>
                <li className="mb-2">
                  <details>
                    <summary className={`font-semibold text-lg`}>Courses</summary>
                    <ul className={`rounded-t-none w-full bg-white text-primary ml-0 px-0 py-3`}>
                      <li><Link className="p-4 font-550" href="/academy/courses/computer-basics">Computer Fundamentals</Link></li>
                      <li><Link className="p-4 font-550" href="/academy/courses/responsive-web-design">Responsive Web Design</Link></li>
                      <li><Link className="p-4 font-550" href="/academy/courses/dynamic-web-development">Dynamic Web Development</Link></li>
                      <li><Link className="p-4 font-550" href="/academy/courses/backend-development">Backend Development</Link></li>
                      <li><Link className="p-4 font-550" href="/academy/courses/mobile-app-development">Mobile App Development</Link></li>
                    </ul>
                  </details>
                </li>
                <li className="font-semibold mb-2 text-lg"><Link href="/academy/plans">Learning Plans</Link></li>
                <li className="font-semibold mb-2 text-lg"><Link href="/academy/faqs">FAQs</Link></li>
                
                <li className="flex flex-col mt-auto gap-4 px-3 py-8">
                  {/* <Link className="btn btn-lg font-semibold bg-primary-2 text-white rounded-md" href="/academy/sign-up">Register</Link>
                  <Link className="btn btn-lg font-semibold bg-secondary text-white rounded-md" href="/academy/sign-in">Sign In</Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;