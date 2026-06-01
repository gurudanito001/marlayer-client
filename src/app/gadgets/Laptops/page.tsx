'use client'

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, Cpu } from "lucide-react";
import Link from "next/link";
import Navbar from "../gadgetsNavbar";
import Footer from "../gadgetsFooter";
import { fetchGadgetsByCategory } from "@/app/lib/actions/gadgets";

const tabs = ["All products", "MacBook", "Windows"];

interface Product {
  id: string | number;
  name: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  image: string;
}

export default function LaptopsPage() {
  const [activeTab, setActiveTab] = useState("All products");
  const [allLaptops, setAllLaptops] = useState<Product[]>([]);
  const [displayedLaptops, setDisplayedLaptops] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sliderStyle, setSliderStyle] = useState({});
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    async function loadAllLaptops() {
      setLoading(true);
      try {
        const response = await fetchGadgetsByCategory("laptops", undefined, 1, 27);

        const mappedProducts = (response.data || []).map((item: any) => ({
          id: item.id,
          name: item.product_name, 
          category: item.category,
          brand: item.brand || "", 
          description: item.description || "",
          price: item.selling_price, 
          image: item.primary_image || "/images/placeholder.jpg", 
        }));

        setAllLaptops(mappedProducts);
        setDisplayedLaptops(mappedProducts);
      } catch (error) {
        console.error("Error fetching gadgets:", error);
      } finally {
        setLoading(false);
      }
    }

    loadAllLaptops();
  }, []);

  useEffect(() => {
    if (activeTab === "All products") {
      setDisplayedLaptops(allLaptops);
    } else if (activeTab === "MacBook") {
      const macbooks = allLaptops.filter(
        (laptop) => 
          laptop.brand.toLowerCase() === "apple" || 
          laptop.name.toLowerCase().includes("macbook")
      );
      setDisplayedLaptops(macbooks);
    } else if (activeTab === "Windows") {
      const windowsLaptops = allLaptops.filter(
        (laptop) => 
          laptop.brand.toLowerCase() !== "apple" && 
          !laptop.name.toLowerCase().includes("macbook")
      );
      setDisplayedLaptops(windowsLaptops);
    }
  }, [activeTab, allLaptops]);

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
    <div className="bg-[#FAFDFB] min-h-screen flex flex-col antialiased">
      <Navbar />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 md:px-10 lg:px-12 py-12">
        
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12 border-b border-[#E2EFEB] pb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-[#0D2B1E] tracking-tight mb-2">
              Engineering Workstations
            </h1>
            <p className="text-sm text-[#416B5C]">
              High-throughput compute systems configured for developers, agencies, and core operations.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold text-[#416B5C] bg-[#E2EFEB]/50 px-4 py-2 rounded-xl self-start sm:self-auto">
            <Cpu className="w-3.5 h-3.5 text-[#45B1A0]" />
            <span>{displayedLaptops.length} Compute Nodes Indexed</span>
          </div>
        </div>

        {/* Tab Selection Filter Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="relative flex bg-[#E2EFEB]/60 p-1 rounded-xl w-fit border border-[#E2EFEB]">
            <span
              className="absolute top-1 bottom-1 left-0 rounded-lg bg-[#0D2B1E] shadow-sm transition-all duration-300"
              style={sliderStyle}
            />
            {tabs.map((tab, index) => (
              <button
                key={tab}
                ref={(el) => { tabsRef.current[index] = el; }}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 px-5 py-2 text-xs font-bold rounded-lg transition-colors duration-200 ${
                  activeTab === tab ? "text-white" : "text-[#416B5C] hover:text-[#0D2B1E]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* LOADING & ARCHITECTURE GRID */}
        {loading ? (
          <div className="flex flex-col justify-center items-center min-h-[400px] bg-white rounded-3xl border border-[#E2EFEB]">
            <div className="w-8 h-8 border-2 border-[#45B1A0] border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm font-semibold text-[#416B5C] animate-pulse">Syncing workstation catalogs...</p>
          </div>
        ) : displayedLaptops.length === 0 ? (
          <div className="flex flex-col justify-center items-center min-h-[400px] bg-white rounded-3xl border border-[#E2EFEB] p-8 text-center">
            <p className="text-sm font-bold text-[#0D2B1E] mb-1">No architecture variants isolated</p>
            <p className="text-xs text-[#416B5C]">Adjust filters to inspect alternative deployment assets.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedLaptops.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col bg-white rounded-2xl border border-[#E2EFEB] p-4 transition-all duration-200 hover:shadow-md hover:border-[#45B1A0]/40"
              >
                {/* Image Container Aspect Frame */}
                <div className="relative w-full aspect-square mb-4 bg-[#F4F9F8] rounded-xl overflow-hidden flex items-center justify-center border border-[#E2EFEB]/40 p-6">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                    className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-300"
                    priority={false}
                  />
                  {product.brand && (
                    <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider text-[#416B5C] bg-white border border-[#E2EFEB] px-2 py-0.5 rounded-md">
                      {product.brand}
                    </span>
                  )}
                </div>

                {/* Information Card Body */}
                <div className="flex flex-col flex-grow px-1">
                  <h2 className="text-sm font-bold text-[#0D2B1E] tracking-tight line-clamp-1 mb-1 group-hover:text-[#45B1A0] transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-xs text-[#416B5C] leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4">
                    {product.description || "No configuration parameters provided for this specific machine node."}
                  </p>
                  
                  {/* Dynamic Pricing Matrix */}
                  <div className="mt-auto pt-3 border-t border-[#F4F9F8] flex items-baseline justify-between">
                    <span className="text-[10px] font-bold text-[#416B5C] uppercase tracking-wider">Acquisition</span>
                    <span className="text-base font-extrabold text-[#0D2B1E]">
                      ${Number(product.price).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Interactive Node Anchors */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-2">
                  <Link
                    href={`/laptops/${product.id}`}
                    className="py-2 px-3 rounded-xl bg-[#F4F9F8] text-[#0D2B1E] font-bold text-xs text-center border border-[#E2EFEB] hover:bg-[#E2EFEB] transition-colors"
                  >
                    Specifications
                  </Link>
                  <button className="flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-[#0D2B1E] text-white font-bold text-xs hover:bg-[#45B1A0] transition-colors shadow-sm">
                    <span>Deploy</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Full bleed rendering border anchor */}
      <Footer />
    </div>
  );
}