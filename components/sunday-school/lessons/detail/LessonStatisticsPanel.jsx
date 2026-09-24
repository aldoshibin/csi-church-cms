"use client";

import { BookOpen, Users, ClipboardList, Paperclip, CheckCircle2 } from "lucide-react";

export function LessonStatisticsPanel({ stats }) {
  const rows = [
    ["Total Classes", stats.totalClasses, BookOpen, "text-interactive-600", "bg-interactive-50"],
    ["Students Enrolled", stats.studentsEnrolled, Users, "text-[#7C3AED]", "bg-[#F3E8FF]"],
    ["Assignments", stats.assignments, ClipboardList, "text-warning-600", "bg-warning-50"],
    ["Resources", stats.resources, Paperclip, "text-danger-600", "bg-danger-50"],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Lesson Statistics</h3>
      <div className="flex flex-col gap-3">
        {rows.map(([label, value, Icon, color, bg]) => (
          <div key={label} className="flex items-center gap-3">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${bg}`}>
              <Icon className={`h-4 w-4 ${color}`} />
            </span>
            <span className="flex-1 text-sm text-ink-muted">{label}</span>
            <span className="text-sm font-semibold text-ink">{value}</span>
          </div>
        ))}
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success-50">
            <CheckCircle2 className="h-4 w-4 text-success-600" />
          </span>
          <span className="flex-1 text-sm text-ink-muted">Completion Rate</span>
          <span className="text-sm font-semibold text-ink">{stats.completionRate}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-surface-muted">
          <div className="h-full rounded-full bg-success-500" style={{ width: `${stats.completionRate}%` }} />
        </div>
      </div>
    </div>
  );
}
