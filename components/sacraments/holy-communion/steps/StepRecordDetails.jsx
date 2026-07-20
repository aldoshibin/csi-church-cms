import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";
import { InfoBanner } from "@/components/sacraments/confirmation/InfoBanner";

export function StepRecordDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Record Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the Holy Communion and class/batch details of the communicant.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Input label="Date of Holy Communion" required placeholder="DD MMM YYYY" type="date" />
        <FormSelect label="Time" required><option value="">Select time</option></FormSelect>
        <FormSelect label="Place / Venue" required><option value="">Select place / venue</option></FormSelect>

        <FormSelect label="Celebration Type" required><option>First Holy Communion</option><option>Renewal</option></FormSelect>
        <FormSelect label="Officiated By" required><option>Rev. Michael John</option></FormSelect>
        <FormSelect label="Class / Batch" required><option>Batch 2025</option></FormSelect>

        <FormSelect label="Catechism Class Attended" required><option>Yes</option><option>No</option></FormSelect>
        <Input label="Class Teacher / Instructor" placeholder="Enter class teacher name" />
        <Input label="Date of Completion" placeholder="DD MMM YYYY" type="date" />

        <Input label="Certificate Number (If any)" placeholder="Enter certificate number" />
        <Input label="Register Folio No." placeholder="Enter folio number" />
        <FormTextarea label="Remarks (Optional)" maxLength={200} placeholder="Enter any remarks" />
      </div>

      <div className="mt-5">
        <InfoBanner>Please ensure all details are correct before proceeding to the next step.</InfoBanner>
      </div>
    </div>
  );
}
