"use client";

import { UsersRound } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Badge } from "@/components/ui/Badge";
import { MFG_STATUS_VARIANT } from "@/lib/mock/mensFellowshipGroupsMockData";
import { formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 py-1.5 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

export function GroupDetailsCard({ group }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Group Details</h3>
      <div className="flex flex-col gap-5 sm:flex-row">
        <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-success-50">
          <UsersRound className="h-9 w-9 text-success-600" />
        </span>
        <div className="grid flex-1 grid-cols-1 gap-x-8 sm:grid-cols-2">
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Group Name" value={group.name} />
            <Row label="Leader" value={group.leader} />
            <Row label="Co-Leader" value={group.coLeader ?? "—"} />
            <Row label="Focus Area" value={(group.focusArea ?? []).map((f) => <Badge key={f} variant="success" className="ml-1">{f}</Badge>)} />
          </div>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Group ID" value={group.groupId ?? group.id} />
            <Row label="Established On" value={formatDate(group.establishedOn)} />
            <Row label="Meeting Day" value={group.meetingDay} />
            <Row label="Meeting Time" value={group.meetingTime} />
            <Row label="Location" value={group.location} />
            <Row label="Status" value={<Badge variant={MFG_STATUS_VARIANT[group.status] ?? "default"}>{group.status}</Badge>} />
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-surface-muted pt-4">
        <p className="mb-1 text-sm text-ink-subtle">Description</p>
        <p className="text-sm leading-relaxed text-ink-muted">{group.description}</p>
      </div>
    </div>
  );
}

export function GroupAttendanceOverviewCard({ attendance, averageRate, totalMeetings }) {
  const data = [
    { label: "Present", value: attendance.presentCount, color: "#16A34A" },
    { label: "Absent", value: attendance.absentCount, color: "#F59E0B" },
    { label: "Not Meeting", value: attendance.notMeetingCount, color: "#94A3B8" },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Attendance Overview</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View Report</button>
      </div>
      <div className="relative mx-auto h-[170px] w-[170px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="label" innerRadius={55} outerRadius={82} paddingAngle={2} strokeWidth={0}>
              {data.map((entry) => <Cell key={entry.label} fill={entry.color} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-display text-xl font-bold text-ink">{attendance.present}%</p>
          <p className="text-xs text-ink-subtle">Avg. Attendance</p>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm"><span className="h-2.5 w-2.5 rounded-full bg-success-500" />Present<span className="ml-auto font-medium text-ink">{attendance.present}% ({attendance.presentCount})</span></div>
        <div className="flex items-center gap-2 text-sm"><span className="h-2.5 w-2.5 rounded-full bg-warning-500" />Absent<span className="ml-auto font-medium text-ink">{attendance.absent}% ({attendance.absentCount})</span></div>
        <div className="flex items-center gap-2 text-sm"><span className="h-2.5 w-2.5 rounded-full bg-surface-muted" />Not Meeting<span className="ml-auto font-medium text-ink">{attendance.notMeeting}% ({attendance.notMeetingCount})</span></div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-surface-muted pt-4 text-center">
        <div>
          <p className="text-xs text-ink-subtle">Average Attendance Rate</p>
          <p className="mt-1 font-display text-xl font-bold text-success-600">{averageRate}%</p>
        </div>
        <div>
          <p className="text-xs text-ink-subtle">Total Meetings</p>
          <p className="mt-1 font-display text-xl font-bold text-ink">{totalMeetings}</p>
        </div>
      </div>
    </div>
  );
}
