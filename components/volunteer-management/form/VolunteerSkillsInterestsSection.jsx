"use client";

import { Input } from "@/components/ui/Input";
import { VOLUNTEER_SKILL_OPTIONS, VOLUNTEER_INTEREST_OPTIONS } from "@/lib/mock/volunteersMockData";

function CheckboxGrid({ options, selected, onToggle }) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2 text-sm text-ink">
          <input
            type="checkbox" checked={selected.includes(opt)} onChange={() => onToggle(opt)}
            className="h-4 w-4 rounded border-border text-success-600 focus-visible:ring-success-500"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

export function VolunteerSkillsInterestsSection({ form, setField, toggleListField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Skills &amp; Interests</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Skills (Select all that apply)</label>
          <CheckboxGrid options={VOLUNTEER_SKILL_OPTIONS} selected={form.skills} onToggle={(v) => toggleListField("skills", v)} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Interests / Areas of Service (Select all that apply)</label>
          <CheckboxGrid options={VOLUNTEER_INTEREST_OPTIONS} selected={form.interests} onToggle={(v) => toggleListField("interests", v)} />
        </div>
        <Input label="Languages Known" placeholder="Enter languages known" value={form.languagesKnown} onChange={(e) => setField("languagesKnown", e.target.value)} />
        <Input label="Special Talents / Hobbies" placeholder="Enter special talents or hobbies" value={form.specialTalents} onChange={(e) => setField("specialTalents", e.target.value)} />
      </div>
    </div>
  );
}
