import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { Heart } from 'lucide-react';
import { birthdayConfig } from './config/birthdayConfig';
import { ConfettiCanvas, type ConfettiCanvasHandle } from './components/ConfettiCanvas';
import { AmbientBackdrop } from './components/AmbientBackdrop';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { HeroSection } from './components/HeroSection';
import { OurStorySection } from './components/OurStorySection';
import { LoveLetterSection } from './components/LoveLetterSection';
import { PoetrySection } from './components/PoetrySection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { EighteenReasonsSection } from './components/EighteenReasonsSection';
import { SurpriseBoxesSection } from './components/SurpriseBoxesSection';
import { CelebrationSection } from './components/CelebrationSection';
import { FinalWishSection } from './components/FinalWishSection';
import { MusicPlayer } from './components/MusicPlayer';
import { LittleLoveModal } from './components/LittleLoveModal';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [loveMessage, setLoveMessage] = useState<string | null>(null);
  const loveIndexRef = useRef<number>(0);
  const confettiRef = useRef<ConfettiCanvasHandle | null>(null);

  useEffect(() => {
    const syncVisibility = () => {
      document.documentElement.classList.toggle('page-hidden', document.hidden);
    };
    syncVisibility();
    document.addEventListener('visibilitychange', syncVisibility);
    return () => {
      document.removeEventListener('visibilitychange', syncVisibility);
      document.documentElement.classList.remove('page-hidden');
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main > section, footer');
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('section-motion-paused', !entry.isIntersecting);
        });
      },
      { rootMargin: '160px 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [hasEntered]);

  const triggerConfetti = (originY = 0.48, count = 55) => {
    confettiRef.current?.burst({ originX: 0.5, originY, count });
  };

  const handleSendLove = () => {
    const notes = birthdayConfig.sweetLoveNotes;
    const nextNote = notes[loveIndexRef.current % notes.length];
    loveIndexRef.current += 1;
    setLoveMessage(nextNote);
    confettiRef.current?.burst({ originX: 0.85, originY: 0.25, count: 22 });
  };

  const handleReplay = () => {
    setLoveMessage(null);
    setHasEntered(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#FFF8F0] text-[#4A343E]">
      <ConfettiCanvas ref={confettiRef} />

      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <OpeningEnvelope
            key="opening"
            onTriggerConfetti={() => triggerConfetti(0.45, 58)}
            onEnterCelebration={() => {
              setHasEntered(true);
              window.scrollTo({ top: 0 });
            }}
          />
        ) : (
          <motion.div
            key="main-celebration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <AmbientBackdrop />

            {/* Clean 3-Zone Top Bar */}
            <header className="birthday-header sticky top-0 z-30 border-b border-[#EAD0DA]/75 bg-[#FFF8F0]/90 backdrop-blur-md">
              <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:gap-8 sm:px-6 lg:px-8">
                <a
                  href="#hero"
                  className="font-display text-xl font-bold tracking-tight text-[#4A343E] whitespace-nowrap shrink-0"
                >
                  {birthdayConfig.brandTitle}
                </a>

                <nav
                  aria-label="Birthday sections"
                  className="hidden md:flex items-center gap-6 text-sm font-medium text-[#6E535F]"
                >
                  <a
                    href="#our-story"
                    className="transition-colors hover:text-[#C95B7F] whitespace-nowrap shrink-0"
                  >
                    Our Story
                  </a>
                  <a
                    href="#love-letter"
                    className="transition-colors hover:text-[#C95B7F] whitespace-nowrap shrink-0"
                  >
                    Letter
                  </a>
                  <a
                    href="#poems"
                    className="transition-colors hover:text-[#C95B7F] whitespace-nowrap shrink-0"
                  >
                    Poems
                  </a>
                  <a
                    href="#gallery"
                    className="transition-colors hover:text-[#C95B7F] whitespace-nowrap shrink-0"
                  >
                    Gallery
                  </a>
                  <a
                    href="#reasons"
                    className="transition-colors hover:text-[#C95B7F] whitespace-nowrap shrink-0"
                  >
                    18 Reasons
                  </a>
                  <a
                    href="#celebrate"
                    className="transition-colors hover:text-[#C95B7F] whitespace-nowrap shrink-0"
                  >
                    Celebrate
                  </a>
                </nav>

                <div className="flex items-center shrink-0">
                  <button
                    type="button"
                    onClick={handleSendLove}
                    className="inline-flex min-h-[44px] sm:min-h-[40px] items-center gap-1.5 rounded-full bg-[#C95B7F] px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#B64A6E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F] whitespace-nowrap shrink-0 sm:px-4"
                  >
                    <Heart className="h-3.5 w-3.5 fill-current" />
                    Send a Little Love ♡
                  </button>
                </div>
              </div>
            </header>

            <main className="relative z-10">
              <HeroSection onCelebrateClick={() => triggerConfetti(0.35, 48)} />
              <OurStorySection />
              <LoveLetterSection />
              <PoetrySection />
              <PhotoGallerySection />
              <EighteenReasonsSection />
              <SurpriseBoxesSection
                onUnwrapSurprise={() => triggerConfetti(0.5, 34)}
              />
              <CelebrationSection
                onCelebrateBurst={() => {
                  triggerConfetti(0.45, 72);
                  window.setTimeout(() => triggerConfetti(0.32, 48), 280);
                }}
              />
            </main>

            <FinalWishSection onReplay={handleReplay} />
            <LittleLoveModal
              message={loveMessage}
              onClose={() => setLoveMessage(null)}
              onAnother={handleSendLove}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Music Player mounted at root so playback starts on load & never restarts on navigation */}
      <MusicPlayer />
      </div>
    </MotionConfig>
  );
}
