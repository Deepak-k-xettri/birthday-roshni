import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { PartyPopper } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import {
  BalloonClusterSticker,
  BowSticker,
  ButterflySticker,
  CakeSticker,
  DaisySticker,
  GiftBoxSticker,
  HeartSticker,
  StarSticker,
} from './Stickers';

interface CelebrationSectionProps {
  onCelebrateBurst: () => void;
}

export const CelebrationSection: React.FC<CelebrationSectionProps> = ({
  onCelebrateBurst,
}) => {
  const [celebrated, setCelebrated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { margin: '160px 0px' });

  const handleCelebrate = () => {
    setCelebrated(true);
    onCelebrateBurst();
  };

  return (
    <section ref={sectionRef} id="celebrate" className="relative overflow-hidden py-16 sm:py-22">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="scrapbook-paper relative overflow-hidden rounded-[28px] border border-[#EAD0DA] px-5 py-14 text-center shadow-[0_18px_46px_rgba(164,114,134,0.13)] sm:px-12 sm:py-18">
          <div className="doodle-border pointer-events-none absolute inset-3 rounded-[22px] sm:inset-4" />

          {/* Prominent Vibrant Birthday Balloons, Cake & Gift Stickers */}
          <BalloonClusterSticker className="animate-float-gentle pointer-events-none absolute top-4 left-2 h-20 w-16 opacity-95 sm:top-8 sm:left-8 sm:h-28 sm:w-22" />
          <BalloonClusterSticker className="animate-float-sway pointer-events-none absolute top-4 right-2 h-20 w-16 opacity-95 sm:top-8 sm:right-8 sm:h-28 sm:w-22" />
          <CakeSticker className="animate-float-gentle pointer-events-none hidden sm:block absolute bottom-7 left-10 h-18 w-18 -rotate-6" />
          <GiftBoxSticker className="animate-float-sway pointer-events-none hidden sm:block absolute right-10 bottom-7 h-16 w-16 rotate-6" />
          <ButterflySticker
            variant="blue"
            className="animate-butterfly-curve-right pointer-events-none hidden md:block absolute top-1/2 left-14 h-13 w-13"
          />
          <ButterflySticker
            variant="lavender"
            className="animate-butterfly-curve-left pointer-events-none hidden md:block absolute top-14 left-1/4 h-10 w-10"
          />
          <DaisySticker className="animate-flower-sway pointer-events-none hidden md:block absolute top-1/2 right-16 h-11 w-11" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#8E6575]">
              <StarSticker className="animate-twinkle h-5 w-5" />
              <span>{birthdayConfig.celebration.eyebrow}</span>
              <StarSticker className="animate-twinkle h-5 w-5" />
            </div>

            {/* Soft 18 Stamp Centerpiece */}
            <div className="relative mx-auto mt-6 flex h-34 w-34 items-center justify-center sm:h-42 sm:w-42">
              <div className="absolute inset-0 rounded-full bg-[#F8DCE5]/70 blur-xl" />
              <motion.div
                animate={
                  celebrated
                    ? { scale: [1, 1.08, 1], rotate: [0, -2, 2, 0] }
                    : isInView
                      ? { scale: [1, 1.02, 1] }
                      : { scale: 1 }
                }
                transition={{
                  duration: celebrated ? 0.6 : 4.8,
                  repeat: celebrated || !isInView ? 0 : Infinity,
                  ease: [0.37, 0, 0.63, 1],
                }}
                className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-[#FFFEFC] bg-gradient-to-br from-[#F8DCE5] via-[#FFF8F0] to-[#DFECF8] shadow-[0_14px_34px_rgba(164,114,134,0.18)]"
              >
                <span className="font-display text-5xl font-bold tracking-tight text-[#C95B7F] sm:text-6xl">
                  {birthdayConfig.celebration.number}
                </span>
                <BowSticker
                  variant="red"
                  className="animate-bow-wiggle absolute -top-5 h-11 w-13"
                />
                <HeartSticker className="animate-heart-bounce absolute -right-2 -bottom-2 h-10 w-10" />
              </motion.div>
            </div>

            {/* Mobile Cake & Gift Strip below 18 badge */}
            <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
              <CakeSticker className="h-12 w-12" />
              <GiftBoxSticker className="h-11 w-11" />
            </div>

            <AnimatePresence mode="wait">
              {celebrated ? (
                <motion.div
                  key="celebrated"
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6"
                >
                  <h2 className="font-display text-balance text-2xl font-bold tracking-tight text-[#C95B7F] sm:text-4xl">
                    {birthdayConfig.celebration.revealHeadline}
                  </h2>
                  <p className="font-nepali mt-3 text-base font-semibold text-[#4A343E] sm:text-lg">
                    {birthdayConfig.celebration.nepaliWish}
                  </p>
                  <p className="mx-auto mt-2.5 max-w-lg text-sm leading-relaxed text-[#624954] sm:text-base">
                    {birthdayConfig.celebration.wishText}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6"
                >
                  <h2 className="font-display text-balance text-2xl font-semibold text-[#4A343E] sm:text-4xl">
                    {birthdayConfig.celebration.idleHeadline}
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 flex justify-center">
              <motion.button
                type="button"
                onClick={handleCelebrate}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-gradient-to-r from-[#C95B7F] to-[#D67293] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(201,91,127,0.24)] transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F] sm:text-base"
              >
                <PartyPopper className="h-4 w-4" />
                {celebrated ? 'Throw Gentle Confetti ♡' : birthdayConfig.celebration.buttonLabel}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
