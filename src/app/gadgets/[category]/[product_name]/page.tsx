"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ShieldCheck, Info, ArrowLeft, CheckCircle, MapPin, Eye, Bookmark } from "lucide-react";
import Navbar from "@/app/gadgets/gadgetsNavbar";
import Footer from "@/app/gadgets/gadgetsFooter";
import { fetchGadgetsWithFilters } from "@/app/lib/actions/gadgets";
import { useCartStore } from "@/app/store/cartStore";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const category = params?.category as string;
  const rawProductName = params?.product_name as string;
  const decodedProductName = rawProductName ? decodeURIComponent(rawProductName) : "";

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    async function getProductDetails() {
      if (!decodedProductName) return;
      setLoading(true);
      
      try {
        const response = await fetchGadgetsWithFilters({
          category: category,
          searchQuery: decodedProductName,
          limit: 10 // FIX: Increased limit to give the exact match filter room to breathe!
        });

        if (response?.data && response.data.length > 0) {
          // FIX: Added .trim() to ensure random spaces don't break the exact match
          const exactMatch = response.data.find(
            (item: any) => item.product_name.toLowerCase().trim() === decodedProductName.toLowerCase().trim()
          );
          setProduct(exactMatch || response.data[0]);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error retrieving product details:", error);
      } finally {
        setLoading(false);
      }
    }

    getProductDetails();
  }, [category, decodedProductName]);

  const handleAddToCart = () => {
    if (!product) return;
    
    const cartProduct = {
      id: product.id,
      name: product.product_name,
      price: product.selling_price,
      image: product.primary_image || "/images/placeholder.jpg",
      category: product.category,
      brand: product.brand || "Generic"
    };

    addToCart(cartProduct);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  if (loading) {
    return (
      <div className="bg-[#FAFDFB] min-h-screen flex flex-col antialiased">
        <Navbar />
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="w-10 h-10 border-4 border-[#45B1A0] border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-sm font-semibold text-[#416B5C] animate-pulse">Loading details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-[#FAFDFB] min-h-screen flex flex-col antialiased">
        <Navbar />
        <div className="flex-grow flex flex-col justify-center items-center max-w-md mx-auto px-6 text-center">
          <Info className="w-12 h-12 text-[#45B1A0] mb-4" />
          <h2 className="text-xl font-bold text-[#0D2B1E] mb-2">Product Not Found</h2>
          <p className="text-sm text-[#416B5C] mb-6">The item database reference could not be located.</p>
          <button 
            onClick={() => router.back()} 
            className="flex items-center gap-2 bg-[#0D2B1E] text-white px-5 py-2.5 rounded-xl font-bold text-sm"
          >
            <ArrowLeft size={16} /> Go Back
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const specs = product.specifications || product.specs || {};
  const hasSpecs = Object.keys(specs).length > 0;

  return (
    <div className="bg-[#FAFDFB] min-h-screen flex flex-col antialiased">
      <Navbar />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-2 space-y-5">
            
            {/* 1. Image Container */}
            <div className="bg-white border border-[#E2EFEB] rounded-lg shadow-sm flex items-center justify-center relative aspect-[4/3] sm:aspect-video w-full overflow-hidden">
              <Image
                src={product.primary_image || "/images/placeholder.jpg"}
                alt={product.product_name}
                fill
                priority
                className="object-contain p-2"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded">
                1/1
              </div>
            </div>

            {/* 2. Unified Card: Title, Core Attributes, and Specifications */}
            <div className="bg-white border border-[#E2EFEB] rounded-lg shadow-sm p-6 sm:p-8">
              
              {/* Title & Actions */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <h1 className="text-2xl sm:text-3xl font-black text-[#0D2B1E] uppercase leading-tight">
                  {product.product_name}
                </h1>
                <button className="text-[#416B5C] hover:text-[#45B1A0] transition-colors p-1">
                  <Bookmark size={22} />
                </button>
              </div>

              {/* Location & Status */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#416B5C] pb-5 border-b border-[#F4F9F8]">
                <span className="flex items-center gap-1.5"><MapPin size={14} /> Lagos State</span>
                <span className="flex items-center gap-1.5"><Eye size={14} /> Active Listing</span>
              </div>

              {/* Core Attributes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 py-6 border-b border-[#F4F9F8]">
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#416B5C] uppercase font-bold tracking-wider mb-1">Make</span>
                  <span className="text-sm font-bold text-[#0D2B1E]">{product.brand || "N/A"}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#416B5C] uppercase font-bold tracking-wider mb-1">Category</span>
                  <span className="text-sm font-bold text-[#0D2B1E] capitalize">{product.category}</span>
                </div>
                {product.sub_category && (
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#416B5C] uppercase font-bold tracking-wider mb-1">Type</span>
                    <span className="text-sm font-bold text-[#0D2B1E] capitalize">{product.sub_category}</span>
                  </div>
                )}
              </div>

              {/* Full Specifications Grid inside the same card */}
              {hasSpecs && (
                <div className="pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                    {Object.entries(specs).map(([key, value]: [string, any]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-[#F4F9F8] text-sm">
                        <span className="text-[#416B5C] capitalize">{key.replace(/_/g, " ")}</span>
                        <span className="text-[#0D2B1E] font-bold text-right ml-4">
                          {typeof value === "boolean" ? (value ? "Yes" : "No") : String(value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Description Card */}
            <div className="bg-white border border-[#E2EFEB] rounded-lg shadow-sm p-6 sm:p-8">
              <h3 className=" font-bold text-[#0D2B1E] mb-4 pb-3 border-b border-[#F4F9F8]">
                Description
              </h3>
              <p className="text-sm text-[#0D2B1E] leading-relaxed whitespace-pre-line">
                {product.description || "No description provided for this item."}
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (STICKY) ================= */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 space-y-5">
            
            {/* 1. Pricing & Cart Card */}
            <div className="bg-white border border-[#E2EFEB] rounded-lg shadow-sm p-6">
              <h2 className="text-3xl font-black text-[#0D2B1E] mb-3 tracking-tight">
                ${Number(product.selling_price).toLocaleString()}
              </h2>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="px-2 py-1 bg-[#F4F9F8] border border-[#E2EFEB] text-[#416B5C] text-xs font-medium rounded">
                  Fixed Price
                </div>
              </div>

              <div className="text-sm text-[#0D2B1E] font-medium mb-5 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${product.stock_qty > 0 ? "bg-[#45B1A0]" : "bg-red-500"}`} />
                {product.stock_qty > 0 ? `${product.stock_qty} Allocation Units Available` : "Out of stock"}
              </div>

              <button
                type="button"
                disabled={product.stock_qty <= 0}
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#45B1A0] text-white font-bold text-sm hover:bg-[#3A9485] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                <ShoppingCart size={18} />
                <span>Add to Shopping Cart</span>
              </button>
            </div>

            {/* 2. Marlayer Safety Guard Card (No bullet points) */}
            <div className="bg-[#F4F9F8] border border-[#E2EFEB] rounded-lg shadow-sm p-6">
              <h4 className="text-sm font-bold text-[#0D2B1E] uppercase tracking-wide mb-2 flex items-center gap-2">
                <ShieldCheck className="text-[#45B1A0]" size={20} />
                Marlayer Safety Guard
              </h4>
              <p className="text-xs text-[#416B5C] leading-relaxed">
                Verify physical assets and specifications before complete order clearance. Check model matrix numbers upon arrival.
              </p>
            </div>

          </div>

        </div>
      </main>

      <Footer />

      {/* Floating Notification */}
      <div 
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0D2B1E] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#1B4D3A] transition-all duration-300 transform ${
          toastVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#45B1A0]/20 text-[#45B1A0]">
          <CheckCircle size={16} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-wide">Item added</span>
          <span className="text-xs text-white/70 line-clamp-1 max-w-[200px]">{product.product_name}</span>
        </div>
      </div>
    </div>
  );
}