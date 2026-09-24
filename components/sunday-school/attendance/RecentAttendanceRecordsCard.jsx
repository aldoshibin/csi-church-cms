"use client";

import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";

export function RecentAttendanceRecordsCard({ records, isLoading, pagination, onViewRecord }) {
  const columns = [
    { key: "date", header: "Date", render: (row) => <span className="text-ink">{formatDate(row.date)}</span> },
    { key: "className", header: "Class", render: (row) => <span className="font-medium text-ink">{row.className}</span> },
    { key: "markedBy", header: "Marked By", render: (row) => <span className="text-ink-muted">{row.markedBy}</span> },
    { key: "present", header: "Present", render: (row) => <span className="text-ink">{row.present}</span> },
    { key: "absent", header: "Absent", render: (row) => <span className="text-ink">{row.absent}</span> },
    { key: "late", header: "Late", render: (row) => <span className="text-ink">{row.late}</span> },
    {
      key: "pct", header: "Attendance %",
      render: (row) => {
        const total = row.present + row.absent + row.late;
        return <span className="font-medium text-ink">{total ? ((row.present / total) * 100).toFixed(1) : "0.0"}%</span>;
      },
    },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <button
          type="button" onClick={() => onViewRecord?.(row)}
          className="rounded-md bg-success-50 px-3 py-1.5 text-xs font-medium text-success-600 hover:bg-success-100"
        >
          View
        </button>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Recent Attendance Records</h3>
      </div>
      <Table columns={columns} data={records} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
