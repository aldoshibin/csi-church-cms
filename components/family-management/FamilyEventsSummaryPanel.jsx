
import Link from "next/link";
import {
  CalendarDays,
  Users,
  CircleCheck,
  Clock3,
  Lightbulb,
} from "lucide-react";

const EVENTS = [
  {
    id: 1,
    day: "12",
    month: "MAY",
    title: "Children's Birthday Blessing",
    church: "St. John's Church",
    time: "09:30 AM",
    attendees: 12,
  },
  {
    id: 2,
    day: "18",
    month: "MAY",
    title: "Wedding Anniversary Mass",
    church: "St. John's Church",
    time: "08:00 AM",
    attendees: 8,
  },
  {
    id: 3,
    day: "25",
    month: "MAY",
    title: "Ascension Sunday Service",
    church: "St. John's Church",
    time: "08:00 AM",
    attendees: 150,
  },
];

const STATS = [
  {
    key: "events",
    label: "Total Events",
    value: 4,
    icon: CalendarDays,
    color: "text-green-600 bg-green-50",
  },
  {
    key: "attendees",
    label: "Total Attendees",
    value: 220,
    icon: Users,
    color: "text-blue-600 bg-blue-50",
  },
  {
    key: "completed",
    label: "Completed",
    value: 2,
    icon: CircleCheck,
    color: "text-green-600 bg-green-50",
  },
  {
    key: "upcoming",
    label: "Upcoming",
    value: 2,
    icon: Clock3,
    color: "text-blue-600 bg-blue-50",
  },
];

export function FamilyQuickSummaryPanel() {
  return (
    <div className="space-y-5">
      {/* Upcoming Events */}
      <div className="rounded-xl border border-border bg-white p-4 shadow-card">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-bold text-ink">
            Upcoming Events
          </h3>

          <Link
            href="/events"
            className="text-xs font-semibold text-interactive-600 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="space-y-3">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="flex items-center gap-3 rounded-lg border border-border p-3"
            >
              {/* Date */}
              <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-slate-50">
                <span className="text-lg font-bold text-indigo-700">
                  {event.day}
                </span>
                <span className="text-[10px] font-semibold tracking-wide text-slate-500">
                  {event.month}
                </span>
              </div>

              {/* Event */}
              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-semibold text-ink">
                  {event.title}
                </h4>

                <p className="text-xs text-ink-subtle">
                  {event.church}
                </p>

                <p className="text-xs text-ink-subtle">
                  {event.time}
                </p>
              </div>

              {/* Attendees */}
              <div className="text-right">
                <p className="text-base font-bold text-ink">
                  {event.attendees}
                </p>
                <p className="text-[11px] text-ink-subtle">
                  Attendees
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Summary */}
      <div className="rounded-xl border border-border bg-white p-4 shadow-card">
        <h3 className="text-base font-bold text-ink">
          Event Summary
        </h3>

        <p className="mb-4 text-xs text-ink-subtle">
          This Month
        </p>

        <div className="grid grid-cols-2 gap-3">
          {STATS.map((item) => (
            <div
              key={item.key}
              className="rounded-lg border border-border bg-white p-4 text-center"
            >
              <div
                className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full ${item.color}`}
              >
                <item.icon className="h-5 w-5" />
              </div>

              <p className="text-xs text-ink-subtle">
                {item.label}
              </p>

              <p className="mt-1 text-2xl font-bold text-ink">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Did you know */}
      <div className="flex items-start gap-3 rounded-xl bg-green-50 p-4">
        <Lightbulb className="mt-0.5 h-5 w-5 text-green-700" />

        <div>
          <p className="font-semibold text-green-800">
            Did you know?
          </p>

          <p className="text-sm text-green-700">
            You can create event reminders and send invitations to
            family members.
          </p>
        </div>
      </div>
    </div>
  );
}