"use client";

import Link from "next/link";
import { Plus, Activity, BarChart3, Download } from "lucide-react";

const ACTIONS = [
  { label: "Add New Meeting", icon: Plus, href: "/mens-fellowship/meetings", accent: true },
  { label: "Add New Activity", icon: Activity, href: "/mens-fellowship/activities" },
  { label: "View Reports", icon: BarChart3, href: "/mens-fellowship/reports" },
  { label: "Export Data", icon: Download, href: "/mens-fellowship" },
];

export function MfQuickActions() {
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

export function TopParticipatingMembersCard({ members = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Top Participating Members</h3>
        <Link href="/mens-fellowship/members" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="mb-2 flex justify-end text-xs text-ink-subtle">Meetings Attended</div>
      <div className="flex flex-col divide-y divide-surface-muted">
        {members.map((m, i) => (
          <div key={m.name} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">{i + 1}</span>
            <span className="flex-1 text-sm text-ink">{m.name}</span>
            <span className="text-sm font-medium text-ink">{m.attended} / {m.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
