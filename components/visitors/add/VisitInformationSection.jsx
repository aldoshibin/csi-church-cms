"use client";

import { Input, Select, Textarea } from "@/components/ui/Input";
import { VISITOR_PURPOSE_OPTIONS, VISITOR_SOURCE_OPTIONS } from "@/utils/constants";

export default function VisitInformationSection({ form }) {
  const { register, watch, formState: { errors } } = form;
  const isReturning = watch("is_returning");

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="mb-5 font-display text-base font-semibold text-interactive-500">Visit Information</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-4">
        <Input label="Visit Date" type="date" required error={errors.visit_date?.message} {...register("visit_date")} />
        <Input label="Visit Time" type="time" error={errors.visit_time?.message} {...register("visit_time")} />
        <Select label="Purpose / Source" required error={errors.purpose_source?.message} {...register("purpose_source")}>
          <option value="">Select purpose / source</option>
          {VISITOR_PURPOSE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Select label="How did you hear about us?" error={errors.how_did_you_hear?.message} {...register("how_did_you_hear")}>
          <option value="">Select an option</option>
          {VISITOR_SOURCE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Are you a returning visitor?</label>
          <div className="flex gap-6 pt-1">
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" value="YES" checked={isReturning === "YES"} className="h-4 w-4 border-border text-interactive-500 focus-visible:ring-interactive-500" {...register("is_returning")} />
              Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" value="NO" checked={isReturning === "NO"} className="h-4 w-4 border-border text-interactive-500 focus-visible:ring-interactive-500" {...register("is_returning")} />
              No
            </label>
          </div>
        </div>
        <Textarea label="Additional Notes" rows={2} placeholder="Any additional information about the visit" {...register("additional_notes")} />
      </div>
    </section>
  );
}
