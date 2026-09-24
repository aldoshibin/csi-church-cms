"use client";

import Link from "next/link";
import { CalendarPlus, ListChecks, CalendarDays } from "lucide-react";

const ACTIONS = [
  { key: "add", label: "Add Booking", description: "Create a new booking", icon: CalendarPlus, href: "/facility-booking/add-booking" },
  { key: "all", label: "All Bookings", description: "View all confirmed bookings", icon: ListChecks, href: "/facility-booking/all-bookings" },
  { key: "calendar", label: "Bookings Calendar", description: "View facility calendar", icon: CalendarDays, href: "/facility-booking/bookings-calendar" },
];

export function BookingRequestsQuickActionsCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="mt-3 flex flex-col gap-1">
        {ACTIONS.map((action) => (
          <Link
            key={action.key} href={action.href}
            className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-surface-canvas"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-interactive-50 text-interactive-600">
              <action.icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-ink">{action.label}</p>
              <p className="text-xs text-ink-subtle">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
