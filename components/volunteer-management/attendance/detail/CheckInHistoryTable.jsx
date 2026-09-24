"use client";

import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { ATTENDANCE_STATUS_VARIANT } from "@/lib/mock/vmAttendanceMockData";

export function CheckInHistoryTable({ history = [] }) {
  const columns = [
    { key: "date", header: "Date", render: (row) => <span className="font-medium text-ink">{formatDate(row.date)}</span> },
    { key: "service", header: "Service / Event", render: (row) => <span className="text-ink-muted">{row.service}</span> },
    { key: "checkIn", header: "Check-in", render: (row) => <span className="text-ink-muted">{row.checkIn}</span> },
    { key: "checkOut", header: "Check-out", render: (row) => <span className="text-ink-muted">{row.checkOut}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={ATTENDANCE_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
  ];
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold text-ink">Check-in History</h3>
      <Table columns={columns} data={history} getRowId={(row) => `${row.date}-${row.service}`} className="rounded-none border-0 shadow-none" />
    </div>
  );
}
