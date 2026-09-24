"use client";

import { Search, SlidersHorizontal, Eye, Pencil } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { ChoirMemberRowActionsMenu } from "./ChoirMemberRowActionsMenu";
import {
  CHOIR_STATUS_VARIANT, CHOIR_ROLE_OPTIONS, CHOIR_VOICE_PART_OPTIONS, CHOIR_STATUS_OPTIONS,
} from "@/lib/mock/choirMembersMockData";

const TABS = ["All Members", "Soprano", "Alto", "Tenor", "Bass"];

export function ChoirMembersTable({
  members, isLoading, pagination,
  memberTab, onMemberTabChange,
  search, onSearchChange, roleFilter, onRoleFilterChange, voicePartFilter, onVoicePartFilterChange, statusFilter, onStatusFilterChange,
  selectedIds, onSelectionChange,
  onViewDetails, onEdit, onAssignRole, onAddToRehearsal, onDeactivate, onDelete,
}) {
  const columns = [
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
    { key: "voicePart", header: "Voice Part", render: (row) => <span className="text-ink-muted">{row.voicePart}</span> },
    { key: "role", header: "Role", render: (row) => <span className="text-ink">{row.role}</span> },
    { key: "phone", header: "Phone", render: (row) => <span className="text-ink-muted">{row.phone}</span> },
    { key: "email", header: "Email", render: (row) => <span className="text-ink-muted">{row.email}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={CHOIR_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => onViewDetails?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.name}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => onEdit?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.name}`}>
            <Pencil className="h-4 w-4" />
          </button>
          <ChoirMemberRowActionsMenu
            member={row}
            onViewDetails={onViewDetails} onEdit={onEdit} onAssignRole={onAssignRole}
            onAddToRehearsal={onAddToRehearsal} onDeactivate={onDeactivate} onDelete={onDelete}
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
            placeholder="Search by name, role, phone..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={roleFilter} onChange={(e) => onRoleFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Roles</option>
          {CHOIR_ROLE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </select>
        <select value={voicePartFilter} onChange={(e) => onVoicePartFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Voice Parts</option>
          {CHOIR_VOICE_PART_OPTIONS.map((v) => <option key={v}>{v}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {CHOIR_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
      </div>

      <div className="border-b border-border px-4 py-3">
        <h3 className="mb-3 text-base font-semibold text-ink">Members</h3>
        <div className="flex flex-wrap gap-6 border-b border-border">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => onMemberTabChange(tab)}
              className={cn(
                "border-b-2 pb-2.5 text-sm font-medium transition-colors",
                memberTab === tab ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <Table
        columns={columns} data={members} isLoading={isLoading} getRowId={(row) => row.id}
        selectable selectedRows={selectedIds} onSelectionChange={onSelectionChange}
        className="rounded-none border-0 shadow-none" pagination={pagination}
      />
    </div>
  );
}
