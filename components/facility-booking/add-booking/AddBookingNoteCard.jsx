"use client";

import { FileText } from "lucide-react";

const NOTES = [
  "All times are in Asia/Kolkata (IST) timezone.",
  "Booking once saved, you can view it in All Bookings.",
];

export function AddBookingNoteCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Note</h3>
      </div>
      <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink-subtle">
        {NOTES.map((note) => (
          <li key={note} className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-subtle" />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
