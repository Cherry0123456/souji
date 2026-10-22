import React, { useState } from 'react';
import {
  MapPin,
  MessageCircle,
  Instagram,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Send,
  Sparkles
} from 'lucide-react';
import { BusinessConfig, createWhatsAppUrl } from '../config/business';

interface ContactSectionProps {
  config: BusinessConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [customQuery, setCustomQuery] = useState('');
  const [customerName, setCustomerName] = useState('');

  const fullAddress = `${config.addressLine}, ${config.locationCity}, ${config.locationState}, ${config.locationCountry}`;

  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleCustomWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const intro = customerName.trim() ? `Hi Souji's Kitchen, my name is ${customerName.trim()}. ` : `Hi Souji's Kitchen! `;
    const body = customQuery.trim()
      ? customQuery.trim()
      : 'I would like to enquire about your available food items and placing an order.';
    const fullMessage = `${intro}${body}`;
    const url = createWhatsAppUrl(config.whatsAppNumber, fullMessage);
    window.open(url, '_blank');
  };

  const generalWhatsAppUrl = createWhatsAppUrl(
    config.whatsAppNumber,
    "Hello Souji's Kitchen! I would like to get in touch regarding food availability and orders in Guntur."
  );

  return (
    <section id="contact" className="py-20 bg-[#FAF7F2] border-t border-[#EAE1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3F5E4D] mb-2">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1F17] tracking-tight text-balance">
            Contact Souji’s Kitchen
          </h2>
          <p className="text-base text-[#5A4638] mt-3 leading-relaxed text-balance">
            We are based in Guntur, Andhra Pradesh. Connect with us on WhatsApp or Instagram for quick assistance, custom quantities, and fresh batch enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Business Details Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5DACD] shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Business Name & Tagline */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#2D1F17]">
                  {config.name}
                </h3>
                <p className="text-sm text-[#7A6757] mt-0.5">
                  Homemade Food & Pure Millet Snacks
                </p>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#F0E6D8]">
                <div className="w-10 h-10 rounded-xl bg-[#F5ECE1] text-[#8A3D24] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#7A6757]">
                    Location
                  </p>
                  <p className="text-sm font-medium text-[#2D1F17] mt-0.5">
                    {config.addressLine}
                  </p>
                  <p className="text-xs text-[#5A4638]">
                    {config.locationCity}, {config.locationState}, {config.locationCountry}
                  </p>
                  
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={copyAddressToClipboard}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#5A4638] bg-[#F5EFE6] hover:bg-[#EAE2D5] rounded-md transition-colors cursor-pointer"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#8A3D24]" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href={config.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-[#8A3D24] hover:text-[#702F1A] transition-colors"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#F0E6D8]">
                <div className="w-10 h-10 rounded-xl bg-[#F5ECE1] text-[#8A3D24] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#7A6757]">
                    Kitchen Availability
                  </p>
                  <p className="text-sm font-medium text-[#2D1F17] mt-0.5">
                    {config.businessHours}
                  </p>
                  <p className="text-xs text-[#7A6757] mt-0.5 italic">
                    (Editable placeholder — Confirm batch timings directly on WhatsApp)
                  </p>
                </div>
              </div>

              {/* Channels */}
              <div className="pt-4 border-t border-[#F0E6D8] grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25B1B] rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={config.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#8A3D24] bg-[#FAF5EE] hover:bg-[#F2ECE0] border border-[#E3D6C5] rounded-xl transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram Profile</span>
                </a>
              </div>

            </div>
          </div>

          {/* Direct WhatsApp Message Composer */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5DACD] shadow-xs">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3F5E4D] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#3F5E4D]" />
              <span>Direct WhatsApp Messenger</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#2D1F17] mb-2">
              Quick Order & Enquiry
            </h3>
            <p className="text-sm text-[#5A4638] leading-relaxed mb-6">
              Write your query or custom requirement below. Submitting will launch WhatsApp immediately with your pre-formatted note.
            </p>

            <form onSubmit={handleCustomWhatsAppSend} className="space-y-4">
              <div>
                <label htmlFor="customerName" className="block text-xs font-semibold uppercase tracking-wider text-[#5A4638] mb-1.5">
                  Your Name (Optional)
                </label>
                <input
                  id="customerName"
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Ramesh / Sunita"
                  className="w-full px-4 py-2.5 text-sm bg-[#FAF7F2] border border-[#D5C7B7] rounded-xl text-[#2D1F17] placeholder-[#9E8E81] focus:outline-hidden focus:ring-2 focus:ring-[#8A3D24] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label htmlFor="customQuery" className="block text-xs font-semibold uppercase tracking-wider text-[#5A4638] mb-1.5">
                  What would you like to enquire about?
                </label>
                <textarea
                  id="customQuery"
                  rows={4}
                  value={customQuery}
                  onChange={(e) => setCustomQuery(e.target.value)}
                  placeholder="e.g. Hi, I would like to order 1kg of Millet Ribbon Murukku and 6 Bobbatlu for this evening. Are they available?"
                  className="w-full px-4 py-2.5 text-sm bg-[#FAF7F2] border border-[#D5C7B7] rounded-xl text-[#2D1F17] placeholder-[#9E8E81] focus:outline-hidden focus:ring-2 focus:ring-[#8A3D24] focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-[#8A3D24] hover:bg-[#72321C] active:bg-[#5C2816] rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Launch WhatsApp Message</span>
              </button>

              <p className="text-[11px] text-center text-[#7A6757] pt-1">
                Opens directly in WhatsApp web or mobile app.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
