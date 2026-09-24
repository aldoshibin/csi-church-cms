"use client";

import { CalendarDays, Clock, MapPin, Users2, Info } from "lucide-react";
import { formatDate } from "@/lib/utils";

function Row({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-interactive-500" />
      <div>
        <p className="text-xs text-ink-subtle">{label}</p>
        <p className="text-sm font-medium text-ink">{value ?? "—"}</p>
      </div>
    </div>
  );
}

export function BulletinEventDetailsCard({ request }) {
  if (!request.eventDate) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Event Details</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Row icon={CalendarDays} label="Event Date" value={`${formatDate(request.eventDate)}${request.eventDay ? ` (${request.eventDay})` : ""}`} />
        <Row icon={Clock} label="Time" value={request.eventTime} />
        <Row icon={MapPin} label="Location / Venue" value={request.location} />
        <Row icon={Users2} label="Organized By" value={request.organizedBy} />
        <div className="sm:col-span-2">
          <Row icon={Info} label="Additional Notes" value={request.additionalNotes} />
        </div>
      </div>
    </div>
  );
}
