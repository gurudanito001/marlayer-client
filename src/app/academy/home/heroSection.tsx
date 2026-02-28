"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/solid";




const HeroSection = ()=>{

  const backToTop = () =>{
    if(window){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }

  return(
    <section id="heroSection" className=" bg-primary md:bg-[url('/images/afro-girl.JPG')] bg-cover bg-center bg-no-repeat bg-overlay h-screen max-h-600 md:max-h-800">
      <figure className=" md:w-3/4 lg:w-3/5 mb-10 md:mb-0 h-full flex md:pl-5 xl:pl-28 bg-gradient-to-r from-overlay to-transparent">
        <div className=" my-auto md:my-0 md:mt-auto md:mb-28 px-5 md:px-0">
          <h1 className=" text-3xl md:text-5xl lg:text-6xl text-white font-extrabold">Unlock </h1>
          <h1 className=" text-3xl md:text-5xl lg:text-6xl text-white font-extrabold">your <span className=" text-primary-2 md:text-primary">potential</span></h1>
          <h1 className=" text-3xl md:text-5xl lg:text-6xl text-white font-extrabold"><span className="text-secondary">through</span> learning</h1>

          <p className=" text-sm md:text-2xl mt-7 max-w-2xl text-white font-normal">Explore a world of knowledge with engaging courses designed to inspire and empower your growth.</p>


          <div className="mt-5">
            <Link href="/academy/sign-up" className="btn btn-md md:btn-lg bg-primary-2 md:bg-primary text-white border-primary shadow-sm rounded-lg px-6 md:px-10">Register Now</Link>
          </div>
        </div>

      </figure>

    </section>
  )
}

export default HeroSection;


