"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  ASSIGNMENT_SERVICE_TYPE_OPTIONS, ASSIGNMENT_MINISTRY_TEAM_OPTIONS, ASSIGNMENT_DRESS_CODE_OPTIONS, ASSIGNMENT_LOCATION_OPTIONS,
} from "@/lib/mock/serviceAssignmentsMockData";

export function ServiceEventInformationSection({ form, setField }) {
  const description = form.description ?? "";
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Service / Event Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="Service / Event Title" required placeholder="Enter service or event name" value={form.title} onChange={(e) => setField("title", e.target.value)} />
        <Input label="Date" required type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} />
        <Select label="Service Type" required value={form.serviceType} onChange={(e) => setField("serviceType", e.target.value)}>
          <option value="">Select service type</option>
          {ASSIGNMENT_SERVICE_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>

        <Select label="Ministry / Team" required value={form.ministryTeam} onChange={(e) => setField("ministryTeam", e.target.value)}>
          <option value="">Select ministry or team</option>
          {ASSIGNMENT_MINISTRY_TEAM_OPTIONS.map((m) => <option key={m}>{m}</option>)}
        </Select>
        <Input label="Start Time" required type="time" value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
        <Select label="Dress Code" value={form.dressCode} onChange={(e) => setField("dressCode", e.target.value)}>
          <option value="">Select dress code</option>
          {ASSIGNMENT_DRESS_CODE_OPTIONS.map((d) => <option key={d}>{d}</option>)}
        </Select>

        <Select label="Location" required value={form.location} onChange={(e) => setField("location", e.target.value)}>
          <option value="">Select location</option>
          {ASSIGNMENT_LOCATION_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </Select>
        <Input label="End Time" required type="time" value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />
        <div>
          <Textarea
            label="Description" rows={3} maxLength={250}
            placeholder="Enter a brief description (optional)"
            value={description} onChange={(e) => setField("description", e.target.value)}
          />
          <p className="mt-1 text-right text-xs text-ink-subtle">{description.length}/250</p>
        </div>
      </div>
    </div>
  );
}
