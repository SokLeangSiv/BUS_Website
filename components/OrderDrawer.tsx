"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Flavor } from "@/lib/flavors-data";
import { X, ShoppingBag, Plus, Minus, Check, Heart, ShieldCheck, Sparkles, Clock, MapPin } from "lucide-react";

interface OrderDrawerProps {
  flavor: Flavor | null;
  onClose: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({ flavor, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState<"slice" | "box" | "whole">("slice");
  const [isAdded, setIsAdded] = useState(false);

  if (!flavor) return null;

  const getPrice = () => {
    if (size === "whole") return 28.00;
    if (size === "box") return 16.00;
    return parseFloat(flavor.priceSlice.replace("$", ""));
  };

  const totalPrice = (getPrice() * quantity).toFixed(2);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-300">
      
      {/* Backdrop overlay click to exit */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-300">
        
        {/* Top Header */}
        <div>
          <div className="sticky top-0 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-pink-100 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-pink-100 text-pink-600">
                <ShoppingBag className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-heading font-extrabold text-lg text-slate-900">
                  Configure Order
                </h3>
                <p className="text-[11px] text-pink-500 font-semibold">Fresh Bake Cold-Chain Delivery</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Flavor Media Header */}
          <div className="relative h-56 bg-slate-100">
            <Image
              src={flavor.imagePath}
              alt={flavor.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/20" />

            <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-pink-600/90 border border-pink-400/40">
                {flavor.badge || "Handcrafted Daily"}
              </span>
              <h2 className="font-heading font-extrabold text-2xl drop-shadow-xs">
                {flavor.name}
              </h2>
              <p className="text-xs text-pink-200 font-medium">{flavor.tagline}</p>
            </div>
          </div>

          {/* Form Options */}
          <div className="p-6 space-y-6">
            
            {/* Size Options */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Select Portion Size
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "slice", label: "Single Slice", desc: flavor.priceSlice },
                  { id: "box", label: "4-Slice Box", desc: "$16.00" },
                  { id: "whole", label: "Whole 8\" Cake", desc: flavor.priceWhole },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSize(option.id as any)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      size === option.id
                        ? "border-pink-500 bg-pink-50/80 text-pink-900 ring-2 ring-pink-300 font-bold shadow-xs"
                        : "border-slate-200 text-slate-700 hover:border-pink-200"
                    }`}
                  >
                    <span className="block text-xs">{option.label}</span>
                    <span className="block text-xs font-mono font-extrabold text-pink-600 mt-1">
                      {option.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-pink-50/60 border border-pink-100">
              <div>
                <span className="text-xs font-bold text-slate-900 block">Quantity</span>
                <span className="text-[11px] text-slate-500">Baked fresh in morning batch</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-xl border border-pink-200 shadow-2xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:text-pink-600 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-mono font-extrabold text-sm text-slate-900 w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:text-pink-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Ingredients & Quality Checklist */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 block">Fresh Ingredients:</span>
              <div className="flex flex-wrap gap-1.5">
                {flavor.ingredients.map((ing, i) => (
                  <span key={i} className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Delivery Guarantees */}
            <div className="p-4 rounded-2xl bg-white border border-pink-100 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Temperature Guarantee (2°C – 4°C)
              </div>
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <Clock className="w-4 h-4 text-pink-500" /> Same-day delivery for orders before 2:00 PM
              </div>
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <MapPin className="w-4 h-4 text-purple-500" /> Phnom Penh Metro & Cold-Box Dispatch
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Action Bar */}
        <div className="sticky bottom-0 bg-white border-t border-pink-100 p-6 space-y-3 z-10">
          <div className="flex items-center justify-between text-slate-900 font-bold">
            <span className="text-xs text-slate-500 uppercase tracking-wider">Total Amount</span>
            <span className="text-2xl font-extrabold font-heading text-pink-600 font-mono">
              ${totalPrice}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-full py-4 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
              isAdded
                ? "bg-emerald-500 text-white shadow-emerald-200"
                : "bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white shadow-pink-200 hover:scale-[1.02] active:scale-95"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-5 h-5" /> Order Added to Cart!
              </>
            ) : (
              <>
                <ShoppingBag className="w-5 h-5" /> Confirm Order (${totalPrice})
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
