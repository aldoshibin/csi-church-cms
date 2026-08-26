"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/lib/utils";

export function IncomeVsExpensesCard({ total, breakdown = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#00695C]">Income vs Expenses</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Month</option>
        </select>
      </div>

      <div className="relative h-[170px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={breakdown} dataKey="amount" nameKey="label" innerRadius={55} outerRadius={78} paddingAngle={2} strokeWidth={0}>
              {breakdown.map((entry) => (
                <Cell key={entry.label} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-display text-base font-bold text-ink">{formatCurrency(total)}</p>
          <p className="text-xs text-ink-subtle">Total</p>
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-2">
        {breakdown.map((entry) => (
          <div key={entry.label} className="flex items-center gap-2 text-sm">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-ink-muted">{entry.label}</span>
            <span className="ml-auto text-ink-muted">
              {formatCurrency(entry.amount)} ({entry.pct}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
