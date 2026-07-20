"use client";

import { Input, Select, Textarea } from "@/components/ui/Input";
import {
  PLACE_OF_BAPTISM_OPTIONS, DENOMINATION_OPTIONS, BAPTISM_TYPE_OPTIONS, BAPTISM_SERVICE_TYPE_OPTIONS,
} from "@/utils/constants";

export default function Step3BaptismDetails({ form, nav }) {
  const { register, watch, formState: { errors } } = form;
  const baptismType = watch("baptism_type");

  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink">Baptism Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the details of the baptism ceremony.</p>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input label="Date of Baptism" type="date" required error={errors.baptism_date?.message} {...register("baptism_date")} />
        <Input label="Time of Baptism" type="time" {...register("baptism_time")} />
        <Select label="Place of Baptism" required error={errors.place_of_baptism?.message} {...register("place_of_baptism")}>
          <option value="">Select place</option>
          {PLACE_OF_BAPTISM_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <Select label="Church" required error={errors.church_id?.message} {...register("church_id")}>
          <option value="">Select church</option>
          <option value="1">St. John's Church</option>
          <option value="2">St. Peter's Church</option>
          <option value="3">St. Mary's Church</option>
        </Select>
        <Input label="Officiated By (Priest / Pastor)" required placeholder="Enter priest / pastor name" error={errors.officiated_by?.message} {...register("officiated_by")} />
        <Select label="Denomination (if applicable)" {...register("denomination")}>
          <option value="">Select denomination</option>
          {DENOMINATION_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <div className="md:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-ink">Type of Baptism <span className="text-danger-500">*</span></label>
          <div className="flex flex-wrap gap-6 pt-1.5">
            {BAPTISM_TYPE_OPTIONS.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 text-sm text-ink">
                <input
                  type="radio"
                  value={opt.value}
                  checked={baptismType === opt.value}
                  className="h-4 w-4 border-border text-interactive-500 focus-visible:ring-interactive-500"
                  {...register("baptism_type")}
                />
                {opt.label}
              </label>
            ))}
          </div>
          {errors.baptism_type && <p className="mt-1.5 text-xs text-danger-600">{errors.baptism_type.message}</p>}
        </div>
        <Input label="Baptism Certificate No." placeholder="Enter certificate number" {...register("baptism_certificate_no")} />
      </div>

      <h3 className="mb-4 mt-6 text-sm font-semibold text-interactive-500">Baptism Service Details</h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Select label="Baptism Service Type" {...register("baptism_service_type")}>
          <option value="">Select service type</option>
          {BAPTISM_SERVICE_TYPE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Input label="Bible Reading" placeholder="Enter bible reading (e.g., John 3:16)" {...register("bible_reading")} />
        <Input label="Sermon Title" placeholder="Enter sermon title" {...register("sermon_title")} />
      </div>

      <div className="mt-5">
        <Textarea label="Remarks (if any)" rows={2} placeholder="Enter any additional remarks" {...register("remarks")} />
      </div>

      <div className="mt-5 rounded-md bg-interactive-50 p-3 text-xs text-interactive-700">
        Please ensure all baptism details are accurate before proceeding to the next step.
      </div>

      {nav}
    </div>
  );
}
