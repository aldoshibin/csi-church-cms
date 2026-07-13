"use client";

import { Input, Select } from "@/components/ui/Input";
import { INDIAN_STATES, DISTRICTS, CERTIFICATE_DELIVERY_OPTIONS } from "@/utils/constants";

export default function Step3DestinationChurch({ form }) {
  const { register, formState: { errors } } = form;

  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="font-display text-base font-semibold text-ink">Destination Church Information</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the destination church and certificate dispatch details.</p>

      <h3 className="mb-4 text-sm font-semibold text-interactive-500">Destination Church Details</h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input label="Destination Church Name" required placeholder="Enter destination church" error={errors.destination_church_name?.message} {...register("destination_church_name")} />
        <Input label="Diocese / Parish" required placeholder="Enter diocese / parish" error={errors.destination_diocese_parish?.message} {...register("destination_diocese_parish")} />
        <Input label="Church Address" required placeholder="Enter church address" error={errors.destination_church_address?.message} {...register("destination_church_address")} />

        <Select label="State" required error={errors.destination_state?.message} {...register("destination_state")}>
          <option value="">Select state</option>
          {INDIAN_STATES.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Select label="District" required error={errors.destination_district?.message} {...register("destination_district")}>
          <option value="">Select district</option>
          {DISTRICTS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <Select label="Country" required error={errors.destination_country?.message} {...register("destination_country")}>
          <option>India</option>
          <option>Other</option>
        </Select>
      </div>

      <h3 className="mb-4 mt-6 text-sm font-semibold text-interactive-500">Destination Church Contact</h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input label="Contact Person" placeholder="Enter contact person" {...register("destination_contact_person")} />
        <Input label="Designation" placeholder="Enter designation" {...register("destination_designation")} />
        <Input label="Email Address" type="email" placeholder="Enter email" error={errors.destination_email?.message} {...register("destination_email")} />

        <Input label="Mobile Number" placeholder="Enter mobile number" {...register("destination_mobile")} />
        <Input label="Landline Number" placeholder="Enter landline" {...register("destination_landline")} />
        <Select label="Certificate Delivery" {...register("certificate_delivery")}>
          {CERTIFICATE_DELIVERY_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
      </div>

      <h3 className="mb-4 mt-6 text-sm font-semibold text-interactive-500">Current Church Release Details</h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-3">
        <Input label="Current Branch / Church" required error={errors.current_branch_church?.message} {...register("current_branch_church")} />
        <Input label="Date of Membership" type="date" {...register("date_of_membership")} />
        <Input label="Transfer Certificate No." value="Auto generated" disabled readOnly />

        <Input label="Baptism Register No." placeholder="Enter baptism register no." {...register("baptism_register_no")} />
        <Input label="Confirmation Date" type="date" {...register("confirmation_date")} />
        <Input label="Communion Date" type="date" {...register("communion_date")} />
      </div>
    </section>
  );
}
