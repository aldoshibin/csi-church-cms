"use client";

import { useRouter } from "next/navigation";
import { Search, SlidersHorizontal, Eye, Pencil } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { BookOpen } from "lucide-react";
import {
  STUDY_STATUS_VARIANT, STUDY_STATUS_OPTIONS, STUDY_CATEGORY_OPTIONS, STUDY_TEACHER_OPTIONS, STUDY_DAY_OPTIONS,
} from "@/lib/mock/bibleStudiesMockData";

const ICON_COLORS = [
  { bg: "bg-success-50", color: "text-success-600" },
  { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  { bg: "bg-warning-50", color: "text-warning-600" },
  { bg: "bg-interactive-50", color: "text-interactive-600" },
  { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
];

export function BibleStudiesTable({
  studies, isLoading, pagination,
  search, onSearchChange, statusFilter, onStatusFilterChange, categoryFilter, onCategoryFilterChange,
  teacherFilter, onTeacherFilterChange, dayFilter, onDayFilterChange,
  onEdit,
}) {
  const router = useRouter();
  const goToStudy = (row) => router.push(`/mens-fellowship/bible-studies/${row.id}`);

  const columns = [
    {
      key: "title", header: "Study Title",
      render: (row) => {
        const style = ICON_COLORS[row.id.charCodeAt(row.id.length - 1) % ICON_COLORS.length];
        return (
          <div className="flex items-center gap-2.5">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${style.bg} ${style.color}`}>
              <BookOpen className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate font-medium text-ink">{row.title}</p>
              <p className="truncate text-xs text-ink-subtle">{row.topic}</p>
            </div>
          </div>
        );
      },
    },
    { key: "series", header: "Topic / Series", render: (row) => <span className="text-ink-muted">{row.series}</span> },
    { key: "teacher", header: "Teacher", render: (row) => <span className="text-ink">{row.teacher}</span> },
    {
      key: "day", header: "Day & Time",
      render: (row) => (
        <div>
          <p className="text-ink">{row.day}</p>
          <p className="text-xs text-ink-subtle">{row.timeRange}</p>
        </div>
      ),
    },
    { key: "location", header: "Location", render: (row) => <span className="text-ink-muted">{row.location}</span> },
    { key: "participants", header: "Participants", render: (row) => <span className="text-ink">{row.participants} / {row.target}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={STUDY_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => goToStudy(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.title}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => onEdit?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.title}`}>
            <Pencil className="h-4 w-4" />
          </button>
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
            placeholder="Search bible studies by title or topic..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {STUDY_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={categoryFilter} onChange={(e) => onCategoryFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Categories</option>
          {STUDY_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={teacherFilter} onChange={(e) => onTeacherFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Teachers</option>
          {STUDY_TEACHER_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </select>
        <select value={dayFilter} onChange={(e) => onDayFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Days</option>
          {STUDY_DAY_OPTIONS.map((d) => <option key={d}>{d}</option>)}
        </select>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
      </div>
      <Table columns={columns} data={studies} isLoading={isLoading} getRowId={(row) => row.id} onRowClick={goToStudy} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
