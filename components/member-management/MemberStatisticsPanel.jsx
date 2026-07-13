"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";


export function MemberStatisticsPanel({ total, breakdown = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Member Statistics</h3>
      <div className="flex items-center gap-4">
        <div className="relative h-[120px] w-[120px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={breakdown} dataKey="count" nameKey="label" innerRadius={36} outerRadius={58} paddingAngle={2} strokeWidth={0}>
                {breakdown.map((entry) => (
                  <Cell key={entry.label} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xl font-bold text-ink">{total.toLocaleString()}</p>
            <p className="text-[10px] text-ink-subtle">Total Members</p>
          </div>
        </div>
        <ul className="flex-1 space-y-2.5">
          {breakdown.map((item) => (
            <li key={item.label} className="text-sm">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-ink">{item.label}</span>
              </div>
              <p className="ml-4 text-xs text-ink-subtle">{item.count.toLocaleString()} ({item.percent}%)</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
