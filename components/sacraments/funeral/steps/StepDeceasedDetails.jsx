import { UploadCloud } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepDeceasedDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Deceased Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Please provide the details of the deceased person.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input label="Full Name of Deceased" required placeholder="Enter full name" />
        <FormSelect label="Gender" required><option value="">Select gender</option><option>Male</option><option>Female</option></FormSelect>
        <Input label="Date of Birth" placeholder="DD MMM YYYY" type="date" />
        <Input label="Age (at time of death)" placeholder="Enter age" />

        <FormSelect label="Religion" required><option value="">Select religion</option></FormSelect>
        <FormSelect label="Denomination"><option value="">Select denomination</option></FormSelect>
        <Input label="Occupation" placeholder="Enter occupation" />
        <FormSelect label="Marital Status"><option value="">Select marital status</option></FormSelect>

        <div className="sm:col-span-2 lg:col-span-1">
          <FormTextarea label="Address" rows={1} maxLength={300} placeholder="Enter address" />
        </div>
        <Input label="City / Town" placeholder="Enter city / town" />
        <Input label="State" placeholder="Enter state" />
        <Input label="Pincode" placeholder="Enter pincode" />

        <Input label="Phone / Mobile" placeholder="Enter mobile number" />
        <Input label="Email (Optional)" type="email" placeholder="Enter email address" />
        <Input label="National ID (Optional)" placeholder="Enter ID number" />
        <FormSelect label="Blood Group (Optional)"><option value="">Select blood group</option></FormSelect>
      </div>

      <p className="mb-2 mt-6 text-sm font-medium text-ink">Profile Photo (Optional)</p>
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border py-8">
        <UploadCloud className="h-6 w-6 text-ink-subtle" />
        <p className="text-sm text-ink-subtle">Click to upload photo or drag and drop</p>
        <p className="text-xs text-ink-subtle">PNG, JPG or JPEG (Max. 2MB)</p>
      </div>
    </div>
  );
}
