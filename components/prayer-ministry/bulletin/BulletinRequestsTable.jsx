"use client";

import { Eye, MoreVertical } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { BULLETIN_STATUS_VARIANT, BULLETIN_TYPE_BADGE } from "@/lib/mock/bulletinRequestsMockData";
import { formatDate } from "@/lib/utils";

export function BulletinRequestsTable({ requests, isLoading, pagination, onViewDetails }) {
  const columns = [
    { key: "index", header: "#", render: (row) => <span className="text-ink-subtle">{requests.indexOf(row) + 1}</span> },
    {
      key: "title", header: "Title",
      render: (row) => (
        <div>
          <p className="font-medium text-ink">{row.title}</p>
          <p className="truncate text-xs text-ink-subtle">{row.preview}</p>
        </div>
      ),
    },
    {
      key: "type", header: "Request Type",
      render: (row) => {
        const style = BULLETIN_TYPE_BADGE[row.type] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.type}</span>;
      },
    },
    {
      key: "submittedBy", header: "Submitted By",
      render: (row) => (
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            {row.submittedBy.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-ink">{row.submittedBy}</p>
            <p className="truncate text-xs text-ink-subtle">Member ID: {row.memberId}</p>
          </div>
        </div>
      ),
    },
    {
      key: "submittedOn", header: "Submitted On",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.submittedOn)}</p>
          <p className="text-xs text-ink-subtle">{row.submittedTime}</p>
        </div>
      ),
    },
    { key: "publishDate", header: "Publish Date", render: (row) => <span className="text-ink-muted">{formatDate(row.publishDate)}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={BULLETIN_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => onViewDetails?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.title}`}>
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
        <h3 className="text-base font-semibold text-ink">All Bulletin Requests</h3>
      </div>
      <Table columns={columns} data={requests} isLoading={isLoading} getRowId={(row) => row.id} onRowClick={onViewDetails} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
