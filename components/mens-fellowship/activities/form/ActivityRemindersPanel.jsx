"use client";

import { Plus, Trash2 } from "lucide-react";
import { REMINDER_OFFSET_OPTIONS } from "@/lib/mock/meetingsMockData";

export function ActivityRemindersPanel({ reminders, onAdd, onUpdate, onRemove }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Reminders</h3>
      <p className="mb-3 text-xs text-ink-subtle">Add reminders for this activity.</p>
      <div className="flex flex-col gap-4">
        {reminders.map((r, i) => (
          <div key={r.id}>
            <label className="mb-1.5 block text-sm font-medium text-ink">Reminder {i + 1}</label>
            <div className="flex items-center gap-2">
              <select
                value={r.offset} onChange={(e) => onUpdate(r.id, { offset: e.target.value })}
                className="h-10 flex-1 rounded-md border border-border bg-white px-3 text-sm text-ink"
              >
                {REMINDER_OFFSET_OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </select>
              <input
                type="time" value={to24h(r.time)} onChange={(e) => onUpdate(r.id, { time: from24h(e.target.value) })}
                className="h-10 w-32 rounded-md border border-border bg-white px-3 text-sm text-ink"
              />
              <button type="button" onClick={() => onRemove(r.id)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-danger-500 hover:bg-danger-50" aria-label="Remove reminder">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button type="button" onClick={onAdd} className="mt-4 flex items-center gap-2 text-sm font-medium text-success-600 hover:underline">
        <Plus className="h-4 w-4" /> Add Reminder
      </button>
    </div>
  );
}

function to24h(time12) {
  const match = /^(\d{1,2}):(\d{2})\s?(AM|PM)$/i.exec(time12?.trim() ?? "");
  if (!match) return "09:00";
  let [, h, m, period] = match;
  h = parseInt(h, 10);
  if (period.toUpperCase() === "PM" && h !== 12) h += 12;
  if (period.toUpperCase() === "AM" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${m}`;
}

function from24h(time24) {
  if (!time24) return "";
  let [h, m] = time24.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")} ${period}`;
}
