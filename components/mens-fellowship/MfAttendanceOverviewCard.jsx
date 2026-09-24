"use client";

import Link from "next/link";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function MfAttendanceOverviewCard({ data = [], stats }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Attendance Overview (This Month)</h3>
        <Link href="/mens-fellowship/reports" className="text-xs font-medium text-interactive-500 hover:underline">View Report</Link>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="h-[220px] lg:col-span-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ left: -10, right: 10 }}>
              <defs>
                <linearGradient id="mfAttendanceFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16A34A" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#16A34A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#F1F5F9" />
              <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} domain={[0, 100]} />
              <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: 8, fontSize: 12 }} />
              <Area type="monotone" dataKey="value" stroke="#16A34A" strokeWidth={2.5} fill="url(#mfAttendanceFill)" dot={{ r: 3, fill: "#16A34A" }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col gap-3">
          <div className="rounded-lg border border-border p-3">
            <p className="text-xs text-ink-subtle">Average Attendance Rate</p>
            <p className="mt-1 font-display text-2xl font-bold text-ink">{stats.averageAttendanceRate.value}</p>
            <p className="mt-1 text-xs font-medium text-success-600">↑ {stats.averageAttendanceRate.delta} vs last 30 days</p>
          </div>
          <div className="rounded-lg border border-border p-3">
            <p className="text-xs text-ink-subtle">Total Meetings</p>
            <p className="mt-1 font-display text-2xl font-bold text-ink">{stats.totalMeetings.value}</p>
          </div>
          <div className="rounded-lg border border-border p-3">
            <p className="text-xs text-ink-subtle">Total Attendance</p>
            <p className="mt-1 font-display text-2xl font-bold text-ink">{stats.totalAttendance.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
