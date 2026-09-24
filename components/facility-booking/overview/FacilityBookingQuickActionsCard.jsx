"use client";

import Link from "next/link";
import { CalendarPlus, Building2, CalendarDays, ClipboardCheck } from "lucide-react";

const ACTIONS = [
  { key: "add", label: "Add New Booking", description: "Create a new facility booking", icon: CalendarPlus, href: "/facility-booking/add-booking" },
  { key: "facilities", label: "Manage Facilities", description: "Add or update facilities", icon: Building2, href: "/facility-booking/facilities" },
  { key: "calendar", label: "Booking Calendar", description: "View bookings in calendar", icon: CalendarDays, href: "/facility-booking/bookings-calendar" },
  { key: "requests", label: "Booking Requests", description: "Review pending requests", icon: ClipboardCheck, href: "/facility-booking/booking-requests" },
];

export function FacilityBookingQuickActionsCard() {
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
