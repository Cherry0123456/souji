import React from 'react';
import { Heart, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { BusinessConfig } from '../config/business';
import { kitchenCraftAbout } from '../assets/images';

interface AboutSectionProps {
  config: BusinessConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config }) => {
  return (
    <section id="about" className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Supporting Photograph Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-lg border border-[#E3D8C8] bg-[#EAE2D5] aspect-4/3 sm:aspect-1/1 lg:aspect-4/3">
                <img
                  src={kitchenCraftAbout}
                  alt="Traditional handcrafted homemade food preparation at Souji’s Kitchen"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Quiet authentic caption */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#7A6757] px-1">
                <span>Handcrafted with dedication</span>
                <span>Guntur, Andhra Pradesh</span>
              </div>
            </div>
          </div>

          {/* About Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#3F5E4D] mb-3">
              <Heart className="w-3.5 h-3.5 text-[#8A3D24]" />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1F17] tracking-tight mb-6 text-balance">
              About Souji’s Kitchen
            </h2>

            {/* Editable Brief Prompt Text */}
            <div className="prose prose-stone text-[#5A4638] text-base sm:text-lg leading-relaxed mb-6">
              <p className="font-medium text-[#2D1F17]/90 text-lg sm:text-xl leading-relaxed mb-4">
                {config.aboutText}
              </p>
              <p className="text-base text-[#6C584A] leading-relaxed">
                Rooted in the culinary traditions of Andhra Pradesh, our kitchen brings together honest ingredients, wholesome grains like millets, and age-old regional delicacies. Every order is handled personally to ensure freshness, clean taste, and a warm touch of home.
              </p>
            </div>

            {/* Core Values / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EAE1D3]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3F5E4D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#2D1F17]">Local Guntur Kitchen</h4>
                  <p className="text-xs text-[#7A6757] leading-normal">
                    Conveniently based near NTR Stadium, Guntur for quick local enquiry and pick-up.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8A3D24] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#2D1F17]">Wholesome Millets</h4>
                  <p className="text-xs text-[#7A6757] leading-normal">
                    Nutritious alternatives to everyday junk snacks, prepared without unnecessary additives.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
