"use client";

import Link from "next/link";
import { Eye, MoreVertical } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { PRAISE_STATUS_VARIANT, PRAISE_CATEGORY_BADGE } from "@/lib/mock/praiseReportsMockData";
import { formatDate } from "@/lib/utils";

export function PraiseReportsTable({ reports, isLoading, pagination, onViewDetails }) {
  const columns = [
    { key: "index", header: "#", render: (row) => <span className="text-ink-subtle">{reports.indexOf(row) + 1}</span> },
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
      key: "category", header: "Category",
      render: (row) => {
        const style = PRAISE_CATEGORY_BADGE[row.category] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.category}</span>;
      },
    },
    {
      key: "sharedBy", header: "Shared By",
      render: (row) => (
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            {row.sharedBy.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <span className="truncate text-sm font-medium text-ink">{row.sharedBy}</span>
        </div>
      ),
    },
    {
      key: "date", header: "Date",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.date)}</p>
          <p className="text-xs text-ink-subtle">{row.time}</p>
        </div>
      ),
    },
    { key: "status", header: "Status", render: (row) => <Badge variant={PRAISE_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
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
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Recent Praise Reports</h3>
        <Link href="/prayer-ministry/praise-reports" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <Table columns={columns} data={reports} isLoading={isLoading} getRowId={(row) => row.id} onRowClick={onViewDetails} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
