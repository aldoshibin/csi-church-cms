"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";


export function RequestStatusOverview({ total, statusOverview }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-4 text-sm font-semibold text-ink">Request Status Overview</h3>
      <div className="flex items-center gap-5">
        <div className="relative h-[140px] w-[140px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={statusOverview} dataKey="count" nameKey="label" innerRadius={42} outerRadius={66} paddingAngle={2} strokeWidth={0}>
                {statusOverview.map((entry) => (
                  <Cell key={entry.label} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-ink">{total}</p>
            <p className="text-xs text-ink-subtle">Total</p>
          </div>
        </div>
        <ul className="flex-1 space-y-3">
          {statusOverview.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-sm">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="flex-1 text-ink">{item.label}</span>
              <span className="font-medium text-ink-subtle">{item.count} ({item.percent}%)</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
