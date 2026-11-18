import React, { useEffect, useRef, useState } from 'react';
import { Music, Pause, Play } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

// A slow, chord-backed romantic piano phrase in C major. The bass and inner
// chord voices ring beneath a gentle melody, then resolve back to Cmaj7.
const ROMANTIC_PIANO_STEPS: Array<{ notes: number[]; dur: number }> = [
  // Cmaj7: warm opening, then a rising little phrase
  { notes: [130.81, 261.63, 392.0, 659.25], dur: 0.82 },
  { notes: [783.99], dur: 0.48 },
  { notes: [659.25], dur: 0.62 },
  { notes: [587.33], dur: 0.58 },
  { notes: [523.25], dur: 0.76 },
  { notes: [659.25], dur: 0.52 },
  // Am7: tender downward answer
  { notes: [110.0, 220.0, 329.63, 659.25], dur: 0.82 },
  { notes: [783.99], dur: 0.48 },
  { notes: [659.25], dur: 0.62 },
  { notes: [587.33], dur: 0.58 },
  { notes: [523.25], dur: 0.76 },
  { notes: [440.0], dur: 0.52 },
  // Fmaj7: open, glowing middle phrase
  { notes: [87.31, 174.61, 261.63, 440.0], dur: 0.82 },
  { notes: [523.25], dur: 0.48 },
  { notes: [659.25], dur: 0.62 },
  { notes: [698.46], dur: 0.58 },
  { notes: [659.25], dur: 0.76 },
  { notes: [523.25], dur: 0.52 },
  // G6: gentle lift and a soft resolution back home
  { notes: [98.0, 196.0, 293.66, 587.33], dur: 0.82 },
  { notes: [493.88], dur: 0.48 },
  { notes: [587.33], dur: 0.62 },
  { notes: [659.25], dur: 0.58 },
  { notes: [587.33], dur: 0.76 },
  { notes: [523.25, 392.0], dur: 0.7 },
  { notes: [493.88, 392.0], dur: 0.9 },
  { notes: [523.25, 392.0], dur: 1.1 },
];

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [awaitingGesture, setAwaitingGesture] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasRealAudioRef = useRef<boolean | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterBusRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);
  const stepRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(false);
  const userPausedRef = useRef<boolean>(false);

  const buildMasterBus = (ctx: AudioContext) => {
    if (masterBusRef.current) return masterBusRef.current;

    const master = ctx.createGain();
    master.gain.setValueAtTime(0.72, ctx.currentTime);

    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.setValueAtTime(2300, ctx.currentTime);

    // Subtle dreamy echo tail
    const delay = ctx.createDelay(1.0);
    delay.delayTime.setValueAtTime(0.32, ctx.currentTime);

    const feedback = ctx.createGain();
    feedback.gain.setValueAtTime(0.28, ctx.currentTime);

    const wetGain = ctx.createGain();
    wetGain.gain.setValueAtTime(0.24, ctx.currentTime);

    master.connect(lowpass);
    lowpass.connect(ctx.destination);

    lowpass.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(wetGain);
    wetGain.connect(ctx.destination);

    masterBusRef.current = master;
    return master;
  };

  const playPianoNote = (ctx: AudioContext, dest: AudioNode, freq: number, dur: number) => {
    const now = ctx.currentTime;
    const oscFundamental = ctx.createOscillator();
    const oscWarm = ctx.createOscillator();
    const noteGain = ctx.createGain();
    const warmGain = ctx.createGain();

    oscFundamental.type = 'triangle';
    oscFundamental.frequency.setValueAtTime(freq, now);

    oscWarm.type = 'sine';
    oscWarm.frequency.setValueAtTime(freq * 2, now);
    warmGain.gain.setValueAtTime(0.14, now);

    const isBass = freq < 230;
    const peak = isBass ? 0.065 : 0.048;
    const decayTime = isBass ? dur * 2.4 : dur * 1.9;

    noteGain.gain.setValueAtTime(0.0005, now);
    noteGain.gain.linearRampToValueAtTime(peak, now + 0.035);
    noteGain.gain.exponentialRampToValueAtTime(0.0004, now + decayTime);

    oscFundamental.connect(noteGain);
    oscWarm.connect(warmGain);
    warmGain.connect(noteGain);
    noteGain.connect(dest);

    oscFundamental.start(now);
    oscWarm.start(now);
    oscFundamental.stop(now + decayTime + 0.05);
    oscWarm.stop(now + decayTime + 0.05);
  };

  const scheduleNextStep = () => {
    const ctx = audioCtxRef.current;
    if (!ctx || ctx.state !== 'running' || !isPlayingRef.current) return;

    const bus = buildMasterBus(ctx);
    const step = ROMANTIC_PIANO_STEPS[stepRef.current % ROMANTIC_PIANO_STEPS.length];
    stepRef.current += 1;

    step.notes.forEach((freq) => playPianoNote(ctx, bus, freq, step.dur));

    timerRef.current = window.setTimeout(scheduleNextStep, step.dur * 1000);
  };

  const pauseSynth = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend().catch(() => {});
    }
  };

  const startSynth = async (): Promise<boolean> => {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return false;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      try {
        await audioCtxRef.current.resume();
      } catch {
        isPlayingRef.current = false;
        return false;
      }
    }
    if (audioCtxRef.current.state !== 'running') {
      isPlayingRef.current = false;
      return false;
    }

    // Only mark playback active after the browser has resumed the context.
    // Autoplay resume can remain pending until a user gesture; setting this
    // earlier would make the first envelope tap incorrectly skip the retry.
    isPlayingRef.current = true;
    setIsPlaying(true);
    setAwaitingGesture(false);
    if (timerRef.current === null) {
      scheduleNextStep();
    }
    return true;
  };

  const attemptStartPlayback = async (fromBeginning: boolean): Promise<boolean> => {
    if (userPausedRef.current) return false;

    if (hasRealAudioRef.current === true) {
      try {
        if (!audioRef.current) {
          const audio = new Audio(birthdayConfig.music.audioSrc);
          audio.loop = true;
          audio.volume = 0.48;
          audio.currentTime = 0;
          audioRef.current = audio;
        } else if (fromBeginning) {
          audioRef.current.currentTime = 0;
        }
        isPlayingRef.current = true;
        await audioRef.current.play();
        setIsPlaying(true);
        setAwaitingGesture(false);
        return true;
      } catch {
        isPlayingRef.current = false;
        // Autoplay blocked; fall back to gesture listener below
        return false;
      }
    }

    if (fromBeginning) {
      stepRef.current = 0;
    }
    return startSynth();
  };

  useEffect(() => {
    let mounted = true;

    const detachFirstGesture = () => {
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };

    const handleFirstGesture = (event: Event) => {
      const target = event.target as HTMLElement | null;
      detachFirstGesture();
      // Let the player's own click handler handle its first tap without
      // toggling straight back to paused.
      if (target?.closest('.music-player-control')) return;
      if (!userPausedRef.current && !isPlayingRef.current) {
        if (hasRealAudioRef.current === true) {
          void attemptStartPlayback(stepRef.current === 0 && !audioRef.current?.currentTime);
        } else {
          void startSynth();
        }
      }
    };

    // Attach immediately, before the optional audio-file check, so the first
    // envelope tap can unlock audio on mobile browsers.
    window.addEventListener('pointerdown', handleFirstGesture, { once: true });
    window.addEventListener('keydown', handleFirstGesture, { once: true });

    const initAutoplay = async () => {
      try {
        const res = await fetch(birthdayConfig.music.audioSrc, { method: 'HEAD' });
        const contentType = res.headers.get('content-type') || '';
        hasRealAudioRef.current = res.ok && contentType.startsWith('audio/');
      } catch {
        hasRealAudioRef.current = false;
      }
      if (!mounted || isPlayingRef.current) return;

      const started = await attemptStartPlayback(true);
      if (!mounted) return;
      if (started) {
        detachFirstGesture();
      } else if (!userPausedRef.current) {
        setAwaitingGesture(true);
      }
    };

    initAutoplay();

    return () => {
      mounted = false;
      detachFirstGesture();
      pauseSynth();
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
    // Run once on initial page load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMusic = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isPlayingRef.current) {
      userPausedRef.current = true;
      isPlayingRef.current = false;
      setIsPlaying(false);
      setAwaitingGesture(false);

      if (audioRef.current) {
        audioRef.current.pause();
      }
      pauseSynth();
      return;
    }

    userPausedRef.current = false;
    await attemptStartPlayback(false);
  };

  return (
    <div className="music-player-control fixed bottom-4 left-4 z-50 pb-safe">
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause background music' : 'Resume background music'}
        aria-pressed={isPlaying}
        className="group flex min-h-[44px] items-center gap-2.5 rounded-full border border-[#EAD0DA] bg-[#FFFEFC]/95 px-3.5 py-2 text-xs font-semibold text-[#4A343E] shadow-[0_10px_26px_rgba(164,114,134,0.16)] backdrop-blur-md transition-transform duration-150 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95B7F]"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F8DCE5] text-[#C95B7F]">
          {isPlaying ? (
            <Pause className="h-3.5 w-3.5" />
          ) : (
            <Play className="h-3.5 w-3.5 translate-x-[0.5px]" />
          )}
        </span>
        <span className="whitespace-nowrap">
          {isPlaying
            ? `${birthdayConfig.music.trackTitle} · Playing`
            : awaitingGesture
            ? 'Tap for Music'
            : 'Music Paused'}
        </span>
        <Music className="h-3.5 w-3.5 text-[#C95B7F] opacity-80" />
      </button>
    </div>
  );
};
