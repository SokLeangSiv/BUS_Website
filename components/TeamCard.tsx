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
      className={`group rounded-3xl glass-card border transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
        member.isLeader
          ? "border-pink-400 bg-gradient-to-b from-white via-pink-50/50 to-rose-50/40 shadow-xl shadow-pink-200/70 ring-2 ring-pink-300 hover:-translate-y-3"
          : "border-pink-200/80 shadow-md shadow-pink-100/40 hover:shadow-xl hover:shadow-pink-200/50 hover:-translate-y-2"
      }`}
    >
      {/* Top Banner Accent */}
      {member.isLeader && (
        <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white text-[11px] font-extrabold py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-1.5 shadow-xs">
          <Crown className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300 animate-bounce" />
          <span>TEAM LEADER</span>
          <Star className="w-3 h-3 fill-yellow-300 text-yellow-300" />
        </div>
      )}

      {/* Large Featured Image Header (h-60) */}
      <div className="relative h-60 w-full overflow-hidden bg-slate-100 group-hover:brightness-105 transition-all">
        {member.imagePath && !imageError ? (
          <Image
            src={member.imagePath}
            alt={member.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            onError={() => setImageError(true)}
          />
        ) : (
          /* High-end Styled Portrait Fallback Frame */
          <div className={`w-full h-full bg-gradient-to-tr ${member.avatarGradient} p-6 flex flex-col items-center justify-center relative`}>
            <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center font-heading font-extrabold text-3xl text-pink-600 border-2 border-white">
              {member.name.split(" ").map(n => n[0]).join("")}
            </div>
            <span className="mt-3 text-xs font-bold text-white bg-black/20 px-3 py-1 rounded-full backdrop-blur-xs">
              Photo Placeholder
            </span>
          </div>
        )}

        {/* Soft bottom dark-pink gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Floating Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-extrabold text-pink-700 shadow-xs border border-pink-100 flex items-center gap-1">
            {member.isLeader ? <Crown className="w-3 h-3 text-amber-500 fill-amber-400" /> : <Award className="w-3 h-3 text-pink-500" />}
            {member.role.split("&")[0].trim()}
          </span>

          <span className="p-2 rounded-full bg-white/80 backdrop-blur-md text-pink-500 shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-pink-300" />
          </span>
        </div>

        {/* Bottom Overlay Info on Image */}
        <div className="absolute bottom-4 left-5 right-5 text-white z-10 space-y-0.5">
          <h3 className="font-heading font-extrabold text-2xl drop-shadow-sm flex items-center gap-2">
            <span>{member.name}</span>
            {member.isLeader && <Sparkles className="w-5 h-5 text-yellow-300 animate-sparkle" />}
          </h3>
          <p className="text-xs text-pink-200 font-bold tracking-wide">
            {member.role}
          </p>
        </div>
      </div>

      {/* Card Body Details */}
      <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
        <p className="text-xs text-slate-600 leading-relaxed font-medium">
          {member.bio}
        </p>

        {/* Quote Block */}
        <div className="p-4 rounded-2xl bg-pink-50/80 border border-pink-100 relative">
          <Quote className="w-4 h-4 text-pink-400 absolute top-2 left-2 opacity-40" />
          <p className="text-xs italic text-pink-950 font-semibold pl-4 leading-relaxed">
            "{member.quote}"
          </p>
        </div>

        {/* Bottom Leadership Status */}
        <div className="pt-3 border-t border-pink-100/80 flex items-center justify-between text-[11px] font-bold text-pink-700">
          <span className="flex items-center gap-1">
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
