"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function SubscriptionsByStatusCard({ breakdown = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Subscriptions by Status</h3>
      <div className="flex items-center gap-4">
        <div className="h-[140px] w-[140px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={breakdown} dataKey="count" nameKey="label" innerRadius={42} outerRadius={66} paddingAngle={2} strokeWidth={0}>
                {breakdown.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-1 flex-col gap-2.5">
          {breakdown.map((entry) => (
            <div key={entry.label} className="flex items-center gap-2 text-sm">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-ink-muted">{entry.label} <span className="text-ink-subtle">({entry.count})</span></span>
              <span className="ml-auto font-medium text-ink">{entry.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
