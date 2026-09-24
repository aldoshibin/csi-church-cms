"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function TeamAttendanceCard({ data }) {
  if (!data) return null;
  const chartData = data.breakdown.map((b) => ({ ...b, count: b.pct }));

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Team Attendance (This Month)</h3>
      <div className="flex items-center gap-5">
        <div className="relative h-[140px] w-[140px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={chartData} dataKey="count" nameKey="label" innerRadius={44} outerRadius={68} paddingAngle={2}>
                {chartData.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-2xl font-bold text-ink">{data.average}%</span>
            <span className="text-[11px] text-ink-subtle">Average</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2.5">
          {data.breakdown.map((entry) => (
            <div key={entry.label} className="flex items-center gap-2 text-sm">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-ink-muted">{entry.label}</span>
              <span className="ml-auto font-medium text-ink">{entry.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
