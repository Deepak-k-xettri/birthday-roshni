import React from 'react';
import { motion } from 'motion/react';
import { birthdayConfig } from '../config/birthdayConfig';
import {
  BowSticker,
  ButterflySticker,
  DaisySticker,
  EnvelopeSticker,
  FlowerSticker,
  HeartSticker,
  StarSticker,
} from './Stickers';

const NOTE_COLORS = [
  'bg-gradient-to-br from-[#F8DCE5]/65 to-[#FFF8F0] border-[#EBC6D3]',
  'bg-gradient-to-br from-[#DFECF8]/75 to-[#FFFEFC] border-[#C8DDF0]',
  'bg-gradient-to-br from-[#E9E0F5]/65 to-[#FFFEFC] border-[#D6C7EB]',
  'bg-gradient-to-br from-[#F9E5D5]/70 to-[#FFF8F0] border-[#EBD0BC]',
];

const TAPE_CLASSES = ['washi-blue', 'washi-pink', 'washi-peach', 'washi-lavender'];

export const PoetrySection: React.FC = () => {
  const [featuredPoem, ...otherPoems] = birthdayConfig.poems.items;

  return (
    <section
      id="poems"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#F8DCE5]/30 to-[#FFF8F0] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center text-center">
          <ButterflySticker
            variant="pink"
            className="animate-butterfly-curve-right pointer-events-none hidden sm:block absolute -top-2 left-8 h-11 w-11"
          />
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#8E6575]">
            <StarSticker className="animate-twinkle h-6 w-6" />
            <span>Nepali &amp; English Verses</span>
            <ButterflySticker variant="lavender" className="animate-butterfly-curve-left h-8 w-8" />
          </div>
          <h2 className="font-display mt-2.5 text-balance text-3xl font-semibold text-[#4A343E] sm:text-4xl md:text-5xl">
            {birthdayConfig.poems.sectionTitle}
          </h2>
          <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-[#6E535F] sm:text-base">
            {birthdayConfig.poems.sectionSubtitle}
          </p>
        </div>

        {/* Featured Nepali Scrapbook Poem Card */}
        {featuredPoem && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="scrapbook-paper relative mx-auto mt-11 max-w-3xl rounded-[26px] border border-[#EAD0DA] p-6 text-center shadow-[0_18px_48px_rgba(164,114,134,0.13)] ring-1 ring-white/80 sm:p-11"
          >
            <div className="doodle-border pointer-events-none absolute inset-2.5 rounded-[20px] sm:inset-3.5" />
            <span
              aria-hidden="true"
              className="washi-pink absolute -top-2.5 left-1/2 z-20 h-5 w-24 -translate-x-1/2 -rotate-1 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
            />
            <ButterflySticker
              variant="blue"
              className="animate-butterfly-curve-left pointer-events-none absolute -top-5 -left-1 z-20 h-13 w-13 -rotate-6 sm:left-4 sm:h-15 sm:w-15"
            />
            <FlowerSticker className="animate-flower-sway pointer-events-none absolute -top-5 right-1 z-20 h-11 w-11 rotate-6 sm:right-5 sm:h-12 sm:w-12" />
            <DaisySticker className="animate-flower-sway pointer-events-none absolute -bottom-4 right-2 z-20 h-11 w-11 sm:right-6" />
            <HeartSticker className="animate-heart-bounce pointer-events-none absolute -bottom-4 left-2 z-20 h-10 w-10 -rotate-12 sm:left-6" />

            <div className="relative z-10">
              <p className="font-nepali text-xs font-semibold tracking-wide text-[#B64A6E]">
                01 · {featuredPoem.title}
              </p>
              {featuredPoem.nepaliSubtitle && (
                <p className="mt-0.5 text-xs text-[#8E6575]">{featuredPoem.nepaliSubtitle}</p>
              )}

              <blockquote className="font-nepali mt-5 space-y-2 text-lg font-medium leading-[1.85] text-[#4A343E] sm:text-2xl">
                {featuredPoem.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </blockquote>

              <p className="mt-6 text-xs font-medium text-[#7D616E]">— {featuredPoem.footnote}</p>
            </div>
          </motion.div>
        )}

        {/* Secondary Nepali & English Stanza Cards */}
        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-8">
          {otherPoems.map((poem, idx) => (
            <motion.article
              key={poem.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`relative rounded-[24px] border p-6 shadow-[0_12px_32px_rgba(155,112,130,0.09)] sm:p-8 ${
                idx % 2 === 0
                  ? 'border-[#D7C9EB] bg-gradient-to-br from-[#E9E0F5]/65 via-[#FFFEFC] to-[#F8DCE5]/25'
                  : 'border-[#C9DCF0] bg-gradient-to-br from-[#DFECF8]/70 via-[#FFFEFC] to-[#FFF8F0]'
              }`}
            >
              {idx % 2 === 0 ? (
                <BowSticker
                  variant="red"
                  className="animate-bow-wiggle pointer-events-none absolute -top-4 right-3 h-11 w-13 rotate-6"
                />
              ) : (
                <EnvelopeSticker className="animate-float-gentle pointer-events-none absolute -top-4 right-3 h-10 w-12 rotate-6" />
              )}

              <div className="flex items-center justify-between gap-2 pr-12">
                <span className="font-nepali text-xs font-semibold text-[#7D616E]">
                  0{idx + 2} · {poem.title}
                </span>
              </div>

              <blockquote
                className={`mt-4 space-y-1.5 leading-relaxed text-[#4A343E] ${
                  poem.isNepali
                    ? 'font-nepali text-base font-medium leading-[1.85] sm:text-lg'
                    : 'font-display text-xl italic sm:text-2xl'
                }`}
              >
                {poem.lines.map((line, lineIdx) => (
                  <p key={lineIdx}>{line}</p>
                ))}
              </blockquote>

              <div className="mt-5 flex items-center justify-between border-t border-[#E6DCE4] pt-3">
                <p className="font-nepali text-xs text-[#7D616E]">{poem.footnote}</p>
                {idx % 2 === 0 ? (
                  <FlowerSticker className="h-7 w-7 shrink-0" />
                ) : (
                  <StarSticker className="h-7 w-7 shrink-0" />
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Teenage Scrapbook Taped Sticky Notes */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {birthdayConfig.poems.shortLoveNotes.map((note, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`relative rounded-2xl border px-5 pt-7 pb-5 shadow-[0_8px_22px_rgba(164,114,134,0.08)] transition-transform duration-200 hover:-translate-y-1 ${
                NOTE_COLORS[idx % NOTE_COLORS.length]
              }`}
            >
              <span
                aria-hidden="true"
                className={`${
                  TAPE_CLASSES[idx % TAPE_CLASSES.length]
                } absolute -top-2.5 left-1/2 h-4 w-16 -translate-x-1/2 -rotate-2 rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.05)]`}
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
