"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { formatDate } from "@/lib/utils";

export function RecentActivityCard({ activity }) {
  if (!activity?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Activity</h3>
        <Link href="/election-management/reports" className="text-sm font-medium text-interactive-600 hover:underline">View All</Link>
      </div>
      <div className="mt-4 flex flex-col divide-y divide-border">
        {activity.map((item) => {
          const Icon = Icons[item.icon] ?? Icons.Bell;
          return (
            <div key={item.id} className="flex items-start gap-3 py-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${item.iconBg} ${item.iconColor}`}>
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-ink">{item.title}</p>
                <p className="text-xs text-ink-subtle">{item.description}</p>
              </div>
              <span className="whitespace-nowrap text-right text-xs text-ink-subtle">
                {formatDate(item.on, { hour: "numeric", minute: "2-digit" })}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
