"use client";

import { Controller } from "react-hook-form";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { PhoneInput } from "@/components/ui/PhoneInput";
import HeadOfFamilySearch from "./HeadOfFamilySearch";

const RELATIONSHIP_OPTIONS = ["Head", "Spouse", "Son", "Daughter", "Father", "Mother", "Brother", "Sister", "Other"];
const MARITAL_STATUS_OPTIONS = ["SINGLE", "MARRIED", "WIDOWED", "DIVORCED", "SEPARATED"];
const FAMILY_TYPE_OPTIONS = [
  { value: "NUCLEAR", label: "Nuclear Family" },
  { value: "JOINT", label: "Joint Family" },
  { value: "SINGLE", label: "Single Member" },
  { value: "OTHER", label: "Other" },
];
const PREFERRED_LANGUAGE_OPTIONS = ["English", "Tamil", "Malayalam", "Hindi", "Telugu", "Kannada"];
// TODO: replace with churches fetched from a church/branch service once one exists.
// Using church_id = user's own church for now (matches MemberForm's default).

export default function FamilyDetailsForm({ form }) {
  const { register, control, formState: { errors } } = form;

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="mb-5 font-display text-base font-semibold text-ink">Family Details</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input label="Family ID (Auto)" value="Auto generated" disabled readOnly />

        <Input
          label="Date of Registration"
          type="date"
          required
          error={errors.registration_date?.message}
          {...register("registration_date")}
        />

        <Select label="Preferred Language" {...register("preferred_language")}>
          {PREFERRED_LANGUAGE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <HeadOfFamilySearch control={control} name="head_of_family" errors={errors} />

        <Select
          label="Relationship"
          required
          error={errors.relationship_of_head?.message}
          {...register("relationship_of_head")}
        >
          <option value="">Select Relationship</option>
          {RELATIONSHIP_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <Input label="Email" type="email" placeholder="email@example.com" error={errors.email?.message} {...register("email")} />

        <Controller
          control={control}
          name="phone_number"
          render={({ field }) => (
            <PhoneInput label="Phone Number" required value={field.value || ""} onChange={field.onChange} error={errors.phone_number?.message} />
          )}
        />

        <Controller
          control={control}
          name="alternate_phone"
          render={({ field }) => (
            <PhoneInput label="Alternate Phone" value={field.value || ""} onChange={field.onChange} error={errors.alternate_phone?.message} />
          )}
        />

        <Select label="Marital Status" error={errors.marital_status?.message} {...register("marital_status")}>
          <option value="">Select Status</option>
          {MARITAL_STATUS_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt.charAt(0) + opt.slice(1).toLowerCase()}</option>
          ))}
        </Select>

        <div className="md:col-span-2">
          <Textarea label="Address" required rows={2} placeholder="Enter full address" error={errors.address_line1?.message} {...register("address_line1")} />
        </div>

        <Input label="Pincode" placeholder="Enter pincode" error={errors.pincode?.message} {...register("pincode")} />

        <Select label="Family Type" required error={errors.family_type?.message} {...register("family_type")}>
          {FAMILY_TYPE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>

        <Input label="City" placeholder="Enter city" error={errors.city?.message} {...register("city")} />

        <Input
          label="Family Category"
          placeholder="e.g. General, Senior Citizen Family"
          helperText="Not yet a backend field — confirm before relying on it."
          error={errors.family_category?.message}
          {...register("family_category")}
        />

        <Input label="Date of Marriage" type="date" error={errors.date_of_marriage?.message} {...register("date_of_marriage")} />

        <input type="hidden" {...register("church_id")} />

        <div className="md:col-span-3">
          <Textarea label="Notes" rows={2} placeholder="Enter any additional notes about the family" error={errors.notes?.message} {...register("notes")} />
        </div>
      </div>
    </section>
  );
}
