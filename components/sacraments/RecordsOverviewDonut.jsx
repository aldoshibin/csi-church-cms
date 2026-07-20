"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowRight } from "lucide-react";

export function RecordsOverviewDonut({ total, breakdown, onViewFullReport }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-4 text-sm font-semibold text-interactive-500">Sacramental Records Overview</h3>
      <div className="flex flex-1 items-center gap-4">
        <div className="relative h-[140px] w-[140px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={breakdown} dataKey="count" nameKey="label" innerRadius={44} outerRadius={68} paddingAngle={2} strokeWidth={0}>
                {breakdown.map((entry) => (
                  <Cell key={entry.label} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xl font-bold text-ink">{total}</p>
            <p className="text-[10px] text-ink-subtle">Total Records</p>
          </div>
        </div>
        <ul className="flex-1 space-y-1.5">
          {breakdown.map((item) => (
            <li key={item.label} className="flex items-center gap-1.5 text-xs">
              <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ backgroundColor: item.color }} />
              <span className="flex-1 truncate text-ink">{item.label}</span>
              <span className="text-ink-subtle">{item.count} ({item.percent}%)</span>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={onViewFullReport} className="mt-3 flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
        View full report <ArrowRight className="h-3 w-3" />
      </button>
    </div>
  );
}
