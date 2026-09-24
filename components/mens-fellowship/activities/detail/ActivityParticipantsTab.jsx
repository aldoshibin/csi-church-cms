"use client";

import { Badge } from "@/components/ui/Badge";
import { ACTIVITY_PARTICIPANTS_MOCK, ACTIVITY_PARTICIPANT_STATUS_VARIANT } from "@/lib/mock/activitiesMockData";

export function ActivityParticipantsTab() {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold text-ink">Participants</h3>
      <table className="w-full text-left text-sm">
        <thead className="text-xs uppercase tracking-wide text-ink-muted">
          <tr>
            <th className="py-2 font-medium">Member</th>
            <th className="py-2 font-medium">Group</th>
            <th className="py-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {ACTIVITY_PARTICIPANTS_MOCK.map((p) => (
            <tr key={p.memberId}>
              <td className="py-2.5 font-medium text-ink">{p.name}</td>
              <td className="py-2.5 text-ink-muted">{p.group}</td>
              <td className="py-2.5"><Badge variant={ACTIVITY_PARTICIPANT_STATUS_VARIANT[p.status] ?? "default"}>{p.status}</Badge></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
