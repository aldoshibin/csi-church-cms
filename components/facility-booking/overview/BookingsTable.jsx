"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Eye, MoreVertical, Pencil, XCircle, Copy } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { BOOKING_STATUS_VARIANT, PAYMENT_STATUS_VARIANT } from "@/lib/mock/vmFacilityBookingMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function BookingsTable({ bookings, isLoading, page, pageSize, totalCount, onPageChange, onView }) {
  const columns = [
    { key: "id", header: "Booking ID", render: (b) => (
      <button type="button" onClick={() => onView(b)} className="font-medium text-interactive-600 hover:underline">
        {b.id}
      </button>
    ) },
    { key: "facility", header: "Facility" },
    { key: "bookedBy", header: "Booked By", render: (b) => (
      <div>
        <p className="text-ink">{b.bookedByName}</p>
        <p className="text-xs text-ink-subtle">{b.bookedByPhone}</p>
      </div>
    ) },
    { key: "purpose", header: "Purpose / Event" },
    { key: "dateTime", header: "Date & Time", render: (b) => (
      <div>
        <p className="text-ink">{b.dateLabel}</p>
        <p className="text-xs text-ink-subtle">{b.timeLabel}</p>
      </div>
    ) },
    { key: "status", header: "Status", render: (b) => <Badge variant={BOOKING_STATUS_VARIANT[b.status] ?? "default"}>{b.status}</Badge> },
    { key: "paymentStatus", header: "Payment Status", render: (b) => <Badge variant={PAYMENT_STATUS_VARIANT[b.paymentStatus] ?? "default"}>{b.paymentStatus}</Badge> },
    { key: "actions", header: "Actions", render: (b) => (
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => onView(b)} className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="View booking">
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
              <DropdownMenu.Item className={menuItemClass} onSelect={() => onView(b)}><Pencil className="h-4 w-4" /> Reschedule</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Copy className="h-4 w-4" /> Duplicate Booking</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <XCircle className="h-4 w-4" /> Cancel Booking
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    ) },
  ];

  return (
    <Table
      columns={columns} data={bookings} isLoading={isLoading}
      emptyMessage="No bookings found."
      pagination={{ page, pageSize, totalCount, onPageChange }}
    />
  );
}
