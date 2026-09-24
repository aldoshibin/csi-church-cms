"use client";

import { Search, Eye, Download, FileText, Users, Home, Droplet, DollarSign, Calendar, GraduationCap, FileBarChart } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

const CATEGORY_ICON = {
  Members: Users, Families: Home, Sacraments: Droplet, Finance: DollarSign,
  Ministry: Calendar, "Sunday School": GraduationCap, General: FileBarChart,
};
const CATEGORY_STYLE = {
  Members: { bg: "bg-interactive-50", color: "text-interactive-600" },
  Families: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  Sacraments: { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  Finance: { bg: "bg-success-50", color: "text-success-600" },
  Ministry: { bg: "bg-interactive-50", color: "text-interactive-600" },
  "Sunday School": { bg: "bg-warning-50", color: "text-warning-600" },
  General: { bg: "bg-danger-50", color: "text-danger-600" },
};

export function ReportsTable({ reports, isLoading, pagination, search, onSearchChange, onView, onDownload }) {
  const columns = [
    {
      key: "name", header: "Report Name",
      render: (row) => {
        const Icon = CATEGORY_ICON[row.category] ?? FileText;
        const style = CATEGORY_STYLE[row.category] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return (
          <div className="flex items-center gap-2.5">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${style.bg}`}>
              <Icon className={`h-4 w-4 ${style.color}`} />
            </span>
            <span className="font-medium text-ink">{row.name}</span>
          </div>
        );
      },
    },
    { key: "category", header: "Category", render: (row) => <Badge variant="info">{row.category}</Badge> },
    { key: "description", header: "Description", render: (row) => <span className="text-ink-muted">{row.description}</span> },
    {
      key: "lastGenerated", header: "Last Generated",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.lastGenerated)}</p>
          <p className="text-xs text-ink-subtle">{row.lastGeneratedTime}</p>
        </div>
      ),
    },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => onView?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.name}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => onDownload?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Download ${row.name}`}>
            <Download className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Reports List</h3>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search reports..."
            className="h-9 w-56 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
      </div>
      <Table columns={columns} data={reports} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
