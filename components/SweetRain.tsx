"use client";

import React, { useState } from "react";
import { Heart } from "lucide-react";

interface RainParticle {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

const EMOJIS = ["🍰", "💖", "✨", "🍒", "🌸", "🍓", "🧁", "💖", "🍰"];

// Pre-generate particles with balanced sizing
const PARTICLES: RainParticle[] = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  emoji: EMOJIS[i % EMOJIS.length],
  left: Math.round(((i * 4.1 + (i % 5) * 16) % 92) + 4),
  duration: Math.round(5.5 + (i % 4) * 1.4 + (i % 3) * 0.8),
  delay: Math.round((i % 7) * 0.8 + (i % 3) * 0.4),
  size: Math.round(16 + (i % 3) * 6),
}));

export const SweetRain: React.FC = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <>
      {/* Floating Toggle Button (Fixed Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden">
        <button
          onClick={() => setEnabled(!enabled)}
          className={`group flex items-center gap-2 px-4 py-2.5 rounded-full font-extrabold text-xs shadow-xl transition-all duration-300 border-2 ${
            enabled
              ? "bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white border-white shadow-pink-300 hover:scale-105"
              : "bg-white text-slate-700 border-pink-200 hover:border-pink-400 shadow-slate-200"
          }`}
          title="Toggle Falling Cheesecake & Heart Rain Animation"
        >
          <span className="text-base animate-bounce" style={{ animationDuration: "2s" }}>
            🍰
          </span>
          <span>Sweet Rain: {enabled ? "ON ✨" : "OFF"}</span>
          <Heart
            className={`w-3.5 h-3.5 ${
              enabled ? "fill-white text-white animate-pulse" : "text-pink-400"
            }`}
          />
        </button>
      </div>

      {/* Falling Rain Particles Overlay */}
      {enabled && (
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
      )}
    </>
  );
};
