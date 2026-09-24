"use client";

import { Textarea } from "@/components/ui/Input";
import { INTERCESSOR_PRAYER_AREA_OPTIONS, INTERCESSOR_CONTACT_TIME_OPTIONS } from "@/lib/mock/intercessorsMockData";

export function IntercessorPrayerAreasSection({ form, toggleListField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Assigned Prayer Areas</h3>
      <label className="mb-2 block text-sm font-medium text-ink">Select one or more prayer areas <span className="text-danger-500">*</span></label>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {INTERCESSOR_PRAYER_AREA_OPTIONS.map((area) => (
          <label key={area} className="flex items-center gap-2 text-sm text-ink">
            <input
              type="checkbox" checked={form.prayerAreas.includes(area)} onChange={() => toggleListField("prayerAreas", area)}
              className="h-4 w-4 rounded border-border text-success-600 focus-visible:ring-success-500"
            />
            {area}
          </label>
        ))}
      </div>
    </div>
  );
}

function YesNoSelect({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="h-9 w-28 rounded-md border border-border bg-white px-2 text-sm text-ink">
      <option>Yes</option>
      <option>No</option>
    </select>
  );
}

export function IntercessorPrayerPreferencesSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Prayer Preferences</h3>
      <label className="mb-2 block text-sm font-medium text-ink">Preferences <span className="text-danger-500">*</span></label>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm text-ink-muted">Prefers to be contacted for urgent prayers</span>
          <YesNoSelect value={form.prefersUrgentContact} onChange={(v) => setField("prefersUrgentContact", v)} />
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm text-ink-muted">Prefers anonymous prayer requests</span>
          <YesNoSelect value={form.prefersAnonymous} onChange={(v) => setField("prefersAnonymous", v)} />
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm text-ink-muted">Best time to contact</span>
          <select value={form.bestTimeToContact} onChange={(e) => setField("bestTimeToContact", e.target.value)} className="h-9 w-32 rounded-md border border-border bg-white px-2 text-sm text-ink">
            {INTERCESSOR_CONTACT_TIME_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm text-ink-muted">Comfortable with group assignments</span>
          <YesNoSelect value={form.comfortableGroupAssignments} onChange={(v) => setField("comfortableGroupAssignments", v)} />
        </div>
      </div>
      <div className="mt-4">
        <Textarea
          label="Notes (Optional)" rows={2} maxLength={200} placeholder="Any additional notes about prayer preferences"
          helperText={`${form.preferenceNotes.length}/200`}
          value={form.preferenceNotes} onChange={(e) => setField("preferenceNotes", e.target.value)}
        />
      </div>
    </div>
  );
}
