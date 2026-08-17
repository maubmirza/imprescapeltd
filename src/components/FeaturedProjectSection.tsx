import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { FEATURED_PROJECT } from '../data/imprescapeData';

interface FeaturedProjectSectionProps {
  onOpenQuote: () => void;
}

export function FeaturedProjectSection({ onOpenQuote }: FeaturedProjectSectionProps) {
  return (
    <section id="featured" className="py-20 bg-[#F2F1EC] border-y border-[#E5E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#7A7E6B] block mb-2">
                Featured Project
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1C14] tracking-tight">
                Built to last, finished with care.
              </h2>
            </div>

            <p className="text-[#6B6B6B] text-base leading-relaxed">
              Every project is handled by our own team — from foundations and structure through to the final clean-up. We ensure proper sub-base depths, precision laser levels, and a clean, safe working environment for you and your family throughout.
            </p>

            {/* Checkmark highlights */}
            <div className="space-y-3 pt-1">
              {FEATURED_PROJECT.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-medium text-[#3A3D32]">
                  <div className="w-5 h-5 rounded-full bg-[#5A6344] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="bg-[#5A6344] hover:bg-[#4A5238] active:scale-[0.98] text-white px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Plan your project with us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Static Image Presentation */}
          <div className="lg:col-span-6">
            <div className="bg-white p-3.5 sm:p-5 rounded-3xl shadow-xs border border-[#E5E2D9]">
              
              {/* Image Container */}
              <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden border border-[#E5E2D9] group shadow-2xs">
                <img
                  src={FEATURED_PROJECT.afterImage}
                  alt="Finished Extension and Landscaping"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />

                {/* Badges */}
                <div className="absolute top-3.5 left-3.5 z-20 bg-[#2E3324]/85 backdrop-blur-xs text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase flex items-center gap-1.5 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A3AF88]" />
                  <span>Completed Project</span>
                </div>

                <div className="absolute bottom-3.5 right-3.5 z-20 bg-[#5A6344]/90 backdrop-blur-xs text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase shadow-xs">
                  {FEATURED_PROJECT.location}
                </div>
              </div>

              {/* Caption */}
              <div className="mt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-[#7A7E6B]">
                <span className="font-medium text-[#3A3D32]">{FEATURED_PROJECT.location}</span>
                <span className="italic">{FEATURED_PROJECT.scope}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
