
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

type Phase = 'initial' | 'fading' | 'hidden';

const MYSTIC_REVEAL_KEY = 'mysticRevealPlayed_v1'; // Versioning key

export default function MysticRevealOverlay() {
  const [phase, setPhase] = useState<Phase>('initial');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem(MYSTIC_REVEAL_KEY)) {
        setPhase('hidden');
        return;
      }
    }

    // Still in 'initial' phase if sessionStorage item not found
    // Set phase to initial to ensure overlay is visible if not already hidden
    setPhase('initial'); 

    const fadeTimer = setTimeout(() => {
      setPhase('fading');
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(MYSTIC_REVEAL_KEY, 'true');
      }
    }, 1500); // Time overlay is fully visible before fade starts

    const hideTimer = setTimeout(() => {
      setPhase('hidden');
    }, 1500 + 1000); // Time fully visible + fade duration

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
        "fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900 transition-opacity duration-1000 ease-in-out",
        phase === 'fading' ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <Sparkles className="h-20 w-20 text-cyan-400 animate-pulse" />
    </div>
  );
}
