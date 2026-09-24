"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function StudentsByClassCard({ total, breakdown = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Students by Class</h3>
      <div className="flex items-center gap-5">
        <div className="h-[150px] w-[150px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={breakdown} dataKey="count" nameKey="label" innerRadius={45} outerRadius={72} paddingAngle={1}>
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
      <div className="mt-3 flex items-center justify-between border-t border-surface-muted pt-3 text-sm font-semibold">
        <span className="text-ink">Total</span>
        <span className="text-ink">{total}</span>
      </div>
    </div>
  );
}
