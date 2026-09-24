"use client";

import { Badge } from "@/components/ui/Badge";
import { ATTENDANCE_STATUS_VARIANT } from "@/lib/mock/vmAttendanceMockData";

function Row({ label, children }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{children}</span>
    </div>
  );
}

export function AttendanceOverviewCard({ record }) {
  return (
    <div className="flex flex-col gap-3">
      <Row label="Status"><Badge variant={ATTENDANCE_STATUS_VARIANT[record.status] ?? "default"}>{record.status}</Badge></Row>
      <Row label="Check-in Time">{record.checkInTime ?? "–"}</Row>
      <Row label="Check-out Time">{record.checkOutTime ?? "–"}</Row>
      <Row label="Total Duration">{record.totalDuration ?? "–"}</Row>
      <Row label="Marked By">{record.markedBy}</Row>
      <Row label="Marked On">
        {new Date(record.markedOn).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" })}
      </Row>
    </div>
  );
}
