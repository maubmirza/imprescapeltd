import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/imprescapeData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenQuote: () => void;
  onOpenPostcodeModal: () => void;
}

export function Navbar({
  activeSection,
  onNavigate,
  onOpenQuote,
  onOpenPostcodeModal
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Services', target: 'services' },
    { label: 'How we work', target: 'how-we-work' },
    { label: 'Featured', target: 'featured' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'FAQ', target: 'faq' }
  ];

  const handleNavClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-xs border-b border-[#E5E2D9]'
          : 'bg-[#FAF9F6] border-b border-[#E5E2D9]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Natural Tones emblem */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#5A6344] group-hover:bg-[#4A5238] rounded-full flex items-center justify-center transition-colors shadow-2xs">
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white rounded-xs rotate-45" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#3A3D32] group-hover:text-[#1A1C14] transition-colors">
                  IMPRESCAPE
                </span>
                <span className="font-sans text-xs sm:text-sm font-light text-[#7A7E6B]">
                  LTD
                </span>
              </div>
              <span className="block text-[9px] sm:text-[10px] tracking-widest uppercase font-sans font-semibold text-[#7A7E6B] -mt-1">
                Domestic Construction &amp; Extensions
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className={`text-sm font-medium transition-colors hover:text-[#5A6344] cursor-pointer ${
                  activeSection === item.target
                    ? 'text-[#5A6344] font-semibold underline underline-offset-8 decoration-[#5A6344] decoration-2'
                    : 'text-[#5C5C5C]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={onOpenPostcodeModal}
              className="text-xs font-medium text-[#5C5C5C] hover:text-[#3A3D32] flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F0EDE4] hover:bg-[#E8E6DE] transition-colors cursor-pointer"
              title="Check areas we cover"
            >
              <MapPin className="w-3.5 h-3.5 text-[#5A6344]" />
              <span>Areas Covered</span>
            </button>

            <button
              onClick={onOpenQuote}
              className="bg-[#5A6344] hover:bg-[#4A5238] active:scale-[0.98] text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
            >
              Get a Free Quote
            </button>
          </nav>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="bg-[#5A6344] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#3A3D32] hover:bg-[#F0EDE4] transition-colors"
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-menu" className="md:hidden bg-[#FAF9F6] border-b border-[#E5E2D9] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="text-left px-3 py-2 text-base font-medium text-[#3A3D32] hover:bg-[#F0EDE4] rounded-xl transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E5E2D9] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPostcodeModal();
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#F0EDE4] text-[#3A3D32] text-sm font-medium"
            >
              <MapPin className="w-4 h-4 text-[#5A6344]" />
              Areas Covered
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-[#E5E2D9] text-[#3A3D32] text-sm font-semibold shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#5A6344]" />
              Call {COMPANY_DETAILS.phone}
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-[#5A6344] hover:bg-[#4A5238] text-white py-3 rounded-full text-sm font-semibold tracking-wide shadow-sm text-center"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
