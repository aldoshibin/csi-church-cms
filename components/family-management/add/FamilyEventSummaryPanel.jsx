import Link from "next/link";
import {
  CalendarDays,
  Calendar,
  Clock3,
  MapPin,
  Building2,
  Users,
  CheckCircle2,
  Lightbulb,
  Pencil,
  Share2,
  Printer,
  Trash2,
  ChevronRight,
} from "lucide-react";

function Badge({ children }) {
  return (
    <span className="inline-flex rounded-md bg-violet-100 px-2 py-1 text-xs font-semibold text-violet-700">
      {children}
    </span>
  );
}

function SummaryItem({
  icon: Icon,
  label,
  value,
  iconColor = "text-indigo-600",
}) {
  return (
    <div className="flex items-start gap-3 py-3">
      {Icon && (
        <Icon
          className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${iconColor}`}
        />
      )}

      <div className="flex flex-1 justify-between gap-4">
        <span className="text-xs font-medium text-ink-subtle">
          {label}
        </span>

        <span className="text-right text-xs font-semibold text-ink">
          {value || "-"}
        </span>
      </div>
    </div>
  );
}

function QuickTips({ title = "Quick Tips", tips }) {
  return (
    <div className="rounded-lg border border-green-100 bg-green-50 p-5">
      <div className="mb-3 flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-green-700" />
        <h4 className="font-bold text-green-800">{title}</h4>
      </div>

      <ul className="space-y-3">
        {tips.map((tip, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-xs text-green-800"
          >
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-700" />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ActionItem({
  icon: Icon,
  label,
  danger = false,
  href = "#",
}) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between border-b border-border py-4 last:border-0 ${danger ? "text-red-600" : "text-green-800"
        }`}
    >
      <div className="flex items-center gap-3">
        <Icon className="h-3.5 w-3.5" />
        <span className="text-xs font-semibold">
          {label}
        </span>
      </div>

      <ChevronRight className="h-4 w-4" />
    </Link>
  );
}

function EmptyState() {
  return (
    <div className="py-8 text-center">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
        <CalendarDays className="h-10 w-10 text-green-700" />
      </div>

      <h4 className="mt-6 font-bold text-ink">
        No event added yet.
      </h4>

      <p className="mt-2 text-sm text-ink-subtle">
        Fill in the details to see summary here.
      </p>
    </div>
  );
}

const STEP_TIPS = {
  1: [
    "Event name and type are mandatory.",
    "You can link the event to a family or member.",
    "Add date, time and venue in the next step.",
    "You can add attendees in the next step.",
  ],

  2: [
    "Select accurate date and time.",
    "You can change the timezone if needed.",
    "All day events will not require time.",
    'Click "Next" to add venue and organizer.',
  ],

  3: [
    "Select the correct venue type.",
    "You can use church address if the event is held at church.",
    "Provide organizer details for better coordination.",
    'Click "Next" to add attendees (optional).',
  ],

  4: [
    "Adding attendees is optional.",
    "You can invite family members or add external guests.",
    "You can send a message or invitation in the next step.",
    'Click "Next" to review and confirm your event.',
  ],

  5: [
    "Please check all event details carefully.",
    'You can click on "Edit" to make changes in any section.',
    "Once created, the event will be visible in the Family Events list.",
    "You can send invitations after the event is created.",
  ],
};
export function EventSummaryPanel({ step, form }) {
  const eventName = form.event_name || "Family Prayer Meeting";
  const eventType = form.event_type || "Spiritual";
  const family = form.family_member || "Thomas Family";
  const description =
    form.description ||
    "Monthly family prayer meeting to pray together, read the scripture and seek God's blessings.";

  const eventDate = form.start_date || "22/05/2025";
  const eventTime = `${form.start_time || "10:00 AM"} - ${form.end_time || "12:00 PM"
    }`;

  const venue = form.venue_name
    ? `${form.venue_name}${form.venue_type ? `, ${form.venue_type}` : ""
    }`
    : "Main Prayer Hall,\nSt. John's Church";

  const organizer = form.organizer_name || "Prayer Ministry";

  return (
    <div className="space-y-4">

      {/* ===================== Summary Card ===================== */}

      <div className="rounded-xl border border-border bg-white p-5 shadow-card">

        <h3 className="mb-5 text-lg font-bold text-[#1b237e]">
          Event Summary
        </h3>

        {/* ---------------- STEP 1 ---------------- */}

        {step === 1 && (
          <EmptyState />
        )}

        {/* ---------------- STEP 2 ---------------- */}

        {step === 2 && (
          <>
            <div className="flex flex-col items-center">

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
                <CalendarDays className="h-10 w-10 text-green-700" />
              </div>

              <h4 className="mt-5 text-md font-bold text-ink">
                {eventName}
              </h4>

              <div className="mt-2">
                <Badge>{eventType}</Badge>
              </div>

            </div>

            <div className="mt-8 space-y-1">

              <SummaryItem
                label="Family / Member"
                value={family}
              />

              <SummaryItem
                label="Date"
                value="-"
              />

              <SummaryItem
                label="Time"
                value="-"
              />

              <SummaryItem
                label="Venue"
                value="-"
              />

              <SummaryItem
                label="Organizer"
                value="-"
              />

            </div>
          </>
        )}

        {/* ---------------- STEP 3 ---------------- */}

        {step === 3 && (
          <>
            <div className="flex flex-col items-center">

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
                <CalendarDays className="h-10 w-10 text-green-700" />
              </div>

              <h4 className="mt-5 text-lg font-bold text-ink">
                {eventName}
              </h4>

              <div className="mt-2">
                <Badge>{eventType}</Badge>
              </div>

            </div>

            <div className="mt-8">

              <SummaryItem
                label="Date"
                value={eventDate}
              />

              <SummaryItem
                label="Time"
                value={eventTime}
              />

              <SummaryItem
                label="Family / Member"
                value={family}
              />

              <SummaryItem
                label="Venue"
                value="-"
              />

              <SummaryItem
                label="Organizer"
                value="-"
              />

            </div>
          </>
        )}

        {/* STEP 4 / STEP 5 / STEP 6 will come in Part 3 */}
        {/* ---------------- STEP 4 & STEP 5 ---------------- */}

        {(step === 4 || step === 5) && (
          <>
            <div className="flex flex-col items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
                <CalendarDays className="h-10 w-10 text-green-700" />
              </div>

              <h4 className="mt-5 text-lg font-bold text-ink">
                {eventName}
              </h4>

              <div className="mt-2">
                <Badge>{eventType}</Badge>
              </div>
            </div>

            <div className="mt-8">
              <SummaryItem
                label="Date"
                value={eventDate}
              />

              <SummaryItem
                label="Time"
                value={eventTime}
              />

              <SummaryItem
                label="Family / Member"
                value={family}
              />

              <SummaryItem
                label="Venue"
                value={venue}
              />

              <SummaryItem
                label="Organizer"
                value={organizer}
              />

              {step === 5 && (
                <SummaryItem
                  label="Attendees"
                  value="Not specified"
                />
              )}
            </div>
          </>
        )}

        {/* ---------------- STEP 6 ---------------- */}

        {step === 6 && (
          <>
            <Badge>{eventType}</Badge>

            <h3 className="mt-4 text-2xl font-bold text-[#1b237e]">
              {eventName}
            </h3>

            <p className="mt-3 text-sm leading-6 text-ink-subtle">
              {description}
            </p>

            <div className="mt-6 border-t border-border pt-3">

              <SummaryItem
                icon={Calendar}
                label="Date"
                value={eventDate}
              />

              <SummaryItem
                icon={Clock3}
                label="Time"
                value={eventTime}
              />

              <SummaryItem
                icon={Users}
                label="Family / Member"
                value={family}
              />

              <SummaryItem
                icon={MapPin}
                label="Venue"
                value={venue}
              />

              <SummaryItem
                icon={Building2}
                label="Organizer"
                value={organizer}
              />

            </div>

            <div className="mt-6 border-t border-border pt-5">

              <div className="mb-4 flex items-center gap-2">

                <Users className="h-5 w-5 text-[#1b237e]" />

                <h4 className="font-bold text-[#1b237e]">
                  Attendees
                </h4>

              </div>

              <p className="text-sm text-ink-subtle">
                Not specified
              </p>

            </div>
          </>
        )}

      </div>

      {/* ===================== Tips ===================== */}

      {step <= 5 && (
        <QuickTips tips={STEP_TIPS[step]} />
      )}

      {/* Step 6 actions will be added in Part 3 */}
      {step === 6 && (
        <div className="rounded-xl border border-green-100 bg-green-50 p-5">

          <h3 className="mb-5 text-lg font-bold text-green-700">
            Event Actions
          </h3>

          <ActionItem
            icon={Pencil}
            label="Edit Event"
          />

          <ActionItem
            icon={Users}
            label="Manage Attendees"
          />

          <ActionItem
            icon={Share2}
            label="Share Event"
          />

          <ActionItem
            icon={Printer}
            label="Print Event Details"
          />

          <ActionItem
            icon={Trash2}
            label="Cancel / Delete Event"
            danger
          />

        </div>
      )}

    </div>
  );
}