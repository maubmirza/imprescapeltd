import { Ruler, FileCheck, Hammer, ShieldCheck, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/imprescapeData';

interface HowWeWorkSectionProps {
  onOpenQuote: () => void;
}

export function HowWeWorkSection({ onOpenQuote }: HowWeWorkSectionProps) {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'Ruler':
        return <Ruler className="w-5 h-5" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5" />;
      case 'Hammer':
        return <Hammer className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Ruler className="w-5 h-5" />;
    }
  };

  return (
    <section id="how-we-work" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#7A7E6B] block mb-2">
            How A Job Runs
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1C14] tracking-tight">
            From first call to finished project.
          </h2>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-[#E5E2D9] hover:border-[#5A6344] p-6 sm:p-7 rounded-3xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#7A7E6B] group-hover:text-[#5A6344]">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#F0EDE4] text-[#5A6344] flex items-center justify-center group-hover:bg-[#5A6344] group-hover:text-white transition-colors">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#1A1C14] tracking-tight mb-3">
                  {step.title}
                </h3>

                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Micro bullet details */}
                <div className="space-y-1.5 pt-2 border-t border-[#F0EDE4]">
                  {step.details.slice(0, 2).map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-[#5C5C5C]">
                      <Check className="w-3 h-3 text-[#5A6344] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 text-[11px] font-medium text-[#7A7E6B]">
                Step {step.number} of 04
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner for peace of mind */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F2F1EC] border border-[#E5E2D9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="font-semibold text-sm text-[#1A1C14]">
              Ready to schedule step 01 (Free on-site survey)?
            </span>
            <p className="text-xs text-[#6B6B6B] mt-0.5">
              No pushy sales reps — just an honest conversation with our lead surveyor.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="shrink-0 bg-[#5A6344] hover:bg-[#4A5238] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full sm:rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Book Free Survey
          </button>
        </div>

      </div>
    </section>
  );
}
