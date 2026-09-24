"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ATT_MINISTRY_OPTIONS } from "@/lib/mock/ymAttendanceMockData";

export function AttendanceOverviewChart({ data = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-ink">Attendance Overview</h3>
        <div className="flex items-center gap-2">
          <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
            <option>This Month</option>
            <option>Last Month</option>
          </select>
          <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
            <option>All Ministries</option>
            {ATT_MINISTRY_OPTIONS.map((m) => <option key={m}>{m}</option>)}
          </select>
        </div>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: -10, right: 10 }}>
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
            <Line type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={2.5} dot={{ r: 3, fill: "#2563EB" }} activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
