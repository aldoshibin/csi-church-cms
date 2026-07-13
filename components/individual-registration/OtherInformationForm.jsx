"use client";

import { Input, Select, Textarea } from "@/components/ui/Input";
import { EDUCATION_OPTIONS } from "@/utils/constants";

export default function OtherInformationForm({ form }) {
  const { register, formState: { errors } } = form;

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="mb-5 font-display text-base font-semibold text-ink">Other Information</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Select label="Education" error={errors.education?.message} {...register("education")}>
          <option value="">Select education</option>
          {EDUCATION_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <Input label="Workplace / School" placeholder="Enter workplace / school" error={errors.workplace_or_school?.message} {...register("workplace_or_school")} />
        <Input label="Skills / Talents" placeholder="Enter skills or talents" error={errors.skills_talents?.message} {...register("skills_talents")} />

        <div className="md:col-span-3">
          <Textarea label="Notes" rows={2} placeholder="Enter any additional notes" error={errors.notes?.message} {...register("notes")} />
        </div>
      </div>
    </section>
  );
}
