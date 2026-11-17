import React, { useEffect, useImperativeHandle, useRef, forwardRef } from 'react';

export interface ConfettiBurstOptions {
  originX?: number;
  originY?: number;
  count?: number;
}

export interface ConfettiCanvasHandle {
  burst: (options?: ConfettiBurstOptions) => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  vr: number;
  color: string;
  shape: 'heart' | 'petal' | 'ribbon';
  alpha: number;
  life: number;
  maxLife: number;
}

const SOFT_PASTEL_COLORS = [
  '#F8DCE5', // baby pink
  '#EA9CB7', // soft rose
  '#E9E0F5', // pastel lavender
  '#F9E5D5', // light peach
  '#DFECF8', // baby blue
  '#FCE5A6', // soft buttercream
];

export const ConfettiCanvas = forwardRef<ConfettiCanvasHandle>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);

  const drawHeart = (ctx: CanvasRenderingContext2D, size: number) => {
    const s = size * 0.52;
    ctx.beginPath();
    ctx.moveTo(0, s * 0.45);
    ctx.bezierCurveTo(s, -s * 0.4, s * 1.55, s * 0.75, 0, s * 1.5);
    ctx.bezierCurveTo(-s * 1.55, s * 0.75, -s, -s * 0.4, 0, s * 0.45);
    ctx.closePath();
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const tick = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    const next: Particle[] = [];
    for (const p of particlesRef.current) {
      p.life += 1;
      if (p.life >= p.maxLife) continue;

      p.vy += 0.11;
      p.vx *= 0.985;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vr;

      const fadeProgress = p.life / p.maxLife;
      p.alpha = fadeProgress > 0.68 ? Math.max(0, 1 - (fadeProgress - 0.68) / 0.32) : 0.92;

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;

      if (p.shape === 'heart') {
        drawHeart(ctx, p.size);
      } else if (p.shape === 'petal') {
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.62, p.size * 0.36, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.size * 0.45, -p.size * 0.2, p.size * 0.9, p.size * 0.4);
      }
      ctx.restore();

      next.push(p);
    }

    particlesRef.current = next;
    if (next.length > 0) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      rafRef.current = null;
    }
  };

  useImperativeHandle(ref, () => ({
    burst(options?: ConfettiBurstOptions) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      const originX = (options?.originX ?? 0.5) * window.innerWidth;
      const originY = (options?.originY ?? 0.48) * window.innerHeight;
      const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;
      const count = Math.min(options?.count ?? 52, isSmallScreen ? 48 : 80);
      const remainingCapacity = Math.max(0, 120 - particlesRef.current.length);

      const shapes: Particle['shape'][] = ['heart', 'petal', 'ribbon'];
      for (let i = 0; i < Math.min(count, remainingCapacity); i++) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.4;
        const speed = 3.2 + Math.random() * 7.5;
        particlesRef.current.push({
          x: originX + (Math.random() - 0.5) * 28,
          y: originY + (Math.random() - 0.5) * 18,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.8,
          size: 7 + Math.random() * 6.5,
          rotation: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.12,
          color: SOFT_PASTEL_COLORS[i % SOFT_PASTEL_COLORS.length],
          shape: shapes[i % shapes.length],
          alpha: 0.92,
          life: 0,
          maxLife: 95 + Math.floor(Math.random() * 40),
        });
      }

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(tick);
      }
    },
  }));

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      aria-hidden="true"
    />
  );
});

ConfettiCanvas.displayName = 'ConfettiCanvas';
