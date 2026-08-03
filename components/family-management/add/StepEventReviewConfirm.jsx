import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  Pencil,
} from "lucide-react";
import { CARD_CLS } from "./fields";

function Badge({ children, color = "green" }) {
  const styles = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-violet-100 text-violet-700",
    orange: "bg-orange-100 text-orange-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${styles[color]}`}
    >
      {children}
    </span>
  );
}

function Row({ label, value }) {
  return (
    <div className="grid grid-cols-[150px_15px_1fr] gap-2 py-2">
      <p className="text-sm text-ink-subtle">{label}</p>
      <span className="text-ink-subtle">:</span>
      <div className="text-sm font-medium text-ink">
        {value || "-"}
      </div>
    </div>
  );
}

function Section({
  icon: Icon,
  iconColor,
  iconBg,
  title,
  children,
}) {
  return (
    <div className={CARD_CLS}>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg}`}
          >
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>

          <h3 className="font-bold text-ink">{title}</h3>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-sm font-semibold text-green-700 hover:underline"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </button>
      </div>

      {children}
    </div>
  );
}

export function StepReviewConfirm({ form }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-ink">
          Review & Confirm
        </h2>

        <p className="mt-1 text-sm text-ink-subtle">
          Please review the details below before creating the event.
        </p>
      </div>

      <div className="space-y-5">

        {/* Event Details */}

        <Section
          title="Event Details"
          icon={CalendarDays}
          iconBg="bg-green-100"
          iconColor="text-green-700"
        >
          <div className="grid gap-8 lg:grid-cols-2">

            <div>
              <Row
                label="Event Name"
                value={form.event_name}
              />

              <Row
                label="Event Type"
                value={<Badge>Spiritual</Badge>}
              />

              <Row
                label="Family / Member"
                value="Thomas Family"
              />
            </div>

            <div>
              <Row
                label="Event Description"
                value={form.description}
              />

              <Row
                label="Event Category"
                value="Prayer Meeting"
              />

              <Row
                label="Event Status"
                value={<Badge>Upcoming</Badge>}
              />
            </div>

          </div>
        </Section>

        {/* Date & Time */}

        <Section
          title="Date & Time"
          icon={Clock3}
          iconBg="bg-violet-100"
          iconColor="text-violet-700"
        >
          <div className="grid gap-8 lg:grid-cols-2">

            <div>
              <Row
                label="Start Date & Time"
                value="22/05/2025, 10:00 AM"
              />

              <Row
                label="End Date & Time"
                value="22/05/2025, 12:00 PM"
              />

              <Row
                label="Time Zone"
                value="(GMT+05:30) Asia/Kolkata"
              />
            </div>

            <div>
              <Row
                label="All Day Event"
                value="No"
              />
            </div>

          </div>
        </Section>

        {/* Venue */}

        <Section
          title="Venue & Organizer"
          icon={MapPin}
          iconBg="bg-orange-100"
          iconColor="text-orange-600"
        >
          <div className="grid gap-8 lg:grid-cols-2">

            <div>
              <Row
                label="Venue Type"
                value="Church Hall"
              />

              <Row
                label="Venue Name"
                value="Main Prayer Hall"
              />

              <Row
                label="Venue Address"
                value="St. John's Church, 18 Church Road, Richmond Town, Bengaluru - 560025"
              />
            </div>

            <div>
              <Row
                label="Organizer / Ministry"
                value="Prayer Ministry"
              />

              <Row
                label="Organizer Name"
                value="Rev. Michael John"
              />

              <Row
                label="Contact Number"
                value="+91 98765 43210"
              />
            </div>

          </div>
        </Section>

        {/* Attendees */}

        <Section
          title="Attendees (Optional)"
          icon={Users}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
        >
          <div className="grid gap-8 lg:grid-cols-2">

            <div>
              <Row
                label="Invited Family Members"
                value="None"
              />

              <Row
                label="Additional Guests"
                value="None"
              />

              <Row
                label="Invitation Message"
                value="-"
              />
            </div>

          </div>
        </Section>

      </div>
    </div>
  );
}