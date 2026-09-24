"use client";

import { Search, SlidersHorizontal, Eye, Pencil } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { StudentRowActionsMenu } from "./StudentRowActionsMenu";
import { STUDENT_STATUS_VARIANT, STUDENT_CLASS_BADGE, STUDENT_CLASS_OPTIONS } from "@/lib/mock/studentsMockData";
import { formatDate } from "@/lib/utils";

export function StudentsTable({
  students, isLoading, pagination,
  search, onSearchChange, classFilter, onClassFilterChange,
  onView, onEdit, onManageAttendance, onAssignToClass, onAddNote, onViewDocuments, onDeactivate, onDelete,
}) {
  const columns = [
    { key: "id", header: "Student ID", render: (row) => <span className="text-ink-muted">{row.id}</span> },
    {
      key: "name", header: "Student Name",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            {row.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium text-ink">{row.name}</p>
            <p className="truncate text-xs text-ink-subtle">{row.gender}</p>
          </div>
        </div>
      ),
    },
    { key: "age", header: "Age", render: (row) => <span className="text-ink">{row.age}</span> },
    { key: "dob", header: "Date of Birth", render: (row) => <span className="text-ink-muted">{formatDate(row.dob)}</span> },
    {
      key: "className", header: "Class",
      render: (row) => {
        const style = STUDENT_CLASS_BADGE[row.className] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.className}</span>;
      },
    },
    { key: "guardian", header: "Guardian Name", render: (row) => <span className="text-ink">{row.guardian}</span> },
    { key: "phone", header: "Phone", render: (row) => <span className="text-ink-muted">{row.phone}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={STUDENT_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
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
          <StudentRowActionsMenu
            student={row}
            onViewDetails={onView} onEdit={onEdit} onManageAttendance={onManageAttendance}
            onAssignToClass={onAssignToClass} onAddNote={onAddNote} onViewDocuments={onViewDocuments}
            onDeactivate={onDeactivate} onDelete={onDelete}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Students List</h3>
        <div className="flex items-center gap-2">
          <select value={classFilter} onChange={(e) => onClassFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Classes</option>
            {STUDENT_CLASS_OPTIONS.map((c) => <option key={c}>{c}</option>)}
          </select>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search students..."
              className="h-9 w-48 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>
      <Table columns={columns} data={students} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
