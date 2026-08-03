
import { Field, TextInput, SelectInput, CARD_CLS } from "./fields";
import { Info } from "lucide-react";

export function StepFamilyDateandTime({ form, set }) {
  return (
    <div className={CARD_CLS}>
      {/* Header */}
      <h2 className="text-lg font-bold text-ink">Date &amp; Time</h2>
      <p className="mt-1 text-sm text-ink-subtle">
        Please select the date and time for the event.
      </p>

      {/* Date & Time */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Field label="Event Start Date" required>
          <TextInput
            type="date"
            value={form.start_date}
            onChange={(e) => set({ start_date: e.target.value })}
          />
        </Field>

        <Field label="Event Start Time" required>
          <SelectInput
            value={form.start_time}
            onChange={(e) => set({ start_time: e.target.value })}
          >
            <option value="">Select start time</option>
            <option>08:00 AM</option>
            <option>09:00 AM</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>01:00 PM</option>
            <option>02:00 PM</option>
            <option>03:00 PM</option>
            <option>04:00 PM</option>
            <option>05:00 PM</option>
            <option>06:00 PM</option>
          </SelectInput>
        </Field>

        <Field label="Event End Date" required>
          <TextInput
            type="date"
            value={form.end_date}
            onChange={(e) => set({ end_date: e.target.value })}
          />
        </Field>

        <Field label="Event End Time" required>
          <SelectInput
            value={form.end_time}
            onChange={(e) => set({ end_time: e.target.value })}
          >
            <option value="">Select end time</option>
            <option>08:00 AM</option>
            <option>09:00 AM</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>01:00 PM</option>
            <option>02:00 PM</option>
            <option>03:00 PM</option>
            <option>04:00 PM</option>
            <option>05:00 PM</option>
            <option>06:00 PM</option>
          </SelectInput>
        </Field>
      </div>

      {/* Time Zone */}
      <div className="mt-6 max-w-xl">
        <Field label="Time Zone">
          <SelectInput
            value={form.time_zone}
            onChange={(e) => set({ time_zone: e.target.value })}
          >
            <option value="Asia/Kolkata">
              (GMT+05:30) Asia/Kolkata - India Standard Time
            </option>
            <option value="Asia/Dubai">
              (GMT+04:00) Asia/Dubai
            </option>
            <option value="Europe/London">
              (GMT+00:00) Europe/London
            </option>
          </SelectInput>
        </Field>
      </div>

      {/* All Day Event */}
      <div className="mt-8">
        <h3 className="mb-4 text-sm font-semibold text-ink">
          All Day Event
        </h3>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={form.all_day || false}
            onChange={(e) => set({ all_day: e.target.checked })}
            className="h-4 w-4 rounded border-border"
          />

          <span className="text-sm text-ink">
            Yes, this is an all day event
          </span>
        </label>
      </div>

      {/* Note */}
      <div className="mt-6 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
        <Info className="mt-0.5 h-5 w-5 text-green-600" />

        <p className="text-sm text-green-700">
          <span className="font-semibold">Note:</span> If this is an all day
          event, start and end time will not be required.
        </p>
      </div>
    </div>
  );
}