'use client';

import Image from "next/image";

export default function UpdatesSection() {
  return (
    <div className="w-full px-6 py-20 flex justify-center">
      <div className="w-full max-w-5xl bg-[#F8F9FA] rounded-[32px] py-20 px-8 flex flex-col items-center text-center">
        
        {/* Icon */}
        <div className="mb-6">
          <Image
          src="/images/updateIcon.svg"
          alt="icon"
          width={45}
          height={45}
          ></Image>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-3xl font-semibold leading-snug max-w-2xl">
          Keep me updated about devices, news, tips, and offers from Google Store.
        </h2>

        {/* Checkbox + Text */}
        <div className="flex items-start gap-3 mt-6 max-w-lg">
          <input 
            type="checkbox" 
            className="w-4 h-4 border-2 border-gray-400 rounded-sm cursor-pointer" 
          />
          <p className="text-sm text-gray-600 text-left">
            Stay in the know with personalised and relevant offers and info that are tailored
            to me.
          </p>
        </div>

        {/* Button */}
        <button className="mt-10 px-8 py-2 border border-black rounded-full text-sm hover:bg-gray-200 transition">
          Sign up
        </button>
      </div>
    </div>
  );
}
