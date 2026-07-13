"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


export function MembershipTrendChart({ data = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-interactive-500">Membership Trend (Last 12 Months)</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>Last 12 Months</option>
          <option>Last 6 Months</option>
          <option>This Year</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="membershipTrendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0E5C4E" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#0E5C4E" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#E4E7ED" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} width={40} />
          <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E4E7ED", fontSize: 13 }} />
          <Area type="monotone" dataKey="members" stroke="#0E5C4E" strokeWidth={2.5} fill="url(#membershipTrendFill)" dot={{ r: 3, fill: "#0E5C4E" }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
