"use client";

import Link from "next/link";
import { UsersRound, Users2, Activity, Calendar, TrendingUp, FileText, Mail, UserPlus, MessageSquare, Download } from "lucide-react";

export function GroupStatisticsCards({ group }) {
  const cards = [
    { label: "Total Members", value: group.members, icon: UsersRound, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { label: "Active Groups", value: 8, icon: Users2, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { label: "Activities This Month", value: group.activitiesThisMonth ?? 0, icon: Activity, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { label: "Meetings This Month", value: group.totalMeetings ?? 0, icon: Calendar, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { label: "Avg. Attendance", value: `${group.attendanceRate}%`, icon: TrendingUp, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { label: "Documents", value: group.documents ?? 0, icon: FileText, iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Group Statistics</h3>
      <div className="grid grid-cols-2 gap-3">
        {cards.map((card) => (
          <div key={card.label} className="rounded-lg border border-border p-3">
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${card.iconBg}`}>
              <card.icon className={`h-4 w-4 ${card.iconColor}`} />
            </span>
            <p className="mt-2 font-display text-lg font-bold text-ink">{card.value}</p>
            <p className="text-xs text-ink-subtle">{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GroupLeadersCard({ leaders = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Group Leaders</h3>
        <Link href="/mens-fellowship/members" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col divide-y divide-surface-muted">
        {leaders.map((l) => (
          <div key={l.name} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
              {l.name.replace("Mr. ", "").split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-medium text-ink">{l.name}</p>
                <span className="shrink-0 rounded-sm bg-success-50 px-1.5 py-0.5 text-[10.5px] font-medium text-success-600">{l.role}</span>
              </div>
              <p className="truncate text-xs text-ink-subtle">{l.email}</p>
              <p className="text-xs text-ink-subtle">{l.phone}</p>
            </div>
            <a href={`mailto:${l.email}`} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Email ${l.name}`}>
              <Mail className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const ACTIONS = [
  { label: "Add New Member", icon: UserPlus, accent: true },
  { label: "Add New Activity", icon: Activity },
  { label: "Send Message", icon: MessageSquare },
  { label: "Download Report", icon: Download },
];

export function GroupQuickActionsCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {ACTIONS.map((action) => (
          <button
            key={action.label}
            type="button"
            className={`flex items-center gap-2 rounded-lg border px-3 py-3 text-left transition-colors ${
              action.accent
                ? "border-success-200 bg-success-50 text-success-700 hover:bg-success-100"
                : "border-border text-ink-muted hover:bg-surface-canvas"
            }`}
          >
            <action.icon className="h-4 w-4 shrink-0" />
            <span className="text-xs font-medium leading-tight">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
