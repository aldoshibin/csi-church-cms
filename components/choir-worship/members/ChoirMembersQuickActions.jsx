"use client";

import Link from "next/link";
import { UserPlus, UserCog, CalendarClock, CalendarPlus, BookOpen, Download } from "lucide-react";

const ACTIONS = [
  { label: "Add New Member", icon: UserPlus, href: "/choir-worship/choir-members/add", bg: "bg-success-50", color: "text-success-700", border: "border-success-200" },
  { label: "Assign Role", icon: UserCog, href: "#", bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]", border: "border-[#E9D5FF]" },
  { label: "Practice Schedule", icon: CalendarClock, href: "/choir-worship/practice-schedule", bg: "bg-warning-50", color: "text-warning-700", border: "border-warning-200" },
  { label: "Add to Rehearsal", icon: CalendarPlus, href: "#", bg: "bg-[#FCE7F3]", color: "text-[#DB2777]", border: "border-[#FBCFE8]" },
  { label: "Songs Library", icon: BookOpen, href: "/choir-worship/songs-setlist", bg: "bg-interactive-50", color: "text-interactive-600", border: "border-interactive-200" },
  { label: "Download List", icon: Download, href: "#", bg: "bg-surface-muted", color: "text-ink-subtle", border: "border-border" },
];

export function ChoirMembersQuickActions() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {ACTIONS.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className={`flex items-center gap-2 rounded-lg border ${action.border} ${action.bg} px-3 py-3 text-left transition-colors hover:brightness-95`}
          >
            <action.icon className={`h-4 w-4 shrink-0 ${action.color}`} />
            <span className={`text-xs font-medium leading-tight ${action.color}`}>{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
