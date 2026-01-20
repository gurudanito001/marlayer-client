"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Footer from "../footer";
import Navbar from "../navbar";

// MOCK DATA
const products = [
  {
    id: 1,
    name: "MacBook Air 15-inch (M3)",
    category: "MacBook",
    description: "Strikingly thin and fast with the M3 chip.",
    price: 1299,
    image: "/images/macbookAir15.jpg",
  },
  {
    id: 2,
    name: "MacBook Pro 14-inch (M3 Pro)",
    category: "MacBook",
    description: "Supercharged performance for professionals.",
    price: 1999,
    image: "/images/macpro14.jpg",
  },
  {
    id: 3,
    name: "MacBook Pro 16-inch (M3 Max)",
    category: "MacBook",
    description: "Mind-blowing power for demanding workflows.",
    price: 2999,
    image: "/images/macbook16.png",
  },
  {
    id: 4,
    name: "HP Spectre x360",
    category: "Windows",
    description: "Premium 2-in-1 design with powerful performance.",
    price: 1399,
    image: "/images/hpSpectre.jpg",
  },
  {
    id: 5,
    name: "HP Envy 14",
    category: "Windows",
    description: "Sleek performance for work and creativity.",
    price: 1199,
    image: "/images/hpEnvy14.jpg",
  },
  {
    id: 6,
    name: "Dell XPS 13",
    category: "Windows",
    description: "Iconic design with ultraportable performance.",
    price: 1099,
    image: "/images/dell.jpg",
  },
];

export default function LaptopsPage() {
  const [activeTab, setActiveTab] = useState("All products");
  const [sliderStyle, setSliderStyle] = useState({});
  const tabs = ["All products", "MacBook", "Windows"];
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
  }, [activeTab, tabs]);

  return (
    <div className="bg-white">
      <Navbar />
      <main className="min-h-screen bg-white py-12 px-6 md:px-10 lg:px-20">
        <h1 className="text-3xl font-semibold text-black mb-8">Laptops</h1>


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

        {/*PRODUCT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 auto-rows-fr">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-col text-center">

              <div className="flex-grow">
                <div className="relative w-full aspect-square mb-4">
                  <Image src={product.image} alt={product.name} fill className="object-cover rounded-xl" />
                </div>
                <h2 className="text-sm font-semibold text-gray-900 mb-1">{product.name}</h2>
                <p className="text-xs text-gray-500 mb-2 line-clamp-2 h-[2.5em]">{product.description}</p>
                <p className="text-sm font-bold text-gray-900 mb-3">From ${product.price}</p>
              </div>


              <div className="flex justify-center items-center gap-2 mt-2">
                <Link
                  href={`/Phones/Laptops/${product.id}`}
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
