"use client";

import { Calendar, MapPin, User, Tag, Clock, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

function Row({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs text-ink-subtle">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-ink">{value}</p>
      </div>
    </div>
  );
}

export function EditEventInformationCard({ event }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Event Information</h3>
      <div className="mt-2 flex flex-col divide-y divide-surface-muted">
        <Row icon={Calendar} label="Date & Time" value={`${formatDate(event.date)} (${event.day}), ${event.time}`} />
        <Row icon={MapPin} label="Venue" value={<>{event.venue}<br /><span className="text-xs text-ink-subtle">{event.venueOrg}</span></>} />
        <Row icon={User} label="Organizer" value={event.organizer} />
        <Row icon={Tag} label="Category" value={event.category} />
        <div className="flex items-start gap-3 py-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
            <Clock className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs text-ink-subtle">Event Status</p>
            <div className="mt-1"><Badge variant="info">{event.status}</Badge></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EditAttendanceSummaryCard({ summary }) {
  const rows = [
    ["Present", summary.present, summary.presentPct, "#16A34A"],
    ["Late", summary.late, summary.latePct, "#F59E0B"],
    ["Absent", summary.absent, summary.absentPct, "#DC2626"],
    ["Not Marked", summary.notMarked, summary.notMarkedPct, "#94A3B8"],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Attendance Summary</h3>
      <div className="flex flex-col gap-2.5">
        {rows.map(([label, count, pct, color]) => (
          <div key={label} className="flex items-center gap-2 text-sm">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-ink-muted">{label}</span>
            <span className="ml-auto font-medium text-ink">{count} ({pct}%)</span>
          </div>
        ))}
      </div>
      <div className="mt-3 border-t border-surface-muted pt-3 text-sm font-semibold text-ink">
        Total Members: {summary.total}
      </div>
    </div>
  );
}

const TIPS = [
  "You can mark members as Present, Late or Absent.",
  "Check-in and check-out time helps track participation.",
  "Add notes for any special remarks if needed.",
];

export function EditAttendanceQuickTips() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
        <Lightbulb className="h-4 w-4 text-warning-500" /> Quick Tips
      </h3>
      <ul className="flex flex-col gap-2.5">
        {TIPS.map((tip, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-ink-muted">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-[10px] font-semibold text-interactive-600">{i + 1}</span>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
