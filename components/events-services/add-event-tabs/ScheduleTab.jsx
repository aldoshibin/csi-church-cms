"use client";

import { Plus, X } from "lucide-react";

export function ScheduleTab() {
  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Schedule Segments</p>
          <button type="button" className="flex items-center gap-1 text-sm font-medium text-interactive-500 hover:underline">
            <Plus className="h-3.5 w-3.5" /> Add Segment
          </button>
        </div>

        <div className="space-y-2">
          {["Welcome & Worship", "Main Session", "Closing Prayer"].map((segment, index) => (
            <div key={segment} className="flex items-center gap-3 rounded-md border border-border p-3">
              <input
                type="text"
                defaultValue={segment}
                className="h-9 flex-1 rounded-md border border-border px-3 text-sm text-ink"
              />
              <input type="text" placeholder="Start" defaultValue={index === 0 ? "06:00 PM" : ""} className="h-9 w-24 rounded-md border border-border px-2 text-sm text-ink placeholder:text-ink-subtle" />
              <input type="text" placeholder="End" className="h-9 w-24 rounded-md border border-border px-2 text-sm text-ink placeholder:text-ink-subtle" />
              <button type="button" className="text-ink-subtle hover:text-danger-500" aria-label="Remove segment">
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-ink">Reminders</p>
        <div className="space-y-2">
          {["1 day before", "1 hour before"].map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm text-ink">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500"
              />
              Send reminder {option}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
