import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

export function StepMemberDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Member Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Select the member and certificate type.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input label="Select Member" required leftIcon={<Search className="h-4 w-4" />} placeholder="Search by name or member ID..." />
        <Input label="Member ID" disabled placeholder="Auto populated" />
        <Input label="Date of Birth" placeholder="Select date" type="date" />
        <FormSelect label="Gender"><option value="">Select gender</option><option>Male</option><option>Female</option></FormSelect>

        <FormSelect label="Certificate Type" required>
          <option>Membership Certificate</option>
          <option>Letter for Bank Purpose</option>
          <option>Letter for Overseas</option>
          <option>Letter for Educational Purpose</option>
        </FormSelect>
        <div>
          <p className="mb-1.5 text-sm font-medium text-ink">Certificate Language <span className="text-danger-500">*</span></p>
          <div className="flex h-10 items-center gap-6">
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="certLanguage" defaultChecked /> English
            </label>
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="certLanguage" /> Tamil
            </label>
          </div>
        </div>
        <div>
          <p className="mb-1.5 text-sm font-medium text-ink">Request Type <span className="text-danger-500">*</span></p>
          <div className="flex h-10 items-center gap-6">
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="requestType" defaultChecked /> New
            </label>
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="requestType" /> Duplicate
            </label>
          </div>
        </div>
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Certificate Details</h3>
      <p className="mb-3 text-xs text-ink-subtle">Enter the details as required for the certificate.</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input label="Certificate Number" disabled placeholder="Auto generated" />
        <Input label="Issue Date" required placeholder="Select date" type="date" />
        <Input label="Expiry Date (Optional)" placeholder="Select date" type="date" />
        <FormSelect label="Valid For"><option value="">Select duration</option><option>3 Months</option><option>6 Months</option><option>1 Year</option></FormSelect>
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Purpose & Address</h3>
      <p className="mb-3 text-xs text-ink-subtle">Provide the purpose for the certificate and delivery address.</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Purpose <span className="text-danger-500">*</span></label>
          <textarea rows={3} placeholder="Enter purpose for the certificate..." maxLength={200}
            className="w-full resize-y rounded-md border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Delivery Address <span className="text-danger-500">*</span></label>
          <textarea rows={3} placeholder="Enter delivery address..." maxLength={300}
            className="w-full resize-y rounded-md border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input label="Contact Person (Optional)" placeholder="Enter contact person name" />
        <Input label="Contact Number (Optional)" placeholder="Enter contact number" />
        <Input label="Email (Optional)" type="email" placeholder="Enter email address" />
      </div>
    </div>
  );
}
