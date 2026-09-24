"use client";

import { Eye } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { DonationRowActionsMenu } from "./DonationRowActionsMenu";
import { DONATION_STATUS_VARIANT, DONATION_PAYMENT_METHOD_STYLE } from "@/lib/mock/donationsMockData";
import { formatCurrency, formatDate } from "@/lib/utils";

export function DonationsTable({ donations, isLoading, pagination, selectedId, onView, onSendReceipt, onRefund, onDelete }) {
  const columns = [
    { key: "serial", header: "#", render: (row) => <span className="text-ink-subtle">{row.serial}</span> },
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
    {
      key: "paymentMethod", header: "Payment Method",
      render: (row) => {
        const style = DONATION_PAYMENT_METHOD_STYLE[row.paymentMethod] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.paymentMethod}</span>;
      },
    },
    { key: "amount", header: "Amount", render: (row) => <span className="font-medium text-ink">{formatCurrency(row.amount)}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={DONATION_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    { key: "receipt", header: "Receipt", render: (row) => <span className="text-ink-muted">{row.status === "Pending" ? "-" : row.id}</span> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button
            type="button"
            onClick={() => onView?.(row)}
            className={`flex h-8 w-8 items-center justify-center rounded-md border text-ink-subtle hover:bg-surface-canvas ${
              selectedId === row.id ? "border-interactive-500 bg-interactive-50 text-interactive-600" : "border-border"
            }`}
            aria-label={`View ${row.id}`}
          >
            <Eye className="h-4 w-4" />
          </button>
          <DonationRowActionsMenu donation={row} onSendReceipt={onSendReceipt} onRefund={onRefund} onDelete={onDelete} />
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={donations}
      isLoading={isLoading}
      getRowId={(row) => row.id}
      emptyMessage="No donations found"
      emptyDescription="Try adjusting your filters or search."
      pagination={pagination}
    />
  );
}
