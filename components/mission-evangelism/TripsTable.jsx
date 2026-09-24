"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { Eye, MoreVertical, Pencil, Download, Plane } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { TRIP_STATUS_BADGE_MAP } from "@/lib/mock/vmMissionEvangelismMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function TripsTable({ trips, isLoading, page, pageSize, totalCount, onPageChange, emptyMessage = "No mission trips found." }) {
  const router = useRouter();
  const handleView = (t) => router.push(`/mission-evangelism/mission-trips/${t.id}`);

  const columns = [
    { key: "name", header: "Trip Name", render: (t) => (
      <button type="button" onClick={() => handleView(t)} className="flex items-center gap-3 text-left">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#DCFCE7] text-[#16A34A]">
          <Plane className="h-4 w-4" />
        </span>
        <span className="font-medium text-interactive-600 hover:underline">{t.name}</span>
      </button>
    ) },
    { key: "destination", header: "Destination", render: (t) => <span className="text-ink">{t.destination}</span> },
    { key: "startDate", header: "Start Date", render: (t) => <span className="text-ink">{formatDate(t.startDate)}</span> },
    { key: "endDate", header: "End Date", render: (t) => <span className="text-ink">{formatDate(t.endDate)}</span> },
    { key: "participants", header: "Participants", render: (t) => <span className="text-ink">{t.participants}</span> },
    { key: "status", header: "Status", render: (t) => <Badge variant={TRIP_STATUS_BADGE_MAP[t.status] ?? "info"}>{t.status}</Badge> },
    { key: "actions", header: "Actions", render: (t) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => handleView(t)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View trip">
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
              <DropdownMenu.Item className={menuItemClass} onSelect={() => handleView(t)}><Eye className="h-4 w-4" /> View Trip</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Pencil className="h-4 w-4" /> Edit Trip</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Download className="h-4 w-4" /> Download Report</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={trips} isLoading={isLoading}
      emptyMessage={emptyMessage}
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
