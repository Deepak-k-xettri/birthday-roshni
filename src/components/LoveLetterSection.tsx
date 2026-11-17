import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MailOpen, Mail } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import {
  BowSticker,
  ButterflySticker,
  DaisySticker,
  EnvelopeSticker,
  FlowerSticker,
  HeartSticker,
  StarSticker,
  TeddySticker,
} from './Stickers';

export const LoveLetterSection: React.FC = () => {
  // Starts completely folded and closed until tapped
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="love-letter" className="relative py-16 sm:py-22">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center text-center">
          <ButterflySticker
            variant="peach"
            className="animate-butterfly-curve-left pointer-events-none hidden sm:block absolute -top-2 left-6 h-11 w-11"
          />
          <ButterflySticker
            variant="lavender"
            className="animate-butterfly-curve-right pointer-events-none hidden sm:block absolute top-2 right-6 h-11 w-11"
          />

          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#8E6575]">
            <EnvelopeSticker className="h-6 w-8" />
            <span>Handwritten Birthday Letter</span>
            <FlowerSticker className="animate-flower-sway h-6 w-6" />
          </div>
          <h2 className="font-display mt-2.5 text-balance text-3xl font-semibold text-[#4A343E] sm:text-4xl md:text-5xl">
            {birthdayConfig.loveLetter.sectionTitle}
          </h2>
          <p className="mx-auto mt-2.5 max-w-xl text-sm leading-relaxed text-[#6E535F] sm:text-base">
            {birthdayConfig.loveLetter.sectionSubtitle}
          </p>

          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#E7C6D2] bg-[#FFFEFC] px-5 py-2.5 text-xs font-semibold text-[#4A343E] shadow-sm transition-colors hover:bg-[#F8DCE5]/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F]"
            >
              {isOpen ? (
                <>
                  <Mail className="h-4 w-4 text-[#C95B7F]" />
                  Fold Envelope Gently
                </>
              ) : (
                <>
                  <MailOpen className="h-4 w-4 text-[#C95B7F]" />
                  Unfold Birthday Letter
                </>
              )}
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="perspective-1200 relative mt-10"
        >
          {/* Prominent Scrapbook Stickers & Butterflies Around Letter */}
          <DaisySticker className="animate-flower-sway pointer-events-none absolute -top-5 -left-1 z-30 h-12 w-12 -rotate-12 sm:-left-5 sm:h-14 sm:w-14" />
          <BowSticker
            variant="pink"
            className="animate-bow-wiggle pointer-events-none absolute -top-5 -right-1 z-30 h-12 w-14 rotate-6 sm:-right-5 sm:h-14 sm:w-16"
          />
          <ButterflySticker
            variant="blue"
            className="animate-butterfly-curve-left pointer-events-none hidden sm:block absolute top-1/3 -left-7 z-30 h-13 w-13"
          />
          <TeddySticker className="animate-teddy-idle pointer-events-none hidden sm:block absolute -right-6 bottom-12 z-30 h-16 w-16 rotate-6" />
          <HeartSticker className="animate-heart-bounce pointer-events-none absolute right-2 -bottom-4 z-30 h-11 w-11 rotate-6 sm:-right-4" />

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.article
                key="opened-letter"
                initial={{ opacity: 0, y: 26, scaleY: 0.84, rotateX: -14 }}
                animate={{ opacity: 1, y: 0, scaleY: 1, rotateX: 0 }}
                exit={{ opacity: 0, y: 18, scaleY: 0.9 }}
                transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'top center' }}
                className="scrapbook-paper relative overflow-hidden rounded-[24px] border border-[#EAD0DA] p-5 shadow-[0_16px_42px_rgba(164,114,134,0.12)] sm:p-9 md:p-12"
              >
                <div className="doodle-border pointer-events-none absolute inset-2.5 rounded-[18px] sm:inset-4" />

                <div className="relative z-10">
                  <div className="font-nepali flex flex-wrap items-center justify-between gap-2 border-b border-[#EFE0E6] pb-3.5 text-xs text-[#8E6575]">
                    <span>{birthdayConfig.loveLetter.dateLabel}</span>
                    <span>For {birthdayConfig.recipientName} ♡</span>
                  </div>

                  <p className="font-script mt-5 text-3xl font-semibold text-[#C95B7F] sm:text-4xl">
                    {birthdayConfig.loveLetter.salutation}
                  </p>

                  <div className="letter-lines mt-4 space-y-5 pt-1">
                    {birthdayConfig.loveLetter.paragraphs.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: index * 0.05 }}
                        className="font-nepali text-[15px] leading-[36px] text-[#4A343E] sm:text-[17px]"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-[#EFE0E6] pt-5 text-right">
                    <p className="font-nepali text-sm font-medium text-[#7D616E] sm:text-base">
                      {birthdayConfig.loveLetter.closing}
                    </p>
                    <p className="font-script mt-1 text-3xl font-bold text-[#C95B7F]">
                      {birthdayConfig.loveLetter.signature}
                    </p>
                  </div>
                </div>
              </motion.article>
            ) : (
              <motion.button
                key="closed-envelope"
                type="button"
                onClick={() => setIsOpen(true)}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative mx-auto block w-full max-w-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C95B7F]"
              >
                {/* True Folded & Closed Pastel Envelope Preview */}
                <div className="envelope-paper relative h-64 w-full overflow-hidden rounded-[26px] border border-[#E5BFCE] shadow-[0_18px_44px_rgba(164,114,134,0.16)] sm:h-72">
                  {/* Folded pocket geometry */}
                  <svg
                    viewBox="0 0 560 280"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="sec-env-flap" x1="280" y1="0" x2="280" y2="170" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#F8DCE5" />
                        <stop offset="100%" stopColor="#FFF7F2" />
                      </linearGradient>
                      <linearGradient id="sec-env-bot" x1="280" y1="130" x2="280" y2="280" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FFFEFC" />
                        <stop offset="100%" stopColor="#FBE3EC" />
                      </linearGradient>
                    </defs>
                    {/* Side paper folds */}
                    <path d="M0 0 L280 155 L0 280 Z" fill="#FFF8F0" stroke="#E5C0CE" strokeWidth="1.5" />
                    <path d="M560 0 L280 155 L560 280 Z" fill="#FFF8F0" stroke="#E5C0CE" strokeWidth="1.5" />
                    {/* Bottom pocket */}
                    <path d="M0 280 L252 138 Q280 124 308 138 L560 280 Z" fill="url(#sec-env-bot)" stroke="#E3BAC9" strokeWidth="1.8" />
                    {/* Clearly visible triangular top flap pointing down */}
                    <path
                      d="M4 2 H556 L296 164 Q280 174 264 164 Z"
                      fill="url(#sec-env-flap)"
                      stroke="#DFB5C4"
                      strokeWidth="2"
                    />
                    <path
                      d="M28 12 L280 152 L532 12"
                      fill="none"
                      stroke="#E5B8C8"
                      strokeDasharray="5 5"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* Heart Wax Seal Centered at Flap Tip */}
                  <div className="relative z-10 flex h-full flex-col items-center justify-end pb-6 sm:pb-7">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#FFF8F0] bg-gradient-to-br from-[#FF85AE] via-[#F25B89] to-[#D94372] shadow-[0_8px_20px_rgba(217,67,114,0.34)] transition-transform duration-300 group-hover:scale-110">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#FFF8F0]" aria-hidden="true">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    <p className="font-display text-xl font-semibold text-[#4A343E] sm:text-2xl">
                      A sealed birthday letter for {birthdayConfig.recipientName}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[#C95B7F] sm:text-sm">
                      <StarSticker className="h-4 w-4" />
                      Tap envelope to break the seal &amp; unfold
                    </p>
                  </div>
                </div>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
