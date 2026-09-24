"use client";

import { Info, UsersRound, Upload } from "lucide-react";
import { Select } from "@/components/ui/Input";
import { MFG_LEADER_OPTIONS } from "@/lib/mock/mensFellowshipGroupsMockData";

export function SelectGroupLeadersPanel({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Select Group Leaders</h3>
      <p className="mb-3 text-xs text-ink-subtle">Add leader and co-leader for this group.</p>
      <div className="flex flex-col gap-4">
        <Select label="Leader" required value={form.leader} onChange={(e) => setField("leader", e.target.value)}>
          <option value="">Search and select leader</option>
          {MFG_LEADER_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </Select>
        <Select label="Co-Leader" value={form.coLeader} onChange={(e) => setField("coLeader", e.target.value)}>
          <option value="">Search and select co-leader</option>
          {MFG_LEADER_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </Select>
      </div>
      <div className="mt-4 flex gap-2.5 rounded-lg bg-interactive-50 p-3 text-xs text-interactive-700">
        <Info className="h-4 w-4 shrink-0" />
        You can change group leaders later from the group details page.
      </div>
    </div>
  );
}

export function GroupAvatarPanel({ avatarName, onUpload }) {
  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) onUpload(file.name);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Group Avatar</h3>
      <p className="mb-3 text-xs text-ink-subtle">Upload a group avatar or icon.</p>
      <div className="flex flex-col items-center gap-3 rounded-lg border-2 border-dashed border-border py-6">
        <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-success-50">
          <UsersRound className="h-9 w-9 text-success-600" />
          <span className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-interactive-600 text-white">
            <Upload className="h-3 w-3" />
          </span>
        </span>
        <label className="cursor-pointer rounded-md border border-border px-3 py-1.5 text-xs font-medium text-ink-muted hover:bg-surface-canvas">
          Upload Image
          <input type="file" className="hidden" accept=".jpg,.jpeg,.png,.gif" onChange={handleChange} />
        </label>
        <p className="text-xs text-ink-subtle">{avatarName || "or drag and drop"}</p>
        <p className="text-[11px] text-ink-subtle">PNG, JPG or GIF (Max. 2MB)</p>
      </div>
    </div>
  );
}
