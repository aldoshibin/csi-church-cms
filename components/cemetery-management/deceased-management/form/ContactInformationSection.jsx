"use client";

import { Input, Textarea } from "@/components/ui/Input";

export function ContactInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Contact Information</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Textarea label="Address" required rows={4} value={form.address} onChange={(e) => setField("address", e.target.value)} placeholder="Enter complete address" />
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Phone Number" value={form.phone} onChange={(e) => setField("phone", e.target.value)} placeholder="Enter phone number" />
            <Input label="Alternate Phone" value={form.alternatePhone} onChange={(e) => setField("alternatePhone", e.target.value)} placeholder="Enter alternate number" />
          </div>
          <Input type="email" label="Email" value={form.email} onChange={(e) => setField("email", e.target.value)} placeholder="Enter email address" />
        </div>
      </div>
    </div>
  );
}
