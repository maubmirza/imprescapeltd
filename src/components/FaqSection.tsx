import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/imprescapeData';

export function FaqSection() {
  // First item open by default
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-[#F2F1EC] border-t border-[#E5E2D9]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#7A7E6B] block mb-2">
            FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1C14] tracking-tight">
            Common questions
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white border border-[#E5E2D9] rounded-2xl overflow-hidden transition-all shadow-2xs"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                  className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1A1C14] hover:text-[#5A6344] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#7A7E6B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#5A6344]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-content-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#6B6B6B] leading-relaxed border-t border-[#F0EDE4]"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

