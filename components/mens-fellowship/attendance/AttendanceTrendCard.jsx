"use client";

import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";

export function AttendanceTrendCard({ trend = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Attendance Trend (Last 6 Meetings)</h3>
        <Link href="/mens-fellowship/reports" className="text-xs font-medium text-interactive-500 hover:underline">View Report</Link>
      </div>
      <div className="h-[160px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trend} margin={{ top: 5, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
            <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: "#94A3B8" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
            <Tooltip formatter={(v) => [`${v}%`, "Attendance"]} />
            <Line type="monotone" dataKey="rate" stroke="#16A34A" strokeWidth={2} dot={{ r: 3, fill: "#16A34A" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
