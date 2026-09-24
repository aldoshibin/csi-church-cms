"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  FG_LEADER_OPTIONS, FG_MINISTRY_FOCUS_OPTIONS, FG_STATUS_OPTIONS,
  FG_MEETING_DAY_OPTIONS, FG_MEETING_TIME_OPTIONS, FG_MEETING_LOCATION_OPTIONS, FG_AGE_GROUP_OPTIONS,
} from "@/lib/mock/fellowshipGroupsMockData";

export function NewFellowshipGroupForm({ form, setField }) {
  const years = Array.from({ length: 15 }, (_, i) => 2026 - i);

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Group Information</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Input label="Group Name" required placeholder="Enter group name" value={form.groupName} onChange={(e) => setField("groupName", e.target.value)} />
          <Select label="Leader" required value={form.leader} onChange={(e) => setField("leader", e.target.value)}>
            <option value="">Select leader</option>
            {FG_LEADER_OPTIONS.map((l) => <option key={l}>{l}</option>)}
          </Select>

          <Select label="Co-Leader" value={form.coLeader} onChange={(e) => setField("coLeader", e.target.value)}>
            <option value="">Select co-leader (Optional)</option>
            {FG_LEADER_OPTIONS.map((l) => <option key={l}>{l}</option>)}
          </Select>
          <Select label="Ministry Focus" required value={form.ministryFocus} onChange={(e) => setField("ministryFocus", e.target.value)}>
            <option value="">Select ministry focus</option>
            {FG_MINISTRY_FOCUS_OPTIONS.map((m) => <option key={m}>{m}</option>)}
          </Select>

          <Select label="Established Year" required value={form.establishedYear} onChange={(e) => setField("establishedYear", e.target.value)}>
            <option value="">Select year</option>
            {years.map((y) => <option key={y}>{y}</option>)}
          </Select>
          <Select label="Status" required value={form.status} onChange={(e) => setField("status", e.target.value)}>
            <option value="">Select status</option>
            {FG_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </Select>

          <div className="sm:col-span-2">
            <Textarea
              label="Description" rows={3} maxLength={500} placeholder="Enter group description and purpose"
              helperText={`${form.description.length}/500`}
              value={form.description} onChange={(e) => setField("description", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Meeting Details</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Select label="Meeting Day" required value={form.meetingDay} onChange={(e) => setField("meetingDay", e.target.value)}>
            <option value="">Select meeting day</option>
            {FG_MEETING_DAY_OPTIONS.map((d) => <option key={d}>{d}</option>)}
          </Select>
          <Select label="Meeting Time" required value={form.meetingTime} onChange={(e) => setField("meetingTime", e.target.value)}>
            <option value="">Select time</option>
            {FG_MEETING_TIME_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </Select>

          <Select label="Meeting Location" required value={form.meetingLocation} onChange={(e) => setField("meetingLocation", e.target.value)}>
            <option value="">Select meeting location</option>
            {FG_MEETING_LOCATION_OPTIONS.map((l) => <option key={l}>{l}</option>)}
          </Select>
          <Input label="Room (if applicable)" placeholder="Enter room name or number" value={form.room} onChange={(e) => setField("room", e.target.value)} />
        </div>
        <label className="mt-4 flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.meetsOnline} onChange={(e) => setField("meetsOnline", e.target.checked)} />
          This group meets online
        </label>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-ink">Group Settings</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Input label="Maximum Members (Optional)" type="number" placeholder="Enter maximum members" value={form.maximumMembers} onChange={(e) => setField("maximumMembers", e.target.value)} />
          <Select label="Age Group (Primary Focus)" value={form.ageGroup} onChange={(e) => setField("ageGroup", e.target.value)}>
            <option value="">Select age group</option>
            {FG_AGE_GROUP_OPTIONS.map((a) => <option key={a}>{a}</option>)}
          </Select>
        </div>
      </div>
    </div>
  );
}
