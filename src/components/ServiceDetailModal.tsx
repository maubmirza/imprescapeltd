import { X, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: (serviceName: string) => void;
}

export function ServiceDetailModal({ service, onClose, onOpenQuote }: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 py-4 sm:py-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F6] rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3.5rem)] flex flex-col shadow-2xl border border-[#E5E2D9] relative text-[#1A1C14] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 text-[#1A1C14] hover:bg-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Hero Header with Image */}
        <div className="relative h-44 sm:h-60 md:h-72 w-full shrink-0 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=1200&q=80';
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C14] via-[#1A1C14]/40 to-transparent" />
          
          <div className="absolute bottom-3 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 text-white">
            <span className="font-mono text-[10px] sm:text-xs font-bold text-[#A3AF88] uppercase tracking-wider">
              Service {service.number}
            </span>
            <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mt-0.5">
              {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#D1CFB9] mt-0.5 sm:mt-1 line-clamp-1">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Content Body - Scrollable */}
        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 overflow-y-auto overscroll-contain flex-1 min-h-0">
          
          {/* Full description */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1A1C14] mb-1.5 sm:mb-2">
              Overview &amp; Standards
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Specifications & Features */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1A1C14] mb-2 sm:mb-3">
              Included Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#3A3D32] bg-white p-2.5 rounded-xl border border-[#E5E2D9]">
                  <Check className="w-3.5 h-3.5 text-[#5A6344] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-3 sm:pt-4 border-t border-[#E5E2D9] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[11px] sm:text-xs text-[#7A7E6B] text-center sm:text-left">
              Free on-site survey &amp; fixed price quotation across Cheshire, Staffordshire &amp; Shropshire.
            </span>

            <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-3.5 sm:px-4 py-2.5 text-xs font-semibold text-[#5C5C5C] hover:text-[#1A1C14] hover:bg-[#F2F1EC] rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(service.title);
                }}
                className="w-1/2 sm:w-auto bg-[#5A6344] hover:bg-[#4A5238] active:scale-[0.98] text-white px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
