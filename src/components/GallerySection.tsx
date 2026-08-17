import { useState } from 'react';
import { Eye, MapPin, Sparkles } from 'lucide-react';
import { GALLERY_PROJECTS } from '../data/imprescapeData';
import { ProjectItem } from '../types';

interface GallerySectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function GallerySection({ onSelectProject }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'extensions', label: 'Extensions' },
    { id: 'renovations', label: 'Renovations' },
    { id: 'resin-bound', label: 'Resin bound' },
    { id: 'block-paving', label: 'Block paving' },
    { id: 'indian-stone', label: 'Indian stone' },
    { id: 'rubber-surfacing', label: 'Rubber' }
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#7A7E6B] block mb-2">
            Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1C14] tracking-tight">
            Recent work across the region.
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#5A6344] text-white shadow-xs'
                  : 'bg-[#F0EDE4] text-[#5C5C5C] hover:bg-[#E8E6DE] hover:text-[#1A1C14]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 8-Grid Project Portfolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              aria-label={`View full details and photos for ${project.title} (${project.location})`}
              onClick={() => onSelectProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
              className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-[#F2F1EC] border border-[#E5E2D9] shadow-2xs hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-[#5A6344] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Main Photo */}
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=900&q=80';
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Bottom Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity" />

              {/* Badge & Location */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#2E3324]/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide">
                <MapPin className="w-3 h-3 text-[#A3AF88]" />
                <span>{project.location}</span>
              </div>

              {/* Project Label at Bottom */}
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <span className="text-xs sm:text-sm font-semibold text-white tracking-tight block group-hover:underline">
                  {project.categoryLabel}
                </span>
                <span className="text-[11px] text-[#E5E2D9] line-clamp-1 mt-0.5">
                  {project.title}
                </span>
              </div>

              {/* Hover inspect icon */}
              <div className="absolute inset-0 bg-[#5A6344]/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-white/95 text-[#5A6344] flex items-center justify-center shadow-md">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small note at bottom */}
        <div className="mt-8 text-center text-xs text-[#7A7E6B]">
          <span>Click any project to view full photos, material specifications, and scope of works.</span>
        </div>

      </div>
    </section>
  );
}
