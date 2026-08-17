import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AreasCoveredPills } from './components/AreasCoveredPills';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjectSection } from './components/FeaturedProjectSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { GalleryLightboxModal } from './components/GalleryLightboxModal';
import { PostcodeLookupModal } from './components/PostcodeLookupModal';
import { LegalModal } from './components/LegalModals';
import { SERVICES } from './data/imprescapeData';
import { ServiceCategory, ServiceItem, ProjectItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<ProjectItem | null>(null);
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [quotePreFillService, setQuotePreFillService] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Account for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setQuotePreFillService(serviceName);
    }
    scrollToSection('quote');
  };

  const handleSelectServiceById = (serviceId: ServiceCategory) => {
    const found = SERVICES.find((s) => s.id === serviceId);
    if (found) {
      setSelectedServiceForModal(found);
    }
  };

  const handleAreaClick = () => {
    setIsPostcodeOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#2D2D2D] font-sans antialiased selection:bg-[#5A6344] selection:text-white overflow-x-hidden">
      {/* 1. Top Bar */}
      <TopBar onOpenQuote={() => handleOpenQuote()} />

      {/* 2. Sticky Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenQuote={() => handleOpenQuote()}
        onOpenPostcodeModal={() => setIsPostcodeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section with Palette Swatches */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onSelectService={handleSelectServiceById}
        />

        {/* 4. Stats Metrics Bar */}
        <StatsBar />

        {/* 5. Areas Covered Pills Bar */}
        <AreasCoveredPills
          onSelectArea={handleAreaClick}
        />

        {/* 6. Six Services Grid Section */}
        <ServicesSection
          onSelectService={handleSelectServiceById}
          onOpenQuoteForService={handleOpenQuote}
        />

        {/* 7. Featured Project */}
        <FeaturedProjectSection
          onOpenQuote={() => handleOpenQuote('Extension & Resin Bound')}
        />

        {/* 8. How A Job Runs 4-Step Process Section */}
        <HowWeWorkSection
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 9. Testimonials Carousel Section */}
        <TestimonialsSection />

        {/* 10. Filterable Project Gallery Section */}
        <GallerySection
          onSelectProject={(project) => setSelectedProjectForModal(project)}
        />

        {/* 11. FAQ Accordion Section */}
        <FaqSection />

        {/* 12. Free On-Site Survey & Quote Form Section */}
        <QuoteSection
          initialService={quotePreFillService}
        />
      </main>

      {/* 13. Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Interactive Modals */}
      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onOpenQuote={handleOpenQuote}
      />

      {/* Gallery Lightbox Modal */}
      <GalleryLightboxModal
        project={selectedProjectForModal}
        onClose={() => setSelectedProjectForModal(null)}
        onOpenQuote={handleOpenQuote}
      />

      {/* Areas Covered Modal */}
      <PostcodeLookupModal
        isOpen={isPostcodeOpen}
        onClose={() => setIsPostcodeOpen(false)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Privacy / Terms Modal */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType || 'privacy'}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
