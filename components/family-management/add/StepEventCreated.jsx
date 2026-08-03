import Link from "next/link";
import {
  CalendarCheck2,
  Check,
  CheckCircle2,
  CalendarPlus,
  Plus,
  FileText,
  ArrowRight,
} from "lucide-react";

export function StepSuccess() {
  return (
    <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
      {/* Success Icon */}
      <div className="flex flex-col items-center text-center">

        <div className="relative mb-8">

          {/* Decorative dots */}
          <span className="absolute left-0 top-6 h-1.5 w-1.5 rounded-full bg-red-400"></span>
          <span className="absolute left-8 top-0 h-1.5 w-1.5 rounded-full bg-lime-500"></span>
          <span className="absolute left-24 -top-2 h-2 w-2 rounded-full bg-blue-500"></span>
          <span className="absolute right-7 top-1 h-1.5 w-1.5 rounded-full bg-red-500"></span>
          <span className="absolute -right-2 top-8 h-2 w-2 rounded-full bg-amber-400"></span>
          <span className="absolute -right-1 bottom-10 h-1.5 w-1.5 rounded-full bg-green-500"></span>
          <span className="absolute right-10 bottom-0 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
          <span className="absolute left-2 bottom-8 h-1.5 w-1.5 rounded-full bg-sky-500"></span>
          <span className="absolute left-10 bottom-0 h-1.5 w-1.5 rounded-full bg-amber-400"></span>

          {/* Circle */}
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-green-50">
            <CalendarCheck2 className="h-16 w-16 text-green-700" />
          </div>

          {/* Tick */}
          <div className="absolute bottom-3 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 shadow-lg">
            <Check className="h-7 w-7 text-white" />
          </div>
        </div>

        {/* Heading */}

        <h2 className="text-4xl font-bold text-green-700">
          Event Created Successfully!
        </h2>

        <p className="mt-4 max-w-xl text-base leading-7 text-ink-subtle">
          Your event has been created and saved successfully.
          <br />
          You can view the event details or add it to your calendar.
        </p>

        {/* What's Next */}

        <div className="mt-10 w-full max-w-2xl rounded-xl bg-green-50 p-6 text-left">

          <h3 className="mb-5 text-xl font-bold text-green-800">
            What's Next?
          </h3>

          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-700" />
              <p className="text-sm text-green-800">
                Invite family members or guests (if not done yet).
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-700" />
              <p className="text-sm text-green-800">
                Share the event details with your family.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-700" />
              <p className="text-sm text-green-800">
                Add the event to your calendar.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-700" />
              <p className="text-sm text-green-800">
                You can edit the event details anytime from Event List.
              </p>
            </div>

          </div>
        </div>

        {/* Buttons */}

        <div className="mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

          <Link
            href="/events/details"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-green-700 bg-white px-5 text-xs font-semibold text-green-700 transition hover:bg-green-50"
          >
            <FileText className="h-4 w-4" />
            View Event Details
          </Link>

          <Link
            href="/events/create"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-green-700 bg-white px-5 text-xs font-semibold text-green-700 transition hover:bg-green-50"
          >
            <Plus className="h-4 w-4" />
            Create Another Event
          </Link>

          <button
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-green-700 bg-white px-5 text-xs font-semibold text-green-700 transition hover:bg-green-50"
          >
            <CalendarPlus className="h-4 w-4" />
            Add to Calendar
          </button>

          <Link
            href="/families/events"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-green-700 px-5 text-xs font-semibold text-white transition hover:bg-green-800"
          >
            Go to Family Events List
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>
      </div>
    </div>
  );
}