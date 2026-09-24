"use client";

import { Select } from "@/components/ui/Input";
import { MEMBER_STATUS_OPTIONS } from "@/lib/mock/mensFellowshipMockData";

export function MembershipStatusPanel({ status, onStatusChange }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Membership Status</h3>
      <Select label="Status" required value={status} onChange={(e) => onStatusChange(e.target.value)}>
        {MEMBER_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
      </Select>
      <p className="mt-2 text-xs text-ink-subtle">Inactive members will not appear in active lists.</p>
    </div>
  );
}
