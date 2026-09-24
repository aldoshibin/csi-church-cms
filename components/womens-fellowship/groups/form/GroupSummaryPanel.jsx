"use client";

import { Info } from "lucide-react";

export function GroupSummaryPanel({ form, memberCount }) {
  const dash = (v) => (v ? v : "-");
  const rows = [
    ["Group Name", dash(form.groupName)],
    ["Leader", dash(form.leader)],
    ["Co-Leader", dash(form.coLeader)],
    ["Members", memberCount > 0 ? memberCount : "-"],
    ["Meeting Day & Time", form.meetingDay && form.meetingTime ? `${form.meetingDay}, ${form.meetingTime}` : "-"],
    ["Location", dash(form.meetingLocation)],
    ["Ministry Focus", dash(form.ministryFocus)],
    ["Status", dash(form.status)],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Group Summary</h3>
      <div className="flex flex-col gap-2">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span className="text-ink-subtle">{label}</span>
            <span className="text-right font-medium text-ink">{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2.5 rounded-lg bg-interactive-50 p-3 text-xs text-interactive-700">
        <Info className="h-4 w-4 shrink-0" />
        Group will be created after saving.
      </div>
    </div>
  );
}
