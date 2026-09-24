"use client";

import Link from "next/link";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { OG_PAYMENT_METHOD_BADGE } from "@/lib/mock/onlineGivingMockData";
import { formatCurrency, formatDate } from "@/lib/utils";

export function RecentDonationsCard({ donations, totalCount }) {
  const columns = [
    { key: "index", header: "#", render: (row) => <span className="text-ink-subtle">{row.id}</span> },
    {
      key: "date", header: "Date & Time",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.date)}</p>
          <p className="text-xs text-ink-subtle">{row.time}</p>
        </div>
      ),
    },
    {
      key: "donor", header: "Donor",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            {row.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium text-ink">{row.donor}</p>
            <p className="truncate text-xs text-ink-subtle">{row.email}</p>
          </div>
        </div>
      ),
    },
    { key: "fund", header: "Fund / Purpose", render: (row) => <span className="font-medium text-ink">{row.fund}</span> },
    { key: "amount", header: "Amount", render: (row) => <span className="font-medium text-ink">{formatCurrency(row.amount)}</span> },
    {
      key: "paymentMethod", header: "Payment Method",
      render: (row) => {
        const style = OG_PAYMENT_METHOD_BADGE[row.paymentMethod] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.paymentMethod}</span>;
      },
    },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={row.status === "Successful" ? "success" : "danger"}>{row.status}</Badge>,
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h3 className="text-sm font-semibold text-ink">Recent Donations</h3>
        <Link href="/online-giving/donations" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <Table columns={columns} data={donations} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" />
      <div className="border-t border-border px-4 py-3 text-xs text-ink-subtle">
        Showing 1 to {donations.length} of {totalCount} transactions
      </div>
    </div>
  );
}
