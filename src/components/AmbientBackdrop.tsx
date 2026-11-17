import React, { useEffect, useRef, useState } from 'react';
import {
  ButterflySticker,
  CloudSticker,
  DaisySticker,
  FlowerSticker,
  StarSticker,
} from './Stickers';

interface FloatingHeartDot {
  id: number;
  x: number;
  y: number;
  scale: number;
}

export const AmbientBackdrop: React.FC = () => {
  const [cursorHearts, setCursorHearts] = useState<FloatingHeartDot[]>([]);
  const lastEmitRef = useRef<number>(0);
  const idCounterRef = useRef<number>(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const isFinePointer = window.matchMedia('(pointer: fine)').matches;

    const spawnHeart = (x: number, y: number, count = 1) => {
      const batch: FloatingHeartDot[] = [];
      for (let i = 0; i < count; i++) {
        idCounterRef.current += 1;
        batch.push({
          id: idCounterRef.current,
          x: x + (Math.random() - 0.5) * 16,
          y: y + (Math.random() - 0.5) * 12,
          scale: 0.78 + Math.random() * 0.42,
        });
      }
      setCursorHearts((prev) => [...prev.slice(-8), ...batch]);

      const ids = new Set(batch.map((b) => b.id));
      window.setTimeout(() => {
        setCursorHearts((prev) => prev.filter((item) => !ids.has(item.id)));
      }, 950);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isFinePointer) return;
      const now = performance.now();
      if (now - lastEmitRef.current < 160) return;
      lastEmitRef.current = now;
      spawnHeart(e.clientX, e.clientY, 1);
    };

    const handleClick = (e: MouseEvent) => {
      spawnHeart(e.clientX, e.clientY, 2);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* Gentle pastel sky washes & free-flying colorful butterflies in safe margins */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full bg-[#F8DCE5]/45 blur-3xl" />
        <div className="absolute top-1/3 -right-28 h-96 w-96 rounded-full bg-[#DFECF8]/45 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#E9E0F5]/40 blur-3xl" />

        <StarSticker className="animate-twinkle hidden sm:block absolute top-24 left-[4%] h-7 w-7 opacity-85" />
        <DaisySticker className="animate-flower-sway hidden md:block absolute top-[46%] right-[3%] h-9 w-9 opacity-85" />
        <FlowerSticker className="animate-flower-sway hidden xl:block absolute top-[72%] right-[4%] h-9 w-9 opacity-85" />
        <CloudSticker className="animate-float-sway hidden lg:block absolute top-28 right-[5%] w-20 opacity-85" />

        {/* Colorful Flying Butterflies across varied curved paths */}
        <ButterflySticker
          variant="pink"
          className="animate-butterfly-curve-right hidden sm:block absolute top-[18%] left-[2.5%] h-11 w-11 opacity-90"
        />
        <ButterflySticker
          variant="lavender"
          className="animate-butterfly-curve-left hidden md:block absolute top-[32%] right-[2.5%] h-12 w-12 opacity-90"
        />
        <ButterflySticker
          variant="peach"
          className="animate-butterfly-glide hidden lg:block absolute top-[62%] left-[2%] h-11 w-11 opacity-90"
        />
        <ButterflySticker
          variant="blue"
          className="animate-butterfly-curve-right hidden sm:block absolute bottom-24 left-[3%] h-12 w-12 opacity-90"
        />
        <ButterflySticker
          variant="pink"
          className="animate-butterfly-curve-left hidden xl:block absolute bottom-28 right-[3.5%] h-10 w-10 opacity-85"
        />
      </div>

      {/* Gentle cursor & tap small pink hearts */}
      <div
        className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
        aria-hidden="true"
      >
        {cursorHearts.map((dot) => (
          <span
            key={dot.id}
            style={{
              left: dot.x,
              top: dot.y,
              transform: `translate(-50%, -50%) scale(${dot.scale})`,
              animation: 'float-gentle 0.9s ease-out forwards',
            }}
            className="absolute text-[#FF6B9D] opacity-85 transition-opacity duration-700"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
        ))}
      </div>
    </>
  );
};
