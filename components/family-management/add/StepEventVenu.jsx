import { Field, TextInput, SelectInput, PhoneInput, CARD_CLS } from "./fields";
import { MapPin } from "lucide-react";

export function StepVenueOrganizer({ form, set }) {
  return (
    <div className={CARD_CLS}>
      {/* Header */}
      <h2 className="text-lg font-bold text-ink">Venue & Organizer</h2>
      <p className="mt-1 text-sm text-ink-subtle">
        Please provide venue details and organizer information for the event.
      </p>

      {/* Venue */}
      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Field label="Venue Name" required>
          <TextInput
            placeholder="Enter venue name"
            value={form.venue_name}
            onChange={(e) => set({ venue_name: e.target.value })}
          />
        </Field>

        <Field label="Venue Type" required>
          <SelectInput
            value={form.venue_type}
            onChange={(e) => set({ venue_type: e.target.value })}
          >
            <option value="">Select venue type</option>
            <option>Church</option>
            <option>Hall</option>
            <option>Home</option>
            <option>Outdoor</option>
            <option>Community Center</option>
          </SelectInput>
        </Field>
      </div>

      {/* Address */}
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium text-ink">
            Venue Address <span className="text-red-500">*</span>
          </label>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-xs font-medium text-interactive-600 hover:bg-slate-50"
          >
            <MapPin className="h-4 w-4" />
            Use Church Address
          </button>
        </div>

        <textarea
          rows={4}
          placeholder="Enter complete address"
          value={form.address}
          onChange={(e) => set({ address: e.target.value })}
          className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-ink-subtle focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10"
        />
      </div>

      {/* City */}
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Field label="City" required>
          <TextInput
            placeholder="Enter city"
            value={form.city}
            onChange={(e) => set({ city: e.target.value })}
          />
        </Field>

        <Field label="State" required>
          <SelectInput
            value={form.state}
            onChange={(e) => set({ state: e.target.value })}
          >
            <option value="">Select state</option>
            <option>Tamil Nadu</option>
            <option>Kerala</option>
            <option>Karnataka</option>
          </SelectInput>
        </Field>

        <Field label="PIN Code" required>
          <TextInput
            placeholder="Enter PIN code"
            value={form.pin}
            onChange={(e) => set({ pin: e.target.value })}
          />
        </Field>

        <Field label="Country" required>
          <SelectInput
            value={form.country}
            onChange={(e) => set({ country: e.target.value })}
          >
            <option>India</option>
          </SelectInput>
        </Field>
      </div>

      {/* Organizer */}
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Field label="Organizer / Ministry" required>
          <SelectInput
            value={form.organizer_type}
            onChange={(e) => set({ organizer_type: e.target.value })}
          >
            <option value="">Select organizer or ministry</option>
            <option>Youth Ministry</option>
            <option>Women's Fellowship</option>
            <option>Men's Fellowship</option>
            <option>Sunday School</option>
            <option>Choir</option>
          </SelectInput>
        </Field>

        <Field label="Organizer Name" required>
          <TextInput
            placeholder="Enter organizer name"
            value={form.organizer_name}
            onChange={(e) => set({ organizer_name: e.target.value })}
          />
        </Field>

        <Field label="Contact Number" required>
          <PhoneInput
            value={form.phone}
            onChange={(e) => set({ phone: e.target.value })}
            placeholder="Enter mobile number"
          />
        </Field>
      </div>

      {/* Bottom */}
      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Field label="Organizer Email (Optional)">
          <TextInput
            type="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={(e) => set({ email: e.target.value })}
          />
        </Field>

        <Field label="Additional Notes (Optional)">
          <div className="relative">
            <textarea
              rows={4}
              maxLength={500}
              placeholder="Enter any additional notes"
              value={form.notes}
              onChange={(e) => set({ notes: e.target.value })}
              className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-ink-subtle focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10"
            />

            <span className="absolute bottom-2 right-3 text-xs text-ink-subtle">
              {(form.notes?.length || 0)}/500
            </span>
          </div>
        </Field>
      </div>
    </div>
  );
}