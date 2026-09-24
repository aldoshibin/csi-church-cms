"use client";

import { Calendar, SlidersHorizontal, Eye } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { SS_CLASS_OPTIONS } from "@/lib/mock/sundaySchoolMockData";
import { formatDate } from "@/lib/utils";

export function RecentAttendanceCard({ attendance, isLoading, pagination, classFilter, onClassFilterChange, dateRange, onView }) {
  const columns = [
    { key: "date", header: "Date", render: (row) => <span className="text-ink">{formatDate(row.date)} ({row.day})</span> },
    { key: "className", header: "Class", render: (row) => <span className="font-medium text-ink">{row.className}</span> },
    { key: "teacher", header: "Teacher", render: (row) => <span className="text-ink-muted">{row.teacher}</span> },
    { key: "scheduled", header: "Scheduled", render: (row) => <span className="text-ink">{row.scheduled}</span> },
    { key: "present", header: "Present", render: (row) => <span className="font-medium text-success-600">{row.present}</span> },
    { key: "absent", header: "Absent", render: (row) => <span className="font-medium text-danger-600">{row.absent}</span> },
    {
      key: "pct", header: "Attendance %",
      render: (row) => <span className="font-medium text-ink">{row.scheduled ? ((row.present / row.scheduled) * 100).toFixed(1) : "0.0"}%</span>,
    },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <button
          type="button"
          onClick={() => onView?.(row)}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas"
          aria-label={`View attendance for ${row.className} on ${row.date}`}
        >
          <Eye className="h-4 w-4" />
        </button>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Recent Attendance</h3>
        <div className="flex items-center gap-2">
          <select value={classFilter} onChange={(e) => onClassFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Classes</option>
            {SS_CLASS_OPTIONS.map((c) => <option key={c}>{c}</option>)}
          </select>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <Calendar className="h-4 w-4" /> {dateRange}
          </button>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>
      <Table columns={columns} data={attendance} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
