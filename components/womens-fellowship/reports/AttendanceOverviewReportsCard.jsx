"use client";

import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function AttendanceOverviewReportsCard({ data = [], summary }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Attendance Overview</h3>
        <Link href="/womens-fellowship/meeting-attendance" className="text-xs font-medium text-interactive-500 hover:underline">View Full Report</Link>
      </div>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: -10, right: 10 }}>
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Line type="monotone" dataKey="sundayWorship" name="Sunday Worship" stroke="#16A34A" strokeWidth={2.5} dot={{ r: 3, fill: "#16A34A" }} />
            <Line type="monotone" dataKey="bibleStudies" name="Bible Studies" stroke="#7C3AED" strokeWidth={2} dot={{ r: 3, fill: "#7C3AED" }} />
            <Line type="monotone" dataKey="fellowshipMeetings" name="Fellowship Meetings" stroke="#2563EB" strokeWidth={2} dot={{ r: 3, fill: "#2563EB" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3 border-t border-surface-muted pt-3">
        <div className="rounded-lg bg-surface-canvas p-3 text-center">
          <p className="font-display text-lg font-bold text-ink">{summary.sundayWorship}</p>
          <p className="text-xs text-ink-subtle">Sunday Worship Total Attendance</p>
        </div>
        <div className="rounded-lg bg-surface-canvas p-3 text-center">
          <p className="font-display text-lg font-bold text-ink">{summary.bibleStudies}</p>
          <p className="text-xs text-ink-subtle">Bible Studies Total Attendance</p>
        </div>
        <div className="rounded-lg bg-surface-canvas p-3 text-center">
          <p className="font-display text-lg font-bold text-ink">{summary.fellowshipMeetings}</p>
          <p className="text-xs text-ink-subtle">Fellowship Meetings Total Attendance</p>
        </div>
      </div>
    </div>
  );
}
