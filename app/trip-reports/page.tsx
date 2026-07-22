"use client";

import React, { useState } from "react";
import {
  TRIP_REPORTS,
  CONSOLIDATED_RECOMMENDATIONS,
  CONSOLIDATED_EXPENSE_SUMMARY,
  GRAND_TOTAL_EXPENSES,
  TripReport,
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
  ChevronRight,
  Target,
} from "lucide-react";

export default function TripReportsPage() {
  const [activeTripId, setActiveTripId] = useState<string>("all");

  const selectedTrips =
    activeTripId === "all"
      ? TRIP_REPORTS
      : TRIP_REPORTS.filter((t) => t.id === activeTripId);

  return (
    <div className="relative min-h-screen pb-24">
      <SprinklesBackground />

      {/* HEADER HERO */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold shadow-xs">
            <Plane className="w-4 h-4 text-pink-500" />
            <span>Executive Business Fieldwork ✈️</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
            Five Slices <br />
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Business Trip Reports
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Detailed fieldwork documentation covering investor meetings in Sihanoukville, site expansion analysis in Siem Reap, heritage interviews in Mondulkiri, AI tech research in Malaysia, and digital marketing research in Singapore.
          </p>

          {/* Quick Stats Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
            <div className="px-4 py-2 rounded-2xl bg-white border border-pink-200 shadow-xs text-pink-700 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-pink-500" /> 5 Fieldwork Expeditions
            </div>
            <div className="px-4 py-2 rounded-2xl bg-white border border-pink-200 shadow-xs text-purple-700 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-purple-500" /> 3 Domestic + 2 International
            </div>
            <div className="px-4 py-2 rounded-2xl bg-white border border-pink-200 shadow-xs text-amber-800 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-amber-600" /> Grand Total: ${GRAND_TOTAL_EXPENSES.toLocaleString()}
            </div>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md py-4 border-y border-pink-200/60 shadow-xs mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        {selectedTrips.map((report) => (
          <div
            key={report.id}
            id={report.slug}
            className="rounded-3xl glass-card border border-pink-200 p-6 sm:p-10 shadow-xl space-y-8 relative overflow-hidden transition-all duration-300"
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
                  🎯 Purpose of Fieldwork
                </span>
                <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                  {report.purpose}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-extrabold text-pink-600 uppercase tracking-wide block">
                  📍 Key Venues & Locations
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
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white/60 p-4 rounded-2xl border border-pink-100">
                {report.overview}
              </p>
            </div>

            {/* Special Interviewee Card if Mondulkiri */}
            {report.interviewee && (
              <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-50 via-rose-50 to-pink-50 border-2 border-amber-200 space-y-3">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-xs">
                  <UserCheck className="w-4 h-4 text-amber-600" /> Master Baker Interview Subject
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
                    📜 Heritage Recipe Record
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
                <Sparkles className="w-5 h-5 text-pink-500" /> Fieldwork Highlights & Key Meetings
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
                <Target className="w-5 h-5 text-pink-500" /> Strategic Key Findings
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

            {/* Strategic Conclusion */}
            <div className="p-5 rounded-2xl bg-pink-100/70 border border-pink-200 text-xs sm:text-sm text-pink-950 font-medium space-y-1">
              <span className="font-extrabold font-heading text-pink-900 block text-xs uppercase tracking-wide">
                📌 Trip Conclusion & Action Plan
              </span>
              <p className="leading-relaxed">{report.conclusion}</p>
            </div>

          </div>
        ))}
      </section>

      {/* CONSOLIDATED EXECUTIVE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="rounded-3xl bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 border-2 border-pink-300 p-8 sm:p-12 shadow-2xl space-y-10">
          
          <SectionHeading
            badge="Executive Consolidation"
            title="Consolidated Fieldwork Summary & Recommendations"
            subtitle="Synthesizing findings across all 5 business trips into clear priority actions and financial totals."
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
              <PieChart className="w-6 h-6 text-pink-600" /> Consolidated Fieldwork Expenses ($14,345 Total)
            </h3>
            <div className="overflow-x-auto rounded-2xl bg-white border border-pink-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-pink-200 bg-pink-50 text-pink-900 font-extrabold">
                    <th className="py-3.5 px-4">Trip # & Destination</th>
                    <th className="py-3.5 px-4">Fieldwork Purpose</th>
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
              Overall Strategic Conclusion
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              The completion of these 5 business field trips establishes a clear roadmap for <strong>Five Slices Cheesecake Co.</strong> to scale from an artisanal Phnom Penh boutique into Cambodia’s leading cheesecake brand. By balancing low-risk retail kiosk pilots in Sihanoukville with a high-margin flagship branch on Wat Bo Road in Siem Reap, leveraging heritage recipes, implementing AI demand forecasting, and executing disciplined 90-day social media campaigns, Five Slices is positioned for sustainable profitability and long-term customer devotion.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
