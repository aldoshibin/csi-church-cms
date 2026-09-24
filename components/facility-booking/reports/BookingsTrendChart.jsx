"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function BookingsTrendChart({ data }) {
  if (!data) return null;
  const chartData = data.labels.map((label, idx) => ({
    label, thisMonth: data.thisMonth[idx], lastMonth: data.lastMonth[idx],
  }));

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Bookings Trend</h3>
        <div className="flex items-center gap-4 text-xs text-ink-subtle">
          <span className="flex items-center gap-1.5"><span className="h-2 w-4 rounded-full bg-interactive-500" /> This Month</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-4 rounded-full border border-dashed border-ink-subtle" /> Last Month</span>
        </div>
      </div>
      <div className="mt-4 h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="thisMonth" stroke="#4F46E5" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="lastMonth" stroke="#94A3B8" strokeWidth={2} strokeDasharray="5 4" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
