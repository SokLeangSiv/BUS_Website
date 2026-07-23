"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, Sparkles, Send, Cake, MapPin, Phone, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 border-t border-pink-200/60 pt-16 pb-12 overflow-hidden">
      
      {/* Decorative top wave/sparkle accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-amber-300 p-0.5 shadow-md">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <Cake className="w-5 h-5 text-pink-600" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-2xl text-pink-700">
                Five Slices
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cambodia’s premier handcrafted cheesecake boutique. Combining authentic local ingredients like Kampong Speu Palm Sugar with artisanal bakery craftsmanship.
            </p>
            <div className="flex items-center gap-3 text-pink-600 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white shadow-xs border border-pink-200 hover:scale-110 hover:text-pink-700 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white shadow-xs border border-pink-200 hover:scale-110 hover:text-pink-700 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <span className="text-xs font-semibold px-3 py-1 bg-pink-100/80 rounded-full border border-pink-200 text-pink-700 flex items-center gap-1">
                <Heart className="w-3 h-3 fill-pink-500 text-pink-500" /> Made in Cambodia
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-pink-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-500" /> Quick Slices
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-600 hover:text-pink-600 transition-colors flex items-center gap-2">
                  <span>🍰</span> Home & Signature Flavors
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-pink-600 transition-colors flex items-center gap-2">
                  <span>👑</span> Our Story & Team Leaders
                </Link>
              </li>
              <li>
                <Link href="/trip-reports" className="text-slate-600 hover:text-pink-600 transition-colors flex items-center gap-2">
                  <span>✈️</span> Executive Trip Reports
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-pink-600 transition-colors flex items-center gap-2">
                  <span>💌</span> Pre-Order & Inquiry Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Boutique Contacts */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-pink-800 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-pink-500" /> Contact HQ
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>No. 18, Norodom Boulevard, Daun Penh, Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-500 shrink-0" />
                <span>+855 (0) 23 888 555</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pink-500 shrink-0" />
                <span>hello@fiveslicescheesecake.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Sweet Newsletter */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-pink-800 flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> Sweet Club Updates
            </h3>
            <p className="text-xs text-slate-600">
              Get notified when seasonal boxes and new Khmer Palm Sugar specials drop!
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  required
                  className="w-full px-4 py-2.5 text-xs rounded-2xl bg-white border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-slate-700 placeholder-slate-400 shadow-xs"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 px-3 py-1.5 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold transition-colors flex items-center gap-1 shadow-xs"
                >
                  <Send className="w-3 h-3" /> Join
                </button>
              </div>
              {subscribed && (
                <p className="text-xs font-bold text-emerald-600 animate-in fade-in flex items-center gap-1">
                  ✨ Welcome to the Sweet Club!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-pink-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2024–2026 Five Slices Cheesecake Co. (Established 2024). All rights reserved.</p>
          <div className="flex items-center gap-2 font-medium">
            <span>Led with</span>
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-bounce" />
            <span>by <strong>Leangsiv Sok (Team Leader)</strong>, Yinchhay, Phearamoneath, Chanreach & Mengsreang</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
