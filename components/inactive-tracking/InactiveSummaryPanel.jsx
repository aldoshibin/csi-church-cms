"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export function InactiveSummaryPanel({ total, breakdown }) {
  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-3 text-sm font-semibold text-interactive-500">Inactive Summary</h2>
      <div className="flex flex-col items-center gap-3">
        <div className="relative h-[130px] w-[130px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={breakdown} dataKey="count" nameKey="label" innerRadius={40} outerRadius={62} paddingAngle={2} strokeWidth={0}>
                {breakdown.map((entry) => (
                  <Cell key={entry.label} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="w-full space-y-1.5">
          {breakdown.map((item) => (
            <li key={item.label} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1.5 text-ink">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                {item.label}
              </span>
              <span className="text-xs text-ink-subtle">{item.count} ({item.percent}%)</span>
            </li>
          ))}
        </ul>
        <div className="w-full rounded-md bg-surface-muted py-2 text-center text-sm font-semibold text-ink">
          Total: {total.toLocaleString()} Members
        </div>
      </div>
    </section>
  );
}
