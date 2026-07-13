"use client";

import { Input, Select, Textarea } from "@/components/ui/Input";
import { INDIAN_STATES } from "@/utils/constants";

export default function AddressInformationForm({ form }) {
  const { register, formState: { errors } } = form;

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="mb-5 font-display text-base font-semibold text-ink">Address Information</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Textarea label="Address Line 1" required rows={1} placeholder="Enter address line 1" error={errors.address_line1?.message} {...register("address_line1")} />
        <Textarea label="Address Line 2" rows={1} placeholder="Enter address line 2" error={errors.address_line2?.message} {...register("address_line2")} />
        <Input label="Country" required error={errors.country?.message} {...register("country")} />

        <Select label="State" required error={errors.state?.message} {...register("state")}>
          <option value="">Select state</option>
          {INDIAN_STATES.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <Input label="District" required placeholder="Enter district" error={errors.district?.message} {...register("district")} />
        <Input label="City" required placeholder="Enter city" error={errors.city?.message} {...register("city")} />
        <Input label="Pincode" required placeholder="Enter pincode" error={errors.pincode?.message} {...register("pincode")} />
      </div>
    </section>
  );
}
