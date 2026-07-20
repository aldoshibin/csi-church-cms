"use client";

import { User, ArrowRight } from "lucide-react";

export function RecentRecordsPanel({ records, onViewAllRecords }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-4 text-sm font-semibold text-interactive-500">Recent Sacramental Records</h3>
      <ul className="flex-1 space-y-3">
        {records.map((r) => (
          <li key={r.id} className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
              <User className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{r.name}</p>
              <p className="text-xs text-ink-subtle">{r.sacrament}</p>
            </div>
            <span className="shrink-0 text-xs text-ink-subtle">{r.date}</span>
          </li>
        ))}
      </ul>
      <button type="button" onClick={onViewAllRecords} className="mt-3 flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
        View all records <ArrowRight className="h-3 w-3" />
      </button>
    </div>
  );
}
