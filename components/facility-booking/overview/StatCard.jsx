"use client";

import { ArrowUpRight } from "lucide-react";

export function StatCard({ icon: Icon, iconBg, iconColor, label, value, sub }) {
  return (
    <div className="flex items-start justify-between rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="flex items-start gap-3">
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${iconBg} ${iconColor}`}>
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm text-ink-subtle">{label}</p>
          <p className="mt-0.5 font-display text-2xl font-bold text-ink">{value}</p>
          <p className="mt-0.5 text-xs text-ink-subtle">{sub}</p>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-subtle" />
    </div>
  );
}
