"use client";

import { Users2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value ?? "—"}</p>
    </div>
  );
}

export function GroupInformationCard({ group }) {
  if (!group) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50">
          <Users2 className="h-4 w-4 text-interactive-600" />
        </span>
        <h3 className="text-sm font-semibold text-ink">Group Information</h3>
      </div>
      <div className="flex flex-col gap-4">
        <Row label="Fellowship Group" value={group.name} />
        <Row label="Group Leader" value={group.leader} />
        <Row label="Co-Leader" value={group.coLeader} />
        <div>
          <p className="text-xs text-ink-subtle">Group Role</p>
          <div className="mt-1"><Badge variant="success">{group.role}</Badge></div>
        </div>
        <Row label="Joined On" value={formatDate(group.joinedOn)} />
        <Row label="Meeting Day" value={group.meetingDay} />
        <Row label="Meeting Time" value={group.meetingTime} />
        <Row label="Meeting Location" value={group.location} />
      </div>
    </div>
  );
}
