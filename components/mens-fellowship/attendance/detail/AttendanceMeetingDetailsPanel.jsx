"use client";

import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ATTENDANCE_LIST_STATUS_VARIANT } from "@/lib/mock/meetingAttendanceMockData";
import { formatDate, formatDateTime } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value ?? "—"}</p>
    </div>
  );
}

export function AttendanceMeetingDetailsPanel({ record }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success-600">
          <CalendarDays className="h-6 w-6" />
        </span>
        <h3 className="text-base font-semibold text-ink">Meeting Details</h3>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <Row label="Meeting Type" value={record.type} />
        <Row label="Expected Members" value={record.expected} />
        <Row label="Created By" value={record.createdBy} />
        <Row label="Date & Time" value={record.date ? `${formatDate(record.date)} (${record.day}) · ${record.timeRange}` : "—"} />
        <Row label="Total Present" value={record.present} />
        <Row label="Created On" value={formatDateTime(record.createdOn)} />
        <Row label="Venue" value={record.venue} />
        <Row label="Attendance Percentage" value={`${record.attendanceRate.toFixed ? record.attendanceRate.toFixed(1) : record.attendanceRate}%`} />
        <Row label="Last Updated" value={formatDateTime(record.lastUpdated)} />
        <Row label="Conducted By" value={record.conductedBy} />
        <div>
          <p className="text-xs text-ink-subtle">Status</p>
          <div className="mt-1"><Badge variant={ATTENDANCE_LIST_STATUS_VARIANT[record.status] ?? "default"}>{record.status}</Badge></div>
        </div>
      </div>
    </div>
  );
}
