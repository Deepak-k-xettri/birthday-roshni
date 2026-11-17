import React from 'react';
import { motion } from 'motion/react';
import { birthdayConfig } from '../config/birthdayConfig';
import {
  BowSticker,
  ButterflySticker,
  DaisySticker,
  EnvelopeSticker,
  HeartSticker,
  StarSticker,
  StickerBadge,
} from './Stickers';

const CHAPTER_TINTS: Record<string, string> = {
  pink: 'from-[#F8DCE5]/75 via-[#FFFEFC] to-[#FFF8F0] border-[#EAD0DA]',
  lavender: 'from-[#E9E0F5]/75 via-[#FFFEFC] to-[#FFF8F0] border-[#D7C9EB]',
  peach: 'from-[#F9E5D5]/75 via-[#FFF8F0] to-[#FFFEFC] border-[#EAD0BC]',
};

const NOTE_STYLES = [
  'bg-gradient-to-br from-[#F8DCE5]/65 to-[#FFF8F0] border-[#EBC6D3] -rotate-1',
  'bg-gradient-to-br from-[#DFECF8]/75 to-[#FFFEFC] border-[#C8DDF0] rotate-1',
  'bg-gradient-to-br from-[#E9E0F5]/65 to-[#FFFEFC] border-[#D6C7EB] -rotate-1',
  'bg-gradient-to-br from-[#F9E5D5]/70 to-[#FFF8F0] border-[#EBD0BC] rotate-1',
];

const TAPE_CLASSES = ['washi-pink', 'washi-blue', 'washi-lavender', 'washi-peach'];

export const OurStorySection: React.FC = () => {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#E9E0F5]/30 to-[#FFF8F0] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="relative flex flex-col items-center text-center">
          <ButterflySticker
            variant="pink"
            className="animate-butterfly-curve-left pointer-events-none hidden sm:block absolute -top-2 left-8 h-12 w-12"
          />
          <ButterflySticker
            variant="blue"
            className="animate-butterfly-curve-right pointer-events-none hidden sm:block absolute top-1 right-8 h-11 w-11"
          />

          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#8E6575]">
            <HeartSticker className="animate-heart-bounce h-6 w-6" />
            <span>Class 10 → Class 12</span>
            <DaisySticker className="animate-flower-sway h-6 w-6" />
          </div>

          <h2 className="font-display mt-2.5 text-balance text-3xl font-semibold text-[#4A343E] sm:text-4xl md:text-5xl">
            {birthdayConfig.ourStory.sectionTitle}
          </h2>
          <p className="mx-auto mt-2.5 max-w-xl text-sm leading-relaxed text-[#6E535F] sm:text-base">
            {birthdayConfig.ourStory.sectionSubtitle}
          </p>
        </div>

        {/* Main Heartfelt Story Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="scrapbook-paper relative mx-auto mt-10 max-w-3xl rounded-[26px] border border-[#EAD0DA] p-6 text-center shadow-[0_18px_46px_rgba(164,114,134,0.12)] ring-1 ring-white/80 sm:p-10"
        >
          <div className="doodle-border pointer-events-none absolute inset-2.5 rounded-[20px] sm:inset-3.5" />
          <span
            aria-hidden="true"
            className="washi-lavender absolute -top-2.5 left-1/2 z-20 h-5 w-24 -translate-x-1/2 -rotate-1 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
          />

          <BowSticker
            variant="pink"
            className="animate-bow-wiggle pointer-events-none absolute -top-5 -right-2 z-20 h-12 w-14 rotate-6 sm:-right-4"
          />
          <ButterflySticker
            variant="peach"
            className="animate-butterfly-curve-left pointer-events-none absolute -top-5 -left-2 z-20 h-12 w-12 -rotate-6 sm:-left-4"
          />
          <StarSticker className="animate-twinkle pointer-events-none absolute -bottom-4 right-3 z-20 h-9 w-9" />
          <EnvelopeSticker className="animate-float-gentle pointer-events-none absolute -bottom-4 left-3 z-20 h-9 w-11 -rotate-6" />

          <div className="relative z-10 space-y-4">
            {birthdayConfig.ourStory.mainParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="font-nepali text-base leading-relaxed text-[#4A343E] sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Class 10 -> Every Day -> Class 12 Milestone Scrapbook Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7">
          {birthdayConfig.ourStory.chapters.map((chapter, idx) => (
            <motion.article
              key={chapter.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`relative rounded-[22px] border bg-gradient-to-br p-6 shadow-[0_12px_30px_rgba(155,112,130,0.1)] transition-transform duration-200 hover:-translate-y-1 ${
                CHAPTER_TINTS[chapter.tint] || CHAPTER_TINTS.pink
              }`}
            >
              <span
                aria-hidden="true"
                className={`${
                  TAPE_CLASSES[idx % TAPE_CLASSES.length]
                } pointer-events-none absolute -top-2.5 left-1/2 h-4 w-20 -translate-x-1/2 rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.05)]`}
              />

              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#C95B7F]">
                  {chapter.badge}
                </span>
                <StickerBadge kind={chapter.sticker} className="h-10 w-10 shrink-0" />
              </div>

              <h3 className="font-display mt-3 text-2xl font-semibold text-[#4A343E]">
                {chapter.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5E4450] sm:text-[15px]">
                {chapter.text}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Floating Sweet Little Sticky Notes For Roshni */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {birthdayConfig.ourStory.floatingNotes.map((note, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`relative rounded-2xl border px-5 pt-7 pb-5 shadow-[0_8px_22px_rgba(164,114,134,0.08)] transition-transform duration-200 hover:rotate-0 hover:-translate-y-1 ${
                NOTE_STYLES[idx % NOTE_STYLES.length]
              }`}
            >
              <span
                aria-hidden="true"
                className={`${
                  TAPE_CLASSES[(idx + 1) % TAPE_CLASSES.length]
                } absolute -top-2.5 left-1/2 h-4 w-16 -translate-x-1/2 rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.05)]`}
              />
              <p className="font-nepali text-sm font-medium leading-relaxed text-[#4A343E]">
                {note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
