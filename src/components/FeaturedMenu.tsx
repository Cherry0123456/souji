import React, { useState } from 'react';
import { MessageCircle, Search, Info, Check } from 'lucide-react';
import { BusinessConfig, createWhatsAppUrl } from '../config/business';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/menuData';
import { SafeImage } from './SafeImage';

interface FeaturedMenuProps {
  config: BusinessConfig;
  onSelectPhotoPreview?: (photo: { title: string; image: string; caption: string }) => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({ config, onSelectPhotoPreview }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getEnquiryUrl = (item: MenuItem) => {
    return createWhatsAppUrl(
      config.whatsAppNumber,
      `Hi Souji's Kitchen! I would like to enquire about the price and availability of "${item.name}". Could you share more details?`
    );
  };

  return (
    <section id="menu" className="py-20 bg-[#F5EFE6]/60 border-t border-[#EAE1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3F5E4D] mb-2">
            Fresh & Wholesome
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1F17] tracking-tight mb-4 text-balance">
            Our Food Collection
          </h2>
          <p className="text-base sm:text-lg text-[#5A4638] leading-relaxed text-balance">
            Explore authentic Andhra homemade specialties, handcrafted pure millet snacks, and traditional sweets. Enquire directly on WhatsApp to confirm daily batch availability.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E3D7C7]">
          {/* Category Filter Tabs - clean interactive segmented buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EAE2D5] rounded-xl w-full md:w-auto overflow-x-auto">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#8A3D24] shadow-xs font-semibold'
                      : 'text-[#5A4638] hover:text-[#2D1F17] hover:bg-[#F2ECE1]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8C7665] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search snacks, sweets, noodles..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#D5C7B7] rounded-xl text-[#2D1F17] placeholder-[#8C7665] focus:outline-hidden focus:ring-2 focus:ring-[#8A3D24] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C7665] hover:text-[#2D1F17]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white/60 rounded-2xl border border-dashed border-[#D5C7B7]">
            <p className="text-lg font-serif font-semibold text-[#2D1F17] mb-2">No menu items found</p>
            <p className="text-sm text-[#5A4638] mb-4">Try selecting another category or clearing your search term.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#8A3D24] rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E5DACD] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Food Image Container */}
                <div
                  className="relative aspect-4/3 bg-[#EAE2D5] overflow-hidden cursor-pointer"
                  onClick={() =>
                    onSelectPhotoPreview?.({
                      title: item.name,
                      image: item.image,
                      caption: `${item.categoryLabel} · ${item.description}`,
                    })
                  }
                  title="Click to view full image"
                >
                  <SafeImage
                    src={item.image}
                    alt={item.imageAlt}
                    fallbackTitle={item.name}
                    fallbackCategory={item.categoryLabel}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Category text kicker (Zero-pill clean metadata) */}
                  <div className="absolute top-3 left-3 bg-[#2D1F17]/80 backdrop-blur-xs text-[#FAF7F2] text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-md">
                    {item.categoryLabel}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#2D1F17] group-hover:text-[#8A3D24] transition-colors leading-snug mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#5A4638] leading-relaxed line-clamp-3 mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0E6D8] mt-auto">
                    {/* Price / Availability Note */}
                    <div className="flex items-center justify-between text-xs text-[#7A6757] mb-4">
                      <span className="font-medium text-[#3F5E4D] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        <span>Fresh Preparation</span>
                      </span>
                      <span className="italic font-medium text-[#8A3D24]">
                        {item.priceNote}
                      </span>
                    </div>

                    {/* WhatsApp Action Button with prefilled item message */}
                    <a
                      href={getEnquiryUrl(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25B1B] active:bg-[#A94C12] rounded-xl shadow-xs transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 fill-white/20" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Helpful note about daily orders */}
        <div className="mt-12 p-4 rounded-xl bg-[#FAF7F2] border border-[#E2D6C5] flex items-start gap-3 text-xs text-[#6C584A] max-w-2xl mx-auto">
          <Info className="w-4 h-4 text-[#8A3D24] shrink-0 mt-0.5" />
          <p>
            <strong>Note on Daily Batches:</strong> Because our food is freshly prepared without commercial preservatives, batch quantities and daily items may vary. Please message us on WhatsApp for exact pack weights, same-day tiffins, and custom batch requests.
          </p>
        </div>

      </div>
    </section>
  );
};
