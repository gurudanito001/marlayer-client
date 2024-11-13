import { MapPinIcon, EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ['latin'] });

const Footer = ({showScrumMasterLink = false, showqalink = false}: { showScrumMasterLink?: boolean, showqalink?: boolean})=>{

  return(
    <section className="text-white py-8 lg:py-12 bg-primary">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 px-5 xl:px-28 border-t py-8">
        <div>
          <h6 className="text-sm font-semibold mb-5">Contact Us</h6>
          <article className="flex items-start mb-3">
            <MapPinIcon className="w-5 text-white" />
            <p className="text-xs ml-4">
              No. 12 Jogunosimi street Alausa, Ikeja, Lagos <br/>
              {/* 8 The Green STE A Dover, DE 19901, USA */}
            </p>
          </article>
          <article className="flex items-start mb-3">
            <EnvelopeIcon className="w-5 text-white" />
            <p className="text-xs ml-4">
              <a href="mailto:daniel.marlayer@gmail.com">daniel.marlayer@gmail.com</a>
            </p>
          </article>
          <article className="flex items-start">
            <PaperAirplaneIcon className="w-5 text-white" />
            <p className="text-xs ml-4">
              <Link href="/learning/contact-sales">Contact Sales Team</Link>
            </p>
          </article>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h6 className="text-sm font-semibold mb-5">Top Courses</h6>
            <ul className="text-xs flex flex-col gap-4">
              <li><Link href="/learning/courses/computer-basics">Computer Fundamentals</Link></li>
              <li><Link href="/learning/courses/responsive-web-design">Responsive Web Design </Link></li>
              <li><Link href="/learning/courses/dynamic-web-development">Dynamic Web Development</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="text-sm font-semibold mb-5">Company</h6>
            <ul className="text-xs flex flex-col gap-2">
              <li><Link href="/learning/plans">Learning Plans</Link></li>
              <li><Link href="/learning/faqs">FAQs</Link></li>
              
            </ul>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <Link href="https://www.instagram.com/quales.tech/" target="_blank" className="ml-auto"><Image src="/images/instagram.svg" width={40} height={40} alt="Instagram Icon" /></Link>
          <Link href="https://www.linkedin.com/company/qualestech/" target="_blank"><Image src="/images/linkedIn.svg" width={40} height={40} alt="LinkedIn Icon" /></Link>
          <Link href="https://web.facebook.com/profile.php?id=100093641419212" target="_blank"><Image src="/images/facebook.svg" width={40} height={40} alt="Facebook Icon" /></Link>
          <Link href="https://x.com/Qualestech_" target="_blank"><Image src="/images/x.svg" width={40} height={40} alt="X Icon" /></Link>
          <Link href="" target="_blank" className="mr-auto lg:mr-0"><Image src="/images/thread.svg" width={35} height={35} alt="Thread Icon" /></Link>
        </div>
      </div>

      <div className="flex items-center text-center mx-5 lg:mx-28 border-t pt-8 text-sm ">
        <p className="mx-auto flex items-center">
          Copyright &copy; {new Date().getFullYear()} <Link href="/learning" className="flex items-center gap-2 px-3">
          <Image src="/images/marlayer-logo.svg" width={20} height={20} alt="Marlayer Logo"/>
          <h1 className={`font-extrabold ${dmSans.className}`}>Marlayer Academy.</h1>
        </Link> All rights reserved.
        </p>
        
      </div>

    </section>
  )
}

export default Footer