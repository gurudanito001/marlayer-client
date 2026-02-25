"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Navbar from "../navbar";
import Footer from "../footer";

// MOCK DATA
const products = [
  { id: 1, name: "WristWatch", category: "iPhone", description: "Sport Band", price: 49.00, image: "/images/wristWatch.png", bgColor: "#F0F4F8" },
  { id: 2, name: "Vision Pro", category: "iPhone", description: "Apple Vision Pro Travel Case", price: 199, image: "/images/visionPro.png", bgColor: "#FCECE8" },
  { id: 3, name: "Sillicone Case", category: "iPhone", description: "iPhone 17 sillicon case with MagSafe", price: 599, image: "/images/silliconCase.png", bgColor: "#E8F5E9" },
  { id: 4, name: "Macbook Stand", category: "Android", description: "Twelve South HiRise Pro Adjustable Stand for MacBooks", price: 79.95, image: "/images/macbookStand.png", bgColor: "#F3E5F5" },
  { id: 5, name: "HeadPhone", category: "Android", description: "Beats Solo 4. On-Ear Wireless Headphones", price: 199.99, image: "/images/headPhone.png", bgColor: "#FFF3E0" },
  { id: 6, name: "Airpods", category: "Android", description: "Airpods 4 for Active Noise Cancellation", price: 179, image: "/images/airpods.png", bgColor: "#E1F5FE" },
];

const tabs = ["All products"];

export default function PhonesPage() {
  const [activeTab, setActiveTab] = useState("All products");
  const [sliderStyle, setSliderStyle] = useState({});
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const filteredProducts = activeTab === "All products"
    ? products
    : products.filter((p) => p.category === activeTab);

  useEffect(() => {
    const activeTabIndex = tabs.indexOf(activeTab);
    const activeTabElement = tabsRef.current[activeTabIndex];

    if (activeTabElement) {
      setSliderStyle({
        width: activeTabElement.offsetWidth,
        transform: `translateX(${activeTabElement.offsetLeft}px)`,
      });
    }
  }, [activeTab]);

  return (
    <div className="bg-white">
      <Navbar />
      <main className="min-h-screen bg-white py-12 px-6 md:px-10 lg:px-20">
      <h1 className="text-3xl font-semibold text-black mb-8">Accessories</h1>


      <div className="relative flex bg-gray-100 p-1 rounded-full mb-12 w-fit">
        <span
          className="absolute top-0 left-0 h-full rounded-full bg-black transition-all duration-300 p-1"
          style={sliderStyle}
        />
        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(el) => { tabsRef.current[index] = el; }}
            onClick={() => setActiveTab(tab)}
            className={`relative z-10 px-3 sm:px-5 py-1.5 text-sm font-medium rounded-full transition ${activeTab === tab ? "text-white" : "text-gray-700"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 auto-rows-fr">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col text-center">

            <div className="flex-grow">
              <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden" style={{ backgroundColor: product.bgColor }}>
                <Image src={product.image} alt={product.name} fill className="object-contain p-6" />
              </div>
              <h2 className="text-sm font-semibold text-gray-900 mb-1">{product.name}</h2>
              <p className="text-xs text-gray-500 mb-2 line-clamp-2 h-[2.5em]">{product.description}</p>
              <p className="text-sm font-bold text-gray-900 mb-3">From ${product.price}</p>
            </div>


            <div className="flex justify-center items-center gap-2 mt-2">
              <Link
                href={`/phones/${product.id}`}
                className="py-1 px-4 rounded-full bg-blue-600 text-white text-xs text-center hover:bg-blue-700 transition"
              >
                Learn more
              </Link>
              <button className="flex items-center text-[#1967D2] font-medium text-sm">
                <span className="hover:underline pr-1">Buy</span>
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Footer />
      </div>
      </main>
    </div>
  );
}