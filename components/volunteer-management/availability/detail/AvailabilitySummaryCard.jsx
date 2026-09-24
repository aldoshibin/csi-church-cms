"use client";

import { CheckCircle2, Clock, XCircle, HelpCircle } from "lucide-react";

const TILES = [
  { key: "available", label: "Available", icon: CheckCircle2, bg: "bg-success-50", color: "text-success-600" },
  { key: "limited", label: "Limited", icon: Clock, bg: "bg-warning-50", color: "text-warning-600" },
  { key: "unavailable", label: "Unavailable", icon: XCircle, bg: "bg-danger-50", color: "text-danger-600" },
  { key: "notSet", label: "Not Set", icon: HelpCircle, bg: "bg-surface-muted", color: "text-ink-subtle" },
];

export function AvailabilitySummaryCard({ summary }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Availability Summary</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {TILES.map(({ key, label, icon: Icon, bg, color }) => {
          const row = summary[key];
          return (
            <div key={key} className="rounded-lg border border-border p-4">
              <span className={`flex h-9 w-9 items-center justify-center rounded-full ${bg} ${color}`}>
                <Icon className="h-4 w-4" />
              </span>
              <p className="mt-2 text-xs text-ink-subtle">{label}</p>
              <p className="font-display text-xl font-bold text-ink">{row.value}</p>
              <p className="text-xs text-ink-subtle">{row.pct}% of time</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
