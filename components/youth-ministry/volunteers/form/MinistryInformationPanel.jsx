"use client";

import { ClipboardList } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { VOL_MINISTRY_OPTIONS, VOL_ROLE_OPTIONS, VOL_WEEKLY_AVAILABILITY_OPTIONS } from "@/lib/mock/ymVolunteersMockData";

export function MinistryInformationPanel({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
        <ClipboardList className="h-4 w-4 text-interactive-600" /> Ministry Information
      </h3>
      <div className="flex flex-col gap-4">
        <Select label="Ministry / Department" required value={form.ministryDept} onChange={(e) => setField("ministryDept", e.target.value)}>
          <option value="">Select ministry / department</option>
          {VOL_MINISTRY_OPTIONS.map((m) => <option key={m}>{m}</option>)}
        </Select>
        <Select label="Role" required value={form.role} onChange={(e) => setField("role", e.target.value)}>
          <option value="">Select role</option>
          {VOL_ROLE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </Select>
        <Textarea
          label="Areas of Service / Skills" required rows={2} placeholder="Enter areas of service or skills"
          helperText="E.g., Teaching, Music, Counseling, Event Planning"
          value={form.areasOfService} onChange={(e) => setField("areasOfService", e.target.value)}
        />
        <Input label="Service Start Date" required type="date" value={form.serviceStartDate} onChange={(e) => setField("serviceStartDate", e.target.value)} />
        <Select label="Weekly Availability" required value={form.weeklyAvailability} onChange={(e) => setField("weeklyAvailability", e.target.value)}>
          <option value="">Select availability</option>
          {VOL_WEEKLY_AVAILABILITY_OPTIONS.map((a) => <option key={a}>{a}</option>)}
        </Select>
        <Input label="Preferred Days & Time" placeholder="E.g., Sunday 9AM - 1PM" value={form.preferredDaysTime} onChange={(e) => setField("preferredDaysTime", e.target.value)} />
      </div>
    </div>
  );
}
