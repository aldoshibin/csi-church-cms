import { Field, TextInput, SelectInput, CARD_CLS } from "./fields";

export function StepFamilyDetails({ form, set }) {
  return (
    <div className={CARD_CLS}>
      <h2 className="mb-4 text-base font-bold text-ink">Family Details</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Family ID (Auto)"><TextInput disabled value={form.family_id} /></Field>
        <Field label="Parish" required>
          <SelectInput value={form.parish} onChange={(e) => set({ parish: e.target.value })}>
            <option value="">Select parish</option>
            <option>CSI St. John's Church, Nagercoil</option>
          </SelectInput>
        </Field>

        <Field label="Family Name" required>
          <TextInput placeholder="Enter family name" value={form.family_name} onChange={(e) => set({ family_name: e.target.value })} />
        </Field>
        <Field label="Family Head (Full Name)" required>
          <TextInput placeholder="Enter full name" value={form.family_head} onChange={(e) => set({ family_head: e.target.value })} />
        </Field>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label="Date of Birth" required><TextInput type="date" /></Field>
        <Field label="Gender" required>
          <SelectInput><option value="">Select gender</option><option>Male</option><option>Female</option></SelectInput>
        </Field>
        <Field label="Marital Status" required>
          <SelectInput><option value="">Select marital status</option><option>Single</option><option>Married</option><option>Widowed</option></SelectInput>
        </Field>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label="Wedding Anniversary"><TextInput type="date" /></Field>
        <Field label="Occupation"><TextInput placeholder="Enter occupation" /></Field>
        <Field label="Family Type">
          <SelectInput><option value="">Select family type</option><option>Nuclear Family</option><option>Joint Family</option><option>Single Parent</option></SelectInput>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Family Notes">
          <textarea rows={3} maxLength={250} placeholder="Enter any additional notes about the family..." className={"w-full resize-y " + "rounded-md border border-border bg-white px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10"} />
        </Field>
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Baptism Information (Family Head)</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label="Baptism Date"><TextInput type="date" /></Field>
        <Field label="Baptism Place"><TextInput placeholder="Enter baptism place" /></Field>
        <Field label="Baptism Church"><TextInput placeholder="Enter baptism church" /></Field>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Baptism Certificate No."><TextInput placeholder="Enter certificate number" /></Field>
        <Field label="Baptism Register No."><TextInput placeholder="Enter register number" /></Field>
      </div>
    </div>
  );
}
