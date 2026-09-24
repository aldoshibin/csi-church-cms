"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal, Eye, Copy, Trash2 } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { CommunicationIcon } from "./CommunicationIcon";
import { COMMUNICATION_TYPE_VARIANT, COMMUNICATION_STATUS_VARIANT } from "@/lib/mock/communicationMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

function RowActionsMenu({ row, onView, onDuplicate, onDelete }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" onClick={(e) => e.stopPropagation()} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onView?.(row)}><Eye className="h-4 w-4" /> View Details</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onDuplicate?.(row)}><Copy className="h-4 w-4" /> Duplicate</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(row)}><Trash2 className="h-4 w-4" /> Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function RecentCommunicationsTable({ communications, isLoading, onViewAll, onView, onDuplicate, onDelete }) {
  const columns = [
    {
      key: "type", header: "Type",
      render: (row) => {
        const style = COMMUNICATION_TYPE_VARIANT[row.type] ?? COMMUNICATION_TYPE_VARIANT.Announcement;
        return (
          <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${style.bg} ${style.color}`}>
            <CommunicationIcon name={style.icon} className="h-4 w-4" />
          </span>
        );
      },
    },
    {
      key: "title", header: "Title",
      render: (row) => (
        <div className="min-w-0">
          <p className="truncate font-medium text-ink">{row.title}</p>
          <p className="truncate text-xs text-ink-subtle">{row.description}</p>
        </div>
      ),
    },
    {
      key: "audience", header: "Audience",
      render: (row) => (
        <div className="flex items-center gap-1.5 text-ink-muted">
          <CommunicationIcon name="Users2" className="h-3.5 w-3.5 text-ink-subtle" />
          <div>
            <p>{row.audience}</p>
            <p className="text-xs text-ink-subtle">{row.audienceCount.toLocaleString()}</p>
          </div>
        </div>
      ),
    },
    { key: "sentBy", header: "Sent By", render: (row) => <span className="text-ink-muted">{row.sentBy}</span> },
    {
      key: "sentOn", header: "Sent On",
      render: (row) => (
        <span className="text-ink-muted">
          {new Date(row.sentOn).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" })}
        </span>
      ),
    },
    { key: "status", header: "Status", render: (row) => <Badge variant={COMMUNICATION_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end">
          <RowActionsMenu row={row} onView={onView} onDuplicate={onDuplicate} onDelete={onDelete} />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="px-4 pt-4 pb-1">
        <h3 className="text-sm font-semibold text-ink">Recent Communications</h3>
      </div>
      <Table
        columns={columns} data={communications} isLoading={isLoading} getRowId={(row) => row.id}
        className="rounded-none border-0 shadow-none"
        emptyMessage="No communications sent yet." emptyDescription="Once announcements or messages are sent, they'll show up here."
      />
      <div className="flex justify-center border-t border-border py-3">
        <button type="button" onClick={onViewAll} className="flex items-center gap-1 text-sm font-medium text-interactive-500 hover:underline">
          View All Communications <span aria-hidden>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
