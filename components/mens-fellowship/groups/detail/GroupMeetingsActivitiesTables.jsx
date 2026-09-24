"use client";

import Link from "next/link";
import { Eye } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function GroupRecentMeetingsTable({ meetings = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <h3 className="text-base font-semibold text-ink">Recent Meetings</h3>
        <Link href="/mens-fellowship/meetings" className="text-xs font-medium text-interactive-500 hover:underline">View All Meetings</Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-ink-subtle">
              <th className="px-5 py-2.5 font-medium">Meeting Title</th>
              <th className="px-5 py-2.5 font-medium">Date</th>
              <th className="px-5 py-2.5 font-medium">Time</th>
              <th className="px-5 py-2.5 font-medium">Location</th>
              <th className="px-5 py-2.5 font-medium">Leader</th>
              <th className="px-5 py-2.5 font-medium">Attendance</th>
              <th className="px-5 py-2.5 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((m, i) => (
              <tr key={i} className="border-b border-surface-muted last:border-0">
                <td className="px-5 py-3 font-medium text-ink">{m.title}</td>
                <td className="px-5 py-3 text-ink-muted">{formatDate(m.date)}</td>
                <td className="px-5 py-3 text-ink-muted">{m.time}</td>
                <td className="px-5 py-3 text-ink-muted">{m.location}</td>
                <td className="px-5 py-3 text-ink">{m.leader}</td>
                <td className="px-5 py-3 text-ink">{m.attended} / {m.total} ({Math.round((m.attended / m.total) * 100)}%)</td>
                <td className="px-5 py-3 text-right">
                  <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${m.title}`}>
                    <Eye className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function GroupUpcomingActivitiesTable({ activities = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <h3 className="text-base font-semibold text-ink">Upcoming Activities</h3>
        <Link href="/mens-fellowship/activities" className="text-xs font-medium text-interactive-500 hover:underline">View All Activities</Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-ink-subtle">
              <th className="px-5 py-2.5 font-medium">Activity Title</th>
              <th className="px-5 py-2.5 font-medium">Date</th>
              <th className="px-5 py-2.5 font-medium">Time</th>
              <th className="px-5 py-2.5 font-medium">Location</th>
              <th className="px-5 py-2.5 font-medium">Organized By</th>
              <th className="px-5 py-2.5 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((a, i) => (
              <tr key={i} className="border-b border-surface-muted last:border-0">
                <td className="px-5 py-3 font-medium text-ink">{a.title}</td>
                <td className="px-5 py-3 text-ink-muted">{formatDate(a.date)}</td>
                <td className="px-5 py-3 text-ink-muted">{a.time}</td>
                <td className="px-5 py-3 text-ink-muted">{a.location}</td>
                <td className="px-5 py-3 text-ink">{a.organizedBy}</td>
                <td className="px-5 py-3 text-right">
                  <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${a.title}`}>
                    <Eye className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
