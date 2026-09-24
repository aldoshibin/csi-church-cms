"use client";

import { CalendarCheck, CalendarDays, UserX, MinusCircle } from "lucide-react";

export function AttendanceOverviewRow({ stats }) {
  if (!stats) return null;
  const cards = [
    { key: "totalAssigned", label: "Total Assigned", icon: CalendarDays, iconBg: "bg-interactive-50", iconColor: "text-interactive-600", value: stats.totalAssigned, sub: "Volunteers" },
    { key: "totalPresent", label: "Total Present", icon: CalendarCheck, iconBg: "bg-success-50", iconColor: "text-success-600", value: stats.totalPresent.value, sub: `${stats.totalPresent.pct}%` },
    { key: "totalAbsent", label: "Total Absent", icon: UserX, iconBg: "bg-danger-50", iconColor: "text-danger-600", value: stats.totalAbsent.value, sub: `${stats.totalAbsent.pct}%` },
    { key: "notMarked", label: "Not Marked", icon: MinusCircle, iconBg: "bg-surface-muted", iconColor: "text-ink-subtle", value: stats.notMarked.value, sub: `${stats.notMarked.pct}%` },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Attendance Overview</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {cards.map(({ key, label, icon: Icon, iconBg, iconColor, value, sub }) => (
          <div key={key} className="flex items-center gap-3">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconBg} ${iconColor}`}>
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-ink-subtle">{label}</p>
              <p className="font-display text-lg font-bold leading-tight text-ink">{value}</p>
              <p className="text-xs text-ink-subtle">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
