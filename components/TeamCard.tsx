import React from "react";
import { TeamMember } from "@/lib/flavors-data";
import { Heart, Sparkles, Quote, Award } from "lucide-react";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="group rounded-3xl glass-card border border-pink-200/70 p-6 shadow-md shadow-pink-100/40 hover:shadow-xl hover:shadow-pink-200/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      
      {/* Background soft sparkle */}
      <div className="absolute top-0 right-0 p-4 text-pink-200 opacity-40 group-hover:opacity-100 transition-opacity">
        <Sparkles className="w-8 h-8" />
      </div>

      <div className="space-y-4 relative z-10">
        {/* Avatar Graphic */}
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${member.avatarGradient} p-1 shadow-md shadow-pink-200 shrink-0 group-hover:scale-105 transition-transform duration-300`}>
            <div className="w-full h-full bg-white rounded-[12px] flex items-center justify-center font-heading font-extrabold text-2xl text-pink-600">
              {member.name.substring(0, 2).toUpperCase()}
            </div>
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-pink-600 transition-colors">
              {member.name}
            </h3>
            <span className="inline-block mt-1 text-xs font-bold text-pink-700 bg-pink-100/90 px-3 py-1 rounded-full border border-pink-200 shadow-2xs">
              {member.role}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed font-medium">
          {member.bio}
        </p>

        {/* Quote */}
        <div className="p-3.5 rounded-2xl bg-pink-50/80 border border-pink-100 relative">
          <Quote className="w-4 h-4 text-pink-400 absolute top-2 left-2 opacity-50" />
          <p className="text-xs italic text-pink-900 font-medium pl-4 leading-relaxed">
            "{member.quote}"
          </p>
        </div>
      </div>

      {/* Bottom badge */}
      <div className="mt-4 pt-3 border-t border-pink-100/80 flex items-center justify-between text-[11px] text-pink-600 font-semibold">
        <span className="flex items-center gap-1">
          <Award className="w-3.5 h-3.5 text-pink-500" /> Five Slices Leader
        </span>
        <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400 group-hover:scale-125 transition-transform" />
      </div>

    </div>
  );
};
