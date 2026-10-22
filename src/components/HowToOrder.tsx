import React from 'react';
import { Search, MessageSquare, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { BusinessConfig, createWhatsAppUrl } from '../config/business';

interface HowToOrderProps {
  config: BusinessConfig;
}

export const HowToOrder: React.FC<HowToOrderProps> = ({ config }) => {
  const steps = [
    {
      step: '01',
      icon: Search,
      title: 'Explore the available menu',
      description: 'Browse our pure millet snacks, traditional ghee sweets, and freshly made noodles or tiffins.',
    },
    {
      step: '02',
      icon: MessageSquare,
      title: 'Select an item and enquire through WhatsApp',
      description: 'Click any "Enquire on WhatsApp" button to start a chat with your selected item already pre-filled.',
    },
    {
      step: '03',
      icon: CheckCircle,
      title: 'Confirm availability, price, and details',
      description: 'We will confirm today’s fresh batch availability, exact price, and arrange convenient pick-up or delivery.',
    },
  ];

  const generalWhatsAppUrl = createWhatsAppUrl(
    config.whatsAppNumber,
    "Hi Souji's Kitchen! I would like to place an order. Could you share what items are ready today?"
  );

  return (
    <section className="py-20 bg-[#F5EFE6]/50 border-t border-[#EAE1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3F5E4D] mb-2">
            Simple & Transparent
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D1F17] tracking-tight text-balance">
            How to Order
          </h2>
          <p className="text-base text-[#5A4638] mt-3 leading-relaxed text-balance">
            Follow three easy steps to enjoy fresh homemade delicacies from our kitchen in Guntur.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white p-8 rounded-2xl border border-[#E5DACD] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#8A3D24]/80">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#8A3D24] border border-[#EBE3D6]">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#2D1F17] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5A4638] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0E6D8] text-xs font-medium text-[#7A6757]">
                  Step {idx + 1} of 3
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E3D8C8] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-xl font-bold text-[#2D1F17]">
              Ready to enjoy homemade food?
            </h4>
            <p className="text-sm text-[#5A4638] mt-1">
              Message us directly on WhatsApp to check today's freshly prepared batches.
            </p>
          </div>

          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25B1B] rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Chat on WhatsApp Now</span>
          </a>
        </div>

      </div>
    </section>
  );
};
