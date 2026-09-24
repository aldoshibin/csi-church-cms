"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import { Users2, Laptop } from "lucide-react";
import { GROUP_TYPE_OPTIONS, GROUP_STATUS_OPTIONS, GROUP_LANGUAGE_OPTIONS, GROUP_MEETING_MODE_OPTIONS } from "@/lib/mock/prayerGroupsMockData";

function MeetingModeOption({ value, current, onChange, icon: Icon, label }) {
  const checked = current === value;
  return (
    <button
      type="button"
      onClick={() => onChange(value)}
      className={`flex flex-1 items-center gap-2 rounded-md border px-3 py-2.5 text-sm transition-colors ${
        checked ? "border-success-500 bg-success-50 text-success-700" : "border-border text-ink-muted hover:bg-surface-canvas"
      }`}
    >
      <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${checked ? "border-success-500" : "border-border"}`}>
        {checked && <span className="h-2 w-2 rounded-full bg-success-500" />}
      </span>
      <Icon className="h-4 w-4" /> {label}
    </button>
  );
}

export function GroupInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Group Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="Group Name" required placeholder="Enter prayer group name" value={form.name} onChange={(e) => setField("name", e.target.value)} />
        <Input
          label="Tagline / Short Description" required maxLength={120} placeholder="Enter a short tagline for the group"
          helperText={`Example: Start the day with prayer and faith  ${form.tagline.length}/120`}
          value={form.tagline} onChange={(e) => setField("tagline", e.target.value)}
        />
        <Select label="Group Status" required value={form.status} onChange={(e) => setField("status", e.target.value)}>
          {GROUP_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>

        <Select label="Group Type" required value={form.type} onChange={(e) => setField("type", e.target.value)}>
          <option value="">Select group type</option>
          {GROUP_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
        <div className="sm:row-span-2">
          <Textarea
            label="Description" required rows={4} maxLength={500} placeholder="Enter group description and purpose"
            helperText={`Tell members what this group is about. ${form.description.length}/500`}
            value={form.description} onChange={(e) => setField("description", e.target.value)}
          />
        </div>
        <Select label="Language" required value={form.language} onChange={(e) => setField("language", e.target.value)}>
          {GROUP_LANGUAGE_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </Select>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Meeting Mode <span className="text-danger-500">*</span></label>
          <div className="flex gap-2">
            <MeetingModeOption value={GROUP_MEETING_MODE_OPTIONS[0]} current={form.meetingMode} onChange={(v) => setField("meetingMode", v)} icon={Users2} label="In-Person" />
            <MeetingModeOption value={GROUP_MEETING_MODE_OPTIONS[1]} current={form.meetingMode} onChange={(v) => setField("meetingMode", v)} icon={Laptop} label="Online (Virtual)" />
          </div>
        </div>
      </div>
    </div>
  );
}
