"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Search, X } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const pathname = usePathname(); 

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onClose();
      
      // Determine page category context dynamically
      let categoryContext = "";
      if (pathname.toLowerCase().includes("phones")) categoryContext = "phones";
      if (pathname.toLowerCase().includes("laptops")) categoryContext = "laptops";
      if (pathname.toLowerCase().includes("accessories")) categoryContext = "accessories";

      const catParam = categoryContext ? `&cat=${categoryContext}` : "";
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}${catParam}`);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-black/60">
      <div className="fixed inset-0" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
        <form onSubmit={handleSearch} className="flex items-center p-2 border-b border-[#E6F2F0]">
          <div className="pl-4 text-[#45B1A0]">
            <Search className="w-6 h-6" />
          </div>
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search matching items..."
            className="flex-grow bg-transparent border-none text-lg text-[#0D2B1E] placeholder:text-[#416B5C]/60 focus:ring-0 px-4 py-4 outline-none"
          />
          <button type="button" onClick={onClose} className="p-3 text-[#416B5C] hover:text-[#0D2B1E] hover:bg-[#F4F9F8] rounded-xl mr-1">
            <X className="w-5 h-5" />
          </button>
        </form>
        
        <div className="p-6 bg-[#FAFDFB]">
          <p className="text-xs font-semibold text-[#416B5C] uppercase tracking-wider mb-3">Quick Links</p>
          <div className="flex gap-2 flex-wrap">
            {["iPhone", "Samsung", "MacBook", "Charger"].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSearchTerm(tag)}
                className="text-sm text-[#0D2B1E] bg-white border border-[#E6F2F0] px-3 py-1.5 rounded-lg hover:border-[#45B1A0] transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}