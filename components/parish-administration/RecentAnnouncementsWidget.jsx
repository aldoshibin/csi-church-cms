"use client";


export function RecentAnnouncementsWidget({ announcements = [] }) {
  return (
    <div className="rounded-lg ">
      <ul className="space-y-3">
        {announcements.map((item) => (
          <li key={item.id} className={`border-l-[3px] ${item.color} rounded-sm bg-surface-canvas py-2 pl-3 pr-2`}>
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <span className="shrink-0 text-xs text-ink-subtle">{item.date}</span>
            </div>
            <p className="mt-0.5 text-xs text-ink-muted">{item.description}</p>
          </li>
        ))}
      </ul>

      <a href="/communication" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-interactive-500 hover:underline">
        See all announcements →
      </a>
    </div>
  );
}
