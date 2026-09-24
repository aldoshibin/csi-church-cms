"use client";

import { Info, Mail, ShieldCheck } from "lucide-react";

const NOTES = [
  { icon: Info, text: "Refunds will be processed using the original payment method." },
  { icon: Mail, text: "Once a refund is created, it cannot be edited. You may cancel it if needed." },
  { icon: ShieldCheck, text: "The donor will receive an email notification once the refund is processed." },
];

export function RefundImportantNotesPanel() {
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
