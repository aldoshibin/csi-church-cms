"use client";

import { Input, Select } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { MARITAL_STATUS_OPTIONS } from "@/lib/mock/vmCemeteryMockData";

function GenderRadio({ value, onChange }) {
  const options = ["Male", "Female", "Other"];
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        Gender<span className="ml-0.5 text-danger-500">*</span>
      </label>
      <div className="flex h-10 items-center gap-5">
        {options.map((opt) => (
          <label key={opt} className="flex cursor-pointer items-center gap-2 text-sm text-ink-muted">
            <span
              className={cn(
                "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                value === opt ? "border-success-500" : "border-border"
              )}
            >
              {value === opt && <span className="h-2 w-2 rounded-full bg-success-500" />}
            </span>
            <input type="radio" name="gender" value={opt} checked={value === opt} onChange={() => onChange(opt)} className="sr-only" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

export function DeceasedInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Deceased Information</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Full Name" required value={form.fullName} onChange={(e) => setField("fullName", e.target.value)} placeholder="Enter full name" />
        <Input type="date" label="Date of Death" required value={form.dateOfDeath} onChange={(e) => setField("dateOfDeath", e.target.value)} />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input type="date" label="Date of Birth" value={form.dateOfBirth} onChange={(e) => setField("dateOfBirth", e.target.value)} />
        <Input
          type="number" label="Age at Death" value={form.ageAtDeath} onChange={(e) => setField("ageAtDeath", e.target.value)}
          placeholder="Enter age" helperText="Years"
        />
        <GenderRadio value={form.gender} onChange={(v) => setField("gender", v)} />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Select label="Marital Status" value={form.maritalStatus} onChange={(e) => setField("maritalStatus", e.target.value)}>
          <option value="">Select status</option>
          {MARITAL_STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
        <Input label="Nationality" value={form.nationality} onChange={(e) => setField("nationality", e.target.value)} placeholder="Enter nationality" />
        <Input label="Occupation" value={form.occupation} onChange={(e) => setField("occupation", e.target.value)} placeholder="Enter occupation" />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Place of Death" value={form.placeOfDeath} onChange={(e) => setField("placeOfDeath", e.target.value)} placeholder="Enter place of death" />
        <Input label="Cause of Death" value={form.causeOfDeath} onChange={(e) => setField("causeOfDeath", e.target.value)} placeholder="Enter cause of death (optional)" />
      </div>
    </div>
  );
}
