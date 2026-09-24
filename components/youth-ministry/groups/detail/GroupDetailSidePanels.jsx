"use client";

import Link from "next/link";
import { Mail, Phone, Clock, MapPin, FileText, Users, UserCheck, ClipboardList, Calendar, PartyPopper } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export function GroupLeadersPanel({ leaders = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Group Leaders</h3>
        <Link href="/youth-ministry/youth-groups" className="text-xs font-medium text-interactive-500 hover:underline">Manage Leaders</Link>
      </div>
      <div className="flex flex-col gap-4">
        {leaders.map((l) => (
          <div key={l.name} className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-sm font-semibold text-interactive-600">{l.initials}</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-semibold text-ink">{l.name}</p>
                <Badge variant={l.role === "Primary Leader" ? "success" : "info"} className="shrink-0">{l.role}</Badge>
              </div>
              <p className="mt-1 flex items-center gap-1.5 truncate text-xs text-ink-subtle"><Mail className="h-3 w-3 shrink-0" /> {l.email}</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-subtle"><Phone className="h-3 w-3 shrink-0" /> {l.phone}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 border-t border-surface-muted pt-3 text-sm font-medium text-ink">
        Total Leaders: {leaders.length}
      </div>
    </div>
  );
}

export function UpcomingMeetingPanel({ meeting }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Meeting</h3>
        <Link href="/youth-ministry/youth-groups" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex items-start gap-3">
        <div className="flex w-12 shrink-0 flex-col items-center justify-center rounded-lg border border-border py-1.5 text-center">
          <span className="text-[10px] font-semibold uppercase text-danger-600">{meeting.month}</span>
          <span className="text-sm font-bold text-ink">{meeting.day}</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-semibold text-ink">{meeting.title}</p>
            <Badge variant="success" className="shrink-0">{meeting.badge}</Badge>
          </div>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-subtle"><Clock className="h-3 w-3" /> {meeting.time}</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-subtle"><MapPin className="h-3 w-3" /> {meeting.location}</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-subtle"><FileText className="h-3 w-3" /> {meeting.linkedActivity}</p>
        </div>
      </div>
    </div>
  );
}

export function GroupStatisticsPanel({ stats }) {
  const rows = [
    ["Total Members", stats.totalMembers, Users, "bg-interactive-50", "text-interactive-600"],
    ["Active Members", stats.activeMembers, UserCheck, "bg-[#F3E8FF]", "text-[#7C3AED]"],
    ["Average Attendance", `${stats.averageAttendance}%`, ClipboardList, "bg-[#FCE7F3]", "text-[#DB2777]"],
    ["Total Meetings (This Year)", stats.totalMeetingsThisYear, Calendar, "bg-warning-50", "text-warning-600"],
    ["Activities (This Year)", stats.activitiesThisYear, PartyPopper, "bg-danger-50", "text-danger-600"],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Group Statistics</h3>
      <div className="flex flex-col gap-3">
        {rows.map(([label, value, Icon, bg, color]) => (
          <div key={label} className="flex items-center gap-3">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${bg}`}>
              <Icon className={`h-4 w-4 ${color}`} />
            </span>
            <span className="flex-1 text-sm text-ink-muted">{label}</span>
            <span className="text-sm font-semibold text-ink">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
