"use client";

import { Clock, FileText, Pencil, Info, Headphones, Phone, Mail } from "lucide-react";

const GUIDELINES = [
  { icon: Clock, text: "Please submit requests at least 3 days before the publish date." },
  { icon: FileText, text: "Keep the announcement short and clear for the bulletin." },
  { icon: Pencil, text: "The church office reserves the right to edit content if necessary." },
  { icon: Info, text: "Announcements are subject to approval before publishing." },
];

export function BulletinGuidelinesCard() {
  return (
    <div className="rounded-lg border border-success-200 bg-success-50 p-4">
      <h3 className="mb-3 text-sm font-semibold text-success-800">Guidelines</h3>
      <div className="flex flex-col gap-3">
        {GUIDELINES.map((g, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-success-600">
              <g.icon className="h-3.5 w-3.5" />
            </span>
            <p className="text-xs leading-relaxed text-success-700">{g.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BulletinRequestPreviewCard({ title, eventDate, startTime, location }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Request Preview</h3>
      <p className="mb-3 text-xs text-ink-subtle">This is how your announcement may appear in the bulletin.</p>
      <div className="rounded-lg border border-dashed border-border p-4 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-ink">{title || "Title Will Appear Here"}</p>
        <p className="mt-1 text-xs text-ink-subtle">
          {eventDate || "Date"} • {startTime || "Time"} • {location || "Venue"}
        </p>
        <p className="mt-3 text-xs leading-relaxed text-ink-subtle">
          This is a preview of your announcement. The actual content will be formatted according to the bulletin template.
        </p>
      </div>
    </div>
  );
}

export function BulletinNeedHelpCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
        <Headphones className="h-4 w-4 text-interactive-600" /> Need Help?
      </h3>
      <p className="mb-3 text-xs text-ink-subtle">For any assistance, please contact the church office.</p>
      <p className="flex items-center gap-1.5 text-sm text-ink-muted"><Phone className="h-3.5 w-3.5" /> +91 98765 43210</p>
      <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted"><Mail className="h-3.5 w-3.5" /> office@stjohnschurch.org</p>
    </div>
  );
}
