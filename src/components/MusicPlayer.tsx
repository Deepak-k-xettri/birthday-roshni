import React, { useEffect, useRef, useState } from 'react';
import { Music, Pause, Play } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

export const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [awaitingGesture, setAwaitingGesture] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setAwaitingGesture(false);
    };
    const handlePause = () => setIsPlaying(false);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    const tryAutoplay = () => {
      void audio.play().catch(() => setAwaitingGesture(true));
    };
    const handleFirstGesture = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('.music-player-control')) return;
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
      void audio.play().catch(() => setAwaitingGesture(true));
    };

    tryAutoplay();
    window.addEventListener('pointerdown', handleFirstGesture, { once: true });
    window.addEventListener('keydown', handleFirstGesture, { once: true });

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play().catch(() => setAwaitingGesture(true));
    } else {
      audio.pause();
    }
  };

  return (
    <div className="music-player-control fixed bottom-4 left-4 z-50 pb-safe">
      <audio ref={audioRef} src={birthdayConfig.music.audioSrc} loop preload="auto" />
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        aria-pressed={isPlaying}
        className="group flex min-h-[44px] items-center gap-2.5 rounded-full border border-[#EAD0DA] bg-[#FFFEFC]/95 px-3.5 py-2 text-xs font-semibold text-[#4A343E] shadow-[0_10px_26px_rgba(164,114,134,0.16)] backdrop-blur-md transition-transform duration-150 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F]"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F8DCE5] text-[#C95B7F]">
          {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 translate-x-[0.5px]" />}
        </span>
        <span className="whitespace-nowrap">
          {isPlaying
            ? `${birthdayConfig.music.trackTitle} · Playing`
            : awaitingGesture
              ? 'Tap for Music'
              : 'Play Birthday Music'}
        </span>
        <Music className="h-3.5 w-3.5 text-[#C95B7F] opacity-80" />
      </button>
    </div>
  );
};
