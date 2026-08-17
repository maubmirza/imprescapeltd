import { MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/imprescapeData';

interface AreasCoveredPillsProps {
  onSelectArea: (area: string) => void;
  selectedArea?: string;
}

export function AreasCoveredPills({ onSelectArea, selectedArea }: AreasCoveredPillsProps) {
  return (
    <div className="py-8 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[11px] font-bold tracking-widest uppercase text-[#7A7E6B] block mb-3">
          Areas Covered
        </span>

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          {COMPANY_DETAILS.primaryAreas.map((area) => {
            const isSelected = selectedArea === area;
            return (
              <button
                key={area}
                onClick={() => onSelectArea(area)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shadow-2xs border cursor-pointer ${
                  isSelected
                    ? 'bg-[#5A6344] text-white border-[#5A6344] ring-2 ring-[#5A6344]/20'
                    : 'bg-white text-[#3A3D32] border-[#E5E2D9] hover:border-[#5A6344] hover:bg-[#F2F1EC]'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#D1CFB9]' : 'text-[#5A6344]'}`} />
                <span>{area}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
