import React from "react";
import Metadata from "next";
import { TEAM_MEMBERS } from "@/lib/flavors-data";
import { TeamCard } from "@/components/TeamCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SprinklesBackground } from "@/components/SprinklesBackground";
import { Heart, Sparkles, Target, Compass, ShieldCheck, Globe, Handshake, Users, Award, Sprout } from "lucide-react";

export const metadata = {
  title: "About Us | Five Slices Cheesecake Co.",
  description: "Learn about Five Slices Cheesecake Co., our executive leadership team, company vision, mission, partners, and local CSR initiatives.",
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
            <span>Our Heritage & Brand Profile 👑</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
            Crafting the Future of <br />
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Cambodian Cheesecake
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            <strong>Five Slices Cheesecake Co.</strong> is built on a foundation of culinary craftsmanship, local agricultural pride, disciplined business expansion, and authentic storytelling.
          </p>
        </div>
      </section>

      {/* BUSINESS OBJECTIVE STATEMENT */}
      <section className="py-12 bg-white/80 backdrop-blur-md border-y border-pink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 border-2 border-pink-200 shadow-xl text-center space-y-6 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-pink-700 font-extrabold text-xs shadow-xs border border-pink-200">
              <Target className="w-4 h-4 text-pink-500" /> Primary Business Objective
            </div>
            
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-snug">
              "To build a stronger cheesecake brand by combining disciplined expansion with customer experience, product quality, technology, and authentic company stories."
            </h2>

            <div className="pt-4 border-t border-pink-200/70 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-semibold">
              <span className="flex items-center gap-1.5">✨ Disciplined Expansion</span>
              <span className="flex items-center gap-1.5">🍰 Premium Quality</span>
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
            title="Meet the 5 Visionary Leaders Behind Five Slices"
            subtitle="Our executive team combines strategy, market research, finance, logistics, and communications to scale Cambodia's premier cheesecake brand."
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
            badge="Brand Pillars"
            title="Vision, Mission & Core Values"
            subtitle="The guiding principles driving our product excellence and strategic growth."
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
                To become Cambodia's most beloved artisanal cheesecake brand and the regional benchmark for combining local ingredients with world-class bakery standards.
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
                To craft unforgettable dessert moments by elevating local Khmer flavors, maintaining cold-chain fresh quality, and building genuine relationships with every customer.
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
                  <strong>Artisanal Integrity:</strong> Uncompromising recipe standards.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <strong>Local Heritage:</strong> Celebrating Khmer Palm Sugar & fruits.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <strong>Disciplined Growth:</strong> Data-driven site selection & finances.
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
                While traditional bakeries rely entirely on imported vanilla extracts and standard toppings, Five Slices Cheesecake Co. transformed Cambodia's national treasure — <strong>Kampong Speu Palm Sugar</strong> — into a luxury caramel glaze.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-xs flex items-start gap-3">
                  <span className="text-xl">🌴</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Direct Farm Sourcing</h4>
                    <p className="text-[11px] text-slate-500">Sourced directly from palm sugar artisans in Kampong Speu province.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-xs flex items-start gap-3">
                  <span className="text-xl">🔥</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Slow Copper-Pot Caramelization</h4>
                    <p className="text-[11px] text-slate-500">Cooked over low heat for 4 hours to yield rich, smoky butterscotch notes.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-xs flex items-start gap-3">
                  <span className="text-xl">👑</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Bilingual & Luxury Packaging</h4>
                    <p className="text-[11px] text-slate-500">Pastel pink aesthetic boxes designed for high-end gifting and corporate events.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Graphic card showcase */}
            <div className="p-8 rounded-3xl bg-gradient-to-tr from-pink-100 via-rose-50 to-amber-100 border-2 border-pink-200 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-white text-pink-700">
                  🏆 Milestone Timeline
                </span>
                <span className="text-xs text-pink-500 font-bold">2024 – 2026</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-2xl bg-white/90 border border-pink-100">
                  <span className="font-bold text-pink-600 block mb-1">Feb 2026 • Sihanoukville</span>
                  <p className="text-slate-600">Secured non-binding $75,000 investment interest from Coastal Hospitality Ventures & kiosk pilot offer from Seaside Retail Partners.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/90 border border-pink-100">
                  <span className="font-bold text-pink-600 block mb-1">Mar 2026 • Siem Reap</span>
                  <p className="text-slate-600">Evaluated 5 expansion zones; selected Wat Bo Road (4.4/5) as Flagship location & Sala Kamreuk (4.2/5) as central cloud kitchen.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/90 border border-pink-100">
                  <span className="font-bold text-pink-600 block mb-1">Apr 2026 • Mondulkiri</span>
                  <p className="text-slate-600">Documented 18-year heritage interview with master chef Mr. Vichea Sok and archived original Palm Sugar recipe blueprints.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/90 border border-pink-100">
                  <span className="font-bold text-pink-600 block mb-1">May – Jun 2026 • Malaysia & Singapore</span>
                  <p className="text-slate-600">Attended KLCC AI summit for AI demand forecasting and Suntec Singapore for 90-day social media video strategy.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PARTNERS, INTERNATIONAL LINKAGES & CSR */}
      <section className="py-16 bg-white/80 border-t border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Strategic Partners */}
          <div>
            <SectionHeading
              badge="Strategic Ecosystem"
              title="Company Partners & Alliances"
              subtitle="Collaborating with premier hospitality and retail partners to expand our footprint."
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
                    Collaborating on hotel/restaurant dessert supply contracts and cold-chain equipment financing ($75,000 potential pipeline).
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
                    Partnering on a low-risk 3-month seaside retail kiosk pilot in Sihanoukville for direct consumer tasting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* International Linkages & CSR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* International Linkages */}
            <div className="p-8 rounded-3xl glass-card border border-pink-200 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
                <Globe className="w-4 h-4 text-sky-600" /> International Linkages
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                Global Knowledge Exchange
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We actively participate in international forums to bring world-class tech and marketing frameworks home:
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <strong>Malaysia AI Conference (KLCC):</strong> Phased AI demand forecasting & inventory alerts.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <strong>Singapore Marketing Summit (Suntec):</strong> 90-day short-form video & micro-influencer model.
                </li>
              </ul>
            </div>

            {/* CSR & Community Outreach */}
            <div className="p-8 rounded-3xl glass-card border border-pink-200 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <Sprout className="w-4 h-4 text-emerald-600" /> Outreach & CSR Initiative
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                Supporting Kampong Speu Farmers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Five Slices Cheesecake Co. is committed to fair-trade sourcing of organic palm sugar from smallholder farming cooperatives in Kampong Speu.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                5% of all proceeds from our Signature Khmer Palm Sugar Cheesecake are reinvested into local farming equipment and artisan training workshops.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
