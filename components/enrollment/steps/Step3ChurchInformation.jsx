"use client";

import { Input, Select, Textarea } from "@/components/ui/Input";
import {
  BRANCH_CHURCH_OPTIONS, WORSHIP_SERVICE_PREFERENCE_OPTIONS, MEMBERSHIP_TYPE_OPTIONS,
  CONFIRMATION_STATUS_OPTIONS, COMMUNION_STATUS_OPTIONS, MINISTRY_INTEREST_OPTIONS,
} from "@/utils/constants";

function RadioRow({ name, options, register, watch }) {
  const value = watch(name);
  return (
    <div className="flex flex-wrap gap-5">
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center gap-2 text-sm text-ink">
          <input type="radio" value={opt.value} checked={value === opt.value} className="h-4 w-4 border-border text-interactive-500 focus-visible:ring-interactive-500" {...register(name)} />
          {opt.label}
        </label>
      ))}
    </div>
  );
}

export default function Step3ChurchInformation({ form , nav }) {
  const { register, watch, formState: { errors } } = form;
  const baptized = watch("baptized");
  const ministryInterests = watch("ministry_interests") || [];

  const toggleMinistry = (label) => {
    const set = new Set(ministryInterests);
    set.has(label) ? set.delete(label) : set.add(label);
    form.setValue("ministry_interests", Array.from(set));
  };

  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink">Church Information</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter church and membership details.</p>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Select label="Branch / Church" required error={errors.church_id?.message} {...register("church_id")}>
          <option value="">Select branch / church</option>
          {BRANCH_CHURCH_OPTIONS.map((opt, i) => (
            <option key={opt} value={i + 1}>{opt}</option>
          ))}
        </Select>
        <Select label="Worship Service Preference" {...register("worship_service_preference")}>
          <option value="">Select preference</option>
          {WORSHIP_SERVICE_PREFERENCE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Select label="Church Membership Type" required error={errors.membership_type?.message} {...register("membership_type")}>
          {MEMBERSHIP_TYPE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <Input label="Date of Joining" type="date" required error={errors.joined_date?.message} {...register("joined_date")} />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Baptised <span className="text-danger-500">*</span></label>
          <RadioRow name="baptized" options={[{ value: "YES", label: "Yes" }, { value: "NO", label: "No" }]} register={register} watch={watch} />
          {errors.baptized && <p className="mt-1.5 text-xs text-danger-600">{errors.baptized.message}</p>}
        </div>
        <Input label="Baptism Date" type="date" disabled={baptized !== "YES"} {...register("baptism_date")} />
        <Input label="Baptism Place / Church" placeholder="Enter church name" disabled={baptized !== "YES"} {...register("baptism_place")} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Confirmation Status</label>
          <RadioRow name="confirmation_status" options={CONFIRMATION_STATUS_OPTIONS} register={register} watch={watch} />
        </div>
        <Input label="Confirmation Date" type="date" {...register("confirmation_date")} />
        <Input label="Confirmation Place / Church" placeholder="Enter church name" {...register("confirmation_place")} />

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Communion Status</label>
          <RadioRow name="communion_status" options={COMMUNION_STATUS_OPTIONS} register={register} watch={watch} />
        </div>
        <Input label="First Communion Date" type="date" {...register("communion_date")} />
        <Input label="First Communion Place / Church" placeholder="Enter church name" {...register("communion_place")} />
      </div>

      <h3 className="mb-1 mt-6 text-sm font-semibold text-interactive-500">Ministry Interest</h3>
      <p className="mb-3 text-xs text-ink-subtle">Select ministries you are interested in.</p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-5">
        {MINISTRY_INTEREST_OPTIONS.map((label) => (
          <label key={label} className="flex items-center gap-2 text-sm text-ink">
            <input
              type="checkbox"
              checked={ministryInterests.includes(label)}
              onChange={() => toggleMinistry(label)}
              className="h-4 w-4 rounded border-border text-interactive-500 focus-visible:ring-interactive-500"
            />
            {label}
            {label === "Other" && ministryInterests.includes("Other") && (
              <input
                type="text"
                placeholder="Specify"
                {...register("ministry_interest_other")}
                className="h-7 w-24 rounded border border-border px-2 text-xs text-ink"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </label>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="mb-1 text-sm font-semibold text-interactive-500">Additional Information</h3>
        <p className="mb-3 text-xs text-ink-subtle">Any additional information about church involvement or notes.</p>
        <Textarea rows={2} placeholder="Enter additional information" {...register("church_additional_info")} />
      </div>
    {nav}
    </div>
  );
}
