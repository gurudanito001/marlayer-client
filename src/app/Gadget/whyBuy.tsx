'use client';


import Image from "next/image";
import { Plus, Triangle } from "lucide-react";

const features = [
  {
    title: "Delivery at no extra charge.",
    icon: <Image src="/images/icon1.svg" alt="icon" width={40} height={40} />,
  },
  {
    title: "Trade in your old phone and save.",
    icon: <Image src="/images/icon2.svg" alt="icon" width={40} height={40} />,
  },
  {
    title: "Easy returns that are free of charge.",
    icon: <Image src="/images/icon3.svg" alt="icon" width={40} height={40} />,
  },
];

export default function WhyBuySection() {
  return (
    <div className="w-full px-6 py-20">

      {/* Heading */}
      <h2 className="text-2xl lg:text-4xl font-semibold text-center mb-14">
        Why buy on the Google Store?
      </h2>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-[#F8F9FA] rounded-[28px] py-16 px-6 text-center flex flex-col items-center"
          >
            {/* ICON */}
            <div className="mb-6">{f.icon}</div>

            {/* TITLE */}
            <h3 className="text-sm font-medium leading-snug max-w-[220px]">
              {f.title}
            </h3>

            {/* Button */}
            <button className="mt-8 px-7 py-2 border border-black rounded-full text-sm hover:bg-gray-200 transition">
              Learn more
            </button>
          </div>
        ))}
      </div>

     {/* Footnotes */}
<div className="max-w-4xl mx-auto mt-12 text-sm text-gray-700 space-y-2 leading-relaxed">
  <p className="flex items-start gap-1">
    <span className="flex-shrink-0 pt-[2px]">
      <Plus size={10} className="text-gray-700" />
    </span>
    <span>
      All orders that are delivered free of charge use the lowest-cost option unless otherwise noted.
    </span>
  </p>
  <p className="flex items-start gap-1">
    <span className="flex-shrink-0 pt-[2px]">
      <Triangle size={10} className="text-gray-700" />
    </span>
    <span>
      Trade-in values vary based on condition, year, and configuration of your eligible device, and are 
      subject to change upon inspection. Phone trade-in credit will be issued as a refund back on the 
      specific form of payment used for the phone purchase at Google Store or in the form of Store Credit 
      if the purchased phone has already been returned. Refund is based on (and paid after) phone received 
      matching the description provided at time of estimate. Phones sent for trade-in must be received 
      within 30 days of initiation of trade-in process, provided the purchased device has not been returned 
      during that time. Additional trade-in terms are located here: 
      <a 
        href="https://store.google.com/intl/en_ie/about/device-trade-in/" 
        className="text-blue-600 underline ml-1"
      >
        https://store.google.com/intl/en_ie/about/device-trade-in/
      </a>
    </span>
  </p>
</div>

    </div>
  );
}
