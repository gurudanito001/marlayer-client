"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ShieldCheck, Info, ArrowLeft, CheckCircle, MapPin, Eye, Bookmark, MessageCircle } from "lucide-react";
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
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);

  // Replace this with your actual Marlayer WhatsApp number (include country code, omit the +)
  const WHATSAPP_NUMBER = "2348000000000"; 

  useEffect(() => {
    async function getProductDetails() {
      if (!decodedProductName) return;
      setLoading(true);
      
      try {
        // 1. Fetch the exact product
        const response = await fetchGadgetsWithFilters({
          category: category,
          searchQuery: decodedProductName,
          limit: 10
        });

        let exactMatch = null;

        if (response?.data && response.data.length > 0) {
          exactMatch = response.data.find(
            (item: any) => item.product_name.toLowerCase().trim() === decodedProductName.toLowerCase().trim()
          );
          setProduct(exactMatch || response.data[0]);
        } else {
          setProduct(null);
        }

        // 2. Fetch related products based strictly on Brand or Sub-Category
        if (exactMatch || (response?.data && response.data[0])) {
          const currentProd = exactMatch || response.data[0];
          
          const relatedRes = await fetchGadgetsWithFilters({
            category: currentProd.category,
            limit: 30 // Fetch a larger batch to filter locally
          });

          if (relatedRes?.data) {
            // Strictly filter by same Brand (e.g., Apple, Dell) OR same Sub-Category (e.g., MacBook, iPhone)
            let filteredRelated = relatedRes.data.filter((item: any) => {
              // Exclude the current product itself
              if (item.id === currentProd.id) return false;

              const sameBrand = item.brand && currentProd.brand && item.brand.toLowerCase() === currentProd.brand.toLowerCase();
              const sameSubCategory = item.sub_category && currentProd.sub_category && item.sub_category.toLowerCase() === currentProd.sub_category.toLowerCase();
              
              return sameBrand || sameSubCategory;
            });

            // Fallback: If no strict brand/sub-category matches exist, show items in the same general category
            if (filteredRelated.length === 0) {
              filteredRelated = relatedRes.data.filter((item: any) => item.id !== currentProd.id);
            }

            setRelatedProducts(filteredRelated.slice(0, 4)); // Only keep top 4
          }
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
  
  // Create the dynamic WhatsApp Message
  const whatsappMessage = encodeURIComponent(`Hi Marlayer, I am interested in purchasing the ${product.product_name} listed for ₦${Number(product.selling_price).toLocaleString()}. Is it still available?`);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="bg-[#FAFDFB] min-h-screen flex flex-col antialiased">
      <Navbar />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Breadcrumb / Back Navigation */}
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 text-[#416B5C] hover:text-[#0D2B1E] font-medium text-sm mb-8 transition-colors w-fit"
        >
          <ArrowLeft size={16} /> Back to Catalog
        </button>

        {/* ================= MAIN PRODUCT SPLIT LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Image & Description */}
          <div className="flex flex-col gap-10">
            {/* Image */}
            <div className="w-full relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-[#F4F9F8] rounded-2xl overflow-hidden flex items-center justify-center mix-blend-multiply border border-[#E2EFEB]">
              <Image
                src={product.primary_image || "/images/placeholder.jpg"}
                alt={product.product_name}
                fill
                priority
                className="object-contain p-8 mix-blend-multiply drop-shadow-xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3 py-1 bg-[#0D2B1E] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {product.brand || "Gadget"}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-bold text-[#0D2B1E] text-xl mb-4">Product Description</h3>
              <p className="text-sm text-[#416B5C] leading-relaxed whitespace-pre-line">
                {product.description || "No description provided for this item."}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Product Info, Actions, Safety Guard & Specs */}
          <div className="flex flex-col">
            
            {/* Title & Header */}
            <div className="flex justify-between items-start gap-4 mb-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D2B1E] uppercase leading-[1.1] tracking-tight">
                {product.product_name}
              </h1>
              <button className="text-[#416B5C] hover:text-[#45B1A0] transition-colors p-2 bg-[#F4F9F8] rounded-full shrink-0">
                <Bookmark size={20} />
              </button>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <h2 className="text-3xl sm:text-4xl font-black text-[#45B1A0] tracking-tight">
                ₦{Number(product.selling_price).toLocaleString()}
              </h2>
              <span className="text-sm font-bold text-[#416B5C] uppercase tracking-wider">Fixed Price</span>
            </div>

            {/* Status & Location Meta */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-[#416B5C] font-medium mb-8">
              <span className="flex items-center gap-1.5"><MapPin size={16} /> Lagos, Nigeria</span>
              <span className="flex items-center gap-1.5"><Eye size={16} /> Active Listing</span>
              <span className="flex items-center gap-1.5">
                <div className={`w-2.5 h-2.5 rounded-full ${product.stock_qty > 0 ? "bg-[#45B1A0]" : "bg-red-500"}`} />
                {product.stock_qty > 0 ? `${product.stock_qty} in stock` : "Out of stock"}
              </span>
            </div>

            {/* Buying Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 pb-10 border-b border-[#E2EFEB]">
              <button
                type="button"
                disabled={product.stock_qty <= 0}
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-[#0D2B1E] text-white font-bold text-sm hover:bg-[#15422E] disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
              >
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>
              
              {/* WhatsApp Button changed to #45B1A0 and functional */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-[#45B1A0] text-white font-bold text-sm hover:bg-[#3A9485] transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Vendor Guard / Trust with Bullet Points */}
            <div className="flex flex-col gap-5 mb-10 p-6 rounded-2xl bg-[#F4F9F8] border border-[#E2EFEB]">
              <h3 className="font-bold text-[#0D2B1E] text-lg flex items-center gap-2 border-b border-[#E2EFEB] pb-3">
                <ShieldCheck size={22} className="text-[#45B1A0]" />
                Marlayer Safety Guard
              </h3>
              
              <ul className="space-y-4 text-sm text-[#416B5C] font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#45B1A0] shrink-0 mt-0.5" />
                  <span><strong>Verified Quality:</strong> All gadgets are thoroughly tested, inspected, and verified authentic before listing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#45B1A0] shrink-0 mt-0.5" />
                  <span><strong>Secure Escrow Payment:</strong> Your payments are held securely and only released when delivery is confirmed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#45B1A0] shrink-0 mt-0.5" />
                  <span><strong>7-Day Return Policy:</strong> Enjoy peace of mind with a hassle-free 7-day return window for any factory defects.</span>
                </li>
              </ul>
            </div>

            {/* Specifications */}
            {hasSpecs && (
              <div className="mb-6">
                <h3 className="font-bold text-[#0D2B1E] text-lg mb-4">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {Object.entries(specs).map(([key, value]: [string, any]) => (
                    <div key={key} className="flex flex-col border-b border-[#E2EFEB] pb-2">
                      <span className="text-[11px] uppercase tracking-wider text-[#416B5C] font-bold mb-1">
                        {key.replace(/_/g, " ")}
                      </span>
                      <span className="text-sm font-semibold text-[#0D2B1E]">
                        {typeof value === "boolean" ? (value ? "Yes" : "No") : String(value)}
                      </span>
                    </div>
                  ))}
                  
                  {/* Additional Core Specs */}
                  <div className="flex flex-col border-b border-[#E2EFEB] pb-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#416B5C] font-bold mb-1">Category</span>
                    <span className="text-sm font-semibold text-[#0D2B1E] capitalize">{product.category}</span>
                  </div>
                  {product.sub_category && (
                    <div className="flex flex-col border-b border-[#E2EFEB] pb-2">
                      <span className="text-[11px] uppercase tracking-wider text-[#416B5C] font-bold mb-1">Sub-Category</span>
                      <span className="text-sm font-semibold text-[#0D2B1E] capitalize">{product.sub_category}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* ================= RELATED PRODUCTS ================= */}
        <section className="mt-24 pt-12 border-t border-[#E2EFEB]">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-[#0D2B1E] uppercase tracking-tight">
              Related Gadgets
            </h2>
          </div>

          {relatedProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((item) => (
                <Link 
                  href={`/gadgets/${item.category}/${encodeURIComponent(item.product_name)}`} 
                  key={item.id} 
                  className="group flex flex-col cursor-pointer"
                >
                  <div className="relative aspect-square w-full bg-[#F4F9F8] rounded-xl overflow-hidden mb-4 mix-blend-multiply border border-[#E2EFEB]">
                    <Image
                      src={item.primary_image || "/images/placeholder.jpg"}
                      alt={item.product_name}
                      fill
                      className="object-contain p-4 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#416B5C] mb-1">
                      {item.brand || "Gadget"}
                    </span>
                    <h4 className="font-bold text-[#0D2B1E] text-sm sm:text-base line-clamp-1 mb-1 group-hover:text-[#45B1A0] transition-colors">
                      {item.product_name}
                    </h4>
                    <p className="text-[#0D2B1E] font-black">
                      ₦{Number(item.selling_price).toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="w-full p-8 bg-[#F4F9F8] rounded-xl border border-[#E2EFEB] text-center">
              <p className="text-[#416B5C] text-sm font-medium">No other items found in this brand or category right now.</p>
            </div>
          )}
        </section>

      </main>

      <Footer />

      {/* Floating Notification */}
      <div 
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0D2B1E] text-white px-5 py-3.5 rounded-xl shadow-2xl transition-all duration-300 transform ${
          toastVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#45B1A0]/20 text-[#45B1A0]">
          <CheckCircle size={16} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-wide">Added to Cart</span>
          <span className="text-xs text-white/70 line-clamp-1 max-w-[200px]">{product?.product_name}</span>
        </div>
      </div>
    </div>
  );
}