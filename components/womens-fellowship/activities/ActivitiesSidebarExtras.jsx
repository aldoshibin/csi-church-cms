"use client";

import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Badge } from "@/components/ui/Badge";
import { Plus, Tag, BarChart3, Download } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function ActUpcomingCard({ activities = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Activities</h3>
        <Link href="/womens-fellowship/activities" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col divide-y divide-surface-muted">
        {activities.map((a, i) => (
          <div key={i} className="flex items-start justify-between gap-3 py-3 first:pt-0 last:pb-0">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">{a.title}</p>
              <p className="mt-0.5 text-xs text-ink-subtle">{formatDate(a.date)} · {a.time}</p>
              <p className="mt-0.5 text-xs text-ink-subtle">{a.venue}</p>
            </div>
            <Badge variant="success" className="shrink-0">In {a.daysAway} days</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ActivitiesByFocusCard({ breakdown = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Activities by Focus</h3>
        <Link href="/womens-fellowship/reports" className="text-xs font-medium text-interactive-500 hover:underline">View Report</Link>
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
  { label: "Add New Activity", icon: Plus, href: "/womens-fellowship/activities/add", accent: true },
  { label: "Activity Types", icon: Tag, href: "/womens-fellowship/activities" },
  { label: "View Reports", icon: BarChart3, href: "/womens-fellowship/reports" },
  { label: "Export Activities", icon: Download, href: "/womens-fellowship/activities" },
];

export function ActQuickActions() {
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
