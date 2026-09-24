"use client";

import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Users2, UsersRound } from "lucide-react";

export function MembersByMinistryCard({ total, breakdown = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
        <Users2 className="h-4 w-4 text-interactive-600" /> Members by Ministry
      </h3>
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
      <div className="mt-3 border-t border-surface-muted pt-3 text-sm font-semibold text-ink">
        Total Members: {total}
      </div>
    </div>
  );
}

export function TopYouthGroupsCard({ groups = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
          <UsersRound className="h-4 w-4 text-interactive-600" /> Top Youth Groups
        </h3>
        <Link href="/youth-ministry/youth-groups" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="mb-2 grid grid-cols-3 gap-2 text-xs text-ink-subtle">
        <span>Group Name</span>
        <span>Members</span>
        <span>Attendance (Avg.)</span>
      </div>
      <div className="flex flex-col gap-3">
        {groups.map((g) => (
          <div key={g.name} className="grid grid-cols-3 items-center gap-2 text-sm">
            <span className="truncate font-medium text-ink">{g.name}</span>
            <span className="text-ink">{g.members}</span>
            <div className="flex items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-muted">
                <div className="h-full rounded-full bg-success-500" style={{ width: `${g.attendanceAvg}%` }} />
              </div>
              <span className="w-9 shrink-0 text-right text-xs font-medium text-ink">{g.attendanceAvg}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
