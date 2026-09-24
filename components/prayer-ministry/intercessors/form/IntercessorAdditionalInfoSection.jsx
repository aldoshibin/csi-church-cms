"use client";

import { Input } from "@/components/ui/Input";

export function IntercessorAdditionalInfoSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Additional Information (Optional)</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="Emergency Contact Name" placeholder="Enter emergency contact name" value={form.emergencyContactName} onChange={(e) => setField("emergencyContactName", e.target.value)} />
        <Input label="Relationship" placeholder="e.g., Spouse, Friend, Parent" value={form.relationship} onChange={(e) => setField("relationship", e.target.value)} />
        <Input label="Emergency Contact Number" type="tel" placeholder="Enter contact number" value={form.emergencyContactNumber} onChange={(e) => setField("emergencyContactNumber", e.target.value)} />
      </div>
    </div>
  );
}
