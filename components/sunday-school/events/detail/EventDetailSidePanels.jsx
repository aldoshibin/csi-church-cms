"use client";

import { Calendar, MapPin, Users, FileText, ExternalLink, Printer, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { EVENT_STATUS_VARIANT } from "@/lib/mock/eventsMockData";
import { formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 text-sm">
      <span className="shrink-0 text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

export function EventQuickInfoPanel({ event }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <Calendar className="h-4 w-4" /> Event Quick Info
      </h3>
      <div className="mt-2 flex flex-col divide-y divide-surface-muted">
        <Row label="Event Title" value={event.title} />
        <Row label="Category" value={<Badge variant="info">{event.category}</Badge>} />
        <Row label="Date & Time" value={<>{formatDate(event.date)}<br />{event.time}</>} />
        <Row label="Venue" value={event.venue} />
        <Row label="Status" value={<Badge variant={EVENT_STATUS_VARIANT[event.status] ?? "default"}>{event.status}</Badge>} />
        <Row label="Registrations" value={`${event.registered} / ${event.capacity}`} />
      </div>
    </div>
  );
}

export function EventVenuePanel({ event }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <MapPin className="h-4 w-4" /> Event Venue
      </h3>
      <p className="text-sm font-semibold text-ink">{event.venue}</p>
      <p className="mt-1 text-sm text-ink-muted">{event.venueAddress}</p>
      <button type="button" className="mt-2 flex items-center gap-1.5 text-sm font-medium text-interactive-500 hover:underline">
        Get Directions <ExternalLink className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

export function EventRegistrationPanel({ event, onViewRegistrations }) {
  const pct = event.capacity ? Math.min((event.registered / event.capacity) * 100, 100) : 0;
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-accent-700">
          <Users className="h-4 w-4" /> Registration
        </h3>
        <span className="text-xs font-medium text-ink-subtle">{event.registered} / {event.capacity} Registered</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-surface-muted">
        <div className="h-full rounded-full bg-success-500" style={{ width: `${pct}%` }} />
      </div>
      <button
        type="button" onClick={onViewRegistrations}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-border py-2 text-sm font-medium text-ink-muted hover:bg-surface-canvas"
      >
        <Users className="h-4 w-4" /> View Registrations
      </button>
    </div>
  );
}

export function EventRelatedActionsPanel({ onViewReport, onPrint }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <FileText className="h-4 w-4" /> Related Actions
      </h3>
      <div className="grid grid-cols-2 gap-2.5">
        <button type="button" onClick={onViewReport} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-left text-xs font-medium text-ink-muted hover:bg-surface-canvas">
          <BarChart3 className="h-4 w-4 shrink-0" /> View Report
        </button>
        <button type="button" onClick={onPrint} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-left text-xs font-medium text-ink-muted hover:bg-surface-canvas">
          <Printer className="h-4 w-4 shrink-0" /> Print Details
        </button>
      </div>
    </div>
  );
}
