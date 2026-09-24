"use client";

import { CheckCircle2, XCircle, Clock, HelpCircle } from "lucide-react";

export function MarkAttendanceSummaryCards({ summary }) {
  if (!summary) return null;
  const cards = [
    { key: "present", label: "Present", value: summary.present.value, pct: summary.present.pct, icon: CheckCircle2, bg: "bg-success-50", color: "text-success-600" },
    { key: "absent", label: "Absent", value: summary.absent.value, pct: summary.absent.pct, icon: XCircle, bg: "bg-danger-50", color: "text-danger-600" },
    { key: "late", label: "Late", value: summary.late.value, pct: summary.late.pct, icon: Clock, bg: "bg-warning-50", color: "text-warning-600" },
    { key: "notMarked", label: "Not Marked", value: summary.notMarked.value, pct: summary.notMarked.pct, icon: HelpCircle, bg: "bg-surface-muted", color: "text-ink-subtle" },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Attendance Summary</h3>
      <div className="grid grid-cols-2 gap-3">
        {cards.map(({ key, label, value, pct, icon: Icon, bg, color }) => (
          <div key={key} className={`rounded-lg border border-border p-3 ${bg}`}>
            <Icon className={`h-4 w-4 ${color}`} />
            <p className={`mt-2 font-display text-xl font-bold ${color}`}>{value}</p>
            <p className="text-xs text-ink-subtle">{label}</p>
            <p className="text-[11px] text-ink-subtle">{pct}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
