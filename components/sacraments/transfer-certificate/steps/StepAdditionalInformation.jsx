import { UploadCloud } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepAdditionalInformation() {
  return (
    <div>
        <h2 className="text-lg font-bold text-ink">Additional Information</h2>
        <p className="mb-5 text-sm text-ink-subtle">Provide reason for transfer and any additional details.</p>

        <FormSelect label="Reason for Transfer" required defaultValue="Transfer to another Parish">
          <option>Transfer to another Parish</option>
          <option>Relocation</option>
          <option>Marriage</option>
          <option>Other</option>
        </FormSelect>

        <div className="mt-4">
          <FormTextarea
            label="Detailed Reason (Optional)"
            rows={3}
            defaultValue="Member is relocating to another city and requests transfer to the parish near the new residence."
          />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input label="Transfer Date" required type="date" defaultValue="2025-05-25" />
          <div>
            <p className="mb-1.5 text-sm font-medium text-ink">Supporting Document (Optional)</p>
            <div className="flex flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-border py-6">
              <UploadCloud className="h-5 w-5 text-ink-subtle" />
              <p className="text-xs text-ink-subtle">Click to upload or drag and drop</p>
              <p className="text-[11px] text-ink-subtle">PDF, JPG, PNG (Max. 5MB)</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <FormTextarea label="Special Instructions (Optional)" placeholder="Enter any special instructions..." />
        </div>
    </div>
  );
}
