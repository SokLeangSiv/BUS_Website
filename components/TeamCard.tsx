"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TeamMember } from "@/lib/flavors-data";
import { Heart, Sparkles, Quote, Crown, Star, ShieldCheck, Award } from "lucide-react";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`group rounded-3xl glass-card border transition-all duration-300 flex flex-col justify-between overflow-hidden relative h-full w-full ${
        member.isLeader
          ? "border-pink-400 bg-gradient-to-b from-white via-pink-50/50 to-rose-50/40 shadow-xl shadow-pink-200/70 ring-2 ring-pink-300 hover:-translate-y-3"
          : "border-pink-200/80 bg-white/90 shadow-md shadow-pink-100/40 hover:shadow-xl hover:shadow-pink-200/50 hover:-translate-y-2"
      }`}
    >
      {/* Top Banner Accent - Uniformly rendered inside card header bar for perfect height matching */}
      {member.isLeader ? (
        <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white text-[11px] font-extrabold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-1.5 shadow-xs shrink-0">
          <Crown className="w-4 h-4 fill-yellow-300 text-yellow-300 animate-bounce" />
          <span>TEAM LEADER & FOUNDER</span>
          <Star className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
        </div>
      ) : (
        <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-pink-200 text-[11px] font-bold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-1.5 shadow-xs shrink-0 border-b border-pink-900/20">
          <Award className="w-3.5 h-3.5 text-pink-400" />
          <span>FIVE SLICES EXECUTIVE</span>
        </div>
      )}

      {/* Large Featured Image Header (h-80 sm:h-96 md:h-[360px]) */}
      <div className="relative h-80 sm:h-96 md:h-[360px] w-full overflow-hidden bg-slate-900 group-hover:brightness-105 transition-all shrink-0">
        {member.imagePath && !imageError ? (
          <Image
            src={member.imagePath}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          /* High-end Styled Portrait Fallback Frame */
          <div className={`w-full h-full bg-gradient-to-tr ${member.avatarGradient} p-6 flex flex-col items-center justify-center relative`}>
            <div className="w-28 h-28 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center font-heading font-extrabold text-4xl text-pink-600 border-2 border-white">
              {member.name.split(" ").map(n => n[0]).join("")}
            </div>
            <span className="mt-3 text-xs font-bold text-white bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-xs">
              Photo Placeholder
            </span>
          </div>
        )}

        {/* Soft bottom dark gradient overlay for crystal clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

        {/* Floating Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-extrabold text-pink-700 shadow-md border border-pink-100 flex items-center gap-1.5">
            {member.isLeader ? <Crown className="w-3.5 h-3.5 text-amber-500 fill-amber-400" /> : <Award className="w-3.5 h-3.5 text-pink-500" />}
            {member.role.split("&")[0].trim()}
          </span>

          <span className="p-2 rounded-full bg-white/90 backdrop-blur-md text-pink-500 shadow-md border border-pink-100">
            <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-500" />
          </span>
        </div>

        {/* Bottom Overlay Info on Image */}
        <div className="absolute bottom-4 left-5 right-5 text-white z-10 space-y-1">
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl drop-shadow-md flex items-center gap-2 tracking-tight">
            <span>{member.name}</span>
            {member.isLeader && <Sparkles className="w-5 h-5 text-yellow-300 animate-sparkle" />}
          </h3>
          <p className="text-xs sm:text-sm text-pink-200 font-bold tracking-wide drop-shadow-xs">
            {member.role}
          </p>
        </div>
      </div>

      {/* Card Body Details */}
      <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
          {member.bio}
        </p>

        {/* Quote Block */}
        <div className="p-4 rounded-2xl bg-pink-50/80 border border-pink-100 relative mt-auto">
          <Quote className="w-4 h-4 text-pink-400 absolute top-2 left-2 opacity-40" />
          <p className="text-xs italic text-pink-950 font-semibold pl-4 leading-relaxed">
            "{member.quote}"
          </p>
        </div>

        {/* Bottom Leadership Status */}
        <div className="pt-3 border-t border-pink-100/80 flex items-center justify-between text-[11px] font-bold text-pink-700 shrink-0">
          <span className="flex items-center gap-1.5">
            {member.isLeader ? (
              <>
                <Crown className="w-3.5 h-3.5 text-amber-500 fill-amber-400" /> Lead Director & Coordinator
              </>
            ) : (
              <>
                <ShieldCheck className="w-3.5 h-3.5 text-pink-500" /> Five Slices Executive
              </>
            )}
          </span>
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 group-hover:scale-125 transition-transform" />
        </div>
      </div>

    </div>
  );
};
