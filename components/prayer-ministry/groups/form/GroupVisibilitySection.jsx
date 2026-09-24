"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { GROUP_VISIBILITY_OPTIONS, GROUP_JOIN_POLICY_OPTIONS } from "@/lib/mock/prayerGroupsMockData";

function RadioRow({ name, value, current, onChange, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-ink">
      <input type="radio" name={name} checked={current === value} onChange={() => onChange(value)} className="h-4 w-4 border-border text-success-600 focus-visible:ring-success-500" />
      {label}
    </label>
  );
}

const CANDIDATE_MEMBERS = ["Grace Mary", "James Peter", "Linda Joseph", "Mark Daniel", "Reena Elizabeth"];

export function GroupVisibilitySection({ form, setField, toggleInvitedMember }) {
  const [search, setSearch] = useState("");
  const filtered = CANDIDATE_MEMBERS.filter((m) => m.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Group Visibility</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Who can view this group? <span className="text-danger-500">*</span></label>
          <div className="flex flex-col gap-2">
            {GROUP_VISIBILITY_OPTIONS.map((v) => (
              <RadioRow key={v} name="visibility" value={v} current={form.visibility} onChange={(val) => setField("visibility", val)} label={v} />
            ))}
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">Allow New Members to Join? <span className="text-danger-500">*</span></label>
          <div className="flex flex-col gap-2">
            {GROUP_JOIN_POLICY_OPTIONS.map((v) => (
              <RadioRow key={v} name="joinPolicy" value={v} current={form.joinPolicy} onChange={(val) => setField("joinPolicy", val)} label={v} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <h4 className="mb-2 text-sm font-semibold text-ink">Invite Members (Optional)</h4>
        <label className="mb-1.5 block text-sm font-medium text-ink">Add Members</label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search members by name or phone"
            className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        {search && (
          <div className="mt-2 flex flex-col gap-1 rounded-md border border-border bg-white p-2">
            {filtered.map((m) => (
              <label key={m} className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm text-ink hover:bg-surface-canvas">
                <input type="checkbox" checked={form.invitedMembers.includes(m)} onChange={() => toggleInvitedMember(m)} className="h-4 w-4 rounded border-border text-success-600" />
                {m}
              </label>
            ))}
          </div>
        )}
        <p className="mt-1.5 text-xs text-ink-subtle">You can add members after creating the group as well.</p>
      </div>
    </div>
  );
}
