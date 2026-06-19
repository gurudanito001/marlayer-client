'use client'

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Layers, ShoppingCart } from "lucide-react"; 
import Navbar from "../gadgetsNavbar";
import Footer from "../gadgetsFooter";
import { fetchGadgetsWithFilters } from "@/app/lib/actions/gadgets"; 
import { useCartStore } from "@/app/store/cartStore"; 
import SpecsModal from "@/app/components/specsModal";

const tabs = ["All products", "iPhone", "Android"];

interface Product {
  id: string | number;
  name: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  image: string;
  specifications: any;
}

export default function PhonesPage() {
  const [activeTab, setActiveTab] = useState("All products");
  const [phones, setPhones] = useState<Product[]>([]); 
  const [loading, setLoading] = useState(true);
  const [sliderStyle, setSliderStyle] = useState({});
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Infinite Scroll Pagination States
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  
  // Specs Modal States
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  // Toast Notification State
  const [toastProduct, setToastProduct] = useState<string | null>(null);

  // Zustand Store Action
  const addToCart = useCartStore((state) => state.addToCart);

  const loadPhones = async (pageToFetch: number, tabToFetch: string) => {
    if (pageToFetch === 1) {
      setLoading(true);
    } else {
      setIsFetchingMore(true);
    }

    try {
      const response = await fetchGadgetsWithFilters({
        category: "phones",
        subCategory: tabToFetch === "All products" ? undefined : tabToFetch,
        page: pageToFetch,
        limit: 20
      });

      const fetchedData = response.data || [];
      
      const mappedProducts = fetchedData.map((item: any) => ({
        id: item.id,
        name: item.product_name, 
        category: item.category,
        brand: item.brand || "", 
        description: item.description || "",
        price: item.selling_price, 
        image: item.primary_image || "/images/placeholder.jpg", 
        specifications: item.specifications || item.specs || {}, 
      }));

      if (pageToFetch === 1) {
        setPhones(mappedProducts);
      } else {
        setPhones((prev) => [...prev, ...mappedProducts]);
      }

      if (pageToFetch >= response.totalPages || fetchedData.length < 20) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (error) {
      console.error("Error fetching gadgets via database filters:", error);
    } finally {
      setLoading(false);
      setIsFetchingMore(false);
    }
  };

  // Trigger sequence strictly when active selection tab changes
  useEffect(() => {
    setPage(1);
    setHasMore(true);
    loadPhones(1, activeTab);
  }, [activeTab]);

  // Trigger sequential pagination requests when layout scrolls downward
  useEffect(() => {
    if (page > 1) {
      loadPhones(page, activeTab);
    }
  }, [page]);

  const observer = useRef<IntersectionObserver | null>(null);
  
  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading || isFetchingMore) return;
      
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, isFetchingMore, hasMore, page, activeTab]
  );

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
              Communications Desk
            </h1>
            <p className="text-sm text-[#416B5C]">
              Enterprise-grade hardware assets optimized for local ecosystem connectivity.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold text-[#416B5C] bg-[#E2EFEB]/50 px-4 py-2 rounded-xl self-start sm:self-auto">
            <Layers className="w-3.5 h-3.5 text-[#45B1A0]" />
            <span>{phones.length} Nodes Indexed</span>
          </div>
        </div>

        {/* Filters and Controls Menu */}
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

        {loading ? (
          <div className="flex flex-col justify-center items-center min-h-[400px] bg-white rounded-3xl border border-[#E2EFEB]">
            <div className="w-8 h-8 border-2 border-[#45B1A0] border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm font-semibold text-[#416B5C] animate-pulse">Querying database engine...</p>
          </div>
        ) : phones.length === 0 ? (
          <div className="flex flex-col justify-center items-center min-h-[400px] bg-white rounded-3xl border border-[#E2EFEB] p-8 text-center">
            <p className="text-sm font-bold text-[#0D2B1E] mb-1">No hardware configurations found in database</p>
            <p className="text-xs text-[#416B5C]">No database entries match the selected filters layout matrix parameters.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {phones.map((product) => (
                <div 
                  key={product.id} 
                  className="group flex flex-col bg-white rounded-2xl border border-[#E2EFEB] p-4 transition-all duration-200 hover:shadow-md hover:border-[#45B1A0]/40"
                >
                  
                  <Link 
                    href={`/gadgets/phones/${encodeURIComponent(product.name)}`}
                    className="block cursor-pointer flex-grow"
                  >
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

                    <div className="flex flex-col px-1">
                      <h2 className="text-sm font-bold text-[#0D2B1E] tracking-tight line-clamp-1 mb-1 group-hover:text-[#45B1A0] transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-xs text-[#416B5C] leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4">
                        {product.description || "No layout configuration description specified for this terminal variant."}
                      </p>
                      
                      <div className="pt-3 border-t border-[#F4F9F8] flex items-baseline justify-between">
                        <span className="text-[10px] font-bold text-[#416B5C] uppercase tracking-wider">Acquisition</span>
                        <span className="text-base font-extrabold text-[#0D2B1E]">
                          ${Number(product.price).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="grid grid-cols-2 gap-2 mt-4 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsSpecsOpen(true);
                      }}
                      className="py-2 px-3 rounded-xl bg-[#F4F9F8] text-[#0D2B1E] font-bold text-xs text-center border border-[#E2EFEB] hover:bg-[#E2EFEB] transition-colors"
                    >
                      Specifications
                    </button>
                    
                    <button 
                      type="button"
                      onClick={() => {
                        addToCart(product);
                        setToastProduct(product.name);
                        setTimeout(() => setToastProduct(null), 3000);
                      }}
                      className="flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-[#0D2B1E] text-white font-bold text-xs hover:bg-[#45B1A0] transition-colors shadow-sm"
                    >
                      <span>Add to Cart</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div ref={lastElementRef} className="w-full flex justify-center items-center py-8 mt-6 min-h-[40px]">
              {isFetchingMore && (
                <div className="flex items-center gap-2 text-xs font-semibold text-[#416B5C]">
                  <div className="w-4 h-4 border-2 border-[#45B1A0] border-t-transparent rounded-full animate-spin" />
                  <span>Loading additional assets...</span>
                </div>
              )}
              {!hasMore && phones.length > 0 && (
                <p className="text-xs font-medium text-[#416B5C]/60 italic">
                  All active database items cataloged.
                </p>
              )}
            </div>
          </>
        )}
      </main>

      <Footer />

      <SpecsModal 
        product={selectedProduct} 
        isOpen={isSpecsOpen} 
        onClose={() => {
          setIsSpecsOpen(false);
          setSelectedProduct(null);
        }} 
      />

      {/* Toast Notification HUD */}
      <div 
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0D2B1E] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#1B4D3A] transition-all duration-300 transform ${
          toastProduct ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#45B1A0]/20 text-[#45B1A0]">
          <ShoppingCart size={16} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-wide">Item added to cart</span>
          <span className="text-xs text-white/70 line-clamp-1 max-w-[200px]">{toastProduct}</span>
        </div>
      </div>
      
    </div>
  );
}