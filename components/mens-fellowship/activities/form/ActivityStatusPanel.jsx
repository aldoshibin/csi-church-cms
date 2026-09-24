"use client";

import { Select } from "@/components/ui/Input";
import { ACTIVITY_STATUS_OPTIONS, ACTIVITY_VISIBILITY_OPTIONS } from "@/lib/mock/activitiesMockData";

export function ActivityStatusPanel({ status, visibility, onStatusChange, onVisibilityChange }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Activity Status</h3>
      <div className="flex flex-col gap-4">
        <Select label="Status" value={status} onChange={(e) => onStatusChange(e.target.value)}>
          {ACTIVITY_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>
        <Select label="Visibility" value={visibility} onChange={(e) => onVisibilityChange(e.target.value)}>
          {ACTIVITY_VISIBILITY_OPTIONS.map((v) => <option key={v}>{v}</option>)}
        </Select>
      </div>
    </div>
  );
}
