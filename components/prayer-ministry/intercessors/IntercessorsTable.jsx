"use client";

import { Phone, Mail, Eye, MoreVertical } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { INTERCESSOR_STATUS_VARIANT, INTERCESSOR_MINISTRY_BADGE } from "@/lib/mock/intercessorsMockData";

export function IntercessorsTable({ intercessors, isLoading, pagination, onViewDetails }) {
  const columns = [
    { key: "index", header: "#", render: (row) => <span className="text-ink-subtle">{intercessors.indexOf(row) + 1}</span> },
    {
      key: "name", header: "Name",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            {row.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <span className="font-medium text-ink">{row.name}</span>
        </div>
      ),
    },
    {
      key: "ministry", header: "Ministry / Group",
      render: (row) => {
        const style = INTERCESSOR_MINISTRY_BADGE[row.ministry] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.ministry}</span>;
      },
    },
    {
      key: "contact", header: "Contact",
      render: (row) => (
        <div>
          <p className="flex items-center gap-1.5 text-sm text-ink"><Phone className="h-3 w-3 text-ink-subtle" /> {row.phone}</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-subtle"><Mail className="h-3 w-3" /> {row.email}</p>
        </div>
      ),
    },
    {
      key: "availability", header: "Availability",
      render: (row) => (
        <div>
          <p className="text-ink">{row.availability}</p>
          <p className="text-xs text-ink-subtle">{row.availabilityTime}</p>
        </div>
      ),
    },
    { key: "areas", header: "Assigned Prayer Areas", render: (row) => <span className="text-ink-muted">{row.areas.join(", ")}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={INTERCESSOR_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => onViewDetails?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.name}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">All Intercessors</h3>
      </div>
      <Table columns={columns} data={intercessors} isLoading={isLoading} getRowId={(row) => row.id} onRowClick={onViewDetails} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
