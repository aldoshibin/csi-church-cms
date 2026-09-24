"use client";

import { Input, Select } from "@/components/ui/Input";
import { GENDER_OPTIONS, NATIONALITY_OPTIONS, MARITAL_STATUS_OPTIONS } from "@/lib/mock/vmDeceasedMockData";

export function PersonalInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Personal Information</h3>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
        <Input label="Full Name" required value={form.fullName} onChange={(e) => setField("fullName", e.target.value)} placeholder="Enter full name" />
        <Select label="Gender" required value={form.gender} onChange={(e) => setField("gender", e.target.value)}>
          <option value="">Select gender</option>
          {GENDER_OPTIONS.map((g) => <option key={g} value={g}>{g}</option>)}
        </Select>
        <Input type="date" label="Date of Birth" value={form.dateOfBirth} onChange={(e) => setField("dateOfBirth", e.target.value)} />
        <Input type="date" label="Date of Death" required value={form.dateOfDeath} onChange={(e) => setField("dateOfDeath", e.target.value)} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
        <Input type="number" label="Age at Death" value={form.ageAtDeath} onChange={(e) => setField("ageAtDeath", e.target.value)} placeholder="Enter age" />
        <Select label="Nationality" value={form.nationality} onChange={(e) => setField("nationality", e.target.value)}>
          <option value="">Select nationality</option>
          {NATIONALITY_OPTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
        </Select>
        <Select label="Marital Status" required value={form.maritalStatus} onChange={(e) => setField("maritalStatus", e.target.value)}>
          <option value="">Select status</option>
          {MARITAL_STATUS_OPTIONS.map((m) => <option key={m} value={m}>{m}</option>)}
        </Select>
        <Input label="Occupation" value={form.occupation} onChange={(e) => setField("occupation", e.target.value)} placeholder="Enter occupation" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
        <Input label="Father's Name" value={form.fatherName} onChange={(e) => setField("fatherName", e.target.value)} placeholder="Enter father's name" />
        <Input label="Mother's Name" value={form.motherName} onChange={(e) => setField("motherName", e.target.value)} placeholder="Enter mother's name" />
        <Input label="Spouse Name" value={form.spouseName} onChange={(e) => setField("spouseName", e.target.value)} placeholder="Enter spouse name" />
        <Input type="number" label="No. of Children" value={form.numberOfChildren} onChange={(e) => setField("numberOfChildren", e.target.value)} placeholder="Enter number" />
      </div>
    </div>
  );
}
