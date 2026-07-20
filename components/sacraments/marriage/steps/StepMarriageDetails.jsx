import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepMarriageDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Marriage Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Please provide the marriage ceremony details.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input label="Date of Marriage" required placeholder="DD MMM YYYY" type="date" />
        <Input label="Time of Marriage" required placeholder="hh:mm AM/PM" type="time" />
        <FormSelect label="Place / Church" required><option value="">Select place / church</option></FormSelect>
        <Input label="City / Town" required placeholder="Enter city / town" />

        <FormSelect label="Type of Ceremony" required><option value="">Select type of ceremony</option><option>Church Wedding</option><option>Civil Ceremony</option></FormSelect>
        <Input label="Officiated By" required placeholder="Enter name of officiant" />
        <Input label="Designation" placeholder="Enter designation" />
        <Input label="License Number (If any)" placeholder="Enter license number" />
      </div>

      <div className="mt-4">
        <FormTextarea label="Scripture Readings (Optional)" rows={4} maxLength={200} placeholder="Enter scripture readings" />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormTextarea label="Remarks (Optional)" rows={4} maxLength={200} placeholder="Enter any remarks" />
        <Input label="Reference / Register Folio No." placeholder="Enter register folio number" />
      </div>
    </div>
  );
}
