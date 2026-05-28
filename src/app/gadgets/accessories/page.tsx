"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Navbar from "../navbar";
import Footer from "../footer";
import { fetchGadgetsByCategory } from "@/app/lib/actions/gadgets";


interface Product {
  id: string | number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

const tabs = ["All products"];

export default function AccessoriesPage() {
  const [activeTab, setActiveTab] = useState("All products");
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sliderStyle, setSliderStyle] = useState({});
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    async function loadAccessories() {
      setLoading(true);
      try {
        
        const response = await fetchGadgetsByCategory("accessories", undefined, 1, 54);

        const mappedProducts = (response.data || []).map((item: any) => ({
          id: item.id,
          name: item.product_name,
          category: item.category,
          description: item.description || "",
          price: item.selling_price,
          image: item.primary_image || "/images/placeholder.jpg",
        }));

        setAccessories(mappedProducts);
      } catch (error) {
        console.error("Error fetching gadgets:", error);
      } finally {
        setLoading(false);
      }
    }

    loadAccessories();
  }, []);

  // Handle slider animation for tabs
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

        {/* TAB FILTER SLIDER */}
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
              className={`relative z-10 px-3 sm:px-5 py-1.5 text-sm font-medium rounded-full transition ${
                activeTab === tab ? "text-white" : "text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* LOADING & PRODUCT GRID */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <p className="text-gray-500 animate-pulse">Loading accessories...</p>
          </div>
        ) : accessories.length === 0 ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <p className="text-gray-500">No accessories found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 auto-rows-fr">
            {accessories.map((product) => (
              <div key={product.id} className="flex flex-col text-center">
                <div className="flex-grow">
                  <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-6"
                    />
                  </div>
                  <h2 className="text-sm font-semibold text-gray-900 mb-1">{product.name}</h2>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-2 h-[2.5em]">{product.description}</p>
                  <p className="text-sm font-bold text-gray-900 mb-3">From ${product.price}</p>
                </div>

                <div className="flex justify-center items-center gap-2 mt-2">
                  <Link
                    href={`/accessories/${product.id}`}
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
        )}

        <div className="mt-6">
          <Footer />
        </div>
      </main>
    </div>
  );
}