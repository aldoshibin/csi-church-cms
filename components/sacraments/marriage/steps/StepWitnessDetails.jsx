import { Input } from "@/components/ui/Input";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

function WitnessBlock({ n, optional }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold text-ink">
        Witness {n} {optional && <span className="font-normal text-ink-subtle">(Optional)</span>}
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input label="Full Name" required={!optional} placeholder="Enter full name" />
        <Input label="Age" placeholder="Enter age" />
        <FormSelect label="Gender" required={!optional}><option value="">Select gender</option><option>Male</option><option>Female</option></FormSelect>
        <FormSelect label="Relationship to Couple" required={!optional}><option value="">Select relationship</option></FormSelect>

        <Input label="Phone / Mobile" placeholder="Enter mobile number" />
        <Input label="Email (Optional)" type="email" placeholder="Enter email address" />
        <Input label="Occupation (Optional)" placeholder="Enter occupation" />
        <Input label="Address (Optional)" placeholder="Enter address" />
      </div>
    </div>
  );
}

export function StepWitnessDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Witness Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Please provide details of the witnesses to the marriage.</p>

      <div className="space-y-6">
        <WitnessBlock n={1} />
        <hr className="border-border" />
        <WitnessBlock n={2} />
        <hr className="border-border" />
        <WitnessBlock n={3} optional />
      </div>
    </div>
  );
}
