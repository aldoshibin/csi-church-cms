"use client";

import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Plus, FolderTree, Paperclip, BarChart3 } from "lucide-react";

export function LessonsByCategoryCard({ breakdown = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Lessons by Category</h3>
        <Link href="/youth-ministry/lessons" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex items-center gap-5">
        <div className="h-[150px] w-[150px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={breakdown} dataKey="count" nameKey="label" innerRadius={45} outerRadius={72} paddingAngle={2} strokeWidth={0}>
                {breakdown.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-1 flex-col gap-2.5">
          {breakdown.map((entry) => (
            <div key={entry.label} className="flex items-center gap-2 text-sm">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-ink-muted">{entry.label}</span>
              <span className="ml-auto font-medium text-ink">{entry.count} ({entry.pct}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ACTIONS = [
  { label: "Add New Lesson", icon: Plus, href: "/youth-ministry/lessons/add", accent: true },
  { label: "Lesson Categories", icon: FolderTree, href: "/youth-ministry/lessons" },
  { label: "Lesson Materials", icon: Paperclip, href: "/youth-ministry/lessons" },
  { label: "Lesson Report", icon: BarChart3, href: "/youth-ministry/reports" },
];

export function YmLessonsQuickActions() {
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
