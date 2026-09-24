"use client";

import { cn } from "@/lib/utils";

function RadioOption({ name, value, current, onChange, label, sub }) {
  const active = current === value;
  return (
    <label className="flex items-start gap-3">
      <span className={cn(
        "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2",
        active ? "border-success-500" : "border-border"
      )}>
        <input type="radio" name={name} checked={active} onChange={() => onChange(value)} className="sr-only" />
        {active && <span className="h-2 w-2 rounded-full bg-success-500" />}
      </span>
      <span>
        <p className="text-sm font-medium text-ink">{label}</p>
        <p className="text-xs text-ink-subtle">{sub}</p>
      </span>
    </label>
  );
}

export function AdditionalSettingsSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">3. Additional Settings</h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-medium text-ink">Status</p>
          <div className="flex flex-col gap-4">
            <RadioOption name="status" value="active" current={form.status} onChange={(v) => setField("status", v)} label="Active" sub="Template is ready to use" />
            <RadioOption name="status" value="inactive" current={form.status} onChange={(v) => setField("status", v)} label="Inactive" sub="Save as draft" />
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-ink">Share with</p>
          <div className="flex flex-col gap-4">
            <RadioOption name="shareWith" value="onlyMe" current={form.shareWith} onChange={(v) => setField("shareWith", v)} label="Only Me" sub="Only you can use this template" />
            <RadioOption name="shareWith" value="allUsers" current={form.shareWith} onChange={(v) => setField("shareWith", v)} label="All Users" sub="All users can use this template" />
          </div>
        </div>
      </div>
    </div>
  );
}
