import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Instagram } from 'lucide-react';
import { BusinessConfig, createWhatsAppUrl } from '../config/business';

interface NavbarProps {
  config: BusinessConfig;
}

export const Navbar: React.FC<NavbarProps> = ({ config }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generalWhatsAppUrl = createWhatsAppUrl(
    config.whatsAppNumber,
    "Hello Souji's Kitchen! I would like to enquire about your available food items and place an order."
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E6DFD5]'
          : 'bg-[#FAF7F2]/80 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly adhered Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (Nav links) - Zone 3 (CTA) */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand title, one line */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group whitespace-nowrap shrink-0"
          >
            <span className="w-9 h-9 rounded-full bg-[#8A3D24] text-[#FAF7F2] flex items-center justify-center font-serif text-lg font-bold shadow-xs">
              S
            </span>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#2D1F17] group-hover:text-[#8A3D24] transition-colors">
              {config.name}
            </span>
          </a>

          {/* Zone 2: 4-5 nav links, 1-2 word labels, single-line */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5A4638]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap shrink-0 hover:text-[#8A3D24] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8A3D24] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Souji's Kitchen on Instagram"
              className="p-2 text-[#5A4638] hover:text-[#8A3D24] hover:bg-[#F3ECE0] rounded-lg transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25B1B] active:bg-[#A94C12] rounded-lg shadow-xs hover:shadow-sm transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#D96B27] rounded-lg shadow-xs whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2D1F17] hover:bg-[#EFE7DC] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#8A3D24]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E6DFD5] shadow-lg animate-in fade-in duration-200">
          <div className="px-5 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2 text-base font-medium text-[#2D1F17] hover:text-[#8A3D24] border-b border-[#F0E8DC] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25B1B] rounded-lg shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-[#5A4638] bg-[#EFE8DC] hover:bg-[#E5DCCF] rounded-lg transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram (@soujis_kitchen)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
