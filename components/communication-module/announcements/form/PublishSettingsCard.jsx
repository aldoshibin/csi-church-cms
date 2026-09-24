"use client";

import { Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { ToggleSwitch } from "./ToggleSwitch";

export function PublishSettingsCard({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Publish Settings</h3>

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-ink">
          Status <span className="text-danger-500">*</span>
        </label>
        <div className="flex rounded-md border border-border p-0.5">
          {["Draft", "Published"].map((s) => (
            <button
              key={s} type="button" onClick={() => setField("status", s)}
              className={cn(
                "rounded px-3 py-1 text-xs font-medium transition-colors",
                form.status === s ? "bg-success-50 text-success-700" : "text-ink-muted"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm font-medium text-ink">
          Publish On <span className="text-danger-500">*</span>
        </label>
        <div className="mt-1.5 flex gap-2">
          <div className="relative flex-1">
            <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              type="date" value={form.publishDate} onChange={(e) => setField("publishDate", e.target.value)}
              className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink"
            />
          </div>
          <div className="relative w-32">
            <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              type="time" value={form.publishTime} onChange={(e) => setField("publishTime", e.target.value)}
              className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink"
            />
          </div>
        </div>
      </div>

      <label className="mt-3 flex items-center gap-2">
        <input
          type="checkbox" checked={form.immediate} onChange={(e) => setField("immediate", e.target.checked)}
          className="h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500"
        />
        <span className="text-sm text-ink-muted">Immediately</span>
      </label>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-ink">Expiry (Optional)</p>
          <p className="text-xs text-ink-subtle">Set an expiry date for this announcement</p>
        </div>
        <ToggleSwitch checked={form.expiryEnabled} onChange={(v) => setField("expiryEnabled", v)} />
      </div>

      {form.expiryEnabled && (
        <div className="mt-3 flex gap-2">
          <div className="relative flex-1">
            <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              type="date" value={form.expiryDate} onChange={(e) => setField("expiryDate", e.target.value)}
              className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink"
            />
          </div>
          <div className="relative w-32">
            <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              type="time" value={form.expiryTime} onChange={(e) => setField("expiryTime", e.target.value)}
              className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink"
            />
          </div>
        </div>
      )}

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-ink">Pin to Top</p>
          <p className="text-xs text-ink-subtle">Show this announcement at the top</p>
        </div>
        <ToggleSwitch checked={form.pinToTop} onChange={(v) => setField("pinToTop", v)} />
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-ink">Allow Comments</p>
          <p className="text-xs text-ink-subtle">Members can comment on this announcement</p>
        </div>
        <ToggleSwitch checked={form.allowComments} onChange={(v) => setField("allowComments", v)} />
      </div>
    </div>
  );
}
