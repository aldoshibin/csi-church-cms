"use client";

import { Users, Building2 } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { ToggleSwitch } from "@/components/mens-fellowship/shared/ToggleSwitch";
import { ServiceAttachmentsUpload } from "./ServiceAttachmentsUpload";
import {
  SERVICE_TYPE_OPTIONS, SERVICE_LOCATION_OPTIONS, SERVICE_LANGUAGE_OPTIONS, SERVICE_DRESS_CODE_OPTIONS,
  SERVICE_DEPARTMENT_OPTIONS, SERVICE_ORGANIZED_BY_OPTIONS, SERVICE_LEADER_OPTIONS, SERVICE_STATUS_OPTIONS, SERVICE_SONGS_SETLIST_OPTIONS,
} from "@/lib/mock/servicesMockData";

export function NewServiceForm({ form, setField, addAttachments, removeAttachment }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Service Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input label="Service Title" required placeholder="Enter service title" value={form.title} onChange={(e) => setField("title", e.target.value)} />
          <Select label="Service Type" required value={form.type} onChange={(e) => setField("type", e.target.value)}>
            <option value="">Select service type</option>
            {SERVICE_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </Select>
          <Input label="Short Code / Abbreviation" placeholder="E.g., SUN, YTH, PRY (Optional)" value={form.shortCode} onChange={(e) => setField("shortCode", e.target.value)} />

          <div className="sm:col-span-1">
            <Textarea label="Description" rows={3} maxLength={250} placeholder="Enter a brief description about this service" helperText={`${form.description.length}/250`} value={form.description} onChange={(e) => setField("description", e.target.value)} />
          </div>
          <Select label="Department / Group" value={form.department} onChange={(e) => setField("department", e.target.value)}>
            <option value="">Select department or group (Optional)</option>
            {SERVICE_DEPARTMENT_OPTIONS.map((d) => <option key={d}>{d}</option>)}
          </Select>
          <Select label="Status" required value={form.status} onChange={(e) => setField("status", e.target.value)}>
            {SERVICE_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </Select>

          <Input label="Service Date" required type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} />
          <Input label="Start Time" required type="time" value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
          <Input label="End Time" required type="time" value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />

          <Select label="Location" required value={form.location} onChange={(e) => setField("location", e.target.value)}>
            <option value="">Select location</option>
            {SERVICE_LOCATION_OPTIONS.map((l) => <option key={l}>{l}</option>)}
          </Select>
          <Select label="Language" value={form.language} onChange={(e) => setField("language", e.target.value)}>
            <option value="">Select language</option>
            {SERVICE_LANGUAGE_OPTIONS.map((l) => <option key={l}>{l}</option>)}
          </Select>
          <Select label="Dress Code" value={form.dressCode} onChange={(e) => setField("dressCode", e.target.value)}>
            <option value="">Select dress code (Optional)</option>
            {SERVICE_DRESS_CODE_OPTIONS.map((d) => <option key={d}>{d}</option>)}
          </Select>
        </div>

        <div className="mt-5">
          <ToggleSwitch label="Livestream" description="Service will be livestreamed" checked={form.livestream} onChange={(v) => setField("livestream", v)} />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Service Details</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Input label="Expected Attendance" type="number" placeholder="Enter expected attendance" rightIcon={<Users className="h-4 w-4" />} value={form.expectedAttendance} onChange={(e) => setField("expectedAttendance", e.target.value)} />
          <Input label="Location Capacity (Optional)" type="number" placeholder="Enter location capacity" rightIcon={<Users className="h-4 w-4" />} value={form.locationCapacity} onChange={(e) => setField("locationCapacity", e.target.value)} />
          <Select label="Organized By" required value={form.organizedBy} onChange={(e) => setField("organizedBy", e.target.value)}>
            <option value="">Select team or group</option>
            {SERVICE_ORGANIZED_BY_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </Select>
          <Select label="Led By" required value={form.ledBy} onChange={(e) => setField("ledBy", e.target.value)}>
            <option value="">Select leader</option>
            {SERVICE_LEADER_OPTIONS.map((l) => <option key={l}>{l}</option>)}
          </Select>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Additional Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Select label="Songs & Setlist" value={form.songsSetlist} onChange={(e) => setField("songsSetlist", e.target.value)}>
            <option value="">Select songs & setlist (Optional)</option>
            {SERVICE_SONGS_SETLIST_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </Select>
          <Textarea label="Notes (Optional)" rows={3} maxLength={250} placeholder="Add any additional notes here..." helperText={`${form.notes.length}/250`} value={form.notes} onChange={(e) => setField("notes", e.target.value)} />
          <ServiceAttachmentsUpload attachments={form.attachments} onAdd={addAttachments} onRemove={removeAttachment} />
        </div>
      </div>
    </div>
  );
}
