"use client";

import React from "react";

export const SprinklesBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
      {/* Pastel Blobs */}
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }} />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Floating Decorative SVG Elements */}
      {/* Heart 1 */}
      <div className="absolute top-20 left-[10%] animate-float text-pink-300/60">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      {/* Sparkle 1 */}
      <div className="absolute top-40 right-[12%] animate-sparkle text-amber-400/70" style={{ animationDelay: "1s" }}>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      </div>

      {/* Cherry SVG */}
      <div className="absolute top-1/2 left-[5%] animate-float-slow text-rose-400/50">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="8" cy="17" r="4" fill="#f43f5e" fillOpacity="0.4" />
          <circle cx="17" cy="15" r="4" fill="#f43f5e" fillOpacity="0.4" />
          <path d="M8 13C9 8 13 4 17 3" stroke="#15803d" />
          <path d="M17 11C16 7 14 5 17 3" stroke="#15803d" />
        </svg>
      </div>

      {/* Heart 2 */}
      <div className="absolute top-2/3 right-[8%] animate-float text-purple-300/60" style={{ animationDelay: "2s" }}>
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      {/* Sprinkle Pills */}
      <div className="absolute top-1/4 left-[85%] w-3 h-8 bg-pink-300/40 rounded-full rotate-45 animate-float-slow" />
      <div className="absolute top-3/4 left-[15%] w-3 h-8 bg-purple-300/40 rounded-full -rotate-12 animate-float" />
      <div className="absolute bottom-32 right-[25%] w-3 h-8 bg-amber-300/40 rounded-full rotate-12 animate-float-slow" />
    </div>
  );
};
