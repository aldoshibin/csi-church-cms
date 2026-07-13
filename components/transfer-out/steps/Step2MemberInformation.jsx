"use client";

import * as React from "react";
import { Controller } from "react-hook-form";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { GENDER_OPTIONS, MARITAL_STATUS_OPTIONS, BLOOD_GROUP_OPTIONS, INDIAN_STATES, DISTRICTS, FAMILY_RELATIONSHIP_OPTIONS, TRANSFER_SCOPE_OPTIONS } from "@/utils/constants";

function calculateAge(dob) {
  if (!dob) return "";
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return "";
  const age = Math.floor((Date.now() - birth.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
  return age >= 0 ? age : "";
}

export default function Step2MemberInformation({ form }) {
  const { register, control, watch, formState: { errors } } = form;
  const age = React.useMemo(() => calculateAge(watch("date_of_birth")), [watch("date_of_birth")]);

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="font-display text-base font-semibold text-ink">Member Information</h2>
      <p className="mb-5 text-sm text-ink-subtle">Verify member personal, contact, and family details before proceeding.</p>

      <h3 className="mb-4 text-sm font-semibold text-interactive-500">Personal Details</h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-4">
        <Input label="First Name" required placeholder="Enter first name" error={errors.first_name?.message} {...register("first_name")} />
        <Input label="Middle Name" placeholder="Enter middle name" {...register("middle_name")} />
        <Input label="Last Name" required placeholder="Enter last name" error={errors.last_name?.message} {...register("last_name")} />
        <Select label="Gender" required error={errors.gender?.message} {...register("gender")}>
          <option value="">Select gender</option>
          {GENDER_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>

        <Input label="Date of Birth" type="date" required error={errors.date_of_birth?.message} {...register("date_of_birth")} />
        <Input label="Age" value={age} placeholder="Auto calculated" disabled readOnly />
        <Select label="Marital Status" required error={errors.marital_status?.message} {...register("marital_status")}>
          <option value="">Select status</option>
          {MARITAL_STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>
        <Select label="Blood Group" {...register("blood_group")}>
          <option value="">Select blood group</option>
          {BLOOD_GROUP_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <Controller
          control={control}
          name="phone_number"
          render={({ field }) => (
            <PhoneInput label="Mobile Number" required value={field.value || ""} onChange={field.onChange} error={errors.phone_number?.message} />
          )}
        />
        <Input label="Email Address" type="email" placeholder="Enter email address" error={errors.email?.message} {...register("email")} />
        <Input label="Membership No." required placeholder="Enter membership no." error={errors.membership_number?.message} {...register("membership_number")} />
        <Input label="Family ID" placeholder="Enter family ID" {...register("family_id")} />
      </div>

      <h3 className="mb-4 mt-6 text-sm font-semibold text-interactive-500">Address Details</h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input label="Address Line 1" required placeholder="Enter address line 1" error={errors.address_line1?.message} {...register("address_line1")} />
        <Input label="Address Line 2" placeholder="Enter address line 2" {...register("address_line2")} />
        <Input label="City" required placeholder="Enter city" error={errors.city?.message} {...register("city")} />

        <Select label="State" required error={errors.state?.message} {...register("state")}>
          <option value="">Select state</option>
          {INDIAN_STATES.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Select label="District" required error={errors.district?.message} {...register("district")}>
          <option value="">Select district</option>
          {DISTRICTS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Input label="Pincode" required placeholder="Enter pincode" error={errors.pincode?.message} {...register("pincode")} />
      </div>

      <h3 className="mb-4 mt-6 text-sm font-semibold text-interactive-500">Family Details</h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-4">
        <Input label="Family Head Name" placeholder="Enter family head" {...register("family_head_name")} />
        <Select label="Relationship with Head" {...register("relationship_with_head")}>
          {FAMILY_RELATIONSHIP_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Input label="No. of Family Members" type="number" min={0} {...register("family_member_count")} />
        <Select label="Transfer Scope" {...register("transfer_scope")}>
          {TRANSFER_SCOPE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
      </div>
    </section>
  );
}
