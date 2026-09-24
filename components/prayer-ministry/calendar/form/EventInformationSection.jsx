"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import { CALENDAR_EVENT_TYPE_OPTIONS, CALENDAR_PRAYER_AREA_OPTIONS, CALENDAR_COLOR_OPTIONS } from "@/lib/mock/prayerCalendarMockData";

export function EventInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Event Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        <div className="sm:col-span-2">
          <Input label="Event Title" required placeholder="Enter event title" value={form.title} onChange={(e) => setField("title", e.target.value)} />
        </div>
        <Select label="Event Type" required value={form.eventType} onChange={(e) => setField("eventType", e.target.value)}>
          <option value="">Select event type</option>
          {CALENDAR_EVENT_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
        <Select label="Prayer Area" required value={form.prayerArea} onChange={(e) => setField("prayerArea", e.target.value)}>
          <option value="">Select prayer area</option>
          {CALENDAR_PRAYER_AREA_OPTIONS.map((a) => <option key={a}>{a}</option>)}
        </Select>

        <div className="sm:col-span-2">
          <Textarea
            label="Description (Optional)" rows={3} maxLength={300} placeholder="Enter event description"
            helperText={`${form.description.length}/300`}
            value={form.description} onChange={(e) => setField("description", e.target.value)}
          />
        </div>
        <div className="sm:col-span-1">
          <Input
            label="Focus / Theme (Optional)" maxLength={100} placeholder="e.g., Healing, Family, Youth, Missions"
            value={form.focusTheme} onChange={(e) => setField("focusTheme", e.target.value)}
          />
        </div>
        <Select label="Color (Optional)" value={form.color} onChange={(e) => setField("color", e.target.value)}>
          {CALENDAR_COLOR_OPTIONS.map((c) => <option key={c.value} value={c.value}>{c.value}</option>)}
        </Select>
      </div>
    </div>
  );
}
