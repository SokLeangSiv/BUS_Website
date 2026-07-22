"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FEATURED_FLAVORS, INSTAGRAM_PHOTOS, Flavor } from "@/lib/flavors-data";
import { FlavorCard } from "@/components/FlavorCard";
import { OrderDrawer } from "@/components/OrderDrawer";
import { SectionHeading } from "@/components/SectionHeading";
import { SprinklesBackground } from "@/components/SprinklesBackground";
import { Sparkles, Heart, ArrowRight, ShoppingBag, Star, CheckCircle, Search } from "lucide-react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "signature" | "classic" | "seasonal">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFlavorForDrawer, setActiveFlavorForDrawer] = useState<Flavor | null>(null);

  const filteredFlavors = FEATURED_FLAVORS.filter((f) => {
    const matchesCategory = selectedCategory === "all" || f.category === selectedCategory;
    const matchesSearch =
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
                <span>Handcrafted Daily in Phnom Penh ✨</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15]">
                Fresh Artisan <br />
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Cambodian Cheesecake
                </span>
                <br /> Baked with Love.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Welcome to <strong>Five Slices Cheesecake Co.</strong> We pair rich cream cheese with authentic local ingredients — like organic Kampong Speu palm sugar and sun-ripened local fruits — baked fresh every morning.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setActiveFlavorForDrawer(FEATURED_FLAVORS[0])}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-extrabold text-base shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <ShoppingBag className="w-5 h-5" /> Order Slices Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

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
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Organic Kampong Speu Sugar
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-pink-500" /> Baked Fresh Each Morning
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-500" /> Chilled Delivery Network
                </div>
              </div>

            </div>

            {/* Right Hero Graphic Showcase */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div
                onClick={() => setActiveFlavorForDrawer(FEATURED_FLAVORS[0])}
                className="relative w-full max-w-md aspect-square rounded-[40px] overflow-hidden shadow-2xl shadow-pink-300/60 border-4 border-white transform hover:rotate-1 transition-transform duration-500 group cursor-pointer"
              >
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
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> #1 Customer Bestseller
                </div>

                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md text-xs font-extrabold flex items-center gap-1.5 animate-float-slow z-10">
                  <Heart className="w-4 h-4 fill-white text-white" /> Handcrafted Love
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
                    Slow-caramelized organic Kampong Speu palm sugar glaze
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRAND VALUES */}
      <section className="py-16 bg-white/80 backdrop-blur-md border-y border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Artisanal Bakery Standards"
            title="What Sets Five Slices Apart"
            subtitle="We blend Cambodian ingredient heritage with modern bakery technique, disciplined logistics, and warm hospitality."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl glass-card border border-pink-200/80 space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center text-2xl font-bold">
                🌴
              </div>
              <h3 className="font-heading font-extrabold text-xl text-slate-900">
                Direct Farm Palm Sugar
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We source organic palm sugar directly from smallholder farming families in Kampong Speu, creating a rich butterscotch caramel flavor.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-card border border-pink-200/80 space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl font-bold">
                ❄️
              </div>
              <h3 className="font-heading font-extrabold text-xl text-slate-900">
                Cold-Chain Delivery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our cakes travel in temperature-regulated cold boxes (2°C – 4°C) to keep every slice velvety and rich from our oven to your door.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-card border border-pink-200/80 space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl font-bold">
                ✨
              </div>
              <h3 className="font-heading font-extrabold text-xl text-slate-900">
                Pastel Gift Packaging
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every order comes packaged in custom pastel pink boxes with gold accents, perfect for birthdays, office treats, or celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED FLAVORS SECTION WITH INTERACTIVE SEARCH */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Baking Menu"
            title="Explore Our Fresh Cheesecake Slices"
            subtitle="Filter by category or search your favorite ingredients below. Click any slice to customize your order."
          />

          {/* Search & Filter Control Bar */}
          <div className="max-w-3xl mx-auto mb-10 space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search flavors, e.g. 'Palm Sugar', 'Mango', 'Espresso'..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-pink-200 shadow-sm text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-3 text-xs font-bold text-pink-500 hover:text-pink-700"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center justify-center gap-2 flex-wrap">
              {[
                { id: "all", label: "All Slices 🍰" },
                { id: "signature", label: "Star Signatures 🌟" },
                { id: "classic", label: "Classic & Espresso ✨" },
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
          </div>

          {/* Flavors Grid */}
          {filteredFlavors.length === 0 ? (
            <div className="text-center py-12 bg-white/60 rounded-3xl border border-pink-100 max-w-md mx-auto">
              <span className="text-3xl block mb-2">🔍</span>
              <p className="text-sm font-bold text-slate-700">No flavors found matching "{searchQuery}"</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-3 text-xs font-extrabold text-pink-600 underline"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFlavors.map((flavor) => (
                <FlavorCard
                  key={flavor.id}
                  flavor={flavor}
                  onSelectFlavor={(f) => setActiveFlavorForDrawer(f)}
                />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* INSTAGRAM PHOTO STRIP GRID */}
      <section className="py-16 bg-pink-50/60 border-t border-pink-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="@FiveSlicesCambodia"
            title="Follow Our Daily Bakes on Instagram"
            subtitle="Tag your cheesecake moments with #FiveSlicesCambodia to join our community wall!"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INSTAGRAM_PHOTOS.map((photo, i) => (
              <div
                key={i}
                onClick={() => setActiveFlavorForDrawer(FEATURED_FLAVORS[i % FEATURED_FLAVORS.length])}
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

      {/* REVIEWS & TESTIMONIALS (JONATHAN MACARAEG, RONALDO, MESSI) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Customer Stories"
            title="What Our VIP Customers & Icons Say"
            subtitle="Real feedback from dessert connoisseurs, world icons, and cheesecake enthusiasts."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* TESTIMONIAL 1: JONATHAN MACARAEG */}
            <div className="p-6 sm:p-7 rounded-3xl glass-card border-2 border-pink-400 bg-gradient-to-b from-white via-pink-50/60 to-rose-50/40 shadow-xl shadow-pink-200/50 space-y-5 transform hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-pink-500 text-white text-[10px] font-extrabold uppercase shadow-xs">
                    🌟 Featured Review
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed font-medium">
                  "Five Slices Cheesecake Co. delivers outstanding quality. The Khmer Palm Sugar Cheesecake is a masterclass in culinary balance — velvety cream cheese paired with smoky, authentic local palm sugar caramel!"
                </p>
              </div>

              {/* Large Prominent Portrait Header */}
              <div className="flex items-center gap-4 pt-4 border-t border-pink-200">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-pink-400 shadow-md shrink-0 bg-pink-100">
                  <Image
                    src="/images/Mr-Jonathan-scaled.jpg"
                    alt="Jonathan MACARAEG"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">Jonathan MACARAEG</h4>
                  <span className="text-xs font-bold text-pink-600 block mt-0.5">
                    Paragon International University
                  </span>
                </div>
              </div>
            </div>

            {/* TESTIMONIAL 2: CRISTIANO RONALDO */}
            <div className="p-6 sm:p-7 rounded-3xl glass-card border border-pink-200 space-y-5 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed font-medium">
                  "SIUUU! Five Slices Cheesecake Co. makes the best post-match reward! Incredible texture, premium quality ingredients, and unbelievable flavor!"
                </p>
              </div>

              {/* Large Prominent Portrait Header */}
              <div className="flex items-center gap-4 pt-4 border-t border-pink-100">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-purple-300 shadow-md shrink-0 bg-purple-100">
                  <Image
                    src="/images/ronaldo.png"
                    alt="Cristiano Ronaldo"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">Cristiano Ronaldo</h4>
                  <span className="text-xs font-bold text-purple-600 block mt-0.5">
                    Global Sports Icon & Cheesecake Fan
                  </span>
                </div>
              </div>
            </div>

            {/* TESTIMONIAL 3: LIONEL MESSI */}
            <div className="p-6 sm:p-7 rounded-3xl glass-card border border-pink-200 space-y-5 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed font-medium">
                  "Order Five Slices! The Khmer Palm Sugar Cheesecake is absolute perfection. My family and I love every single slice!"
                </p>
              </div>

              {/* Large Prominent Portrait Header */}
              <div className="flex items-center gap-4 pt-4 border-t border-pink-100">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-sky-300 shadow-md shrink-0 bg-sky-100">
                  <Image
                    src="/images/messi.png"
                    alt="Lionel Messi"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">Lionel Messi</h4>
                  <span className="text-xs font-bold text-sky-600 block mt-0.5">
                    World Champion & Dessert Connoisseur
                  </span>
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
          <p className="text-sm sm:text-base text-pink-100 max-w-xl mx-auto font-medium">
            Order online for fast cold-chain delivery in Phnom Penh or pre-order seasonal gift boxes for your special events.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveFlavorForDrawer(FEATURED_FLAVORS[0])}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-pink-600 font-extrabold text-base shadow-xl hover:bg-pink-50 hover:scale-105 transition-all"
            >
              <ShoppingBag className="w-5 h-5" /> Pre-Order Signature Slices
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Order Drawer Modal */}
      <OrderDrawer
        flavor={activeFlavorForDrawer}
        onClose={() => setActiveFlavorForDrawer(null)}
      />

    </div>
  );
}
