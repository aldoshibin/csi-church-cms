// import { Field, TextInput, SelectInput, CARD_CLS } from "./fields";

// export function StepFamilyDetails({ form, set }) {
//   return (
//     <div className={CARD_CLS}>
//       <h2 className="mb-4 text-base font-bold text-ink">Family Details</h2>

//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//         <Field label="Family ID (Auto)"><TextInput disabled value={form.family_id} /></Field>
//         <Field label="Parish" required>
//           <SelectInput value={form.parish} onChange={(e) => set({ parish: e.target.value })}>
//             <option value="">Select parish</option>
//             <option>CSI St. John's Church, Nagercoil</option>
//           </SelectInput>
//         </Field>

//         <Field label="Family Name" required>
//           <TextInput placeholder="Enter family name" value={form.family_name} onChange={(e) => set({ family_name: e.target.value })} />
//         </Field>
//         <Field label="Family Head (Full Name)" required>
//           <TextInput placeholder="Enter full name" value={form.family_head} onChange={(e) => set({ family_head: e.target.value })} />
//         </Field>
//       </div>

//       <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
//         <Field label="Date of Birth" required><TextInput type="date" /></Field>
//         <Field label="Gender" required>
//           <SelectInput><option value="">Select gender</option><option>Male</option><option>Female</option></SelectInput>
//         </Field>
//         <Field label="Marital Status" required>
//           <SelectInput><option value="">Select marital status</option><option>Single</option><option>Married</option><option>Widowed</option></SelectInput>
//         </Field>
//       </div>

//       <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
//         <Field label="Wedding Anniversary"><TextInput type="date" /></Field>
//         <Field label="Occupation"><TextInput placeholder="Enter occupation" /></Field>
//         <Field label="Family Type">
//           <SelectInput><option value="">Select family type</option><option>Nuclear Family</option><option>Joint Family</option><option>Single Parent</option></SelectInput>
//         </Field>
//       </div>

//       <div className="mt-4">
//         <Field label="Family Notes">
//           <textarea rows={3} maxLength={250} placeholder="Enter any additional notes about the family..." className={"w-full resize-y " + "rounded-md border border-border bg-white px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10"} />
//         </Field>
//       </div>

//       <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Baptism Information (Family Head)</h3>
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//         <Field label="Baptism Date"><TextInput type="date" /></Field>
//         <Field label="Baptism Place"><TextInput placeholder="Enter baptism place" /></Field>
//         <Field label="Baptism Church"><TextInput placeholder="Enter baptism church" /></Field>
//       </div>
//       <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
//         <Field label="Baptism Certificate No."><TextInput placeholder="Enter certificate number" /></Field>
//         <Field label="Baptism Register No."><TextInput placeholder="Enter register number" /></Field>
//       </div>
//     </div>
//   );
// }


import { Field, TextInput, SelectInput, CARD_CLS } from "./fields";
import { UploadCloud } from "lucide-react";

export function StepFamilyDetails({ form, set }) {
  return (
    <div className={CARD_CLS}>
      {/* Header */}
      <h2 className="text-lg font-bold text-ink">Event Details</h2>
      <p className="mt-1 text-sm text-ink-subtle">
        Enter the basic information about the event.
      </p>

      {/* Row 1 */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Field label="Event Name" required>
          <TextInput
            placeholder="Enter event name"
            value={form.event_name}
            onChange={(e) => set({ event_name: e.target.value })}
          />
        </Field>

        <Field label="Event Type" required>
          <SelectInput
            value={form.event_type}
            onChange={(e) => set({ event_type: e.target.value })}
          >
            <option value="">Select event type</option>
            <option>Birthday</option>
            <option>Wedding Anniversary</option>
            <option>Baptism</option>
            <option>Marriage</option>
            <option>Funeral</option>
            <option>Prayer Meeting</option>
            <option>Youth Meeting</option>
          </SelectInput>
        </Field>

        <Field label="Family / Member" required>
          <SelectInput
            value={form.family_member}
            onChange={(e) => set({ family_member: e.target.value })}
          >
            <option value="">Select family or member</option>
          </SelectInput>
        </Field>
      </div>

      {/* Description */}
      <div className="mt-5">
        <Field label="Event Description">
          <div className="relative">
            <textarea
              rows={5}
              maxLength={500}
              placeholder="Enter event description"
              value={form.description}
              onChange={(e) => set({ description: e.target.value })}
              className="w-full resize-none rounded-md border border-border bg-white px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10"
            />
            <span className="absolute bottom-2 right-3 text-xs text-ink-subtle">
              {(form.description?.length || 0)}/500
            </span>
          </div>
        </Field>
      </div>

      {/* Row 2 */}
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Field label="Event Category" required>
          <SelectInput
            value={form.category}
            onChange={(e) => set({ category: e.target.value })}
          >
            <option value="">Select category</option>
            <option>Special Service</option>
            <option>Meeting</option>
            <option>Prayer</option>
            <option>Youth</option>
            <option>Celebration</option>
          </SelectInput>
        </Field>

        <Field label="Event Status" required>
          <SelectInput
            value={form.status}
            onChange={(e) => set({ status: e.target.value })}
          >
            <option value="">Select status</option>
            <option>Upcoming</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </SelectInput>
        </Field>

        <Field label="Is this a recurring event?">
          <div className="flex h-10 items-center gap-8">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="recurring"
                value="yes"
                checked={form.recurring === "yes"}
                onChange={(e) => set({ recurring: e.target.value })}
              />
              Yes
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="recurring"
                value="no"
                checked={form.recurring === "no"}
                onChange={(e) => set({ recurring: e.target.value })}
              />
              No
            </label>
          </div>
        </Field>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-border" />

      {/* Additional Information */}
      <h3 className="text-lg font-bold text-ink">
        Additional Information
      </h3>

      <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Tags */}
        <div>
          <Field label="Tags / Keywords (Optional)">
            <TextInput
              placeholder="Enter tags and press Enter"
              value={form.tags}
              onChange={(e) => set({ tags: e.target.value })}
            />
          </Field>

          <p className="mt-2 text-xs text-ink-subtle">
            Example: Prayer, Youth, Celebration
          </p>
        </div>

        {/* Upload */}
        <div>
          <Field label="Attachments (Optional)">
            <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-border bg-surface p-8 text-center hover:bg-slate-50">
              <UploadCloud className="mb-3 h-10 w-10 text-ink-subtle" />

              <p className="text-sm font-medium text-ink">
                Drag &amp; drop files here or
              </p>

              <span className="mt-2 rounded-md border border-border bg-white px-4 py-2 text-sm font-medium text-interactive-600">
                Choose Files
              </span>

              <p className="mt-3 text-xs text-ink-subtle">
                JPG, PNG, PDF up to 10MB
              </p>

              <input
                type="file"
                multiple
                className="hidden"
              />
            </label>
          </Field>
        </div>
      </div>
    </div>
  );
}