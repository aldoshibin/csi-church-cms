"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { Eye, MoreVertical, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { VOTER_STATUS_BADGE_MAP } from "@/lib/mock/vmVotersMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function VotersTable({ voters, isLoading, page, pageSize, totalCount, onPageChange, emptyMessage = "No voters found." }) {
  const router = useRouter();
  const handleView = (v) => router.push(`/election-management/voters/${v.id}`);

  const columns = [
    { key: "name", header: "Voter Name", render: (v) => (
      <button type="button" onClick={() => handleView(v)} className="flex items-center gap-3 text-left">
        <img src={`https://i.pravatar.cc/64?u=${encodeURIComponent(v.email)}`} alt="" className="h-10 w-10 shrink-0 rounded-full object-cover" />
        <span>
          <span className="block font-medium text-interactive-600 hover:underline">{v.name}</span>
          <span className="block text-xs text-ink-subtle">{v.email}</span>
          <span className="block text-xs text-ink-subtle">{v.phone}</span>
        </span>
      </button>
    ) },
    { key: "membershipNumber", header: "Membership No.", render: (v) => <span className="text-ink">{v.membershipNumber}</span> },
    { key: "familyName", header: "Family Name", render: (v) => <span className="text-ink">{v.familyName}</span> },
    { key: "election", header: "Election", render: (v) => <span className="text-ink">{v.election}</span> },
    { key: "status", header: "Status", render: (v) => <Badge variant={VOTER_STATUS_BADGE_MAP[v.status] ?? "info"}>{v.status}</Badge> },
    { key: "membershipType", header: "Membership Type", render: (v) => <span className="text-ink">{v.membershipType}</span> },
    { key: "actions", header: "Actions", render: (v) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => handleView(v)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View voter">
          <Eye className="h-4 w-4" />
        </button>
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="Edit voter">
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
              <DropdownMenu.Item className={menuItemClass} onSelect={() => handleView(v)}><Eye className="h-4 w-4" /> View Voter</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Pencil className="h-4 w-4" /> Edit Voter</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <Trash2 className="h-4 w-4" /> Delete Voter
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={voters} isLoading={isLoading} selectable
      emptyMessage={emptyMessage}
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
