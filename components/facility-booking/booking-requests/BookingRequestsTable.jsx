"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Eye, MoreVertical, CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";
import { REQUEST_STATUS_VARIANT, AVATAR_COLORS } from "@/lib/mock/vmBookingRequestsMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

function initials(name) {
  return name.split(" ").filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
}

function avatarStyle(name) {
  const idx = name.charCodeAt(0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[idx];
}

export function BookingRequestsTable({ requests, isLoading, page, pageSize, totalCount, onPageChange, onView }) {
  const columns = [
    { key: "id", header: "Request ID", render: (r) => (
      <button type="button" onClick={() => onView(r)} className="font-medium text-interactive-600 hover:underline">
        {r.id}
      </button>
    ) },
    { key: "requestedBy", header: "Requested By", render: (r) => {
      const style = avatarStyle(r.requesterName);
      return (
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
            style={{ backgroundColor: style.bg, color: style.color }}
          >
            {initials(r.requesterName)}
          </span>
          <div>
            <p className="font-medium text-ink">{r.requesterName}</p>
            <p className="text-xs text-ink-subtle">{r.email}</p>
            <p className="text-xs text-ink-subtle">{r.phone}</p>
          </div>
        </div>
      );
    } },
    { key: "facilityEvent", header: "Facility / Event", render: (r) => (
      <div>
        <p className="text-ink">{r.facility}</p>
        <p className="text-xs text-ink-subtle">{r.event}</p>
      </div>
    ) },
    { key: "dateTime", header: "Date & Time", render: (r) => (
      <div>
        <p className="text-ink">{r.dateLabel}</p>
        <p className="text-xs text-ink-subtle">{r.timeLabel}</p>
      </div>
    ) },
    { key: "guests", header: "Guests", render: (r) => r.guests },
    { key: "status", header: "Status", render: (r) => <Badge variant={REQUEST_STATUS_VARIANT[r.status] ?? "default"}>{r.status}</Badge> },
    { key: "requestedOn", header: "Requested On", render: (r) => formatDate(r.requestedOn, { hour: "numeric", minute: "2-digit" }) },
    { key: "actions", header: "Actions", render: (r) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => onView(r)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View request">
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
              <DropdownMenu.Item className={menuItemClass} onSelect={() => onView(r)}><CheckCircle2 className="h-4 w-4" /> Approve Request</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <XCircle className="h-4 w-4" /> Reject Request
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={requests} isLoading={isLoading}
      emptyMessage="No booking requests found."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
