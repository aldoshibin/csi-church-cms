"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import { ASSIGNMENT_ROLE_OPTIONS } from "@/lib/mock/serviceAssignmentsMockData";

export function AssignmentDetailsSection({ form, setField }) {
  const instructions = form.instructions ?? "";
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Assignment Details</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Select label="Role / Position" required value={form.role} onChange={(e) => setField("role", e.target.value)}>
          <option value="">Select role or position</option>
          {ASSIGNMENT_ROLE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </Select>
        <Input
          label="Number of Volunteers Needed" required type="number" min={1}
          value={form.volunteersNeeded} onChange={(e) => setField("volunteersNeeded", Number(e.target.value))}
        />
        <Input label="Check-in Time (Optional)" type="time" value={form.checkinTime} onChange={(e) => setField("checkinTime", e.target.value)} />

        <div className="sm:col-span-3">
          <Textarea
            label="Instructions / Notes for Volunteers (Optional)" rows={3} maxLength={500}
            placeholder="Add any instructions or notes for the assigned volunteers..."
            value={instructions} onChange={(e) => setField("instructions", e.target.value)}
          />
          <p className="mt-1 text-right text-xs text-ink-subtle">{instructions.length}/500</p>
        </div>
      </div>
    </div>
  );
}
