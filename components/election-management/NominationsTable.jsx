"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { Eye, MoreVertical, Pencil, UserCheck2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { NOMINATION_STATUS_BADGE_MAP } from "@/lib/mock/vmNominationsMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function NominationsTable({ nominations, isLoading, page, pageSize, totalCount, onPageChange, emptyMessage = "No nominations found." }) {
  const router = useRouter();
  const handleView = (n) => router.push(`/election-management/nomination/${n.id}`);

  const columns = [
    { key: "nominee", header: "Nominee", render: (n) => (
      <button type="button" onClick={() => handleView(n)} className="flex items-center gap-3 text-left">
        <img src={`https://i.pravatar.cc/64?u=${encodeURIComponent(n.nomineeName)}`} alt="" className="h-10 w-10 shrink-0 rounded-full object-cover" />
        <span>
          <span className="block font-medium text-interactive-600 hover:underline">{n.nomineeName}</span>
          <span className="block text-xs text-ink-subtle">{n.nomineeMembershipNo}</span>
        </span>
      </button>
    ) },
    { key: "position", header: "Position", render: (n) => <span className="text-ink">{n.position}</span> },
    { key: "nominatedBy", header: "Nominated By", render: (n) => <span className="text-ink">{n.nominatedByName}</span> },
    { key: "election", header: "Election", render: (n) => <span className="text-ink">{n.election}</span> },
    { key: "status", header: "Status", render: (n) => <Badge variant={NOMINATION_STATUS_BADGE_MAP[n.status] ?? "info"}>{n.status}</Badge> },
    { key: "nominatedOn", header: "Nominated On", render: (n) => (
      <span className="text-ink">{formatDate(n.nominatedOn, { hour: "numeric", minute: "2-digit" })}</span>
    ) },
    { key: "actions", header: "Actions", render: (n) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => handleView(n)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View nomination">
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
              <DropdownMenu.Item className={menuItemClass} onSelect={() => handleView(n)}><Eye className="h-4 w-4" /> View Nomination</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Pencil className="h-4 w-4" /> Edit Nomination</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><UserCheck2 className="h-4 w-4" /> Approve Nomination</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <XCircle className="h-4 w-4" /> Reject Nomination
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={nominations} isLoading={isLoading} selectable
      emptyMessage={emptyMessage}
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
