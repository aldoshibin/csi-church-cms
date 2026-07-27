import { Field, TextInput, SelectInput, PhoneInput, CARD_CLS } from "./fields";

export function StepAddressContact() {
  return (
    <div className={CARD_CLS}>
      <h2 className="mb-4 text-base font-bold text-ink">Address & Contact Information</h2>

      <h3 className="mb-3 text-sm font-bold text-ink">Address</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Address Line 1" required><TextInput placeholder="Enter address line 1" /></Field>
        <Field label="Address Line 2"><TextInput placeholder="Enter address line 2" /></Field>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label="Landmark"><TextInput placeholder="Enter landmark" /></Field>
        <Field label="City / Town" required><TextInput placeholder="Enter city / town" /></Field>
        <Field label="District" required><TextInput placeholder="Enter district" /></Field>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label="State" required>
          <SelectInput><option value="">Select state</option><option>Tamil Nadu</option><option>Kerala</option></SelectInput>
        </Field>
        <Field label="Pincode" required><TextInput placeholder="Enter pincode" /></Field>
        <Field label="Country" required>
          <SelectInput defaultValue="India"><option>India</option></SelectInput>
        </Field>
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Contact Information</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label="Primary Phone" required><PhoneInput placeholder="Enter 10 digit mobile number" /></Field>
        <Field label="Alternate Phone"><PhoneInput placeholder="Enter 10 digit mobile number" /></Field>
        <Field label="Email ID"><TextInput type="email" placeholder="Enter email address" /></Field>
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Emergency Contact (Optional)</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label="Contact Person Name"><TextInput placeholder="Enter contact person name" /></Field>
        <Field label="Relationship"><TextInput placeholder="Enter relationship" /></Field>
        <Field label="Phone Number"><PhoneInput placeholder="Enter 10 digit mobile number" /></Field>
      </div>
    </div>
  );
}
