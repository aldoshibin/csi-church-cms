"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function StorageOverviewCard({ data }) {
  if (!data) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Storage Overview</h3>
      <div className="flex flex-col items-center">
        <div className="relative h-[150px] w-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data.breakdown} dataKey="value" nameKey="label" innerRadius={54} outerRadius={72} startAngle={90} endAngle={-270} paddingAngle={2}>
                {data.breakdown.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-lg font-bold text-ink">{data.usedLabel}</span>
            <span className="text-[11px] text-ink-subtle">Used</span>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-col gap-2 text-sm">
          {data.breakdown.map((entry) => (
            <div key={entry.label} className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-ink-muted">{entry.label}</span>
              <span className="ml-auto font-medium text-ink">{entry.value} GB ({entry.pct}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
