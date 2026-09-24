"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  VOLUNTEER_GENDER_OPTIONS, VOLUNTEER_MARITAL_STATUS_OPTIONS, VOLUNTEER_BLOOD_GROUP_OPTIONS,
} from "@/lib/mock/volunteersMockData";

export function VolunteerPersonalInfoSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Personal Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="First Name" required placeholder="Enter first name" value={form.firstName} onChange={(e) => setField("firstName", e.target.value)} />
        <Input label="Middle Name" placeholder="Enter middle name" value={form.middleName} onChange={(e) => setField("middleName", e.target.value)} />
        <Input label="Last Name" required placeholder="Enter last name" value={form.lastName} onChange={(e) => setField("lastName", e.target.value)} />

        <Input label="Date of Birth" required type="date" value={form.dob} onChange={(e) => setField("dob", e.target.value)} />
        <Select label="Gender" required value={form.gender} onChange={(e) => setField("gender", e.target.value)}>
          <option value="">Select gender</option>
          {VOLUNTEER_GENDER_OPTIONS.map((g) => <option key={g}>{g}</option>)}
        </Select>
        <Select label="Marital Status" value={form.maritalStatus} onChange={(e) => setField("maritalStatus", e.target.value)}>
          <option value="">Select marital status</option>
          {VOLUNTEER_MARITAL_STATUS_OPTIONS.map((m) => <option key={m}>{m}</option>)}
        </Select>

        <Select label="Blood Group" value={form.bloodGroup} onChange={(e) => setField("bloodGroup", e.target.value)}>
          <option value="">Select blood group</option>
          {VOLUNTEER_BLOOD_GROUP_OPTIONS.map((b) => <option key={b}>{b}</option>)}
        </Select>
        <Input label="Primary Phone" required type="tel" placeholder="Enter phone number" value={form.primaryPhone} onChange={(e) => setField("primaryPhone", e.target.value)} />
        <Input label="Alternate Phone" type="tel" placeholder="Enter alternate number" value={form.alternatePhone} onChange={(e) => setField("alternatePhone", e.target.value)} />

        <Input label="Email" type="email" placeholder="Enter email address" value={form.email} onChange={(e) => setField("email", e.target.value)} />
        <div className="sm:col-span-2">
          <Textarea label="Address" required rows={2} placeholder="Enter complete address" value={form.address} onChange={(e) => setField("address", e.target.value)} />
        </div>
      </div>
    </div>
  );
}
