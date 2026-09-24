"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

const BADGE_VARIANT = { Today: "success", "This Week": "info", Scheduled: "accent" };

export function FgUpcomingMeetingsCard({ meetings = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Meetings</h3>
        <Link href="/womens-fellowship/meeting-attendance" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col divide-y divide-surface-muted">
        {meetings.map((m, i) => (
          <div key={i} className="flex items-start justify-between gap-3 py-3 first:pt-0 last:pb-0">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">{m.title}</p>
              <p className="mt-0.5 text-xs text-ink-subtle">{formatDate(m.date)} · {m.time}</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-subtle"><MapPin className="h-3 w-3" /> {m.location}</p>
            </div>
            <Badge variant={BADGE_VARIANT[m.badge] ?? "default"} className="shrink-0">{m.badge}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
