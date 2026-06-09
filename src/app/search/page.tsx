'use client'

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { ChevronRight, SearchX, Search as SearchIcon, ShoppingCart } from "lucide-react";
import Navbar from "../gadgets/gadgetsNavbar"; 
import Footer from "../gadgets/gadgetsFooter";
import SpecsModal from "@/app/components/specsModal";
import { searchGadgets } from "@/app/lib/actions/gadgets";
import { useCartStore } from "@/app/store/cartStore";

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

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const categoryLock = searchParams.get("cat") || undefined;

  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [toastProduct, setToastProduct] = useState<string | null>(null);
  
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query && !categoryLock) {
        setResults([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const response = await searchGadgets({ 
          searchTerm: query || undefined,
          category: categoryLock,
          limit: 40 
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

        setResults(mappedProducts);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, categoryLock]);

  return (
    <>
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 md:px-10 lg:px-12 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12 border-b border-[#E2EFEB] pb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-[#0D2B1E] tracking-tight mb-2">
              Search Results
            </h1>
            <p className="text-sm text-[#416B5C]">
              {query ? <>Showing configurations for <span className="font-bold text-[#45B1A0]">"{query}"</span></> : "Showing catalog index"}
              {categoryLock && <span className="text-xs uppercase bg-[#E2EFEB] text-[#0D2B1E] ml-2 px-2 py-0.5 rounded-md font-bold">{categoryLock} only</span>}
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold text-[#416B5C] bg-[#E2EFEB]/50 px-4 py-2 rounded-xl self-start sm:self-auto">
            <SearchIcon className="w-3.5 h-3.5 text-[#45B1A0]" />
            <span>{results.length} Nodes Isolated</span>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center min-h-[400px] bg-white rounded-3xl border border-[#E2EFEB]">
            <div className="w-8 h-8 border-2 border-[#45B1A0] border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm font-semibold text-[#416B5C]">Querying hardware ledger...</p>
          </div>
        ) : results.length === 0 ? (
          <div className="flex flex-col justify-center items-center min-h-[400px] bg-white rounded-3xl border border-[#E2EFEB] p-8 text-center">
            <div className="w-16 h-16 bg-[#F4F9F8] text-[#416B5C] rounded-full flex items-center justify-center mb-4">
              <SearchX size={32} />
            </div>
            <p className="text-lg font-bold text-[#0D2B1E] mb-2">No hardware matched your query</p>
            <p className="text-sm text-[#416B5C]">Verify formatting layout parameters or expand scope criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((product) => (
              <div key={product.id} className="group flex flex-col bg-white rounded-2xl border border-[#E2EFEB] p-4 transition-all duration-200 hover:shadow-md hover:border-[#45B1A0]/40">
                <div className="relative w-full aspect-square mb-4 bg-[#F4F9F8] rounded-xl overflow-hidden flex items-center justify-center border border-[#E2EFEB]/40 p-6">
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-300" priority={false} />
                  {product.brand && (
                    <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider text-[#416B5C] bg-white border border-[#E2EFEB] px-2 py-0.5 rounded-md">
                      {product.brand}
                    </span>
                  )}
                </div>

                <div className="flex flex-col flex-grow px-1">
                  <h2 className="text-sm font-bold text-[#0D2B1E] tracking-tight line-clamp-1 mb-1 group-hover:text-[#45B1A0] transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-xs text-[#416B5C] leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4">
                    {product.description || "No layout configuration description specified for this terminal variant."}
                  </p>
                  
                  <div className="mt-auto pt-3 border-t border-[#F4F9F8] flex items-baseline justify-between">
                    <span className="text-[10px] font-bold text-[#416B5C] uppercase tracking-wider">Acquisition</span>
                    <span className="text-base font-extrabold text-[#0D2B1E]">
                      ${Number(product.price).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 pt-2">
                  <button type="button" onClick={() => { setSelectedProduct(product); setIsSpecsOpen(true); }} className="py-2 px-3 rounded-xl bg-[#F4F9F8] text-[#0D2B1E] font-bold text-xs text-center border border-[#E2EFEB] hover:bg-[#E2EFEB] transition-colors">
                    Specifications
                  </button>
                  <button type="button" onClick={() => { addToCart(product); setToastProduct(product.name); setTimeout(() => setToastProduct(null), 3000); }} className="flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-[#0D2B1E] text-white font-bold text-xs hover:bg-[#45B1A0] transition-colors shadow-sm">
                    <span>Add to Cart</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <SpecsModal product={selectedProduct} isOpen={isSpecsOpen} onClose={() => { setIsSpecsOpen(false); setSelectedProduct(null); }} />

      {/* Sleek Toast */}
      <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0D2B1E] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#1B4D3A] transition-all duration-300 transform ${toastProduct ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"}`}>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#45B1A0]/20 text-[#45B1A0]"><ShoppingCart size={16} /></div>
        <div className="flex flex-col"><span className="text-sm font-bold tracking-wide">Item added to cart</span><span className="text-xs text-white/70 line-clamp-1 max-w-[200px]">{toastProduct}</span></div>
      </div>
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="bg-[#FAFDFB] min-h-screen flex flex-col antialiased">
      <Navbar />
      <Suspense fallback={<div className="flex-grow flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 border-2 border-[#45B1A0] border-t-transparent rounded-full animate-spin" /></div>}>
        <SearchContent />
      </Suspense>
      <Footer />
    </div>
  );
}