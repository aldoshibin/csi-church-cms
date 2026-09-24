"use client";

import { Music, ListMusic, CalendarDays, Users, Clock, ClipboardCheck, TrendingUp, ChevronRight, Plus } from "lucide-react";

const ICONS = {
  songs: Music,
  setlists: ListMusic,
  services: CalendarDays,
  members: Users,
  rehearsals: Clock,
  attendance: ClipboardCheck,
  ministry: TrendingUp,
};

export function ReportShortcutsCard({ shortcuts = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Report Shortcuts</h3>
      <div className="flex flex-col gap-1">
        {shortcuts.map((s) => {
          const Icon = ICONS[s.key] ?? Music;
          return (
            <button
              key={s.key}
              type="button"
              className="flex items-center gap-2.5 rounded-md px-2 py-2.5 text-left text-sm text-ink-muted hover:bg-surface-canvas"
            >
              <Icon className="h-4 w-4 shrink-0 text-interactive-600" />
              <span className="flex-1 truncate">{s.label}</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-ink-subtle" />
            </button>
          );
        })}
      </div>
      <button type="button" className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-border bg-white px-3 py-2.5 text-sm font-medium text-ink hover:bg-surface-canvas">
        <Plus className="h-4 w-4" /> Custom Report
      </button>
    </div>
  );
}
