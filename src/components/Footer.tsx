import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/imprescapeData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenQuote: () => void;
}

export function Footer({ onNavigate, onOpenPrivacy, onOpenTerms, onOpenQuote }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E2217] text-[#B8BAA9] border-t border-[#2E3324] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* 4-column footer structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2E3324]">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#5A6344] rounded-full flex items-center justify-center">
                <div className="w-3.5 h-3.5 border-2 border-white rounded-xs rotate-45" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                  IMPRESCAPE
                </span>
                <p className="text-[10px] text-[#A3AF88] uppercase tracking-wider">
                  Domestic Construction &amp; Extensions
                </p>
              </div>
            </div>

            <p className="text-xs text-[#9A9E8D] leading-relaxed">
              High-quality domestic building, home extensions, resin bound surfacing, block paving, and landscaping across Cheshire, Staffordshire, and Shropshire.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#A3AF88]">
              <ShieldCheck className="w-4 h-4 text-[#A3AF88]" />
              <span>Full Workmanship Guarantee &amp; Insured</span>
            </div>
          </div>

          {/* Core Services Col */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-4">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-[#9A9E8D] hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Covered Col */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-4">
              Areas Covered
            </h4>
            <ul className="space-y-2 text-xs text-[#9A9E8D]">
              <li>Macclesfield &amp; Prestbury</li>
              <li>Wilmslow &amp; Alderley Edge</li>
              <li>Knutsford &amp; Northwich</li>
              <li>Leek &amp; Stoke-on-Trent (Staffs)</li>
              <li>Market Drayton &amp; Shropshire</li>
            </ul>
            <p className="text-[11px] text-[#7A7E6B] mt-3">
              Surveys conducted within 35 miles of Macclesfield.
            </p>
          </div>

          {/* Contact Col */}
          <div className="space-y-3 text-xs">
            <h4 className="font-semibold text-white uppercase tracking-wider mb-4">
              Contact Imprescape
            </h4>

            <div className="flex items-start gap-2.5 text-[#9A9E8D]">
              <MapPin className="w-4 h-4 text-[#A3AF88] shrink-0 mt-0.5" />
              <span>Macclesfield, Cheshire, United Kingdom</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#A3AF88] shrink-0" />
              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="text-white hover:text-[#A3AF88] font-medium transition-colors"
              >
                {COMPANY_DETAILS.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#A3AF88] shrink-0" />
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="text-[#9A9E8D] hover:text-white transition-colors"
              >
                {COMPANY_DETAILS.email}
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full bg-[#5A6344] hover:bg-[#4A5238] text-white py-2.5 px-3 rounded-full text-xs font-semibold tracking-wide transition-colors cursor-pointer text-center"
              >
                Book On-Site Survey
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7E6B]">
          <div>
            © 2026 Imprescape Ltd · Macclesfield, Cheshire
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('quote')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-full bg-[#2E3324] text-[#A3AF88] hover:text-white hover:bg-[#5A6344] transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
