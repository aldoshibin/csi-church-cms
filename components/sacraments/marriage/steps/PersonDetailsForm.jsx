import { Input } from "@/components/ui/Input";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

export function PersonDetailsForm({ role }) {
  const isGroom = role === "Groom";
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">{role} Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the personal and contact details of the {role.toLowerCase()}.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input label="Full Name" required placeholder="Enter full name" />
        <Input label="Date of Birth" required placeholder="DD MMM YYYY" type="date" />
        <Input label="Age" placeholder="Enter age" />
        <FormSelect label="Marital Status" required><option value="">Select status</option><option>{isGroom ? "Bachelor" : "Spinster"}</option><option>Divorced</option><option>Widowed</option></FormSelect>

        <FormSelect label="Religion" required><option value="">Select religion</option></FormSelect>
        <FormSelect label="Denomination" required><option value="">Select denomination</option></FormSelect>
        <Input label="Occupation" placeholder="Enter occupation" />
        <FormSelect label="Education"><option value="">Select education</option></FormSelect>

        <Input label="Phone / Mobile" required placeholder="Enter mobile number" />
        <Input label="Email (Optional)" type="email" placeholder="Enter email address" />
        <Input label="Nationality" placeholder="Enter nationality" />
        <Input label="Aadhaar / ID No. (Optional)" placeholder="Enter ID number" />
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Address</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Input label="Address Line 1" required placeholder="Enter address line 1" />
        <Input label="Address Line 2" placeholder="Enter address line 2" />
        <Input label="City / Town" required placeholder="Enter city / town" />
        <FormSelect label="State" required><option value="">Select state</option></FormSelect>
        <Input label="PIN / ZIP Code" required placeholder="Enter pin / zip code" />
        <FormSelect label="Country" required><option>India</option></FormSelect>
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Parish Details</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <FormSelect label="Parish / Church" required><option value="">Select parish / church</option></FormSelect>
        <Input label="Member ID (If any)" placeholder="Enter member ID" />
        <Input label="Baptism Date (If baptized)" placeholder="DD MMM YYYY" type="date" />
        <Input label="Baptism Church (If baptized)" placeholder="Enter church name" />
      </div>
    </div>
  );
}
