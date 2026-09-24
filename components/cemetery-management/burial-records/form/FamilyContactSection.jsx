"use client";

import { Input } from "@/components/ui/Input";

export function FamilyContactSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Family &amp; Contact Information</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input label="Primary Contact Name" required value={form.contactName} onChange={(e) => setField("contactName", e.target.value)} placeholder="Enter name" />
        <Input label="Relationship" value={form.relationship} onChange={(e) => setField("relationship", e.target.value)} placeholder="Enter relationship" />
        <Input type="tel" label="Phone Number" required value={form.contactPhone} onChange={(e) => setField("contactPhone", e.target.value)} placeholder="Enter phone number" />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input type="email" label="Email" value={form.contactEmail} onChange={(e) => setField("contactEmail", e.target.value)} placeholder="Enter email (optional)" />
        <Input label="Address" value={form.contactAddress} onChange={(e) => setField("contactAddress", e.target.value)} placeholder="Enter full address" />
      </div>
    </div>
  );
}
