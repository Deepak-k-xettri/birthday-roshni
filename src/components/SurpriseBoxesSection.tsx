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
                  className={`relative flex w-full flex-col justify-between overflow-hidden rounded-[22px] border p-5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F] ${
                    isOpen
                      ? 'border-[#EAD0DA] bg-[#FFFEFC] shadow-[0_14px_32px_rgba(164,114,134,0.14)]'
                      : `bg-gradient-to-br ${tintClass} shadow-sm hover:-translate-y-1 hover:shadow-md`
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
                        className="flex h-full min-h-[220px] flex-col items-center justify-center text-center"
                      >
                        <div className="relative mb-4 flex items-center justify-center">
                          <GiftBoxSticker className="animate-float-gentle h-20 w-20" />
                        </div>
                        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#8E6575]">
                          {box.label}
                        </p>
                        <p className="font-display mt-1.5 text-xl font-semibold text-[#4A343E]">
                          {box.hint}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#C95B7F]">
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
                        className="flex h-full min-h-[220px] flex-col justify-between"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-semibold text-[#C95B7F]">
                            {box.kind}
                          </span>
                          <StickerBadge kind={box.sticker} className="h-10 w-10" />
                        </div>

                        <div className="my-3">
                          <h3 className="font-nepali text-xl font-semibold text-[#4A343E]">
                            {box.title}
                          </h3>
                          <p className="font-nepali mt-2 text-sm leading-relaxed text-[#624954]">
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
