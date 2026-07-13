"use client";

import { MoreVertical } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { categoryBadgeClass, categoryDateBoxClass, categoryTextClass } from "@/lib/mock/eventsServicesMockData";


export function EventsServicesTable({ rows = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-full text-left text-sm">
        <thead className="text-xs uppercase tracking-wide text-ink-subtle">
          <tr>
            {["Date & Time", "Event / Service", "Category", "Location", "Organized By", "Registrations", "Status", "Actions"].map((h) => (
              <th key={h} className="whitespace-nowrap px-4 py-3 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="px-4 py-3">
                <div className={`flex w-14 flex-col items-center rounded-md border py-1 text-center ${categoryDateBoxClass(row.category)}`}>
                  <span className={`text-[10px] font-semibold uppercase ${categoryTextClass(row.category)}`}>{row.month}</span>
                  <span className="text-base font-bold leading-none text-ink">{row.day}</span>
                  <span className="text-[10px] text-ink-subtle">{row.weekday}</span>
                </div>
                <p className="mt-1 text-xs text-ink-subtle">{row.time}</p>
              </td>
              <td className="px-4 py-3">
                <p className="font-semibold text-ink">{row.title}</p>
                <p className="mt-0.5 max-w-xs text-xs text-ink-subtle">{row.description}</p>
              </td>
              <td className="px-4 py-3">
                <span className={`inline-flex rounded-md px-2 py-1 text-xs font-medium ${categoryBadgeClass(row.category)}`}>
                  {row.category}
                </span>
              </td>
              <td className="px-4 py-3 text-ink">{row.location}</td>
              <td className="px-4 py-3 text-ink">{row.organizedBy}</td>
              <td className="px-4 py-3">
                {row.registered != null ? (
                  <div className="w-28">
                    <p className="text-xs font-medium text-ink">{row.registered} / {row.capacity}</p>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-surface-muted">
                      <div
                        className="h-1.5 rounded-full bg-success-500"
                        style={{ width: `${Math.min(100, (row.registered / row.capacity) * 100)}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <span className="text-ink-subtle">—</span>
                )}
              </td>
              <td className="px-4 py-3">
                <Badge variant="success">{row.status}</Badge>
              </td>
              <td className="px-4 py-3">
                <button className="rounded-md p-1.5 text-ink-subtle hover:bg-surface-muted" aria-label="Row actions">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
