import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { SmartImage } from './SmartImage';
import {
  BalloonClusterSticker,
  BowSticker,
  ButterflySticker,
  CakeSticker,
  DaisySticker,
  HeartSticker,
  StarSticker,
  TeddySticker,
} from './Stickers';

interface HeroSectionProps {
  onCelebrateClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCelebrateClick }) => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#F8DCE5]/45 via-[#FFF8F0] to-[#FFF8F0] pt-8 pb-16 sm:pt-14 sm:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-[12%] h-72 w-72 rounded-full bg-[#E9E0F5]/50 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Story Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-center lg:col-span-7"
          >
            {/* Playful Scrapbook 18 Stamp + Stickers */}
            <div className="mb-6 flex items-center gap-4">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative flex h-[78px] w-[78px] shrink-0 -rotate-3 items-center justify-center rounded-2xl border border-[#EAD0DA] bg-gradient-to-br from-[#FFFEFC] via-[#FFF8F0] to-[#F8DCE5]/60 shadow-[0_12px_28px_rgba(164,114,134,0.16)] sm:h-22 sm:w-22"
              >
                <span
                  aria-hidden="true"
                  className="washi-blue absolute -top-2 left-1/2 h-3.5 w-10 -translate-x-1/2 rounded-sm"
                />
                <span className="font-display text-4xl font-bold tracking-tight text-[#C95B7F] sm:text-5xl">
                  18
                </span>
                <DaisySticker className="animate-flower-sway absolute -right-3 -bottom-3 h-8 w-8" />
                <StarSticker className="animate-twinkle absolute -top-3 -left-3 h-7 w-7" />
              </motion.div>

              <div className="min-w-0">
                <p className="font-nepali text-xs font-semibold leading-snug text-[#B64A6E] sm:text-sm">
                  {birthdayConfig.hero.kicker}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#7D616E]">
                  <span>{birthdayConfig.birthdayDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>18th Birthday Scrapbook</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <ButterflySticker
                variant="blue"
                className="animate-butterfly-curve-left pointer-events-none hidden sm:block absolute -top-9 right-6 h-13 w-13"
              />
              <ButterflySticker
                variant="peach"
                className="animate-butterfly-curve-right pointer-events-none hidden md:block absolute -top-6 right-28 h-10 w-10"
              />
              <h1 className="font-display text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-[#4A343E] sm:text-5xl lg:text-[56px]">
                {birthdayConfig.hero.headline}
              </h1>
            </div>

            <p className="font-script mt-3 text-2xl font-semibold text-[#C95B7F] sm:text-3xl">
              {birthdayConfig.hero.subtitle}
            </p>

            <p className="font-nepali mt-2 text-base font-medium leading-relaxed text-[#7D4F61] sm:text-lg">
              {birthdayConfig.hero.nepaliGreeting}
            </p>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#624954] sm:text-base">
              {birthdayConfig.hero.supportingText}
            </p>

            {/* Touch-friendly Primary Actions + Decorative Stickers */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#love-letter"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-gradient-to-r from-[#C95B7F] to-[#D67293] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(201,91,127,0.24)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(201,91,127,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F] whitespace-nowrap shrink-0"
              >
                Read Your Letter
                <ArrowDown className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={onCelebrateClick}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#E7C6D2] bg-[#FFFEFC]/95 px-5 py-3 text-sm font-semibold text-[#4A343E] shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#F8DCE5]/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F] whitespace-nowrap shrink-0"
              >
                <Sparkles className="h-4 w-4 text-[#C95B7F]" />
                Birthday Sparkles
              </button>

              <BalloonClusterSticker className="animate-float-gentle hidden md:block h-14 w-12 ml-2" />
            </div>
          </motion.div>

          {/* Right Caption-Free Polaroid Scrapbook Portrait Frame with Prominent Stickers */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center px-3 lg:col-span-5 lg:px-0"
          >
            <ButterflySticker
              variant="lavender"
              className="animate-butterfly-curve-left pointer-events-none absolute -top-5 left-0 z-20 h-13 w-13 -rotate-6 sm:-left-5 sm:h-15 sm:w-15"
            />
            <BowSticker
              variant="red"
              className="animate-bow-wiggle pointer-events-none absolute -top-5 right-0 z-20 h-12 w-14 rotate-6 sm:-right-3 sm:h-14 sm:w-16"
            />
            <CakeSticker className="animate-float-sway pointer-events-none absolute -bottom-5 -left-1 z-20 h-14 w-14 -rotate-6 sm:-left-5 sm:h-16 sm:w-16" />
            <TeddySticker className="animate-teddy-idle pointer-events-none hidden sm:block absolute -right-5 bottom-10 z-20 h-16 w-16 rotate-6" />
            <HeartSticker className="animate-heart-bounce pointer-events-none absolute right-1 -bottom-4 z-20 h-11 w-11 rotate-12" />

            <div className="relative w-full max-w-sm rounded-2xl border border-[#EAD4DD] bg-[#FFFEFC] p-3.5 pb-7 shadow-[0_20px_50px_rgba(164,114,134,0.16)] ring-1 ring-white/80 sm:p-4 sm:pb-8 lg:h-full lg:max-w-none">
              <span
                aria-hidden="true"
                className="washi-pink absolute -top-2.5 left-1/2 z-20 h-5 w-24 -translate-x-1/2 -rotate-1 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
              />

              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#F8DCE5]/35 ring-1 ring-black/5 lg:h-[470px] lg:aspect-auto">
                <SmartImage
                  src={birthdayConfig.hero.portraitSrc}
                  fallbackSrc={birthdayConfig.hero.portraitFallback}
                  alt={`${birthdayConfig.recipientName} 18th birthday portrait`}
                  fallbackPalette="pink"
                  fallbackMotif="flower"
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
