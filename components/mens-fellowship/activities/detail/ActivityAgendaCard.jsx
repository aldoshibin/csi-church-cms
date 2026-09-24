"use client";

export function ActivityAgendaCard({ agenda = [] }) {
  return (
    <div>
      <h3 className="mb-3 text-base font-semibold text-ink">Activity Agenda</h3>
      <ol className="flex flex-col gap-3">
        {agenda.map((a) => (
          <li key={a.order} className="flex items-center gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-50 text-xs font-semibold text-success-600">
              {a.order}
            </span>
            <span className="flex-1 text-sm text-ink">{a.item}</span>
            <span className="shrink-0 text-xs text-ink-subtle">{a.time}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
