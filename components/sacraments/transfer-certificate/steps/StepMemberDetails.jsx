import { Info, Plus } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";
import { Button } from "@/components/ui/Button";

export function StepMemberDetails() {
  return (
    <div>
        <h2 className="text-lg font-bold text-ink">Member Details</h2>
        <p className="mb-5 text-sm text-ink-subtle">Select the member and enter the required details.</p>

        <div className="flex items-end gap-3">
          <div className="flex-1">
            <Input label="Select Member" required placeholder="Search by name or member ID..." />
          </div>
          <Button variant="secondary" leftIcon={<Plus className="h-4 w-4" />}>New Member</Button>
        </div>

        <div className="mt-4 flex items-start gap-2 rounded-md border border-interactive-100 bg-interactive-50 px-4 py-2.5 text-[13px] text-interactive-700">
          <Info className="mt-0.5 h-4 w-4 shrink-0" /> Please ensure the member's details are up to date before issuing the certificate.
        </div>

        <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Selected Member Information</h3>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 rounded-lg border border-border bg-surface-canvas p-4 text-[13px] sm:grid-cols-4">
          <div><p className="text-ink-subtle">Member Name</p><p className="font-semibold text-ink">Mr. Thomas Mathew</p></div>
          <div><p className="text-ink-subtle">Member ID</p><p className="font-semibold text-ink">MEM-000125</p></div>
          <div><p className="text-ink-subtle">Date of Birth</p><p className="font-semibold text-ink">15 April 1985</p></div>
          <div><p className="text-ink-subtle">Gender</p><p className="font-semibold text-ink">Male</p></div>
          <div><p className="text-ink-subtle">Phone Number</p><p className="font-semibold text-ink">+91 98765 43210</p></div>
          <div><p className="text-ink-subtle">Email</p><p className="font-semibold text-ink">thomas.mathew@email.com</p></div>
          <div className="col-span-2"><p className="text-ink-subtle">Address</p><p className="font-semibold text-ink">1/23, St. Mary's Street, Nagercoil, Tamil Nadu - 629001</p></div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Input label="Date of Request" required type="date" defaultValue="2025-05-22" />
          <Input label="Request Number" disabled placeholder="Auto generated" />
          <FormSelect label="Requested By" required><option>Rev. Michael John</option></FormSelect>
          <Input label="Designation" disabled defaultValue="Parish Priest" />
        </div>

        <div className="mt-4">
          <FormTextarea label="Remarks (Optional)" placeholder="Enter any remarks..." />
        </div>
    </div>
  );
}
