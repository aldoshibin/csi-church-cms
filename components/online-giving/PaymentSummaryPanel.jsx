"use client";

import { formatCurrency } from "@/lib/utils";

export function PaymentSummaryPanel({ summary }) {
  const rows = [
    ["Total Donations", summary.totalDonations],
    ["Total Refunds", summary.totalRefunds],
    ["Net Donations", summary.netDonations],
    ["Average Donation", summary.averageDonation],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Payment Summary <span className="font-normal text-ink-subtle">(This Period)</span></h3>
      <div className="flex flex-col gap-2.5">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span className="text-ink-subtle">{label}</span>
            <span className="font-semibold text-ink">{formatCurrency(value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
