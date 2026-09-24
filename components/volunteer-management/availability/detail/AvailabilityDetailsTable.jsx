"use client";

import { Table } from "@/components/ui/Table";
import { AvailabilityStatusTag } from "../AvailabilityStatusTag";

export function AvailabilityDetailsTable({ details = [] }) {
  const columns = [
    { key: "day", header: "Day", render: (row) => <span className="font-medium text-ink">{row.day}</span> },
    { key: "status", header: "Status", render: (row) => <AvailabilityStatusTag status={row.status} label={row.status} /> },
    { key: "time", header: "Time", render: (row) => <span className="text-ink-muted">{row.time}</span> },
    { key: "notes", header: "Notes", render: (row) => <span className="text-ink-muted">{row.notes}</span> },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Availability Details</h3>
      <Table columns={columns} data={details} getRowId={(row) => row.day} className="rounded-none border-0 shadow-none" />
    </div>
  );
}
