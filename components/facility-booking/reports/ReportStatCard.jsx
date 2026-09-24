"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

export function ReportStatCard({ icon: Icon, iconBg, iconColor, label, value, delta, trendUp }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="flex items-center justify-between">
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${iconBg} ${iconColor}`}>
          <Icon className="h-4 w-4" />
        </span>
        <span className={`flex items-center gap-1 text-xs font-medium ${trendUp ? "text-success-600" : "text-danger-600"}`}>
          {trendUp ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
          {delta}
        </span>
      </div>
      <p className="text-sm font-medium text-ink-subtle">{label}</p>
      <p className="font-display text-2xl font-bold text-ink">{value}</p>
    </div>
  );
}
