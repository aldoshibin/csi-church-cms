"use client";

import { Calendar } from "lucide-react";


export function UpcomingCommitteeMeetings({ meetings = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-interactive-500">Upcoming Committee Meetings</h3>
        <a href="#" className="text-xs font-medium text-interactive-500 hover:underline">View All</a>
      </div>
      <ul className="space-y-3">
        {meetings.map((meeting) => (
          <li key={meeting.id} className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-600">
              <Calendar className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink">{meeting.title}</p>
              <p className="text-xs text-ink-subtle">{meeting.date} · {meeting.time}</p>
              <p className="text-xs text-ink-subtle">{meeting.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
