"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Eye, MoreVertical, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { DECEASED_STATUS_VARIANT } from "@/lib/mock/vmDeceasedMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function DeceasedTable({ records, isLoading, page, pageSize, totalCount, onPageChange, onView }) {
  const columns = [
    { key: "recordId", header: "Record ID", render: (r) => (
      <button type="button" onClick={() => onView(r)} className="font-medium text-interactive-600 hover:underline">
        {r.recordId}
      </button>
    ) },
    { key: "fullName", header: "Full Name" },
    { key: "gender", header: "Gender" },
    { key: "dateOfDeath", header: "Date of Death", render: (r) => formatDate(r.dateOfDeath) },
    { key: "ageAtDeath", header: "Age at Death", render: (r) => `${r.ageAtDeath} Years` },
    { key: "burialRecordId", header: "Burial Record ID" },
    { key: "sectionPlot", header: "Section / Plot", render: (r) => `${r.section} / ${r.plotNumber}` },
    { key: "dateOfBurial", header: "Date of Burial", render: (r) => formatDate(r.dateOfBurial) },
    { key: "status", header: "Status", render: (r) => <Badge variant={DECEASED_STATUS_VARIANT[r.status] ?? "default"}>{r.status}</Badge> },
    { key: "actions", header: "Actions", render: (r) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => onView(r)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View record">
          <Eye className="h-4 w-4" />
        </button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
              <MoreVertical className="h-4 w-4" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-44 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
              <DropdownMenu.Item className={menuItemClass} onSelect={() => onView(r)}><Pencil className="h-4 w-4" /> Edit Record</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <Trash2 className="h-4 w-4" /> Delete
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={records} isLoading={isLoading}
      emptyMessage="No deceased records found."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
