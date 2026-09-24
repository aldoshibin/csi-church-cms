"use client";

import { Users, UserCheck, UserX, Clock } from "lucide-react";

export function AttendanceSummaryMiniCard({ record }) {
  if (!record) return null;
  const cards = [
    { key: "expected", label: "Expected", value: record.expected, iconBg: "bg-interactive-50", iconColor: "text-interactive-600", Icon: Users },
    { key: "present", label: "Present", value: record.present, iconBg: "bg-success-50", iconColor: "text-success-600", Icon: UserCheck },
    { key: "absent", label: "Absent", value: record.absent, iconBg: "bg-danger-50", iconColor: "text-danger-500", Icon: UserX },
    { key: "excused", label: "Excused", value: record.excused, iconBg: "bg-warning-50", iconColor: "text-warning-600", Icon: Clock },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Attendance Summary</h3>
      <div className="grid grid-cols-2 gap-3">
        {cards.map(({ key, label, value, iconBg, iconColor, Icon }) => (
          <div key={key} className="rounded-lg border border-border p-3">
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${iconBg}`}>
              <Icon className={`h-4 w-4 ${iconColor}`} />
            </span>
            <p className="mt-2 font-display text-lg font-bold text-ink">{value}</p>
            <p className="text-xs text-ink-subtle">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
