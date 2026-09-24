"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function PositionOverviewCard({ data }) {
  if (!data) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Position Overview</h3>
      <div className="mt-3 flex items-center gap-4">
        <div className="relative h-[120px] w-[120px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data.breakdown} dataKey="value" nameKey="label" innerRadius={38} outerRadius={58} paddingAngle={3}>
                {data.breakdown.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-1 flex-col gap-2 text-sm">
          {data.breakdown.map((entry) => {
            const pct = ((entry.value / data.total) * 100).toFixed(1);
            return (
              <div key={entry.label} className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-ink-muted">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ backgroundColor: entry.color }} />
                  {entry.label}
                </span>
                <span className="font-medium text-ink">{entry.value} ({pct}%)</span>
              </div>
            );
          })}
        </div>
      </div>
      <p className="mt-4 flex items-center justify-between border-t border-border pt-3 text-sm">
        <span className="text-ink-subtle">Total Positions</span>
        <span className="font-medium text-ink">{data.total}</span>
      </p>
    </div>
  );
}
