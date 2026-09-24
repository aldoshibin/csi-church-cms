"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { StickyNote, Plus } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function ServiceSummaryCard({ summary }) {
  const rows = [
    ["Total Events Served", summary.totalEventsServed],
    ["Total Hours Contributed", `${summary.totalHoursContributed} hrs`],
    ["Last Service Date", formatDate(summary.lastServiceDate)],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Service Summary</h3>
      <div className="flex flex-col divide-y divide-surface-muted text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between py-2 first:pt-0">
            <span className="text-ink-subtle">{label}</span>
            <span className="font-medium text-ink">{value}</span>
          </div>
        ))}
        <div className="flex items-center justify-between py-2 last:pb-0">
          <span className="text-ink-subtle">Next Assignment</span>
          <Link href="/youth-ministry/events" className="font-medium text-interactive-500 hover:underline">
            {summary.nextAssignment} ({formatDate(summary.nextAssignmentDate)})
          </Link>
        </div>
      </div>
    </div>
  );
}

export function RecentAssignmentsCard({ assignments = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Assignments</h3>
        <Link href="/youth-ministry/events" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col divide-y divide-surface-muted">
        {assignments.map((a, i) => (
          <div key={i} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
            <div className="flex w-11 shrink-0 flex-col items-center justify-center rounded-lg border border-border py-1.5 text-center">
              <span className="text-[10px] font-semibold uppercase text-danger-600">{a.month}</span>
              <span className="text-sm font-bold text-ink">{a.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">{a.title}</p>
              <p className="text-xs text-ink-subtle">{formatDate(a.date)} · {a.time}</p>
              <p className="text-xs text-ink-subtle">{a.venue}</p>
            </div>
            <Badge variant="success" className="shrink-0">{a.status}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

export function VolunteerNotesCard({ notes = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Notes</h3>
        <button type="button" className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-ink-muted hover:bg-surface-canvas">
          <Plus className="h-3.5 w-3.5" /> Add Note
        </button>
      </div>
      {notes.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-10 text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
            <StickyNote className="h-5 w-5" />
          </span>
          <p className="text-sm font-medium text-ink">No notes added yet.</p>
          <p className="text-xs text-ink-subtle">Click on Add Note to add notes.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {notes.map((n, i) => (
            <p key={i} className="text-sm text-ink-muted">{n}</p>
          ))}
        </div>
      )}
    </div>
  );
}
