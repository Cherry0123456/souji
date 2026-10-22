import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  fallbackCategory?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackTitle,
  fallbackCategory,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [retryIndex, setRetryIndex] = useState(0);

  // Generate fallback path candidates in case a host serves at root or subpath
  const cleanPath = src.startsWith('/') ? src.slice(1) : src;
  const baseUrl = import.meta.env.BASE_URL || './';
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  const candidates = [
    src, // e.g. "/images/hero-food.jpg"
    `${normalizedBase}${cleanPath}`, // e.g. "./images/hero-food.jpg" or "/souji/images/hero-food.jpg"
    `./${cleanPath}`, // e.g. "./images/hero-food.jpg"
    `/${cleanPath}`, // e.g. "/images/hero-food.jpg"
  ];

  // Remove duplicates
  const uniqueCandidates = Array.from(new Set(candidates));
  const currentSrc = uniqueCandidates[retryIndex] || src;

  const handleError = () => {
    if (retryIndex < uniqueCandidates.length - 1) {
      setRetryIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div
        className={`w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F7F2EA] via-[#EFE6D9] to-[#E5D8C6] border border-[#E3D6C5] rounded-xl text-[#5A4638] ${containerClassName}`}
      >
        <div className="w-12 h-12 rounded-full bg-[#FAF7F2] shadow-xs flex items-center justify-center text-[#8A3D24] mb-3 border border-[#E8DEC8]">
          <Utensils className="w-6 h-6 stroke-[1.5]" />
        </div>
        {fallbackCategory && (
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8A3D24] mb-1">
            {fallbackCategory}
          </span>
        )}
        <h4 className="font-serif text-base font-bold text-[#2D1F17] max-w-xs">
          {fallbackTitle || alt || 'Souji’s Kitchen Specialty'}
        </h4>
        <p className="text-xs text-[#7A6757] mt-1">
          Fresh Homemade Food · Guntur, Andhra Pradesh
        </p>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      referrerPolicy="no-referrer"
      className={className}
      {...props}
    />
  );
};
