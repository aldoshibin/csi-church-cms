"use client";

import { Church, Users2, Calendar, Clock, Circle } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { ATTENDANCE_STATUS_VARIANT } from "@/lib/mock/vmAttendanceMockData";

const STATUS_DOT = { Present: "text-success-500", Absent: "text-danger-500", Late: "text-warning-500", "Not Marked": "text-ink-subtle" };

function InfoTile({ icon: Icon, label, children }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-3">
      <Icon className="h-4 w-4 shrink-0 text-ink-subtle" />
      <div className="min-w-0">
        <p className="text-[11px] text-ink-subtle">{label}</p>
        <p className="truncate text-sm font-medium text-ink">{children}</p>
      </div>
    </div>
  );
}

export function AttendanceInfoRow({ record }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      <InfoTile icon={Church} label="Service / Event">{record.service}</InfoTile>
      <InfoTile icon={Users2} label="Ministry / Team">{record.ministry}</InfoTile>
      <InfoTile icon={Calendar} label="Date">{formatDate(record.date)} ({new Date(record.date).toLocaleDateString("en-US", { weekday: "long" })})</InfoTile>
      <InfoTile icon={Clock} label="Check-in Time">{record.checkInTime ?? "–"}</InfoTile>
      <InfoTile icon={Circle} label="Status">
        <span className={STATUS_DOT[record.status]}>{record.status}</span>
      </InfoTile>
    </div>
  );
}
