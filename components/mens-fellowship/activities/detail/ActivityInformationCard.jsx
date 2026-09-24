"use client";

import { formatDateTime } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value ?? "—"}</p>
    </div>
  );
}

export function ActivityInformationCard({ info }) {
  if (!info) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Activity Information</h3>
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        <Row label="Reminder Sent" value={formatDateTime(info.reminderSentOn)} />
        <Row label="Reminder Sent By" value={info.reminderSentBy} />
        <Row label="Follow-up Sent" value={formatDateTime(info.followUpSentOn)} />
        <Row label="Follow-up Sent By" value={info.followUpSentBy} />
      </div>
    </div>
  );
}
