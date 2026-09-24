"use client";

import Link from "next/link";
import { Briefcase } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function OfferingsCollectionsCard({ offerings }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Offerings &amp; Collections</h3>
        <Link href="/youth-ministry/reports" className="text-xs font-medium text-interactive-500 hover:underline">View Report</Link>
      </div>
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-success-50">
          <Briefcase className="h-5 w-5 text-success-600" />
        </span>
        <div>
          <p className="text-xs text-ink-subtle">Total Received</p>
          <p className="font-display text-xl font-bold text-ink">{formatCurrency(offerings.totalReceived)}</p>
          <p className="text-xs font-medium text-success-600">↑ {offerings.delta} vs Apr 1 - Apr 30</p>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <div>
          <div className="mb-1 flex items-center justify-between text-sm">
            <span className="text-ink-muted">General Offerings</span>
            <span className="font-medium text-ink">{formatCurrency(offerings.general.amount)}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-muted">
              <div className="h-full rounded-full bg-success-500" style={{ width: `${offerings.general.pct}%` }} />
            </div>
            <span className="w-10 shrink-0 text-right text-xs text-ink-subtle">{offerings.general.pct}%</span>
          </div>
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between text-sm">
            <span className="text-ink-muted">Special Offerings</span>
            <span className="font-medium text-ink">{formatCurrency(offerings.special.amount)}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-muted">
              <div className="h-full rounded-full bg-interactive-500" style={{ width: `${offerings.special.pct}%` }} />
            </div>
            <span className="w-10 shrink-0 text-right text-xs text-ink-subtle">{offerings.special.pct}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
