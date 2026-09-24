"use client";

import { Badge } from "@/components/ui/Badge";
import { DONATION_PAYMENT_STATUS_BADGE_MAP } from "@/lib/mock/vmMissionEvangelismMockData";

export function PaymentInformationCard({ payment }) {
  if (!payment) return null;
  const dateTimeText = payment.dateTime
    ? new Date(payment.dateTime).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" })
    : "–";
  const rows = [
    ["Payment Method", payment.method],
    ["Gateway / Channel", payment.gateway],
    ["Transaction ID", payment.transactionId],
    ["Payment Date & Time", dateTimeText],
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Payment Information</h3>
      <div className="mt-3 flex flex-col gap-2.5 text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-2">
            <span className="text-ink-subtle">{label}</span>
            <span className="text-right font-medium text-ink">{value}</span>
          </div>
        ))}
        <div className="flex items-center justify-between gap-2">
          <span className="text-ink-subtle">Payment Status</span>
          <Badge variant={DONATION_PAYMENT_STATUS_BADGE_MAP[payment.status] ?? "success"}>{payment.status}</Badge>
        </div>
      </div>
    </div>
  );
}
