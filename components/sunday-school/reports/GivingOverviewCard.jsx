"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/lib/utils";

export function GivingOverviewCard({ totalGiving, averagePerDay, trend = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Giving Overview</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>
      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trend} margin={{ left: -10, right: 10 }}>
            <defs>
              <linearGradient id="givingFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#16A34A" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#16A34A" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: "#8B90A0" }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${v / 1000}k`} />
            <Tooltip formatter={(v) => formatCurrency(v)} contentStyle={{ borderRadius: 8, fontSize: 12 }} />
            <Area type="monotone" dataKey="amount" stroke="#16A34A" strokeWidth={2.5} fill="url(#givingFill)" dot={{ r: 3, fill: "#16A34A" }} activeDot={{ r: 5 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-4 border-t border-surface-muted pt-3">
        <div>
          <p className="text-xs text-ink-subtle">Total Giving</p>
          <p className="mt-0.5 font-display text-lg font-bold text-ink">{formatCurrency(totalGiving)}</p>
        </div>
        <div>
          <p className="text-xs text-ink-subtle">Average per Day</p>
          <p className="mt-0.5 font-display text-lg font-bold text-ink">{formatCurrency(averagePerDay)}</p>
        </div>
      </div>
    </div>
  );
}
