import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepDeathDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Death Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Please provide the details related to the death.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input label="Date of Death" required placeholder="DD MMM YYYY" type="date" />
        <Input label="Time of Death" required placeholder="hh:mm AM/PM" type="time" />
        <Input label="Place of Death" required placeholder="Enter place of death" />
        <FormSelect label="Type of Death"><option>Natural</option><option>Accidental</option><option>Other</option></FormSelect>

        <Input label="Cause of Death (If known)" placeholder="Enter cause of death" />
        <Input label="Duration of Illness" placeholder="Enter duration" />
        <Input label="Attended by (Doctor/Hospital)" placeholder="Enter attending doctor/hospital" />
        <Input label="Death Certificate No." placeholder="Enter certificate number" />
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Last Rites Information</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Input label="Body Received At (Church)" placeholder="Enter church name" />
        <Input label="Date" type="date" />
        <Input label="Time" type="time" />
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Burial / Cremation Information</h3>
      <div className="mb-4 flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="radio" name="burialType" defaultChecked /> Burial
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="radio" name="burialType" /> Cremation
        </label>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input label="Place" required placeholder="Enter place" />
        <Input label="Date" required type="date" />
        <Input label="Time" required type="time" />
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Additional Information</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <FormTextarea label="Remarks (Optional)" rows={3} maxLength={300} placeholder="Enter remarks" />
        <FormSelect label="Information Source"><option>Family Member</option><option>Hospital</option><option>Police</option></FormSelect>
        <Input label="Recorded By" disabled defaultValue="Rev. Michael John" />
      </div>
    </div>
  );
}
