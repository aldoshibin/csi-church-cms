"use client";

import Link from "next/link";
import { CalendarPlus, FolderKanban, CalendarClock } from "lucide-react";

const ACTIONS = [
  { key: "add", label: "Add New Facility", description: "Create a new facility", icon: CalendarPlus, href: "/facility-booking/facilities/add" },
  { key: "categories", label: "Facility Categories", description: "Manage facility categories", icon: FolderKanban, href: "#" },
  { key: "maintenance", label: "Maintenance Schedule", description: "View maintenance schedule", icon: CalendarClock, href: "#" },
];

export function FacilitiesQuickActionsCard() {
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
