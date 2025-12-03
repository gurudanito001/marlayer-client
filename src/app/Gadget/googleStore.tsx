"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { Tag, ChevronRight, ChevronLeft } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  saveAmount?: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Pixel 10 Pro and Pro XL", price: "1,019", oldPrice: "1,119", saveAmount: "100", image: "/images/pixelPro.png" },
  { id: 2, name: "Pixel 10 Pro Fold", price: "1,929", image: "/images/proFold.png" },
  { id: 3, name: "Pixel 10", price: "719", oldPrice: "919", saveAmount: "200", image: "/images/pixel101.png" },
  { id: 4, name: "Pixel Watch 4", price: "399", image: "/images/watch4.png" },
  { id: 5, name: "Pixel Buds Pro 2", price: "199", oldPrice: "249", saveAmount: "50", image: "/images/earbud.png" },
  { id: 6, name: "Pixel Buds 2a", price: "119", oldPrice: "149", saveAmount: "30", image: "/images/buds2a.png" },
];

const GAP_SIZE_PX = 24;

const GoogleStore = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      setMaxScroll(scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
    }
  }, [isMobile, isMounted]);

  useEffect(() => {
    const checkWidth = () => {
      if (scrollRef.current) setScrollLeft(scrollRef.current.scrollLeft);
      setIsMobile(window.innerWidth < 1024);
    };

    checkWidth();
    setIsMounted(true);
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) setScrollLeft(scrollRef.current.scrollLeft);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current || !cardRef.current) return;
    const cardWidth = cardRef.current.offsetWidth;
    const scrollAmount = cardWidth + GAP_SIZE_PX;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-8 font-sans mt-20">
      <h1 className="text-xl md:text-4xl text-black text-center font-semibold mb-8">
        Popular on the Google Store
      </h1>

      <div className="relative">
        {/* LEFT ARROW */}
        {scrollLeft > 1 && (
          <button
            onClick={() => scroll("left")}
            className={`absolute top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg border border-gray-200
            items-center justify-center hover:bg-gray-50 transition z-20 flex
            ${isMobile ? "w-10 h-10 left-0 ml-1" : "w-14 h-14 left-[-70px] hidden lg:flex"}`}
          >
            <ChevronLeft size={isMobile ? 20 : 24} className="text-gray-600" />
          </button>
        )}

        {/* RIGHT ARROW */}
        {scrollLeft < maxScroll - 1 && (
          <button
            onClick={() => scroll("right")}
            className={`absolute top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg border border-gray-200
            items-center justify-center hover:bg-gray-50 transition z-20 flex
            ${isMobile ? "w-10 h-10 right-0 mr-1" : "w-14 h-14 right-[-70px] hidden lg:flex"}`}
          >
            <ChevronRight size={isMobile ? 20 : 24} className="text-gray-600" />
          </button>
        )}

        {/* SCROLL CONTAINER */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className={`flex gap-6 pb-4 scroll-smooth 
              ${isMobile ? "overflow-x-auto scrollbar-hide" : "overflow-hidden"}`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                ref={index === 0 ? cardRef : null}
                className="flex-shrink-0 w-[250px] h-[420px] lg:w-[250px] lg:h-[420px] flex flex-col"
              >
                {/* IMAGE */}
                <div className="relative bg-[#F3F5F8] rounded-[24px] h-[260px] flex items-center justify-center mb-6">
                  <div className="absolute top-4 left-4 bg-[#D2E3FC] text-[#041E49] text-xs font-bold px-3 py-1 rounded">
                    New
                  </div>

                  <div className="flex items-center justify-center w-full h-full p-6">
                    {product.id === 1 || product.id === 5 ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "180px", height: "180px", objectFit: "contain" }}
                      />
                    ) : (
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    )}
                  </div>
                </div>

                {/* TEXT */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-[17px] font-bold text-gray-900">{product.name}</h3>

                  <div className="flex items-center gap-2 mt-1 text-gray-900">
                    <span>From €{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-500 line-through text-sm">€{product.oldPrice}</span>
                    )}
                  </div>

                  {product.saveAmount && (
                    <div className="mt-2 inline-flex items-center gap-1 bg-[#E6F4EA] text-[#137333]
                      text-xs font-bold px-3 py-1 rounded w-fit">
                      <Tag size={14} className="rotate-90" />
                      Save €{product.saveAmount}
                    </div>
                  )}

                  {product.oldPrice && (
                    <span className="text-xs text-gray-500 mt-1 block">
                      Usual selling price: €{product.oldPrice}
                    </span>
                  )}

                  <button className="flex items-center gap-1 mt-auto text-[#1967D2] font-medium w-fit">
                    <span className="hover:underline">Buy</span>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleStore;