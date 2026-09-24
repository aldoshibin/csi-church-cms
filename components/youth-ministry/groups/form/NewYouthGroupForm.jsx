"use client";

import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  YG_AGE_GROUP_OPTIONS, YG_GROUP_TYPE_OPTIONS, YG_MEETING_DAY_OPTIONS, YG_LEADER_OPTIONS,
} from "@/lib/mock/youthGroupsMockData";

export function NewYouthGroupForm({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">1. Group Information</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="Group Name" required placeholder="Enter group name" value={form.groupName} onChange={(e) => setField("groupName", e.target.value)} />
        <Select label="Age Group" required value={form.ageGroup} onChange={(e) => setField("ageGroup", e.target.value)}>
          <option value="">Select age group</option>
          {YG_AGE_GROUP_OPTIONS.map((a) => <option key={a}>{a}</option>)}
        </Select>
        <Select label="Group Type" required value={form.groupType} onChange={(e) => setField("groupType", e.target.value)}>
          <option value="">Select group type</option>
          {YG_GROUP_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>

        <Select label="Meeting Day" required value={form.meetingDay} onChange={(e) => setField("meetingDay", e.target.value)}>
          <option value="">Select day</option>
          {YG_MEETING_DAY_OPTIONS.map((d) => <option key={d}>{d}</option>)}
        </Select>
        <Input label="Start Time" required type="time" value={form.startTime} onChange={(e) => setField("startTime", e.target.value)} />
        <Input label="End Time" required type="time" value={form.endTime} onChange={(e) => setField("endTime", e.target.value)} />

        <Input label="Location" required placeholder="Enter meeting location" value={form.location} onChange={(e) => setField("location", e.target.value)} />
        <Input label="Maximum Members (Optional)" type="number" placeholder="Enter maximum members" value={form.maximumMembers} onChange={(e) => setField("maximumMembers", e.target.value)} />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Group Status <span className="text-danger-500">*</span></label>
          <div className="flex h-[42px] items-center gap-6">
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="group-status" className="h-4 w-4 accent-interactive-500" checked={form.status === "Active"} onChange={() => setField("status", "Active")} />
              Active
            </label>
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="radio" name="group-status" className="h-4 w-4 accent-interactive-500" checked={form.status === "Inactive"} onChange={() => setField("status", "Inactive")} />
              Inactive
            </label>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Textarea
          label="Description (Optional)" rows={3} maxLength={500} placeholder="Enter group description, purpose and goals..."
          helperText={`${form.description.length} / 500`}
          value={form.description} onChange={(e) => setField("description", e.target.value)}
        />
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">2. Group Leader</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select label="Primary Leader" required value={form.primaryLeader} onChange={(e) => setField("primaryLeader", e.target.value)}>
          <option value="">Search and select leader</option>
          {YG_LEADER_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </Select>
        <Select label="Co-Leader (Optional)" value={form.coLeader} onChange={(e) => setField("coLeader", e.target.value)}>
          <option value="">Search and select co-leader</option>
          {YG_LEADER_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </Select>

        <Input label="Leader Email" value={form.leaderEmail} placeholder="Leader email will appear here" disabled />
        <Input label="Leader Phone" value={form.leaderPhone} placeholder="Leader phone will appear here" disabled />
      </div>

      <h3 className="mb-4 mt-7 text-base font-semibold text-ink">3. Group Preferences</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <p className="mb-1.5 text-sm font-medium text-ink">Allow New Members</p>
          <label className="flex items-center gap-2 text-sm text-ink-muted">
            <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.allowNewMembers} onChange={(e) => setField("allowNewMembers", e.target.checked)} />
            Yes, allow new members to join this group
          </label>
        </div>
        <div>
          <p className="mb-1.5 text-sm font-medium text-ink">Require Approval</p>
          <label className="flex items-center gap-2 text-sm text-ink-muted">
            <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.requireApproval} onChange={(e) => setField("requireApproval", e.target.checked)} />
            Require approval to join
          </label>
        </div>

        <div>
          <p className="mb-1.5 text-sm font-medium text-ink">Display Group in Directory</p>
          <label className="flex items-center gap-2 text-sm text-ink-muted">
            <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.displayInDirectory} onChange={(e) => setField("displayInDirectory", e.target.checked)} />
            Show this group in the public directory
          </label>
        </div>
        <div>
          <p className="mb-1.5 text-sm font-medium text-ink">Send Notifications</p>
          <label className="flex items-center gap-2 text-sm text-ink-muted">
            <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form.sendNotifications} onChange={(e) => setField("sendNotifications", e.target.checked)} />
            Send notifications for group updates and meetings
          </label>
        </div>
      </div>
    </div>
  );
}
