// components/CloudServicesSection.tsx
"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MarlayerAcademy: React.FC = () => {
  const primaryColor = '#003C3C';
  return (
    <section className="sm:px-5 xl:px-20 pb-28 bg-neutral-100">

      <div className="lg:bg-[url('/images/homepage/academy-banner.jpg')] rounded-sm bg-cover lg:bg-top bg-no-repeat">
     {/*  <div className="lg:bg-[url('/images/homepage/academy-banner.jpg')] rounded-sm bg-cover lg:bg-top bg-no-repeat"> */}

        <article className="flex flex-col py-14 lg:py-36 px-5 xl:pl-14 lg:bg-gradient-to-r lg:from-overlay lg:to-transparent">
          <div className="relative w-full h-[500px] lg:hidden mb-6 rounded-md overflow-hidden shadow-sm">
          <Image src="/images/homepage/academy-banner.jpg" className="lg:hidden mb-3 rounded-md w-full max-w-800 my-5" width={400} height={250} objectFit="contain" alt="computer basics" />
          </div>
          <h2 className="text-sm md:text-lg font-semibold text-black lg:text-white mb-5 max-w-52">Marlayer Academy</h2>
          <h3 className="text-3xl xl:text-4xl font-extrabold mt-auto text-black lg:text-white max-w-600">Shaping Next-Gen Innovators</h3>

          <p className="md:text-xl font-normal mt-4 text-gray-700 lg:text-gray-100 max-w-550 xl:max-w-600"> We prepare students for the new tech age, empowering them to be innovators who solve real-world problems and bridge societal gaps with their skills.
          </p>

          <div className="mt-7">
            <Link href="/learning" className="btn bg-secondary text-white w-full max-w-40 mx-0 border-0">Learn More</Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MarlayerAcademy;