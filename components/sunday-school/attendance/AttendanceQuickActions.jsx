"use client";

import Link from "next/link";
import { CalendarCheck, FileText, Calendar, Settings2, Info } from "lucide-react";

const ACTIONS = [
  { label: "Mark Attendance", icon: CalendarCheck, href: "/sunday-school/attendance", accent: true },
  { label: "Attendance Report", icon: FileText, href: "/sunday-school/reports" },
  { label: "Monthly Summary", icon: Calendar, href: "/sunday-school/reports" },
  { label: "Attendance Settings", icon: Settings2, href: "/sunday-school/attendance" },
];

export function AttendanceQuickActions() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {ACTIONS.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className={`flex items-center gap-2 rounded-lg border px-3 py-3 text-left transition-colors ${
              action.accent
                ? "border-success-200 bg-success-50 text-success-700 hover:bg-success-100"
                : "border-border text-ink-muted hover:bg-surface-canvas"
            }`}
          >
            <action.icon className="h-4 w-4 shrink-0" />
            <span className="text-xs font-medium leading-tight">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function AttendanceNotePanel() {
  return (
    <div className="flex gap-2.5 rounded-lg border border-interactive-100 bg-interactive-50 p-4">
      <Info className="h-4 w-4 shrink-0 text-interactive-600" />
      <div>
        <p className="mb-0.5 text-sm font-semibold text-interactive-700">Note</p>
        <p className="text-xs leading-relaxed text-interactive-700/90">Attendance is automatically calculated based on present, absent and late records.</p>
      </div>
    </div>
  );
}
