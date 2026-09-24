"use client";

import Link from "next/link";
import { formatDate } from "@/lib/utils";

export function GroupSummaryTable({ groups = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Group Summary</h3>
        <Link href="/mens-fellowship/reports" className="text-xs font-medium text-interactive-500 hover:underline">View Report</Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-ink-subtle">
              <th className="px-4 py-2.5 font-medium">Group Name</th>
              <th className="px-4 py-2.5 font-medium">Leader</th>
              <th className="px-4 py-2.5 font-medium">Members</th>
              <th className="px-4 py-2.5 font-medium">Activities</th>
              <th className="px-4 py-2.5 font-medium">Attendance Rate</th>
              <th className="px-4 py-2.5 font-medium">Last Meeting</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((g) => (
              <tr key={g.name} className="border-b border-surface-muted last:border-0">
                <td className="px-4 py-3 font-medium text-ink">{g.name}</td>
                <td className="px-4 py-3 text-ink-muted">{g.leader}</td>
                <td className="px-4 py-3 text-ink">{g.members}</td>
                <td className="px-4 py-3 text-ink">{g.activities}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-surface-muted">
                      <div className="h-full rounded-full bg-success-500" style={{ width: `${g.attendanceRate}%` }} />
                    </div>
                    <span className="text-xs font-medium text-ink">{g.attendanceRate}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-ink-muted">{formatDate(g.lastMeeting)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
