"use client";

import { Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { key: "immediate", label: "Send Immediately", sub: "Send campaign right away" },
  { key: "schedule", label: "Schedule for Later", sub: "Choose date and time to send" },
  { key: "draft", label: "Save as Draft", sub: "Save campaign and send later" },
];

export function SendSettingsSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">3. Send Settings</h3>

      <div className="flex flex-col gap-4">
        {OPTIONS.map((opt) => (
          <div key={opt.key} className="flex flex-wrap items-center gap-4">
            <label className="flex flex-1 items-start gap-3">
              <span className={cn(
                "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2",
                form.sendOption === opt.key ? "border-success-500" : "border-border"
              )}>
                <input
                  type="radio" name="sendOption" checked={form.sendOption === opt.key}
                  onChange={() => setField("sendOption", opt.key)} className="sr-only"
                />
                {form.sendOption === opt.key && <span className="h-2 w-2 rounded-full bg-success-500" />}
              </span>
              <span>
                <p className="text-sm font-medium text-ink">{opt.label}</p>
                <p className="text-xs text-ink-subtle">{opt.sub}</p>
              </span>
            </label>

            {opt.key === "schedule" && form.sendOption === "schedule" && (
              <div className="flex gap-2">
                <div className="relative">
                  <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
                  <input
                    type="date" value={form.scheduleDate} onChange={(e) => setField("scheduleDate", e.target.value)}
                    className="h-10 w-40 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink"
                  />
                </div>
                <div className="relative">
                  <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
                  <input
                    type="time" value={form.scheduleTime} onChange={(e) => setField("scheduleTime", e.target.value)}
                    className="h-10 w-32 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
