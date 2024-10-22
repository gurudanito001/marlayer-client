import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const Footer = ({showScrumMasterLink = false, showqalink = false}: { showScrumMasterLink?: boolean, showqalink?: boolean})=>{

  return(
    <section className="text-white py-8 lg:py-12 bg-primary">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 px-5 lg:px-28 border-t py-8">
        <div>
          <h6 className="text-sm font-550 mb-5">Contact Us</h6>
          <article className="flex items-start mb-4">
            <MapPinIcon className="w-5 text-white" />
            <p className="text-xs ml-4">
              No. 35, Kola Amodu Cres, Magodo, Lagos <br/>
              8 The Green STE A Dover, DE 19901, USA
            </p>
          </article>
          <article className="flex items-start">
            <EnvelopeIcon className="w-5 text-white" />
            <p className="text-xs ml-4">
              <a href="mailto:info@quales.tech">info@quales.tech</a>
            </p>
          </article>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h6 className="text-sm font-550 mb-5">Company</h6>
            <ul className="text-xs flex flex-col gap-2">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/#hiringProcess">How It Works </Link></li>
              <li><Link href="/#reviews">Reviews</Link></li>
              <li><Link href="/learning/faqs">FAQ&apos;s</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="text-sm font-550 mb-5">Support</h6>
            <ul className="text-xs flex flex-col gap-2">
              <li><Link href="/privacyandpolicy">Privacy Policy</Link></li>
              <li>Help</li>
              {showScrumMasterLink && <li><Link href="/learning/scrummaster">Scrum Master Packages</Link></li>}  
              {showqalink && <li><Link href="/learning/softwarequalityassurance">Software Quality Assurance Packages</Link></li>}
              
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

      <p className="text-center mx-5 lg:mx-28 border-t pt-8 text-sm lg:text-lg">
        Copyright © 2024 Quales Consulting. All rights reserved.
      </p>

    </section>
  )
}

export default Footer