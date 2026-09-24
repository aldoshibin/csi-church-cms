"use client";

import { Select } from "@/components/ui/Input";
import { ToggleSwitch } from "@/components/communication-module/announcements/form/ToggleSwitch";
import { MESSAGE_PRIORITY_OPTIONS } from "@/lib/mock/vmMessagesMockData";

export function MessageSettingsCard({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Message Settings</h3>

      <Select label="Priority" value={form.priority} onChange={(e) => setField("priority", e.target.value)}>
        {MESSAGE_PRIORITY_OPTIONS.map((p) => <option key={p}>{p}</option>)}
      </Select>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-ink">Allow Replies</p>
          <p className="text-xs text-ink-subtle">Recipients can reply to this message</p>
        </div>
        <ToggleSwitch checked={form.allowReplies} onChange={(v) => setField("allowReplies", v)} />
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-ink">Schedule Message</p>
          <p className="text-xs text-ink-subtle">Schedule this message to be sent later</p>
        </div>
        <ToggleSwitch checked={form.scheduleEnabled} onChange={(v) => setField("scheduleEnabled", v)} />
      </div>

      {form.scheduleEnabled && (
        <div className="mt-3 flex gap-2">
          <input
            type="date" value={form.scheduleDate} onChange={(e) => setField("scheduleDate", e.target.value)}
            className="h-10 flex-1 rounded-md border border-border bg-white px-3 text-sm text-ink"
          />
          <input
            type="time" value={form.scheduleTime} onChange={(e) => setField("scheduleTime", e.target.value)}
            className="h-10 w-32 rounded-md border border-border bg-white px-3 text-sm text-ink"
          />
        </div>
      )}
    </div>
  );
}
