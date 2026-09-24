"use client";

export function RecentConversationsCard({ conversations = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Conversations</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3">
        {conversations.map((c) => (
          <div key={c.id} className="flex items-center gap-3">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${c.bg} ${c.color}`}>
              {c.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{c.name}</p>
              <p className="truncate text-xs text-ink-subtle">{c.lastMessage}</p>
            </div>
            <span className="shrink-0 text-xs text-ink-subtle">{c.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
