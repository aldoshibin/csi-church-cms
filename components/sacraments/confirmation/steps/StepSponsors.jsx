import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "../formFields";
import { InfoBanner } from "../InfoBanner";

function SponsorBlock({ n, optional }) {
  return (
    <div>
      <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-ink">
        Sponsor {n} Details {optional && <span className="font-normal text-ink-subtle">(Optional)</span>}
        {optional && (
          <label className="ml-auto flex items-center gap-1.5 text-xs font-medium text-ink-subtle">
            <input type="checkbox" /> Add another sponsor
          </label>
        )}
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <FormSelect label="Title"><option value="">Select title</option></FormSelect>
        <Input label="Full Name" required={!optional} placeholder="Enter full name" />
        <FormSelect label="Religion" required={!optional}><option value="">Select religion</option></FormSelect>
        <FormSelect label="Relationship to Candidate" required={!optional}><option value="">Select relationship</option></FormSelect>

        <Input label="Phone Number" required={!optional} placeholder="Enter phone number" />
        <Input label="Email Address" type="email" placeholder="Enter email address" />
        <Input label="Occupation" placeholder="Enter occupation" />
        <Input label="PIN / ZIP Code" placeholder="Enter PIN / ZIP code" />

        <div className="sm:col-span-2 lg:col-span-3">
          <FormTextarea label="Residential Address" required={!optional} rows={2} placeholder="Enter full residential address" />
        </div>
      </div>
    </div>
  );
}

export function StepSponsors() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Sponsors</h2>
      <p className="mb-4 text-sm text-ink-subtle">Enter the details of the sponsors who will support and guide the candidate in their faith journey.</p>
      <InfoBanner>Minimum one sponsor is required. Maximum two sponsors can be added.</InfoBanner>
      <div className="space-y-6">
        <SponsorBlock n={1} />
        <hr className="border-border" />
        <SponsorBlock n={2} optional />
      </div>
    </div>
  );
}
