"use client";

import React from "react";

interface RainParticle {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

interface SweetRainProps {
  enabled?: boolean;
}

const EMOJIS = ["🍰", "💖", "✨", "🍒", "🌸", "🍓", "🧁", "💖", "🍰"];

// Pre-generate particles with optimal sizing and distribution
const PARTICLES: RainParticle[] = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  emoji: EMOJIS[i % EMOJIS.length],
  left: Math.round(((i * 4.1 + (i % 5) * 16) % 92) + 4),
  duration: Math.round(5.5 + (i % 4) * 1.4 + (i % 3) * 0.8),
  delay: Math.round((i % 7) * 0.8 + (i % 3) * 0.4),
  size: Math.round(16 + (i % 3) * 6),
}));

export const SweetRain: React.FC<SweetRainProps> = ({ enabled = true }) => {
  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden select-none print:hidden">
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute animate-falling-rain"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            top: `-40px`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
};
