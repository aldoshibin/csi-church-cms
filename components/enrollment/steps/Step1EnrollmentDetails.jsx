"use client";

import { Users } from "lucide-react";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { REFERRED_BY_OPTIONS, SOURCE_OF_INFORMATION_OPTIONS, REASON_FOR_JOINING_OPTIONS, MEMBERSHIP_TYPE_OPTIONS, PREFERRED_LANGUAGE_OPTIONS } from "@/utils/constants";
import { FaUsers } from "react-icons/fa";
export default function Step1EnrollmentDetails({ form , nav }) {
  const { register, formState: { errors } } = form;

  return (
    <div>
      <h2 className="font-display text-[22px] font-semibold text-[#00796b]">Enrollment Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the basic enrollment information for the new member.</p>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input label="Enrollment Date" type="date" required error={errors.enrollment_date?.message} {...register("enrollment_date")} />
        <Select label="Referred By" error={errors.referred_by?.message} {...register("referred_by")}>
          <option value="">Select referrer</option>
          {REFERRED_BY_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Select label="Source of Information" required error={errors.source_of_information?.message} {...register("source_of_information")}>
          <option value="">Select source</option>
          {SOURCE_OF_INFORMATION_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <Select label="Reason for Joining" required error={errors.reason_for_joining?.message} {...register("reason_for_joining")}>
          <option value="">Select reason</option>
          {REASON_FOR_JOINING_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Select label="Membership Type" required error={errors.membership_type?.message} {...register("membership_type")}>
          {MEMBERSHIP_TYPE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Select label="Preferred Language" error={errors.preferred_language?.message} {...register("preferred_language")}>
          {PREFERRED_LANGUAGE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
      </div>

      <div className="my-5 flex gap-3 rounded-lg bg-white border p-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#EEF5FF] text-interactive-500">
          <FaUsers className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#00796b]">Welcome Note</p>
          <p className="text-xs text-[#4F5C82]">
            We are delighted that you are choosing to become a part of CSI St. John&apos;s Church. Please fill in the details and our team will get in touch with you.
          </p>
        </div>
      </div>

      <Textarea label="Notes" rows={2} placeholder="Enter any notes about this enrollment" error={errors.enrollment_notes?.message} {...register("enrollment_notes")} />
    {nav}
    </div>
  );
}
