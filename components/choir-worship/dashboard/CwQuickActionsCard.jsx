"use client";

import Link from "next/link";
import { UserPlus, CalendarPlus, Church, BookOpen, ListMusic, Download } from "lucide-react";

const ACTIONS = [
  { label: "Add Member", icon: UserPlus, href: "/choir-worship/add?category=Member", bg: "bg-interactive-50", color: "text-interactive-600", border: "border-interactive-200" },
  { label: "Add Rehearsal", icon: CalendarPlus, href: "/choir-worship/add?category=Rehearsal", bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]", border: "border-[#E9D5FF]" },
  { label: "Add Service", icon: Church, href: "/choir-worship/add?category=Service", bg: "bg-warning-50", color: "text-warning-700", border: "border-warning-200" },
  { label: "Songs Library", icon: BookOpen, href: "/choir-worship/add?category=Song", bg: "bg-[#FCE7F3]", color: "text-[#DB2777]", border: "border-[#FBCFE8]" },
  { label: "Setlist Manager", icon: ListMusic, href: "/choir-worship/add?category=Setlist", bg: "bg-surface-muted", color: "text-ink-subtle", border: "border-border" },
  { label: "Download Report", icon: Download, href: "/choir-worship", bg: "bg-success-50", color: "text-success-700", border: "border-success-200" },
];

export function CwQuickActionsCard() {
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
