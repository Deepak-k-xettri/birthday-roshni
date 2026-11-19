import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import {
  BalloonClusterSticker,
  ButterflySticker,
  HeartSticker,
  StickerBadge,
  TeddySticker,
} from './Stickers';

const TINT_STYLES: Record<string, string> = {
  pink: 'from-[#F8DCE5]/80 to-[#FFF8F0] border-[#EAD0DA]',
  lavender: 'from-[#E9E0F5]/80 to-[#FFFEFC] border-[#D7C9EB]',
  peach: 'from-[#F9E5D5]/80 to-[#FFF8F0] border-[#EAD0BC]',
  cream: 'from-[#FFF8F0] to-[#FFFEFC] border-[#E8D8C8]',
  blue: 'from-[#DFECF8]/80 to-[#FFFEFC] border-[#C9DCF0]',
};

export const EighteenReasonsSection: React.FC = () => {
  const [flippedNumbers, setFlippedNumbers] = useState<Record<number, boolean>>({});

  const openedCount = Object.values(flippedNumbers).filter(Boolean).length;

  const toggleCard = (num: number) => {
    setFlippedNumbers((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  const revealAll = () => {
    const all: Record<number, boolean> = {};
    birthdayConfig.reasons.items.forEach((item) => {
      all[item.number] = true;
    });
    setFlippedNumbers(all);
  };

  const resetAll = () => {
    setFlippedNumbers({});
  };

  return (
    <section id="reasons" className="relative py-16 sm:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center text-center">
          <ButterflySticker
            variant="pink"
            className="animate-butterfly-curve-left pointer-events-none hidden sm:block absolute -top-1 left-10 h-11 w-11"
          />
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#8E6575]">
            <HeartSticker className="animate-heart-bounce h-6 w-6" />
            <span>Scrapbook Flip Cards · Tap To Open</span>
            <TeddySticker className="animate-teddy-idle h-7 w-7" />
          </div>
          <h2 className="font-display mt-2.5 text-balance text-3xl font-semibold text-[#4A343E] sm:text-4xl md:text-5xl">
            {birthdayConfig.reasons.sectionTitle}
          </h2>
          <p className="mx-auto mt-2.5 max-w-xl text-sm leading-relaxed text-[#6E535F] sm:text-base">
            {birthdayConfig.reasons.sectionSubtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="tabular-nums text-xs font-semibold text-[#7D616E]">
              {openedCount} of {birthdayConfig.reasons.items.length} cards opened
            </span>
            <span aria-hidden="true" className="text-[#D8C1CB]">
              ·
            </span>
            <button
              type="button"
              onClick={revealAll}
              className="inline-flex min-h-[42px] items-center gap-1.5 rounded-full bg-[#F8DCE5]/85 px-4 py-1.5 text-xs font-semibold text-[#4A343E] transition-colors hover:bg-[#F8DCE5]"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#C95B7F]" />
              Reveal All
            </button>
            {openedCount > 0 && (
              <button
                type="button"
                onClick={resetAll}
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-full border border-[#EAD0DA] bg-[#FFFEFC] px-4 py-1.5 text-xs font-semibold text-[#6E535F] transition-colors hover:bg-[#F8DCE5]/40"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Flip Back
              </button>
            )}
          </div>
        </div>

        <div className="relative mt-10">
          <BalloonClusterSticker className="animate-float-gentle pointer-events-none hidden lg:block absolute -top-12 -right-4 z-10 h-20 w-16" />

          <div className="grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {birthdayConfig.reasons.items.map((reason, idx) => {
              const isFlipped = !!flippedNumbers[reason.number];
              const tintClass = TINT_STYLES[reason.tint] || TINT_STYLES.pink;

              return (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.35, delay: (idx % 6) * 0.04 }}
                  className="perspective-1000 h-50 sm:h-54"
                >
                  <button
                    type="button"
                    onClick={() => toggleCard(reason.number)}
                    aria-pressed={isFlipped}
                    aria-label={`Reason ${reason.number}: ${reason.title}`}
                    className={`group preserve-3d relative h-full w-full cursor-pointer text-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F] ${
                      isFlipped ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front */}
                    <div
                      className={`backface-hidden absolute inset-0 flex flex-col items-center justify-between rounded-2xl border bg-gradient-to-br p-3.5 text-center shadow-sm transition-shadow hover:shadow-md ${tintClass}`}
                    >
                      <span className="tabular-nums text-[11px] font-bold tracking-wider text-[#8E6575]">
                        {String(reason.number).padStart(2, '0')}
                      </span>

                      <StickerBadge
                        kind={reason.sticker}
                        className="h-14 w-14 transition-transform duration-200 group-hover:scale-110"
                      />

                      <div>
                        <p className="font-nepali text-sm font-semibold leading-snug text-[#4A343E]">
                          {reason.title}
                        </p>
                        <p className="mt-1 text-[11px] font-medium text-[#8E6575]">
                          Tap to open ♡
                        </p>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between rounded-2xl border border-[#EAD0DA] bg-[#FFFEFC] p-3.5 shadow-[0_10px_24px_rgba(164,114,134,0.14)]">
                      <div className="flex items-center justify-between">
                        <span className="tabular-nums text-[11px] font-bold text-[#C95B7F]">
                          #{reason.number}
                        </span>
                        <StickerBadge kind={reason.sticker} className="h-6 w-6" />
                      </div>

                      <p className="font-nepali text-xs leading-relaxed text-[#4A343E] sm:text-[13px]">
                        {reason.message}
                      </p>

                      <span className="text-[11px] font-medium text-[#8E6575]">
                        Tap to close
                      </span>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
