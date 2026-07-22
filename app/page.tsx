"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FEATURED_FLAVORS, INSTAGRAM_PHOTOS } from "@/lib/flavors-data";
import { FlavorCard } from "@/components/FlavorCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SprinklesBackground } from "@/components/SprinklesBackground";
import { Sparkles, Heart, ArrowRight, ShoppingBag, Star, CheckCircle } from "lucide-react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "signature" | "classic" | "seasonal">("all");

  const filteredFlavors = FEATURED_FLAVORS.filter(
    (f) => selectedCategory === "all" || f.category === selectedCategory
  );

  return (
    <div className="relative min-h-screen">
      <SprinklesBackground />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100/90 border border-pink-200 text-pink-700 text-xs font-bold shadow-xs">
                <Sparkles className="w-4 h-4 text-pink-500 animate-sparkle" />
                <span>Handcrafted Happiness in Every Slice ✨</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15]">
                Indulge in Cambodia's <br />
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Most Aesthetic
                </span> Cheesecake.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Welcome to <strong>Five Slices Cheesecake Co.</strong> — where luxury baking meets authentic local flavors. Crafted daily with organic Kampong Speu Palm Sugar and premium cream cheese.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-extrabold text-base shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <ShoppingBag className="w-5 h-5" /> Order Fresh Slices
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/trip-reports"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border-2 border-pink-200 text-pink-700 font-extrabold text-base shadow-sm hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  ✈️ Executive Trip Reports
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-pink-200/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 font-semibold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> 100% Kampong Speu Palm Sugar
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-pink-500" /> Baked Fresh Daily
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-500" /> Cold-Chain Delivery
                </div>
              </div>

            </div>

            {/* Right Hero Graphic Showcase */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-[40px] overflow-hidden shadow-2xl shadow-pink-300/60 border-4 border-white transform hover:rotate-1 transition-transform duration-500 group">
                
                {/* Real Generated Hero Cheesecake Image */}
                <Image
                  src="/images/hero_cheesecake.png"
                  alt="Khmer Palm Sugar Signature Cheesecake"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-pink-950/70 via-transparent to-black/20" />

                {/* Floating Decorative Badges */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md shadow-md border border-pink-200 text-xs font-extrabold text-pink-700 flex items-center gap-1.5 animate-float z-10">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> #1 Rated Cheesecake
                </div>

                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md text-xs font-extrabold flex items-center gap-1.5 animate-float-slow z-10">
                  <Heart className="w-4 h-4 fill-white text-white" /> Pure Handcrafted Love
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10 space-y-1">
                  <span className="text-[11px] font-bold tracking-wider text-yellow-300 uppercase bg-pink-900/60 backdrop-blur-md px-2.5 py-0.5 rounded-full inline-block">
                    Signature Creation
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl drop-shadow-md">
                    Khmer Palm Sugar Cheesecake
                  </h3>
                  <p className="text-xs text-pink-100 font-medium">
                    Slow-caramelized Kampong Speu Palm Sugar swirl
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRAND INTRO & UNIQUE VALUES */}
      <section className="py-16 bg-white/80 backdrop-blur-md border-y border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Five Slices?"
            title="Elevating Cambodian Flavor to Luxury Dessert Art"
            subtitle="Five Slices Cheesecake Co. combines disciplined expansion strategy with artisanal recipe perfection, customer experience, and authentic heritage."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl glass-card border border-pink-200/80 space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center text-2xl font-bold">
                🌴
              </div>
              <h3 className="font-heading font-extrabold text-xl text-slate-900">
                Authentic Local Ingredients
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We pioneer Cambodia's first Palm Sugar Cheesecake using organic Kampong Speu palm sugar, directly supporting local artisan farming families.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-card border border-pink-200/80 space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl font-bold">
                ❄️
              </div>
              <h3 className="font-heading font-extrabold text-xl text-slate-900">
                Precision Cold-Chain Delivery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our custom refrigerated delivery network keeps every cake stored between 2°C to 4°C, preserving silky texture and rich flavor from oven to table.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-card border border-pink-200/80 space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl font-bold">
                ✨
              </div>
              <h3 className="font-heading font-extrabold text-xl text-slate-900">
                Girly & Aesthetic Branding
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designed with pastel pink aesthetics, luxury custom boxes, and cute presentation that turns every order into a memorable celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED FLAVORS SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Baking Menu"
            title="Our Signature Cheesecake Collection"
            subtitle="Explore handcrafted whole cakes, mini cheesecakes, and seasonal dessert boxes baked with passion."
          />

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            {[
              { id: "all", label: "All Slices 🍰" },
              { id: "signature", label: "Star Signatures 🌟" },
              { id: "classic", label: "Classic New York ✨" },
              { id: "seasonal", label: "Seasonal Specials 🍓" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs transition-all duration-300 ${
                  selectedCategory === tab.id
                    ? "bg-pink-500 text-white shadow-md shadow-pink-200 scale-105"
                    : "bg-white text-slate-600 border border-pink-200 hover:bg-pink-50 hover:text-pink-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Flavors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFlavors.map((flavor) => (
              <FlavorCard key={flavor.id} flavor={flavor} />
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM PHOTO STRIP GRID */}
      <section className="py-16 bg-pink-50/60 border-t border-pink-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="@FiveSlicesCambodia"
            title="Follow Our Sweet Journey on Instagram"
            subtitle="Tag your slice photos with #FiveSlicesCambodia to be featured on our cute customer wall!"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INSTAGRAM_PHOTOS.map((photo, i) => (
              <div
                key={i}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-100"
              >
                <Image
                  src={photo.imagePath}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-pink-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center text-white">
                  <Heart className="w-7 h-7 text-white fill-pink-500 animate-bounce mb-1" />
                  <span className="text-[10px] font-bold line-clamp-1">{photo.title}</span>
                  <span className="text-[9px] font-semibold text-pink-200 mt-0.5">
                    {photo.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS & TESTIMONIALS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Sweet Words"
            title="Loved by Cheesecake Enthusiasts"
            subtitle="See what our customers and strategic partners say about our handcrafted slices."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl glass-card border border-pink-200 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                "The Khmer Palm Sugar Cheesecake is out of this world! Perfect balance of smoky caramel sweetness and velvety cream cheese."
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-pink-100">
                <div className="w-9 h-9 rounded-full bg-pink-200 flex items-center justify-center font-bold text-pink-700 text-xs">
                  SL
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Sopheak Leakhena</h4>
                  <span className="text-[10px] text-pink-500">Phnom Penh Foodie</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-card border border-pink-200 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                "We tasted their 4 signatures during the Sihanoukville pitch meeting. Impressive portion consistency, beautiful bilingual packaging, and top quality!"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-pink-100">
                <div className="w-9 h-9 rounded-full bg-purple-200 flex items-center justify-center font-bold text-purple-700 text-xs">
                  DC
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Dara Chenda</h4>
                  <span className="text-[10px] text-purple-600">Coastal Hospitality Ventures</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-card border border-pink-200 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                "The packaging is so cute and aesthetic! Perfect gift box for birthdays, office treats, or weekend celebrations."
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-pink-100">
                <div className="w-9 h-9 rounded-full bg-rose-200 flex items-center justify-center font-bold text-rose-700 text-xs">
                  VN
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Vannary Neth</h4>
                  <span className="text-[10px] text-rose-500">Siem Reap Expat Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-extrabold uppercase tracking-wider">
            Ready for a Sweet Slice? 🍰
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight">
            Order Your Handcrafted Cheesecake Today!
          </h2>
          <p className="text-sm sm:text-base text-pink-100 max-w-xl mx-auto">
            Order online for fast cold-chain delivery in Phnom Penh or pre-order seasonal dessert boxes for your special occasions.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-pink-600 font-extrabold text-base shadow-xl hover:bg-pink-50 hover:scale-105 transition-all"
            >
              <ShoppingBag className="w-5 h-5" /> Place Pre-Order Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
