import { X, MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AREAS_LIST, COMPANY_DETAILS } from '../data/imprescapeData';

interface PostcodeLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export function PostcodeLookupModal({ isOpen, onClose, onOpenQuote }: PostcodeLookupModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 py-4 sm:py-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F6] rounded-2xl sm:rounded-3xl max-w-xl w-full max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3.5rem)] flex flex-col shadow-2xl border border-[#E5E2D9] relative text-[#1A1C14] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="shrink-0 p-4 sm:p-5 bg-[#2E3324] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#3D4430] flex items-center justify-center text-[#A3AF88] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-semibold leading-snug">
                Areas Covered
              </h2>
              <p className="text-[11px] sm:text-xs text-[#B8BAA9] leading-tight">
                Macclesfield, Cheshire, Staffordshire &amp; Shropshire
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto overscroll-contain flex-1 min-h-0">
          {/* Service Guarantee Banner */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F2F1EC] border border-[#E5E2D9] flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#5A6344] shrink-0 mt-0.5" />
            <div className="text-xs text-[#3A3D32] leading-relaxed">
              <span className="font-semibold block text-[#1A1C14] mb-0.5">Free On-Site Survey &amp; Quotation Across All 4 Counties</span>
              We provide free property visits with no call-out charge across Cheshire, Staffordshire, Shropshire, and Macclesfield.
            </div>
          </div>

          {/* Core Areas List */}
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5A6344] block mb-2.5">
              Primary Service Counties
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {AREAS_LIST.map((area, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-2xl border border-[#E5E2D9] bg-white shadow-2xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-xs sm:text-sm text-[#1A1C14]">
                      {area.name}
                    </span>
                    <span className="text-[9px] sm:text-[10px] bg-[#F2F1EC] text-[#5C5C5C] px-2 py-0.5 rounded font-medium">
                      {area.county}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6B6B6B] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Survey CTA */}
          <div className="pt-1">
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="w-full bg-[#5A6344] hover:bg-[#4A5238] active:scale-[0.99] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <span>Book a Free On-Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Direct Phone Call Prompt */}
          <div className="pt-2.5 border-t border-[#E5E2D9] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#7A7E6B]">
            <span>Have a specific project in mind?</span>
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="font-semibold text-[#5A6344] hover:underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {COMPANY_DETAILS.phone}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
