"use client";

import { Select } from "@/components/ui/Input";
import { VOLUNTEERS_LIST_MOCK } from "@/lib/mock/volunteersMockData";
import { AVAILABILITY_MINISTRY_OPTIONS, AVAILABILITY_ROLE_OPTIONS } from "@/lib/mock/availabilityMockData";

const VOLUNTEER_CHOICES = VOLUNTEERS_LIST_MOCK.slice(0, 8);

export function VolunteerInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Volunteer Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Select label="Volunteer" required value={form.volunteerId} onChange={(e) => setField("volunteerId", e.target.value)}>
          <option value="">Select volunteer</option>
          {VOLUNTEER_CHOICES.map((v) => <option key={v.id} value={v.id}>{v.name} ({v.id})</option>)}
        </Select>
        <Select label="Ministry / Team" required value={form.ministryTeam} onChange={(e) => setField("ministryTeam", e.target.value)}>
          <option value="">Select ministry or team</option>
          {AVAILABILITY_MINISTRY_OPTIONS.map((m) => <option key={m}>{m}</option>)}
        </Select>
        <Select label="Role / Position" required value={form.role} onChange={(e) => setField("role", e.target.value)}>
          <option value="">Select role or position</option>
          {AVAILABILITY_ROLE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </Select>
      </div>
    </div>
  );
}
