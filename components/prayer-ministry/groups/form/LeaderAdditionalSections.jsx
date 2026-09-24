"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import { Phone, Mail } from "lucide-react";

export function LeaderInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Leader Information</h3>
      <div className="flex flex-col gap-5">
        <Select label="Leader" required value={form.leader} onChange={(e) => setField("leader", e.target.value)}>
          <option value="">Select group leader</option>
          {["John Samuel", "Melissa Grace", "Daniel Paul", "Sophia Daniel", "Isaac Thomas", "Anna Paul", "Maria Joseph", "Thomas Philip"].map((l) => <option key={l}>{l}</option>)}
        </Select>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Input label="Contact Number" required type="tel" leftIcon={<Phone className="h-4 w-4" />} placeholder="Enter contact number" value={form.contactNumber} onChange={(e) => setField("contactNumber", e.target.value)} />
          <Input label="Email (Optional)" type="email" leftIcon={<Mail className="h-4 w-4" />} placeholder="Enter email address" value={form.email} onChange={(e) => setField("email", e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export function AdditionalInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Additional Information</h3>
      <div className="flex flex-col gap-5">
        <Input
          label="Focus / Prayer Topics (Optional)" placeholder="e.g., Healing, Family, Youth, Missions (comma separated)"
          helperText="Add topics this group mainly focuses on."
          value={form.focusTopics} onChange={(e) => setField("focusTopics", e.target.value)}
        />
        <Textarea
          label="Notes (Optional)" rows={2} maxLength={300} placeholder="Any additional notes about this group"
          helperText={`${form.notes.length}/300`}
          value={form.notes} onChange={(e) => setField("notes", e.target.value)}
        />
      </div>
    </div>
  );
}
