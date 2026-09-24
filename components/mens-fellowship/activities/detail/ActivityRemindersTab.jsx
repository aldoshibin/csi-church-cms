"use client";

import { Bell } from "lucide-react";
import { formatDateTime } from "@/lib/utils";

export function ActivityRemindersTab({ info }) {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold text-ink">Reminders</h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3 rounded-lg border border-border p-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
            <Bell className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-medium text-ink">Reminder sent</p>
            <p className="text-xs text-ink-subtle">{formatDateTime(info?.reminderSentOn)} · by {info?.reminderSentBy ?? "—"}</p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-border p-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success-50 text-success-600">
            <Bell className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-medium text-ink">Follow-up sent</p>
            <p className="text-xs text-ink-subtle">{formatDateTime(info?.followUpSentOn)} · by {info?.followUpSentBy ?? "—"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
