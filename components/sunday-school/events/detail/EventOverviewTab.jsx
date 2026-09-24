"use client";

import { Calendar, Cross, Users2, UserRound, UsersRound, Radar, Star, Clock } from "lucide-react";

function InfoItem({ icon: Icon, label, value, valueClass }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs text-ink-subtle">{label}</p>
        <p className={`mt-0.5 text-sm font-medium ${valueClass ?? "text-ink"}`}>{value}</p>
      </div>
    </div>
  );
}

export function EventOverviewTab({ event }) {
  return (
    <div>
      <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-ink">
        <Calendar className="h-4 w-4 text-interactive-600" /> Event Description
      </h3>
      <p className="text-sm leading-relaxed text-ink-muted">{event.description}</p>

      <div className="mt-6 grid grid-cols-1 gap-5 border-t border-border pt-5 sm:grid-cols-2">
        <InfoItem icon={Cross} label="Event Type" value={event.eventType} />
        <InfoItem icon={UsersRound} label="Target Audience" value={event.targetAudience} />
        <InfoItem icon={Users2} label="Age Group" value={event.ageGroup} />
        <InfoItem icon={UserRound} label="Maximum Capacity" value={event.maximumCapacity} />
        <InfoItem icon={UserRound} label="Organizer" value={event.organizer} />
        <InfoItem icon={Radar} label="Open For Registration" value={event.openForRegistration ? "Yes" : "No"} valueClass="text-success-600" />
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-ink">
          <Star className="h-4 w-4 text-warning-500" /> Key Highlights
        </h3>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {event.keyHighlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-ink-muted">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink-subtle" /> {h}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-ink">
          <Clock className="h-4 w-4 text-ink-subtle" /> Recent Updates
        </h3>
        <div className="flex flex-col gap-3">
          {event.recentUpdates.map((u, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">{u.initials}</span>
              <p className="text-sm text-ink-muted">{u.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
