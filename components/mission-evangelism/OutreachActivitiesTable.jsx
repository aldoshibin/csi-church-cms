"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { Eye, MoreVertical, Pencil, Download, HeartHandshake } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { OUTREACH_STATUS_BADGE_MAP, OUTREACH_CATEGORY_COLOR_MAP } from "@/lib/mock/vmMissionEvangelismMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function OutreachActivitiesTable({ activities, isLoading, page, pageSize, totalCount, onPageChange, emptyMessage = "No outreach activities found." }) {
  const router = useRouter();
  const handleView = (a) => router.push(`/mission-evangelism/outreach-programs/${a.id}`);

  const columns = [
    { key: "name", header: "Activity Name", render: (a) => (
      <button type="button" onClick={() => handleView(a)} className="flex items-center gap-3 text-left">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
          style={{ backgroundColor: `${OUTREACH_CATEGORY_COLOR_MAP[a.category]}22`, color: OUTREACH_CATEGORY_COLOR_MAP[a.category] }}
        >
          <HeartHandshake className="h-4 w-4" />
        </span>
        <span className="font-medium text-interactive-600 hover:underline">{a.name}</span>
      </button>
    ) },
    { key: "category", header: "Category", render: (a) => (
      <span
        className="rounded-sm px-2.5 py-1 text-xs font-medium"
        style={{ backgroundColor: `${OUTREACH_CATEGORY_COLOR_MAP[a.category]}1A`, color: OUTREACH_CATEGORY_COLOR_MAP[a.category] }}
      >
        {a.category}
      </span>
    ) },
    { key: "date", header: "Date", render: (a) => <span className="text-ink">{formatDate(a.date)}</span> },
    { key: "location", header: "Location", render: (a) => <span className="text-ink">{a.location}</span> },
    { key: "peopleReached", header: "People Reached", render: (a) => <span className="text-ink">{a.peopleReached}</span> },
    { key: "volunteers", header: "Volunteers", render: (a) => <span className="text-ink">{a.volunteers}</span> },
    { key: "status", header: "Status", render: (a) => <Badge variant={OUTREACH_STATUS_BADGE_MAP[a.status] ?? "info"}>{a.status}</Badge> },
    { key: "actions", header: "Actions", render: (a) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => handleView(a)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View activity">
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
              <DropdownMenu.Item className={menuItemClass} onSelect={() => handleView(a)}><Eye className="h-4 w-4" /> View Activity</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Pencil className="h-4 w-4" /> Edit Activity</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Download className="h-4 w-4" /> Download Report</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={activities} isLoading={isLoading}
      emptyMessage={emptyMessage}
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
