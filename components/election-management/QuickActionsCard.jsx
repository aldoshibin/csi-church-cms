"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { Zap } from "lucide-react";

export function QuickActionsCard({ actions }) {
  if (!actions?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Quick Actions</h3>
      </div>
      <div className="mt-3 flex flex-col gap-1">
        {actions.map((action) => {
          const Icon = Icons[action.icon] ?? Icons.File;
          return (
            <Link
              key={action.key} href={action.href}
              className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-surface-canvas"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-interactive-50 text-interactive-600">
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
