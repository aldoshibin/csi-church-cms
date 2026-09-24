"use client";

import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export function NextActivityCard({ activity }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Next Activity</h3>
        <Link href="/mens-fellowship/activities" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="rounded-lg bg-success-50 p-4">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
            <Calendar className="h-4 w-4 text-success-600" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink">{activity.title}</p>
            <p className="mt-0.5 text-xs text-ink-muted">{activity.description}</p>
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-1.5 text-xs text-ink-muted">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-success-600" /> {formatDate(activity.date)} ({activity.day})</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-success-600" /> {activity.time}</span>
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-success-600" /> {activity.venue}</span>
        </div>
        <div className="mt-3">
          <Badge variant="success">In {activity.daysAway} days</Badge>
        </div>
      </div>
    </div>
  );
}
