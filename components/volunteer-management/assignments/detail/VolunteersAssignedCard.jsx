"use client";

import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ASSIGNMENT_STATUS_VARIANT } from "@/lib/mock/serviceAssignmentsMockData";

export function VolunteersAssignedCard({ volunteers = [], totalCount, onViewAll }) {
  const columns = [
    {
      key: "index", header: "#", cellClassName: "w-10 text-ink-subtle",
      render: (_row, index) => index + 1,
    },
    {
      key: "name", header: "Volunteer Name",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            {row.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <span className="font-medium text-ink">{row.name}</span>
        </div>
      ),
    },
    { key: "role", header: "Role", render: (row) => <span className="text-ink">{row.role}</span> },
    { key: "ministry", header: "Ministry / Team", render: (row) => <span className="text-ink-muted">{row.ministry}</span> },
    { key: "contact", header: "Contact", render: (row) => <span className="text-ink-muted">{row.contact}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={ASSIGNMENT_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
  ];

  // Table.render only passes (row); wrap to also provide the row index for the "#" column.
  const indexedColumns = columns.map((col) =>
    col.key === "index" ? { ...col, render: (row) => volunteers.indexOf(row) + 1 } : col
  );

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Volunteers Assigned ({totalCount ?? volunteers.length})</h3>
      <Table columns={indexedColumns} data={volunteers} getRowId={(row) => row.name} className="rounded-none border-0 shadow-none" />
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink-subtle">Showing 1 to {volunteers.length} of {totalCount ?? volunteers.length} volunteers</p>
        <Button type="button" variant="secondary" onClick={onViewAll}>View All Volunteers</Button>
      </div>
    </div>
  );
}
