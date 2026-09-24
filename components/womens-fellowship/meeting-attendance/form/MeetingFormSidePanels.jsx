"use client";

import { UsersRound, Calendar, UserCog, Mail } from "lucide-react";

const OPTIONS = [
  { icon: UsersRound, title: "Select Fellowship / Group", desc: "Choose the fellowship or group this meeting belongs to." },
  { icon: Calendar, title: "Schedule Meeting", desc: "Select date, time and venue for the meeting." },
  { icon: UserCog, title: "Assign Leader", desc: "Choose the meeting leader or organizer." },
  { icon: Mail, title: "Send Invitations", desc: "Invite members and track their responses." },
];

export function MeetingOptionsPanel() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Meeting Options</h3>
      <div className="flex flex-col gap-4">
        {OPTIONS.map((option) => (
          <div key={option.title} className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-interactive-50 text-interactive-600">
              <option.icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-ink">{option.title}</p>
              <p className="text-xs text-ink-subtle">{option.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const TIPS = [
  "All fields marked with * are mandatory.",
  "You can edit meeting details anytime.",
  "Members can mark attendance once the meeting is scheduled.",
  "Meeting reports will be available after the meeting.",
];

export function MeetingQuickTipsPanel() {
  return (
    <div className="rounded-lg border border-interactive-100 bg-interactive-50 p-4">
      <h3 className="mb-3 text-sm font-semibold text-interactive-700">Quick Tips</h3>
      <ul className="flex flex-col gap-2.5">
        {TIPS.map((tip, i) => (
          <li key={i} className="flex gap-2 text-sm text-interactive-700/90">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-interactive-600" />
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
