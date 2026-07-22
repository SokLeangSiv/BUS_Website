"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Heart, Menu, X, ShoppingBag, Cake } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Trip Reports", href: "/trip-reports" },
    { name: "Contact & Pre-Orders", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-pink-100/60 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-400 to-amber-300 p-0.5 shadow-md shadow-pink-200 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <Cake className="w-6 h-6 text-pink-500 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-xl tracking-tight text-pink-600 group-hover:text-pink-700 transition-colors">
                Five Slices
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 font-semibold flex items-center gap-1 border border-pink-200">
                <Heart className="w-3 h-3 fill-pink-500 text-pink-500 animate-pulse" /> Co.
              </span>
            </div>
            <p className="text-[11px] text-pink-400 font-medium tracking-wide">
              Handcrafted Cheesecake Boutique
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-pink-50/70 p-1.5 rounded-full border border-pink-100 shadow-inner">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-white text-pink-600 shadow-md shadow-pink-100"
                    : "text-slate-600 hover:text-pink-600 hover:bg-white/50"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-pink-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-bold text-sm shadow-md shadow-pink-200 hover:shadow-lg hover:shadow-pink-300 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Order Slices
            </span>
            <Sparkles className="w-4 h-4 text-yellow-200 animate-sparkle" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-pink-100/70 text-pink-600 hover:bg-pink-200 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-pink-100 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-base font-bold flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-pink-100 text-pink-700"
                      : "text-slate-700 hover:bg-pink-50 hover:text-pink-600"
                  }`}
                >
                  {link.name}
                  {isActive && <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />}
                </Link>
              );
            })}
            <div className="mt-4 pt-3 border-t border-pink-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold shadow-md shadow-pink-200"
              >
                <ShoppingBag className="w-5 h-5" /> Order Slices Now 🍰
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
