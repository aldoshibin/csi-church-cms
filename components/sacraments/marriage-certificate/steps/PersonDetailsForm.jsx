import { Input } from "@/components/ui/Input";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

export function PersonDetailsForm({ role }) {
  const lower = role.toLowerCase();
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">{role} Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the {lower}'s personal information.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Full Name" required placeholder={`Enter ${lower} full name`} />
        <Input label="Date of Birth" required placeholder="DD/MM/YYYY" type="date" />

        <Input label="Place of Birth" placeholder="Enter place of birth" />
        <FormSelect label="Religion" required><option value="">Select Religion</option><option>Christian</option></FormSelect>

        <Input label="Occupation" placeholder="Enter occupation" />
        <FormSelect label="Marital Status" required><option value="">Select status</option><option>Bachelor</option><option>Spinster</option><option>Divorced</option><option>Widowed</option></FormSelect>

        <Input label="Phone Number" required placeholder="Enter phone number" />
        <Input label="Email" type="email" placeholder="Enter email address" />
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-ink">Address <span className="text-danger-500">*</span></label>
        <textarea
          rows={3}
          maxLength={250}
          placeholder="Enter complete address"
          className="w-full resize-y rounded-md border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10"
        />
      </div>

      <div className="mt-4">
        <FormSelect label="Parish / Church" required><option value="">Select Parish / Church</option></FormSelect>
      </div>

      <div className="mt-4">
        <Input label="Baptism Certificate No. (if available)" placeholder="Enter baptism certificate number" />
      </div>
    </div>
  );
}
