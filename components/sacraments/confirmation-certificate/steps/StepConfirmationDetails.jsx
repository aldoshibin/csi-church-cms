import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepConfirmationDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Confirmation Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the confirmation information.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Date of Confirmation" required type="date" defaultValue="2025-05-25" />
        <Input label="Place of Confirmation" required defaultValue="CSI St. John's Church, Nagercoil" />

        <FormSelect label="Bishop / Presiding Minister" required><option>Rt. Rev. Dr. Sam P. Chelladurai</option></FormSelect>
        <Input label="Conducted By" required defaultValue="Rev. David Samuel" />

        <FormSelect label="Denomination" required><option>Church of South India (CSI)</option></FormSelect>
        <FormSelect label="Diocese" required><option>Nagercoil Diocese</option></FormSelect>
      </div>

      <div className="mt-4">
        <FormTextarea label="Bible Verse (optional)" defaultValue="2 Timothy 1:7 – For God has not given us a spirit of fear, but of power and of love and of a sound mind." />
      </div>

      <div className="mt-4">
        <FormTextarea label="Remarks (optional)" placeholder="Enter any additional remarks" />
      </div>
    </div>
  );
}
