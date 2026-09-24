"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal, Eye, Pencil, Ban } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { MinistryIcon } from "../MinistryIcon";
import { MINISTRY_STATUS_VARIANT } from "@/lib/mock/ministriesTeamsMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

function TeamActionsMenu({ row }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={menuItemClass}><Eye className="h-4 w-4" /> View Team</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass}><Pencil className="h-4 w-4" /> Edit Team</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}><Ban className="h-4 w-4" /> Deactivate</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function TeamsInThisMinistryCard({ teams = [] }) {
  const columns = [
    {
      key: "name", header: "Team Name",
      render: (row) => (
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F3E8FF] text-[#7C3AED]">
            <MinistryIcon name={row.icon} className="h-4 w-4" />
          </span>
          <span className="font-medium text-interactive-600">{row.name}</span>
        </div>
      ),
    },
    { key: "description", header: "Description", render: (row) => <span className="text-ink-muted">{row.description}</span> },
    { key: "leader", header: "Team Leader", render: (row) => <span className="text-ink">{row.leader}</span> },
    { key: "volunteers", header: "Volunteers", render: (row) => <span className="font-medium text-ink">{row.volunteers}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={MINISTRY_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => <div className="flex items-center justify-end"><TeamActionsMenu row={row} /></div>,
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Teams in This Ministry</h3>
      <Table columns={columns} data={teams} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" />
      <p className="mt-3 text-sm text-ink-subtle">Showing 1 to {teams.length} of {teams.length} teams</p>
    </div>
  );
}
