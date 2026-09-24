"use client";

import { Heart, BookOpen, Users, Cross, HandHeart, Star } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { EVT_TYPE_OPTIONS } from "@/lib/mock/fellowshipEventsMockData";
import { formatDate } from "@/lib/utils";

const ICON_MAP = { heart: Heart, book: BookOpen, users: Users, cross: Cross, handHeart: HandHeart, star: Star };

export function EventTypePanel({ value, onChange }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Event Type</h3>
      <p className="mb-3 text-xs text-ink-subtle">Select the type of event.</p>
      <div className="flex flex-col gap-2.5">
        {EVT_TYPE_OPTIONS.map((option) => {
          const Icon = ICON_MAP[option.icon] ?? Heart;
          const selected = value === option.value;
          return (
            <label
              key={option.value}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border p-2.5 transition-colors ${selected ? "border-interactive-400 bg-interactive-50" : "border-border hover:bg-surface-canvas"}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${option.color}1A` }}>
                <Icon className="h-4 w-4" style={{ color: option.color }} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-ink">{option.label}</p>
                <p className="truncate text-xs text-ink-subtle">{option.desc}</p>
              </div>
              <input type="radio" name="event-type" className="h-4 w-4 accent-interactive-500" checked={selected} onChange={() => onChange(option.value)} />
            </label>
          );
        })}
      </div>
    </div>
  );
}

export function EventReminderPanel({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Reminder</h3>
      <p className="mb-3 text-xs text-ink-subtle">Send reminders to members about this event.</p>
      <div className="flex flex-col gap-2.5">
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.sendEmailReminder} onChange={(e) => setField("sendEmailReminder", e.target.checked)} />
          Send Email Reminder
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.sendSmsReminder} onChange={(e) => setField("sendSmsReminder", e.target.checked)} />
          Send SMS Reminder
        </label>
      </div>
      <div className="mt-3">
        <Input label="Reminder Date" type="date" value={form.reminderDate} onChange={(e) => setField("reminderDate", e.target.value)} />
      </div>
    </div>
  );
}

export function EventPreviewPanel({ form }) {
  const typeOption = EVT_TYPE_OPTIONS.find((t) => t.value === form.eventType);
  const Icon = ICON_MAP[typeOption?.icon] ?? Heart;

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Preview</h3>
      <p className="mb-3 text-xs text-ink-subtle">Event will appear like this in the event list.</p>
      <div className="flex items-start gap-3 rounded-lg border border-border p-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${typeOption?.color ?? "#94A3B8"}1A` }}>
          <Icon className="h-5 w-5" style={{ color: typeOption?.color ?? "#94A3B8" }} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{form.title || "Event Title"}</p>
          {form.eventType && <span className="mt-1 inline-flex rounded-sm bg-[#FCE7F3] px-2 py-0.5 text-xs font-medium text-[#DB2777]">{form.eventType}</span>}
          <p className="mt-1.5 text-xs text-ink-subtle">
            {form.date ? formatDate(form.date) : "Select date"}{form.startTime ? ` • ${form.startTime}${form.endTime ? ` - ${form.endTime}` : ""}` : ""}
          </p>
          <p className="text-xs text-ink-subtle">{form.venue || "Select venue"}</p>
        </div>
      </div>
    </div>
  );
}
