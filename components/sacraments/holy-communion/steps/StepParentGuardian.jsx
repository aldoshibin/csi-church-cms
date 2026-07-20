import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

function GuardianBlock({ title, namePlaceholder }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold text-ink">{title}</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Input label="Full Name" required placeholder={namePlaceholder} />
        <FormSelect label="Religion" required><option value="">Select religion</option></FormSelect>
        <Input label="Occupation" placeholder="Enter occupation" />

        <FormSelect label="Education"><option value="">Select education</option></FormSelect>
        <Input label="Phone / Mobile" required placeholder="Enter mobile number" />
        <Input label="Email (Optional)" type="email" placeholder="Enter email address" />

        <div className="sm:col-span-2 lg:col-span-1">
          <FormTextarea label="Address" required rows={2} placeholder="Enter address" />
        </div>
        <Input label="City / Town" required placeholder="Enter city / town" />
        <Input label="PIN / ZIP Code" required placeholder="Enter pin / zip code" />
      </div>
    </div>
  );
}

export function StepParentGuardian() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Parent / Guardian Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the details of the parents or guardians of the communicant.</p>

      <div className="space-y-5">
        <GuardianBlock title="Father / Guardian Information" namePlaceholder="Enter father / guardian name" />
        <hr className="border-border" />
        <GuardianBlock title="Mother / Guardian Information" namePlaceholder="Enter mother / guardian name" />
      </div>

      <label className="mt-5 flex items-start gap-2.5 text-sm text-ink">
        <input type="checkbox" className="mt-0.5" />
        <span>
          <span className="font-medium">Guardian is the same as Father</span>
          <br />
          <span className="text-ink-subtle">Check if the guardian details are the same as father.</span>
        </span>
      </label>
    </div>
  );
}
