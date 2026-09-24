"use client";

import { X } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  MFG_FOCUS_AREA_OPTIONS, MFG_MEETING_DAY_OPTIONS, MFG_MEETING_TIME_OPTIONS,
  MFG_ENABLE_OPTIONS, MFG_STATUS_OPTIONS, MFG_YES_NO_OPTIONS,
} from "@/lib/mock/mensFellowshipGroupsMockData";

export function NewMfFellowshipGroupForm({ form, setField, onAddTag, onRemoveTag }) {
  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      e.preventDefault();
      onAddTag(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Group Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Input label="Group Name" required placeholder="Enter group name" value={form.groupName} onChange={(e) => setField("groupName", e.target.value)} />
          <Input label="Group ID (Auto-generated)" value={form.groupId} disabled helperText="Group ID will be generated automatically" />
          <Input label="Established On" required type="date" value={form.establishedOn} onChange={(e) => setField("establishedOn", e.target.value)} />

          <Select label="Focus Area" required value={form.focusArea} onChange={(e) => setField("focusArea", e.target.value)}>
            <option value="">Select focus area</option>
            {MFG_FOCUS_AREA_OPTIONS.map((f) => <option key={f}>{f}</option>)}
          </Select>
          <Select label="Meeting Day" required value={form.meetingDay} onChange={(e) => setField("meetingDay", e.target.value)}>
            <option value="">Select meeting day</option>
            {MFG_MEETING_DAY_OPTIONS.map((d) => <option key={d}>{d}</option>)}
          </Select>
          <Select label="Meeting Time" required value={form.meetingTime} onChange={(e) => setField("meetingTime", e.target.value)}>
            <option value="">Select time</option>
            {MFG_MEETING_TIME_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </Select>

          <div className="sm:col-span-3">
            <Textarea
              label="Description" rows={2} maxLength={500} placeholder="Enter group description"
              helperText={`${form.description.length} / 500 characters`}
              value={form.description} onChange={(e) => setField("description", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Group Settings</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
          <div>
            <Select label="Attendance Tracking" value={form.attendanceTracking} onChange={(e) => setField("attendanceTracking", e.target.value)}>
              {MFG_ENABLE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </Select>
            <p className="mt-1.5 text-xs text-ink-subtle">Track attendance for meetings and activities</p>
          </div>
          <div>
            <Select label="Group Status" value={form.groupStatus} onChange={(e) => setField("groupStatus", e.target.value)}>
              {MFG_STATUS_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </Select>
            <p className="mt-1.5 text-xs text-ink-subtle">Active groups are visible to members</p>
          </div>
          <div>
            <Select label="Meeting Reminder" value={form.meetingReminder} onChange={(e) => setField("meetingReminder", e.target.value)}>
              {MFG_ENABLE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </Select>
            <p className="mt-1.5 text-xs text-ink-subtle">Send meeting reminders to members</p>
          </div>
          <div>
            <Select label="Allow New Members" value={form.allowNewMembers} onChange={(e) => setField("allowNewMembers", e.target.value)}>
              {MFG_YES_NO_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </Select>
            <p className="mt-1.5 text-xs text-ink-subtle">Allow members to join this group</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Additional Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">Tags / Categories</label>
            <div className="flex min-h-[42px] flex-wrap items-center gap-1.5 rounded-lg border border-border px-2 py-1.5">
              {form.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 rounded-full bg-interactive-50 px-2.5 py-1 text-xs font-medium text-interactive-600">
                  {tag}
                  <button type="button" onClick={() => onRemoveTag(tag)} aria-label={`Remove ${tag}`}><X className="h-3 w-3" /></button>
                </span>
              ))}
              <input
                onKeyDown={handleTagKeyDown}
                placeholder={form.tags.length === 0 ? "Add tags or categories (e.g., Bible Study, Prayer, Outreach)" : ""}
                className="min-w-[120px] flex-1 border-0 bg-transparent px-1 py-1 text-sm text-ink placeholder:text-ink-subtle focus:outline-none"
              />
            </div>
            <p className="mt-1.5 text-xs text-ink-subtle">Type and press Enter to add tags</p>
          </div>
          <Textarea
            label="Notes" rows={2} maxLength={300} placeholder="Add any additional notes (optional)"
            helperText={`${form.notes.length} / 300 characters`}
            value={form.notes} onChange={(e) => setField("notes", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
