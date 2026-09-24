"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function FacilityStatusOverviewCard({ data }) {
  if (!data) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Facility Status Overview</h3>
      <div className="flex items-center gap-4">
        <div className="relative h-[130px] w-[130px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data.breakdown} dataKey="count" nameKey="label" innerRadius={42} outerRadius={62} paddingAngle={2}>
                {data.breakdown.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-xl font-bold text-ink">{data.total}</span>
            <span className="text-[11px] text-ink-subtle">Total</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 text-sm">
          {data.breakdown.map((entry) => (
            <div key={entry.label} className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="truncate text-ink-muted">{entry.label}</span>
              <span className="ml-auto shrink-0 font-medium text-ink">{entry.count} ({entry.pct}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
