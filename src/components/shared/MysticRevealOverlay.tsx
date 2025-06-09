
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

type Phase = 'initial' | 'fading' | 'hidden';

const MYSTIC_REVEAL_KEY = 'mysticRevealPlayed_v2'; // Updated key for new version

export default function MysticRevealOverlay() {
  const [phase, setPhase] = useState<Phase>('initial');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem(MYSTIC_REVEAL_KEY)) {
        setPhase('hidden');
        return;
      }
    }
    // Ensure component starts in initial phase if not hidden
    setPhase('initial'); 

    // Timer for when the fading out process begins
    const fadeTimer = setTimeout(() => {
      setPhase('fading');
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(MYSTIC_REVEAL_KEY, 'true');
      }
    }, 1500); // Start fading after 1.5 seconds of full visibility

    // Timer for when the component should be completely hidden and removed
    const hideTimer = setTimeout(() => {
      setPhase('hidden');
    }, 1500 + 2000); // 1.5s visible + 2s fade duration = 3.5s total

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (phase === 'hidden') {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none",
        // Base overlay is slightly transparent to hint at content behind
        "bg-slate-900/60 transition-opacity duration-[2000ms] ease-in-out", 
        phase === 'fading' ? "opacity-0" : "opacity-100"
      )}
    >
      {/* Cloud Layer 1 - Slower, larger, background */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-slate-200/20 via-white/40 to-slate-100/30 blur-md",
          "transition-all duration-[2000ms] ease-in-out",
          phase === 'fading' 
            ? "opacity-0 -translate-y-full scale-150" 
            : "opacity-100 translate-y-0 scale-100"
        )}
        style={{ animationDelay: phase === 'fading' ? '0s' : '0s' }} // Start immediately with parent fade
      />
      {/* Cloud Layer 2 - Mid-ground, slightly faster */}
      <div
        className={cn(
          "absolute inset-[-20%] bg-gradient-to-br from-white/50 via-slate-100/30 to-transparent",
          "rounded-full blur-xl", 
          "transition-all duration-[1800ms] ease-in-out",
          phase === 'fading' 
            ? "opacity-0 translate-y-3/4 scale-120" 
            : "opacity-90 translate-y-0 scale-100"
        )}
         style={{ animationDelay: phase === 'fading' ? '0.2s' : '0s' }} // Stagger start
      />
      {/* Cloud Layer 3 - Foreground, fastest */}
       <div
        className={cn(
          "absolute inset-[-10%] bg-gradient-to-tl from-white/60 via-slate-50/40 to-white/30",
          "rounded-full blur-lg",
          "transition-all duration-[1500ms] ease-in-out",
           phase === 'fading' 
            ? "opacity-0 translate-y-1/2 scale-110" 
            : "opacity-100 translate-y-0 scale-100"
        )}
        style={{ animationDelay: phase === 'fading' ? '0.4s' : '0s' }} // Stagger start further
      />
      
      {/* Sparkles in the center */}
      <Sparkles 
        className={cn(
          "relative z-10 h-20 w-20 md:h-24 md:w-24 text-cyan-300/80", // Slightly more opaque sparkles
          "transition-all duration-[1200ms] ease-out", // Sparkles fade a bit faster than clouds
          phase === 'fading' 
            ? "opacity-0 scale-150" 
            : "opacity-100 scale-100 animate-pulse"
        )}
        style={{ animationDuration: '1.5s', animationDelay: phase === 'fading' ? '0s' : '0s' }}
      />
    </div>
  );
}

