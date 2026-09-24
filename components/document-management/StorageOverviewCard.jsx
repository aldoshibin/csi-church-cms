"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/Button";

export function StorageOverviewCard({ data }) {
  if (!data) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Storage Overview</h3>
      <div className="mt-3 flex items-center gap-4">
        <div className="relative h-[130px] w-[130px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data.breakdown} dataKey="value" nameKey="label" innerRadius={42} outerRadius={62} paddingAngle={2}>
                {data.breakdown.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-1 flex-col gap-2 text-sm">
          {data.breakdown.map((entry) => (
            <div key={entry.label} className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="truncate text-ink-muted">
                {entry.valueLabel ? `${entry.valueLabel} ${entry.label}` : entry.label} ({entry.pct}%)
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 flex items-center justify-between border-t border-border pt-3 text-sm">
        <span className="text-ink-subtle">Total Storage:</span>
        <span className="font-medium text-ink">{data.totalLabel}</span>
      </p>
      <Button type="button" variant="secondary" className="mt-3 w-full">Manage Storage</Button>
    </div>
  );
}
