"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, SlidersHorizontal, Eye, Pencil } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { MemberRowActionsMenu } from "./MemberRowActionsMenu";
import { MEMBER_STATUS_VARIANT, GROUP_BADGE, FELLOWSHIP_GROUP_OPTIONS, MEMBER_STATUS_OPTIONS } from "@/lib/mock/mensFellowshipMockData";
import { formatDate } from "@/lib/utils";

export function MembersTable({
  members, isLoading, pagination,
  search, onSearchChange, groupFilter, onGroupFilterChange, statusFilter, onStatusFilterChange,
  onEdit, onSendMessage, onAddToGroup, onDeactivate, onDelete,
}) {
  const router = useRouter();
  const goToMember = (row) => router.push(`/mens-fellowship/members/${row.id}`);

  const columns = [
    {
      key: "name", header: "Member Name",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            {row.name.replace(/^Mr\.\s*/, "").split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <Link href={`/mens-fellowship/members/${row.id}`} className="truncate font-medium text-ink hover:text-interactive-600 hover:underline">
            {row.name}
          </Link>
        </div>
      ),
    },
    { key: "id", header: "Member ID", render: (row) => <span className="text-ink-muted">{row.id}</span> },
    {
      key: "group", header: "Group",
      render: (row) => {
        const style = GROUP_BADGE[row.group] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.group}</span>;
      },
    },
    { key: "phone", header: "Phone", render: (row) => <span className="text-ink-muted">{row.phone}</span> },
    { key: "email", header: "Email", render: (row) => <span className="text-ink-muted">{row.email}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={MEMBER_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    { key: "joinedOn", header: "Joined On", render: (row) => <span className="text-ink-muted">{formatDate(row.joinedOn)}</span> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => goToMember(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.name}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => onEdit?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.name}`}>
            <Pencil className="h-4 w-4" />
          </button>
          <MemberRowActionsMenu
            member={row}
            onViewDetails={goToMember} onEdit={onEdit} onSendMessage={onSendMessage}
            onAddToGroup={onAddToGroup} onDeactivate={onDeactivate} onDelete={onDelete}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Members List</h3>
        <div className="flex items-center gap-2">
          <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Status</option>
            {MEMBER_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
          <select value={groupFilter} onChange={(e) => onGroupFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Groups</option>
            {FELLOWSHIP_GROUP_OPTIONS.map((g) => <option key={g}>{g}</option>)}
          </select>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search members by name, phone, email..."
              className="h-9 w-64 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>
      <Table columns={columns} data={members} isLoading={isLoading} getRowId={(row) => row.id} onRowClick={goToMember} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
