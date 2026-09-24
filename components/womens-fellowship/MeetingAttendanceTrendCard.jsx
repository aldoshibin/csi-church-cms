"use client";

import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function MeetingAttendanceTrendCard({ data = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Meeting Attendance Trend</h3>
        <Link href="/womens-fellowship/reports" className="text-xs font-medium text-interactive-500 hover:underline">View Report</Link>
      </div>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: -10, right: 10 }}>
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} domain={[0, 100]} />
            <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: 8, fontSize: 12 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Line type="monotone" dataKey="thisMonth" name="This Month" stroke="#16A34A" strokeWidth={2.5} dot={{ r: 3, fill: "#16A34A" }} />
            <Line type="monotone" dataKey="lastMonth" name="Last Month" stroke="#94A3B8" strokeWidth={2} dot={{ r: 3, fill: "#94A3B8" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
