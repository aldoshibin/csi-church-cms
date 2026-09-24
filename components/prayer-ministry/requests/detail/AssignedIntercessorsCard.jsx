"use client";

import { Phone, Mail } from "lucide-react";

export function AssignedIntercessorsCard({ intercessors = [] }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-ink">Assigned Intercessors</h4>
      <div className="flex flex-col gap-3">
        {intercessors.map((p, i) => (
          <div key={i} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border p-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
                {p.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{p.name}</p>
                <p className="truncate text-xs text-ink-subtle">{p.role}</p>
              </div>
            </div>
            <div className="flex flex-col gap-0.5 text-xs text-ink-muted">
              <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> {p.phone}</span>
              <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> {p.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
