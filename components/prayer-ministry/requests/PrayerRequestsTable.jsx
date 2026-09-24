"use client";

import { HandHeart, Users2 } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { PRAYER_STATUS_VARIANT, PRAYER_CATEGORY_BADGE } from "@/lib/mock/prayerRequestsMockData";
import { formatDate } from "@/lib/utils";

export function PrayerRequestsTable({ requests, isLoading, pagination, onViewDetails }) {
  const columns = [
    { key: "index", header: "#", render: (row) => <span className="text-ink-subtle">{requests.indexOf(row) + 1}</span> },
    {
      key: "request", header: "Request",
      render: (row) => (
        <div>
          <p className="font-medium text-ink">{row.title}</p>
          <p className="truncate text-xs text-ink-subtle">{row.preview}</p>
        </div>
      ),
    },
    {
      key: "requestedBy", header: "Requested By",
      render: (row) => (
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
            {row.isGroup ? <Users2 className="h-4 w-4" /> : <HandHeart className="h-4 w-4" />}
          </span>
          <span className="truncate text-sm font-medium text-ink">{row.requestedBy}</span>
        </div>
      ),
    },
    {
      key: "category", header: "Category",
      render: (row) => {
        const style = PRAYER_CATEGORY_BADGE[row.category] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.category}</span>;
      },
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
    { key: "status", header: "Status", render: (row) => <Badge variant={PRAYER_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Recent Prayer Requests</h3>
      </div>
      <Table columns={columns} data={requests} isLoading={isLoading} getRowId={(row) => row.id} onRowClick={onViewDetails} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
