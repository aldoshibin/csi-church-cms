"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { Eye, MoreVertical, Pencil, Download, HeartHandshake } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { PROGRAM_STATUS_BADGE_MAP, PROGRAM_CATEGORY_COLOR_MAP } from "@/lib/mock/vmMissionEvangelismMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function ProgramsTable({ programs, isLoading, page, pageSize, totalCount, onPageChange, emptyMessage = "No outreach programs found." }) {
  const router = useRouter();
  const handleView = (p) => router.push(`/mission-evangelism/outreach-programs/${p.id}`);

  const columns = [
    { key: "name", header: "Program Name", render: (p) => (
      <button type="button" onClick={() => handleView(p)} className="flex items-center gap-3 text-left">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
          style={{ backgroundColor: `${PROGRAM_CATEGORY_COLOR_MAP[p.category]}22`, color: PROGRAM_CATEGORY_COLOR_MAP[p.category] }}
        >
          <HeartHandshake className="h-4 w-4" />
        </span>
        <span className="font-medium text-interactive-600 hover:underline">{p.name}</span>
      </button>
    ) },
    { key: "category", header: "Category", render: (p) => (
      <span
        className="rounded-sm px-2.5 py-1 text-xs font-medium"
        style={{ backgroundColor: `${PROGRAM_CATEGORY_COLOR_MAP[p.category]}1A`, color: PROGRAM_CATEGORY_COLOR_MAP[p.category] }}
      >
        {p.category}
      </span>
    ) },
    { key: "status", header: "Status", render: (p) => <Badge variant={PROGRAM_STATUS_BADGE_MAP[p.status] ?? "info"}>{p.status}</Badge> },
    { key: "peopleReached", header: "People Reached", render: (p) => <span className="text-ink">{p.peopleReached ?? "—"}</span> },
    { key: "volunteers", header: "Volunteers", render: (p) => <span className="text-ink">{p.volunteers ?? "—"}</span> },
    { key: "startDate", header: "Start Date", render: (p) => <span className="text-ink">{formatDate(p.startDate)}</span> },
    { key: "endDate", header: "End Date", render: (p) => <span className="text-ink">{formatDate(p.endDate)}</span> },
    { key: "actions", header: "Actions", render: (p) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => handleView(p)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View program">
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
              <DropdownMenu.Item className={menuItemClass} onSelect={() => handleView(p)}><Eye className="h-4 w-4" /> View Program</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Pencil className="h-4 w-4" /> Edit Program</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Download className="h-4 w-4" /> Download Report</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={programs} isLoading={isLoading}
      emptyMessage={emptyMessage}
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
