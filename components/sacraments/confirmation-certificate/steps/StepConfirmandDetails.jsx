import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepConfirmandDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Confirmand Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the confirmand's personal information.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Full Name" required placeholder="Enter full name" />
        <Input label="Date of Birth" required placeholder="DD/MM/YYYY" type="date" />

        <FormSelect label="Gender" required><option value="">Select gender</option><option>Male</option><option>Female</option></FormSelect>
        <Input label="Baptism Date" placeholder="DD/MM/YYYY" type="date" />

        <FormSelect label="Baptism Church / Parish" required><option value="">Select church / parish</option></FormSelect>
        <Input label="Baptism Certificate No." placeholder="Enter certificate number" />
      </div>

      <div className="mt-4">
        <FormTextarea label="Address" required placeholder="Enter complete address" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Phone Number" required placeholder="Enter phone number" />
        <Input label="Email" type="email" placeholder="Enter email address" />
      </div>

      <div className="mt-4">
        <FormTextarea label="Remarks (if any)" placeholder="Enter any remarks" />
      </div>
    </div>
  );
}
