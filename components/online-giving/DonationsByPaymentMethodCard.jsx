"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/lib/utils";

export function DonationsByPaymentMethodCard({ total, breakdown = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Donations by Payment Method</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Period</option>
          <option>Last Period</option>
        </select>
      </div>

      <div className="relative mx-auto h-[190px] w-[190px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={breakdown} dataKey="amount" nameKey="label" innerRadius={58} outerRadius={90} paddingAngle={2} strokeWidth={0}>
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

      <div className="mt-4 flex flex-col gap-2.5">
        {breakdown.map((entry) => (
          <div key={entry.label} className="flex items-center gap-2 text-sm">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-ink-muted">{entry.label}</span>
            <span className="ml-auto text-xs font-medium text-ink-subtle">{entry.pct}%</span>
            <span className="w-24 shrink-0 text-right font-medium text-ink">{formatCurrency(entry.amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
