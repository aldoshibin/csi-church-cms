"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";


export function AgeGroupDistributionPanel({ total, breakdown }) {
  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-4 text-sm font-semibold text-interactive-500">Age Group Distribution</h2>

      <div className="flex items-center gap-5">
        <div className="h-[128px] w-[128px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={breakdown} dataKey="count" nameKey="label" innerRadius={36} outerRadius={62} paddingAngle={2} strokeWidth={0}>
                {breakdown.map((entry) => (
                  <Cell key={entry.label} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="flex-1 space-y-3.5">
          {breakdown.map((item) => (
            <li key={item.label}>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm font-semibold text-ink">{item.label}</span>
              </div>
              <p className="ml-4 text-sm text-ink-subtle">{item.count} ({item.percent}%)</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 inline-flex w-fit rounded-md border border-border px-3 py-1.5 text-sm font-medium text-ink">
        Total: {total.toLocaleString()} Members
      </div>
    </section>
  );
}
