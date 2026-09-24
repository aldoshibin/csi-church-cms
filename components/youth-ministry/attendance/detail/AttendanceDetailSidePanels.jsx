"use client";

import { Calendar, MapPin, User, Tag, Clock, CheckCircle2, Upload, Send, Download, Pencil } from "lucide-react";
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

export function EventDetailsCard({ event }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Event Details</h3>
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

const QUICK_ACTIONS = [
  { icon: CheckCircle2, title: "Mark Attendance", desc: "Manually mark attendance for members" },
  { icon: Upload, title: "Import Attendance", desc: "Import attendance from CSV file" },
  { icon: Send, title: "Send Attendance Summary", desc: "Email attendance summary to leaders" },
  { icon: Download, title: "Download Attendance Report", desc: "Download detailed attendance report" },
];

export function AttendanceDetailQuickActions() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="flex flex-col divide-y divide-surface-muted">
        {QUICK_ACTIONS.map((action) => (
          <button key={action.title} type="button" className="flex items-start gap-3 py-3 text-left first:pt-0 last:pb-0 hover:opacity-80">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-interactive-50 text-interactive-600">
              <action.icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-ink">{action.title}</p>
              <p className="text-xs text-ink-subtle">{action.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export function AttendanceNotesCard({ notes }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Notes</h3>
        <button type="button" className="text-ink-subtle hover:text-ink" aria-label="Edit notes">
          <Pencil className="h-3.5 w-3.5" />
        </button>
      </div>
      <p className="text-sm leading-relaxed text-ink-muted">{notes}</p>
    </div>
  );
}
