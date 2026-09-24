"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function LinkSummaryPanel({ summary }) {
  const rows = [
    ["Active Links", summary.activeLinks],
    ["Expired Links", summary.expiredLinks],
    ["Inactive Links", summary.inactiveLinks],
    ["Total Links Created", summary.totalLinksCreated],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Link Summary</h3>
      <div className="flex flex-col gap-2.5">
        {rows.map(([label, value], i) => (
          <div key={label} className={`flex items-center justify-between text-sm ${i === rows.length - 2 ? "border-b border-surface-muted pb-2.5" : ""}`}>
            <span className="text-ink-subtle">{label}</span>
            <span className="font-semibold text-ink">{value}</span>
          </div>
        ))}
      </div>
      <Link href="/online-giving/payment-links" className="mt-3 flex items-center justify-center gap-1.5 rounded-md border border-border py-2 text-sm font-medium text-ink-muted hover:bg-surface-canvas">
        View All Links <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
