import React, { useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { BusinessConfig, createWhatsAppUrl } from '../config/business';

export interface LightboxPhoto {
  title: string;
  image: string;
  caption: string;
  category?: string;
}

interface LightboxModalProps {
  photo: LightboxPhoto | null;
  onClose: () => void;
  config: BusinessConfig;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose, config }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (photo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  const enquireUrl = createWhatsAppUrl(
    config.whatsAppNumber,
    `Hi Souji's Kitchen! I saw the photo of "${photo.title}" on your website gallery. Could you tell me more about its availability and price?`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[#E3D8C8] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus:outline-hidden"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Enlarged Image Area */}
        <div className="relative bg-[#1A120D] flex items-center justify-center overflow-hidden min-h-[280px] max-h-[60vh]">
          <img
            src={photo.image}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[60vh]"
          />
        </div>

        {/* Caption & WhatsApp Action Bar */}
        <div className="p-5 sm:p-6 bg-[#FAF7F2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#E8DEC8]">
          <div>
            {photo.category && (
              <p className="text-xs font-semibold uppercase tracking-wider text-[#3F5E4D] mb-1">
                {photo.category}
              </p>
            )}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D1F17]">
              {photo.title}
            </h3>
            <p className="text-sm text-[#5A4638] mt-1 leading-relaxed">
              {photo.caption}
            </p>
          </div>

          <a
            href={enquireUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25B1B] rounded-xl shadow-xs whitespace-nowrap shrink-0 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
