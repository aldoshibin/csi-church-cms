import {
  Field,
  TextInput,
  SelectInput,
  PhoneInput,
  CARD_CLS,
} from "./fields";
import { Users, Plus } from "lucide-react";

export function StepAttendees({ form, set }) {
  return (
    <div className={CARD_CLS}>
      {/* Header */}
      <h2 className="text-lg font-bold text-ink">
        Attendees (Optional)
      </h2>

      <p className="mt-1 text-sm text-ink-subtle">
        Add attendees or invite family members to this event.
      </p>

      {/* Invite Family Members */}
      <div className="mt-6">
        <h3 className="mb-4 text-sm font-semibold text-ink">
          Invite Family Members
        </h3>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
          <div className="xl:col-span-5">
            <Field>
              <SelectInput
                value={form.family}
                onChange={(e) => set({ family: e.target.value })}
              >
                <option value="">Select family or member to invite</option>
              </SelectInput>
            </Field>
          </div>

          <div className="xl:col-span-5">
            <Field>
              <SelectInput
                value={form.members}
                onChange={(e) => set({ members: e.target.value })}
              >
                <option value="">
                  Select members (you can select multiple)
                </option>
              </SelectInput>
            </Field>
          </div>

          <div className="xl:col-span-2">
            <button
              type="button"
              className="flex h-10 w-full items-center justify-center gap-2 rounded-md border border-green-600 bg-white px-4 text-sm font-medium text-green-700 hover:bg-green-50"
            >
              <Plus className="h-4 w-4" />
              Add to List
            </button>
          </div>
        </div>
      </div>

      {/* Attendees List */}
      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold text-ink">
          Attendees List (0)
        </h3>

        <div className="flex min-h-[180px] flex-col items-center justify-center rounded-lg border border-border bg-white">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
            <Users className="h-8 w-8 text-green-600" />
          </div>

          <p className="mt-4 text-sm font-semibold text-ink">
            No attendees added yet.
          </p>

          <p className="mt-1 text-sm text-ink-subtle">
            Use the fields above to add family members or guests.
          </p>
        </div>
      </div>

      {/* Guest */}
      <div className="mt-8">
        <h3 className="mb-4 text-sm font-semibold text-ink">
          Add Guest / External Attendee (Optional)
        </h3>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
          <div className="xl:col-span-3">
            <Field label="Full Name">
              <TextInput
                placeholder="Enter full name"
                value={form.guest_name}
                onChange={(e) =>
                  set({ guest_name: e.target.value })
                }
              />
            </Field>
          </div>

          <div className="xl:col-span-3">
            <Field label="Email Address">
              <TextInput
                type="email"
                placeholder="Enter email address"
                value={form.guest_email}
                onChange={(e) =>
                  set({ guest_email: e.target.value })
                }
              />
            </Field>
          </div>

          <div className="xl:col-span-4">
            <Field label="Mobile Number">
              <PhoneInput
                placeholder="Enter mobile number"
                value={form.guest_phone}
                onChange={(e) =>
                  set({ guest_phone: e.target.value })
                }
              />
            </Field>
          </div>

          <div className="xl:col-span-2 flex items-end">
            <button
              type="button"
              className="flex h-10 w-full items-center justify-center gap-2 rounded-md border border-green-600 bg-white px-4 text-sm font-medium text-green-700 hover:bg-green-50"
            >
              <Plus className="h-4 w-4" />
              Add Guest
            </button>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <Field label="Message / Invitation (Optional)">
          <div className="relative">
            <textarea
              rows={4}
              maxLength={250}
              placeholder="Add a personal message or invitation for the attendees..."
              value={form.message}
              onChange={(e) => set({ message: e.target.value })}
              className="w-full resize-none rounded-md border border-border bg-white px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10"
            />

            <span className="absolute bottom-2 right-3 text-xs text-ink-subtle">
              {(form.message?.length || 0)}/250
            </span>
          </div>
        </Field>
      </div>
    </div>
  );
}