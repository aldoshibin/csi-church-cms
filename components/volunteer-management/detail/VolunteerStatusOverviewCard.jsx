"use client";

import { CheckCircle2, Clock, CalendarCheck2, CalendarClock, XCircle } from "lucide-react";

function Row({ icon: Icon, label, children }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="flex items-center gap-2 text-ink-subtle"><Icon className="h-4 w-4" /> {label}</span>
      <span className="font-medium text-ink">{children}</span>
    </div>
  );
}

export function VolunteerStatusOverviewCard({ volunteer }) {
  const summary = volunteer.serviceSummary ?? {};
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Status Overview</h3>
      <div className="flex flex-col gap-3">
        <Row icon={CheckCircle2} label="Status">{volunteer.status}</Row>
        <Row icon={Clock} label="Total Service Hours">{volunteer.totalServiceHours} hrs</Row>
        <Row icon={CalendarCheck2} label="Completed Assignments">{summary.completed ?? 0}</Row>
        <Row icon={CalendarClock} label="Upcoming Assignments">{summary.upcoming ?? 0}</Row>
        <Row icon={XCircle} label="Cancelled Assignments">{summary.cancelled ?? 0}</Row>
      </div>
    </div>
  );
}
