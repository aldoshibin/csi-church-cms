"use client";

import { ToggleSwitch } from "@/components/mens-fellowship/shared/ToggleSwitch";

export function NotificationVisibilitySection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Notification &amp; Visibility</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <ToggleSwitch label="Notify Intercessors" description="Send notifications to assigned intercessors" checked={form.notifyIntercessors} onChange={(v) => setField("notifyIntercessors", v)} />

        <div>
          <p className="mb-2 text-sm font-medium text-ink">Visibility</p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="visibility" checked={form.visibility === "Public"} onChange={() => setField("visibility", "Public")} className="h-4 w-4 border-border text-interactive-500" />
              Public (Visible to all)
            </label>
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="visibility" checked={form.visibility === "Private"} onChange={() => setField("visibility", "Private")} className="h-4 w-4 border-border text-interactive-500" />
              Private (Only for assigned groups)
            </label>
          </div>
        </div>

        <ToggleSwitch label="Add to Calendar" description="Add this event to the church prayer calendar" checked={form.addToCalendar} onChange={(v) => setField("addToCalendar", v)} />
        <ToggleSwitch label="Send Prayer Request (Optional)" description="Create a separate prayer request for this event" checked={form.sendPrayerRequest} onChange={(v) => setField("sendPrayerRequest", v)} />
      </div>
    </div>
  );
}
