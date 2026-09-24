"use client";

import { CheckCircle2, XCircle, Clock, MinusCircle } from "lucide-react";

export function AttendanceSummarySidebarCard({ summary }) {
  if (!summary) return null;
  const cards = [
    { key: "present", label: "Present", value: summary.present, icon: CheckCircle2, bg: "bg-success-50", color: "text-success-600" },
    { key: "absent", label: "Absent", value: summary.absent, icon: XCircle, bg: "bg-danger-50", color: "text-danger-600" },
    { key: "late", label: "Late", value: summary.late, icon: Clock, bg: "bg-warning-50", color: "text-warning-600" },
    { key: "notMarked", label: "Not Marked", value: summary.notMarked, icon: MinusCircle, bg: "bg-surface-muted", color: "text-ink-subtle" },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Attendance Summary</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Week</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {cards.map(({ key, label, value, icon: Icon, bg, color }) => (
          <div key={key} className={`flex flex-col items-center gap-1.5 rounded-lg border border-border p-3 text-center ${bg}`}>
            <Icon className={`h-5 w-5 ${color}`} />
            <p className={`font-display text-lg font-bold ${color}`}>{value}</p>
            <p className="text-xs text-ink-subtle">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
