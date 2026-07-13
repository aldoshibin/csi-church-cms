"use client";

import * as React from "react";
import { Controller } from "react-hook-form";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import HeadOfFamilySearch from "@/components/family-registration/HeadOfFamilySearch";
import { MARITAL_STATUS_OPTIONS, RESIDENTIAL_STATUS_OPTIONS, GENDER_OPTIONS } from "@/utils/constants";

function calculateAge(dob) {
  if (!dob) return "-";
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return "-";
  return Math.floor((Date.now() - birth.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
}

const GENDER_LABEL = Object.fromEntries(GENDER_OPTIONS.map((g) => [g.value, g.label]));
const MARITAL_LABEL = Object.fromEntries(MARITAL_STATUS_OPTIONS.map((m) => [m.value, m.label]));


function FamilyHeadPicker({ field, control, errors, fullName }) {
  const [mode, setMode] = React.useState(field.value?.id === "self" || !field.value ? "self" : "other");

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">Family Head <span className="text-danger-500">*</span></label>
      <select
        value={mode}
        onChange={(e) => {
          setMode(e.target.value);
          if (e.target.value === "self") field.onChange({ id: "self", name: `${fullName} (Self)` });
          else field.onChange(null); // reveals the search box below
        }}
        className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink"
      >
        {fullName.trim() && <option value="self">{fullName} (Self)</option>}
        <option value="other">Search existing member...</option>
      </select>
      {mode === "other" && (
        <div className="mt-2">
          <HeadOfFamilySearch control={control} name="family_head" errors={errors} />
        </div>
      )}
    </div>
  );
}

export default function Step4FamilyInformation({ form, fullName, age, gender, familyMemberFields, onAddMember, onEditMember, onRemoveMember , nav }) {
  const { register, control, watch, formState: { errors } } = form;

  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink">Family Information</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter family details. All members of the same household can be added here.</p>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Controller
          control={control}
          name="family_head"
          render={({ field }) => <FamilyHeadPicker field={field} control={control} errors={errors} fullName={fullName} />}
        />

        <Input label="Relationship to Family Head" required error={errors.relationship_to_family_head?.message} {...register("relationship_to_family_head")} />
        <Input label="Family Name" placeholder="Enter family name" {...register("family_name")} />

        <Input label="Family Registration Number (Auto)" value="Auto generated" disabled readOnly />
        <Input label="Family Email" type="email" placeholder="Enter family email" error={errors.family_email?.message} {...register("family_email")} />
        <Input label="Family Mobile Number" required placeholder="Enter mobile number" error={errors.family_mobile_number?.message} {...register("family_mobile_number")} />

        <Select label="Marital Status" required error={errors.family_marital_status?.message} {...register("family_marital_status")}>
          <option value="">Select marital status</option>
          {MARITAL_STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>
        <Input label="Date of Marriage" type="date" {...register("date_of_marriage")} />
        <Input label="Family Anniversary" type="date" {...register("family_anniversary")} />

        <Select label="Residential Status" required error={errors.residential_status?.message} {...register("residential_status")}>
          <option value="">Select status</option>
          {RESIDENTIAL_STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>
        <Input label="Parish House / Locality" placeholder="Enter locality" {...register("parish_house_locality")} />
        <Input label="Family Occupation" placeholder="Enter family occupation" {...register("family_occupation")} />

        <Input label="Family Prayer Group / Cell (if any)" placeholder="Enter group / cell" {...register("family_prayer_group")} />
        <div className="md:col-span-2">
          <Textarea label="Family Notes" rows={1} placeholder="Enter any notes about the family" {...register("family_notes")} />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-interactive-500">Family Members</h3>
          <p className="text-xs text-ink-subtle">Add or manage members who belong to this family.</p>
        </div>
        <Button type="button" size="sm" leftIcon={<Plus className="h-4 w-4" />} onClick={onAddMember}>Add Family Member</Button>
      </div>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wide text-ink-subtle">
              <th className="w-10 py-2">#</th>
              <th className="py-2">Name</th>
              <th className="py-2">Relationship</th>
              <th className="py-2">Gender</th>
              <th className="py-2">Date of Birth</th>
              <th className="py-2">Age</th>
              <th className="py-2">Marital Status</th>
              <th className="py-2">Member Type</th>
              <th className="w-20 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/60">
              <td className="py-3 text-ink-subtle">1</td>
              <td className="py-3 font-medium text-interactive-500">
                {fullName || "—"} <Badge variant="default" className="ml-1.5 align-middle">Family Head</Badge>
              </td>
              <td className="py-3 text-ink">Self</td>
              <td className="py-3 text-ink">{GENDER_LABEL[gender] || "—"}</td>
              <td className="py-3 text-ink">{watch("date_of_birth") || "—"}</td>
              <td className="py-3 text-ink">{age ?? "—"}</td>
              <td className="py-3 text-ink">{MARITAL_LABEL[watch("marital_status")] || "—"}</td>
              <td className="py-3 text-ink">Individual</td>
              <td className="py-3" />
            </tr>
            {familyMemberFields.map((m, idx) => (
              <tr key={m.id} className="border-b border-border/60">
                <td className="py-3 text-ink-subtle">{idx + 2}</td>
                <td className="py-3 font-medium text-interactive-500">{m.name}</td>
                <td className="py-3 text-ink">{m.relationship}</td>
                <td className="py-3 text-ink">{GENDER_LABEL[m.gender] || "—"}</td>
                <td className="py-3 text-ink">{m.date_of_birth}</td>
                <td className="py-3 text-ink">{calculateAge(m.date_of_birth)}</td>
                <td className="py-3 text-ink">{MARITAL_LABEL[m.marital_status] || "—"}</td>
                <td className="py-3 text-ink">Individual</td>
                <td className="py-3">
                  <div className="flex justify-end gap-1.5">
                    <button type="button" onClick={() => onEditMember(idx)} className="flex h-8 w-8 items-center justify-center rounded-md text-success-600 hover:bg-surface-muted">
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button type="button" onClick={() => onRemoveMember(idx)} className="flex h-8 w-8 items-center justify-center rounded-md text-danger-500 hover:bg-surface-muted">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-ink-subtle">
        Showing 1 to {1 + familyMemberFields.length} of {1 + familyMemberFields.length} records
      </p>
      <p className="mt-1 text-sm font-medium text-success-600">Total Members: {1 + familyMemberFields.length}</p>
    {nav}
    </div>
  );
}
