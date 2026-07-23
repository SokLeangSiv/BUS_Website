"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Partner } from "@/lib/flavors-data";
import { Building2, CheckCircle2, Award } from "lucide-react";

interface PartnerCardProps {
  partner: Partner;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <div
      className={`group rounded-3xl glass-card border transition-all duration-300 flex flex-col justify-between relative overflow-hidden p-6 shadow-md hover:shadow-xl hover:-translate-y-2 h-full ${
        partner.isInternational
          ? "border-sky-300/80 bg-gradient-to-b from-white via-sky-50/40 to-blue-50/30 hover:shadow-sky-200/70 ring-1 ring-sky-200/50"
          : "border-pink-200/90 bg-gradient-to-b from-white via-pink-50/30 to-rose-50/20 hover:shadow-pink-200/70"
      }`}
    >
      
      <div className="space-y-5">
        {/* Top Header Badges */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`px-3.5 py-1.5 rounded-full text-[11px] font-extrabold border flex items-center gap-1.5 shadow-xs ${
              partner.isInternational
                ? "bg-sky-100 text-sky-900 border-sky-300"
                : "bg-pink-100 text-pink-900 border-pink-300"
            }`}
          >
            <span className="text-sm">{partner.flag}</span>
            <span>{partner.badgeText}</span>
          </span>

          <span className="text-[11px] font-extrabold text-slate-600 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-2xs flex items-center gap-1">
            {partner.country}
          </span>
        </div>

        {/* Real Business Logo Container (BIGGER h-36 sm:h-40) */}
        <div className="h-36 sm:h-40 w-full rounded-2xl bg-white border-2 border-slate-100 p-4 flex items-center justify-center relative overflow-hidden group-hover:border-pink-300 shadow-inner group-hover:shadow-md transition-all">
          {!logoError ? (
            <div className="relative w-full h-full">
              <Image
                src={partner.logoPath}
                alt={partner.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                onError={() => setLogoError(true)}
                priority
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-2">
              <Building2 className="w-8 h-8 text-pink-500 mb-1" />
              <span className="font-heading font-extrabold text-base text-slate-800 leading-tight">
                {partner.name}
              </span>
            </div>
          )}
        </div>

        {/* Business Title & Contact Lead Info */}
        <div className="space-y-1">
          <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 group-hover:text-pink-600 transition-colors flex items-center justify-between gap-2">
            <span>{partner.name}</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          </h4>
          {partner.leadName && (
            <p className="text-xs font-extrabold text-pink-600 flex items-center gap-1">
              <span>👤 Key Contact:</span>
              <span className="text-slate-800">{partner.leadName}</span>
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
          {partner.description}
        </p>

        {/* Key Achievement Badge Box */}
        {partner.achievement && (
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-pink-50 border border-amber-200/80 flex items-start gap-2.5">
            <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-[11px] font-bold text-amber-950 leading-snug">
              <span className="text-amber-800 font-extrabold block mb-0.5">🏆 Key Track Record & Impact:</span>
              {partner.achievement}
            </div>
          </div>
        )}
      </div>

      {/* Bottom verified partner status bar */}
      <div className="pt-4 mt-5 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-bold text-slate-600">
        <span className="flex items-center gap-1.5 text-pink-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {partner.isInternational ? "International Corporate Alliance" : "National Cambodian Partner"}
        </span>
        <span className="text-pink-600 font-extrabold group-hover:translate-x-1 transition-transform flex items-center gap-1">
          {partner.flag} <span>View Alliance →</span>
        </span>
      </div>

    </div>
  );
};
