"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function DocumentsByCategoryChart({ data }) {
  if (!data) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Documents by Category</h3>
      <div className="mt-3 flex items-center gap-4">
        <div className="relative h-[140px] w-[140px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data.breakdown} dataKey="value" nameKey="label" innerRadius={46} outerRadius={68} paddingAngle={2}>
                {data.breakdown.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-xl font-bold text-ink">{data.total}</span>
            <span className="text-[11px] text-ink-subtle">Total</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-1.5 text-sm">
          {data.breakdown.map((entry) => (
            <div key={entry.label} className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="truncate text-ink-muted">{entry.label} ({entry.pct}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
