import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/imprescapeData';
import { ServiceCategory } from '../types';

interface HeroProps {
  onOpenQuote: () => void;
  onSelectService: (serviceId: ServiceCategory) => void;
}

export function Hero({ onOpenQuote, onSelectService }: HeroProps) {
  // Swatches for the "OUR WORK" palette matrix in natural earthy tones
  const paletteCards = [
    {
      id: 'extensions' as ServiceCategory,
      title: 'Extensions',
      bgClass: 'bg-[#A67C52]',
      textClass: 'text-white',
      accent: '#B88B5E',
      texture: 'linear-gradient(135deg, #8F6840 0%, #A67C52 100%)',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'indian-stone' as ServiceCategory,
      title: 'Indian stone',
      bgClass: 'bg-[#8E7662]',
      textClass: 'text-white',
      accent: '#9F8772',
      texture: 'linear-gradient(135deg, #7C6653 0%, #8E7662 100%)',
      img: 'https://plus.unsplash.com/premium_photo-1675005272076-ddc6eeb97328?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'block-paving' as ServiceCategory,
      title: 'Block paving',
      bgClass: 'bg-[#5C5C5C]',
      textClass: 'text-white',
      accent: '#6E6E6E',
      texture: 'linear-gradient(135deg, #4A4D45 0%, #5C5C5C 100%)',
      img: 'https://images.unsplash.com/photo-1657045898661-1a56bc5a8fd2?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'renovations' as ServiceCategory,
      title: 'Renovations',
      bgClass: 'bg-[#7A7E6B]',
      textClass: 'text-white',
      accent: '#8B907C',
      texture: 'linear-gradient(135deg, #686C5A 0%, #7A7E6B 100%)',
      img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'resin-bound' as ServiceCategory,
      title: 'Resin bound',
      bgClass: 'bg-[#5A6344]',
      textClass: 'text-white',
      accent: '#6B7552',
      texture: 'linear-gradient(135deg, #4A5238 0%, #5A6344 100%)',
      img: 'https://media.istockphoto.com/id/1582388250/photo/coarse-surface-of-pavement-made-of-pink-tiles-of-resin-bound-gravel.webp?a=1&b=1&s=612x612&w=0&k=20&c=uj-XiDXf7DPvLbUlTGm0XY20bhduk8En-pKK3dci66Y=',
    },
    {
      id: 'rubber-surfacing' as ServiceCategory,
      title: 'Rubber surfacing',
      bgClass: 'bg-[#3A3D32]',
      textClass: 'text-white',
      accent: '#4B4F40',
      texture: 'linear-gradient(135deg, #2E3127 0%, #3A3D32 100%)',
      img: 'https://static.vecteezy.com/system/resources/previews/002/197/880/large_2x/colorful-ground-in-the-playground-free-photo.jpg',
    },
  ];

  return (
    <section id="hero" className="relative pt-10 pb-16 md:py-20 overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3.5 py-1 bg-[#F0EDE4] text-[#7A7E6B] text-[10px] sm:text-xs uppercase tracking-widest font-bold rounded-full">
              {COMPANY_DETAILS.headlineTagline}
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1C14] leading-[1.12] tracking-tight font-medium">
              From foundations<br />
              to the finished <span className="italic font-serif text-[#5A6344] font-semibold">space.</span>
            </h1>

            <p className="text-[#6B6B6B] text-base sm:text-lg leading-relaxed max-w-2xl">
              Imprescape handles domestic construction and extensions end to end — including driveways and landscaping — across Cheshire, Staffordshire and Shropshire, finished by the same small, skilled team from quote to clean-up.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 bg-[#A67C52] hover:bg-[#8F6840] active:scale-[0.98] text-white rounded-xl text-sm sm:text-base font-bold shadow-lg shadow-[#A67C5226] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#3A3D32] hover:text-[#5A6344] underline underline-offset-4 decoration-[#D1CFB9] hover:decoration-[#5A6344] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#5A6344]" />
                <span>Or call {COMPANY_DETAILS.phone}</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#7A7E6B]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A6344]" />
                <span>Free on-site survey</span>
              </div>
              <span className="text-[#D1CFB9] hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A6344]" />
                <span>Fixed written quote</span>
              </div>
              <span className="text-[#D1CFB9] hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A6344]" />
                <span>No call-out charge</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: "OUR WORK" Material Palette Grid */}
          <div className="lg:col-span-5">
            <div className="bg-[#F2F1EC] border border-[#E5E2D9] p-4 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xs">
              <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#7A7E6B]">
                  Our Work
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#8A8A8A] font-medium">
                  Click any to inspect
                </span>
              </div>

              {/* 3x2 Material Cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3.5">
                {paletteCards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => onSelectService(card.id)}
                    className="group relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-left flex flex-col justify-end p-2 sm:p-3 cursor-pointer border border-black/5"
                    style={{
                      background: card.texture,
                    }}
                  >
                    {/* Background image preview with soft overlay */}
                    <img
                      src={card.img}
                      alt={card.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=400&q=80';
                      }}
                      className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-60 transition-opacity duration-300"
                    />
                    
                    {/* Dark gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="relative z-10">
                      <span className="block text-[10px] sm:text-xs font-semibold text-white tracking-tight leading-tight group-hover:underline">
                        {card.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-3.5 sm:mt-4 pt-3 sm:pt-3.5 border-t border-[#E5E2D9] flex items-center justify-between text-[10px] sm:text-[11px] text-[#7A7E6B]">
                <span>All services by in-house team</span>
                <span className="font-semibold text-[#3A3D32]">Cheshire · Staffs · Shrops</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
