"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Eye, MoreVertical, Pencil, PowerOff, CalendarClock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { FACILITY_STATUS_VARIANT } from "@/lib/mock/vmFacilitiesMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function FacilitiesTable({ facilities, isLoading, page, pageSize, totalCount, onPageChange, onView }) {
  const columns = [
    { key: "name", header: "Facility Name", render: (f) => (
      <button type="button" onClick={() => onView(f)} className="flex items-center gap-3 text-left">
        <span className="flex h-10 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-interactive-50 to-surface-muted text-interactive-300">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div>
          <p className="font-medium text-ink hover:text-interactive-600 hover:underline">{f.name}</p>
          <p className="text-xs text-ink-subtle">ID: {f.id}</p>
        </div>
      </button>
    ) },
    { key: "location", header: "Location" },
    { key: "capacity", header: "Capacity", render: (f) => f.capacityLabel },
    { key: "amenities", header: "Amenities", render: (f) => f.amenities.join(", ") },
    { key: "status", header: "Status", render: (f) => <Badge variant={FACILITY_STATUS_VARIANT[f.status] ?? "default"}>{f.status}</Badge> },
    { key: "actions", header: "Actions", render: (f) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => onView(f)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View facility">
          <Eye className="h-4 w-4" />
        </button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
              <MoreVertical className="h-4 w-4" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
              <DropdownMenu.Item className={menuItemClass} onSelect={() => onView(f)}><Pencil className="h-4 w-4" /> Edit Facility</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><CalendarClock className="h-4 w-4" /> Maintenance Schedule</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <PowerOff className="h-4 w-4" /> Deactivate Facility
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={facilities} isLoading={isLoading}
      emptyMessage="No facilities found."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
