"use client";

import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreVertical, Eye, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table, TablePagination } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { BURIAL_STATUS_VARIANT } from "@/lib/mock/vmCemeteryMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function BurialRecordsTable({ records, isLoading, page, pageSize, totalCount, onPageChange, onDelete }) {
  const columns = [
    { key: "recordNumber", header: "Record #", render: (r) => (
      <Link href={`/cemetery-management/burial-records/${r.id}`} className="font-medium text-interactive-600 hover:underline">
        {r.recordNumber}
      </Link>
    ) },
    { key: "deceasedName", header: "Deceased Name" },
    { key: "dateOfBurial", header: "Date of Burial", render: (r) => formatDate(r.dateOfBurial) },
    { key: "plotNumber", header: "Plot #" },
    { key: "section", header: "Section" },
    { key: "familyContact", header: "Family Contact" },
    { key: "status", header: "Status", render: (r) => <Badge variant={BURIAL_STATUS_VARIANT[r.status] ?? "default"}>{r.status}</Badge> },
    { key: "actions", header: "", className: "w-10", render: (r) => (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            type="button" onClick={(e) => e.stopPropagation()}
            className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="More actions"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-44 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
            <DropdownMenu.Item asChild className={menuItemClass}>
              <Link href={`/cemetery-management/burial-records/${r.id}`}><Eye className="h-4 w-4" /> View Details</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(r)}>
              <Trash2 className="h-4 w-4" /> Delete
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    ) },
  ];

  return (
    <Table
      columns={columns} data={records} isLoading={isLoading}
      emptyMessage="No burial records found."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
