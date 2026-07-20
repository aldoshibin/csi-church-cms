import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepSponsorDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Sponsor Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the sponsor's information.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Sponsor Name" required placeholder="Enter sponsor full name" />
        <FormSelect label="Relationship to Confirmand" required><option value="">Select relationship</option><option>Uncle</option><option>Aunt</option><option>Godfather</option><option>Godmother</option></FormSelect>

        <FormSelect label="Gender" required><option value="">Select gender</option><option>Male</option><option>Female</option></FormSelect>
        <Input label="Date of Birth" required placeholder="DD/MM/YYYY" type="date" />

        <FormSelect label="Marital Status" required><option value="">Select marital status</option><option>Married</option><option>Single</option><option>Widowed</option></FormSelect>
        <Input label="Occupation" placeholder="Enter occupation" />
      </div>

      <div className="mt-4">
        <FormTextarea label="Address" required placeholder="Enter complete address" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Phone Number" required placeholder="Enter phone number" />
        <Input label="Email" type="email" placeholder="Enter email address" />
      </div>

      <div className="mt-4">
        <FormSelect label="Parish / Church" required><option value="">Select parish / church</option></FormSelect>
      </div>

      <div className="mt-4">
        <FormTextarea label="Remarks (if any)" placeholder="Enter any remarks" />
      </div>
    </div>
  );
}
