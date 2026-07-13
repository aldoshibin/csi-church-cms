"use client";

import { Plus, Trash2, UserCircle2 } from "lucide-react";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const RELATIONSHIP_OPTIONS = ["Head", "Spouse", "Son", "Daughter", "Father", "Mother", "Brother", "Sister", "Other"];
const GENDER_OPTIONS = [
  { value: "MALE", label: "Male" },
  { value: "FEMALE", label: "Female" },
  { value: "OTHER", label: "Other" },
];

export default function FamilyMembersTable({ form, fields, addMember, removeMember }) {
  const { register, formState: { errors } } = form;
  const memberErrors = errors.members || [];

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="mb-5 flex items-center gap-3">
        <h2 className="font-display text-base font-semibold text-ink">Add Family Members</h2>
        <span className="rounded-full bg-interactive-50 px-2.5 py-0.5 text-xs font-medium text-interactive-500">
          Add at least one member
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wide text-ink-subtle">
              <th className="w-10 py-2">#</th>
              <th className="w-16 py-2">Photo</th>
              <th className="py-2">Name *</th>
              <th className="py-2">Relationship *</th>
              <th className="py-2">Gender *</th>
              <th className="py-2">Date of Birth *</th>
              <th className="py-2">Occupation</th>
              <th className="w-20 py-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, idx) => {
              const rowErr = memberErrors[idx] || {};
              return (
                <tr key={field.id} className="border-b border-border/60 align-top">
                  <td className="py-3 text-ink-subtle">{idx + 1}</td>
                  <td className="py-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-interactive-50 text-interactive-500">
                      <UserCircle2 className="h-6 w-6" />
                    </div>
                  </td>
                  <td className="py-3 pr-2">
                    <div className="flex gap-2">
                      <Input placeholder="First Name" error={rowErr.first_name?.message} {...register(`members.${idx}.first_name`)} />
                      <Input placeholder="Last Name" {...register(`members.${idx}.last_name`)} />
                    </div>
                  </td>
                  <td className="py-3 pr-2">
                    <Select error={rowErr.relationship?.message} {...register(`members.${idx}.relationship`)}>
                      {RELATIONSHIP_OPTIONS.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </Select>
                  </td>
                  <td className="py-3 pr-2">
                    <Select error={rowErr.gender?.message} {...register(`members.${idx}.gender`)}>
                      <option value="">Select</option>
                      {GENDER_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </Select>
                  </td>
                  <td className="py-3 pr-2">
                    <Input type="date" error={rowErr.date_of_birth?.message} {...register(`members.${idx}.date_of_birth`)} />
                  </td>
                  <td className="py-3 pr-2">
                    <Input placeholder="Occupation" {...register(`members.${idx}.occupation`)} />
                  </td>
                  <td className="py-3">
                    <div className="flex justify-end gap-1.5">
                      <Button type="button" size="icon" variant="secondary" onClick={addMember} title="Add member">
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        size="icon"
                        variant="danger"
                        onClick={() => removeMember(idx)}
                        disabled={fields.length === 1}
                        title="Remove member"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-ink-subtle">Showing 1 to {fields.length} of {fields.length} records</p>
        <Button type="button" variant="secondary" size="sm" leftIcon={<Plus className="h-4 w-4" />} onClick={addMember}>
          Add Another Member
        </Button>
      </div>
    </section>
  );
}
