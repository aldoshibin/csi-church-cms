"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/lib/utils";

export function DonationsOverviewChart({ data = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-ink">Donations Overview</h3>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-ink-muted">
            <span className="h-2.5 w-2.5 rounded-full bg-success-500" /> This Period
          </span>
          <span className="flex items-center gap-1.5 text-xs text-ink-subtle">
            <span className="h-2.5 w-2.5 rounded-full border border-ink-subtle" /> Last Period
          </span>
          <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
            <option>By Day</option>
            <option>By Week</option>
            <option>By Month</option>
          </select>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: -10, right: 10 }}>
            <defs>
              <linearGradient id="ogThisPeriodFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#16A34A" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#16A34A" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false}
              ticks={data.length ? [data[0].label, data[Math.floor(data.length * 0.18)]?.label, data[Math.floor(data.length * 0.35)]?.label, data[Math.floor(data.length * 0.53)]?.label, data[Math.floor(data.length * 0.7)]?.label, data[Math.floor(data.length * 0.88)]?.label].filter(Boolean) : []}
            />
            <YAxis tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${v / 1000}k`} />
            <Tooltip formatter={(v) => formatCurrency(v)} contentStyle={{ borderRadius: 8, fontSize: 12 }} />
            <Area type="monotone" dataKey="thisPeriod" stroke="#16A34A" strokeWidth={2.5} fill="url(#ogThisPeriodFill)" dot={{ r: 3, fill: "#16A34A" }} activeDot={{ r: 5 }} />
            <Area type="monotone" dataKey="lastPeriod" stroke="#CBD5E1" strokeWidth={2} strokeDasharray="4 4" fill="transparent" dot={{ r: 2.5, fill: "#CBD5E1" }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
