import React from "react";
import Metadata from "next";
import { TEAM_MEMBERS } from "@/lib/flavors-data";
import { TeamCard } from "@/components/TeamCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SprinklesBackground } from "@/components/SprinklesBackground";
import { Heart, Target, Compass, ShieldCheck, Globe, Handshake, Sprout, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us | Five Slices Cheesecake Co.",
  description: "Learn about Five Slices Cheesecake Co., our leadership team, company vision, strategic partners, and local palm sugar farmer CSR initiatives.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pb-20">
      <SprinklesBackground />

      {/* HEADER HERO */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold shadow-xs">
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>Our Company Profile & Story 👑</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
            Building Cambodia’s Premier <br />
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Cheesecake Boutique
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            At <strong>Five Slices Cheesecake Co.</strong>, we blend artisanal baking with local ingredient pride, disciplined expansion planning, and warm customer care.
          </p>
        </div>
      </section>

      {/* BUSINESS OBJECTIVE STATEMENT */}
      <section className="py-12 bg-white/80 backdrop-blur-md border-y border-pink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 border-2 border-pink-200 shadow-xl text-center space-y-6 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-pink-700 font-extrabold text-xs shadow-xs border border-pink-200">
              <Target className="w-4 h-4 text-pink-500" /> Business Objective
            </div>
            
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-snug">
              "To build a stronger cheesecake brand by combining disciplined expansion with customer experience, product quality, technology, and authentic company stories."
            </h2>

            <div className="pt-4 border-t border-pink-200/70 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-semibold">
              <span className="flex items-center gap-1.5">✨ Disciplined Expansion</span>
              <span className="flex items-center gap-1.5">🍰 Product Quality</span>
              <span className="flex items-center gap-1.5">🤖 Technology & AI</span>
              <span className="flex items-center gap-1.5">📖 Authentic Storytelling</span>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Leadership Team"
            title="The 5 Leaders Behind Five Slices"
            subtitle="Our executive team coordinates strategy, market research, financial planning, logistics, and communications to scale our bakery brand."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* VISION, MISSION & CORE VALUES */}
      <section className="py-16 bg-pink-50/70 border-y border-pink-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Brand Framework"
            title="Vision, Mission & Core Values"
            subtitle="Principles guiding our daily baking, customer experience, and location expansion."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-3xl glass-card border border-pink-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                Our Vision
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To become Cambodia's favorite handcrafted cheesecake boutique, setting benchmark standards for bakery quality and local ingredient innovation.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-3xl glass-card border border-pink-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                Our Mission
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To bake memorable desserts by pairing organic Khmer ingredients with reliable cold-chain delivery and friendly, personal service.
              </p>
            </div>

            {/* Core Values */}
            <div className="p-8 rounded-3xl glass-card border border-pink-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                Core Values
              </h3>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <strong>Craftsmanship:</strong> Precise baking temperatures and recipe discipline.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <strong>Local Ingredients:</strong> Kampong Speu organic palm sugar.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <strong>Measured Growth:</strong> Data-backed location selection and budgeting.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US UNIQUE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 font-extrabold text-xs border border-amber-200">
                <Sparkles className="w-4 h-4 text-amber-600" /> What Makes Us Unique
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Pioneering the Khmer Palm Sugar Cheesecake
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rather than relying solely on standard imported toppings, Five Slices Cheesecake Co. developed a signature glaze using organic Kampong Speu palm sugar.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-xs flex items-start gap-3">
                  <span className="text-xl">🌴</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Farm Direct Sourcing</h4>
                    <p className="text-[11px] text-slate-500">Purchased directly from Kampong Speu farming cooperatives.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-xs flex items-start gap-3">
                  <span className="text-xl">🔥</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Slow Copper Caramelization</h4>
                    <p className="text-[11px] text-slate-500">Caramelized gently over low heat for warm butterscotch undertones.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-xs flex items-start gap-3">
                  <span className="text-xl">👑</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Pastel Gift Boxes</h4>
                    <p className="text-[11px] text-slate-500">Bilingual Khmer-English gift packaging designed for gifts and celebrations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline milestone */}
            <div className="p-8 rounded-3xl bg-gradient-to-tr from-pink-100 via-rose-50 to-amber-100 border-2 border-pink-200 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-white text-pink-700">
                  🏆 Project Timeline
                </span>
                <span className="text-xs text-pink-500 font-bold">2026 Milestones</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-2xl bg-white/90 border border-pink-100">
                  <span className="font-bold text-pink-600 block mb-1">Feb 2026 • Sihanoukville</span>
                  <p className="text-slate-600">Met investors Dara Chenda ($75k non-binding interest) and Lim Vannak (3-month kiosk pilot offer).</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/90 border border-pink-100">
                  <span className="font-bold text-pink-600 block mb-1">Mar 2026 • Siem Reap</span>
                  <p className="text-slate-600">Evaluated 5 sites; recommended Wat Bo Road (4.4/5) for flagship boutique and Sala Kamreuk (4.2/5) for cloud kitchen.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/90 border border-pink-100">
                  <span className="font-bold text-pink-600 block mb-1">Apr 2026 • Mondulkiri</span>
                  <p className="text-slate-600">Documented 18-year heritage interview with retired Master Baker Mr. Vichea Sok in Sen Monorom.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/90 border border-pink-100">
                  <span className="font-bold text-pink-600 block mb-1">May – Jun 2026 • Malaysia & Singapore</span>
                  <p className="text-slate-600">Attended KLCC AI conference for demand forecasting and Suntec Singapore for short-form video strategy.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PARTNERS & CSR */}
      <section className="py-16 bg-white/80 border-t border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Strategic Partners */}
          <div>
            <SectionHeading
              badge="Business Ecosystem"
              title="Partners & Alliances"
              subtitle="Working alongside retail and hospitality partners to test new kiosk and supply formats."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-3xl glass-card border border-pink-200 flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-pink-100 text-pink-600 shrink-0">
                  <Handshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-lg text-slate-900">
                    Coastal Hospitality Ventures
                  </h4>
                  <p className="text-xs text-pink-600 font-bold mb-1">Lead Partner: Ms. Dara Chenda</p>
                  <p className="text-xs text-slate-600">
                    Exploring hotel/restaurant cheesecake supply contracts and equipment chiller investment ($75,000 potential pipeline).
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl glass-card border border-pink-200 flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-100 text-purple-600 shrink-0">
                  <Handshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-lg text-slate-900">
                    Seaside Retail Partners
                  </h4>
                  <p className="text-xs text-purple-600 font-bold mb-1">Lead Partner: Mr. Lim Vannak</p>
                  <p className="text-xs text-slate-600">
                    Partnering on a 3-month pop-up kiosk pilot at Ochheuteal Beach Road to test direct retail sales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* International Linkages & CSR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl glass-card border border-pink-200 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
                <Globe className="w-4 h-4 text-sky-600" /> International Research
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                International Exchanges
              </h3>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <strong>Malaysia AI Conference (KLCC):</strong> Testing weekly demand forecasting to reduce bakery waste.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <strong>Singapore Marketing Summit (Suntec):</strong> Designing 90-day short video campaigns with local micro-influencers.
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl glass-card border border-pink-200 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <Sprout className="w-4 h-4 text-emerald-600" /> Farmer Outreach & CSR
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                Supporting Palm Sugar Farmers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We buy organic palm sugar directly from smallholder farmers in Kampong Speu province at fair market premiums.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
