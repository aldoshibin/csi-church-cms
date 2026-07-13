"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";


export function AnnouncementsWidget({ announcements = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-interactive-500">Announcements</h3>
        <Link href="/communication" className="text-xs font-medium text-interactive-500 hover:underline">
          View All →
        </Link>
      </div>

      <ul className="space-y-3">
        {announcements.map((item) => (
          <li
            key={item.id}
            className={cn(
              "rounded-md border-l-2 py-1 pl-3",
              item.highlight ? "border-accent-400" : "border-border"
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-medium text-ink">{item.title}</p>
              <span className="shrink-0 text-xs text-ink-subtle">{item.date}</span>
            </div>
            <p className="mt-0.5 text-xs text-ink-subtle">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
