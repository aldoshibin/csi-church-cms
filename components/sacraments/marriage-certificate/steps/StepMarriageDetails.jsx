import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepMarriageDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Marriage Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the marriage information.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Date of Marriage" required type="date" defaultValue="2025-05-12" />
        <Input label="Time of Marriage" type="time" defaultValue="10:30" />

        <FormSelect label="Place of Marriage / Church" required><option>CSI Holy Trinity Church, Nagercoil</option></FormSelect>
        <FormSelect label="Marriage Type" required><option>Religious Marriage</option><option>Civil Marriage</option></FormSelect>

        <FormSelect label="Conducted By (Church Minister)" required><option>Rev. David Samuel</option></FormSelect>
        <FormSelect label="Diocese" required><option>Nagercoil Diocese</option></FormSelect>
      </div>

      <div className="mt-4">
        <FormTextarea label="Additional Notes (if any)" placeholder="Enter any additional notes" />
      </div>
    </div>
  );
}
