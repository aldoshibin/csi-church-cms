"use client";

import { Input, Select } from "@/components/ui/Input";
import { CALENDAR_REPEAT_OPTIONS } from "@/lib/mock/prayerCalendarMockData";

const DAY_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function DateTimeSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Date &amp; Time</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input label="Start Date" required type="date" value={form.startDate} onChange={(e) => setField("startDate", e.target.value)} />
        <Input label="Start Time" required type="time" disabled={form.allDay} value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
        <Input label="End Date" required type="date" value={form.endDate} onChange={(e) => setField("endDate", e.target.value)} />
        <Input label="End Time" required type="time" disabled={form.allDay} value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />
      </div>
      <label className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
        <input type="checkbox" checked={form.allDay} onChange={(e) => setField("allDay", e.target.checked)} className="h-4 w-4 rounded border-border text-interactive-500" />
        All Day Event
      </label>
    </div>
  );
}

export function RecurrenceSection({ form, setField, toggleRepeatDay }) {
  const disabled = form.repeat === "Does not repeat";
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Recurrence (Optional)</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Select label="Repeat" value={form.repeat} onChange={(e) => setField("repeat", e.target.value)}>
            {CALENDAR_REPEAT_OPTIONS.map((r) => <option key={r}>{r}</option>)}
          </Select>
          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-medium text-ink">Repeat Every</label>
            <div className="flex gap-2">
              <input
                type="number" min={1} disabled={disabled} value={form.repeatEvery}
                onChange={(e) => setField("repeatEvery", Number(e.target.value))}
                className="h-10 w-20 rounded-md border border-border bg-white px-3 text-sm text-ink disabled:bg-surface-muted disabled:text-ink-subtle"
              />
              <select
                disabled={disabled} value={form.repeatEveryUnit} onChange={(e) => setField("repeatEveryUnit", e.target.value)}
                className="h-10 flex-1 rounded-md border border-border bg-white px-3 text-sm text-ink disabled:bg-surface-muted disabled:text-ink-subtle"
              >
                <option>Day(s)</option>
                <option>Week(s)</option>
                <option>Month(s)</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Repeat On</label>
          <div className="flex flex-wrap gap-3">
            {DAY_SHORT.map((day) => (
              <label key={day} className="flex items-center gap-1.5 text-sm text-ink">
                <input
                  type="checkbox" disabled={disabled} checked={form.repeatOnDays.includes(day)} onChange={() => toggleRepeatDay(day)}
                  className="h-4 w-4 rounded border-border text-success-600 focus-visible:ring-success-500 disabled:opacity-50"
                />
                {day}
              </label>
            ))}
          </div>

          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-medium text-ink">Ends</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm text-ink">
                <input type="radio" name="ends" disabled={disabled} checked={form.ends === "Never"} onChange={() => setField("ends", "Never")} className="h-4 w-4 border-border text-success-600" />
                Never
              </label>
              <label className="flex items-center gap-2 text-sm text-ink">
                <input type="radio" name="ends" disabled={disabled} checked={form.ends === "On"} onChange={() => setField("ends", "On")} className="h-4 w-4 border-border text-success-600" />
                On
                <input type="date" disabled={disabled || form.ends !== "On"} value={form.endsOnDate} onChange={(e) => setField("endsOnDate", e.target.value)} className="h-8 rounded-md border border-border bg-white px-2 text-sm text-ink disabled:bg-surface-muted" />
              </label>
              <label className="flex items-center gap-2 text-sm text-ink">
                <input type="radio" name="ends" disabled={disabled} checked={form.ends === "After"} onChange={() => setField("ends", "After")} className="h-4 w-4 border-border text-success-600" />
                After
                <input type="number" min={1} disabled={disabled || form.ends !== "After"} value={form.endsAfterOccurrences} onChange={(e) => setField("endsAfterOccurrences", Number(e.target.value))} className="h-8 w-16 rounded-md border border-border bg-white px-2 text-sm text-ink disabled:bg-surface-muted" />
                occurrences
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
