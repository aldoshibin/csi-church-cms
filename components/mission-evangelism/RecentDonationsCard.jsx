"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { formatDate, formatCurrency, getInitials } from "@/lib/utils";
import { DONATION_PAYMENT_METHOD_BADGE_MAP } from "@/lib/mock/vmMissionEvangelismMockData";

const AVATAR_COLORS = [
  "bg-[#DCFCE7] text-[#16A34A]",
  "bg-[#F3E8FF] text-[#7C3AED]",
  "bg-[#DBEAFE] text-[#2563EB]",
  "bg-[#FFEDD5] text-[#EA580C]",
];

export function RecentDonationsCard({ donations = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Donations</h3>
        <Link href="/mission-evangelism/donations" className="text-xs font-medium text-interactive-600 hover:underline">View All</Link>
      </div>
      <div className="mt-3 flex flex-col gap-4">
        {donations.map((d, index) => (
          <Link key={d.id} href={`/mission-evangelism/donations/${d.id}`} className="flex items-start gap-3">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}>
              {getInitials(d.donorName)}
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-ink">{d.donorName}</p>
              <p className="text-xs text-ink-subtle">{formatDate(d.date)}</p>
              <p className="text-xs text-ink-subtle">{d.fund}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-sm font-semibold text-ink">{formatCurrency(d.amount)}</span>
              <Badge variant={DONATION_PAYMENT_METHOD_BADGE_MAP[d.method] ?? "info"}>{d.method}</Badge>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
