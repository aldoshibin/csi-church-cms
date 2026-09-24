"use client";

import { CommunicationIcon } from "./CommunicationIcon";

export function UpcomingMessagesCard({ messages = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Messages</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-4">
        {messages.map((m, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${m.bg} ${m.color}`}>
              <CommunicationIcon name={m.icon} className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-ink">{m.title}</p>
              <p className="text-xs text-ink-subtle">To: {m.to}</p>
              <p className="mt-1 text-[11px] text-ink-subtle">Scheduled: {m.scheduled}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
