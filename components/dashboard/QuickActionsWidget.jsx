"use client";

import Link from "next/link";
import { Home, UserPlus, Droplets, HeartHandshake, HandCoins, CalendarPlus, Megaphone, FileBarChart } from "lucide-react";

const ACTIONS = [
  { label: "Add Family", href: "/families?new=1", icon: Home },
  { label: "Add Member", href: "/members?new=1", icon: UserPlus },
  { label: "Record Baptism", href: "/sacraments/baptism?new=1", icon: Droplets },
  { label: "Record Marriage", href: "/sacraments/marriage?new=1", icon: HeartHandshake },
  { label: "Add Donation", href: "/finance/income?new=1", icon: HandCoins },
  { label: "Create Event", href: "/events?new=1", icon: CalendarPlus },
  { label: "Send Announcement", href: "/communication/bulk?new=1", icon: Megaphone },
  { label: "View Reports", href: "/reports", icon: FileBarChart },
];

export function QuickActionsWidget() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-2">
        {ACTIONS.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-ink transition-colors hover:border-interactive-300 hover:bg-interactive-50"
          >
            <action.icon className="h-4 w-4 shrink-0 text-interactive-500" />
            <span className="truncate">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
