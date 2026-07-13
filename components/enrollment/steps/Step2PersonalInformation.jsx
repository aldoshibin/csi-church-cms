"use client";

import { Controller } from "react-hook-form";
import { Input, Select } from "@/components/ui/Input";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { TITLE_OPTIONS, GENDER_OPTIONS, MARITAL_STATUS_OPTIONS, BLOOD_GROUP_OPTIONS, INDIAN_STATES, DISTRICTS } from "@/utils/constants";

export default function Step2PersonalInformation({ form, age, nav }) {
  const { register, control, formState: { errors } } = form;

  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink">Personal Information</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the personal details of the new member.</p>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-4">
        <Select label="Title" {...register("title")}>
          {TITLE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
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
        <Input label="Age" value={age ?? ""} placeholder="Auto calculated" disabled readOnly />
        <Select label="Blood Group" {...register("blood_group")}>
          <option value="">Select blood group</option>
          {BLOOD_GROUP_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <Select label="Marital Status" required error={errors.marital_status?.message} {...register("marital_status")}>
          <option value="">Select marital status</option>
          {MARITAL_STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>
        <Input label="Spouse Name" placeholder="Enter spouse name" {...register("spouse_name")} />
        <Input label="Anniversary Date" type="date" {...register("anniversary_date")} />
      </div>

      <h3 className="mb-4 mt-6 text-sm font-semibold text-interactive-500">Contact Information</h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
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
          render={({ field }) => <PhoneInput label="Alternate Number" value={field.value || ""} onChange={field.onChange} />}
        />
        <Input label="Email Address" type="email" placeholder="Enter email address" error={errors.email?.message} {...register("email")} />
      </div>

      <h3 className="mb-4 mt-6 text-sm font-semibold text-interactive-500">Identity Information</h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input label="Aadhaar Number" placeholder="Enter aadhaar number" {...register("aadhaar_number")} />
        <Input label="PAN Number" placeholder="Enter PAN number" {...register("pan_number")} />
        <Input label="Passport Number" placeholder="Enter passport number" {...register("passport_number")} />
      </div>

      <h3 className="mb-4 mt-6 text-sm font-semibold text-interactive-500">Address Information</h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input label="Address Line 1" required placeholder="Enter address line 1" error={errors.address_line1?.message} {...register("address_line1")} />
        <Input label="Address Line 2" placeholder="Enter address line 2" {...register("address_line2")} />
        <Input label="Country" required error={errors.country?.message} {...register("country")} />

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
        <Input label="City" required placeholder="Enter city" error={errors.city?.message} {...register("city")} />
        <Input label="Pincode" required placeholder="Enter pincode" error={errors.pincode?.message} {...register("pincode")} />
      </div>
    {nav}
    </div>
  );
}
