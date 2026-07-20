import { Download, Mail, Printer, Info } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";
import { CertificatePreview } from "../CertificatePreview";

function DeliveryOption({ icon: Icon, title, sub, checked }) {
  return (
    <label
      className={`flex flex-1 cursor-pointer flex-col items-center gap-1.5 rounded-lg border p-4 text-center ${
        checked ? "border-interactive-500 bg-interactive-50" : "border-border bg-white"
      }`}
    >
      <input type="radio" name="deliveryMethod" defaultChecked={checked} className="sr-only" />
      <Icon className={`h-6 w-6 ${checked ? "text-interactive-600" : "text-ink-subtle"}`} />
      <p className="text-sm font-semibold text-ink">{title}</p>
      <p className="text-xs text-ink-subtle">{sub}</p>
    </label>
  );
}

export function StepCertificateDetails() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="flex-1">
        <h2 className="text-lg font-bold text-ink">Certificate Information</h2>
        <p className="mb-5 text-sm text-ink-subtle">Enter certificate number and validity details.</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Input label="Certificate Number" required disabled placeholder="Auto generated" />
          <Input label="Issue Date" required type="date" defaultValue="2025-05-22" />
          <Input label="Expiry Date (Optional)" type="date" />
          <FormSelect label="Valid For" defaultValue="6 Months"><option>3 Months</option><option>6 Months</option><option>1 Year</option></FormSelect>
        </div>

        <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Additional Information</h3>
        <p className="mb-3 text-xs text-ink-subtle">Provide any additional notes or remarks.</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormTextarea label="Remarks (Optional)" placeholder="Enter any remarks..." />
          <Input label="Reference (Optional)" placeholder="Enter reference (if any)" />
        </div>

        <h3 className="mb-1 mt-6 text-sm font-bold text-ink">Delivery Preference</h3>
        <p className="mb-3 text-xs text-ink-subtle">How would you like to deliver this certificate?</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <DeliveryOption icon={Download} title="Download" sub="Download certificate as PDF file" checked />
          <DeliveryOption icon={Mail} title="Email" sub="Send certificate via email" />
          <DeliveryOption icon={Printer} title="Print" sub="Print certificate directly" />
        </div>

        <div className="mt-5 flex items-start gap-2 rounded-md border border-interactive-100 bg-interactive-50 px-4 py-2.5 text-[13px] text-interactive-700">
          <Info className="mt-0.5 h-4 w-4 shrink-0" /> You can preview the certificate before finalizing.
        </div>
      </div>
      <CertificatePreview />
    </div>
  );
}
