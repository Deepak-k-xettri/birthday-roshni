import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight, Heart, X } from 'lucide-react';
import { birthdayConfig, type PhotoMemory } from '../config/birthdayConfig';
import { SmartImage } from './SmartImage';
import {
  BowSticker,
  ButterflySticker,
  CakeSticker,
  DaisySticker,
  DoodleSticker,
  FlowerSticker,
  GiftBoxSticker,
  HeartSticker,
  RibbonSticker,
  StarSticker,
  TeddySticker,
} from './Stickers';

type GalleryCategory = 'All' | PhotoMemory['category'];

const CATEGORIES: GalleryCategory[] = ['All', 'Moments', 'Sunsets', 'Celebrations'];

const TAPE_MAP: Record<PhotoMemory['tapeStyle'], string> = {
  pink: 'washi-pink',
  blue: 'washi-blue',
  lavender: 'washi-lavender',
  peach: 'washi-peach',
};

const BACKING_PAPER_STYLES = [
  'bg-[#F8DCE5]/85 border-[#E8C1CF] -rotate-2',
  'bg-[#E9E0F5]/85 border-[#D2C2E8] rotate-2',
  'bg-[#F9E5D5]/85 border-[#E9CBB4] -rotate-2',
  'bg-[#DFECF8]/85 border-[#C2D8EE] rotate-2',
];

const renderFrameDecorations = (index: number) => {
  switch (index) {
    case 0:
      return (
        <>
          <BowSticker
            variant="red"
            className="animate-bow-wiggle pointer-events-none absolute -top-5 right-0 z-20 h-13 w-15 rotate-12"
          />
          <HeartSticker className="animate-heart-bounce pointer-events-none absolute -bottom-4 -left-3 z-20 h-11 w-11 -rotate-12" />
        </>
      );
    case 1:
      return (
        <>
          <ButterflySticker
            variant="pink"
            className="animate-butterfly-curve-left pointer-events-none absolute -top-5 -left-3 z-20 h-13 w-13 -rotate-6"
          />
          <FlowerSticker className="animate-flower-sway pointer-events-none absolute -bottom-4 right-10 z-20 h-10 w-10 rotate-12" />
        </>
      );
    case 2:
      return (
        <>
          <StarSticker className="animate-twinkle pointer-events-none absolute -top-4 right-1 z-20 h-11 w-11" />
          <RibbonSticker
            variant="pink"
            className="animate-float-gentle pointer-events-none absolute -bottom-4 -left-3 z-20 h-11 w-13 -rotate-6"
          />
        </>
      );
    case 3:
      return (
        <>
          <CakeSticker className="animate-float-gentle pointer-events-none absolute -top-5 right-0 z-20 h-14 w-14 rotate-6" />
          <ButterflySticker
            variant="lavender"
            className="animate-butterfly-curve-right pointer-events-none absolute -bottom-4 -left-3 z-20 h-12 w-12 -rotate-12"
          />
        </>
      );
    case 4:
      return (
        <>
          <DaisySticker className="animate-flower-sway pointer-events-none absolute -top-5 -left-3 z-20 h-12 w-12 -rotate-12" />
          <DoodleSticker className="animate-float-sway pointer-events-none absolute -bottom-4 right-10 z-20 h-11 w-11 rotate-6" />
        </>
      );
    case 5:
      return (
        <>
          <TeddySticker className="animate-teddy-idle pointer-events-none absolute -top-5 -left-3 z-20 h-14 w-14 -rotate-6" />
          <HeartSticker className="animate-heart-bounce pointer-events-none absolute -top-4 right-1 z-20 h-10 w-10 rotate-12" />
        </>
      );
    case 6:
      return (
        <>
          <ButterflySticker
            variant="blue"
            className="animate-butterfly-curve-left pointer-events-none absolute -top-5 right-0 z-20 h-13 w-13 rotate-6"
          />
          <StarSticker className="animate-twinkle pointer-events-none absolute -bottom-4 -left-3 z-20 h-10 w-10" />
        </>
      );
    default:
      return null;
  }
};

export const PhotoGallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const butterflyShiftLeft = useTransform(scrollYProgress, [0, 1], [24, -28]);
  const butterflyShiftRight = useTransform(scrollYProgress, [0, 1], [-20, 26]);

  const filteredPhotos =
    selectedCategory === 'All'
      ? birthdayConfig.gallery.photos
      : birthdayConfig.gallery.photos.filter((p) => p.category === selectedCategory);

  const activePhoto = activeIndex !== null ? filteredPhotos[activeIndex] ?? null : null;

  const openPhoto = (index: number, trigger: HTMLElement) => {
    lastFocusedElementRef.current = trigger;
    setActiveIndex(index);
  };

  const closePhoto = () => setActiveIndex(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      lastFocusedElementRef.current?.focus();
    };
  }, [activeIndex !== null]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePhoto();
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredPhotos.length
        );
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        );
      }
      if (e.key === 'Tab') {
        const dialog = document.querySelector<HTMLElement>('[aria-label="Photo lightbox"]');
        const focusable = dialog?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, filteredPhotos.length]);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section ref={sectionRef} id="gallery" className="relative overflow-hidden py-16 sm:py-24">
      {/* Subtle scroll-linked flying butterflies floating around the gallery */}
      <motion.div
        style={{ y: butterflyShiftLeft }}
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-28 left-4 z-10 lg:left-10"
      >
        <ButterflySticker variant="pink" className="animate-butterfly-curve-right h-14 w-14" />
      </motion.div>
      <motion.div
        style={{ y: butterflyShiftRight }}
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-36 right-4 z-10 lg:right-10"
      >
        <ButterflySticker variant="blue" className="animate-butterfly-curve-left h-14 w-14" />
      </motion.div>
      <motion.div
        style={{ y: butterflyShiftLeft }}
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute bottom-28 right-8 z-10"
      >
        <ButterflySticker variant="peach" className="animate-butterfly-glide h-13 w-13" />
      </motion.div>

      {/* Keep the scrapbook stickers from the removed keepsake cards in the gallery. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block overflow-hidden">
        <BowSticker variant="pink" className="animate-bow-wiggle absolute top-[28rem] left-[3%] h-12 w-14 -rotate-12" />
        <FlowerSticker className="animate-flower-sway absolute top-[31rem] right-[4%] h-11 w-11 rotate-6" />
        <GiftBoxSticker className="animate-float-sway absolute top-[48rem] right-[2%] h-13 w-13 rotate-6" />
        <ButterflySticker variant="peach" className="animate-butterfly-curve-right absolute top-[51rem] left-[2%] h-12 w-12 -rotate-6" />
        <HeartSticker className="animate-heart-bounce absolute bottom-36 left-[4%] h-12 w-12 -rotate-12" />
        <RibbonSticker variant="lavender" className="animate-float-gentle absolute bottom-24 right-[4%] h-10 w-12 rotate-6" />
        <ButterflySticker variant="peach" className="animate-butterfly-curve-right absolute top-[36rem] right-[8%] h-11 w-11" />
        <FlowerSticker className="animate-flower-sway absolute top-[55rem] left-[6%] h-6 w-6" />
        <StarSticker className="animate-twinkle absolute bottom-48 right-[7%] h-6 w-6" />
        <BowSticker variant="pink" className="animate-bow-wiggle absolute bottom-28 left-[8%] h-10 w-12 rotate-6" />
        <HeartSticker className="animate-heart-bounce absolute top-[60rem] right-[6%] h-10 w-10" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#8E6575]">
            <StarSticker className="animate-twinkle h-6 w-6" />
            <span>Polaroid Scrapbook · {birthdayConfig.gallery.photos.length} Photographs</span>
            <DaisySticker className="animate-flower-sway h-6 w-6" />
          </div>

          <div className="relative mt-2.5 inline-flex items-center justify-center">
            <ButterflySticker
              variant="lavender"
              className="animate-butterfly-curve-left pointer-events-none hidden sm:block absolute -top-4 -left-14 h-11 w-11"
            />
            <h2 className="font-display text-balance text-3xl font-semibold text-[#4A343E] sm:text-4xl md:text-5xl">
              {birthdayConfig.gallery.sectionTitle}
            </h2>
            <HeartSticker className="animate-heart-bounce pointer-events-none hidden sm:block absolute -top-3 -right-12 h-9 w-9 rotate-12" />
          </div>

          <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-[#6E535F] sm:text-base">
            {birthdayConfig.gallery.sectionSubtitle}
          </p>

          {/* Category filter buttons */}
          <div
            role="group"
            aria-label="Filter photo memories"
            className="mt-6 flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-[#EAD0DA] bg-[#FFFEFC]/90 p-1.5 shadow-[0_6px_20px_rgba(164,114,134,0.08)] backdrop-blur-sm"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setSelectedCategory(category);
                    setActiveIndex(null);
                  }}
                  className={`min-h-[40px] rounded-full px-4 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#C95B7F] text-white shadow-sm'
                      : 'text-[#6E535F] hover:text-[#4A343E]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Romantic Layered Scrapbook & Polaroid Photo Grid (Strictly Zero Captions) */}
        <div className="mt-14 grid grid-cols-1 gap-10 px-2.5 sm:grid-cols-2 sm:px-2 lg:grid-cols-3 lg:gap-11">
          {filteredPhotos.map((photo, index) => {
            const isPolaroid = photo.frameStyle === 'polaroid';
            const isScrapbook = photo.frameStyle === 'scrapbook';
            const isLiked = !!likedIds[photo.id];
            const tapeClass = TAPE_MAP[photo.tapeStyle] || 'washi-pink';
            const backingClass = BACKING_PAPER_STYLES[index % BACKING_PAPER_STYLES.length];

            return (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.05 }}
                className="group relative"
              >
                {/* Layered Scrapbook Paper Card Backing */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 rounded-2xl border shadow-sm transition-transform duration-300 group-hover:rotate-0 ${backingClass}`}
                />

                <button
                  type="button"
                  onClick={(event) => openPhoto(index, event.currentTarget)}
                  aria-label={`Open ${photo.alt}`}
                  style={{
                    transform:
                      photo.tiltDeg !== 0 ? `rotate(${photo.tiltDeg}deg)` : undefined,
                  }}
                  className={`relative block w-full text-left transition-all duration-300 group-hover:rotate-0 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_44px_rgba(164,114,134,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F] ${
                    isPolaroid
                      ? 'rounded-xl border border-[#EAD4DD] bg-[#FFFEFC] p-3.5 pb-10 shadow-[0_14px_34px_rgba(155,112,130,0.14)]'
                      : isScrapbook
                      ? 'rounded-2xl border border-[#D8CCE8] bg-[#FFF8F0] p-3.5 pb-9 shadow-[0_14px_32px_rgba(155,112,130,0.13)]'
                      : 'rounded-2xl border border-[#C9DCF0] bg-[#FFFEFC] p-3 pb-8 shadow-[0_14px_32px_rgba(140,165,190,0.15)]'
                  }`}
                >
                  {/* Washi Tape */}
                  <span
                    aria-hidden="true"
                    className={`${tapeClass} pointer-events-none absolute -top-2.5 left-1/2 z-20 h-4.5 w-22 -translate-x-1/2 -rotate-1 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.08)]`}
                  />

                  {/* Vibrant, Prominent Pinterest Scrapbook Decorations */}
                  {renderFrameDecorations(index)}

                  <div
                    className={`relative w-full overflow-hidden bg-[#F8DCE5]/35 ring-1 ring-black/5 ${
                      isPolaroid ? 'aspect-[4/3] rounded-md' : 'aspect-[4/3] rounded-xl'
                    }`}
                  >
                    <SmartImage
                      src={photo.src}
                      fallbackSrc={photo.fallbackSrc}
                      alt={photo.alt}
                      fallbackPalette={photo.fallbackPalette}
                      fallbackMotif={photo.fallbackMotif}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </button>

                  {/* Minimal Heart Reaction Button in Polaroid Margin */}
                  <button
                    type="button"
                    onClick={(e) => toggleLike(photo.id, e)}
                    aria-label={isLiked ? 'Unlike photograph' : 'Heart this photograph'}
                    aria-pressed={isLiked}
                    className="absolute right-2.5 bottom-1.5 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#F8DCE5]/45"
                  >
                    <Heart
                      className={`h-4.5 w-4.5 transition-transform ${
                        isLiked
                          ? 'scale-110 fill-[#C95B7F] text-[#C95B7F]'
                          : 'text-[#C6A2B0]'
                      }`}
                    />
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Caption-Free Fullscreen Lightbox Viewer */}
      <AnimatePresence>
        {activePhoto && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhoto}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#3A242E]/75 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[22px] border border-[#EAD0DA] bg-[#FFFEFC] p-4 shadow-2xl sm:p-5"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="tabular-nums text-xs font-medium text-[#7D616E]">
                  {activeIndex + 1} / {filteredPhotos.length}
                </span>
                <button
                  type="button"
                  ref={closeButtonRef}
                  onClick={closePhoto}
                  aria-label="Close photo lightbox"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8DCE5]/55 text-[#4A343E] transition-colors hover:bg-[#F8DCE5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#FFF8F0]">
                <SmartImage
                  src={activePhoto.src}
                  fallbackSrc={activePhoto.fallbackSrc}
                  alt={activePhoto.alt}
                  fallbackPalette={activePhoto.fallbackPalette}
                  fallbackMotif={activePhoto.fallbackMotif}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={(e) => toggleLike(activePhoto.id, e)}
                  aria-label={likedIds[activePhoto.id] ? 'Unlike photograph' : 'Heart photograph'}
                  aria-pressed={!!likedIds[activePhoto.id]}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EAD0DA] bg-[#FFFEFC] hover:bg-[#F8DCE5]/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F]"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      likedIds[activePhoto.id]
                        ? 'fill-[#C95B7F] text-[#C95B7F]'
                        : 'text-[#8E6575]'
                    }`}
                  />
                </button>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        (activeIndex - 1 + filteredPhotos.length) % filteredPhotos.length
                      )
                    }
                    aria-label="Previous photo"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EAD0DA] bg-[#FFFEFC] text-[#4A343E] hover:bg-[#F8DCE5]/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F]"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((activeIndex + 1) % filteredPhotos.length)
                    }
                    aria-label="Next photo"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EAD0DA] bg-[#FFFEFC] text-[#4A343E] hover:bg-[#F8DCE5]/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
