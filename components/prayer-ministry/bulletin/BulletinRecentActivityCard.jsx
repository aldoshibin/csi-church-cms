"use client";

import { CheckCircle2, Clock, XCircle } from "lucide-react";
import { formatDate } from "@/lib/utils";

const ICONS = { approved: CheckCircle2, pending: Clock, rejected: XCircle };
const COLORS = { approved: "text-success-500", pending: "text-warning-500", rejected: "text-danger-500" };

export function BulletinRecentActivityCard({ activity = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Activity</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {activity.map((a, i) => {
          const Icon = ICONS[a.kind] ?? Clock;
          return (
            <div key={i} className="flex items-start gap-2.5">
              <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${COLORS[a.kind] ?? "text-ink-subtle"}`} />
              <div className="min-w-0">
                <p className="text-sm text-ink">&quot;{a.title}&quot;</p>
                <p className="text-xs text-ink-subtle">{a.action}</p>
                <p className="text-xs text-ink-subtle">{formatDate(a.date)} • {a.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
