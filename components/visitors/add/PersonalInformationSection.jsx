"use client";

import { Controller } from "react-hook-form";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { GENDER_OPTIONS, INDIAN_STATES } from "@/utils/constants";

export default function PersonalInformationSection({ form }) {
  const { register, control, formState: { errors } } = form;

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="mb-5 font-display text-base font-semibold text-interactive-500">Personal Information</h2>

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

        <Input label="Date of Birth" type="date" error={errors.date_of_birth?.message} {...register("date_of_birth")} />
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <PhoneInput label="Phone Number" required value={field.value || ""} onChange={field.onChange} error={errors.phone?.message} />
          )}
        />
        <Input label="Email Address" type="email" placeholder="Enter email address" error={errors.email?.message} {...register("email")} />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <div className="md:col-span-1">
          <Textarea label="Address" rows={2} placeholder="Enter full address" error={errors.address?.message} {...register("address")} />
        </div>
        <Input label="City" placeholder="Enter city" error={errors.city?.message} {...register("city")} />
        <Select label="State" error={errors.state?.message} {...register("state")}>
          <option value="">Select state</option>
          {INDIAN_STATES.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
      </div>

      <div className="mt-5 max-w-xs">
        <Input label="Pincode" placeholder="Enter pincode" error={errors.pincode?.message} {...register("pincode")} />
      </div>
    </section>
  );
}
