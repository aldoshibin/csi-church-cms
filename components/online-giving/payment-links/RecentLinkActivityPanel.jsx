"use client";

import Link from "next/link";
import { Plus, Clock, Ban, Pencil } from "lucide-react";

const ICON_MAP = {
  created: { icon: Plus, bg: "bg-success-50", color: "text-success-600" },
  expired: { icon: Clock, bg: "bg-warning-50", color: "text-warning-600" },
  deactivated: { icon: Ban, bg: "bg-surface-muted", color: "text-ink-subtle" },
  updated: { icon: Pencil, bg: "bg-interactive-50", color: "text-interactive-600" },
};

export function RecentLinkActivityPanel({ activity = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Link Activity</h3>
        <Link href="/online-giving/payment-links" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col gap-4">
        {activity.map((item, i) => {
          const meta = ICON_MAP[item.type] ?? ICON_MAP.updated;
          return (
            <div key={i} className="flex items-start gap-3">
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${meta.bg}`}>
                <meta.icon className={`h-4 w-4 ${meta.color}`} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-ink">{item.label}</p>
                <p className="truncate text-xs text-ink-subtle">{item.detail}</p>
                <p className="text-xs text-ink-subtle">{item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
