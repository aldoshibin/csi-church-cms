"use client";

import { Badge } from "@/components/ui/Badge";
import { MEETING_ATTENDANCE_MOCK, ATTENDANCE_STATUS_VARIANT } from "@/lib/mock/mensFellowshipMockData";
import { formatDate } from "@/lib/utils";

export function MeetingAttendanceTab() {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold text-ink">Attendance</h3>
      <table className="w-full text-left text-sm">
        <thead className="text-xs uppercase tracking-wide text-ink-muted">
          <tr>
            <th className="py-2 font-medium">Member</th>
            <th className="py-2 font-medium">Group</th>
            <th className="py-2 font-medium">Date</th>
            <th className="py-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {MEETING_ATTENDANCE_MOCK.map((a) => (
            <tr key={a.id}>
              <td className="py-2.5 font-medium text-ink">{a.member}</td>
              <td className="py-2.5 text-ink-muted">{a.group}</td>
              <td className="py-2.5 text-ink-muted">{formatDate(a.date)}</td>
              <td className="py-2.5"><Badge variant={ATTENDANCE_STATUS_VARIANT[a.status] ?? "default"}>{a.status}</Badge></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
