"use client";

import { Eye, Download } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { RECENT_SETLIST_STATUS_VARIANT } from "@/lib/mock/choirWorshipReportsMockData";
import { formatDate } from "@/lib/utils";

export function RecentSetlistsCard({ setlists = [] }) {
  const columns = [
    { key: "index", header: "#", render: (row) => <span className="text-ink-subtle">{setlists.indexOf(row) + 1}</span> },
    { key: "name", header: "Setlist Name", render: (row) => <span className="font-medium text-ink">{row.name}</span> },
    { key: "serviceType", header: "Service Type", render: (row) => <span className="text-ink-muted">{row.serviceType}</span> },
    { key: "date", header: "Date", render: (row) => <span className="text-ink-muted">{formatDate(row.date)}</span> },
    { key: "songs", header: "Songs", render: (row) => <span className="text-ink">{row.songs}</span> },
    {
      key: "leader", header: "Leader",
      render: (row) => (
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-[10px] font-semibold text-interactive-600">
            {row.leader.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <span className="text-sm font-medium text-ink">{row.leader}</span>
        </div>
      ),
    },
    { key: "members", header: "Members", render: (row) => <span className="text-ink">{row.members}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={RECENT_SETLIST_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: () => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="View">
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="Download">
            <Download className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Recent Setlists</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <Table columns={columns} data={setlists} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" />
    </div>
  );
}
