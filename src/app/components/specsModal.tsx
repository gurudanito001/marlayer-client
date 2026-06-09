import { X } from "lucide-react";

interface SpecsModalProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function SpecsModal({ product, isOpen, onClose }: SpecsModalProps) {
  if (!isOpen || !product) return null;

  
  const specs = typeof product.specifications === 'string' 
    ? JSON.parse(product.specifications) 
    : product.specifications || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[75vh] overflow-y-auto border border-[#E2EFEB] p-6 relative shadow-xl animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-xl text-[#416B5C] hover:bg-[#F4F9F8] hover:text-[#0D2B1E] transition-colors"
        >
          <X size={18} />
        </button>
        
        {/* Header */}
        <div className="mb-6">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#45B1A0] bg-[#E2EFEB]/40 px-2 py-0.5 rounded-md">
            {product.brand || "Device"} Specs
          </span>
          <h3 className="text-lg font-extrabold text-[#0D2B1E] mt-2 leading-tight">
            {product.name}
          </h3>
        </div>
        
        {/* Specs Table Matrix */}
        <div className="space-y-3">
          {Object.keys(specs).length > 0 ? (
            Object.entries(specs).map(([key, value]) => (
              <div key={key} className="flex justify-between items-start border-b border-[#F4F9F8] pb-2 text-xs">
                <span className="font-semibold text-[#416B5C] capitalize mr-4">
                  {key.replace(/_/g, ' ')}
                </span>
                <span className="text-[#0D2B1E] font-medium text-right max-w-[65%] break-words">
                  {String(value)}
                </span>
              </div>
            ))
          ) : (
            <p className="text-xs text-[#416B5C] italic text-center py-4">
              No detailed specifications layout configured for this device.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}