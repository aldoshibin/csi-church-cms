"use client";

import { Eye, Download } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";

export function PopularReportsTable({ reports = [], isLoading, page = 1, pageSize = 10, totalCount, onPageChange = () => {} }) {
  const columns = [
    { key: "name", header: "Report Name", render: (r) => <span className="font-medium text-ink">{r.name}</span> },
    { key: "category", header: "Category", render: (r) => <span className="text-ink-muted">{r.category}</span> },
    { key: "description", header: "Description", render: (r) => <span className="text-ink-muted">{r.description}</span> },
    { key: "frequency", header: "Frequency", render: (r) => <span className="text-ink">{r.frequency}</span> },
    { key: "lastGenerated", header: "Last Generated", render: (r) => <span className="text-ink">{formatDate(r.lastGenerated)}</span> },
    { key: "actions", header: "Actions", render: (r) => (
      <div className="flex items-center gap-1">
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${r.name}`}>
          <Eye className="h-4 w-4" />
        </button>
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label={`Download ${r.name}`}>
          <Download className="h-4 w-4" />
        </button>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={reports} isLoading={isLoading}
      emptyMessage="No reports found."
      pagination={{ page, pageSize, totalCount: totalCount ?? reports.length, onPageChange }}
    />
  );
}
