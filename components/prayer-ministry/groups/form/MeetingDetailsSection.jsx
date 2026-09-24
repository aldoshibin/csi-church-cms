"use client";

import { Input, Select } from "@/components/ui/Input";
import { GROUP_MEETING_DAY_OPTIONS, GROUP_LOCATION_OPTIONS } from "@/lib/mock/prayerGroupsMockData";

const DAY_SHORT = { Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed", Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun" };

export function MeetingDetailsSection({ form, setField, toggleDay }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Meeting Details</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Meeting Days <span className="text-danger-500">*</span></label>
          <div className="flex flex-wrap gap-3">
            {GROUP_MEETING_DAY_OPTIONS.map((day) => (
              <label key={day} className="flex items-center gap-1.5 text-sm text-ink">
                <input
                  type="checkbox" checked={form.meetingDays.includes(day)} onChange={() => toggleDay(day)}
                  className="h-4 w-4 rounded border-border text-success-600 focus-visible:ring-success-500"
                />
                {DAY_SHORT[day]}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Meeting Time <span className="text-danger-500">*</span></label>
          <div className="flex items-center gap-2">
            <input type="time" value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} className="h-10 flex-1 rounded-md border border-border bg-white px-3 text-sm text-ink" />
            <span className="text-sm text-ink-subtle">to</span>
            <input type="time" value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} className="h-10 flex-1 rounded-md border border-border bg-white px-3 text-sm text-ink" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Select label="Location" required value={form.location} onChange={(e) => setField("location", e.target.value)}>
            <option value="">Select location</option>
            {GROUP_LOCATION_OPTIONS.map((l) => <option key={l}>{l}</option>)}
          </Select>
          <Input label="Room / Place (Optional)" placeholder="e.g., Prayer Room - 1st Floor" value={form.roomPlace} onChange={(e) => setField("roomPlace", e.target.value)} />
        </div>
      </div>
    </div>
  );
}
