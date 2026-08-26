"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/lib/utils";

export function ExpenseByCategoryCard({ categories = [], total }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Expense by Category <span className="font-normal text-ink-subtle">(This Year)</span></h3>
        <Link href="/finance/reports" className="flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
          View Report <ExternalLink className="h-3 w-3" />
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="h-[190px] w-[190px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={categories} dataKey="amount" nameKey="label" innerRadius={58} outerRadius={90} paddingAngle={2} strokeWidth={0}>
                {categories.map((c) => <Cell key={c.label} fill={c.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2">
            {categories.map((c) => (
              <div key={c.label} className="flex items-center gap-2 text-sm">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: c.color }} />
                <span className="truncate text-ink-muted">{c.label}</span>
                <span className="ml-auto shrink-0 font-medium text-ink">{formatCurrency(c.amount)}</span>
                <span className="w-14 shrink-0 text-right text-ink-subtle">{c.pct}%</span>
              </div>
            ))}
            <div className="mt-1 flex items-center justify-between border-t border-surface-muted pt-2 text-sm font-semibold">
              <span className="text-ink">Total</span>
              <span className="text-ink">{formatCurrency(total)}</span>
              <span className="w-14 text-right text-ink-subtle">100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
