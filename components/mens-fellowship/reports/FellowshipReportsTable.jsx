"use client";

import { Eye, Download, Plus, MoreVertical } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { REPORT_ICON_COMPONENTS } from "./reportIcons";
import { FELLOWSHIP_REPORT_CATEGORY_BADGE } from "@/lib/mock/fellowshipReportsMockData";
import { formatDateTime } from "@/lib/utils";

const ICON_STYLE = {
  users: { bg: "bg-success-50", color: "text-success-600" },
  calendar: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  check: { bg: "bg-warning-50", color: "text-warning-600" },
  activity: { bg: "bg-interactive-50", color: "text-interactive-600" },
  sprout: { bg: "bg-[#CCFBF1]", color: "text-[#0D9488]" },
  dollar: { bg: "bg-danger-50", color: "text-danger-500" },
  file: { bg: "bg-surface-muted", color: "text-ink-subtle" },
};

export function FellowshipReportsTable({ reports, isLoading, pagination }) {
  const columns = [
    {
      key: "name", header: "Report Name",
      render: (row) => {
        const Icon = REPORT_ICON_COMPONENTS[row.icon] ?? REPORT_ICON_COMPONENTS.file;
        const style = ICON_STYLE[row.icon] ?? ICON_STYLE.file;
        return (
          <div className="flex items-center gap-2.5">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${style.bg} ${style.color}`}>
              <Icon className="h-4 w-4" />
            </span>
            <span className="font-medium text-ink">{row.name}</span>
          </div>
        );
      },
    },
    { key: "description", header: "Description", render: (row) => <span className="text-ink-muted">{row.description}</span> },
    {
      key: "category", header: "Category",
      render: (row) => <Badge variant={FELLOWSHIP_REPORT_CATEGORY_BADGE[row.category] ?? "default"}>{row.category}</Badge>,
    },
    { key: "lastGenerated", header: "Last Generated", render: (row) => <span className="text-ink-muted">{row.lastGenerated ? formatDateTime(row.lastGenerated) : "—"}</span> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          {row.category === "Custom" ? (
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Create ${row.name}`}>
              <Plus className="h-4 w-4" />
            </button>
          ) : (
            <>
              <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.name}`}>
                <Eye className="h-4 w-4" />
              </button>
              <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Download ${row.name}`}>
                <Download className="h-4 w-4" />
              </button>
              <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
                <MoreVertical className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      ),
    },
  ];

  return <Table columns={columns} data={reports} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />;
}
