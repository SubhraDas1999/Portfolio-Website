
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Wand2 } from 'lucide-react'; // Using Wand2 for the central magical item

type Phase = 'initial' | 'wandVisible' | 'bursting' | 'fading' | 'hidden';

const MYSTIC_REVEAL_KEY = 'mysticRevealPlayed_v3'; // New key for the updated animation

const NUM_PARTICLES = 15;

export default function MysticRevealOverlay() {
  const [phase, setPhase] = useState<Phase>('initial');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem(MYSTIC_REVEAL_KEY)) {
        setPhase('hidden');
        return;
      }
    }
    setPhase('initial'); // Start in initial phase

    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setPhase('wandVisible'), 100)); // Wand appears quickly
    timers.push(setTimeout(() => setPhase('bursting'), 600)); // Particles burst after wand is visible
    timers.push(setTimeout(() => {
      setPhase('fading');
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(MYSTIC_REVEAL_KEY, 'true');
      }
    }, 1600)); // Overlay starts fading after burst animation
    timers.push(setTimeout(() => setPhase('hidden'), 2600)); // Fully hidden (1s fade)

    return () => {
      timers.forEach(clearTimeout);
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
        "bg-[#2C3E50] transition-opacity duration-1000ms ease-in-out", // Deep Slate Blue background
        phase === 'fading' || phase === 'hidden' ? "opacity-0" : "opacity-100"
      )}
    >
      {/* Central Wand Icon */}
      <Wand2
        className={cn(
          "relative z-20 h-20 w-20 md:h-24 md:w-24 text-cyan-300",
          "transition-all duration-500ms ease-out",
          phase === 'initial' ? "opacity-0 scale-50" : "opacity-100 scale-100",
          phase === 'wandVisible' || phase === 'bursting' ? "animate-pulse-glow" : ""
        )}
        style={{ animationDuration: '1.5s' }}
      />

      {/* Particle Burst Container */}
      {phase === 'bursting' && (
        <div className="absolute z-10 flex items-center justify-center">
          {Array.from({ length: NUM_PARTICLES }).map((_, i) => {
            const angle = (i / NUM_PARTICLES) * 360 + (Math.random() * 30 - 15); // Angle for particle
            const distance = 80 + Math.random() * 70; // Distance particle travels (vw/vh units for responsiveness)
            const duration = 0.8 + Math.random() * 0.4; // Duration of particle animation
            const delay = Math.random() * 0.2; // Stagger particle appearance

            return (
              <div
                key={i}
                className="absolute rounded-full bg-cyan-400 opacity-0"
                style={{
                  width: `${2 + Math.random() * 3}px`,
                  height: `${2 + Math.random() * 3}px`,
                  animation: `particle-burst ${duration}s ${delay}s ease-out forwards`,
                  '--angle': `${angle}deg`,
                  '--distance': `${distance}vmin`, // Use vmin for more consistent travel distance
                } as React.CSSProperties}
              />
            );
          })}
        </div>
      )}

      {/* Inline styles for animations to avoid purging issues with dynamic class names */}
      <style jsx global>{`
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.7)) drop-shadow(0 0 10px rgba(0, 255, 255, 0.5)); transform: scale(1); }
          50% { filter: drop-shadow(0 0 10px rgba(0, 255, 255, 1)) drop-shadow(0 0 20px rgba(0, 255, 255, 0.7)); transform: scale(1.05); }
        }
        .animate-pulse-glow {
          animation-name: pulse-glow;
          animation-iteration-count: infinite;
        }

        @keyframes particle-burst {
          0% {
            opacity: 0.8;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: rotate(var(--angle)) translateX(var(--distance)) scale(0.3);
          }
        }
      `}</style>
    </div>
  );
}
