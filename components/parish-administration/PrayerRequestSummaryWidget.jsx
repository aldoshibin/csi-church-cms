"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";


export function PrayerRequestSummaryWidget({ total, breakdown = [] }) {
  return (
    // <div className="rounded-lg border border-border bg-white p-4 shadow-card">

    <div className="">
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
            <p className="text-xl font-bold text-ink">{total}</p>
            <p className="text-[10px] leading-tight text-ink-subtle">Total<br />Requests</p>
          </div>
        </div>

        <ul className="flex-1 space-y-2">
          {breakdown.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-xs">
              <span className="h-2.5 w-2.5 shrink-0 " style={{ backgroundColor: item.color }} />
              <span className="flex-1 text-ink-muted">{item.label}</span>
              <span className="font-medium text-ink">{item.count} ({item.percent}%)</span>
            </li>
          ))}
        </ul>
      </div>

      <a href="/prayers" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-interactive-500 hover:underline">
        Manage Prayer Requests →
      </a>
    </div>
  );
}
