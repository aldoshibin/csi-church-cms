import { Input } from "@/components/ui/Input";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

function WitnessBlock({ n }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold text-ink">Witness {n}</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Full Name" required placeholder="Enter full name" />
        <FormSelect label="Relation to Couple" required><option value="">Select relation</option><option>Friend</option><option>Cousin</option><option>Sibling</option><option>Family Friend</option></FormSelect>

        <Input label="Phone Number" required placeholder="Enter phone number" />
        <Input label="Email" type="email" placeholder="Enter email address" />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-ink">Address <span className="text-danger-500">*</span></label>
        <textarea
          rows={3}
          maxLength={250}
          placeholder="Enter complete address"
          className="w-full resize-y rounded-md border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10"
        />
      </div>
    </div>
  );
}

export function StepWitnessDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Witness Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the witness information.</p>

      <div className="space-y-6">
        <WitnessBlock n={1} />
        <hr className="border-border" />
        <WitnessBlock n={2} />
      </div>
    </div>
  );
}
