"use client";

import { Controller } from "react-hook-form";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { GENDER_OPTIONS } from "@/utils/constants";

export default function Step2MemberInformation({ form }) {
  const { register, control, formState: { errors } } = form;

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="font-display text-base font-semibold text-ink">Member Information</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter or verify the transferring member details.</p>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
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
        <Controller
          control={control}
          name="phone_number"
          render={({ field }) => (
            <PhoneInput label="Mobile Number" required value={field.value || ""} onChange={field.onChange} error={errors.phone_number?.message} />
          )}
        />

        <Input label="Email" type="email" placeholder="Enter email address" error={errors.email?.message} {...register("email")} />
        <Input label="Membership No." placeholder="Auto / previous membership no." error={errors.membership_number?.message} {...register("membership_number")} />
        <Input label="Current Church" required placeholder="Enter current church" error={errors.current_church?.message} {...register("current_church")} />
      </div>

      <div className="mt-5">
        <Textarea label="Address" rows={2} placeholder="Enter full address" error={errors.address?.message} {...register("address")} />
      </div>
    </section>
  );
}
