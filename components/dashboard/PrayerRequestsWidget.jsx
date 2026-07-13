"use client";

import Link from "next/link";
import { Plus, Hand, CheckCircle2, ListChecks } from "lucide-react";

export function PrayerRequestsWidget({ newRequests, inPrayer, answered, total }) {
  const rows = [
    { label: "New Requests", value: newRequests, icon: Plus, color: "text-interactive-500 bg-interactive-50" },
    { label: "In Prayer", value: inPrayer, icon: Hand, color: "text-accent-600 bg-accent-50" },
    { label: "Answered", value: answered, icon: CheckCircle2, color: "text-success-600 bg-success-50" },
    { label: "Total Requests", value: total, icon: ListChecks, color: "text-ink-muted bg-surface-muted" },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-interactive-500">Prayer Requests</h3>
        <Link href="/prayers" className="text-xs font-medium text-interactive-500 hover:underline">
          View All →
        </Link>
      </div>

      <ul className="space-y-3">
        {rows.map((row) => (
          <li key={row.label} className="flex items-center gap-3">
            <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${row.color}`}>
              <row.icon className="h-3.5 w-3.5" />
            </div>
            <span className="flex-1 text-sm text-ink">{row.label}</span>
            <span className="text-sm font-semibold text-ink">{row.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
