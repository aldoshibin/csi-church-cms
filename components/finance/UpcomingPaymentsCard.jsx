"use client";

import Link from "next/link";
import { CircleDollarSign } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency, formatDate } from "@/lib/utils";

const STATUS_VARIANT = { Overdue: "danger", "Due Soon": "warning", Upcoming: "info" };

export function UpcomingPaymentsCard({ payments = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#00695C]">Upcoming Payments</h3>
        <Link href="/finance/expenses" className="text-xs font-medium text-interactive-500 hover:underline">
          View All
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {payments.map((p) => (
          <div key={p.id} className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-ink-subtle">
              <CircleDollarSign className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{p.label}</p>
              <p className="text-xs text-ink-subtle">{formatDate(p.date)}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-ink">{formatCurrency(p.amount)}</p>
              <Badge variant={STATUS_VARIANT[p.status] ?? "default"} className="mt-0.5 px-1.5 py-0.5 text-[10.5px]">
                {p.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
