import React from 'react';
import { motion } from 'motion/react';
import { RotateCcw } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import {
  BowSticker,
  ButterflySticker,
  CloudSticker,
  DaisySticker,
  EnvelopeSticker,
  FlowerSticker,
  HeartSticker,
  StarSticker,
  TeddySticker,
} from './Stickers';

interface FinalWishSectionProps {
  onReplay: () => void;
}

export const FinalWishSection: React.FC<FinalWishSectionProps> = ({ onReplay }) => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#F8DCE5]/45 to-[#DFECF8]/65 pt-16 pb-24 sm:pt-24 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E9E0F5]/55 blur-3xl"
      />

      {/* Ambient Floating Scrapbook Margin Stickers & Flying Butterflies */}
      <CloudSticker className="animate-float-gentle pointer-events-none hidden sm:block absolute top-10 left-12 w-24 opacity-90" />
      <StarSticker className="animate-twinkle pointer-events-none hidden sm:block absolute top-14 right-14 h-9 w-9" />
      <ButterflySticker
        variant="blue"
        className="animate-butterfly-curve-right pointer-events-none hidden sm:block absolute bottom-24 left-12 h-15 w-15"
      />
      <ButterflySticker
        variant="lavender"
        className="animate-butterfly-curve-left pointer-events-none hidden md:block absolute top-28 right-10 h-13 w-13"
      />
      <ButterflySticker
        variant="peach"
        className="animate-butterfly-glide pointer-events-none hidden lg:block absolute top-1/2 left-8 h-12 w-12"
      />
      <TeddySticker className="animate-teddy-idle pointer-events-none hidden sm:block absolute right-14 bottom-18 h-18 w-18" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="scrapbook-paper relative rounded-[28px] border border-[#EAD0DA] px-6 py-11 shadow-[0_20px_50px_rgba(164,114,134,0.14)] ring-1 ring-white/80 sm:px-12 sm:py-13"
        >
          <div className="doodle-border pointer-events-none absolute inset-3 rounded-[22px]" />

          {/* Corner Stickers & Butterflies on Final Keepsake Card */}
          <BowSticker
            variant="red"
            className="animate-bow-wiggle pointer-events-none absolute -top-6 left-1/2 z-20 h-12 w-14 -translate-x-1/2"
          />
          <ButterflySticker
            variant="pink"
            className="animate-butterfly-curve-left pointer-events-none absolute -top-5 -left-2 z-20 h-13 w-13 -rotate-6 sm:-left-5"
          />
          <ButterflySticker
            variant="blue"
            className="animate-butterfly-curve-right pointer-events-none absolute -bottom-4 -right-2 z-20 hidden sm:block h-12 w-12 rotate-6 sm:-right-5"
          />
          <FlowerSticker className="animate-flower-sway pointer-events-none absolute -top-5 -right-2 z-20 h-11 w-11 rotate-6 sm:-right-5" />
          <EnvelopeSticker className="animate-float-gentle pointer-events-none absolute -bottom-4 -left-1 z-20 h-10 w-12 -rotate-6 sm:-left-4" />
          <TeddySticker className="animate-teddy-idle pointer-events-none absolute -right-1 -bottom-5 z-20 h-14 w-14 rotate-6 sm:hidden" />

          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-center gap-3">
              <DaisySticker className="animate-flower-sway h-9 w-9" />
              <HeartSticker className="animate-heart-bounce h-9 w-9" />
              <DaisySticker className="animate-flower-sway h-9 w-9" />
            </div>

            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#8E6575]">
              {birthdayConfig.finalWish.eyebrow}
            </p>

            <p className="font-nepali mt-2 text-base font-medium text-[#C95B7F] sm:text-lg">
              {birthdayConfig.finalWish.nepaliBlessing}
            </p>

            <h2 className="font-display mt-2 text-balance text-3xl font-semibold text-[#4A343E] sm:text-4xl md:text-5xl">
              {birthdayConfig.finalWish.headline}
            </h2>

            <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-[#EFE0E6] bg-[#FFFEFC]/80 px-5 py-6 text-left shadow-sm sm:px-8 sm:py-7">
              <p className="font-script text-2xl font-semibold text-[#C95B7F] sm:text-3xl">
                {birthdayConfig.finalWish.salutation}
              </p>

              <div className="font-nepali mt-3 space-y-3 text-sm leading-relaxed text-[#4A343E] sm:text-base">
                {birthdayConfig.finalWish.paragraphs.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>

              <p className="font-nepali mt-5 text-base font-semibold text-[#C95B7F] sm:text-lg">
                {birthdayConfig.finalWish.signOff}
              </p>
            </div>

            <div className="mt-9 flex justify-center">
              <button
                type="button"
                onClick={onReplay}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#E7C6D2] bg-[#FFFEFC] px-6 py-3 text-sm font-semibold text-[#4A343E] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#F8DCE5]/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F]"
              >
                <RotateCcw className="h-4 w-4 text-[#C95B7F]" />
                {birthdayConfig.finalWish.replayLabel}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
