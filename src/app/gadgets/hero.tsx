'use client'
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] md:h-screen flex flex-col items-center justify-center text-center">

      <Image
        src="/images/gadgetHero.jpg"
        alt="Gadgets"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6">
          Build On Certainty
        </h1>

        <button className="btn rounded-full bg-[#1A1B1E] border border-[#1A1B1E] text-white px-5 md:px-8 mb-0 hover:bg-[#429E8E] hover:border-[#429E8E] transition">
          Shop With Us
        </button>
      </div>
    </div>
  );
};

export default HeroSection;