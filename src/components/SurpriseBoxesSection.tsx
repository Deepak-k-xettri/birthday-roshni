import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { birthdayConfig, type SurpriseBoxItem } from '../config/birthdayConfig';
import { BowSticker, ButterflySticker, GiftBoxSticker, StickerBadge } from './Stickers';

interface SurpriseBoxesSectionProps {
  onUnwrapSurprise: () => void;
}

const BOX_TINTS: Record<SurpriseBoxItem['tint'], string> = {
  pink: 'from-[#F8DCE5]/80 via-[#FFF8F0] to-[#FFFEFC] border-[#EAD0DA]',
  blue: 'from-[#DFECF8]/85 via-[#FFFEFC] to-[#FFF8F0] border-[#C9DCF0]',
  peach: 'from-[#F9E5D5]/85 via-[#FFF8F0] to-[#FFFEFC] border-[#EAD0BC]',
  lavender: 'from-[#E9E0F5]/80 via-[#FFFEFC] to-[#FFF8F0] border-[#D7C9EB]',
};

export const SurpriseBoxesSection: React.FC<SurpriseBoxesSectionProps> = ({
  onUnwrapSurprise,
}) => {
  const [openedIds, setOpenedIds] = useState<Record<string, boolean>>({});

  const toggleBox = (id: string) => {
    const alreadyOpen = !!openedIds[id];
    setOpenedIds((prev) => ({ ...prev, [id]: !alreadyOpen }));
    if (!alreadyOpen) {
      onUnwrapSurprise();
    }
  };

  return (
    <section
      id="surprises"
      className="relative bg-gradient-to-b from-[#FFF8F0] via-[#F8DCE5]/30 to-[#FFF8F0] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center text-center">
          <ButterflySticker
            variant="lavender"
            className="animate-butterfly-curve-right pointer-events-none hidden sm:block absolute -top-2 right-10 h-11 w-11"
          />
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#8E6575]">
            <BowSticker variant="red" className="animate-bow-wiggle h-7 w-9" />
            <span>Ribbon-Tied Notes</span>
            <GiftBoxSticker className="animate-float-gentle h-7 w-7" />
          </div>
          <h2 className="font-display mt-2.5 text-balance text-3xl font-semibold text-[#4A343E] sm:text-4xl md:text-5xl">
            {birthdayConfig.surprises.sectionTitle}
          </h2>
          <p className="mx-auto mt-2.5 max-w-xl text-sm leading-relaxed text-[#6E535F] sm:text-base">
            {birthdayConfig.surprises.sectionSubtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {birthdayConfig.surprises.items.map((box, idx) => {
            const isOpen = !!openedIds[box.id];
            const tintClass = BOX_TINTS[box.tint];

            return (
              <motion.div
                key={box.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="flex"
              >
                <button
                  type="button"
                  onClick={() => toggleBox(box.id)}
                  aria-expanded={isOpen}
                  aria-label={`${isOpen ? 'Close' : 'Open'} ${box.label}: ${box.hint}`}
                  className={`group relative flex min-h-[310px] w-full flex-col justify-between overflow-hidden rounded-[24px] border p-4 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F] sm:p-5 ${
                    isOpen
                      ? 'scrapbook-paper border-[#EAD0DA] shadow-[0_14px_32px_rgba(164,114,134,0.14)]'
                      : `bg-gradient-to-br ${tintClass} shadow-[0_8px_24px_rgba(164,114,134,0.09)] hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(164,114,134,0.15)]`
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {!isOpen ? (
                      <motion.div
                        key="wrapped"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="flex h-full min-h-[278px] flex-col items-center justify-center text-center"
                      >
                        <div className="relative mb-4 flex items-center justify-center">
                          <div className="relative h-[108px] w-44 -rotate-2 transition-transform duration-300 group-hover:rotate-0">
                            <div className="envelope-paper absolute inset-0 rounded-xl border border-[#E5BFCE] shadow-[0_8px_20px_rgba(164,114,134,0.14)]" />
                            <div className="absolute inset-x-0 top-0 z-10 h-[60%] bg-[#F6DDE6] [clip-path:polygon(0_0,100%_0,50%_100%)]" />
                            <div className="absolute inset-x-0 bottom-0 z-20 h-[68%] rounded-b-xl bg-[#F8E6EC] [clip-path:polygon(0_0,50%_69%,100%_0,100%_100%,0_100%)]" />
                            <span className="absolute top-[42%] left-1/2 z-30 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#FFF8F0] bg-[#C95B7F] text-lg text-white shadow-md">
                              ♡
                            </span>
                          </div>
                        </div>
                        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#8E6575]">
                          {box.label}
                        </p>
                        <p className="font-script mt-1.5 text-2xl font-semibold leading-tight text-[#4A343E]">
                          {box.hint}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#C95B7F]">
                          <Sparkles className="h-3.5 w-3.5" />
                          Open this little note
                        </span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="unwrapped"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex h-full min-h-[278px] flex-col justify-between rounded-xl border border-white/75 bg-white/55 p-3 sm:p-4"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-script text-lg font-semibold text-[#C95B7F] sm:text-xl">
                            {box.kind}
                          </span>
                          <StickerBadge kind={box.sticker} className="h-10 w-10" />
                        </div>

                        <div className="my-3">
                          <h3 className="font-script text-2xl font-semibold leading-tight text-[#4A343E] sm:text-3xl">
                            {box.title}
                          </h3>
                          <p className="font-nepali mt-2 text-sm leading-relaxed text-[#624954] sm:text-[15px]">
                            {box.message}
                          </p>
                        </div>

                        <span className="text-xs font-medium text-[#8E6575]">
                          Tap to wrap again
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
