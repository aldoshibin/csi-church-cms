"use client";

import { Controller } from "react-hook-form";
import { Input, Select } from "@/components/ui/Input";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { GENDER_OPTIONS, MARITAL_STATUS_OPTIONS, BLOOD_GROUP_OPTIONS, NATIONALITY_OPTIONS } from "@/utils/constants";

export default function PersonalInformationForm({ form, age }) {
  const { register, control, formState: { errors } } = form;

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="mb-5 font-display text-base font-semibold text-ink">Personal Information</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input label="First Name" required placeholder="Enter first name" error={errors.first_name?.message} {...register("first_name")} />
        <Input label="Middle Name" placeholder="Enter middle name" error={errors.middle_name?.message} {...register("middle_name")} />
        <Input label="Last Name" required placeholder="Enter last name" error={errors.last_name?.message} {...register("last_name")} />

        <Select label="Gender" required error={errors.gender?.message} {...register("gender")}>
          <option value="">Select gender</option>
          {GENDER_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>

        <Input label="Date of Birth" type="date" required error={errors.date_of_birth?.message} {...register("date_of_birth")} />

        <Input label="Age" value={age ?? ""} placeholder="Auto calculated" disabled readOnly />

        <Select label="Marital Status" required error={errors.marital_status?.message} {...register("marital_status")}>
          <option value="">Select marital status</option>
          {MARITAL_STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>

        <Select label="Blood Group" error={errors.blood_group?.message} {...register("blood_group")}>
          <option value="">Select blood group</option>
          {BLOOD_GROUP_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <Input label="Email" type="email" placeholder="Enter email address" error={errors.email?.message} {...register("email")} />

        <Controller
          control={control}
          name="phone_number"
          render={({ field }) => (
            <PhoneInput label="Mobile Number" required value={field.value || ""} onChange={field.onChange} error={errors.phone_number?.message} />
          )}
        />

        <Controller
          control={control}
          name="alternate_phone_number"
          render={({ field }) => (
            <PhoneInput label="Alternate Number" value={field.value || ""} onChange={field.onChange} error={errors.alternate_phone_number?.message} />
          )}
        />

        <Select label="Nationality" error={errors.nationality?.message} {...register("nationality")}>
          {NATIONALITY_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
      </div>
    </section>
  );
}
