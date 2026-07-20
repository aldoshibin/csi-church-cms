"use client";

import { Input, Select } from "@/components/ui/Input";
import { NATIONALITY_SELECT_OPTIONS, RELIGION_OPTIONS } from "@/utils/constants";

function ParentFields({ register, errors, prefix, title }) {
  return (
    <div className="mb-6">
      <h3 className="mb-4 text-sm font-semibold text-interactive-500">{title}</h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input label="Full Name" required placeholder={`Enter ${title.split(" /")[0].toLowerCase()} full name`} error={errors[`${prefix}_name`]?.message} {...register(`${prefix}_name`)} />
        <Input label="Occupation" placeholder="Enter occupation" {...register(`${prefix}_occupation`)} />
        <Input label="Phone Number" required placeholder="Enter phone number" error={errors[`${prefix}_phone`]?.message} {...register(`${prefix}_phone`)} />

        <Input label="Email" type="email" placeholder="Enter email address" error={errors[`${prefix}_email`]?.message} {...register(`${prefix}_email`)} />
        <Select label="Nationality" {...register(`${prefix}_nationality`)}>
          {NATIONALITY_SELECT_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Select label="Religion" {...register(`${prefix}_religion`)}>
          {RELIGION_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default function Step2ParentsGuardians({ form, nav }) {
  const { register, watch, formState: { errors } } = form;
  const isGuardian = watch("mother_is_guardian");

  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink">Parents / Guardians Information</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the details of the child's parents or legal guardians.</p>

      <ParentFields register={register} errors={errors} prefix="father" title="Father / Guardian Details" />
      <ParentFields register={register} errors={errors} prefix="mother" title="Mother / Guardian Details" />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Is the mother the legal guardian?</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="radio" value="YES" checked={isGuardian === "YES"} className="h-4 w-4 border-border text-interactive-500 focus-visible:ring-interactive-500" {...register("mother_is_guardian")} />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="radio" value="NO" checked={isGuardian === "NO"} className="h-4 w-4 border-border text-interactive-500 focus-visible:ring-interactive-500" {...register("mother_is_guardian")} />
            No
          </label>
        </div>
      </div>

      <div className="mt-5 rounded-md bg-interactive-50 p-3 text-xs text-interactive-700">
        If the child is under legal guardianship, please provide guardian details in the next step.
      </div>

      {nav}
    </div>
  );
}
