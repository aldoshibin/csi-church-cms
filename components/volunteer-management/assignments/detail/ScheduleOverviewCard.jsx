"use client";

import { CalendarDays, Clock, MapPin, Users2 } from "lucide-react";
import { formatDate } from "@/lib/utils";

function Row({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2.5 text-sm text-ink">
      <Icon className="h-4 w-4 shrink-0 text-ink-subtle" /> {children}
    </div>
  );
}

export function ScheduleOverviewCard({ assignment }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Schedule Overview</h3>
      <div className="flex flex-col gap-3">
        <Row icon={CalendarDays}>{formatDate(assignment.date)} ({assignment.dayLabel})</Row>
        <Row icon={Clock}>{assignment.startTime} - {assignment.endTime}</Row>
        <Row icon={MapPin}>{assignment.location}</Row>
        <Row icon={Users2}>{assignment.volunteersCount} Volunteers Assigned</Row>
      </div>
    </div>
  );
}
