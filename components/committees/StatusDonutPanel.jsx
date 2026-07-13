"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";


export function StatusDonutPanel({ title, breakdown = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">{title}</h3>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie data={breakdown} dataKey="count" nameKey="label" innerRadius={55} outerRadius={86} paddingAngle={2} strokeWidth={0}>
            {breakdown.map((entry) => (
              <Cell key={entry.label} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
        {breakdown.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 text-sm">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-ink">{item.label}</span>
            <span className="ml-auto font-medium text-ink-subtle">
              {item.count}{item.percent != null ? ` (${item.percent}%)` : ""}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
