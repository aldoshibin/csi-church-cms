import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "../formFields";

export function StepChildInformation() {
  return (
    <div>
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold text-ink">Child Information</h2>
          <p className="text-sm text-ink-subtle">Enter the confirmation candidate's personal details.</p>
        </div>
        <label className="flex items-center gap-2 text-sm font-medium text-ink">
          Active Record
          <span className="relative inline-block h-5 w-9 rounded-full bg-interactive-500">
            <span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
          </span>
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input label="Confirmation No. (Auto)" placeholder="Auto-generated" disabled />
        <Input label="Full Name of Candidate" required placeholder="Enter full name" />
        <Input label="Date of Birth" required type="date" />
        <FormSelect label="Gender" required><option value="">Select gender</option><option>Male</option><option>Female</option></FormSelect>

        <Input label="Date of Baptism" type="date" />
        <Input label="Place of Baptism" placeholder="Enter place of baptism" />
        <FormSelect label="Church of Baptism"><option value="">Select church</option></FormSelect>
        <Input label="Baptism Certificate No." placeholder="Enter certificate number" />

        <FormSelect label="Nationality" required><option value="">Select nationality</option></FormSelect>
        <FormSelect label="Religion" required><option value="">Select religion</option></FormSelect>
        <FormSelect label="Denomination"><option value="">Select denomination</option></FormSelect>
        <Input label="Mother Tongue" placeholder="Enter mother tongue" />

        <div className="sm:col-span-2 lg:col-span-4">
          <FormTextarea label="Residential Address" required placeholder="Enter full residential address" />
        </div>

        <Input label="PIN / ZIP Code" placeholder="Enter PIN / ZIP code" />
        <Input label="City / Town" placeholder="Enter city / town" />
        <Input label="State / Province" placeholder="Enter state / province" />
        <FormSelect label="Country" required><option value="">Select country</option></FormSelect>

        <Input label="Phone Number" placeholder="Enter phone number" />
        <Input label="Email Address" type="email" placeholder="Enter email address" />
      </div>
    </div>
  );
}
