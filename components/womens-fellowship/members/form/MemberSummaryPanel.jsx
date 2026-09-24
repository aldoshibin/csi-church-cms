"use client";

import { Users, Info } from "lucide-react";

export function MemberSummaryPanel({ form }) {
  const dash = (v) => (v ? v : "-");
  const rows = [
    ["Full Name", dash(form.fullName)],
    ["Fellowship Group", dash(form.fellowshipGroup)],
    ["Phone Number", dash(form.phone)],
    ["Member Status", dash(form.memberStatus)],
    ["Date of Joining", dash(form.dateOfJoining)],
    ["Ministry Focus", dash(form.ministryFocus)],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Member Summary</h3>
      <div className="flex items-center gap-3 border-b border-surface-muted pb-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-success-50">
          <Users className="h-6 w-6 text-success-600" />
        </span>
        <div className="flex-1">
          {rows.slice(0, 1).map(([label, value]) => (
            <p key={label} className="text-sm font-semibold text-ink">{value}</p>
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {rows.slice(1).map(([label, value]) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span className="text-ink-subtle">{label}</span>
            <span className="text-right font-medium text-ink">{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2.5 rounded-lg bg-interactive-50 p-3 text-xs text-interactive-700">
        <Info className="h-4 w-4 shrink-0" />
        Member will be added after saving.
      </div>
    </div>
  );
}
