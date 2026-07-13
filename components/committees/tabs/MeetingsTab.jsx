"use client";

import { Calendar, MapPin } from "lucide-react";


export function MeetingsTab() {
  const meetings = [
    { id: 1, title: "Finance Committee Meeting", date: "24 May 2025 (Sat)", time: "10:00 AM", location: "Parish Office Conference Room" },
    { id: 2, title: "Worship Committee Meeting", date: "25 May 2025 (Sun)", time: "11:30 AM", location: "Church Meeting Hall" },
    { id: 3, title: "Youth Ministry Meeting", date: "27 May 2025 (Tue)", time: "06:00 PM", location: "Youth Room" },
    { id: 4, title: "Social Service Committee Meeting", date: "28 May 2025 (Wed)", time: "04:00 PM", location: "Parish Office Conference Room" },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="p-4">
        <h3 className="text-sm font-semibold text-interactive-500">Meetings</h3>
        <p className="text-xs text-ink-subtle"> reuses the Overview tab's upcoming meetings data.</p>
      </div>
      <ul className="divide-y divide-border">
        {meetings.map((meeting) => (
          <li key={meeting.id} className="flex items-start gap-3 p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-600">
              <Calendar className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink">{meeting.title}</p>
              <p className="text-xs text-ink-subtle">{meeting.date} · {meeting.time}</p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-subtle">
                <MapPin className="h-3 w-3" /> {meeting.location}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
