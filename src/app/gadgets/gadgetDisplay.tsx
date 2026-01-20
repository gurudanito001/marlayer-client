"use client";

import React from "react";
import Image from "next/image";

const GadgetDisplay = () => {
  return (
    <div className="w-full px-6 py-12 max-w-6xl mx-auto">
      
      {/* FIRST ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

        {/* CARD 1 */}
        <div className="bg-[#eff1f4] rounded-3xl pt-14 flex flex-col items-center text-center h-[500px] lg:h-[550px] overflow-hidden relative">
          <div className="px-6 flex flex-col items-center z-10">
            <h2 className="text-2xl md:text-3xl leading-tight font-medium mb-3">
              Google Pixel 10 Pro and Pro XL
            </h2>
            <p className="text-gray-600 text-sm mb-4 font-medium">
              Meet the new status pro.
            </p>
            <button className="border border-gray-400 rounded-full px-5 py-2 text-sm font-medium mb-4 hover:bg-white transition">
              Learn more
            </button>
          </div>

          <div className="relative w-full h-64 md:h-80 mt-auto">
            <Image
              src="/images/pixel10Pro.png"
              alt="Pixel 10 Pro"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#E6E8EC] rounded-3xl pt-14 flex flex-col items-center text-center h-[500px] lg:h-[550px] overflow-hidden relative">
          <div className="px-6 flex flex-col items-center z-10">
            <h2 className="text-2xl md:text-3xl leading-tight font-medium mb-3">
              Google Pixel 10 Pro Fold
            </h2>
            <p className="text-gray-600 text-sm mb-4 font-medium">
              Unfold something extraordinary.
            </p>
            <button className="border border-gray-400 rounded-full px-5 py-2 text-sm font-medium mb-4 hover:bg-white transition">
              Learn more
            </button>
          </div>

          <div className="relative w-full h-64 md:h-80 mt-auto">
            <Image
              src="/images/10ProFold.png"
              alt="Pixel Fold"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#eff1f4] rounded-3xl pt-14 flex flex-col items-center text-center h-[500px] lg:h-[550px] overflow-hidden relative">
          <div className="px-6 flex flex-col items-center z-10">
            <h2 className="text-2xl md:text-3xl leading-tight font-medium mb-3">
              Google Pixel 10
            </h2>
            <p className="text-gray-600 text-sm mb-4 font-medium">
              Do spectacular, on the regular.
            </p>
            <button className="border border-gray-400 rounded-full px-5 py-2 text-sm font-medium mb-4 hover:bg-white transition">
              Learn more
            </button>
          </div>

          <div className="relative w-full h-64 md:h-80 mt-auto">
            <Image
              src="/images/googlePixel10.png"
              alt="Pixel 10"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* WATCH */}
        <div className="bg-gray-300 rounded-3xl pt-14 flex flex-col items-center text-center h-[500px] lg:h-[600px] overflow-hidden relative">
          <div className="px-6 flex flex-col items-center z-10">
            <h2 className="text-2xl lg:text-4xl leading-tight font-medium mb-3">
              Google Pixel Watch 4
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Precision crafted. Performance ready.
            </p>
            <button className="border border-black rounded-full px-5 py-2 text-sm font-medium mb-4 hover:bg-gray-200 transition">
              Learn more
            </button>
          </div>

          
          <div className="relative w-full h-72 md:h-96 mt-auto">
            <Image
              src="/images/pixelWatch4.png"
              alt="Pixel Watch 4"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* BUDS */}
        <div className="bg-gray-300 rounded-3xl pt-14 flex flex-col items-center text-center h-[500px] lg:h-[600px] overflow-hidden relative">
          <div className="px-6 flex flex-col items-center z-10">
            <h2 className="text-2xl lg:text-4xl leading-tight font-medium mb-3">
              Google Pixel Buds Pro 2
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Light ears ahead.
            </p>
            <button className="border border-black rounded-full px-5 py-2 text-sm font-medium mb-4 hover:bg-gray-200 transition">
              Learn more
            </button>
          </div>

          <div className="relative w-full h-72 md:h-96 mt-auto">
            <Image
              src="/images/pixelBudsPro2.png"
              alt="Pixel Buds"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default GadgetDisplay;