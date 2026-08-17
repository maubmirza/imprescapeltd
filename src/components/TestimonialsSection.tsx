import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/imprescapeData';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-[#F2F1EC] border-y border-[#E5E2D9] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Tag */}
        <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#7A7E6B] block mb-3">
          What Clients Say
        </span>

        {/* 5-star rating */}
        <div className="flex justify-center items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#A67C52] text-[#A67C52]" />
          ))}
          <span className="ml-2 text-xs font-semibold text-[#3A3D32]">
            5.0 Star Feedback
          </span>
        </div>

        {/* Quote presentation */}
        <div className="relative min-h-[140px] flex flex-col justify-center items-center px-4">
          <Quote className="w-8 h-8 text-[#D1CFB9] mx-auto mb-2 opacity-70" />
          
          <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#1A1C14] font-normal leading-snug tracking-tight max-w-3xl transition-opacity duration-300">
            “{current.quote}”
          </blockquote>

          <div className="mt-5 text-sm sm:text-base font-medium text-[#5C5C5C]">
            — {current.author}, <span className="font-semibold text-[#5A6344]">{current.location}</span>
          </div>

          <div className="text-xs text-[#7A7E6B] mt-1">
            Project: {current.role}
          </div>
        </div>

        {/* Pagination Dots & Navigation */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full text-[#7A7E6B] hover:text-[#1A1C14] hover:bg-[#E5E2D9] transition-colors cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-6 h-2 bg-[#5A6344]'
                    : 'w-2 h-2 bg-[#D1CFB9] hover:bg-[#A3AF88]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full text-[#7A7E6B] hover:text-[#1A1C14] hover:bg-[#E5E2D9] transition-colors cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
