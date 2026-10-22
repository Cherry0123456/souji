import React from 'react';
import { MessageCircle, Instagram, Heart, Settings2 } from 'lucide-react';
import { BusinessConfig, createWhatsAppUrl } from '../config/business';

interface FooterProps {
  config: BusinessConfig;
  onOpenConfig?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenConfig }) => {
  const currentYear = 2026;

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generalWhatsAppUrl = createWhatsAppUrl(
    config.whatsAppNumber,
    "Hello Souji's Kitchen! I would like to order fresh homemade food."
  );

  return (
    <footer className="bg-[#241710] text-[#EAE2D5] pt-16 pb-12 border-t border-[#38271E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3B2920]">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#8A3D24] text-[#FAF7F2] flex items-center justify-center font-serif text-base font-bold">
                S
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                {config.name}
              </span>
            </div>
            
            <p className="text-sm text-[#BDB0A3] max-w-sm leading-relaxed">
              {config.tagline}. Authentic South Indian tastes, pure millet snacks, and homemade goodness crafted in Guntur, Andhra Pradesh.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#332117] hover:bg-[#8A3D24] text-[#FAF7F2] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#332117] hover:bg-[#D96B27] text-[#FAF7F2] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D98A52]">
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-[#BDB0A3] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Order & Location Summary */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D98A52]">
              Direct WhatsApp Orders
            </p>
            <p className="text-sm text-[#BDB0A3] leading-relaxed">
              Based in Guntur, Andhra Pradesh. Place direct orders for fresh batch availability.
            </p>
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25B1B] rounded-xl shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#96887B]">
          <p>© {currentYear} {config.name}. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {onOpenConfig && (
              <button
                type="button"
                onClick={onOpenConfig}
                className="inline-flex items-center gap-1.5 text-[#BDB0A3] hover:text-white transition-colors"
                title="Manage business settings, phone number & hours placeholder"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>Owner Settings / Config</span>
              </button>
            )}
            <span className="text-[#523F34]">·</span>
            <span>Guntur, Andhra Pradesh</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
