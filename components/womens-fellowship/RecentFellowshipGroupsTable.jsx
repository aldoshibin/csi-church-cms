"use client";

import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Eye, Pencil, MoreVertical, Flower2, Crown, Heart } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { WF_GROUP_STATUS_VARIANT } from "@/lib/mock/womensFellowshipMockData";

const ICON_MAP = { flower: Flower2, crown: Crown, heart: Heart };
const itemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function RecentFellowshipGroupsTable({ groups, isLoading, pagination }) {
  const columns = [
    {
      key: "name", header: "Group Name",
      render: (row) => {
        const Icon = ICON_MAP[row.icon] ?? Heart;
        return (
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${row.color}1A` }}>
              <Icon className="h-4 w-4" style={{ color: row.color }} />
            </span>
            <div>
              <Link href={`/womens-fellowship/fellowship-groups/${row.id}`} className="font-medium text-ink hover:text-interactive-600 hover:underline">
                {row.name}
              </Link>
              <p className="text-xs text-ink-subtle">Est. {row.establishedYear}</p>
            </div>
          </div>
        );
      },
    },
    { key: "leader", header: "Leader", render: (row) => <span className="text-ink">{row.leader}</span> },
    { key: "members", header: "Members", render: (row) => <span className="font-medium text-ink">{row.members}</span> },
    { key: "meeting", header: "Meeting Day & Time", render: (row) => <span className="text-ink-muted">{row.meetingDay}<br />{row.meetingTime}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={WF_GROUP_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <Link href={`/womens-fellowship/fellowship-groups/${row.id}`} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.name}`}>
            <Eye className="h-4 w-4" />
          </Link>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.name}`}>
            <Pencil className="h-4 w-4" />
          </button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button type="button" onClick={(e) => e.stopPropagation()} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`More actions for ${row.name}`}>
                <MoreVertical className="h-4 w-4" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-44 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={itemClass}>Manage Members</DropdownMenu.Item>
                <DropdownMenu.Item className={itemClass}>Duplicate Group</DropdownMenu.Item>
                <DropdownMenu.Separator className="my-1 h-px bg-border" />
                <DropdownMenu.Item className={`${itemClass} text-danger-600 hover:text-danger-600`}>Delete Group</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Recent Fellowship Groups</h3>
        <Link href="/womens-fellowship/fellowship-groups" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <Table columns={columns} data={groups} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
