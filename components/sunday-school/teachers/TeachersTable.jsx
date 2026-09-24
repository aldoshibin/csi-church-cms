"use client";

import { Search, SlidersHorizontal, Eye, Pencil } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { TeacherRowActionsMenu } from "./TeacherRowActionsMenu";
import { TEACHER_STATUS_VARIANT, TEACHER_STATUS_OPTIONS } from "@/lib/mock/teachersMockData";

export function TeachersTable({
  teachers, isLoading, pagination,
  search, onSearchChange, statusFilter, onStatusFilterChange,
  onView, onEdit, onAssignToClass, onManageClasses, onViewSchedule, onAddNote, onViewDocuments, onDeactivate, onDelete,
}) {
  const columns = [
    { key: "id", header: "Teacher ID", render: (row) => <span className="text-ink-muted">{row.id}</span> },
    {
      key: "name", header: "Teacher Name",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            {row.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <span className="font-medium text-ink">{row.name}</span>
        </div>
      ),
    },
    { key: "gender", header: "Gender", render: (row) => <span className="text-ink-muted">{row.gender}</span> },
    { key: "phone", header: "Phone", render: (row) => <span className="text-ink-muted">{row.phone}</span> },
    { key: "email", header: "Email", render: (row) => <span className="text-ink-muted">{row.email}</span> },
    {
      key: "classesAssigned", header: "Classes Assigned",
      render: (row) => (
        <span className="inline-flex rounded-sm bg-interactive-50 px-2.5 py-1 text-xs font-medium text-interactive-600">
          {row.classesAssigned} {row.classesAssigned === 1 ? "Class" : "Classes"}
        </span>
      ),
    },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={TEACHER_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => onView?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.name}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => onEdit?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.name}`}>
            <Pencil className="h-4 w-4" />
          </button>
          <TeacherRowActionsMenu
            teacher={row}
            onViewDetails={onView} onEdit={onEdit} onAssignToClass={onAssignToClass} onManageClasses={onManageClasses}
            onViewSchedule={onViewSchedule} onAddNote={onAddNote} onViewDocuments={onViewDocuments}
            onDeactivate={onDeactivate} onDelete={onDelete}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Teachers List</h3>
        <div className="flex items-center gap-2">
          <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Status</option>
            {TEACHER_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search teachers..."
              className="h-9 w-48 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>
      <Table columns={columns} data={teachers} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
