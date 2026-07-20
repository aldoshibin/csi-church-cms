import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepBaptismDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Baptism Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the baptism information of the member.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Baptism Date" required type="date" defaultValue="2025-05-12" />
        <Input label="Place of Baptism" required defaultValue="CSI Holy Trinity Church, Nagercoil" />

        <Input label="Time of Baptism" type="time" defaultValue="10:30" />
        <FormSelect label="Officiated By" required><option>Rev. David Samuel</option></FormSelect>

        <Input label="Baptism Book No." required defaultValue="05" />
        <Input label="Baptism Entry No." required defaultValue="128" />
      </div>

      <div className="mt-4">
        <FormTextarea label="Remarks (Optional)" placeholder="Enter any additional remarks (optional)" />
      </div>
    </div>
  );
}
