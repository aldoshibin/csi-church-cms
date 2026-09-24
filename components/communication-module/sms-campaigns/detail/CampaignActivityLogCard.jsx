"use client";

import { CheckCircle2 } from "lucide-react";

export function CampaignActivityLogCard({ activityLog = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Activity Log</h3>
      <div className="flex flex-col gap-4">
        {activityLog.map((entry, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success-500" />
            <div className="min-w-0">
              <p className="text-sm font-medium text-ink">{entry.action}</p>
              <p className="text-xs text-ink-subtle">
                {new Date(entry.dateTime).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" })}
                {entry.by ? ` by ${entry.by}` : ""}
              </p>
              {entry.details && <p className="mt-0.5 text-xs text-ink-muted">{entry.details}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
