"use client";

import React, { useState } from "react";
import {
  TRIP_REPORTS,
  CONSOLIDATED_RECOMMENDATIONS,
  CONSOLIDATED_EXPENSE_SUMMARY,
  GRAND_TOTAL_EXPENSES,
} from "@/lib/trip-data";
import { ExpenseTable } from "@/components/ExpenseTable";
import { LocationScoreTable } from "@/components/LocationScoreTable";
import { SectionHeading } from "@/components/SectionHeading";
import { SprinklesBackground } from "@/components/SprinklesBackground";
import {
  Plane,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  FileText,
  DollarSign,
  Briefcase,
  Sparkles,
  UserCheck,
  Building2,
  TrendingUp,
  PieChart,
  Search,
  Printer,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function TripReportsPage() {
  const [activeTripId, setActiveTripId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTripId, setExpandedTripId] = useState<string | null>(null);

  const filteredTrips = TRIP_REPORTS.filter((t) => {
    const matchesTab = activeTripId === "all" || t.id === activeTripId;
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.keyFindings.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="relative min-h-screen pb-24 print:bg-white print:pb-0">
      <SprinklesBackground />

      {/* HEADER HERO */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 print:pt-4 print:pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold shadow-xs print:hidden">
            <Plane className="w-4 h-4 text-pink-500" />
            <span>Executive Business Fieldwork Reports ✈️</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
            Five Slices <br />
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Business Trip Documentation
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium print:text-xs">
            Comprehensive business fieldwork reports covering strategic investor meetings in Sihanoukville, site expansion analysis in Siem Reap, heritage recipe interviews in Mondulkiri, AI operations summit in Malaysia, and social media research in Singapore.
          </p>

          {/* Quick Stats & Print Action Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-bold print:hidden">
            <div className="px-4 py-2 rounded-2xl bg-white border border-pink-200 shadow-xs text-pink-700 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-pink-500" /> 5 Fieldwork Expeditions
            </div>
            <div className="px-4 py-2 rounded-2xl bg-white border border-pink-200 shadow-xs text-purple-700 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-purple-500" /> 3 Domestic + 2 International
            </div>
            <div className="px-4 py-2 rounded-2xl bg-white border border-pink-200 shadow-xs text-amber-800 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-amber-600" /> Total Expense: ${GRAND_TOTAL_EXPENSES.toLocaleString()}
            </div>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-2xl bg-pink-500 text-white shadow-md hover:bg-pink-600 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" /> Print / Save PDF
            </button>
          </div>
        </div>
      </section>

      {/* FILTER TABS & SEARCH BAR */}
      <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md py-4 border-y border-pink-200/60 shadow-xs mb-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          
          {/* Search Box */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reports by city, investor, score, topic..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-pink-50/60 border border-pink-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-2.5 text-xs font-bold text-pink-500"
              >
                Clear
              </button>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveTripId("all")}
              className={`px-5 py-2 rounded-full font-bold text-xs shrink-0 transition-all ${
                activeTripId === "all"
                  ? "bg-pink-500 text-white shadow-md shadow-pink-200"
                  : "bg-pink-50 text-slate-700 hover:bg-pink-100"
              }`}
            >
              All 5 Trips Summary 📋
            </button>
            {TRIP_REPORTS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTripId(t.id)}
                className={`px-4 py-2 rounded-full font-bold text-xs shrink-0 transition-all ${
                  activeTripId === t.id
                    ? "bg-pink-500 text-white shadow-md shadow-pink-200"
                    : "bg-pink-50 text-slate-700 hover:bg-pink-100"
                }`}
              >
                Trip {t.tripNumber}: {t.slug.toUpperCase()}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* TRIP REPORTS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredTrips.length === 0 ? (
          <div className="text-center py-12 bg-white/70 rounded-3xl border border-pink-200 max-w-md mx-auto">
            <span className="text-3xl block mb-2">🔎</span>
            <p className="text-sm font-bold text-slate-700">No reports matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveTripId("all");
              }}
              className="mt-3 text-xs font-extrabold text-pink-600 underline"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          filteredTrips.map((report) => {
            const isExpanded = expandedTripId === report.id || activeTripId !== "all";

            return (
              <div
                key={report.id}
                id={report.slug}
                className="rounded-3xl glass-card border border-pink-200 p-6 sm:p-10 shadow-xl space-y-8 relative overflow-hidden transition-all duration-300 print:shadow-none print:border-slate-300"
              >
                {/* Top Bar Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-pink-200/80 pb-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-pink-500 text-white text-xs font-extrabold shadow-xs">
                        Trip {report.tripNumber} Report
                      </span>
                      <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-bold border border-pink-200 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-pink-500" /> {report.destination}
                      </span>
                    </div>
                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                      {report.title}
                    </h2>
                  </div>

                  {/* Meta information details */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 bg-pink-50/80 p-3.5 rounded-2xl border border-pink-100">
                    <div className="flex items-center gap-1.5 font-semibold">
                      <Calendar className="w-4 h-4 text-pink-500" />
                      <span>{report.dateRange}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold">
                      <Clock className="w-4 h-4 text-pink-500" />
                      <span>{report.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono font-extrabold text-pink-700 text-sm">
                      <DollarSign className="w-4 h-4 text-pink-600" />
                      <span>${report.totalExpense.toLocaleString()} Total</span>
                    </div>
                  </div>
                </div>

                {/* Purpose & Location Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/70 p-5 rounded-2xl border border-pink-100">
                  <div className="space-y-1">
                    <span className="text-[11px] font-extrabold text-pink-600 uppercase tracking-wide block">
                      🎯 Primary Purpose
                    </span>
                    <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                      {report.purpose}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-extrabold text-pink-600 uppercase tracking-wide block">
                      📍 Locations & Venues
                    </span>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      {report.locationDetails}
                    </p>
                  </div>
                </div>

                {/* Executive Overview */}
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-pink-500" /> Executive Overview
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white/60 p-4 rounded-2xl border border-pink-100 font-normal">
                    {report.overview}
                  </p>
                </div>

                {/* Special Interviewee Card if Mondulkiri */}
                {report.interviewee && (
                  <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-50 via-rose-50 to-pink-50 border-2 border-amber-200 space-y-3">
                    <div className="flex items-center gap-2 text-amber-800 font-bold text-xs">
                      <UserCheck className="w-4 h-4 text-amber-600" /> Master Baker Oral History Subject
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-heading font-extrabold text-xl text-slate-900">
                          {report.interviewee.name} — {report.interviewee.role}
                        </h4>
                        <p className="text-xs text-amber-700 font-medium">
                          {report.interviewee.yearsOfService} Years of Service • Address: {report.interviewee.address}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold w-fit">
                        📜 Heritage Recipe Archive
                      </span>
                    </div>
                  </div>
                )}

                {/* Special Location Score Table if Siem Reap */}
                {report.locationScores && (
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-pink-500" /> Siem Reap Location Matrix Scores (5-Point Scale)
                    </h3>
                    <LocationScoreTable scores={report.locationScores} />
                  </div>
                )}

                {/* Fieldwork Highlights */}
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-pink-500" /> Fieldwork Highlights
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {report.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="p-3.5 rounded-2xl bg-pink-50/60 border border-pink-100 text-xs text-slate-700 leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Findings & Insights */}
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500" /> Strategic Key Findings
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {report.keyFindings.map((finding, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white border border-pink-200 text-xs font-medium text-slate-700 flex items-start gap-2.5 shadow-2xs"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{finding}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Itemized Expense Table */}
                <ExpenseTable
                  title={`Itemized Expenses — Trip ${report.tripNumber} (${report.slug.toUpperCase()})`}
                  expenses={report.expenses}
                  totalExpense={report.totalExpense}
                />

                {/* Action Conclusion */}
                <div className="p-5 rounded-2xl bg-pink-100/70 border border-pink-200 text-xs sm:text-sm text-pink-950 font-medium space-y-1">
                  <span className="font-extrabold font-heading text-pink-900 block text-xs uppercase tracking-wide">
                    📌 Action Plan & Next Steps
                  </span>
                  <p className="leading-relaxed">{report.conclusion}</p>
                </div>

              </div>
            );
          })
        )}
      </section>

      {/* CONSOLIDATED EXECUTIVE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 print:mt-8">
        <div className="rounded-3xl bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 border-2 border-pink-300 p-8 sm:p-12 shadow-2xl space-y-10 print:shadow-none print:bg-white print:border-slate-300">
          
          <SectionHeading
            badge="Executive Consolidation"
            title="Consolidated Fieldwork Summary & Recommendations"
            subtitle="Synthesizing operational priorities across all 5 business field trips into clear strategic actions and financial budgets."
          />

          {/* 5 Priority Recommendations */}
          <div className="space-y-4">
            <h3 className="font-heading font-extrabold text-xl text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-pink-600" /> 5 Operational Recommendations
            </h3>
            <div className="space-y-3">
              {CONSOLIDATED_RECOMMENDATIONS.map((rec, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white border border-pink-200 text-xs sm:text-sm text-slate-800 font-semibold flex items-start gap-3 shadow-xs"
                >
                  <span className="w-6 h-6 rounded-full bg-pink-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Consolidated Expense Summary Table */}
          <div className="space-y-4">
            <h3 className="font-heading font-extrabold text-xl text-slate-900 flex items-center gap-2">
              <PieChart className="w-6 h-6 text-pink-600" /> Consolidated Expenses Breakdown ($14,345 Grand Total)
            </h3>
            <div className="overflow-x-auto rounded-2xl bg-white border border-pink-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-pink-200 bg-pink-50 text-pink-900 font-extrabold">
                    <th className="py-3.5 px-4">Trip # & Destination</th>
                    <th className="py-3.5 px-4">Fieldwork Focus</th>
                    <th className="py-3.5 px-4">Dates</th>
                    <th className="py-3.5 px-4 text-right">Expense (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pink-100">
                  {CONSOLIDATED_EXPENSE_SUMMARY.map((row, idx) => (
                    <tr key={idx} className="hover:bg-pink-50/50">
                      <td className="py-3 px-4 font-bold text-slate-900">{row.trip}</td>
                      <td className="py-3 px-4 text-slate-600">{row.destination}</td>
                      <td className="py-3 px-4 text-slate-600 font-medium">{row.dates}</td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-slate-900">
                        ${row.total.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-pink-400 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-extrabold text-sm sm:text-base">
                    <td colSpan={3} className="py-4 px-4 font-heading rounded-bl-2xl">
                      Grand Total Fieldwork Investment
                    </td>
                    <td className="py-4 px-4 text-right font-mono text-lg rounded-br-2xl">
                      ${GRAND_TOTAL_EXPENSES.toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Strategic Conclusion Paragraph */}
          <div className="p-6 rounded-2xl bg-white/90 border border-pink-200 space-y-2">
            <h4 className="font-heading font-extrabold text-base text-pink-900">
              Executive Conclusion
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              These 5 field trips give <strong>Five Slices Cheesecake Co.</strong> a clear, data-informed roadmap to expand sustainably. Combining a low-risk kiosk pilot in Sihanoukville with a flagship boutique on Wat Bo Road in Siem Reap, supported by automated inventory alerts and structured digital content, positions Five Slices for healthy growth and long-term brand devotion across Cambodia.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
