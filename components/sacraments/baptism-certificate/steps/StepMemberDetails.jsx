import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepMemberDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Member Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the details of the member who was baptized.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Member Name" required placeholder="Enter full name" />
        <Input label="Member ID" disabled placeholder="Auto-generated" />

        <FormSelect label="Gender" required><option value="">Select Gender</option><option>Male</option><option>Female</option></FormSelect>
        <Input label="Date of Birth" required type="date" />

        <Input label="Place of Birth" placeholder="Enter place of birth" />
        <Input label="Phone Number" placeholder="Enter phone number" />
      </div>

      <div className="mt-4">
        <Input label="Email" type="email" placeholder="Enter email address" />
      </div>

      <div className="mt-4">
        <FormTextarea label="Address" required placeholder="Enter complete address" />
      </div>

      <div className="mt-5 rounded-lg border border-border bg-surface-canvas p-4">
        <h3 className="mb-3 text-sm font-bold text-ink">Family Information</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input label="Father's Name" placeholder="Enter father's name" />
          <Input label="Mother's Name" placeholder="Enter mother's name" />
        </div>
        <div className="mt-4">
          <Input label="Family ID" leftIcon={<Search className="h-4 w-4" />} placeholder="Search family..." />
        </div>
      </div>
    </div>
  );
}
