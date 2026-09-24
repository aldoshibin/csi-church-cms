"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { Calendar, Eye, MoreVertical, Pencil, Copy, Ban, Users2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { ELECTION_TYPE_BADGE_MAP } from "@/lib/mock/vmElectionManagementMockData";

// A new table (rather than an extension of the Dashboard's ElectionsTable)
// because this mockup's columns genuinely differ: it adds a "#" index
// column and a Candidates column, and its status note text takes a
// different shape per status. See README_CHANGES.txt.
const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

const STATUS_VARIANT = { Upcoming: "info", Ongoing: "warning", Completed: "success" };

export function ElectionsListTable({ elections, isLoading, onViewDetails, emptyMessage = "No elections found." }) {
  const router = useRouter();

  const columns = [
    { key: "index", header: "#", render: (e) => <span className="text-sm text-ink-subtle">{e._index + 1}</span> },
    { key: "name", header: "Election Name", render: (e) => (
      <div>
        <p className="font-medium text-ink">{e.name}</p>
        <p className="text-xs text-ink-subtle">{e.tagline}</p>
      </div>
    ) },
    { key: "type", header: "Election Type", render: (e) => <Badge variant={ELECTION_TYPE_BADGE_MAP[e.type] ?? "info"}>{e.type}</Badge> },
    { key: "electionDate", header: "Election Date", render: (e) => (
      <span className="flex items-center gap-1.5 text-sm text-ink">
        <Calendar className="h-3.5 w-3.5 text-ink-subtle" />
        <span>
          <span className="block font-medium text-ink">{formatDate(e.electionDate)}</span>
          <span className="block text-xs text-ink-subtle">{e.timeRange}</span>
        </span>
      </span>
    ) },
    { key: "positions", header: "Positions", render: (e) => (
      <span>
        <span className="block font-medium text-ink">{e.positions}</span>
        <span className="block text-xs text-interactive-600">View positions</span>
      </span>
    ) },
    { key: "candidates", header: "Candidates", render: (e) => (
      <span>
        <span className="block font-medium text-ink">{e.candidates}</span>
        <span className="block text-xs text-interactive-600">View candidates</span>
      </span>
    ) },
    { key: "status", header: "Status", render: (e) => (
      <div>
        <Badge variant={STATUS_VARIANT[e.status] ?? "info"}>{e.status}</Badge>
        {e.statusNote && <p className="mt-1 text-xs text-ink-subtle">{e.statusNote}</p>}
      </div>
    ) },
    { key: "actions", header: "Actions", render: (e) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => onViewDetails?.(e)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View election details">
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
              <DropdownMenu.Item className={menuItemClass} onSelect={() => onViewDetails?.(e)}><Eye className="h-4 w-4" /> View Details</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass} onSelect={() => router.push(`/election-management/elections/${e.id}/edit`)}><Pencil className="h-4 w-4" /> Edit Election</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Users2 className="h-4 w-4" /> View Positions</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Copy className="h-4 w-4" /> Duplicate Election</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <Ban className="h-4 w-4" /> Cancel Election
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  const indexedElections = (elections ?? []).map((e, index) => ({ ...e, _index: index }));

  return (
    <Table columns={columns} data={indexedElections} isLoading={isLoading} emptyMessage={emptyMessage} />
  );
}
