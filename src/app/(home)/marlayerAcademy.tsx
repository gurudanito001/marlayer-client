// components/CloudServicesSection.tsx
"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MarlayerAcademy: React.FC = () => {
  return (
    <section className="sm:px-5 xl:px-20 pb-28 bg-neutral-100">

      <div className="lg:bg-[url('/images/homepage/academy-banner.jpg')] rounded-sm bg-cover bg-center bg-no-repeat">

        <article className="flex flex-col py-14 lg:py-56 px-5 xl:pl-14 lg:bg-gradient-to-r lg:from-overlay lg:to-transparent">
          
          <div className="relative w-full lg:hidden mb-6 rounded-md overflow-hidden shadow-sm aspect-video">
             <Image 
               src="/images/homepage/academy-banner.jpg" 
               className="rounded-md" 
               fill 
               style={{ objectFit: "cover" }} 
               alt="computer basics" 
             />
          </div>

          {/* TEXT CONTENT */}
          <h2 className="text-sm md:text-lg font-semibold text-black lg:text-white mb-3 max-w-52">
            Marlayer Academy
          </h2>
          
          {/* Removed mt-auto so this sits directly under the H2 above */}
          <h3 className="text-xl md:text-3xl xl:text-4xl font-extrabold text-black lg:text-white max-w-600">
            Shaping Next-Gen Innovators
          </h3>

          <p className="md:text-xl font-normal mt-4 text-gray-700 lg:text-gray-100 max-w-550 xl:max-w-600"> 
            We prepare students for the new tech age, empowering them to be innovators who solve real-world problems and bridge societal gaps with their skills.
          </p>

          <div className="mt-7">
            <Link href="/learning" className="btn bg-secondary text-white w-full max-w-40 mx-0 border-0">
              Learn More
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MarlayerAcademy;