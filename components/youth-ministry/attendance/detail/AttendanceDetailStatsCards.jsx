"use client";

import { Users, CheckCircle2, UserX, Clock, MinusCircle } from "lucide-react";

export function AttendanceDetailStatsCards({ event }) {
  const cards = [
    { label: "Total Registered", value: event.totalRegistered, icon: Users, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { label: "Total Present", value: event.totalPresent, sub: `${event.totalPresentPct}%`, icon: CheckCircle2, iconBg: "bg-interactive-50", iconColor: "text-interactive-600", subColor: "text-success-600" },
    { label: "Total Absent", value: event.totalAbsent, sub: `${event.totalAbsentPct}%`, icon: UserX, iconBg: "bg-warning-50", iconColor: "text-warning-600", subColor: "text-danger-600" },
    { label: "Late Arrivals", value: event.lateArrivals, sub: `${event.lateArrivalsPct}%`, icon: Clock, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", subColor: "text-interactive-600" },
    { label: "Not Marked", value: event.notMarked, sub: `${event.notMarkedPct}%`, icon: MinusCircle, iconBg: "bg-surface-muted", iconColor: "text-ink-subtle", subColor: "text-ink-subtle" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {cards.map(({ label, value, sub, icon: Icon, iconBg, iconColor, subColor }) => (
        <div key={label} className="rounded-lg border border-border bg-white p-4 shadow-card">
          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg}`}>
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>
          <p className="mt-3 text-xs text-ink-subtle">{label}</p>
          <p className="mt-1 font-display text-2xl font-bold text-ink">{value}</p>
          {sub && <p className={`mt-1 text-xs font-medium ${subColor}`}>{sub}</p>}
        </div>
      ))}
    </div>
  );
}
