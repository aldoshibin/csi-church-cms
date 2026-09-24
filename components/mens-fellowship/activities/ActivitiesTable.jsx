"use client";

import { useRouter } from "next/navigation";
import { Search, SlidersHorizontal, Eye, Pencil } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { ActivityRowActionsMenu } from "./ActivityRowActionsMenu";
import { ACTIVITY_ICON_COMPONENTS } from "./activityIcons";
import {
  ACTIVITY_STATUS_VARIANT, ACTIVITY_TYPE_ICON_BG, ACTIVITY_TYPE_OPTIONS, ACTIVITY_STATUS_OPTIONS,
} from "@/lib/mock/activitiesMockData";
import { formatDate } from "@/lib/utils";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function ActivitiesTable({
  activities, isLoading, pagination,
  search, onSearchChange, statusFilter, onStatusFilterChange, typeFilter, onTypeFilterChange, monthFilter, onMonthFilterChange,
  onEdit, onManageParticipants, onSendAnnouncement, onCancel, onDelete,
}) {
  const router = useRouter();
  const goToActivity = (row) => router.push(`/mens-fellowship/activities/${row.id}`);

  const columns = [
    {
      key: "title", header: "Activity Title",
      render: (row) => {
        const style = ACTIVITY_TYPE_ICON_BG[row.type] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        const Icon = ACTIVITY_ICON_COMPONENTS["heart-hands"];
        return (
          <div className="flex items-center gap-2.5">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${style.bg} ${style.color}`}>
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate font-medium text-ink">{row.title}</p>
              <p className="truncate text-xs text-ink-subtle">{row.description}</p>
            </div>
          </div>
        );
      },
    },
    { key: "type", header: "Type", render: (row) => <span className="text-ink-muted">{row.type}</span> },
    {
      key: "date", header: "Date",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.date)}</p>
          <p className="text-xs text-ink-subtle">{row.day}</p>
        </div>
      ),
    },
    { key: "timeRange", header: "Time", render: (row) => <span className="text-ink-muted">{row.timeRange ?? "—"}</span> },
    { key: "location", header: "Location", render: (row) => <span className="text-ink-muted">{row.location}</span> },
    {
      key: "participants", header: "Participants",
      render: (row) => <span className="text-ink">{row.participants != null ? `${row.participants} / ${row.target}` : "—"}</span>,
    },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={ACTIVITY_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => goToActivity(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.title}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => onEdit?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.title}`}>
            <Pencil className="h-4 w-4" />
          </button>
          <ActivityRowActionsMenu
            activity={row}
            onViewDetails={goToActivity} onEdit={onEdit} onManageParticipants={onManageParticipants}
            onSendAnnouncement={onSendAnnouncement} onCancel={onCancel} onDelete={onDelete}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center gap-3 border-b border-border px-4 py-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search activities by title or description..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {ACTIVITY_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={typeFilter} onChange={(e) => onTypeFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Activity Types</option>
          {ACTIVITY_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </select>
        <select value={monthFilter} onChange={(e) => onMonthFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Months</option>
          {MONTHS.map((m) => <option key={m}>{m}</option>)}
        </select>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
      </div>
      <Table columns={columns} data={activities} isLoading={isLoading} getRowId={(row) => row.id} onRowClick={goToActivity} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
