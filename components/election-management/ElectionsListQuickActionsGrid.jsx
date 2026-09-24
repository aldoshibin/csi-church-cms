"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { Zap } from "lucide-react";

// A 2x2 icon-card grid — visually distinct from the module's existing
// vertical-list QuickActionsCard.jsx — matching this List mockup's own
// "Quick Actions" section, which uses square icon cards rather than a
// divided vertical list. See README_CHANGES.txt.
export function ElectionsListQuickActionsGrid({ actions }) {
  if (!actions?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Quick Actions</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = Icons[action.icon] ?? Icons.File;
          return (
            <Link
              key={action.key} href={action.href}
              className="flex flex-col items-start gap-2 rounded-lg border border-border p-4 transition-colors hover:border-interactive-500 hover:bg-interactive-50"
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${action.iconBg} ${action.iconColor}`}>
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">{action.label}</p>
                <p className="text-xs text-ink-subtle">{action.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
