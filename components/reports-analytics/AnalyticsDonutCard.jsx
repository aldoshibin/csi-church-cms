"use client";

import * as React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function AnalyticsDonutCard({ data, title, totalLabel = "Total", formatValue }) {
  const [range, setRange] = React.useState("This Year");
  if (!data) return null;
  const format = formatValue ?? ((v) => v);
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">{title}</h3>
        <select
          value={range} onChange={(e) => setRange(e.target.value)}
          className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted"
        >
          <option>This Year</option>
          <option>Last Year</option>
        </select>
      </div>
      <div className="mt-3 flex items-center gap-4">
        <div className="relative h-[130px] w-[130px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data.breakdown} dataKey="value" nameKey="label" innerRadius={42} outerRadius={62} paddingAngle={3}>
                {data.breakdown.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm font-bold text-ink">{format(data.total)}</span>
            <span className="text-[10px] text-ink-subtle">{totalLabel}</span>
          </div>
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
                <span className="font-medium text-ink">{format(entry.value)} ({pct}%)</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
