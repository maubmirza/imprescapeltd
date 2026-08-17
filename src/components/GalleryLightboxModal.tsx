import { X, MapPin, Layers, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface GalleryLightboxModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuote: (serviceName: string) => void;
}

export function GalleryLightboxModal({ project, onClose, onOpenQuote }: GalleryLightboxModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 py-4 sm:py-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F6] rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3.5rem)] flex flex-col shadow-2xl border border-[#E5E2D9] relative text-[#1A1C14] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 text-[#1A1C14] hover:bg-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Media Container */}
        <div className="relative aspect-16/10 sm:aspect-16/9 w-full max-h-[42vh] shrink-0 overflow-hidden bg-black">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=1200&q=80';
            }}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details - Scrollable */}
        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 overflow-y-auto overscroll-contain flex-1 min-h-0">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E5E2D9]">
            <div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#5A6344] uppercase tracking-wider block">
                {project.categoryLabel}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-[#1A1C14] tracking-tight">
                {project.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
              <span className="flex items-center gap-1 bg-[#F2F1EC] px-2.5 py-1 rounded-md">
                <MapPin className="w-3 h-3 text-[#5A6344]" />
                <span>{project.location}, {project.county}</span>
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#5C5C5C] leading-relaxed">
            {project.description}
          </p>

          <div className="bg-[#F2F1EC] p-3.5 sm:p-4 rounded-2xl border border-[#E5E2D9] text-xs">
            <div className="flex items-start gap-2.5">
              <Layers className="w-4 h-4 text-[#5A6344] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#7A7E6B] block text-[10px] uppercase font-bold">Materials &amp; Finish</span>
                <span className="font-medium text-[#1A1C14]">{project.materials}</span>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-2 sm:pt-3 flex items-center justify-between gap-2">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-[#6B6B6B] hover:text-[#1A1C14] cursor-pointer px-2 py-1"
            >
              Back to gallery
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenQuote(project.categoryLabel);
              }}
              className="bg-[#5A6344] hover:bg-[#4A5238] active:scale-[0.98] text-white px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <span>Get Quote for Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
