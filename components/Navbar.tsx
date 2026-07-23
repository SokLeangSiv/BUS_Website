"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Heart, Menu, X, ShoppingBag, Cake, ChevronDown, FileText, Globe, Users, MapPin, Building2 } from "lucide-react";

interface NavbarProps {
  sweetRainEnabled?: boolean;
  onToggleSweetRain?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  sweetRainEnabled = true,
  onToggleSweetRain,
}) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Trip Reports", href: "/trip-reports" },
    { name: "Contact & Pre-Orders", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/85 border-b border-pink-100/80 shadow-xs transition-all duration-300">
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
              Handcrafted Cheesecake Boutique • Est. 2024
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-pink-50/70 p-1.5 rounded-full border border-pink-100 shadow-inner">
          <Link
            href="/"
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              pathname === "/" ? "bg-white text-pink-600 shadow-sm" : "text-slate-600 hover:text-pink-600 hover:bg-white/50"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              pathname === "/about" ? "bg-white text-pink-600 shadow-sm" : "text-slate-600 hover:text-pink-600 hover:bg-white/50"
            }`}
          >
            About Us
          </Link>

          {/* Quick Access Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1.5 transition-all ${
                dropdownOpen || pathname === "/trip-reports"
                  ? "bg-white text-pink-600 shadow-sm"
                  : "text-slate-600 hover:text-pink-600 hover:bg-white/50"
              }`}
            >
              <FileText className="w-4 h-4 text-pink-500" />
              <span>Explore Reports & Partners</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-pink-600" : "text-slate-400"}`} />
            </button>

            {/* Dropdown Menu Panel */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-pink-100 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200 space-y-1">
                <div className="px-3 py-1.5 text-[11px] font-extrabold text-pink-600 uppercase tracking-wider">
                  📋 Executive Reports
                </div>

                <Link
                  href="/trip-reports"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-pink-50 text-xs font-bold text-slate-800 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-pink-100 text-pink-600">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-heading">All 5 Fieldwork Reports</span>
                    <span className="text-[10px] text-slate-500 font-normal">$14,345 Budget Documentation</span>
                  </div>
                </Link>

                <Link
                  href="/trip-reports#siem-reap"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-pink-50 text-xs font-bold text-slate-800 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-amber-100 text-amber-600">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-heading">Siem Reap Flagship Scorecard</span>
                    <span className="text-[10px] text-slate-500 font-normal">Wat Bo Road Score 4.4/5</span>
                  </div>
                </Link>

                <div className="pt-2 mt-2 border-t border-pink-100 px-3 py-1 text-[11px] font-extrabold text-pink-600 uppercase tracking-wider">
                  🤝 Ecosystem & Team
                </div>

                <Link
                  href="/about#partners"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-sky-50 text-xs font-bold text-slate-800 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-sky-100 text-sky-600">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-heading">International & Local Partners</span>
                    <span className="text-[10px] text-slate-500 font-normal">NZ Dairy, Suntec, KLCC, Grab, ABA</span>
                  </div>
                </Link>

                <Link
                  href="/about#team"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-rose-50 text-xs font-bold text-slate-800 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-rose-100 text-rose-600">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-heading">Executive Leadership (5 Leaders)</span>
                    <span className="text-[10px] text-slate-500 font-normal">Leangsiv, Yinchhay, Phearamoneath...</span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              pathname === "/contact" ? "bg-white text-pink-600 shadow-sm" : "text-slate-600 hover:text-pink-600 hover:bg-white/50"
            }`}
          >
            Contact & Pre-Orders
          </Link>
        </nav>

        {/* Right CTA Actions Bar */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Sweet Rain Toggle Button */}
          {onToggleSweetRain && (
            <button
              onClick={onToggleSweetRain}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-extrabold transition-all duration-300 border ${
                sweetRainEnabled
                  ? "bg-pink-100 text-pink-700 border-pink-300 hover:bg-pink-200 shadow-2xs"
                  : "bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200"
              }`}
              title="Toggle Sweet Rain Animation"
            >
              <span>🍰</span>
              <span>Rain: {sweetRainEnabled ? "ON ✨" : "OFF"}</span>
            </button>
          )}

          {/* Order Slices Button */}
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
        <div className="md:hidden flex items-center gap-2">
          {onToggleSweetRain && (
            <button
              onClick={onToggleSweetRain}
              className="p-2 rounded-xl bg-pink-100 text-pink-700 text-xs font-bold"
            >
              🍰 {sweetRainEnabled ? "ON" : "OFF"}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-pink-100/70 text-pink-600 hover:bg-pink-200 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
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

            {/* Quick Links inside Mobile Menu */}
            <div className="pt-3 border-t border-pink-100 space-y-1">
              <span className="text-[11px] font-extrabold text-pink-600 uppercase tracking-wider block px-2">
                Quick Access
              </span>
              <Link
                href="/trip-reports"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-pink-50"
              >
                📋 Business Trip Reports ($14,345)
              </Link>
              <Link
                href="/about#partners"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-pink-50"
              >
                🌐 Corporate Partners & Alliances
              </Link>
            </div>

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
