import React, { useEffect, useRef, useState } from 'react';
import { Music, Pause, Play } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

export const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [awaitingGesture, setAwaitingGesture] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlaying = () => {
      setIsPlaying(true);
      setIsBuffering(false);
      setAwaitingGesture(false);
    };
    const handlePause = () => {
      setIsPlaying(false);
      setIsBuffering(false);
    };
    const handleWaiting = () => {
      setIsPlaying(false);
      setIsBuffering(true);
    };
    const handleFirstGesture = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('.music-player-control')) return;
      void audio.play().catch(() => {
        setIsBuffering(false);
        setAwaitingGesture(true);
      });
    };
    const detachFirstGesture = () => {
      window.removeEventListener('pointerdown', handleFirstGesture, true);
      window.removeEventListener('keydown', handleFirstGesture, true);
    };
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('playing', detachFirstGesture, { once: true });

    // Try immediately; if Chrome blocks audible autoplay, retry on a real
    // gesture anywhere on the page and keep retrying until playback begins.
    audio.load();
    setIsBuffering(true);
    void audio.play().catch(() => {
      setIsBuffering(false);
      setAwaitingGesture(true);
    });
    window.addEventListener('pointerdown', handleFirstGesture, true);
    window.addEventListener('keydown', handleFirstGesture, true);

    return () => {
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('playing', detachFirstGesture);
      window.removeEventListener('pointerdown', handleFirstGesture, true);
      window.removeEventListener('keydown', handleFirstGesture, true);
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      setIsBuffering(true);
      void audio.play().catch(() => {
        setIsBuffering(false);
        setAwaitingGesture(true);
      });
    } else {
      setIsBuffering(false);
      audio.pause();
    }
  };

  return (
    <div className="music-player-control fixed bottom-4 left-4 z-50 pb-safe">
      <audio ref={audioRef} src={birthdayConfig.music.audioSrc} loop preload="auto" autoPlay />
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
            : isBuffering
              ? 'Loading music…'
              : awaitingGesture
              ? 'Tap for Music'
              : 'Play Birthday Music'}
        </span>
        <Music className="h-3.5 w-3.5 text-[#C95B7F] opacity-80" />
      </button>
    </div>
  );
};
