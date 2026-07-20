import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "../formFields";
import { InfoBanner } from "../InfoBanner";

export function StepConfirmationDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Confirmation Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the details of the confirmation ceremony and related information.</p>

      <h3 className="mb-3 text-sm font-bold text-ink">Confirmation Information</h3>
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input label="Date of Confirmation" required type="date" />
        <Input label="Time of Confirmation" required type="time" />
        <Input label="Place / Venue" required placeholder="Enter place / venue" />
        <FormSelect label="Church" required><option value="">Select church</option></FormSelect>

        <FormSelect label="Presiding Bishop / Celebrant" required><option value="">Select celebrant</option></FormSelect>
        <Input label="Assisting Clergy (if any)" placeholder="Enter name" />
        <Input label="Confirmation Class / Batch" placeholder="Enter class / batch" />
        <Input label="Reference No." placeholder="Enter reference number" />
      </div>

      <h3 className="mb-3 text-sm font-bold text-ink">Preparation Information</h3>
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <FormSelect label="Catechism Class Attended" required><option value="">Select option</option></FormSelect>
        <Input label="Date of Enrollment" type="date" />
        <Input label="Date of Completion" type="date" />
        <Input label="Instructor / Teacher" placeholder="Enter instructor name" />
        <div className="sm:col-span-2 lg:col-span-4">
          <FormTextarea label="Remarks (if any)" placeholder="Enter remarks" />
        </div>
      </div>

      <h3 className="mb-3 text-sm font-bold text-ink">Church Record Information</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input label="Record Entered By" required disabled defaultValue="Rev. Michael John" />
        <Input label="Date Recorded" required type="date" defaultValue="2025-05-20" />
        <FormSelect label="Record Status"><option value="">Select status</option><option>Draft</option><option>Pending</option><option>Confirmed</option></FormSelect>
        <FormTextarea label="Notes for Church Use" maxLength={300} rows={1} placeholder="Enter notes" />
      </div>

      <div className="mt-5">
        <InfoBanner>Please verify all details before proceeding to the next step.</InfoBanner>
      </div>
    </div>
  );
}
