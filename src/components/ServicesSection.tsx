import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/imprescapeData';
import { ServiceCategory } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceCategory) => void;
  onOpenQuoteForService: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService, onOpenQuoteForService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#7A7E6B] block mb-2">
            What We Do
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1C14] tracking-tight">
            Six services, one standard of finish.
          </h2>
        </div>

        {/* 6 Clean Service Cards in 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#E5E2D9] hover:border-[#5A6344] p-7 sm:p-8 rounded-3xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-[#7A7E6B] group-hover:text-[#5A6344] transition-colors">
                    {service.number}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1C14] tracking-tight group-hover:text-[#5A6344] transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[#6B6B6B] text-sm sm:text-base leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Key feature pills preview */}
                <div className="mb-6 space-y-1.5">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#5C5C5C]">
                      <Check className="w-3.5 h-3.5 text-[#5A6344] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0EDE4] flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service.id)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#5A6344] hover:text-[#4A5238] group-hover:underline underline-offset-4 cursor-pointer"
                >
                  <span>View examples</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenQuoteForService(service.title)}
                  className="text-xs font-semibold text-[#7A7E6B] hover:text-[#1A1C14] hover:bg-[#F0EDE4] px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                >
                  Request quote
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
