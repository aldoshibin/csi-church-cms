"use client";

import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Users, UserPlus, Send, Download, ChevronRight } from "lucide-react";

export function YmRegistrationSummaryCard({ summary }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Registration Summary</h3>
      <div className="flex items-center gap-5">
        <div className="relative h-[150px] w-[150px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={summary.breakdown} dataKey="count" nameKey="label" innerRadius={45} outerRadius={72} paddingAngle={2} strokeWidth={0}>
                {summary.breakdown.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-display text-lg font-bold text-ink">{summary.total}</p>
            <p className="text-xs text-ink-subtle">Registered</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2.5">
          {summary.breakdown.map((entry) => (
            <div key={entry.label} className="flex items-center gap-2 text-sm">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-ink-muted">{entry.label}</span>
              <span className="ml-auto font-medium text-ink">{entry.count} ({entry.pct}%)</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 border-t border-surface-muted pt-3 text-sm font-semibold text-ink">
        Total Limit: {summary.totalLimit}
      </div>
    </div>
  );
}

export function YmEventTimelineCard({ timeline = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Event Timeline</h3>
      <div className="ml-1 flex flex-col gap-4 border-l-2 border-surface-muted pl-4">
        {timeline.map((item, i) => (
          <div key={i} className="relative">
            <span
              className={`absolute -left-[21px] h-3 w-3 rounded-full border-2 border-white ${
                item.state === "done" ? "bg-success-500" : item.state === "current" ? "bg-interactive-500" : "bg-surface-muted"
              }`}
            />
            <p className={`text-sm font-medium ${item.state === "future" ? "text-ink-subtle" : "text-ink"}`}>{item.label}</p>
            <p className="text-xs text-ink-subtle">{item.date} · {item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const QUICK_ACTIONS = [
  { label: "View Registrations", icon: Users, href: "/youth-ministry/events" },
  { label: "Manage Volunteers", icon: UserPlus, href: "/youth-ministry/volunteers" },
  { label: "Send Announcement", icon: Send, href: "/youth-ministry/events" },
  { label: "Download Event Report", icon: Download, href: "/youth-ministry/reports" },
];

export function YmEventQuickActionsList() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="flex flex-col divide-y divide-surface-muted">
        {QUICK_ACTIONS.map((action) => (
          <Link key={action.label} href={action.href} className="flex items-center gap-3 py-2.5 text-sm text-ink-muted hover:text-ink">
            <action.icon className="h-4 w-4 shrink-0 text-interactive-600" />
            <span className="flex-1">{action.label}</span>
            <ChevronRight className="h-4 w-4 shrink-0 text-ink-subtle" />
          </Link>
        ))}
      </div>
    </div>
  );
}
