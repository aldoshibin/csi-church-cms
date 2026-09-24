"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/lib/utils";

export function ClicksAmountOverviewChart({ data = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Clicks &amp; Amount Overview</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Period</option>
          <option>Last Period</option>
        </select>
      </div>
      <div className="mb-2 flex items-center gap-4 text-xs text-ink-muted">
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-success-500" /> Clicks</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-interactive-500" /> Amount (₹)</span>
      </div>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: -10, right: 10 }}>
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
            <YAxis yAxisId="clicks" tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
            <YAxis yAxisId="amount" orientation="right" tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${v / 100000}L`} />
            <Tooltip formatter={(v, name) => (name === "amount" ? formatCurrency(v) : v)} contentStyle={{ borderRadius: 8, fontSize: 12 }} />
            <Line yAxisId="clicks" type="monotone" dataKey="clicks" stroke="#16A34A" strokeWidth={2.5} dot={{ r: 3, fill: "#16A34A" }} />
            <Line yAxisId="amount" type="monotone" dataKey="amount" stroke="#2563EB" strokeWidth={2.5} dot={{ r: 3, fill: "#2563EB" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
