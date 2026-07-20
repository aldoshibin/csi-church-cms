import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";
import { CertificatePreview } from "../CertificatePreview";

export function StepPurposeAddress() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="flex-1">
        <h2 className="text-lg font-bold text-ink">Purpose & Address</h2>
        <p className="mb-5 text-sm text-ink-subtle">Provide purpose for the certificate and delivery address.</p>

        <FormTextarea
          label="Purpose of Certificate"
          required
          rows={3}
          defaultValue="This certificate is issued for the purpose of applying for a bank loan."
        />

        <p className="mb-2 mt-5 text-sm font-medium text-ink">Delivery Address <span className="text-danger-500">*</span></p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-interactive-500 bg-interactive-50 p-4">
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
              <input type="radio" name="deliveryAddress" defaultChecked /> Member Address
            </label>
            <p className="text-sm text-ink">Mr. Thomas Mathew</p>
            <p className="text-sm text-ink-subtle">1/23, St. Mary's Street,</p>
            <p className="text-sm text-ink-subtle">Nagercoil, Tamil Nadu - 629001</p>
            <p className="text-sm text-ink-subtle">India</p>
            <p className="mt-1 text-sm text-ink-subtle">+91 98765 43210</p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
              <input type="radio" name="deliveryAddress" /> Custom Address
            </label>
            <div className="grid grid-cols-1 gap-3">
              <Input placeholder="Enter address line 1" />
              <Input placeholder="Enter address line 2" />
              <div className="grid grid-cols-3 gap-3">
                <Input placeholder="Enter city" />
                <FormSelect><option value="">Select state</option></FormSelect>
                <Input placeholder="Enter PIN code" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <FormSelect defaultValue="India"><option>India</option></FormSelect>
                <Input placeholder="Enter phone number" />
              </div>
            </div>
          </div>
        </div>

        <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Contact Person (For Delivery)</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Input label="Contact Person Name" defaultValue="Mr. John Mathew" />
          <Input label="Contact Number" defaultValue="+91 98765 67890" />
          <Input label="Email (Optional)" type="email" defaultValue="john.mathew@email.com" />
        </div>
      </div>
      <CertificatePreview />
    </div>
  );
}
