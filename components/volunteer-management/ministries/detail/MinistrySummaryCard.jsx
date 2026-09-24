"use client";

import { Users2, CheckCircle2, UsersRound, ClipboardList, CalendarClock } from "lucide-react";

function Row({ icon: Icon, label, children }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="flex items-center gap-2 text-ink-subtle"><Icon className="h-4 w-4" /> {label}</span>
      <span className="font-medium text-ink">{children}</span>
    </div>
  );
}

export function MinistrySummaryCard({ ministry }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Ministry Summary</h3>
      <div className="flex flex-col gap-3">
        <Row icon={Users2} label="Total Volunteers">{ministry.totalVolunteers}</Row>
        <Row icon={CheckCircle2} label="Active Volunteers">{ministry.activeVolunteers}</Row>
        <Row icon={UsersRound} label="Total Teams">{ministry.totalTeams}</Row>
        <Row icon={CalendarClock} label="This Month's Assignments">{ministry.thisMonthAssignments}</Row>
        <Row icon={ClipboardList} label="Total Assignments">{ministry.totalAssignments}</Row>
      </div>
    </div>
  );
}
