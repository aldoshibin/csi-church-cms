"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";


export function CommitteePerformanceChart({ data = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-interactive-500">Committee Performance Overview</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>Last 6 Months</option>
          <option>Last 12 Months</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#E4E7ED" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} width={32} />
          <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E4E7ED", fontSize: 13 }} />
          <Legend
            iconType="circle"
            formatter={(value) => <span className="text-xs text-ink-muted">{value}</span>}
            wrapperStyle={{ paddingTop: 8 }}
          />
          <Line type="monotone" dataKey="activitiesCompleted" name="Activities Completed" stroke="#0E5C4E" strokeWidth={2.5} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="newActivities" name="New Activities" stroke="#7C3AED" strokeWidth={2.5} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
