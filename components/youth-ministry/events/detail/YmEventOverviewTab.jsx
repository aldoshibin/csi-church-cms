"use client";

import { Calendar, Users, MapPin, Clock, Tag, Globe, UserRound, CalendarCheck, Gift, BookOpen, Gamepad2, Coffee, User, Phone, Mail } from "lucide-react";
import { formatDate } from "@/lib/utils";

const HIGHLIGHT_ICON = { gift: Gift, book: BookOpen, game: Gamepad2, cup: Coffee };

function InfoItem({ icon: Icon, label, value, sub }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs text-ink-subtle">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-ink">{value}</p>
        {sub && <p className="text-xs text-ink-subtle">{sub}</p>}
      </div>
    </div>
  );
}

export function YmEventOverviewTab({ event }) {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold text-ink">Event Overview</h3>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <InfoItem icon={Calendar} label="Date & Time" value={`${formatDate(event.date)} (${event.day})`} sub={event.time} />
        <InfoItem icon={Users} label="Registration Limit" value={event.registrationLimit} sub={<>Registered: <span className="font-semibold text-success-600">{event.registered} ({Math.round((event.registered / event.registrationLimit) * 100)}%)</span></>} />
        <InfoItem icon={MapPin} label="Venue" value={event.venue} sub={event.venueOrg} />
        <InfoItem icon={Clock} label="Event Status" value={event.eventStatus} />
        <InfoItem icon={Tag} label="Category" value={event.category} />
        <InfoItem icon={Globe} label="Visibility" value={event.visibility} sub={event.visibilityDesc} />
        <InfoItem icon={UserRound} label="Organizer" value={event.organizer} />
        <InfoItem icon={CalendarCheck} label="Created On" value={`${formatDate(event.createdOn)} by ${event.createdBy}`} />
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <h3 className="mb-2 text-base font-semibold text-ink">Description</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{event.description}</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 border-t border-border pt-5 sm:grid-cols-2">
        <div>
          <h3 className="mb-3 text-base font-semibold text-ink">Event Highlights</h3>
          <ul className="flex flex-col gap-3">
            {event.eventHighlights.map((h, i) => {
              const Icon = HIGHLIGHT_ICON[h.icon] ?? Gift;
              return (
                <li key={i} className="flex items-center gap-3 text-sm text-ink-muted">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success-600">
                    <Icon className="h-4 w-4" />
                  </span>
                  {h.text}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-base font-semibold text-ink">Contact Information</h3>
          <div className="flex flex-col gap-3">
            <InfoItem icon={User} label="Event Coordinator" value={event.contact.coordinator} />
            <InfoItem icon={Phone} label="Phone" value={event.contact.phone} />
            <InfoItem icon={Mail} label="Email" value={event.contact.email} />
          </div>
        </div>
      </div>
    </div>
  );
}
