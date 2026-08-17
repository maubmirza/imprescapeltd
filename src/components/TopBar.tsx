import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/imprescapeData';

interface TopBarProps {
  onOpenQuote: () => void;
}

export function TopBar({ onOpenQuote }: TopBarProps) {
  return (
    <div className="bg-[#2E3324] text-[#D1CFB9] text-xs py-2 px-4 border-b border-[#3D4430] transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <MapPin className="w-3.5 h-3.5 text-[#A3AF88] shrink-0" />
          <span className="font-medium text-[#E5E2D9]">
            Macclesfield, Cheshire — serving Cheshire, Staffordshire &amp; Shropshire
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden md:flex items-center gap-1.5 text-[#B8BAA9]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A3AF88]" />
            <span>Full Workmanship Guarantee</span>
          </div>

          <a
            href={`tel:${COMPANY_DETAILS.phoneClean}`}
            className="flex items-center gap-1.5 font-semibold text-white hover:text-[#A3AF88] transition-colors tracking-wide"
            title="Call Imprescape directly"
          >
            <Phone className="w-3.5 h-3.5 text-[#A3AF88]" />
            <span>{COMPANY_DETAILS.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
