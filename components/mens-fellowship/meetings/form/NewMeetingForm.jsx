"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  MEETING_TYPE_OPTIONS, MEETING_LOCATION_OPTIONS, MEETING_SPEAKER_OPTIONS,
} from "@/lib/mock/meetingsMockData";
import { FELLOWSHIP_GROUP_OPTIONS } from "@/lib/mock/mensFellowshipMockData";

export function NewMeetingForm({ form, setField }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Meeting Details</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input
            label="Meeting Title" required placeholder="Enter meeting title"
            value={form.title} onChange={(e) => setField("title", e.target.value)}
          />
          <Select label="Meeting Type" required value={form.type} onChange={(e) => setField("type", e.target.value)}>
            <option value="">Select meeting type</option>
            {MEETING_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </Select>
          <Select label="Fellowship Group" required value={form.fellowshipGroup} onChange={(e) => setField("fellowshipGroup", e.target.value)}>
            <option value="">Select fellowship group</option>
            {FELLOWSHIP_GROUP_OPTIONS.map((g) => <option key={g}>{g}</option>)}
          </Select>

          <Select label="Speaker / Leader" value={form.speaker} onChange={(e) => setField("speaker", e.target.value)}>
            <option value="">Select speaker or leader</option>
            {MEETING_SPEAKER_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </Select>
          <Input
            label="Meeting Purpose (Optional)" placeholder="E.g., Fellowship, Bible Study, Prayer, etc."
            value={form.purpose} onChange={(e) => setField("purpose", e.target.value)}
          />
          <Textarea
            label="Description (Optional)" rows={1} maxLength={250} placeholder="Enter a short description about the meeting"
            helperText={`${form.description.length} / 250 characters`}
            value={form.description} onChange={(e) => setField("description", e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Date, Time &amp; Location</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
          <Input label="Date" required type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} />
          <Input label="Start Time" required type="time" value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
          <Input label="End Time" required type="time" value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />
          <Input label="Time Zone" value={form.timeZone} onChange={(e) => setField("timeZone", e.target.value)} />

          <Select label="Location" required value={form.location} onChange={(e) => setField("location", e.target.value)}>
            <option value="">Select location</option>
            {MEETING_LOCATION_OPTIONS.map((l) => <option key={l}>{l}</option>)}
          </Select>
          <div className="sm:col-span-2">
            <Textarea
              label="Address (Optional)" rows={1} placeholder="Enter full address"
              value={form.address} onChange={(e) => setField("address", e.target.value)}
            />
          </div>
          <Input label="Room / Hall (Optional)" placeholder="Enter room or hall name" value={form.room} onChange={(e) => setField("room", e.target.value)} />
        </div>

        <label className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
          <input
            type="checkbox" checked={form.addOnlineDetails} onChange={(e) => setField("addOnlineDetails", e.target.checked)}
            className="h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500"
          />
          Add online meeting details
        </label>
      </div>
    </div>
  );
}
