"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import { CALENDAR_DURATION_OPTIONS, CALENDAR_REMINDER_OPTIONS } from "@/lib/mock/prayerCalendarMockData";

const TIME_SLOTS = [
  { key: "Morning", range: "6:00 AM - 12:00 PM" },
  { key: "Afternoon", range: "12:00 PM - 6:00 PM" },
  { key: "Evening", range: "6:00 PM - 10:00 PM" },
  { key: "Night", range: "10:00 PM - 5:00 AM" },
];

export function TimeScheduleDetailsSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Time &amp; Schedule Details</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-sm font-medium text-ink">Time Slot <span className="text-danger-500">*</span></label>
          <div className="grid grid-cols-2 gap-2">
            {TIME_SLOTS.map((slot) => (
              <label key={slot.key} className="flex items-start gap-2 text-sm text-ink">
                <input type="radio" name="timeSlot" checked={form.timeSlot === slot.key} onChange={() => setField("timeSlot", slot.key)} className="mt-0.5 h-4 w-4 shrink-0 border-border text-success-600" />
                <span>{slot.key} <span className="block text-xs text-ink-subtle">({slot.range})</span></span>
              </label>
            ))}
          </div>
        </div>
        <Select label="Estimated Duration" value={form.estimatedDuration} onChange={(e) => setField("estimatedDuration", e.target.value)}>
          <option value="">Select duration</option>
          {CALENDAR_DURATION_OPTIONS.map((d) => <option key={d}>{d}</option>)}
        </Select>
        <div>
          <Select label="Reminder (Optional)" value={form.reminder} onChange={(e) => setField("reminder", e.target.value)}>
            <option value="">Select reminder</option>
            {CALENDAR_REMINDER_OPTIONS.map((r) => <option key={r}>{r}</option>)}
          </Select>
          <p className="mt-1.5 text-xs text-ink-subtle">You will be reminded before the event starts.</p>
        </div>
      </div>
    </div>
  );
}

export function AdditionalDetailsSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Additional Details</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="Organized By (Optional)" placeholder="Enter organizer / ministry name" value={form.organizedBy} onChange={(e) => setField("organizedBy", e.target.value)} />
        <Input label="Location / Venue (Optional)" placeholder="Enter location or venue" value={form.location} onChange={(e) => setField("location", e.target.value)} />
        <Textarea
          label="Notes (Optional)" rows={1} maxLength={200} placeholder="Add any additional notes"
          helperText={`${form.notes.length}/200`}
          value={form.notes} onChange={(e) => setField("notes", e.target.value)}
        />
      </div>
    </div>
  );
}
