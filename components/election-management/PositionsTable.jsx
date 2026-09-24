"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Eye, MoreVertical, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function PositionsTable({ positions, isLoading, page, pageSize, totalCount, onPageChange }) {
  const columns = [
    { key: "name", header: "Position Name", render: (pos) => <span className="font-medium text-interactive-600">{pos.name}</span> },
    { key: "description", header: "Description", render: (pos) => <span className="text-ink-muted">{pos.description}</span> },
    { key: "maxMembers", header: "Max Members", render: (pos) => pos.maxMembers },
    { key: "eligibility", header: "Eligibility", render: (pos) => pos.eligibility },
    { key: "status", header: "Status", render: (pos) => <Badge variant="success">{pos.status}</Badge> },
    { key: "actions", header: "Actions", render: (pos) => (
      <div className="flex items-center gap-1">
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View position">
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
              <DropdownMenu.Item className={menuItemClass}><Pencil className="h-4 w-4" /> Edit Position</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <Trash2 className="h-4 w-4" /> Delete Position
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={positions} isLoading={isLoading}
      emptyMessage="No positions added to this election yet."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
