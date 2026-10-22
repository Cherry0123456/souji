import React, { useState } from 'react';
import { MessageCircle, ArrowRight, MapPin, Sparkles, Utensils } from 'lucide-react';
import { BusinessConfig, createWhatsAppUrl } from '../config/business';

interface HeroProps {
  config: BusinessConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const heroWhatsAppUrl = createWhatsAppUrl(
    config.whatsAppNumber,
    "Hi Souji's Kitchen! I came across your website and would love to know what fresh dishes and snacks are available today."
  );

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#FAF7F2]">
      {/* Subtle warm decorative background aura */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-[#EAD8C7]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 rounded-full bg-[#D5E1D5]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Location & Brand trust marker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3F5E4D] mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#3F5E4D]" />
              <span>Guntur, Andhra Pradesh</span>
              <span aria-hidden="true" className="text-[#A48F7E]">·</span>
              <span className="text-[#8A3D24]">Homemade Food</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2D1F17] leading-[1.15] text-balance mb-6">
              {config.heroHeadline}
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#5A4638] leading-relaxed mb-8 max-w-xl text-balance">
              {config.heroSubheadline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#menu"
                onClick={handleMenuClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#8A3D24] hover:bg-[#72321C] active:bg-[#5C2816] rounded-xl shadow-xs hover:shadow-md transition-all duration-200 whitespace-nowrap shrink-0 group"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-[#2D1F17] bg-[#FFFFFF] hover:bg-[#F6EFE5] active:bg-[#ECE2D4] border border-[#D9CDBF] rounded-xl shadow-xs hover:shadow-sm transition-all duration-200 whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]/20" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Authentic Brand Markers */}
            <div className="pt-6 border-t border-[#E8DFC9] flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-[#6C584A]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8A3D24]" />
                <span className="font-medium text-[#2D1F17]">Pure Millet Snacks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3F5E4D]" />
                <span className="font-medium text-[#2D1F17]">Traditional Sweets</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D96B27]" />
                <span className="font-medium text-[#2D1F17]">Fresh Daily Batches</span>
              </div>
            </div>
          </div>

          {/* Large Appending Food Photography Column */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Outer decorative card frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#8A3D24]/10 via-transparent to-[#3F5E4D]/10 rounded-3xl blur-sm" />
              
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-[#E2D6C5] bg-[#EFE8DC] aspect-16/10">
                {/* Fallback container if image is loading or fails */}
                {(!imgLoaded || imgError) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F5EFE6] to-[#E9DFCF] text-[#5A4638]">
                    <Utensils className="w-12 h-12 text-[#8A3D24] mb-2 stroke-1" />
                    <p className="font-serif font-bold text-lg text-[#2D1F17]">Souji’s Kitchen Artisanal Food</p>
                    <p className="text-xs text-[#7A6757]">Guntur, Andhra Pradesh</p>
                  </div>
                )}

                <img
                  src="/src/assets/images/hero_food_spread_1792641870977.jpg"
                  alt="Artisanal homemade food spread from Souji’s Kitchen featuring South Indian millet snacks, tiffins, and bobbatlu"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-102 ${
                    imgLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => {
                    setImgError(true);
                    setImgLoaded(true);
                  }}
                />

                {/* Subtle bottom caption gradient for authentic editorial depth */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#E8D4B4] font-medium">Fresh From Our Kitchen</p>
                  <p className="text-sm font-semibold text-white/95">Handmade Snacks & Sweets · Guntur</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
