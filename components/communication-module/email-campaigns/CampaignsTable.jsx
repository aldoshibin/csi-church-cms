"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, Calendar, Filter, MoreVertical, Eye, RotateCcw, Copy, Trash2 } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { formatDate, cn } from "@/lib/utils";
import { CampaignIcon } from "./CampaignIcon";
import {
  CAMPAIGN_STATUS_VARIANT, CAMPAIGN_TYPE_VARIANT, CAMPAIGN_TYPE_SHORT_LABEL,
  CAMPAIGN_STATUS_OPTIONS, CAMPAIGN_TYPE_OPTIONS,
} from "@/lib/mock/vmEmailCampaignsMockData";

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
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onResend?.(row)}><RotateCcw className="h-4 w-4" /> Resend Campaign</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onDuplicate?.(row)}><Copy className="h-4 w-4" /> Duplicate Campaign</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(row)}><Trash2 className="h-4 w-4" /> Delete Campaign</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function PerformanceBar({ label, value, color }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-14 shrink-0 text-[11px] text-ink-subtle">{label}</span>
      <span className="h-1.5 w-14 shrink-0 overflow-hidden rounded-full bg-surface-muted">
        <span className="block h-full rounded-full" style={{ width: `${value}%`, backgroundColor: color }} />
      </span>
      <span className="text-[11px] font-medium text-ink">{value}%</span>
    </div>
  );
}

export function CampaignsTable({
  campaigns, isLoading, pagination,
  tabs, activeTab, onTabChange,
  search, onSearchChange, statusFilter, onStatusFilterChange, typeFilter, onTypeFilterChange,
  onViewDetails, onResend, onDuplicate, onDelete,
}) {
  const columns = [
    {
      key: "campaign", header: "Campaign",
      render: (row) => (
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F3E8FF] text-[#7C3AED]">
            <CampaignIcon name={row.icon} className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium text-interactive-600">{row.title}</p>
            <p className="truncate text-xs text-ink-subtle">{row.description}</p>
          </div>
        </div>
      ),
    },
    {
      key: "type", header: "Type",
      render: (row) => {
        const short = CAMPAIGN_TYPE_SHORT_LABEL[row.type] ?? row.type;
        return <Badge variant={CAMPAIGN_TYPE_VARIANT[short] ?? "default"}>{short}</Badge>;
      },
    },
    {
      key: "audience", header: "Audience",
      render: (row) => (
        <div>
          <p className="text-ink">{row.audience}</p>
          <p className="text-xs text-ink-subtle">{row.recipients.toLocaleString()} recipients</p>
        </div>
      ),
    },
    { key: "status", header: "Status", render: (row) => <Badge variant={CAMPAIGN_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "sentOn", header: "Sent On",
      render: (row) => row.sentOn ? (
        <span className="text-ink-muted">
          {formatDate(row.sentOn)} {new Date(row.sentOn).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" })}
        </span>
      ) : <span className="text-ink-subtle">&ndash;</span>,
    },
    {
      key: "performance", header: "Performance",
      render: (row) => row.openRate != null ? (
        <div className="flex flex-col gap-1">
          <PerformanceBar label="Open Rate" value={row.openRate} color="#16A34A" />
          <PerformanceBar label="Click Rate" value={row.clickRate} color="#2563EB" />
        </div>
      ) : <span className="text-ink-subtle">&ndash;</span>,
    },
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
            placeholder="Search campaigns..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {CAMPAIGN_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={typeFilter} onChange={(e) => onTypeFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Types</option>
          {CAMPAIGN_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </select>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <Calendar className="h-4 w-4" /> May 1, 2026 - May 24, 2026
        </button>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <Filter className="h-4 w-4" /> Filters
        </button>
      </div>

      <Table
        columns={columns} data={campaigns} isLoading={isLoading} getRowId={(row) => row.id}
        onRowClick={onViewDetails} className="rounded-none border-0 shadow-none" pagination={pagination}
        emptyMessage="No campaigns found." emptyDescription="Once campaigns are created, they'll show up here."
      />
    </div>
  );
}
