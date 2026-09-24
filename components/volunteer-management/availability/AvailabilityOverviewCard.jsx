"use client";

import { CheckCircle2, Clock, XCircle, HelpCircle } from "lucide-react";

const ROWS = [
  { key: "available", label: "Available", icon: CheckCircle2, color: "text-success-600" },
  { key: "limited", label: "Limited", icon: Clock, color: "text-warning-600" },
  { key: "unavailable", label: "Unavailable", icon: XCircle, color: "text-danger-600" },
  { key: "notSet", label: "Not Set", icon: HelpCircle, color: "text-ink-subtle" },
];

export function AvailabilityOverviewCard({ stats }) {
  if (!stats) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Availability Overview</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Week</option>
        </select>
      </div>
      <div className="flex flex-col gap-3.5">
        {ROWS.map(({ key, label, icon: Icon, color }) => {
          const row = stats[key];
          return (
            <div key={key} className="flex items-center gap-2.5 text-sm">
              <Icon className={`h-4 w-4 shrink-0 ${color}`} />
              <span className="text-ink-muted">{label}</span>
              <span className="ml-auto font-semibold text-ink">{row.value}</span>
              <span className="w-10 shrink-0 text-right text-xs text-ink-subtle">{row.pct}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
