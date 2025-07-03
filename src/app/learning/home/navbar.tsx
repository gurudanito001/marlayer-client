
import Image from "next/image";
import Link from "next/link";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({ subsets: ['latin'] });

const NavBar = ({ darkTheme }: { darkTheme?: boolean }) => {


  return (
    <nav className={`navbar ${darkTheme ? "bg-primary text-white" : "bg-white text-primary"} sticky top-0 px-5 lg:px-14 xl:px-28 py-4 z-50`}>
      <div className="navbar-start w-auto">
        <Link href="/learning" className="flex items-center gap-3">
          <Image src="/images/marlayer-logo.svg" width={40} height={40} alt="Marlayer Logo"/>
          <h1 className={`font-extrabold text-xl ${dmSans.className}`}>Marlayer Academy</h1>
        </Link>
      </div>

      <div className="navbar-end w-auto ml-auto">
        <ul className="menu menu-horizontal px-1 hidden lg:flex gap-8">
          <li>
            <details>
              <summary className="text-md font-semibold">Courses</summary>
              <ul className={`bg-white text-primary rounded-t-none p-2 w-72`}>
                <li><Link href="/learning/courses/computer-basics">Computer Fundamentals</Link></li>
                <li><Link href="/learning/courses/responsive-web-design">Responsive Web Design</Link></li>
                <li><Link href="/learning/courses/dynamic-web-development">Dynamic Web Development</Link></li>
              </ul>
            </details>
          </li>
          <li className="font-semibold"><Link href="/learning/plans">Learning Plans</Link></li>
          <li className="font-semibold"><Link href="/learning/faqs">FAQs</Link></li>

          <li className={`font-semibold ${darkTheme ? "bg-primary-2": "bg-primary"} text-white rounded-md`}><Link href="/learning/sign-up">Register</Link></li>

          <li className="font-semibold bg-secondary text-white rounded-md"><Link href="/learning/sign-in">Sign In</Link></li>
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
              <ul className="menu min-h-full w-full px-0 sm:px-5 md:px-10 py-0 bg-primary text-white text-lg">
                {/* Sidebar content here */}
                <li className=" m-0 py-5 flex flex-row justify-center">
                  <Link href="/learning" className="flex items-center gap-3">
                    <Image src="/images/marlayer-logo.svg" width={40} height={40} alt="Marlayer Logo" />
                    <h1 className={`font-extrabold text-xl ${dmSans.className}`}>Marlayer Academy</h1>
                  </Link>
                  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="inline-block ml-auto my-auto">
                    <XMarkIcon className="h-6 text-white p-0" />
                  </label>
                </li>
                <li className="mb-2">
                  <details>
                    <summary className={`font-semibold text-xl`}>Courses</summary>
                    <ul className={`rounded-t-none w-full bg-white text-primary ml-0 px-0 py-3`}>
                      <li><Link className="p-4 font-550" href="/learning/courses/computer-basics">Computer Fundamentals</Link></li>
                      <li><Link className="p-4 font-550" href="/learning/courses/responsive-web-design">Responsive Web Design</Link></li>
                      <li><Link className="p-4 font-550" href="/learning/courses/dynamic-web-development">Dynamic Web Development</Link></li>
                    </ul>
                  </details>
                </li>
                <li className="font-semibold mb-2 text-xl"><Link href="/learning/plans">Learning Plans</Link></li>
                <li className="font-semibold mb-2 text-xl"><Link href="/learning/faqs">FAQs</Link></li>
                
                <li className="flex flex-col mt-auto gap-4 px-3 py-8">
                  <Link className="btn btn-lg font-semibold bg-primary-2 text-white rounded-md" href="/learning/sign-up">Register</Link>
                  <Link className="btn btn-lg font-semibold bg-secondary text-white rounded-md" href="/learning/sign-in">Sign In</Link>
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