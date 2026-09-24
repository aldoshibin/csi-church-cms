"use client";

import Link from "next/link";
import { Church, UsersRound, BarChart3, Users2 } from "lucide-react";

const ACTIONS = [
  { label: "Add Ministry", icon: Church, href: "/volunteer-management/ministries-teams/add" },
  { label: "Add Team", icon: UsersRound, href: "#" },
  { label: "View Reports", icon: BarChart3, href: "/volunteer-management/reports" },
  { label: "Manage Volunteers", icon: Users2, href: "/volunteer-management/volunteers" },
];

export function MinistryQuickActions() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {ACTIONS.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex flex-col items-center gap-2 rounded-lg border border-border px-3 py-3 text-center transition-colors hover:bg-surface-canvas"
          >
            <action.icon className="h-5 w-5 text-interactive-600" />
            <span className="text-xs font-medium leading-tight text-ink-muted">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
