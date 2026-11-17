import React, { useId } from 'react';
import type { StickerKind } from '../config/birthdayConfig';

interface StickerProps {
  className?: string;
  variant?: 'pink' | 'red' | 'lavender' | 'peach' | 'blue';
}

export const HeartSticker: React.FC<StickerProps> = ({ className = 'w-11 h-11' }) => {
  const uid = useId();
  return (
    <svg viewBox="0 0 72 72" fill="none" className={`sticker-shadow ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`hg-${uid}`} x1="14" y1="10" x2="58" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB0CC" />
          <stop offset="55%" stopColor="#FF6B9D" />
          <stop offset="100%" stopColor="#E6427A" />
        </linearGradient>
      </defs>
      {/* Crisp white die-cut sticker outline */}
      <path
        d="M36 62C36 62 9 45.5 9 26C9 16.5 16.5 10 24.8 10C29.8 10 33.8 12.6 36 16.5C38.2 12.6 42.2 10 47.2 10C55.5 10 63 16.5 63 26C63 45.5 36 62 36 62Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M36 60C36 60 11 44.5 11 26C11 17.5 17.5 12 25 12C29.8 12 33.8 14.6 36 18.2C38.2 14.6 42.2 12 47 12C54.5 12 61 17.5 61 26C61 44.5 36 60 36 60Z"
        fill={`url(#hg-${uid})`}
        stroke="#B92B5D"
        strokeOpacity="0.22"
        strokeWidth="1.2"
      />
      {/* Glossy highlight + tiny sparkle */}
      <path
        d="M19 22.5C20.5 19 23.8 17.2 27.2 17.2"
        stroke="#FFF4F8"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="51" cy="22" r="2.2" fill="#FFF4F8" />
    </svg>
  );
};

export const BowSticker: React.FC<StickerProps> = ({
  className = 'w-14 h-11',
  variant = 'pink',
}) => {
  const uid = useId();
  const isRed = variant === 'red';
  return (
    <svg viewBox="0 0 88 70" fill="none" className={`sticker-shadow ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`bow-${uid}`} x1="12" y1="14" x2="76" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isRed ? '#FF8A9E' : '#FFC2D6'} />
          <stop offset="55%" stopColor={isRed ? '#F24D6E' : '#F77CA6'} />
          <stop offset="100%" stopColor={isRed ? '#D6284F' : '#DE5283'} />
        </linearGradient>
      </defs>
      {/* White die-cut base */}
      <g stroke="#FFFFFF" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" fill="#FFFFFF">
        <path d="M41 36L22 60L32 56L37 62L44 39" />
        <path d="M47 36L66 60L56 56L51 62L44 39" />
        <path d="M43 32C31 15 11 14 11 29C11 41 28 42 42 35" />
        <path d="M45 32C57 15 77 14 77 29C77 41 60 42 46 35" />
      </g>
      {/* Tails */}
      <path
        d="M41 36L22 60L32 56L37 62L44 39"
        fill={`url(#bow-${uid})`}
        stroke={isRed ? '#A81C3C' : '#B93D69'}
        strokeOpacity="0.28"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M47 36L66 60L56 56L51 62L44 39"
        fill={`url(#bow-${uid})`}
        stroke={isRed ? '#A81C3C' : '#B93D69'}
        strokeOpacity="0.28"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Loops */}
      <path
        d="M43 32C31 15 11 14 11 29C11 41 28 42 42 35"
        fill={`url(#bow-${uid})`}
        stroke="#FFF8FB"
        strokeWidth="1.5"
      />
      <path
        d="M45 32C57 15 77 14 77 29C77 41 60 42 46 35"
        fill={`url(#bow-${uid})`}
        stroke="#FFF8FB"
        strokeWidth="1.5"
      />
      {/* Pleats */}
      <path d="M20 29C26 27.5 32 29 38 32.5" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
      <path d="M68 29C62 27.5 56 29 50 32.5" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
      {/* Center ribbon knot */}
      <rect
        x="37.5"
        y="26"
        width="13"
        height="13"
        rx="5.5"
        fill={isRed ? '#E6395E' : '#EE6695'}
        stroke="#FFFFFF"
        strokeWidth="2"
      />
    </svg>
  );
};

const BUTTERFLY_PALETTES = {
  pink: {
    topStart: '#FFAED0',
    topEnd: '#F26B9E',
    botStart: '#FFE2B8',
    botEnd: '#FF8EB9',
    accent: '#FFF6FA',
  },
  lavender: {
    topStart: '#D8BFFF',
    topEnd: '#A982F5',
    botStart: '#FBC7DE',
    botEnd: '#C8A5FA',
    accent: '#FAF6FF',
  },
  peach: {
    topStart: '#FFC7A8',
    topEnd: '#FF8D78',
    botStart: '#FFE7AE',
    botEnd: '#FFA89A',
    accent: '#FFF9F4',
  },
  blue: {
    topStart: '#96D5FF',
    topEnd: '#7FB2F8',
    botStart: '#D9C2FC',
    botEnd: '#9AC7FA',
    accent: '#F5FAFF',
  },
} as const;

export const ButterflySticker: React.FC<StickerProps> = ({
  className = 'w-12 h-11',
  variant = 'pink',
}) => {
  const uid = useId();
  const palette =
    variant === 'blue' || variant === 'lavender' || variant === 'peach'
      ? BUTTERFLY_PALETTES[variant]
      : BUTTERFLY_PALETTES.pink;

  return (
    <svg viewBox="0 0 80 72" fill="none" className={`sticker-shadow ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`bw1-${uid}`} x1="12" y1="10" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={palette.topStart} />
          <stop offset="100%" stopColor={palette.topEnd} />
        </linearGradient>
        <linearGradient id={`bw2-${uid}`} x1="16" y1="36" x2="40" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={palette.botStart} />
          <stop offset="100%" stopColor={palette.botEnd} />
        </linearGradient>
      </defs>

      {/* Left Animated Wing Pair with Die-Cut Outline */}
      <g className="animate-wing-flap-left">
        <g stroke="#FFFFFF" strokeWidth="5.5" strokeLinejoin="round" fill="#FFFFFF">
          <path d="M39 34C30 13 10 10 11 27C12 38 25 40 38 37" />
          <path d="M38 38C24 41 16 49 21 58C27 65 37 56 39 42" />
        </g>
        <path
          d="M39 34C30 13 10 10 11 27C12 38 25 40 38 37"
          fill={`url(#bw1-${uid})`}
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        <path
          d="M38 38C24 41 16 49 21 58C27 65 37 56 39 42"
          fill={`url(#bw2-${uid})`}
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        <circle cx="22" cy="26" r="3.6" fill={palette.accent} fillOpacity="0.9" />
        <circle cx="26" cy="49" r="2.3" fill={palette.accent} fillOpacity="0.82" />
      </g>

      {/* Right Animated Wing Pair with Die-Cut Outline */}
      <g className="animate-wing-flap-right">
        <g stroke="#FFFFFF" strokeWidth="5.5" strokeLinejoin="round" fill="#FFFFFF">
          <path d="M41 34C50 13 70 10 69 27C68 38 55 40 42 37" />
          <path d="M42 38C56 41 64 49 59 58C53 65 43 56 41 42" />
        </g>
        <path
          d="M41 34C50 13 70 10 69 27C68 38 55 40 42 37"
          fill={`url(#bw1-${uid})`}
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        <path
          d="M42 38C56 41 64 49 59 58C53 65 43 56 41 42"
          fill={`url(#bw2-${uid})`}
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        <circle cx="58" cy="26" r="3.6" fill={palette.accent} fillOpacity="0.9" />
        <circle cx="54" cy="49" r="2.3" fill={palette.accent} fillOpacity="0.82" />
      </g>

      {/* Body & antennae */}
      <rect x="38" y="24" width="4" height="27" rx="2" fill="#5A3948" stroke="#FFFFFF" strokeWidth="1" />
      <path d="M39 24C37 18 33 15 29 15" stroke="#5A3948" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M41 24C43 18 47 15 51 15" stroke="#5A3948" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="29" cy="15" r="1.7" fill={palette.topEnd} />
      <circle cx="51" cy="15" r="1.7" fill={palette.topEnd} />
    </svg>
  );
};

export const FlowerSticker: React.FC<StickerProps> = ({ className = 'w-11 h-11' }) => {
  const uid = useId();
  return (
    <svg viewBox="0 0 72 72" fill="none" className={`sticker-shadow ${className}`} aria-hidden="true">
      <defs>
        <radialGradient id={`fl-${uid}`} cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFE4EF" />
          <stop offset="65%" stopColor="#FF9EC0" />
          <stop offset="100%" stopColor="#F56E9E" />
        </radialGradient>
      </defs>
      {/* Die-cut white petal outline */}
      <g stroke="#FFFFFF" strokeWidth="5">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse key={deg} cx="36" cy="18" rx="10.5" ry="14" fill="#FFFFFF" transform={`rotate(${deg} 36 36)`} />
        ))}
      </g>
      <g>
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx="36"
            cy="18"
            rx="10"
            ry="13.5"
            fill={`url(#fl-${uid})`}
            stroke="#FFFFFF"
            strokeWidth="1.6"
            transform={`rotate(${deg} 36 36)`}
          />
        ))}
      </g>
      <circle cx="36" cy="36" r="10" fill="#FFD670" stroke="#FFFFFF" strokeWidth="2.4" />
      <circle cx="33" cy="34.2" r="1.4" fill="#7D4E2D" />
      <circle cx="39" cy="34.2" r="1.4" fill="#7D4E2D" />
      <ellipse cx="30.5" cy="36.8" rx="1.8" ry="1" fill="#FF8DA8" />
      <ellipse cx="41.5" cy="36.8" rx="1.8" ry="1" fill="#FF8DA8" />
      <path d="M33.5 38.2C35 39.8 37 39.8 38.5 38.2" stroke="#7D4E2D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export const DaisySticker: React.FC<StickerProps> = ({ className = 'w-11 h-11' }) => (
  <svg viewBox="0 0 72 72" fill="none" className={`sticker-shadow ${className}`} aria-hidden="true">
    <g>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse
          key={deg}
          cx="36"
          cy="17"
          rx="6.8"
          ry="13.5"
          fill="#FFFFFF"
          stroke="#F4C7D7"
          strokeWidth="1.6"
          transform={`rotate(${deg} 36 36)`}
        />
      ))}
    </g>
    <circle cx="36" cy="36" r="9.5" fill="#FFCF5C" stroke="#FFF9E6" strokeWidth="2.2" />
    <circle cx="33.2" cy="34.5" r="1.3" fill="#7A5026" />
    <circle cx="38.8" cy="34.5" r="1.3" fill="#7A5026" />
    <path d="M33.8 38.2C35 39.5 37 39.5 38.2 38.2" stroke="#7A5026" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const CakeSticker: React.FC<StickerProps> = ({ className = 'w-14 h-14' }) => {
  const uid = useId();
  return (
    <svg viewBox="0 0 80 80" fill="none" className={`sticker-shadow ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`ck-${uid}`} x1="18" y1="30" x2="62" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB8D0" />
          <stop offset="100%" stopColor="#F478A4" />
        </linearGradient>
      </defs>
      {/* Die-cut white backing */}
      <g stroke="#FFFFFF" strokeWidth="5.5" strokeLinejoin="round" fill="#FFFFFF">
        <rect x="37" y="16" width="6" height="14" rx="2" />
        <path d="M40 7C43 10.5 44 13.5 40 15.5C36 13.5 37 10.5 40 7Z" />
        <rect x="18" y="30" width="44" height="30" rx="9" />
        <ellipse cx="40" cy="62" rx="27" ry="5" />
      </g>
      {/* Plate */}
      <ellipse cx="40" cy="62" rx="27" ry="5" fill="#D9C5F4" stroke="#FFFFFF" strokeWidth="1.8" />
      {/* Candle */}
      <rect x="37" y="16" width="6" height="14" rx="2.5" fill="#89C9FA" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M40 7C43 10.5 44 13.5 40 15.5C36 13.5 37 10.5 40 7Z" fill="#FFCC4D" />
      {/* Cake body */}
      <rect x="18" y="30" width="44" height="30" rx="9" fill={`url(#ck-${uid})`} stroke="#FFFFFF" strokeWidth="1.8" />
      {/* Whipped cream drip */}
      <path
        d="M19.5 38C23 43 27.5 43 30.5 38C33.5 43 38 43 41 38C44 43 48.5 43 51.5 38C54.5 43 58.5 41.5 60.5 38V33.5C60.5 31.5 59 30.5 56.5 30.5H23.5C21 30.5 19.5 31.5 19.5 33.5V38Z"
        fill="#FFFBF5"
      />
      {/* Colorful sprinkles + strawberry */}
      <circle cx="28" cy="35" r="1.6" fill="#FF6B8B" />
      <circle cx="49" cy="34.5" r="1.6" fill="#77BDFB" />
      <circle cx="38" cy="35.5" r="1.6" fill="#FFD166" />
      <path
        d="M40 54.5C40 54.5 33.5 50.2 33.5 46.2C33.5 44.2 35.1 42.8 37 42.8C38.3 42.8 39.4 43.5 40 44.5C40.6 43.5 41.7 42.8 43 42.8C44.9 42.8 46.5 44.2 46.5 46.2C46.5 50.2 40 54.5 40 54.5Z"
        fill="#FF4D79"
        stroke="#FFFFFF"
        strokeWidth="1.4"
      />
    </svg>
  );
};

export const TeddySticker: React.FC<StickerProps> = ({ className = 'w-14 h-14' }) => {
  const uid = useId();
  return (
    <svg viewBox="0 0 80 80" fill="none" className={`sticker-shadow ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`td-${uid}`} x1="20" y1="16" x2="60" y2="66" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F4D7BC" />
          <stop offset="100%" stopColor="#DDA882" />
        </linearGradient>
      </defs>
      {/* Die-cut white backing */}
      <g stroke="#FFFFFF" strokeWidth="5.5" fill="#FFFFFF">
        <circle cx="23" cy="22" r="9.5" />
        <circle cx="57" cy="22" r="9.5" />
        <ellipse cx="40" cy="55" rx="18" ry="15" />
        <ellipse cx="40" cy="34" rx="20" ry="17" />
      </g>
      {/* Ears */}
      <circle cx="23" cy="22" r="9.5" fill="#E3B38F" stroke="#FFFFFF" strokeWidth="1.8" />
      <circle cx="23" cy="22" r="5" fill="#FFB8CE" />
      <circle cx="57" cy="22" r="9.5" fill="#E3B38F" stroke="#FFFFFF" strokeWidth="1.8" />
      <circle cx="57" cy="22" r="5" fill="#FFB8CE" />
      {/* Body */}
      <ellipse cx="40" cy="55" rx="18" ry="15" fill={`url(#td-${uid})`} stroke="#FFFFFF" strokeWidth="1.8" />
      {/* Head */}
      <ellipse cx="40" cy="34" rx="20" ry="17" fill={`url(#td-${uid})`} stroke="#FFFFFF" strokeWidth="1.8" />
      {/* Snout */}
      <ellipse cx="40" cy="38.5" rx="8.5" ry="6.2" fill="#FFF7EE" />
      <ellipse cx="40" cy="36.2" rx="3" ry="2.1" fill="#5A3948" />
      <path
        d="M40 38.3V40.8M40 40.8C38.4 42.2 36.8 41.6 36.2 40.8M40 40.8C41.6 42.2 43.2 41.6 43.8 40.8"
        stroke="#5A3948"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Sparkling eyes & rosy cheeks */}
      <circle cx="31" cy="32" r="2.4" fill="#3B1F2B" />
      <circle cx="31.7" cy="31.2" r="0.8" fill="#FFFFFF" />
      <circle cx="49" cy="32" r="2.4" fill="#3B1F2B" />
      <circle cx="49.7" cy="31.2" r="0.8" fill="#FFFFFF" />
      <ellipse cx="26" cy="37" rx="3.4" ry="2" fill="#FF8EB3" fillOpacity="0.75" />
      <ellipse cx="54" cy="37" rx="3.4" ry="2" fill="#FF8EB3" fillOpacity="0.75" />
      {/* Vibrant heart held */}
      <path
        d="M40 64C40 64 29 57 29 50.2C29 46.8 31.8 44.2 35 44.2C37 44.2 38.8 45.4 40 47C41.2 45.4 43 44.2 45 44.2C48.2 44.2 51 46.8 51 50.2C51 57 40 64 40 64Z"
        fill="#FF5E94"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
    </svg>
  );
};

export const StarSticker: React.FC<StickerProps> = ({ className = 'w-10 h-10' }) => {
  const uid = useId();
  return (
    <svg viewBox="0 0 72 72" fill="none" className={`sticker-shadow ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`st-${uid}`} x1="14" y1="10" x2="58" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF0A8" />
          <stop offset="55%" stopColor="#FFD25E" />
          <stop offset="100%" stopColor="#FFB042" />
        </linearGradient>
      </defs>
      <path
        d="M36 8L42.5 27.5L62 34L42.5 40.5L36 60L29.5 40.5L10 34L29.5 27.5L36 8Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M36 10L41.8 28.2L60 34L41.8 39.8L36 58L30.2 39.8L12 34L30.2 28.2L36 10Z"
        fill={`url(#st-${uid})`}
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="56" cy="16" r="3.6" fill="#FF8BB4" stroke="#FFFFFF" strokeWidth="1.4" />
      <circle cx="15" cy="54" r="3.2" fill="#9AD4FC" stroke="#FFFFFF" strokeWidth="1.4" />
    </svg>
  );
};

export const EnvelopeSticker: React.FC<StickerProps> = ({ className = 'w-12 h-10' }) => (
  <svg viewBox="0 0 80 64" fill="none" className={`sticker-shadow ${className}`} aria-hidden="true">
    <rect x="6" y="10" width="68" height="44" rx="10" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="4" />
    <rect x="8" y="12" width="64" height="40" rx="8" fill="#FFF7F2" stroke="#F0A5BE" strokeWidth="2.2" />
    <path d="M10 15L40 37L70 15" stroke="#E884A7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M40 44C40 44 31.5 38.5 31.5 33.2C31.5 30.4 33.7 28.5 36.2 28.5C37.8 28.5 39.2 29.4 40 30.8C40.8 29.4 42.2 28.5 43.8 28.5C46.3 28.5 48.5 30.4 48.5 33.2C48.5 38.5 40 44 40 44Z"
      fill="#F24E79"
      stroke="#FFFFFF"
      strokeWidth="1.4"
    />
  </svg>
);

export const CloudSticker: React.FC<StickerProps> = ({ className = 'w-16 h-11' }) => (
  <svg viewBox="0 0 92 60" fill="none" className={`sticker-shadow ${className}`} aria-hidden="true">
    <path
      d="M24 48H68C75.8 48 82 41.9 82 34.5C82 27.6 76.7 21.9 69.8 21.1C67.3 12.8 59.7 7 50.5 7C40.2 7 31.6 14.6 30.3 24.5C28.7 23.8 26.9 23.4 25 23.4C17.2 23.4 11 29.5 11 37C11 43.2 16.8 48 24 48Z"
      fill="#FFFFFF"
      stroke="#C2DDF5"
      strokeWidth="2.5"
    />
    <circle cx="41" cy="31" r="1.7" fill="#5A3948" />
    <circle cx="53" cy="31" r="1.7" fill="#5A3948" />
    <ellipse cx="36.5" cy="34.2" rx="2.8" ry="1.5" fill="#FFA8C4" />
    <ellipse cx="57.5" cy="34.2" rx="2.8" ry="1.5" fill="#FFA8C4" />
    <path d="M44.5 34C45.8 35.4 48.2 35.4 49.5 34" stroke="#5A3948" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const GiftBoxSticker: React.FC<StickerProps> = ({ className = 'w-12 h-12' }) => {
  const uid = useId();
  return (
    <svg viewBox="0 0 76 76" fill="none" className={`sticker-shadow ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`gb-${uid}`} x1="16" y1="26" x2="60" y2="66" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE1EC" />
          <stop offset="100%" stopColor="#F9B2CB" />
        </linearGradient>
      </defs>
      {/* Die-cut white backing */}
      <g stroke="#FFFFFF" strokeWidth="5.5" strokeLinejoin="round" fill="#FFFFFF">
        <rect x="16" y="34" width="44" height="30" rx="6" />
        <rect x="13" y="25" width="50" height="11" rx="4" />
        <path d="M38 25C31 14 20 15 23 23C25 26 33 26 38 25Z" />
        <path d="M38 25C45 14 56 15 53 23C51 26 43 26 38 25Z" />
      </g>
      <rect x="16" y="34" width="44" height="30" rx="6" fill={`url(#gb-${uid})`} stroke="#FFFFFF" strokeWidth="1.5" />
      <rect x="33.5" y="34" width="9" height="30" fill="#F2527D" />
      <rect x="13" y="25" width="50" height="11" rx="4" fill="#FFF0F5" stroke="#F4A5C0" strokeWidth="1.5" />
      <rect x="33.5" y="25" width="9" height="11" fill="#F2527D" />
      <path d="M38 25C31 14 20 15 23 23C25 26 33 26 38 25Z" fill="#FF739A" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M38 25C45 14 56 15 53 23C51 26 43 26 38 25Z" fill="#FF739A" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="38" cy="24.5" r="4" fill="#E63B6B" stroke="#FFFFFF" strokeWidth="1.4" />
    </svg>
  );
};

export const BalloonClusterSticker: React.FC<StickerProps> = ({ className = 'w-14 h-16' }) => (
  <svg viewBox="0 0 80 92" fill="none" className={`sticker-shadow ${className}`} aria-hidden="true">
    {/* Strings */}
    <path d="M27 52C25 65 32 76 36 86" stroke="#C59AAE" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M53 50C55 64 46 74 40 86" stroke="#C59AAE" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M40 44C39 58 41 72 38 86" stroke="#C59AAE" strokeWidth="1.8" strokeLinecap="round" />
    {/* Left baby-blue balloon */}
    <ellipse cx="26" cy="32" rx="14" ry="18" fill="#9BD3FA" stroke="#FFFFFF" strokeWidth="2.5" />
    <ellipse cx="21" cy="25" rx="3" ry="6" fill="#FFFFFF" fillOpacity="0.55" transform="rotate(-18 21 25)" />
    {/* Right lavender balloon */}
    <ellipse cx="54" cy="30" rx="14" ry="18" fill="#D2B8FA" stroke="#FFFFFF" strokeWidth="2.5" />
    <ellipse cx="49" cy="23" rx="3" ry="6" fill="#FFFFFF" fillOpacity="0.55" transform="rotate(-18 49 23)" />
    {/* Center vibrant pink balloon */}
    <ellipse cx="40" cy="25" rx="15" ry="19" fill="#FF85AE" stroke="#FFFFFF" strokeWidth="2.8" />
    <ellipse cx="34.5" cy="17.5" rx="3.5" ry="6.5" fill="#FFFFFF" fillOpacity="0.6" transform="rotate(-18 34.5 17.5)" />
  </svg>
);

export const DoodleSticker: React.FC<StickerProps> = ({ className = 'w-11 h-11' }) => (
  <svg viewBox="0 0 68 68" fill="none" className={`sticker-shadow ${className}`} aria-hidden="true">
    <circle cx="34" cy="34" r="28" fill="#FFFFFF" fillOpacity="0.94" stroke="#F4C7D7" strokeWidth="2" />
    <path
      d="M17 37C15 25 27 19 34 28C41 19 53 25 51 37C49 47 34 54 34 54C34 54 19 47 17 37Z"
      fill="#FFDCE9"
      stroke="#E65282"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="3.5 3"
    />
    <path d="M23 15L25 19M45 15L43 19M34 11V16" stroke="#F289AB" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const RibbonSticker: React.FC<StickerProps> = ({
  className = 'w-14 h-12',
  variant = 'pink',
}) => {
  const uid = useId();
  const isLavender = variant === 'lavender';
  return (
    <svg viewBox="0 0 84 64" fill="none" className={`sticker-shadow ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`rb-${uid}`} x1="8" y1="12" x2="76" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isLavender ? '#DFC9FF' : '#FFBCD6'} />
          <stop offset="55%" stopColor={isLavender ? '#BE98F7' : '#F87EA9'} />
          <stop offset="100%" stopColor={isLavender ? '#9E73E8' : '#E25686'} />
        </linearGradient>
      </defs>
      <path
        d="M10 46C18 32 30 22 42 30C52 37 64 29 74 16"
        stroke="#FFFFFF"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M10 46C18 32 30 22 42 30C52 37 64 29 74 16"
        stroke={`url(#rb-${uid})`}
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <path
        d="M14 43C22 30 31 24 41 30"
        stroke="#FFFFFF"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="42" cy="30" r="5" fill="#FF6B9D" stroke="#FFFFFF" strokeWidth="2" />
    </svg>
  );
};

export const StickerBadge: React.FC<{ kind: StickerKind; className?: string }> = ({
  kind,
  className,
}) => {
  switch (kind) {
    case 'heart':
      return <HeartSticker className={className} />;
    case 'bow':
      return <BowSticker className={className} />;
    case 'butterfly':
      return <ButterflySticker className={className} />;
    case 'flower':
      return <FlowerSticker className={className} />;
    case 'daisy':
      return <DaisySticker className={className} />;
    case 'teddy':
      return <TeddySticker className={className} />;
    case 'star':
      return <StarSticker className={className} />;
    case 'letter':
      return <EnvelopeSticker className={className} />;
    case 'cloud':
      return <CloudSticker className={className} />;
    case 'cake':
      return <CakeSticker className={className} />;
    case 'doodle':
      return <DoodleSticker className={className} />;
    case 'gift':
      return <GiftBoxSticker className={className} />;
    case 'balloons':
      return <BalloonClusterSticker className={className} />;
    default:
      return <HeartSticker className={className} />;
  }
};
