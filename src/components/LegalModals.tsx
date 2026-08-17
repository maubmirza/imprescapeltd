import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 py-4 sm:py-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F6] rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3.5rem)] flex flex-col shadow-2xl border border-[#E5E2D9] relative text-[#1A1C14] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="shrink-0 p-4 sm:p-6 pb-3 flex items-center justify-between border-b border-[#E5E2D9] bg-[#FAF9F6]">
          <div className="flex items-center gap-2 text-[#5A6344]">
            <ShieldCheck className="w-5 h-5" />
            <h2 className="font-serif text-lg sm:text-2xl font-bold text-[#1A1C14]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Guarantee Policy'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F0EDE4] hover:bg-[#E5E2D9] text-[#1A1C14] flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 sm:p-8 overflow-y-auto overscroll-contain flex-1 min-h-0 text-xs sm:text-sm text-[#5C5C5C] space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Imprescape Ltd</strong> values your privacy. We collect only the details you provide (such as your name, telephone number, email, and property address/postcode) solely for the purposes of answering your enquiries, performing on-site measurements, and providing written quotations.
              </p>
              <p>
                We do not sell, rent, or distribute your personal information to third-party marketing agencies. All communications are strictly related to your domestic construction, extension, or surfacing works.
              </p>
              <p>
                You may request deletion or correction of your contact records at any time by emailing <code>info@imprescapeltd.co.uk</code> or calling <code>020 3835 3534</code>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Fixed Written Price Guarantee:</strong> Imprescape Ltd provides fixed written quotations following an on-site physical survey. Quotations remain valid for 60 days from issue date unless specified otherwise.
              </p>
              <p>
                <strong>Workmanship Warranty:</strong> We provide up to a 10-year guarantee on extensions, renovations, and block paving, and up to 15 years on UV-stable resin bound driveways when installed on our specified sub-base.
              </p>
              <p>
                <strong>Site Safety &amp; Cleanliness:</strong> Our in-house team adheres to UK Health &amp; Safety standards, maintains public liability insurance, and guarantees the premises are swept and left secure daily.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="shrink-0 p-3 sm:p-4 border-t border-[#E5E2D9] flex justify-end bg-[#F2F1EC]">
          <button
            onClick={onClose}
            className="bg-[#5A6344] hover:bg-[#4A5238] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
