"use client";

import { ClipboardList } from "lucide-react";

export function AttendanceAgendaCard({ agenda = [] }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success-50 text-success-600">
        <ClipboardList className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="mb-2 text-base font-semibold text-ink">Agenda</h3>
        <ul className="flex flex-col gap-2">
          {agenda.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ink-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-subtle" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
