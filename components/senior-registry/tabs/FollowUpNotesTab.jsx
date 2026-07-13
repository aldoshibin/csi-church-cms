"use client";

import * as React from "react";
import { Plus, Phone, Mail, StickyNote, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SENIOR_FOLLOW_UP_NOTES_MOCK } from "@/lib/mock/seniorFollowUpNotesMock";

const ICONS = { phone: Phone, mail: Mail, note: StickyNote };

export function FollowUpNotesTab({ onAddNote, onLoadMore }) {
  const [sortOrder, setSortOrder] = React.useState("latest");
  const entries = SENIOR_FOLLOW_UP_NOTES_MOCK.entries;

  return (
    <div className="p-5">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-ink">Follow-up &amp; Notes</h3>
          <p className="text-sm text-ink-subtle">Recent pastoral follow-up actions for senior members.</p>
        </div>
        <div className="flex items-center gap-2">
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="h-10 rounded-md border border-border px-3 text-sm text-ink">
            <option value="latest">Latest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          <Button type="button" size="sm" leftIcon={<Plus className="h-4 w-4" />} onClick={onAddNote}>
            Add Note
          </Button>
        </div>
      </div>

      <ul className="divide-y divide-border rounded-lg border border-border">
        {entries.map((entry) => {
          const Icon = ICONS[entry.icon];
          return (
            <li key={entry.id} className="flex items-start gap-4 p-4">
              <div className="w-20 shrink-0 text-xs text-ink-subtle">
                <p>{entry.date}</p>
                <p>{entry.time}</p>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-500">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-interactive-600">{entry.title}</p>
                <p className="mt-0.5 text-sm text-ink-subtle">{entry.description}</p>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-ink-subtle">
                  <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> {entry.person}</span>
                  <span className="flex items-center gap-1">
                    {entry.metaIsDate ? <Calendar className="h-3.5 w-3.5" /> : <span className="h-1.5 w-1.5 rounded-full bg-ink-subtle" />}
                    {entry.meta}
                  </span>
                </div>
              </div>
              <Badge variant={entry.badgeVariant}>{entry.badge}</Badge>
            </li>
          );
        })}
      </ul>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm text-ink-subtle">
          Showing 1 to {entries.length} of {SENIOR_FOLLOW_UP_NOTES_MOCK.totalCount} notes
        </p>
        <Button type="button" variant="secondary" size="sm" onClick={onLoadMore}>
          Load More
        </Button>
      </div>
    </div>
  );
}
