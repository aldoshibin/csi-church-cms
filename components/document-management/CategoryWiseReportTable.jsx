"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Icons from "lucide-react";
import { MoreVertical, ArrowUp, Eye, Download } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function CategoryWiseReportTable({ rows, isLoading, page, pageSize, totalCount, onPageChange }) {
  const columns = [
    { key: "name", header: "Category Name", render: (row) => {
      const Icon = Icons[row.icon] ?? Icons.Folder;
      return (
        <div className="flex items-center gap-2.5">
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${row.iconBg} ${row.iconColor}`}>
            <Icon className="h-4 w-4" />
          </span>
          <span className="font-medium text-interactive-600">{row.name}</span>
        </div>
      );
    } },
    { key: "totalDocuments", header: "Total Documents", render: (row) => row.totalDocuments },
    { key: "uploads", header: "Uploads", render: (row) => (
      <span className="flex items-center gap-1.5">
        {row.uploads}
        {row.uploadsTrendPct > 0 && (
          <span className="flex items-center gap-0.5 text-xs font-medium text-success-600"><ArrowUp className="h-3 w-3" /> {row.uploadsTrendPct}%</span>
        )}
      </span>
    ) },
    { key: "downloads", header: "Downloads", render: (row) => (
      <span className="flex items-center gap-1.5">
        {row.downloads}
        {row.downloadsTrendPct > 0 && (
          <span className="flex items-center gap-0.5 text-xs font-medium text-success-600"><ArrowUp className="h-3 w-3" /> {row.downloadsTrendPct}%</span>
        )}
      </span>
    ) },
    { key: "lastActivity", header: "Last Activity", render: (row) => formatDate(row.lastActivity, { hour: "numeric", minute: "2-digit" }) },
    { key: "actions", header: "Actions", render: (row) => (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
            <MoreVertical className="h-4 w-4" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
            <DropdownMenu.Item className={menuItemClass}><Eye className="h-4 w-4" /> View Category</DropdownMenu.Item>
            <DropdownMenu.Item className={menuItemClass}><Download className="h-4 w-4" /> Export Report</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    ) },
  ];

  return (
    <Table
      columns={columns} data={rows} isLoading={isLoading} selectable
      emptyMessage="No category data found."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
