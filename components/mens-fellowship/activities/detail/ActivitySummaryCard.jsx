"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function Row({ label, value, color }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className={`font-semibold ${color ?? "text-ink"}`}>{value}</span>
    </div>
  );
}

export function ActivitySummaryCard({ summary }) {
  if (!summary) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Activity Summary</h3>
      <div className="flex items-center gap-4">
        <div className="h-[110px] w-[110px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={summary.breakdown} dataKey="count" nameKey="label" innerRadius={30} outerRadius={52} paddingAngle={1}>
                {summary.breakdown.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          {summary.breakdown.map((entry) => (
            <div key={entry.label} className="flex items-center gap-1.5 text-xs">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-ink-muted">{entry.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-2.5 border-t border-surface-muted pt-3">
        <Row label="Total Participants" value={summary.totalParticipants} />
        <Row label="Attended" value={summary.attended} color="text-success-600" />
        <Row label="Absent" value={summary.absent} color="text-danger-600" />
        <Row label="Participation Rate" value={`${summary.participationRate}%`} color="text-danger-600" />
      </div>
    </div>
  );
}
