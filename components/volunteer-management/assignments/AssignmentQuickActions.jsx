"use client";

import Link from "next/link";
import { CalendarPlus, UserPlus, CalendarRange, BarChart3 } from "lucide-react";

const ACTIONS = [
  { label: "New Assignment", icon: CalendarPlus, href: "/volunteer-management/service-assignments/add" },
  { label: "Assign Volunteer", icon: UserPlus, href: "/volunteer-management/volunteers" },
  { label: "View Calendar", icon: CalendarRange, href: "#" },
  { label: "Service Report", icon: BarChart3, href: "/volunteer-management/reports" },
];

export function AssignmentQuickActions() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {ACTIONS.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex flex-col items-center gap-2 rounded-lg border border-border px-3 py-3 text-center transition-colors hover:bg-surface-canvas"
          >
            <action.icon className="h-5 w-5 text-interactive-600" />
            <span className="text-xs font-medium leading-tight text-ink-muted">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
