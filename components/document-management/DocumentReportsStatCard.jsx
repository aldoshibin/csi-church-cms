"use client";

import { ArrowUp, ArrowDown, Minus } from "lucide-react";

export function DocumentReportsStatCard({ icon: Icon, iconBg, iconColor, value, label, trendPct, trendUp, sub }) {
  const TrendIcon = trendUp === null ? Minus : trendUp ? ArrowUp : ArrowDown;
  const trendColor = trendUp === null ? "text-ink-subtle" : trendUp ? "text-success-600" : "text-danger-600";

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="flex items-center justify-between">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${iconBg} ${iconColor}`}>
          <Icon className="h-4 w-4" />
        </span>
        {trendPct != null && (
          <span className={`flex items-center gap-0.5 text-xs font-medium ${trendColor}`}>
            <TrendIcon className="h-3 w-3" /> {trendPct}%
          </span>
        )}
      </div>
      <p className="text-sm font-medium text-ink-subtle">{label}</p>
      <p className="font-display text-2xl font-bold text-ink">{value}</p>
      <p className="text-xs text-ink-subtle">{sub}</p>
    </div>
  );
}
