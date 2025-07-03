import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const Footer = ({showScrumMasterLink = false, showqalink = false}: { showScrumMasterLink?: boolean, showqalink?: boolean})=>{

  return(
    <section className="text-gray-600 py-8 lg:py-12 bg-neutral">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 px-5 xl:px-28 border-t py-8">
        <div>
          <h6 className="text-sm font-550 mb-5">Contact Us</h6>
          <article className="flex items-start mb-4">
            <MapPinIcon className="w-5 text-gray-600" />
            <p className="text-xs ml-4">
              6 Oremeta Street Oregun, Ikeja, Lagos <br/>
              12 Jogunosimi Street Alausa, Ikeja, Lagos
            </p>
          </article>
          <article className="flex items-start">
            <EnvelopeIcon className="w-5 text-gray-600" />
            <p className="text-xs ml-4">
              <a href="mailto:daniel.marlayer@gmail.com">daniel.marlayer@gmail.com</a>
            </p>
          </article>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h6 className="text-sm font-550 mb-5">Company</h6>
            <ul className="text-xs flex flex-col gap-2">
              <li><Link href="/">About Us</Link></li>
              <li><Link href="/">How It Works </Link></li>
              <li><Link href="/">Reviews</Link></li>
              <li><Link href="/">FAQ&apos;s</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="text-sm font-550 mb-5">Support</h6>
            <ul className="text-xs flex flex-col gap-2">
              <li><Link href="/privacyandpolicy">Privacy Policy</Link></li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <Link href="https://x.com/marlayer" target="_blank"><Image src="/images/x.svg" width={40} height={40} alt="X Icon" /></Link>
        </div>
      </div>

      <p className="text-center mx-5 lg:mx-28 border-t pt-8 text-sm lg:text-lg">
        Copyright © {new Date().getFullYear()}  Marlayer. All rights reserved.
      </p>

    </section>
  )
}

export default Footer