"use client";

import { Users2, Eye, MoreVertical } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { GROUP_STATUS_VARIANT, GROUP_TYPE_BADGE } from "@/lib/mock/prayerGroupsMockData";

export function PrayerGroupsTable({ groups, isLoading, pagination, onViewDetails }) {
  const columns = [
    { key: "index", header: "#", render: (row) => <span className="text-ink-subtle">{groups.indexOf(row) + 1}</span> },
    {
      key: "name", header: "Group Name",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
            <Users2 className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium text-ink">{row.name}</p>
            <p className="truncate text-xs text-ink-subtle">{row.tagline}</p>
          </div>
        </div>
      ),
    },
    {
      key: "type", header: "Group Type",
      render: (row) => {
        const style = GROUP_TYPE_BADGE[row.type] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.type}</span>;
      },
    },
    {
      key: "leader", header: "Leader",
      render: (row) => (
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-[10px] font-semibold text-interactive-600">
            {row.leader.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <span className="truncate text-sm font-medium text-ink">{row.leader}</span>
        </div>
      ),
    },
    { key: "members", header: "Members", render: (row) => <span className="text-ink">{row.members}</span> },
    {
      key: "meeting", header: "Meeting Day & Time",
      render: (row) => (
        <div>
          <p className="text-ink">{row.meetingDay}</p>
          <p className="text-xs text-ink-subtle">{row.meetingTime}</p>
        </div>
      ),
    },
    { key: "status", header: "Status", render: (row) => <Badge variant={GROUP_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
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
        <h3 className="text-base font-semibold text-ink">All Prayer Groups</h3>
      </div>
      <Table columns={columns} data={groups} isLoading={isLoading} getRowId={(row) => row.id} onRowClick={onViewDetails} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
