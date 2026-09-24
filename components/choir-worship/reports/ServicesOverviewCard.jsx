"use client";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, LabelList } from "recharts";
import { CW_REPORT_DATE_RANGE_OPTIONS } from "@/lib/mock/choirWorshipReportsMockData";

export function ServicesOverviewCard({ data = [], range, onRangeChange }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Services Overview</h3>
        <select value={range} onChange={(e) => onRangeChange(e.target.value)} className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          {CW_REPORT_DATE_RANGE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#16A34A" radius={[4, 4, 0, 0]} maxBarSize={56}>
              <LabelList dataKey="count" position="top" style={{ fill: "#111827", fontSize: 12, fontWeight: 600 }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
