import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "../formFields";
import { InfoBanner } from "../InfoBanner";

function ParentBlock({ title }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold text-ink">{title}</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <FormSelect label="Title"><option value="">Select title</option></FormSelect>
        <Input label="Full Name" required placeholder="Enter full name" />
        <FormSelect label="Religion" required><option value="">Select religion</option></FormSelect>
        <Input label="Occupation" placeholder="Enter occupation" />

        <Input label="Phone Number" required placeholder="Enter phone number" />
        <Input label="Email Address" type="email" placeholder="Enter email address" />
        <FormSelect label="Nationality"><option value="">Select nationality</option></FormSelect>
        <Input label="PIN / ZIP Code" placeholder="Enter PIN / ZIP code" />

        <div className="sm:col-span-2 lg:col-span-3">
          <FormTextarea label="Residential Address" required rows={2} placeholder="Enter full residential address" />
        </div>
      </div>
    </div>
  );
}

export function StepParentsGuardians() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Parents / Guardians</h2>
      <p className="mb-4 text-sm text-ink-subtle">Enter the details of the parents or legal guardians of the candidate.</p>
      <InfoBanner>Please provide accurate information as it will be used in the confirmation certificate.</InfoBanner>
      <div className="space-y-6">
        <ParentBlock title="Father / Guardian Details" />
        <hr className="border-border" />
        <ParentBlock title="Mother / Guardian Details" />
      </div>
    </div>
  );
}
