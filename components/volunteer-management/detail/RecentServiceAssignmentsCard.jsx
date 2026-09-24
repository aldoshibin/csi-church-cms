"use client";

import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { RECENT_ASSIGNMENT_STATUS_VARIANT } from "@/lib/mock/volunteersMockData";
import { formatDate } from "@/lib/utils";

export function RecentServiceAssignmentsCard({ assignments = [] }) {
  const columns = [
    { key: "date", header: "Date", render: (row) => <span className="text-ink">{formatDate(row.date)}</span> },
    { key: "service", header: "Service / Event", render: (row) => <span className="font-medium text-ink">{row.service}</span> },
    { key: "ministry", header: "Ministry / Team", render: (row) => <span className="text-ink-muted">{row.ministry}</span> },
    { key: "role", header: "Role", render: (row) => <span className="text-ink-muted">{row.role}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={RECENT_ASSIGNMENT_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Recent Service Assignments</h3>
      <Table columns={columns} data={assignments} getRowId={(row) => `${row.date}-${row.service}`} className="rounded-none border-0 shadow-none" />
    </div>
  );
}
