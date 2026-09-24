"use client";

import { Calendar, MapPin, Paperclip, FileText } from "lucide-react";
import { formatDate, formatDateTime } from "@/lib/utils";

export function AnnouncementDetailsCard({ announcement }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Announcement Details</h3>

      <div>
        <p className="text-xs text-ink-subtle">Title</p>
        <p className="mt-1 text-sm font-medium text-ink">{announcement.title}</p>
      </div>

      <div className="mt-4">
        <p className="text-xs text-ink-subtle">Description</p>
        <div className="mt-1 flex flex-col gap-2 text-sm text-ink-muted">
          {announcement.description.split("\n").filter(Boolean).map((line, i) => <p key={i}>{line}</p>)}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 border-t border-border pt-4 sm:grid-cols-2">
        <div className="flex items-start gap-2.5">
          <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-ink-subtle" />
          <div>
            <p className="text-xs text-ink-subtle">Date &amp; Time</p>
            <p className="text-sm font-medium text-ink">
              {formatDate(announcement.dateTime, { weekday: "long" })} at {new Date(announcement.dateTime).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" })}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-subtle" />
          <div>
            <p className="text-xs text-ink-subtle">Location</p>
            <p className="text-sm font-medium text-ink">{announcement.location}</p>
          </div>
        </div>
      </div>

      {announcement.attachments?.length > 0 && (
        <div className="mt-4 border-t border-border pt-4">
          <div className="flex items-center gap-2 text-xs text-ink-subtle">
            <Paperclip className="h-3.5 w-3.5" /> Attachments
          </div>
          <div className="mt-2 flex flex-col gap-2">
            {announcement.attachments.map((f) => (
              <div key={f.name} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-danger-50 text-danger-600">
                  <FileText className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">{f.name}</p>
                  <p className="text-xs text-ink-subtle">{f.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
