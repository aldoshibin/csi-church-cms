"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function AttendanceTrendChart({ data = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Attendance Trend <span className="font-normal text-ink-subtle">(This Month)</span></h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>
      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: -20, right: 10 }}>
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#8B90A0" }} axisLine={false} tickLine={false}
              ticks={data.length ? [data[0].label, data[Math.floor(data.length * 0.28)]?.label, data[Math.floor(data.length * 0.56)]?.label, data[Math.floor(data.length * 0.85)]?.label].filter(Boolean) : []}
            />
            <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: "#8B90A0" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
            <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: 8, fontSize: 12 }} />
            <Line type="monotone" dataKey="pct" stroke="#16A34A" strokeWidth={2.5} dot={{ r: 3, fill: "#16A34A" }} activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
