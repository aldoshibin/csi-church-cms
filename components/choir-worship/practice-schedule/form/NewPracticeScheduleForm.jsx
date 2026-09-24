"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import { PRACTICE_TYPE_OPTIONS, PS_TEAM_OPTIONS, REPEAT_OPTIONS } from "@/lib/mock/practiceScheduleMockData";

export function NewPracticeScheduleForm({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Practice Details</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="Practice Title" required placeholder="Enter practice title" value={form.title} onChange={(e) => setField("title", e.target.value)} />
        <Select label="Practice Type" required value={form.practiceType} onChange={(e) => setField("practiceType", e.target.value)}>
          <option value="">Select practice type</option>
          {PRACTICE_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
        <Select label="Team" required value={form.team} onChange={(e) => setField("team", e.target.value)}>
          <option value="">Select team</option>
          {PS_TEAM_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>

        <Input label="Practice Date" required type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} />
        <Input label="Start Time" required type="time" disabled={form.allDay} value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <Input label="End Time" required type="time" disabled={form.allDay} value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />
          </div>
          <label className="mb-2.5 flex shrink-0 items-center gap-2">
            <span className="text-xs font-medium text-ink-muted">All Day</span>
            <button
              type="button" role="switch" aria-checked={form.allDay}
              onClick={() => setField("allDay", !form.allDay)}
              className={`relative h-6 w-11 rounded-full transition-colors ${form.allDay ? "bg-success-500" : "bg-surface-muted"}`}
            >
              <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${form.allDay ? "translate-x-[22px]" : "translate-x-0.5"}`} />
            </button>
          </label>
        </div>

        <Select label="Repeat" value={form.repeat} onChange={(e) => setField("repeat", e.target.value)}>
          {REPEAT_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </Select>
        <Input label="Repeat Until" type="date" disabled={form.repeat === "Does not repeat"} value={form.repeatUntil} onChange={(e) => setField("repeatUntil", e.target.value)} />
        <Input label="Location / Venue" required placeholder="Enter location or venue" value={form.location} onChange={(e) => setField("location", e.target.value)} />

        <div className="sm:col-span-3">
          <Textarea
            label="Description / Notes" rows={3} maxLength={300} placeholder="Enter description or notes (optional)"
            helperText={`${form.notes.length} / 300`}
            value={form.notes} onChange={(e) => setField("notes", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
