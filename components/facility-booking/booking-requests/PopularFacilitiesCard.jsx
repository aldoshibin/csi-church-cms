"use client";

import Link from "next/link";
import { Building2, ChevronRight } from "lucide-react";

export function PopularFacilitiesCard({ facilities }) {
  if (!facilities?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Popular Facilities</h3>
      <div className="mt-3 flex flex-col gap-1">
        {facilities.map((f) => (
          <div key={f.name} className="flex items-center gap-3 rounded-md px-2 py-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-interactive-50 text-interactive-600">
              <Building2 className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-ink">{f.name}</p>
              <p className="text-xs text-ink-subtle">{f.count} Requests</p>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/facility-booking/facilities"
        className="mt-2 flex items-center justify-between border-t border-border pt-3 text-sm font-medium text-interactive-600 hover:underline"
      >
        View all facilities <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
