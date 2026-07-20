import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepCommunicantInformation() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Communicant Information</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the details of the person who received Holy Communion.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Input label="First Name" required placeholder="Enter first name" />
        <Input label="Middle Name" placeholder="Enter middle name" />
        <Input label="Last Name" required placeholder="Enter last name" />

        <Input label="Date of Birth" required placeholder="DD MMM YYYY" type="date" />
        <Input label="Age" required placeholder="Enter age" />
        <FormSelect label="Gender" required><option value="">Select gender</option><option>Male</option><option>Female</option></FormSelect>

        <div className="sm:col-span-2 lg:col-span-1">
          <FormTextarea label="Address" required rows={1} placeholder="Enter address" />
        </div>
        <Input label="City / Town" required placeholder="Enter city / town" />
        <Input label="PIN / ZIP Code" required placeholder="Enter pin / zip code" />

        <Input label="Phone / Mobile" required placeholder="Enter mobile number" />
        <Input label="Email (Optional)" type="email" placeholder="Enter email address" />
        <FormSelect label="Parish" required><option>St. John's Church, Nagercoil</option></FormSelect>
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Additional Information (Optional)</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Input label="School / Institution" placeholder="Enter school / institution" />
        <Input label="Occupation (If applicable)" placeholder="Enter occupation" />
        <Input label="Any Known Allergies" placeholder="Enter details" />
        <div className="sm:col-span-2 lg:col-span-3">
          <FormTextarea label="Remarks" placeholder="Enter any additional remarks" />
        </div>
      </div>
    </div>
  );
}
