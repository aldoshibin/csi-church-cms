"use client";

import { Input, Select } from "@/components/ui/Input";
import { VOLUNTEER_RELATIONSHIP_OPTIONS } from "@/lib/mock/volunteersMockData";

export function VolunteerEmergencyContactSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Emergency Contact</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="Contact Name" required placeholder="Enter contact name" value={form.emergencyContactName} onChange={(e) => setField("emergencyContactName", e.target.value)} />
        <Select label="Relationship" required value={form.relationship} onChange={(e) => setField("relationship", e.target.value)}>
          <option value="">Select relationship</option>
          {VOLUNTEER_RELATIONSHIP_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </Select>
        <Input label="Phone Number" required type="tel" placeholder="Enter phone number" value={form.emergencyPhone} onChange={(e) => setField("emergencyPhone", e.target.value)} />
      </div>
    </div>
  );
}
