"use client";

import { Input, Select } from "@/components/ui/Input";
import { BRANCH_CHURCH_OPTIONS, BAPTIZED_OPTIONS, MEMBER_CATEGORY_OPTIONS } from "@/utils/constants";

export default function ChurchInformationForm({ form }) {
  const { register, formState: { errors } } = form;

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="mb-5 font-display text-base font-semibold text-ink">Church Information</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-4">
        <Select label="Branch / Church" required error={errors.church_id?.message} {...register("church_id")}>
          <option value="">Select branch / church</option>
          {BRANCH_CHURCH_OPTIONS.map((opt, i) => (
            <option key={opt} value={i + 1}>{opt}</option>
          ))}
        </Select>

        <Input label="Date of Joining" type="date" required error={errors.joined_date?.message} {...register("joined_date")} />

        <Select label="Baptized" error={errors.baptized?.message} {...register("baptized")}>
          <option value="">Select option</option>
          {BAPTIZED_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>

        <Input label="Baptism Date" type="date" error={errors.baptism_date?.message} {...register("baptism_date")} />

        <Input label="Membership Number" value="Auto generated" disabled readOnly />

        <Select label="Member Category" error={errors.member_category?.message} {...register("member_category")}>
          <option value="">Select category</option>
          {MEMBER_CATEGORY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>

        <div className="md:col-span-2">
          <Input label="Occupation" placeholder="Enter occupation" error={errors.occupation?.message} {...register("occupation")} />
        </div>
      </div>
    </section>
  );
}
