"use client";

import Link from "next/link";
import { Plus, Activity, BarChart3, Download, Users, BookOpen, HandHeart } from "lucide-react";
import { formatDate } from "@/lib/utils";

const ACTIONS = [
  { label: "Add New Group", icon: Plus, href: "/mens-fellowship/fellowship-groups/add", accent: true },
  { label: "Add New Activity", icon: Activity, href: "/mens-fellowship/activities" },
  { label: "View Reports", icon: BarChart3, href: "/mens-fellowship/reports" },
  { label: "Export Data", icon: Download, href: "/mens-fellowship/fellowship-groups" },
];

export function MfGroupsQuickActions() {
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

const ICON_MAP = { users: Users, book: BookOpen, handHeart: HandHeart };

export function MfRecentActivitiesCard({ activities = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Activities</h3>
        <Link href="/mens-fellowship/activities" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col divide-y divide-surface-muted">
        {activities.map((a, i) => {
          const Icon = ICON_MAP[a.icon] ?? Users;
          return (
            <div key={i} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${a.color}1A` }}>
                <Icon className="h-4 w-4" style={{ color: a.color }} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{a.title}</p>
                <p className="text-xs text-ink-subtle">{a.group}</p>
              </div>
              <span className="shrink-0 text-xs text-ink-subtle">{formatDate(a.date)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
