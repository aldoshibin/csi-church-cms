"use client";

import { StickyNote } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function AttendanceNotesCard({ notes = [] }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-ink">Notes</h4>
      {notes.length === 0 ? (
        <p className="text-sm text-ink-subtle">No notes added yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {notes.map((n, i) => (
            <div key={i} className="flex gap-2.5 rounded-lg border border-warning-50 bg-warning-50/60 p-4">
              <StickyNote className="mt-0.5 h-4 w-4 shrink-0 text-warning-600" />
              <div className="min-w-0">
                <p className="text-sm text-ink">{n.text}</p>
                <p className="mt-2 text-xs text-ink-subtle">Added by {n.by} on {formatDate(n.date)} {n.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
