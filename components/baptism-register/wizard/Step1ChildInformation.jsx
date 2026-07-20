"use client";

import { Input, Select, Textarea } from "@/components/ui/Input";
import { GENDER_OPTIONS, NATIONALITY_SELECT_OPTIONS, RELIGION_OPTIONS } from "@/utils/constants";

export default function Step1ChildInformation({ form, nav }) {
  const { register, formState: { errors } } = form;

  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink">Child Information</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the details of the child being baptized.</p>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input label="Child Baptism No." value="Auto-generated" disabled readOnly />
        <Input label="Date of Baptism" type="date" required error={errors.baptism_date?.message} {...register("baptism_date")} />
        <Input label="Time of Baptism" type="time" {...register("baptism_time")} />

        <Input label="Child Full Name" required placeholder="Enter child full name" error={errors.child_full_name?.message} {...register("child_full_name")} />
        <Select label="Gender" required error={errors.gender?.message} {...register("gender")}>
          <option value="">Select gender</option>
          {GENDER_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>
        <Input label="Date of Birth" type="date" required error={errors.date_of_birth?.message} {...register("date_of_birth")} />

        <Input label="Place of Birth" placeholder="Enter place of birth" {...register("place_of_birth")} />
        <Select label="Nationality" {...register("child_nationality")}>
          {NATIONALITY_SELECT_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Select label="Religion" {...register("child_religion")}>
          {RELIGION_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <div className="md:col-span-1">
          <Textarea label="Address" rows={2} placeholder="Enter address" {...register("address")} />
        </div>
        <Input label="City / Town" placeholder="Enter city / town" {...register("city")} />
        <Input label="State" placeholder="Enter state" {...register("state")} />

        <Input label="PIN / ZIP Code" placeholder="Enter PIN / ZIP code" {...register("pincode")} />
        <Select label="Country" {...register("country")}>
          <option>India</option>
          <option>Other</option>
        </Select>
      </div>

      <div className="mt-5 rounded-md bg-interactive-50 p-3 text-xs text-interactive-700">
        Please ensure all information is accurate before proceeding to the next step.
      </div>

      {nav}
    </div>
  );
}
