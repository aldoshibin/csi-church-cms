"use client";

import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Eye, MoreVertical, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { PLOT_STATUS_VARIANT } from "@/lib/mock/vmCemeteryMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function PlotsTable({ plots, isLoading, page, pageSize, totalCount, onPageChange }) {
  const columns = [
    { key: "plotNumber", header: "Plot No.", render: (p) => (
      <Link href={`/cemetery-management/plots-management/${p.id}`} className="font-medium text-interactive-600 hover:underline">
        {p.plotNumber}
      </Link>
    ) },
    { key: "section", header: "Section" },
    { key: "row", header: "Row" },
    { key: "graveNumber", header: "Grave No." },
    { key: "plotType", header: "Plot Type" },
    { key: "status", header: "Status", render: (p) => <Badge variant={PLOT_STATUS_VARIANT[p.status] ?? "default"}>{p.status}</Badge> },
    { key: "assignedTo", header: "Assigned To", render: (p) => p.assignedTo ? (
      <div>
        <p className="text-ink">{p.assignedTo.name}</p>
        <p className="text-xs text-ink-subtle">{p.assignedTo.refId}</p>
      </div>
    ) : "–" },
    { key: "lastUpdated", header: "Last Updated", render: (p) => formatDate(p.lastUpdated) },
    { key: "actions", header: "Actions", render: (p) => (
      <div className="flex items-center gap-1">
        <Link href={`/cemetery-management/plots-management/${p.id}`} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View plot">
          <Eye className="h-4 w-4" />
        </Link>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
              <MoreVertical className="h-4 w-4" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-44 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
              <DropdownMenu.Item asChild className={menuItemClass}>
                <Link href={`/cemetery-management/plots-management/${p.id}`}><Pencil className="h-4 w-4" /> Edit Plot</Link>
              </DropdownMenu.Item>
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
      columns={columns} data={plots} isLoading={isLoading}
      emptyMessage="No plots found."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
