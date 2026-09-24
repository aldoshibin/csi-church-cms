"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import { ToggleSwitch } from "@/components/mens-fellowship/shared/ToggleSwitch";
import {
  ACTIVITY_TYPE_OPTIONS, ACTIVITY_ORGANIZER_OPTIONS, ACTIVITY_LOCATION_OPTIONS, ACTIVITY_TARGET_PARTICIPANTS_OPTIONS,
} from "@/lib/mock/activitiesMockData";

export function NewActivityForm({ form, setField }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Activity Details</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input
            label="Activity Title" required placeholder="Enter activity title"
            value={form.title} onChange={(e) => setField("title", e.target.value)}
          />
          <Select label="Activity Type" required value={form.type} onChange={(e) => setField("type", e.target.value)}>
            <option value="">Select activity type</option>
            {ACTIVITY_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </Select>
          <Select label="Organized By" required value={form.organizedBy} onChange={(e) => setField("organizedBy", e.target.value)}>
            <option value="">Select organizer</option>
            {ACTIVITY_ORGANIZER_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </Select>

          <div className="sm:col-span-2">
            <Textarea
              label="Short Description" required rows={2} maxLength={250} placeholder="Enter a short description of the activity"
              helperText={`${form.description.length} / 250 characters`}
              value={form.description} onChange={(e) => setField("description", e.target.value)}
            />
          </div>
          <Textarea
            label="Activity Purpose (Optional)" rows={2} placeholder="E.g., Fellowship, Outreach, Spiritual Growth, etc."
            value={form.purpose} onChange={(e) => setField("purpose", e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-base font-semibold text-ink">Date, Time &amp; Location</h3>
          <ToggleSwitch label="All Day Event" checked={form.allDayEvent} onChange={(v) => setField("allDayEvent", v)} />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input label="Date" required type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} />
          <Input label="Start Time" required type="time" disabled={form.allDayEvent} value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
          <Input label="End Time" required type="time" disabled={form.allDayEvent} value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />

          <Select label="Location" required value={form.location} onChange={(e) => setField("location", e.target.value)}>
            <option value="">Select location</option>
            {ACTIVITY_LOCATION_OPTIONS.map((l) => <option key={l}>{l}</option>)}
          </Select>
          <Input label="Address (Optional)" placeholder="Enter full address" value={form.address} onChange={(e) => setField("address", e.target.value)} />
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

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Participants &amp; Settings</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Select label="Target Participants" required value={form.targetParticipants} onChange={(e) => setField("targetParticipants", e.target.value)}>
            <option value="">Select participants</option>
            {ACTIVITY_TARGET_PARTICIPANTS_OPTIONS.map((p) => <option key={p}>{p}</option>)}
          </Select>
          <Input
            label="Expected Participants (Optional)" type="number" placeholder="Enter expected number"
            value={form.expectedParticipants} onChange={(e) => setField("expectedParticipants", e.target.value)}
          />
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <ToggleSwitch label="Allow Registration" description="Members can register for this activity" checked={form.allowRegistration} onChange={(v) => setField("allowRegistration", v)} />
          <ToggleSwitch label="Publish to Calendar" description="Show this activity on church calendar" checked={form.publishToCalendar} onChange={(v) => setField("publishToCalendar", v)} />
          <ToggleSwitch label="Is Mandatory" description="Mark as mandatory for selected members" checked={form.isMandatory} onChange={(v) => setField("isMandatory", v)} />
          <ToggleSwitch label="Send Notifications" description="Send email/SMS notifications" checked={form.sendNotifications} onChange={(v) => setField("sendNotifications", v)} />
        </div>
      </div>
    </div>
  );
}
