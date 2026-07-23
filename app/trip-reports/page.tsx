"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  Download,
  Cake,
  X,
  Compass,
} from "lucide-react";

export default function TripReportsPage() {
  const [activeTripId, setActiveTripId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Search logic: Searches across title, destination, purpose, overview, highlights, findings, locations, and expenses
  const filteredTrips = TRIP_REPORTS.filter((t) => {
    // If user typed in search query, search across ALL trips regardless of active tab
    const query = searchQuery.trim().toLowerCase();
    
    if (query !== "") {
      const matchesTitle = t.title.toLowerCase().includes(query);
      const matchesDestination = t.destination.toLowerCase().includes(query);
      const matchesPurpose = t.purpose.toLowerCase().includes(query);
      const matchesOverview = t.overview.toLowerCase().includes(query);
      const matchesLocationDetails = t.locationDetails.toLowerCase().includes(query);
      const matchesHighlights = t.highlights.some((h) => h.toLowerCase().includes(query));
      const matchesFindings = t.keyFindings.some((k) => k.toLowerCase().includes(query));
      const matchesExpenses = t.expenses.some((e) => e.category.toLowerCase().includes(query));
      const matchesScores = t.locationScores?.some(
        (s) => s.name.toLowerCase().includes(query) || (s.notes && s.notes.toLowerCase().includes(query))
      );
      const matchesInterviewee = t.interviewee && t.interviewee.name.toLowerCase().includes(query);

      return (
        matchesTitle ||
        matchesDestination ||
        matchesPurpose ||
        matchesOverview ||
        matchesLocationDetails ||
        matchesHighlights ||
        matchesFindings ||
        matchesExpenses ||
        matchesScores ||
        matchesInterviewee
      );
    }

    return activeTripId === "all" || t.id === activeTripId;
  });

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="relative min-h-screen pb-24 print:bg-white print:pb-0">
      <SprinklesBackground />

      {/* PRINT-ONLY CORPORATE COVER HEADER */}
      <div className="hidden print:block mb-8 p-6 border-b-2 border-pink-400">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Cake className="w-8 h-8 text-pink-600" />
            <div>
              <h1 className="font-heading font-extrabold text-2xl text-pink-700">
                Five Slices Cheesecake Co. (Est. 2024)
              </h1>
              <p className="text-xs text-slate-500 font-semibold">
                Executive Fieldwork Documentation & Expansion Assessment
              </p>
            </div>
          </div>
          <div className="text-right text-xs text-slate-600 font-mono">
            <p><strong>Total Expenditure:</strong> ${GRAND_TOTAL_EXPENSES.toLocaleString()} USD</p>
            <p><strong>Status:</strong> Approved Fieldwork Record</p>
          </div>
        </div>
      </div>

      {/* HEADER HERO */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-12 print:pt-0 print:pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold shadow-xs print-hidden">
            <Plane className="w-4 h-4 text-pink-500" />
            <span>Executive Business Fieldwork Reports ✈️</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
            Five Slices <br />
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Business Trip Documentation
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium print:text-xs">
            Comprehensive business fieldwork documentation covering investor meetings in Sihanoukville, site expansion scoring in Siem Reap, heritage recipe interviews in Mondulkiri, AI tech research in Malaysia, and social media research in Singapore.
          </p>

          {/* Quick Stats Summary Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-bold print-hidden">
            <div className="px-4 py-2 rounded-2xl bg-white border border-pink-200 shadow-xs text-pink-700 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-pink-500" /> 5 Expeditions
            </div>
            <div className="px-4 py-2 rounded-2xl bg-white border border-pink-200 shadow-xs text-purple-700 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-purple-500" /> 3 Domestic + 2 International
            </div>
            <div className="px-4 py-2 rounded-2xl bg-white border border-pink-200 shadow-xs text-amber-800 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-amber-600" /> Grand Total: ${GRAND_TOTAL_EXPENSES.toLocaleString()}
            </div>
          </div>

          {/* PROMINENT BIG PDF / PRINT DOWNLOAD ACTION BUTTON */}
          <div className="pt-4 max-w-xl mx-auto print-hidden">
            <button
              onClick={handlePrint}
              className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-3xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-pink-200 hover:shadow-2xl hover:shadow-pink-300 hover:scale-[1.02] active:scale-95 transition-all duration-300 overflow-hidden border-2 border-white/60"
            >
              <div className="p-2 rounded-2xl bg-white/20 backdrop-blur-md">
                <Printer className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-left">
                <span className="block font-heading text-lg sm:text-xl leading-tight">
                  Download / Save Full PDF Report 📄
                </span>
                <span className="block text-xs font-semibold text-pink-100">
                  Formatted 5-Trip Reports, Scorecards & Expenses ($14,345)
                </span>
              </div>
              <Download className="w-5 h-5 text-yellow-200 ml-auto group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* RE-DESIGNED SEARCH BAR & TRIP SELECTOR CONTROL BAR */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-xl py-6 border-y border-pink-200/80 shadow-md mb-12 print-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          
          {/* Main Search Input Box */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <div className="absolute left-4 p-2 rounded-xl bg-pink-100 text-pink-600">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reports by city, investor name, score, location, or expense..."
                className="w-full pl-14 pr-12 py-4 rounded-3xl bg-pink-50/60 border-2 border-pink-200 focus:border-pink-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-200/50 text-sm font-semibold text-slate-800 placeholder-slate-400 shadow-inner transition-all"
              />
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 p-2 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : null}
            </div>

            {searchQuery && (
              <div className="mt-2 flex items-center justify-between text-xs font-bold px-4">
                <span className="text-pink-600 bg-pink-100 px-3 py-1 rounded-full border border-pink-200">
                  🔍 Search Mode: Found {filteredTrips.length} matching report(s)
                </span>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-slate-500 hover:text-pink-600 underline"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>

          {/* Trip Selection Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => {
                setActiveTripId("all");
                setSearchQuery("");
              }}
              className={`px-5 py-2.5 rounded-2xl font-extrabold text-xs shrink-0 transition-all border ${
                activeTripId === "all" && !searchQuery
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-pink-400 shadow-md shadow-pink-200 scale-105"
                  : "bg-white text-slate-700 border-pink-200 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              All 5 Trips Summary 📋
            </button>
            {TRIP_REPORTS.map((t) => {
              const isActive = activeTripId === t.id && !searchQuery;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveTripId(t.id);
                    setSearchQuery("");
                  }}
                  className={`px-4 py-2.5 rounded-2xl font-bold text-xs shrink-0 transition-all border flex items-center gap-1.5 ${
                    isActive
                      ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-pink-400 shadow-md shadow-pink-200 scale-105"
                      : "bg-white text-slate-700 border-pink-200 hover:bg-pink-50 hover:text-pink-600"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-pink-400" />
                  Trip {t.tripNumber}: {t.slug.toUpperCase()}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* TRIP REPORTS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredTrips.length === 0 ? (
          <div className="text-center py-16 bg-white/80 rounded-3xl border-2 border-pink-200 max-w-md mx-auto shadow-lg space-y-4">
            <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mx-auto text-2xl">
              🔍
            </div>
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              No matching reports found
            </h3>
            <p className="text-xs text-slate-600 px-6">
              We couldn't find any fieldwork record matching <strong>"{searchQuery}"</strong>. Try searching for city names like "Siem Reap", "Sihanoukville", "Mondulkiri", or topics like "AI" or "Expenses".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveTripId("all");
              }}
              className="px-6 py-2.5 rounded-full bg-pink-500 text-white font-bold text-xs shadow-md hover:bg-pink-600 transition-all"
            >
              Reset Search & View All Reports
            </button>
          </div>
        ) : (
          filteredTrips.map((report) => (
            <div
              key={report.id}
              id={report.slug}
              className="scroll-mt-28 rounded-3xl glass-card border-2 border-pink-200 p-6 sm:p-10 shadow-xl space-y-8 relative overflow-hidden transition-all duration-300 print:shadow-none print:border-slate-300 print:p-4 print-page-break"
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

              {/* Featured Destination Image Banner */}
              {report.imagePath && (
                <div className="relative h-64 sm:h-80 lg:h-[340px] w-full rounded-3xl overflow-hidden shadow-lg border border-pink-200 group">
                  <Image
                    src={report.imagePath}
                    alt={report.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 text-white flex flex-wrap items-center justify-between gap-2 z-10">
                    <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-900 font-extrabold text-xs shadow-md flex items-center gap-1.5 border border-pink-100">
                      <MapPin className="w-4 h-4 text-pink-600" />
                      {report.destination}
                    </span>
                    <span className="text-xs font-bold text-pink-100 bg-black/40 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
                      📸 Fieldwork Location Archive
                    </span>
                  </div>
                </div>
              )}

              {/* Purpose & Location Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/80 p-5 rounded-2xl border border-pink-100">
                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold text-pink-600 uppercase tracking-wide block">
                    🎯 Primary Fieldwork Purpose
                  </span>
                  <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                    {report.purpose}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold text-pink-600 uppercase tracking-wide block">
                    📍 Key Locations & Venues
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

              {/* Logged Activities & Visual Image Tracking */}
              {report.activities && report.activities.length > 0 && (
                <div className="space-y-3 bg-gradient-to-r from-pink-50/80 via-rose-50/50 to-amber-50/50 p-5 rounded-2xl border border-pink-200">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                      <span>📸 Logged Fieldwork Activities ({report.activities.length} Visual Tasks)</span>
                    </h3>
                    <span className="text-[11px] font-extrabold text-pink-700 bg-white px-3 py-1 rounded-full border border-pink-200 shadow-2xs">
                      1 Image / Activity Logged
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {report.activities.map((act, actIdx) => (
                      <div key={actIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-700 bg-white/90 p-3 rounded-xl border border-pink-100/90 shadow-2xs">
                        <span className="text-pink-500 font-extrabold text-xs shrink-0 mt-0.5">#{actIdx + 1}</span>
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
                    <TrendingUp className="w-5 h-5 text-pink-500" /> Siem Reap Location Evaluation Scores (5-Point Scale)
                  </h3>
                  <LocationScoreTable scores={report.locationScores} />
                </div>
              )}

              {/* Fieldwork Highlights */}
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-500" /> Fieldwork Highlights & Meetings
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
          ))
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
              <CheckCircle className="w-6 h-6 text-pink-600" /> 5 Priority Recommendations
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
