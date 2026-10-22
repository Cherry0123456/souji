import React from 'react';
import { Instagram, ZoomIn, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryPhoto } from '../data/menuData';
import { BusinessConfig } from '../config/business';

interface FoodGalleryProps {
  config: BusinessConfig;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const FoodGallery: React.FC<FoodGalleryProps> = ({ config, onSelectPhoto }) => {
  return (
    <section id="gallery" className="py-20 bg-[#F5EFE6]/50 border-t border-[#EAE1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3F5E4D] mb-2 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              <span>Authentic Food Photography</span>
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1F17] tracking-tight text-balance">
              Kitchen Moments & Creations
            </h2>
            <p className="text-base sm:text-lg text-[#5A4638] mt-3 leading-relaxed">
              Take a closer look at our freshly crafted items. Click any photo for a detailed view and direct WhatsApp availability check.
            </p>
          </div>

          <a
            href={config.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#8A3D24] bg-white hover:bg-[#F3ECE0] border border-[#D9CEBF] rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0 self-start md:self-end"
          >
            <Instagram className="w-4 h-4" />
            <span>View More on Instagram</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectPhoto(item)}
              className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-[#EAE2D5] border border-[#E3D8C8] shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Scrim Overlay & Zoom Indicator */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-xs text-white">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#EAD4BA]">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1 mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
