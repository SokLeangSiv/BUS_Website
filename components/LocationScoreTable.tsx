import React from "react";
import { LocationScore } from "@/lib/trip-data";
import { Star, MapPin, Award } from "lucide-react";

interface LocationScoreTableProps {
  scores: LocationScore[];
}

export const LocationScoreTable: React.FC<LocationScoreTableProps> = ({ scores }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scores.map((loc, i) => {
          const isTopCandidate = loc.overall >= 4.4;
          const isProductionCandidate = loc.name.includes("Sala Kamreuk");

          return (
            <div
              key={i}
              className={`rounded-3xl glass-card p-6 border transition-all duration-300 relative flex flex-col justify-between ${
                isTopCandidate
                  ? "border-pink-400 bg-gradient-to-b from-white via-pink-50/50 to-rose-50/50 shadow-lg shadow-pink-200/60 ring-2 ring-pink-300"
                  : isProductionCandidate
                  ? "border-purple-300 bg-purple-50/30 shadow-md"
                  : "border-pink-200 hover:border-pink-300"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-heading font-extrabold text-lg text-slate-900 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-pink-500 shrink-0" />
                      {loc.name}
                    </h4>
                    {isTopCandidate && (
                      <span className="inline-block mt-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-pink-500 text-white shadow-xs">
                        👑 Top Flagship Candidate
                      </span>
                    )}
                    {isProductionCandidate && (
                      <span className="inline-block mt-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-600 text-white shadow-xs">
                        🏭 Production Kitchen Hub
                      </span>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-2xl font-extrabold font-heading text-pink-600 flex items-center gap-1 justify-end">
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                      {loc.overall.toFixed(1)}
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold">Overall Score</span>
                  </div>
                </div>

                {loc.notes && (
                  <p className="text-xs text-slate-600 mb-4 bg-white/80 p-2.5 rounded-xl border border-pink-100 italic">
                    "{loc.notes}"
                  </p>
                )}

                {/* Score breakdown metrics */}
                <div className="space-y-2 text-xs">
                  <ScoreBar label="Foot Traffic" value={loc.footTraffic} color="bg-rose-400" />
                  <ScoreBar label="Affordable Rent" value={loc.rent} color="bg-emerald-400" />
                  <ScoreBar label="Tourist Access" value={loc.touristAccess} color="bg-amber-400" />
                  <ScoreBar label="Delivery Logistics" value={loc.delivery} color="bg-sky-400" />
                  <ScoreBar label="Low Competition" value={loc.competition} color="bg-purple-400" />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-pink-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span>Evaluation Scorecard</span>
                <span className="text-pink-600">5-Point Scale</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ScoreBar: React.FC<{ label: string; value: number; color: string }> = ({ label, value, color }) => {
  const percentage = (value / 5) * 100;
  return (
    <div>
      <div className="flex justify-between font-semibold text-slate-700 mb-1">
        <span>{label}</span>
        <span className="font-mono text-slate-900">{value}/5</span>
      </div>
      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
