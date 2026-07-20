import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepFamilyDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Family Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Please provide the details of the deceased's family and next of kin.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Input label="Spouse Name (If applicable)" placeholder="Enter spouse name" />
        <Input label="Son / Daughter (Optional)" placeholder="Enter names, comma separated" />
        <FormSelect label="Relationship of Contact Person" required><option value="">Select relationship</option><option>Son</option><option>Daughter</option><option>Spouse</option><option>Sibling</option><option>Other</option></FormSelect>

        <Input label="Contact Person Name" required placeholder="Enter contact person name" />
        <Input label="Phone" required placeholder="Enter phone number" />
        <Input label="Email (Optional)" type="email" placeholder="Enter email address" />
      </div>

      <div className="mt-4">
        <FormTextarea label="Address" required rows={2} maxLength={300} placeholder="Enter family address" />
      </div>

      <div className="mt-4">
        <FormTextarea label="Other Family Members (Optional)" rows={2} maxLength={300} placeholder="Enter other family members and relationships" />
      </div>
    </div>
  );
}
