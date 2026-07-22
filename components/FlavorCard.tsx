"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Flavor } from "@/lib/flavors-data";
import { Star, Heart, ShoppingBag, Check } from "lucide-react";

interface FlavorCardProps {
  flavor: Flavor;
}

export const FlavorCard: React.FC<FlavorCardProps> = ({ flavor }) => {
  const [ordered, setOrdered] = useState(false);

  const handleOrderClick = () => {
    setOrdered(true);
    setTimeout(() => setOrdered(false), 3000);
  };

  return (
    <div className="group relative rounded-3xl glass-card border border-pink-200/80 p-6 shadow-md shadow-pink-100/50 hover:shadow-xl hover:shadow-pink-200/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Background Image Header */}
      <div className="h-48 -mx-6 -mt-6 mb-5 relative overflow-hidden bg-slate-100">
        <Image
          src={flavor.imagePath}
          alt={flavor.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          {flavor.badge && (
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-extrabold text-pink-700 shadow-xs border border-pink-100">
              {flavor.badge}
            </span>
          )}
          <button className="p-2 rounded-full bg-white/80 text-pink-500 hover:text-rose-600 hover:bg-white hover:scale-110 transition-all shadow-xs ml-auto">
            <Heart className="w-4 h-4 fill-pink-200 hover:fill-pink-500" />
          </button>
        </div>

        {/* Category tag at bottom left of image */}
        <div className="absolute bottom-3 left-4 z-10">
          <span className="text-[11px] font-bold tracking-wider text-white uppercase bg-pink-600/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-pink-400/40">
            {flavor.category} Edition
          </span>
        </div>
      </div>

      {/* Main Details */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{flavor.rating.toFixed(1)}</span>
            <span className="text-slate-400 font-normal">({flavor.reviewsCount})</span>
          </div>
          <div className="text-xs font-bold text-pink-700 bg-pink-100/80 px-2.5 py-1 rounded-full border border-pink-200">
            Slice: {flavor.priceSlice} | Whole: {flavor.priceWhole}
          </div>
        </div>

        <div>
          <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-pink-600 transition-colors">
            {flavor.name}
          </h3>
          <p className="text-xs font-semibold text-pink-500 mt-0.5">
            {flavor.tagline}
          </p>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
          {flavor.description}
        </p>

        {/* Ingredients tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {flavor.ingredients.map((ing, i) => (
            <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-pink-100 text-slate-600">
              {ing}
            </span>
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <div className="mt-5 pt-4 border-t border-pink-100 flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-slate-400 block font-medium">Starting from</span>
          <span className="text-lg font-extrabold font-heading text-pink-600">{flavor.priceSlice}</span>
        </div>
        <button
          onClick={handleOrderClick}
          className={`px-4 py-2.5 rounded-2xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-md ${
            ordered
              ? "bg-emerald-500 text-white shadow-emerald-200"
              : "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-pink-200 hover:scale-105 active:scale-95"
          }`}
        >
          {ordered ? (
            <>
              <Check className="w-4 h-4" /> Added to Order!
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" /> Order Slices
            </>
          )}
        </button>
      </div>

    </div>
  );
};
