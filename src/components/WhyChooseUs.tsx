import React from 'react';
import { HeartHandshake, Sparkles, MessageCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    {
      icon: HeartHandshake,
      title: 'Made with Care',
      description:
        'Crafted in small home batches using thoughtful preparation methods and heartfelt attention to quality.',
      badgeText: 'Traditional Touch',
    },
    {
      icon: Sparkles,
      title: 'Delicious Food',
      description:
        'Bringing authentic Andhra flavors to life, alongside wholesome pure millet snacks and homemade sweets.',
      badgeText: 'Rich Flavour',
    },
    {
      icon: MessageCircle,
      title: 'Easy Ordering',
      description:
        'Direct and straightforward communication on WhatsApp to enquire about fresh batches and confirm your order.',
      badgeText: 'Direct Contact',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-[#EAE1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3F5E4D] mb-2">
            The Souji’s Kitchen Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1F17] tracking-tight text-balance">
            Why Choose Us?
          </h2>
          <p className="text-base text-[#5A4638] mt-3 leading-relaxed text-balance">
            Every dish we prepare reflects our genuine love for homemade food and warm hospitality.
          </p>
        </div>

        {/* 3 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white p-8 rounded-2xl border border-[#E5DACD] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F4EDE2] flex items-center justify-center text-[#8A3D24] mb-6">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  
                  {/* Clean unboxed metadata separator */}
                  <div className="text-xs font-medium text-[#7A6757] uppercase tracking-wider mb-2">
                    <span>Highlight {idx + 1}</span>
                    <span aria-hidden="true" className="mx-1.5">·</span>
                    <span>{item.badgeText}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D1F17] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5A4638] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
