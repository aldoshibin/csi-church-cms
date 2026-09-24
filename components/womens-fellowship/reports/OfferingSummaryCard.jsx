"use client";

import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/lib/utils";

export function OfferingSummaryCard({ total, delta, breakdown = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Offering Summary</h3>
        <Link href="/womens-fellowship/reports" className="text-xs font-medium text-interactive-500 hover:underline">View Full Report</Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative h-[190px] w-[190px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={breakdown} dataKey="amount" nameKey="label" innerRadius={58} outerRadius={90} paddingAngle={2} strokeWidth={0}>
                {breakdown.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-display text-lg font-bold text-ink">{formatCurrency(total)}</p>
            <p className="text-xs text-ink-subtle">Total Offerings</p>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {breakdown.map((entry) => (
          <div key={entry.label} className="flex items-center gap-2 text-sm">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-ink-muted">{entry.label}</span>
            <span className="ml-auto font-medium text-ink">{formatCurrency(entry.amount)} ({entry.pct}%)</span>
          </div>
        ))}
      </div>
      <p className="mt-3 border-t border-surface-muted pt-3 text-xs font-medium text-success-600">↑ {delta} vs last 30 days</p>
    </div>
  );
}
