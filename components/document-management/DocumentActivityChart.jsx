"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

export function DocumentActivityChart({ data }) {
  if (!data) return null;
  const chartData = data.months.map((month, i) => ({
    month, uploads: data.uploads[i], downloads: data.downloads[i],
  }));

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Document Activity</h3>
        <div className="flex items-center gap-3 text-xs text-ink-subtle">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-interactive-500" /> Uploads</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-success-500" /> Downloads</span>
        </div>
      </div>
      <div className="mt-3 h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="uploads" stroke="#2563EB" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="downloads" stroke="#16A34A" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
