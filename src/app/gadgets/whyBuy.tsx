'use client';


import Image from "next/image";
import { Plus, Triangle } from "lucide-react";

const features = [
  {
    title: "Gold Standard Warranty.",
    icon: <Image src="/images/gold.png" alt="icon" width={40} height={40} />,
  },
  {
    title: "After Sale Support.",
    icon: <Image src="/images/support.png" alt="icon" width={40} height={40} />,
  },
  {
    title: "Customer Friendly Return Policy.",
    icon: <Image src="/images/support.png" alt="icon" width={40} height={40} />,
  },
];

export default function WhyBuySection() {
  return (
    <div className="w-full px-6 py-20">

      {/* Heading */}
      <h2 className="text-2xl lg:text-4xl font-semibold text-center mb-14">
        Why buy from Marlayer Gadgets?
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
            <h3 className="text-md font-medium leading-snug max-w-[220px]">
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
        <p className=" items-start font-bold text-black text-xl">
          {/* <span className="flex-shrink-0 pt-[2px]">
            <Plus size={10} className="text-gray-700" />
          </span> */}
          
           Warranty & Returns
         
        </p>
        <p className="items-start">
          {/* <span className="flex-shrink-0 pt-[2px]">
            <Triangle size={10} className="text-gray-700" />
          </span> */}
          
            Brand new Laptops and phones come with a standard 12-month warranty, while pre-owned products come with a 60-day warranty. Warranty can be negotiable based on the type of product The warranty covers manufacturing defects only. Damages caused by misuse, unauthorised repairs, liquid exposure, or physical impact are not covered.
            Goods sold in working condition are not returnable for refund. A replacement request could be processed instead.

            {/* <a
              href="https://store.google.com/intl/en_ie/about/device-trade-in/"
              className="text-blue-600 underline ml-1"
            >
              https://store.google.com/intl/en_ie/about/device-trade-in/
            </a> */}
         
        </p>
      </div>

    </div>
  );
}
