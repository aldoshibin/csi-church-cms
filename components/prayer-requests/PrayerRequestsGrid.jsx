"use client";

import { categoryBadgeClass } from "@/lib/mock/prayerRequestSummaryMockData";

export function PrayerRequestsGrid({ requests = [], onViewDetails }) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {requests.map((request) => (
        <div key={request.id} className="rounded-lg border border-border p-4">
          <span className={`inline-flex rounded-md px-2 py-1 text-xs font-medium ${categoryBadgeClass(request.category)}`}>
            {request.category}
          </span>

          <p className="mt-3 text-base font-bold text-ink">{request.requestFor}</p>
          <p className="mt-1 text-sm text-ink">{request.details}</p>

          <p className="mt-3 text-xs text-ink-subtle">{request.date} {request.time}</p>

          <button
            onClick={() => onViewDetails(request)}
            className="mt-3 rounded-md border border-border px-4 py-1.5 text-sm font-semibold text-ink hover:bg-surface-muted"
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}
