"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sparkles, Heart, Menu, X, ShoppingBag, Cake, ChevronDown, FileText, Globe, Users, MapPin, Handshake, Award } from "lucide-react";

interface NavbarProps {
  sweetRainEnabled?: boolean;
  onToggleSweetRain?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  sweetRainEnabled = true,
  onToggleSweetRain,
}) => {
  const pathname = usePathname();
  const router = useRouter();
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

  // Smart section scroll handler
  const handleSectionClick = (e: React.MouseEvent, pagePath: string, elementId: string) => {
    e.preventDefault();
    setDropdownOpen(false);
    setMobileMenuOpen(false);

    if (pathname === pagePath) {
      // On same page -> smooth scroll immediately
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On different page -> navigate to page with hash anchor
      router.push(`${pagePath}#${elementId}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-pink-100/90 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-400 to-amber-300 p-0.5 shadow-md shadow-pink-200 group-hover:scale-105 transition-transform duration-300 shrink-0">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <Cake className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="shrink-0">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-pink-600 group-hover:text-pink-700 transition-colors">
                Five Slices
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold flex items-center gap-1 border border-pink-200">
                <Heart className="w-3 h-3 fill-pink-500 text-pink-500 animate-pulse" /> Co.
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-pink-400 font-semibold tracking-wide whitespace-nowrap">
              Handcrafted Cheesecake Boutique • Est. 2024
            </p>
          </div>
        </Link>

        {/* Center Desktop Navigation (Clean & Un-wrapped) */}
        <nav className="hidden lg:flex items-center gap-1 bg-pink-50/80 p-1.5 rounded-full border border-pink-100/90 shadow-inner shrink-0">
          <Link
            href="/"
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all ${
              pathname === "/" ? "bg-white text-pink-600 shadow-sm" : "text-slate-600 hover:text-pink-600 hover:bg-white/60"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all ${
              pathname === "/about" ? "bg-white text-pink-600 shadow-sm" : "text-slate-600 hover:text-pink-600 hover:bg-white/60"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/trip-reports"
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap flex items-center gap-1.5 transition-all ${
              pathname === "/trip-reports" ? "bg-white text-pink-600 shadow-sm ring-1 ring-pink-200" : "text-slate-600 hover:text-pink-600 hover:bg-white/60"
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-pink-500 shrink-0" />
            <span>Trip Reports</span>
          </Link>

          {/* Dropdown Menu for Partners & Quick Sections */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                dropdownOpen ? "bg-white text-pink-600 shadow-sm" : "text-slate-600 hover:text-pink-600 hover:bg-white/60"
              }`}
            >
              <Handshake className="w-3.5 h-3.5 text-pink-500 shrink-0" />
              <span>Partners ▾</span>
            </button>

            {/* Dropdown Menu Panel */}
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-pink-100 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200 space-y-1">
                
                <div className="px-3 py-1.5 text-[11px] font-extrabold text-pink-600 uppercase tracking-wider">
                  🌐 Business Alliances
                </div>

                <a
                  href="/about#international-partners"
                  onClick={(e) => handleSectionClick(e, "/about", "international-partners")}
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-sky-50 text-xs font-bold text-slate-800 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-sky-100 text-sky-600 shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-heading text-sm text-sky-900">🌐 International Partners</span>
                    <span className="text-[10px] text-slate-500 font-normal">Anchor Dairy (NZ), Suntec (SG), KLCC (MY)</span>
                  </div>
                </a>

                <a
                  href="/about#local-partners"
                  onClick={(e) => handleSectionClick(e, "/about", "local-partners")}
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-pink-50 text-xs font-bold text-slate-800 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-pink-100 text-pink-600 shrink-0">
                    <span>🇰🇭</span>
                  </div>
                  <div>
                    <span className="block font-heading text-sm text-pink-900">🇰🇭 Cambodian Corporate Alliances</span>
                    <span className="text-[10px] text-slate-500 font-normal">Grab, Foodpanda, ABA KHQR, Chip Mong</span>
                  </div>
                </a>

                <div className="pt-2 mt-2 border-t border-pink-100 px-3 py-1 text-[11px] font-extrabold text-pink-600 uppercase tracking-wider">
                  👑 Company & Leadership
                </div>

                <a
                  href="/about#team"
                  onClick={(e) => handleSectionClick(e, "/about", "team")}
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-rose-50 text-xs font-bold text-slate-800 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-rose-100 text-rose-600 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-heading text-sm">Executive Leadership Team</span>
                    <span className="text-[10px] text-slate-500 font-normal">Leangsiv Sok (Team Leader) &amp; Executives</span>
                  </div>
                </a>

                <a
                  href="/about#achievements"
                  onClick={(e) => handleSectionClick(e, "/about", "achievements")}
                  className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-amber-50 text-xs font-bold text-slate-800 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-amber-100 text-amber-600 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-heading text-sm">Company Achievements</span>
                    <span className="text-[10px] text-slate-500 font-normal">$75k Pipeline • 100% Organic Sourcing</span>
                  </div>
                </a>

              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all ${
              pathname === "/contact" ? "bg-white text-pink-600 shadow-sm" : "text-slate-600 hover:text-pink-600 hover:bg-white/60"
            }`}
          >
            Contact & Pre-Orders
          </Link>
        </nav>

        {/* Right CTA Actions Bar */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          {onToggleSweetRain && (
            <button
              onClick={onToggleSweetRain}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-extrabold whitespace-nowrap transition-all duration-300 border shadow-2xs ${
                sweetRainEnabled
                  ? "bg-pink-100 text-pink-800 border-pink-300 hover:bg-pink-200 shadow-pink-100"
                  : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
              }`}
              title="Toggle Sweet Rain Animation"
            >
              <span className="text-sm">🍰</span>
              <span>Rain: {sweetRainEnabled ? "ON ✨" : "OFF"}</span>
            </button>
          )}

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-pink-200 hover:shadow-lg hover:shadow-pink-300 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden shrink-0 border border-white/40 whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
              <ShoppingBag className="w-4 h-4" /> Order Slices
            </span>
            <Sparkles className="w-3.5 h-3.5 text-yellow-200 animate-sparkle shrink-0" />
          </Link>
        </div>

        {/* Mobile & Tablet Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          {onToggleSweetRain && (
            <button
              onClick={onToggleSweetRain}
              className="px-3 py-2 rounded-xl bg-pink-100 text-pink-700 text-xs font-extrabold flex items-center gap-1 border border-pink-200"
            >
              🍰 {sweetRainEnabled ? "ON" : "OFF"}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-2xl bg-pink-100/80 text-pink-600 hover:bg-pink-200 transition-colors border border-pink-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-pink-100 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-2xl text-base font-bold flex items-center justify-between transition-colors ${
                pathname === "/" ? "bg-pink-100 text-pink-700" : "text-slate-700 hover:bg-pink-50"
              }`}
            >
              <span>Home</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-2xl text-base font-bold flex items-center justify-between transition-colors ${
                pathname === "/about" ? "bg-pink-100 text-pink-700" : "text-slate-700 hover:bg-pink-50"
              }`}
            >
              <span>About Us</span>
            </Link>

            <Link
              href="/trip-reports"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-2xl text-base font-bold flex items-center justify-between transition-colors ${
                pathname === "/trip-reports" ? "bg-pink-100 text-pink-700" : "text-slate-700 hover:bg-pink-50"
              }`}
            >
              <span className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-pink-500" /> Trip Reports ($14,345)
              </span>
            </Link>

            <a
              href="/about#international-partners"
              onClick={(e) => handleSectionClick(e, "/about", "international-partners")}
              className="px-4 py-3 rounded-2xl text-sm font-bold text-slate-700 hover:bg-sky-50 flex items-center gap-2"
            >
              <span>🌐 International Partners</span>
            </a>

            <a
              href="/about#local-partners"
              onClick={(e) => handleSectionClick(e, "/about", "local-partners")}
              className="px-4 py-3 rounded-2xl text-sm font-bold text-slate-700 hover:bg-pink-50 flex items-center gap-2"
            >
              <span>🇰🇭 Cambodian Alliances</span>
            </a>

            <a
              href="/about#team"
              onClick={(e) => handleSectionClick(e, "/about", "team")}
              className="px-4 py-3 rounded-2xl text-sm font-bold text-slate-700 hover:bg-rose-50 flex items-center gap-2"
            >
              <span>👑 Executive Leadership Team</span>
            </a>

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
