"use client";

import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MEETING_STATUS_VARIANT } from "@/lib/mock/meetingsMockData";
import { formatDate, formatDateTime } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value ?? "—"}</p>
    </div>
  );
}

export function MeetingDetailsPanel({ meeting }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success-600">
          <CalendarDays className="h-6 w-6" />
        </span>
        <h3 className="text-base font-semibold text-ink">Meeting Details</h3>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <Row label="Meeting Type" value={meeting.type} />
        <Row label="Meeting Title" value={meeting.title} />
        <Row label="Speaker" value={meeting.speaker} />
        <Row label="Description" value={meeting.description} />
        <Row label="Date" value={meeting.date ? `${formatDate(meeting.date)}${meeting.day ? ` (${meeting.day})` : ""}` : "—"} />
        <Row label="Created By" value={meeting.createdBy} />
        <Row label="Time" value={meeting.timeRange} />
        <Row label="Created On" value={formatDateTime(meeting.createdOn)} />
        <Row label="Location" value={meeting.location} />
        <Row label="Last Updated" value={formatDateTime(meeting.lastUpdated)} />
        <div>
          <p className="text-xs text-ink-subtle">Status</p>
          <div className="mt-1"><Badge variant={MEETING_STATUS_VARIANT[meeting.status] ?? "default"}>{meeting.status}</Badge></div>
        </div>
      </div>
    </div>
  );
}
