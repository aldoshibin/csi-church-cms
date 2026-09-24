"use client";

import { Users } from "lucide-react";

const COLORS = [
  { iconBg: "bg-success-50", iconColor: "text-success-600" },
  { iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
  { iconBg: "bg-warning-50", iconColor: "text-warning-600" },
  { iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
];

export function AgeGroupSummaryRow({ summary = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Age Group Summary</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summary.map((group, i) => {
          const style = COLORS[i % COLORS.length];
          return (
            <div key={group.label} className="flex items-center gap-3 rounded-lg border border-border p-3">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${style.iconBg}`}>
                <Users className={`h-4 w-4 ${style.iconColor}`} />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-ink-subtle">{group.label}</p>
                <p className="font-display text-lg font-bold text-ink">{group.count} Students</p>
                <p className="text-xs text-ink-subtle">{group.pct}%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
