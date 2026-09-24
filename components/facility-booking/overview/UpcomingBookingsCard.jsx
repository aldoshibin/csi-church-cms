"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function UpcomingBookingsCard({ bookings }) {
  if (!bookings?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Bookings</h3>
        <Link href="/facility-booking/bookings-calendar" className="text-xs font-medium text-interactive-600 hover:underline">
          View Calendar
        </Link>
      </div>
      <div className="mt-3 flex flex-col gap-3">
        {bookings.map((b) => (
          <Link
            key={b.id} href={`/facility-booking/all-bookings/${b.id}`}
            className="flex items-start gap-3 rounded-md p-2 -mx-2 hover:bg-surface-canvas"
          >
            <span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-md bg-interactive-50 text-interactive-700">
              <span className="text-[10px] font-semibold uppercase leading-none">{b.month}</span>
              <span className="text-base font-bold leading-none">{b.day}</span>
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">{b.title}</p>
              <p className="truncate text-xs text-ink-subtle">{b.facility}</p>
              <p className="truncate text-xs text-ink-subtle">{b.time}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/facility-booking/all-bookings"
        className="mt-3 flex items-center justify-between rounded-md border-t border-border pt-3 text-sm font-medium text-interactive-600 hover:underline"
      >
        View All Upcoming <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
