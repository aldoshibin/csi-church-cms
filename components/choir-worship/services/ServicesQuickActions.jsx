"use client";

import Link from "next/link";
import { CalendarPlus, FileBarChart2, CalendarRange, ClipboardCheck } from "lucide-react";

const ACTIONS = [
  { label: "Add Service", icon: CalendarPlus, href: "/choir-worship/services/add", bg: "bg-success-50", color: "text-success-700", border: "border-success-200" },
  { label: "Service Reports", icon: FileBarChart2, href: "/choir-worship/reports", bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]", border: "border-[#E9D5FF]" },
  { label: "Service Calendar", icon: CalendarRange, href: "#", bg: "bg-warning-50", color: "text-warning-700", border: "border-warning-200" },
  { label: "Attendance Report", icon: ClipboardCheck, href: "#", bg: "bg-[#FCE7F3]", color: "text-[#DB2777]", border: "border-[#FBCFE8]" },
];

export function ServicesQuickActions() {
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
