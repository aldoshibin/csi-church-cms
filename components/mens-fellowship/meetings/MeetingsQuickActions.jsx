"use client";

import Link from "next/link";
import { CalendarPlus, Upload, Bell, CalendarRange } from "lucide-react";

const ACTIONS = [
  { label: "Schedule New Meeting", icon: CalendarPlus, href: "/mens-fellowship/meetings/add", accent: true },
  { label: "Import Meetings", icon: Upload, href: "/mens-fellowship/meetings" },
  { label: "Send Reminder", icon: Bell, href: "/mens-fellowship/meetings" },
  { label: "View Calendar", icon: CalendarRange, href: "/mens-fellowship/meetings" },
];

export function MeetingsQuickActions() {
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
