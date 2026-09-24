"use client";

import { Input, Select } from "@/components/ui/Input";
import {
  VOLUNTEER_MINISTRY_OPTIONS, VOLUNTEER_ROLE_OPTIONS, VOLUNTEER_HEAR_ABOUT_OPTIONS, VOLUNTEER_MEMBER_STATUS_OPTIONS,
} from "@/lib/mock/volunteersMockData";

export function VolunteerMinistryRoleSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Ministry &amp; Role Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Select label="Primary Ministry / Department" required value={form.primaryMinistry} onChange={(e) => setField("primaryMinistry", e.target.value)}>
          <option value="">Select ministry</option>
          {VOLUNTEER_MINISTRY_OPTIONS.map((m) => <option key={m}>{m}</option>)}
        </Select>
        <Select label="Role" required value={form.role} onChange={(e) => setField("role", e.target.value)}>
          <option value="">Select role</option>
          {VOLUNTEER_ROLE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </Select>
        <Input label="Team / Group (if any)" placeholder="Select team (if any)" value={form.team} onChange={(e) => setField("team", e.target.value)} />

        <Input label="Serving Since" type="date" value={form.servingSince} onChange={(e) => setField("servingSince", e.target.value)} />
        <Select label="How did you hear about our church?" value={form.hearAboutChurch} onChange={(e) => setField("hearAboutChurch", e.target.value)}>
          <option value="">Select an option</option>
          {VOLUNTEER_HEAR_ABOUT_OPTIONS.map((h) => <option key={h}>{h}</option>)}
        </Select>
        <Select label="Member Status" value={form.memberStatus} onChange={(e) => setField("memberStatus", e.target.value)}>
          <option value="">Select status</option>
          {VOLUNTEER_MEMBER_STATUS_OPTIONS.map((m) => <option key={m}>{m}</option>)}
        </Select>
      </div>
    </div>
  );
}
