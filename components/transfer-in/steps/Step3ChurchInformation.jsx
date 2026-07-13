"use client";

import { Input, Select } from "@/components/ui/Input";
import { BRANCH_CHURCH_OPTIONS, TRANSFER_STATUS_OPTIONS, TRANSFER_CONFIRMATION_OPTIONS, MEMBERSHIP_TYPE_OPTIONS } from "@/utils/constants";

export default function Step3ChurchInformation({ form }) {
  const { register, formState: { errors } } = form;

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="font-display text-base font-semibold text-ink">Church Information</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter previous church and receiving branch details.</p>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input label="From Parish / Church" required placeholder="Enter previous parish / church" error={errors.from_parish_church?.message} {...register("from_parish_church")} />
        <Input label="From Diocese" placeholder="Enter diocese" {...register("from_diocese")} />
        <Select label="Receiving Branch" required error={errors.receiving_branch?.message} {...register("receiving_branch")}>
          <option value="">Select branch</option>
          {BRANCH_CHURCH_OPTIONS.map((opt, i) => (
            <option key={opt} value={i + 1}>{opt}</option>
          ))}
        </Select>

        <Input label="Pastor / Vicar Name" placeholder="Enter pastor name" {...register("pastor_vicar_name")} />
        <Input label="Transfer Certificate No." placeholder="Enter certificate number" {...register("transfer_certificate_no")} />
        <Input label="Certificate Date" type="date" {...register("certificate_date")} />

        <Select label="Baptism Status" {...register("baptism_status")}>
          {TRANSFER_STATUS_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Select label="Confirmation Status" {...register("confirmation_status")}>
          {TRANSFER_CONFIRMATION_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Select label="Membership Category" {...register("membership_category")}>
          {MEMBERSHIP_TYPE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
      </div>
    </section>
  );
}
