"use client";

import { Users, ShieldCheck, ShieldOff, UserPlus, Droplets } from "lucide-react";

const ROWS = (s) => [
  { icon: Users, label: "Total Members", value: s.totalMembers.toLocaleString(), tone: "bg-interactive-500" },
  { icon: ShieldCheck, label: "Active Members", value: `${s.activeMembers.count.toLocaleString()}`, sub: `${s.activeMembers.percent}%`, tone: "bg-success-500" },
  { icon: ShieldOff, label: "Inactive Members", value: `${s.inactiveMembers.count.toLocaleString()}`, sub: `${s.inactiveMembers.percent}%`, tone: "bg-warning-500" },
  { icon: UserPlus, label: "New Members (This Year)", value: s.newMembersThisYear.toLocaleString(), tone: "bg-interactive-500" },
  { icon: Droplets, label: "Baptized Members", value: s.baptizedMembers.toLocaleString(), tone: "bg-brand-700" },
];

export function MemberDirectorySummaryPanel({ summary }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Member Summary</h3>
      <ul className="space-y-3">
        {ROWS(summary).map((row) => (
          <li key={row.label} className="flex items-center gap-3">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white ${row.tone}`}>
              <row.icon className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-ink-subtle">{row.label}</p>
              <p className="text-base font-bold text-ink font-display">
                {row.value} {row.sub && <span className="text-xs font-normal text-ink-subtle">({row.sub})</span>}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
