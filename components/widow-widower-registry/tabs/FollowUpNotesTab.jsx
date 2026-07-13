"use client";

import { Plus, Phone, Mail, StickyNote } from "lucide-react";
import { Button } from "@/components/ui/Button";

const TYPE_ICON = { CALL: Phone, MESSAGE: Mail, NOTE: StickyNote };

export function FollowUpNotesTab({ entries, onAddNote }) {
  return (
    <div className="p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-ink">Follow-up &amp; Notes</h3>
        <Button type="button" size="sm" leftIcon={<Plus className="h-4 w-4" />} onClick={onAddNote}>
          Add Note
        </Button>
      </div>

      <div className="space-y-3">
        {entries.map((entry) => {
          const Icon = TYPE_ICON[entry.type] || StickyNote;
          return (
            <div key={entry.id} className="flex items-start gap-4 rounded-lg border border-border p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-500">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-interactive-600">{entry.title}</p>
                <p className="mt-0.5 text-sm text-ink-subtle">{entry.description}</p>
                <p className="mt-2 text-xs text-ink-subtle">{entry.timestamp}</p>
              </div>
            </div>
          );
        })}
        {entries.length === 0 && (
          <p className="py-8 text-center text-sm text-ink-subtle">No follow-up notes yet.</p>
        )}
      </div>
    </div>
  );
}
