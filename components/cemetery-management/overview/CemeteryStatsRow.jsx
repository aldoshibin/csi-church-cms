"use client";

import { MapPin, Users, CheckCircle2, Clock } from "lucide-react";

export function CemeteryStatsRow({ donut, recentBurials }) {
  const occupied = donut.breakdown.find((b) => b.label === "Occupied")?.count ?? 0;
  const available = donut.breakdown.find((b) => b.label === "Available")?.count ?? 0;
  const scheduled = recentBurials.filter((r) => r.status === "Scheduled").length;

  const stats = [
    { label: "Total Plots", value: donut.total, icon: MapPin, style: "bg-interactive-50 text-interactive-600" },
    { label: "Occupied Plots", value: occupied, icon: Users, style: "bg-danger-50 text-danger-600" },
    { label: "Available Plots", value: available, icon: CheckCircle2, style: "bg-success-50 text-success-600" },
    { label: "Scheduled Burials", value: scheduled, icon: Clock, style: "bg-warning-50 text-warning-600" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="flex items-center gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${s.style}`}>
            <s.icon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs text-ink-subtle">{s.label}</p>
            <p className="text-xl font-semibold text-ink">{s.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
