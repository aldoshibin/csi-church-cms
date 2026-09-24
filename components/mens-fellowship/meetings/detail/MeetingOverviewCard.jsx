"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}

export function MeetingOverviewCard({ overview }) {
  if (!overview) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Meeting Overview</h3>
      <div className="flex items-center gap-4">
        <div className="flex flex-1 flex-col gap-2.5">
          <Row label="Total Invited" value={overview.totalInvited} />
          <Row label="Total Attended" value={overview.totalAttended} />
          <Row label="Attendance Rate" value={`${overview.attendanceRate}%`} />
          <Row label="Completed" value={overview.completed ? "Yes" : "No"} />
          <Row label="Cancelled" value={overview.cancelled ? "Yes" : "No"} />
        </div>
        <div className="h-[110px] w-[110px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={overview.breakdown} dataKey="count" nameKey="label" innerRadius={30} outerRadius={52} paddingAngle={1}>
                {overview.breakdown.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-3 border-t border-surface-muted pt-3">
        {overview.breakdown.map((entry) => (
          <div key={entry.label} className="flex items-center gap-1.5 text-xs">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-ink-muted">{entry.label} ({entry.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
