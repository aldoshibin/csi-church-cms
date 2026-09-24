"use client";

import { Calendar, SlidersHorizontal, Eye, ChevronDown } from "lucide-react";
import { ATTENDANCE_CLASS_OPTIONS } from "@/lib/mock/attendanceMockData";

export function AttendanceOverviewTable({ overview = [], overviewTotal, date, classFilter, onClassFilterChange, onView }) {
  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Attendance Overview</h3>
        <div className="flex items-center gap-2">
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <Calendar className="h-4 w-4" /> {date} <ChevronDown className="h-3.5 w-3.5 opacity-60" />
          </button>
          <select value={classFilter} onChange={(e) => onClassFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Classes</option>
            {ATTENDANCE_CLASS_OPTIONS.map((c) => <option key={c}>{c}</option>)}
          </select>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border text-xs text-ink-subtle">
            <th className="px-4 py-2.5 font-medium">Class</th>
            <th className="px-4 py-2.5 font-medium">Total Students</th>
            <th className="px-4 py-2.5 font-medium">Present</th>
            <th className="px-4 py-2.5 font-medium">Absent</th>
            <th className="px-4 py-2.5 font-medium">Late</th>
            <th className="px-4 py-2.5 font-medium">Attendance %</th>
            <th className="px-4 py-2.5 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {overview.map((row) => (
            <tr key={row.className}>
              <td className="px-4 py-3 font-medium text-interactive-500">{row.className}</td>
              <td className="px-4 py-3 text-ink">{row.total}</td>
              <td className="px-4 py-3 text-ink">{row.present}</td>
              <td className="px-4 py-3 text-ink">{row.absent}</td>
              <td className="px-4 py-3 text-ink">{row.late}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-24 overflow-hidden rounded-full bg-surface-muted">
                    <div className="h-full rounded-full bg-success-500" style={{ width: `${row.pct}%` }} />
                  </div>
                  <span className="font-medium text-ink">{row.pct}%</span>
                </div>
              </td>
              <td className="px-4 py-3 text-right">
                <button type="button" onClick={() => onView?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.className} attendance`}>
                  <Eye className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t border-border bg-surface-canvas font-semibold">
            <td className="px-4 py-3 text-ink">Total</td>
            <td className="px-4 py-3 text-ink">{overviewTotal.total}</td>
            <td className="px-4 py-3 text-ink">{overviewTotal.present}</td>
            <td className="px-4 py-3 text-ink">{overviewTotal.absent}</td>
            <td className="px-4 py-3 text-ink">{overviewTotal.late}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-surface-muted">
                  <div className="h-full rounded-full bg-success-500" style={{ width: `${overviewTotal.pct}%` }} />
                </div>
                <span className="text-ink">{overviewTotal.pct}%</span>
              </div>
            </td>
            <td />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
