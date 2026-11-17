import React, { useEffect, useState } from 'react';
import type { StickerKind } from '../config/birthdayConfig';
import { StickerBadge } from './Stickers';

interface SmartImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  fallbackPalette?: 'pink' | 'lavender' | 'peach' | 'cream' | 'blue';
  fallbackMotif?: StickerKind;
  loading?: 'lazy' | 'eager';
}

const PALETTE_GRADIENTS: Record<string, string> = {
  pink: 'from-[#F8DCE5]/85 via-[#FFF8F0] to-[#F9E5D5]/70',
  lavender: 'from-[#E9E0F5]/85 via-[#FFFEFC] to-[#F8DCE5]/65',
  peach: 'from-[#F9E5D5]/85 via-[#FFF8F0] to-[#F8DCE5]/60',
  cream: 'from-[#FFF8F0] via-[#FFFEFC] to-[#F8DCE5]/55',
  blue: 'from-[#DFECF8]/85 via-[#FFFEFC] to-[#E9E0F5]/70',
};

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = 'w-full h-full object-cover',
  fallbackPalette = 'pink',
  fallbackMotif = 'heart',
  loading = 'lazy',
}) => {
  const [activeSrc, setActiveSrc] = useState<string | null>(src);
  const [useIllustration, setUseIllustration] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setActiveSrc(src);
    setUseIllustration(false);
    setIsLoaded(false);
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (activeSrc === src && fallbackSrc && fallbackSrc !== src) {
      setActiveSrc(fallbackSrc);
    } else {
      setUseIllustration(true);
    }
  };

  if (useIllustration || !activeSrc) {
    const gradient = PALETTE_GRADIENTS[fallbackPalette] || PALETTE_GRADIENTS.pink;
    return (
      <div
        className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} p-4 text-center`}
        role="img"
        aria-label={alt}
      >
        <div className="doodle-border pointer-events-none absolute inset-2.5 rounded-xl" />
        <StickerBadge kind={fallbackMotif} className="relative z-10 h-14 w-14 opacity-90" />
      </div>
    );
  }

  return (
    <img
      src={activeSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={loading === 'eager' ? 'high' : 'auto'}
      referrerPolicy="no-referrer"
      onError={handleError}
      onLoad={() => setIsLoaded(true)}
      className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    />
  );
};
