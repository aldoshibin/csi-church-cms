"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import { INTERCESSOR_MINISTRY_OPTIONS, INTERCESSOR_ROLE_OPTIONS, INTERCESSOR_DAY_OPTIONS } from "@/lib/mock/intercessorsMockData";

export function IntercessorMinistryInfoSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Ministry Information</h3>
      <div className="flex flex-col gap-5">
        <Select label="Ministry / Group" required value={form.ministry} onChange={(e) => setField("ministry", e.target.value)}>
          <option value="">Select ministry / group</option>
          {INTERCESSOR_MINISTRY_OPTIONS.map((m) => <option key={m}>{m}</option>)}
        </Select>
        <Select label="Role" required value={form.role} onChange={(e) => setField("role", e.target.value)}>
          {INTERCESSOR_ROLE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </Select>
        <Input label="Member Since" required type="date" value={form.memberSince} onChange={(e) => setField("memberSince", e.target.value)} />
      </div>
    </div>
  );
}

const TIME_SLOTS = [
  { key: "Morning", range: "6:00 AM - 12:00 PM" },
  { key: "Afternoon", range: "12:00 PM - 6:00 PM" },
  { key: "Evening", range: "6:00 PM - 10:00 PM" },
  { key: "Night", range: "10:00 PM - 5:00 AM" },
];

export function IntercessorAvailabilitySection({ form, setField, toggleListField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Availability</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Preferred Time <span className="text-danger-500">*</span></label>
          <div className="flex flex-col gap-2">
            {TIME_SLOTS.map((slot) => (
              <label key={slot.key} className="flex items-center gap-2 text-sm text-ink">
                <input
                  type="checkbox" checked={form.preferredTimes.includes(slot.key)} onChange={() => toggleListField("preferredTimes", slot.key)}
                  className="h-4 w-4 rounded border-border text-success-600 focus-visible:ring-success-500"
                />
                {slot.key} <span className="text-ink-subtle">({slot.range})</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Days Available <span className="text-danger-500">*</span></label>
          <div className="flex flex-wrap gap-3">
            {INTERCESSOR_DAY_OPTIONS.map((day) => (
              <label key={day} className="flex items-center gap-1.5 text-sm text-ink">
                <input
                  type="checkbox" checked={form.daysAvailable.includes(day)} onChange={() => toggleListField("daysAvailable", day)}
                  className="h-4 w-4 rounded border-border text-success-600 focus-visible:ring-success-500"
                />
                {day}
              </label>
            ))}
          </div>
          <div className="mt-4">
            <Textarea
              label="Note (Optional)" rows={2} maxLength={200} placeholder="Any note about availability"
              helperText={`${form.availabilityNote.length}/200`}
              value={form.availabilityNote} onChange={(e) => setField("availabilityNote", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
