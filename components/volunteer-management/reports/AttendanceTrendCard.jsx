"use client";

import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";

export function AttendanceTrendCard({ trend }) {
  if (!trend) return null;
  const data = trend.labels.map((label, i) => ({ label, value: trend.values[i] }));
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Attendance Trend</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Week</option>
        </select>
      </div>
      <div className="h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 8, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="attendanceTrendFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#16A34A" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#16A34A" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
            <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#16A34A" strokeWidth={2} fill="url(#attendanceTrendFill)" dot={{ r: 3, fill: "#16A34A" }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
