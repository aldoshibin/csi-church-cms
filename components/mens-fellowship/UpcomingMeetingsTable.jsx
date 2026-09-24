"use client";

import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreVertical, Users, BookOpen, Coffee } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { MF_MEETING_STATUS_VARIANT } from "@/lib/mock/mensFellowshipMockData";
import { formatDate } from "@/lib/utils";

const ICON_MAP = { users: Users, book: BookOpen, coffee: Coffee };
const itemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function UpcomingMeetingsTable({ meetings, isLoading }) {
  const columns = [
    {
      key: "title", header: "Meeting Title",
      render: (row) => {
        const Icon = ICON_MAP[row.icon] ?? Users;
        return (
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${row.color}1A` }}>
              <Icon className="h-4 w-4" style={{ color: row.color }} />
            </span>
            <Link href={`/mens-fellowship/meetings/${row.id}`} className="font-medium text-ink hover:text-interactive-600 hover:underline">
              {row.title}
            </Link>
          </div>
        );
      },
    },
    { key: "group", header: "Group", render: (row) => <span className="text-ink-muted">{row.group}</span> },
    {
      key: "date", header: "Date & Time",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.date)}</p>
          <p className="text-xs text-ink-subtle">{row.time}</p>
        </div>
      ),
    },
    { key: "venue", header: "Venue", render: (row) => <span className="text-ink-muted">{row.venue}</span> },
    { key: "leader", header: "Leader", render: (row) => <span className="text-ink">{row.leader}</span> },
    { key: "expected", header: "Expected", render: (row) => <span className="text-ink">{row.expected}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={MF_MEETING_STATUS_VARIANT[row.status] ?? "success"}>{row.status}</Badge>,
    },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type="button" onClick={(e) => e.stopPropagation()} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`More actions for ${row.title}`}>
              <MoreVertical className="h-4 w-4" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-44 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
              <DropdownMenu.Item className={itemClass}>View Details</DropdownMenu.Item>
              <DropdownMenu.Item className={itemClass}>Edit Meeting</DropdownMenu.Item>
              <DropdownMenu.Separator className="my-1 h-px bg-border" />
              <DropdownMenu.Item className={`${itemClass} text-danger-600 hover:text-danger-600`}>Cancel Meeting</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Upcoming Meetings</h3>
        <Link href="/mens-fellowship/meetings" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <Table columns={columns} data={meetings} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" />
    </div>
  );
}
