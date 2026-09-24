"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  MTG_TYPE_OPTIONS, MTG_FELLOWSHIP_OPTIONS, MTG_VENUE_OPTIONS, MTG_ORGANIZER_OPTIONS, MTG_STATUS_OPTIONS,
} from "@/lib/mock/meetingAttendanceMockData";

export function NewMeetingForm({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Meeting Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="Meeting Title" required placeholder="Enter meeting title" value={form.title} onChange={(e) => setField("title", e.target.value)} />
        <Select label="Meeting Type" required value={form.meetingType} onChange={(e) => setField("meetingType", e.target.value)}>
          <option value="">Select meeting type</option>
          {MTG_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
        <Select label="Fellowship / Group" required value={form.fellowshipGroup} onChange={(e) => setField("fellowshipGroup", e.target.value)}>
          <option value="">Select fellowship or group</option>
          {MTG_FELLOWSHIP_OPTIONS.map((f) => <option key={f}>{f}</option>)}
        </Select>

        <div className="sm:col-span-3">
          <Textarea label="Description" rows={2} placeholder="Enter meeting description, purpose or agenda" value={form.description} onChange={(e) => setField("description", e.target.value)} />
        </div>

        <Input label="Date" required type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} />
        <Input label="Start Time" required type="time" value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
        <Input label="End Time" required type="time" value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />

        <Select label="Venue" required value={form.venue} onChange={(e) => setField("venue", e.target.value)}>
          <option value="">Select venue</option>
          {MTG_VENUE_OPTIONS.map((v) => <option key={v}>{v}</option>)}
        </Select>
        <Input label="Maximum Expected" required type="number" placeholder="Enter expected number" value={form.maximumExpected} onChange={(e) => setField("maximumExpected", e.target.value)} />
        <div />

        <Select label="Organizer / Leader" required value={form.organizer} onChange={(e) => setField("organizer", e.target.value)}>
          <option value="">Select organizer / leader</option>
          {MTG_ORGANIZER_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </Select>
        <Select label="Co-Organizer" value={form.coOrganizer} onChange={(e) => setField("coOrganizer", e.target.value)}>
          <option value="">Select co-organizer (optional)</option>
          {MTG_ORGANIZER_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </Select>
        <div />

        <div className="sm:col-span-3">
          <Textarea label="Meeting Agenda (Optional)" rows={2} placeholder="Enter agenda or discussion points" value={form.agenda} onChange={(e) => setField("agenda", e.target.value)} />
        </div>
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">Additional Settings</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Send Invitations</label>
          <button
            type="button" onClick={() => setField("sendInvitations", !form.sendInvitations)}
            className={`flex h-6 w-11 items-center rounded-full transition-colors ${form.sendInvitations ? "bg-success-500" : "bg-surface-muted"}`}
          >
            <span className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${form.sendInvitations ? "translate-x-5" : "translate-x-0.5"}`} />
          </button>
          <p className="mt-1.5 text-xs text-ink-subtle">Send email / SMS invitations to members</p>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Allow Check-in</label>
          <button
            type="button" onClick={() => setField("allowCheckIn", !form.allowCheckIn)}
            className={`flex h-6 w-11 items-center rounded-full transition-colors ${form.allowCheckIn ? "bg-success-500" : "bg-surface-muted"}`}
          >
            <span className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${form.allowCheckIn ? "translate-x-5" : "translate-x-0.5"}`} />
          </button>
          <p className="mt-1.5 text-xs text-ink-subtle">Enable attendance check-in for this meeting</p>
        </div>
        <Select label="Meeting Status" value={form.status} onChange={(e) => setField("status", e.target.value)}>
          {MTG_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>
      </div>
    </div>
  );
}
