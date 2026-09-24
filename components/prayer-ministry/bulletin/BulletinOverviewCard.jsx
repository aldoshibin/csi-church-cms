"use client";

import { CalendarDays, CheckCircle2, Clock, XCircle } from "lucide-react";

export function BulletinOverviewCard({ overview }) {
  if (!overview) return null;
  const cards = [
    { key: "total", label: "Total Requests", icon: CalendarDays, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "approved", label: "Approved", icon: CheckCircle2, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "pending", label: "Pending", icon: Clock, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "rejected", label: "Rejected", icon: XCircle, iconBg: "bg-danger-50", iconColor: "text-danger-500" },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Request Overview</h3>
      <div className="grid grid-cols-2 gap-3">
        {cards.map(({ key, label, icon: Icon, iconBg, iconColor }) => (
          <div key={key} className="rounded-lg border border-border p-3">
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${iconBg}`}>
              <Icon className={`h-4 w-4 ${iconColor}`} />
            </span>
            <p className="mt-2 font-display text-lg font-bold text-ink">{overview[key]}</p>
            <p className="text-xs text-ink-subtle">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
