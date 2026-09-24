"use client";

import { Mail, MapPin } from "lucide-react";
import { Input, Select } from "@/components/ui/Input";
import {
  MINISTRY_HEAD_OPTIONS, MINISTRY_SERVICE_TIME_OPTIONS, MINISTRY_STATUS_OPTIONS,
} from "@/lib/mock/ministriesTeamsMockData";

export function MinistryDetailsSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Ministry Details</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select label="Ministry Head / Leader" required value={form.ministryHead} onChange={(e) => setField("ministryHead", e.target.value)}>
          <option value="">Select ministry head</option>
          {MINISTRY_HEAD_OPTIONS.map((h) => <option key={h}>{h}</option>)}
        </Select>
        <Input label="Contact Email" type="email" leftIcon={<Mail className="h-4 w-4" />} placeholder="Enter email address" value={form.contactEmail} onChange={(e) => setField("contactEmail", e.target.value)} />

        <Input label="Contact Phone" placeholder="Enter phone number" value={form.contactPhone} onChange={(e) => setField("contactPhone", e.target.value)} />
        <Input label="Established On" type="date" value={form.establishedOn} onChange={(e) => setField("establishedOn", e.target.value)} />

        <Select label="Preferred Service Time" value={form.preferredServiceTime} onChange={(e) => setField("preferredServiceTime", e.target.value)}>
          <option value="">Select preferred service time</option>
          {MINISTRY_SERVICE_TIME_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
        <Select label="Status" required value={form.status} onChange={(e) => setField("status", e.target.value)}>
          {MINISTRY_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>

        <div className="sm:col-span-2">
          <Input label="Ministry Location (Optional)" leftIcon={<MapPin className="h-4 w-4" />} placeholder="Enter ministry location" value={form.location} onChange={(e) => setField("location", e.target.value)} />
        </div>
      </div>
    </div>
  );
}
