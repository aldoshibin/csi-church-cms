"use client";

import Link from "next/link";
import { Plus, FolderTree, BookMarked, BarChart3, Info } from "lucide-react";

const ACTIONS = [
  { label: "Add New Lesson", icon: Plus, href: "/sunday-school/lessons/add", accent: true },
  { label: "Lesson Categories", icon: FolderTree, href: "/sunday-school/lessons" },
  { label: "Curriculum Plan", icon: BookMarked, href: "/sunday-school/lessons" },
  { label: "Lesson Report", icon: BarChart3, href: "/sunday-school/reports" },
];

export function LessonsQuickActions() {
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

export function LessonsNotePanel() {
  return (
    <div className="flex gap-2.5 rounded-lg border border-[#EDE9FE] bg-[#F5F3FF] p-4">
      <Info className="h-4 w-4 shrink-0 text-[#7C3AED]" />
      <div>
        <p className="mb-0.5 text-sm font-semibold text-[#6D28D9]">Note</p>
        <p className="text-xs leading-relaxed text-[#6D28D9]/90">Lessons help teachers deliver engaging and meaningful classes. Manage your curriculum and track progress easily.</p>
      </div>
    </div>
  );
}
