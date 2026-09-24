"use client";

import Link from "next/link";
import { formatCurrency } from "@/lib/utils";

export function TopDonorsPanel({ donors = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Top Donors</h3>
        <Link href="/online-giving/donations" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col gap-3">
        {donors.map((donor) => (
          <div key={donor.rank} className="flex items-center gap-2.5">
            <span className="w-4 shrink-0 text-xs font-medium text-ink-subtle">{donor.rank}</span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
              {donor.initials}
            </span>
            <span className="min-w-0 flex-1 truncate text-sm text-ink">{donor.name}</span>
            <span className="shrink-0 text-sm font-semibold text-ink">{formatCurrency(donor.amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
