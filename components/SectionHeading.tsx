import React from "react";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`space-y-3 mb-10 ${centered ? "text-center" : "text-left"}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-pink-700 text-xs font-bold tracking-wide uppercase shadow-xs ${centered ? "mx-auto" : ""}`}>
          <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-sparkle" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
