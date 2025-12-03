'use client'
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center">

      <div className="bg-black w-full py-16 px-4 flex flex-col items-center">
        <h1 className="text-xl md:text-5xl font-semibold text-white mb-6 mt-10">
          Now's your chance to save big.
        </h1>

        <button className="btn rounded-full border border-white bg-black text-white px-5 md:px-8 mb-0 hover:bg-white hover:text-black transition">
          Shop With Us
        </button>
      </div>

      <div className="w-full flex justify-center">
        <Image
          src="/images/heroImageGadget.png"
          alt="Gadgets"
          width={1500}
          height={1500}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;