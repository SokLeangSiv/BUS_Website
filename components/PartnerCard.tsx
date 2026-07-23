"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Partner } from "@/lib/flavors-data";
import { Building2, CheckCircle2 } from "lucide-react";

interface PartnerCardProps {
  partner: Partner;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <div
      className={`group rounded-3xl glass-card border transition-all duration-300 flex flex-col justify-between relative overflow-hidden p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 ${
        partner.isInternational
          ? "border-sky-300/80 bg-gradient-to-b from-white via-sky-50/30 to-blue-50/20 hover:shadow-sky-200/60"
          : "border-pink-200/90 bg-white/95 hover:shadow-pink-200/50"
      }`}
    >
      
      {/* Top Header Badges */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-extrabold border flex items-center gap-1.5 shadow-xs ${
              partner.isInternational
                ? "bg-sky-100 text-sky-800 border-sky-200"
                : "bg-pink-100 text-pink-700 border-pink-200"
            }`}
          >
            <span>{partner.flag}</span>
            <span>{partner.badgeText}</span>
          </span>

          <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
            {partner.country}
          </span>
        </div>

        {/* Real Business Logo Frame */}
        <div className="h-28 w-full rounded-2xl bg-gradient-to-br from-slate-50 via-white to-pink-50/40 border border-slate-200/80 p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-white transition-colors">
          {!logoError ? (
            <div className="relative w-full h-full">
              <Image
                src={partner.logoPath}
                alt={partner.name}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                onError={() => setLogoError(true)}
              />
            </div>
          ) : (
            <div className="flex items-center gap-2 text-pink-600 font-extrabold text-base text-center">
              <Building2 className="w-5 h-5 shrink-0" />
              <span>{partner.name}</span>
            </div>
          )}
        </div>

        {/* Business Title & Contact Lead Info */}
        <div className="space-y-1">
          <h4 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-pink-600 transition-colors flex items-center justify-between">
            <span>{partner.name}</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          </h4>
          {partner.leadName && (
            <p className="text-xs font-bold text-pink-600">
              Key Contact: {partner.leadName}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 leading-relaxed font-medium">
          {partner.description}
        </p>
      </div>

      {/* Bottom verified partner status bar */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
        <span className="flex items-center gap-1.5 text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {partner.isInternational ? "International Alliance" : "National Corporate Partner"}
        </span>
        <span className="text-pink-500 font-extrabold group-hover:translate-x-1 transition-transform">
          {partner.flag}
        </span>
      </div>

    </div>
  );
};
