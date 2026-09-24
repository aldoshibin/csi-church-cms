"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { UsersRound } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function AttendanceOverviewReportCard({ trend = [], summary }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
        <UsersRound className="h-4 w-4 text-interactive-600" /> Attendance Overview
      </h3>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trend} margin={{ left: -10, right: 10 }}>
            <CartesianGrid vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#8B90A0" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Line type="monotone" dataKey="thisMonth" name="This Month" stroke="#16A34A" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="lastMonth" name="Last Month" stroke="#94A3B8" strokeWidth={2} strokeDasharray="4 4" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-4 border-t border-surface-muted pt-3 sm:grid-cols-4">
        <div>
          <p className="text-xs text-ink-subtle">Highest Attendance</p>
          <p className="mt-0.5 font-display text-lg font-bold text-ink">{summary.highest.value}</p>
          <p className="text-xs text-ink-subtle">{formatDate(summary.highest.date)}</p>
        </div>
        <div>
          <p className="text-xs text-ink-subtle">Lowest Attendance</p>
          <p className="mt-0.5 font-display text-lg font-bold text-ink">{summary.lowest.value}</p>
          <p className="text-xs text-ink-subtle">{formatDate(summary.lowest.date)}</p>
        </div>
        <div>
          <p className="text-xs text-ink-subtle">Average Attendance</p>
          <p className="mt-0.5 font-display text-lg font-bold text-ink">{summary.average.value}</p>
          <p className="text-xs text-ink-subtle">{summary.average.sub}</p>
        </div>
        <div>
          <p className="text-xs text-ink-subtle">Total Attendance</p>
          <p className="mt-0.5 font-display text-lg font-bold text-ink">{summary.total.value.toLocaleString("en-IN")}</p>
          <p className="text-xs text-ink-subtle">{summary.total.sub}</p>
        </div>
      </div>
    </div>
  );
}
