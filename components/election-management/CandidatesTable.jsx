"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { Eye, MoreVertical, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { CANDIDATE_STATUS_BADGE_MAP } from "@/lib/mock/vmCandidatesMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function CandidatesTable({ candidates, isLoading, page, pageSize, totalCount, onPageChange, emptyMessage = "No candidates found." }) {
  const router = useRouter();
  const handleView = (c) => router.push(`/election-management/candidates/${c.id}`);

  const columns = [
    { key: "name", header: "Candidate Name", render: (c) => (
      <button type="button" onClick={() => handleView(c)} className="flex items-center gap-3 text-left">
        <img src={`https://i.pravatar.cc/64?u=${encodeURIComponent(c.email)}`} alt="" className="h-10 w-10 shrink-0 rounded-full object-cover" />
        <span>
          <span className="block font-medium text-interactive-600 hover:underline">{c.name}</span>
          <span className="block text-xs text-ink-subtle">{c.email}</span>
          <span className="block text-xs text-ink-subtle">{c.phone}</span>
        </span>
      </button>
    ) },
    { key: "position", header: "Position", render: (c) => <span className="text-ink">{c.position}</span> },
    { key: "election", header: "Election", render: (c) => <span className="text-ink">{c.election}</span> },
    { key: "status", header: "Status", render: (c) => <Badge variant={CANDIDATE_STATUS_BADGE_MAP[c.status] ?? "info"}>{c.status}</Badge> },
    { key: "nominatedBy", header: "Nominated By", render: (c) => <span className="text-ink">{c.nominatedBy}</span> },
    { key: "nominationDate", header: "Nomination Date", render: (c) => (
      <span className="text-ink">{formatDate(c.nominationDate, { hour: "numeric", minute: "2-digit" })}</span>
    ) },
    { key: "actions", header: "Actions", render: (c) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => handleView(c)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View candidate">
          <Eye className="h-4 w-4" />
        </button>
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="Edit candidate">
          <Pencil className="h-4 w-4" />
        </button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
              <MoreVertical className="h-4 w-4" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
              <DropdownMenu.Item className={menuItemClass} onSelect={() => handleView(c)}><Eye className="h-4 w-4" /> View Candidate</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Pencil className="h-4 w-4" /> Edit Candidate</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <Trash2 className="h-4 w-4" /> Delete Candidate
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={candidates} isLoading={isLoading} selectable
      emptyMessage={emptyMessage}
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
