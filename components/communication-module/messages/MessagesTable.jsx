"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, SlidersHorizontal, MoreVertical, Eye, RotateCcw, Copy, Trash2 } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { formatDate, cn } from "@/lib/utils";
import { MessageIcon } from "./MessageIcon";
import {
  MESSAGE_STATUS_VARIANT, MESSAGE_TYPE_VARIANT, MESSAGE_TYPE_ICON_STYLE,
  MESSAGE_TYPE_OPTIONS, MESSAGE_STATUS_OPTIONS,
} from "@/lib/mock/vmMessagesMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

function RowActionsMenu({ row, onView, onResend, onDuplicate, onDelete }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" onClick={(e) => e.stopPropagation()} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
          <MoreVertical className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onView?.(row)}><Eye className="h-4 w-4" /> View Details</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onResend?.(row)}><RotateCcw className="h-4 w-4" /> Resend Message</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onDuplicate?.(row)}><Copy className="h-4 w-4" /> Duplicate Message</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(row)}><Trash2 className="h-4 w-4" /> Delete Message</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function MessagesTable({
  messages, isLoading, pagination,
  tabs, activeTab, onTabChange,
  search, onSearchChange, typeFilter, onTypeFilterChange, statusFilter, onStatusFilterChange, sortBy, onSortByChange,
  onViewDetails, onResend, onDuplicate, onDelete,
}) {
  const columns = [
    {
      key: "subject", header: "Subject",
      render: (row) => {
        const style = MESSAGE_TYPE_ICON_STYLE[row.type] ?? MESSAGE_TYPE_ICON_STYLE.Email;
        const iconName = row.type === "SMS" ? "MessageSquareText" : row.type === "In-App" ? "Bell" : "Mail";
        return (
          <div className="flex items-center gap-3">
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${style.bg} ${style.color}`}>
              <MessageIcon name={iconName} className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate font-medium text-interactive-600">{row.title}</p>
              <p className="truncate text-xs text-ink-subtle">{row.description}</p>
            </div>
          </div>
        );
      },
    },
    { key: "type", header: "Type", render: (row) => <Badge variant={MESSAGE_TYPE_VARIANT[row.type] ?? "default"}>{row.type}</Badge> },
    { key: "audience", header: "Audience", render: (row) => <span className="text-ink-muted">{row.audience}</span> },
    { key: "sender", header: "Sender", render: (row) => <span className="text-ink-muted">{row.sender}</span> },
    {
      key: "sentOn", header: "Date & Time",
      render: (row) => (
        <span className="text-ink-muted">
          {formatDate(row.sentOn)} {new Date(row.sentOn).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" })}
        </span>
      ),
    },
    { key: "status", header: "Status", render: (row) => <Badge variant={MESSAGE_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end">
          <RowActionsMenu row={row} onView={onViewDetails} onResend={onResend} onDuplicate={onDuplicate} onDelete={onDelete} />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="border-b border-border px-4 py-3">
        <div className="flex flex-wrap gap-6 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab} type="button" onClick={() => onTabChange(tab)}
              className={cn(
                "border-b-2 py-3 text-sm font-medium transition-colors",
                activeTab === tab ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 border-b border-border px-4 py-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search messages..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={typeFilter} onChange={(e) => onTypeFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Types</option>
          {MESSAGE_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {MESSAGE_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={sortBy} onChange={(e) => onSortByChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>Newest</option>
          <option>Oldest</option>
        </select>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
      </div>

      <Table
        columns={columns} data={messages} isLoading={isLoading} getRowId={(row) => row.id} selectable
        onRowClick={onViewDetails} className="rounded-none border-0 shadow-none" pagination={pagination}
        emptyMessage="No messages found." emptyDescription="Once messages are sent, they'll show up here."
      />
    </div>
  );
}
