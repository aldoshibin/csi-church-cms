"use client";

import { useState, useEffect } from "react";
import { Modal } from "@/components/ui/Modal";
import { Field, TextInput, SelectInput } from "./fields";
import { Button } from "@/components/ui/Button";

const BLANK = { name: "", relationship: "", dob: "", gender: "", marital_status: "" };

export function FamilyMemberModal({ open, onClose, onSave, initialValue }) {
  const [values, setValues] = useState(BLANK);

  useEffect(() => {
    if (open) setValues(initialValue ?? BLANK);
  }, [open, initialValue]);

  const set = (patch) => setValues((prev) => ({ ...prev, ...patch }));

  return (
    <Modal open={open} onOpenChange={(v) => !v && onClose()} title={initialValue ? "Edit Family Member" : "Add Family Member"} size="sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(values);
        }}
        className="space-y-4"
      >
        <Field label="Full Name" required>
          <TextInput placeholder="Enter full name" value={values.name} onChange={(e) => set({ name: e.target.value })} />
        </Field>
        <Field label="Relationship with Head" required>
          <SelectInput value={values.relationship} onChange={(e) => set({ relationship: e.target.value })}>
            <option value="">Select relationship</option>
            <option>Self (Head)</option>
            <option>Spouse</option>
            <option>Son</option>
            <option>Daughter</option>
            <option>Father</option>
            <option>Mother</option>
            <option>Other</option>
          </SelectInput>
        </Field>
        <Field label="Date of Birth" required>
          <TextInput type="date" value={values.dob} onChange={(e) => set({ dob: e.target.value })} />
        </Field>
        <Field label="Gender" required>
          <SelectInput value={values.gender} onChange={(e) => set({ gender: e.target.value })}>
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </SelectInput>
        </Field>
        <Field label="Marital Status">
          <SelectInput value={values.marital_status} onChange={(e) => set({ marital_status: e.target.value })}>
            <option value="">Select marital status</option>
            <option>Single</option>
            <option>Married</option>
            <option>Widowed</option>
          </SelectInput>
        </Field>

        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
          <Button type="submit">{initialValue ? "Save Changes" : "Add Member"}</Button>
        </div>
      </form>
    </Modal>
  );
}
