"use client";

import { ToggleSwitch } from "./ToggleSwitch";

export function MeetingSettingsPanel({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Meeting Settings</h3>
      <div className="flex flex-col gap-4">
        <ToggleSwitch label="Send Email Invitation" checked={form.sendEmailInvitation} onChange={(v) => setField("sendEmailInvitation", v)} />
        <ToggleSwitch label="Send SMS Reminder" checked={form.sendSmsReminder} onChange={(v) => setField("sendSmsReminder", v)} />
        <ToggleSwitch label="Allow Add to Calendar" checked={form.allowAddToCalendar} onChange={(v) => setField("allowAddToCalendar", v)} />
        <ToggleSwitch
          label="Publish to Group Members" checked={form.publishToGroupMembers} onChange={(v) => setField("publishToGroupMembers", v)}
          description="Visible to all group members"
        />
      </div>
    </div>
  );
}
