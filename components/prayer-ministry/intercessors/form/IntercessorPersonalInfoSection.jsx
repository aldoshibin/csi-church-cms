"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import { INTERCESSOR_GENDER_OPTIONS } from "@/lib/mock/intercessorsMockData";

export function IntercessorPersonalInfoSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Personal Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="Full Name" required placeholder="Enter full name" value={form.fullName} onChange={(e) => setField("fullName", e.target.value)} />
        <Input label="Email" type="email" placeholder="Enter email address" value={form.email} onChange={(e) => setField("email", e.target.value)} />
        <Input label="Date of Birth" type="date" value={form.dob} onChange={(e) => setField("dob", e.target.value)} />

        <Select label="Gender" required value={form.gender} onChange={(e) => setField("gender", e.target.value)}>
          <option value="">Select gender</option>
          {INTERCESSOR_GENDER_OPTIONS.map((g) => <option key={g}>{g}</option>)}
        </Select>
        <Input label="Phone Number" required type="tel" placeholder="Enter phone number" value={form.phone} onChange={(e) => setField("phone", e.target.value)} />
        <div className="sm:row-span-1">
          <Textarea
            label="Address (Optional)" rows={2} maxLength={200} placeholder="Enter address"
            helperText={`${form.address.length}/200`}
            value={form.address} onChange={(e) => setField("address", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
