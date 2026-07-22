"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { SprinklesBackground } from "@/components/SprinklesBackground";
import { Heart, Sparkles, Send, MapPin, Phone, Mail, Clock, ShoppingBag, CheckCircle, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",   
    flavor: "khmer-palm-sugar",
    orderType: "slice-box",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pre-order submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen pb-24">
      <SprinklesBackground />

      {/* HEADER HERO */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold shadow-xs">
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>We'd Love to Hear From You 💌</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
            Get in Touch & <br />
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Pre-Order Fresh Slices
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a question about our signature Khmer Palm Sugar Cheesecake, corporate gift boxes, or wholesale hotel supply? Send us a message below!
          </p>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-card border border-pink-200 p-8 sm:p-10 shadow-xl space-y-6">
              
              <div className="space-y-2">
                <h2 className="font-heading font-extrabold text-2xl text-slate-900 flex items-center gap-2">
                  <ShoppingBag className="w-6 h-6 text-pink-500" /> Pre-Order & Inquiry Form
                </h2>
                <p className="text-xs text-slate-600">
                  Fill out the form below. Our team will respond within 1–2 hours to confirm your order details and delivery window.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-pink-50 border-2 border-pink-300 text-center space-y-4 animate-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-pink-900">
                    Thank You, {formData.name || "Sweet Friend"}! 🎉
                  </h3>
                  <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed">
                    Your pre-order inquiry for the <strong>{formData.flavor}</strong> has been received! Our team will contact you via phone/email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-pink-500 text-white font-bold text-xs shadow-md hover:bg-pink-600 transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sopheak Som"
                        className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-slate-800"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@example.com"
                        className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Phone / Telegram Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +855 12 345 678"
                        className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-slate-800"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Preferred Date</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Cheesecake Flavor Selection</label>
                      <select
                        value={formData.flavor}
                        onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
                        className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-slate-800"
                      >
                        <option value="Khmer Palm Sugar Cheesecake">🌟 Khmer Palm Sugar (Signature)</option>
                        <option value="Mango Passionfruit Swirl">🥭 Mango Passionfruit Swirl</option>
                        <option value="Classic New York Velvet">✨ Classic New York Velvet</option>
                        <option value="Mondulkiri Espresso Chocolate">☕ Mondulkiri Espresso Chocolate</option>
                        <option value="Seasonal Strawberry Blush">🍓 Seasonal Strawberry Blush</option>
                        <option value="Ceremonial Matcha & Pistachio">🍵 Ceremonial Matcha & Pistachio</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Inquiry / Order Type</label>
                      <select
                        value={formData.orderType}
                        onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
                        className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-slate-800"
                      >
                        <option value="Individual Slice Box">Slice Box Pre-Order</option>
                        <option value="Whole Cheesecake (8 inch)">Whole Cheesecake (8 inch)</option>
                        <option value="Gift Box / Special Occasion">Pastel Gift Box Set</option>
                        <option value="Wholesale Hotel / Restaurant">Wholesale / Hotel Contract Inquiry</option>
                        <option value="Sihanoukville Kiosk Pilot">Sihanoukville Kiosk Pilot Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Special Notes or Personal Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify slice quantities, custom messages on cake, or dietary requirements..."
                      className="w-full px-4 py-3 text-xs rounded-2xl bg-white border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-slate-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-extrabold text-sm shadow-lg shadow-pink-200 hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Order Inquiry
                  </button>
                </form>
              )}

            </div>
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card */}
            <div className="rounded-3xl glass-card border border-pink-200 p-8 shadow-lg space-y-6">
              <h3 className="font-heading font-extrabold text-xl text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-pink-500" /> Five Slices HQ & Flagship
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-pink-100">
                  <MapPin className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Phnom Penh Boutique:</strong>
                    <span>No. 18, Norodom Boulevard, Daun Penh, Phnom Penh, Cambodia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-pink-100">
                  <Phone className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Phone & Telegram:</strong>
                    <span>+855 (0) 23 888 555 / @FiveSlicesBot</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-pink-100">
                  <Mail className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Email Enquiries:</strong>
                    <span>hello@fiveslicescheesecake.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-pink-100">
                  <Clock className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Opening Hours:</strong>
                    <span>Monday – Sunday: 8:00 AM – 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Graphic Mockup */}
            <div className="rounded-3xl bg-gradient-to-tr from-pink-200 via-rose-100 to-amber-100 border-2 border-pink-200 p-8 shadow-lg text-center space-y-3 relative overflow-hidden">
              <div className="text-4xl animate-bounce">🗺️</div>
              <h4 className="font-heading font-extrabold text-lg text-pink-900">
                Phnom Penh & Siem Reap Branches
              </h4>
              <p className="text-xs text-pink-800 leading-relaxed">
                Cold-chain delivery available across Phnom Penh. Siem Reap Flagship opening late 2026 on Wat Bo Road!
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
