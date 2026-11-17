import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, Play, X } from 'lucide-react';
import { birthdayConfig, type VideoMemory } from '../config/birthdayConfig';
import { SmartImage } from './SmartImage';
import {
  BowSticker,
  ButterflySticker,
  FlowerSticker,
  HeartSticker,
  StarSticker,
} from './Stickers';

export const VideoMemoriesSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoMemory | null>(null);
  const [videoExists, setVideoExists] = useState<boolean>(false);
  const [checking, setChecking] = useState<boolean>(false);

  const openVideo = async (video: VideoMemory) => {
    setSelectedVideo(video);
    const targetSrc = video.externalUrl?.trim() || video.src;

    if (video.externalUrl?.trim()) {
      setVideoExists(true);
      setChecking(false);
      return;
    }

    setChecking(true);
    try {
      const res = await fetch(targetSrc, { method: 'HEAD' });
      const contentType = res.headers.get('content-type') || '';
      setVideoExists(res.ok && contentType.startsWith('video/'));
    } catch {
      setVideoExists(false);
    } finally {
      setChecking(false);
    }
  };

  return (
    <section
      id="videos"
      className="relative bg-gradient-to-b from-[#FFF8F0] via-[#DFECF8]/35 to-[#FFF8F0] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center text-center">
          <ButterflySticker
            variant="peach"
            className="animate-butterfly-curve-right pointer-events-none hidden sm:block absolute -top-2 right-12 h-11 w-11"
          />
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#8E6575]">
            <FlowerSticker className="animate-flower-sway h-6 w-6" />
            <span>Moving Keepsakes</span>
            <StarSticker className="animate-twinkle h-6 w-6" />
          </div>
          <h2 className="font-display mt-2.5 text-balance text-3xl font-semibold text-[#4A343E] sm:text-4xl md:text-5xl">
            {birthdayConfig.videos.sectionTitle}
          </h2>
          <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-[#6E535F] sm:text-base">
            {birthdayConfig.videos.sectionSubtitle}
          </p>
        </div>

        {/* Pure Rounded Scrapbook Video Frames with Prominent Corner Stickers */}
        <div className="mt-11 grid grid-cols-1 gap-7 md:grid-cols-3 lg:gap-8">
          {birthdayConfig.videos.items.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="group relative rounded-[22px] border border-[#D4DFEC] bg-[#FFFEFC] p-3.5 shadow-[0_14px_34px_rgba(140,165,190,0.14)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span
                aria-hidden="true"
                className={`${
                  idx % 2 === 0 ? 'washi-blue' : 'washi-pink'
                } pointer-events-none absolute -top-2.5 left-1/2 z-20 h-4 w-20 -translate-x-1/2 rounded-sm`}
              />

              {idx === 0 && (
                <ButterflySticker
                  variant="blue"
                  className="animate-butterfly-curve-left pointer-events-none absolute -top-5 -left-2 z-20 h-12 w-12 -rotate-6"
                />
              )}
              {idx === 1 && (
                <BowSticker
                  variant="pink"
                  className="animate-bow-wiggle pointer-events-none absolute -top-4 right-1 z-20 h-10 w-12 rotate-6"
                />
              )}
              {idx === 2 && (
                <HeartSticker className="animate-heart-bounce pointer-events-none absolute -bottom-3 -right-2 z-20 h-10 w-10 rotate-12" />
              )}

              <button
                type="button"
                onClick={() => openVideo(video)}
                aria-label={`Play ${video.alt}`}
                className="relative block aspect-video w-full overflow-hidden rounded-2xl bg-[#E9E0F5]/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F]"
              >
                <SmartImage
                  src={video.posterSrc}
                  alt={video.alt}
                  fallbackPalette="blue"
                  fallbackMotif="star"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#3B2630]/20 transition-colors group-hover:bg-[#3B2630]/10" />

                <span className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#FFFEFC] bg-[#C95B7F]/90 text-white shadow-[0_8px_24px_rgba(201,91,127,0.3)] transition-transform duration-200 group-hover:scale-110">
                  <Play className="h-5 w-5 translate-x-[1px] fill-current" />
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Caption-Free Responsive Mobile-Safe Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#3A242E]/75 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={selectedVideo.alt}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[22px] border border-[#EAD0DA] bg-[#FFFEFC] p-4 shadow-2xl sm:p-5"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <StarSticker className="h-6 w-6" />
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  aria-label="Close video player"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8DCE5]/60 text-[#4A343E] hover:bg-[#F8DCE5]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#3A242E]">
                {checking ? (
                  <div className="flex h-full items-center justify-center text-sm text-white/85">
                    Loading video...
                  </div>
                ) : videoExists ? (
                  <video
                    src={selectedVideo.externalUrl?.trim() || selectedVideo.src}
                    poster={selectedVideo.posterSrc}
                    controls
                    autoPlay
                    playsInline
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden p-5 text-center">
                    <img
                      src={selectedVideo.posterSrc}
                      alt={selectedVideo.alt}
                      className="absolute inset-0 h-full w-full object-cover opacity-35 blur-[2px]"
                    />
                    <div className="relative z-10 max-w-md rounded-2xl border border-white/25 bg-[#3A242E]/75 p-5 text-white backdrop-blur-md">
                      <Film className="mx-auto mb-2 h-7 w-7 text-[#F8DCE5]" />
                      <p className="text-xs leading-relaxed text-white/90">
                        Place your clip at{' '}
                        <code className="rounded bg-white/15 px-1.5 py-0.5 text-[#F8DCE5]">
                          public{selectedVideo.src}
                        </code>{' '}
                        or set <code className="rounded bg-white/15 px-1.5 py-0.5">externalUrl</code>{' '}
                        in <code className="rounded bg-white/15 px-1.5 py-0.5">birthdayConfig.ts</code>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
