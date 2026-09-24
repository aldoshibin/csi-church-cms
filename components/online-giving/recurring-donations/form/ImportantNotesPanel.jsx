"use client";

import { Calendar, RotateCcw, ShieldCheck } from "lucide-react";

const NOTES = [
  { icon: Calendar, text: "The first payment will be processed on the selected start date." },
  { icon: RotateCcw, text: "Recurring payments will continue until cancelled by the donor." },
  { icon: ShieldCheck, text: "You can pause or cancel this subscription any time." },
];

export function ImportantNotesPanel() {
  return (
    <div className="rounded-lg border border-border bg-surface-canvas p-4">
      <h3 className="mb-3 text-sm font-semibold text-accent-700">Important Notes</h3>
      <ul className="flex flex-col gap-3">
        {NOTES.map((note) => (
          <li key={note.text} className="flex gap-2.5 text-sm">
            <note.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
            <span className="text-ink-muted">{note.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
