import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { birthdayConfig } from '../config/birthdayConfig';
import {
  BalloonClusterSticker,
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

interface OpeningEnvelopeProps {
  onEnterCelebration: () => void;
  onTriggerConfetti: () => void;
}

type EnvelopeStage =
  | 'sealed'
  | 'lifting'
  | 'unsealing'
  | 'flapOpen'
  | 'sliding'
  | 'unfolding'
  | 'revealed';

const STAGE_ORDER: EnvelopeStage[] = [
  'sealed',
  'lifting',
  'unsealing',
  'flapOpen',
  'sliding',
  'unfolding',
  'revealed',
];

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({
  onEnterCelebration,
  onTriggerConfetti,
}) => {
  const [stage, setStage] = useState<EnvelopeStage>('sealed');
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const stageIndex = STAGE_ORDER.indexOf(stage);
  const isSealed = stage === 'sealed';
  const sealBroken = stageIndex >= STAGE_ORDER.indexOf('unsealing');
  const flapIsOpen = stageIndex >= STAGE_ORDER.indexOf('flapOpen');
  const letterSlidOut = stageIndex >= STAGE_ORDER.indexOf('sliding');
  const letterUnfolded = stageIndex >= STAGE_ORDER.indexOf('unfolding');
  const isRevealed = stage === 'revealed';

  const handleOpenSurprise = () => {
    if (stage !== 'sealed') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    onTriggerConfetti();

    if (prefersReduced) {
      setStage('revealed');
      timersRef.current.push(
        window.setTimeout(() => {
          onEnterCelebration();
        }, 1600)
      );
      return;
    }

    // 1. Envelope gently lifts & floats
    setStage('lifting');

    // 2. Heart wax seal animates & pops off
    timersRef.current.push(window.setTimeout(() => setStage('unsealing'), 240));
    // 3. Upper triangular flap rotates open smoothly
    timersRef.current.push(window.setTimeout(() => setStage('flapOpen'), 560));
    // 4. Inner birthday letter slides upward from inside the pocket
    timersRef.current.push(window.setTimeout(() => setStage('sliding'), 1080));
    // 5. Inner letter unfolds smoothly
    timersRef.current.push(window.setTimeout(() => setStage('unfolding'), 1560));
    // 6 & 7. Bloom tiny hearts/sparkles/flowers & reveal full birthday message
    timersRef.current.push(window.setTimeout(() => setStage('revealed'), 2050));
    // Enter full celebration page smoothly
    timersRef.current.push(window.setTimeout(() => onEnterCelebration(), 4100));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#F8DCE5]/50 to-[#DFECF8]/60 px-4 py-10 text-center sm:px-6"
    >
      {/* Prominent Pinterest scrapbook margin stickers & flying colorful butterflies */}
      <CloudSticker className="animate-float-gentle pointer-events-none absolute top-6 left-3 w-16 opacity-90 sm:top-10 sm:left-14 sm:w-24" />
      <BalloonClusterSticker className="animate-float-sway pointer-events-none hidden sm:block absolute top-10 right-12 h-24 w-20 opacity-95" />
      <ButterflySticker
        variant="blue"
        className="animate-butterfly-curve-left pointer-events-none absolute top-20 right-4 h-12 w-12 sm:top-1/4 sm:right-16 sm:h-16 sm:w-16"
      />
      <ButterflySticker
        variant="lavender"
        className="animate-butterfly-curve-right pointer-events-none hidden sm:block absolute top-1/3 left-14 h-14 w-14"
      />
      <ButterflySticker
        variant="peach"
        className="animate-butterfly-glide pointer-events-none hidden md:block absolute bottom-20 left-1/4 h-12 w-12"
      />
      <DaisySticker className="animate-flower-sway pointer-events-none absolute bottom-10 left-4 h-12 w-12 sm:bottom-16 sm:left-20 sm:h-14 sm:w-14" />
      <TeddySticker className="animate-teddy-idle pointer-events-none hidden md:block absolute bottom-14 right-20 h-20 w-20" />
      <StarSticker className="animate-twinkle pointer-events-none absolute top-28 left-8 h-8 w-8 sm:left-1/4" />

      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center">
        <div className="flex items-center gap-2">
          <EnvelopeSticker className="h-7 w-9" />
          <p className="font-nepali text-xs font-semibold tracking-wide text-[#7D616E] sm:text-sm">
            {birthdayConfig.intro.eyebrow} · {birthdayConfig.intro.nepaliGreeting}
          </p>
        </div>

        <h1 className="font-display mt-3 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-[#4A343E] sm:text-5xl">
          {birthdayConfig.intro.headline}
        </h1>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-[#6E535F] sm:text-base">
          {birthdayConfig.intro.subtext}
        </p>

        {/* Completely Folded & Closed Pastel Envelope with Multi-Stage Realistic Unfolding */}
        <div className="perspective-1200 relative mt-12 mb-10 flex h-60 w-full max-w-[305px] items-end justify-center sm:h-68 sm:max-w-[350px]">
          {/* Surrounding small flowers, hearts & butterflies */}
          <FlowerSticker className="animate-flower-sway pointer-events-none absolute -bottom-3 -left-4 z-40 h-11 w-11 -rotate-12" />
          <HeartSticker className="animate-heart-bounce pointer-events-none absolute -bottom-3 -right-3 z-40 h-11 w-11 rotate-12" />
          <ButterflySticker
            variant="pink"
            className="animate-butterfly-curve-left pointer-events-none absolute -top-3 -left-5 z-40 h-12 w-12 -rotate-12"
          />
          <BowSticker
            variant="pink"
            className="animate-bow-wiggle pointer-events-none absolute -top-2 -right-4 z-40 h-12 w-14 rotate-12"
          />

          {/* Bloom burst of tiny hearts, sparkles & flowers when revealed */}
          <AnimatePresence>
            {letterSlidOut && (
              <div className="pointer-events-none absolute inset-0 z-40" aria-hidden="true">
                <motion.div
                  initial={{ opacity: 0, scale: 0.3, x: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, x: -34, y: -52, rotate: -14 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-6 left-6"
                >
                  <HeartSticker className="h-8 w-8" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.3, x: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 36, y: -56, rotate: 16 }}
                  transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-6 right-6"
                >
                  <StarSticker className="h-8 w-8" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.2, y: 18 }}
                  animate={{ opacity: 1, scale: 1, x: -42, y: -10, rotate: -20 }}
                  transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-1/2 left-3"
                >
                  <DaisySticker className="h-8 w-8" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.2, y: 18 }}
                  animate={{ opacity: 1, scale: 1, x: 40, y: -14, rotate: 14 }}
                  transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-1/2 right-3"
                >
                  <ButterflySticker variant="blue" className="h-9 w-9" />
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Main Envelope Wrapper (lifts gently on click, completely closed at start) */}
          <motion.div
            onClick={handleOpenSurprise}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenSurprise();
              }
            }}
            aria-label={
              isSealed
                ? 'Tap sealed envelope to open your 18th birthday letter'
                : 'Birthday letter opening'
            }
            animate={
              isSealed
                ? { y: [0, -5, 0], rotate: [0, -0.5, 0.5, 0], scale: 1 }
                : { y: -4, rotate: 0, scale: 1.02 }
            }
            transition={
              isSealed
                ? { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
            }
            className="preserve-3d group relative h-46 w-full cursor-pointer rounded-2xl shadow-[0_18px_46px_rgba(164,114,134,0.2)] sm:h-52"
          >
            {/* Envelope Back Inner Wall (soft baby pink lining) */}
            <div className="absolute inset-0 z-0 rounded-2xl border border-[#E7C2CF] bg-gradient-to-b from-[#F8DCE5] via-[#FBE8EE] to-[#FFF8F0]" />

            {/* Inner Birthday Letter: Completely hidden inside pocket while sealed! */}
            <motion.div
              initial={false}
              animate={{
                y: letterSlidOut ? -92 : 24,
                opacity: letterSlidOut ? 1 : 0,
                scale: letterSlidOut ? 1 : 0.9,
              }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={{ zIndex: letterSlidOut ? 25 : 5 }}
              className="pointer-events-none absolute inset-x-3 top-2"
            >
              {/* Bottom Folded Half (Base of Letter) */}
              <div className="relative rounded-2xl border border-[#EAD0DA] bg-[#FFFDF9] px-4 py-4 shadow-[0_14px_34px_rgba(164,114,134,0.18)]">
                {/* Crease line */}
                <div className="doodle-border pointer-events-none absolute inset-1.5 rounded-xl" />

                {/* Top Unfolding Sheet */}
                <motion.div
                  initial={false}
                  animate={{
                    rotateX: letterUnfolded ? 0 : -86,
                    opacity: letterUnfolded ? 1 : 0.15,
                  }}
                  transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'bottom center' }}
                  className="relative z-10"
                >
                  <div className="mb-1 flex items-center justify-center gap-1.5">
                    <HeartSticker className="h-5 w-5" />
                    <span className="font-nepali text-sm font-semibold text-[#C95B7F] sm:text-base">
                      {birthdayConfig.intro.revealTitle}
                    </span>
                    <HeartSticker className="h-5 w-5" />
                  </div>
                  <p className="font-nepali text-xs leading-relaxed text-[#5D434E] sm:text-[13px]">
                    {birthdayConfig.intro.revealMessage}
                  </p>
                  {isRevealed && (
                    <p className="font-script mt-1.5 text-lg font-semibold text-[#C95B7F]">
                      जन्मदिनको धेरै धेरै शुभकामना ♡
                    </p>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Front Folded Envelope Pocket (Left, Right & Bottom Paper Folds) */}
            <div className="envelope-paper pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl border border-[#E7C2CF]">
              <svg
                viewBox="0 0 340 200"
                className="h-full w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="env-left" x1="0" y1="0" x2="170" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFF8F0" />
                    <stop offset="100%" stopColor="#FBE5EC" />
                  </linearGradient>
                  <linearGradient id="env-right" x1="340" y1="0" x2="170" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFF8F0" />
                    <stop offset="100%" stopColor="#FBE5EC" />
                  </linearGradient>
                  <linearGradient id="env-bottom" x1="170" y1="92" x2="170" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFEFC" />
                    <stop offset="100%" stopColor="#F8DCE5" />
                  </linearGradient>
                </defs>
                {/* Left triangle fold */}
                <path d="M0 0 L170 108 L0 200 Z" fill="url(#env-left)" stroke="#E6C2D0" strokeWidth="1.5" />
                {/* Right triangle fold */}
                <path d="M340 0 L170 108 L340 200 Z" fill="url(#env-right)" stroke="#E6C2D0" strokeWidth="1.5" />
                {/* Bottom folded pocket flap */}
                <path
                  d="M0 200 L146 98 Q170 84 194 98 L340 200 Z"
                  fill="url(#env-bottom)"
                  stroke="#E3BAC9"
                  strokeWidth="1.8"
                />
                {/* Soft subtle shadow crease under top flap when closed */}
                <path
                  d="M12 6 L170 118 L328 6"
                  fill="none"
                  stroke="rgba(182, 114, 140, 0.16)"
                  strokeWidth="4"
                />
              </svg>
            </div>

            {/* Upper Triangular Flap: Completely closed & folded downward at start, rotates open smoothly */}
            <motion.div
              initial={false}
              animate={{
                rotateX: flapIsOpen ? -175 : 0,
              }}
              transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
                zIndex: flapIsOpen ? 10 : 30,
              }}
              className="pointer-events-none absolute inset-x-0 top-0 h-[62%] overflow-visible"
            >
              <svg
                viewBox="0 0 340 124"
                className="h-full w-full drop-shadow-[0_6px_10px_rgba(164,114,134,0.16)]"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="env-top-flap" x1="170" y1="0" x2="170" y2="124" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F8DCE5" />
                    <stop offset="55%" stopColor="#FCE9EF" />
                    <stop offset="100%" stopColor="#FFF7F2" />
                  </linearGradient>
                </defs>
                {/* Pointed folded triangular top flap */}
                <path
                  d="M2 2 Q2 0 12 0 H328 Q338 0 338 2 L182 114 Q170 122 158 114 Z"
                  fill="url(#env-top-flap)"
                  stroke="#DFB5C4"
                  strokeWidth="2"
                />
                {/* Delicate stitched paper border inside triangle */}
                <path
                  d="M22 9 L170 106 L318 9"
                  fill="none"
                  stroke="#E5B8C8"
                  strokeDasharray="4 4"
                  strokeWidth="1.4"
                />
              </svg>
            </motion.div>

            {/* Cute Heart-Shaped Wax Seal in the Center of the Folded Flap */}
            <motion.div
              initial={false}
              animate={
                sealBroken
                  ? { scale: [1.18, 0.7, 0], y: -22, rotate: -18, opacity: 0 }
                  : { scale: [1, 1.07, 1], y: 0, rotate: 0, opacity: 1 }
              }
              transition={
                sealBroken
                  ? { duration: 0.42, ease: [0.16, 1, 0.3, 1] }
                  : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
              }
              className="pointer-events-none absolute top-[55%] left-1/2 z-35 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#FFF8F0] bg-gradient-to-br from-[#FF85AE] via-[#F25B89] to-[#D94372] shadow-[0_8px_20px_rgba(217,67,114,0.38)]">
                <div className="absolute inset-1 rounded-full border border-white/40" />
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#FFF8F0] drop-shadow-sm" aria-hidden="true">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {stage === 'sealed' ? (
            <motion.button
              key="open-btn"
              type="button"
              onClick={handleOpenSurprise}
              whileTap={{ scale: 0.97 }}
              className="min-h-[48px] rounded-full bg-gradient-to-r from-[#C95B7F] to-[#D67293] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(201,91,127,0.26)] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F] sm:text-base"
            >
              {birthdayConfig.intro.buttonLabel}
            </motion.button>
          ) : (
            <motion.div
              key="opening-msg"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-2"
            >
              <p className="font-display text-xl italic text-[#C95B7F] sm:text-2xl">
                {isRevealed
                  ? 'A birthday wish unfolded just for you ♡'
                  : 'Unfolding your birthday letter...'}
              </p>
              <button
                type="button"
                onClick={onEnterCelebration}
                className="min-h-[44px] rounded-full border border-[#E7C6D2] bg-[#FFFEFC]/85 px-5 py-1.5 text-xs font-semibold text-[#5E434F] shadow-sm transition-colors hover:bg-[#F8DCE5]/50"
              >
                Enter Scrapbook Now ♡
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
