"use client";

import * as React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/lib/utils";

export function DonationsOverTimeChart({ data = [] }) {
  const [range, setRange] = React.useState("This Year");
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Donations Over Time</h3>
        <select
          value={range} onChange={(e) => setRange(e.target.value)}
          className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted"
        >
          <option>This Year</option>
          <option>Last Year</option>
        </select>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: -10, right: 10, top: 10 }}>
            <defs>
              <linearGradient id="reportsDonationsOverTimeFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#16A34A" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#16A34A" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} tickFormatter={(v) => formatCurrency(v)} />
            <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} formatter={(v) => formatCurrency(v)} />
            <Area type="monotone" dataKey="amount" name="Donations" stroke="#16A34A" strokeWidth={2} fill="url(#reportsDonationsOverTimeFill)" dot={{ r: 3, fill: "#16A34A" }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
