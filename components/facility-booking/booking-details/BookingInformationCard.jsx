"use client";

import { Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function BookingInformationCard({ booking }) {
  const info = booking.bookingInfo;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Booking Information</h3>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <Field label="Booking ID" value={info.bookingId} />
        <div>
          <p className="text-xs text-ink-subtle">Date &amp; Time</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-ink">
            <Calendar className="h-3.5 w-3.5 text-ink-subtle" />
            {formatDate(booking.dateTime.date)} ({booking.dateTime.dayLabel})
          </p>
          <p className="mt-0.5 text-xs text-ink-subtle">{booking.dateTime.timeLabel}</p>
        </div>
        <Field label="Facility" value={info.facility} />
        <Field label="Booking Type" value={info.bookingType} />
        <Field label="Purpose / Event" value={info.purpose} />
        <Field label="Setup Type" value={info.setupType} />
        <Field label="Number of People" value={info.numberOfPeople} />
      </div>
    </div>
  );
}
