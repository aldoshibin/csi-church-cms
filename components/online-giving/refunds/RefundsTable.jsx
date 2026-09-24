"use client";

import { Eye } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { RefundRowActionsMenu } from "./RefundRowActionsMenu";
import { REFUND_STATUS_VARIANT, REFUND_PAYMENT_METHOD_STYLE } from "@/lib/mock/refundsMockData";
import { formatCurrency, formatDate } from "@/lib/utils";

export function RefundsTable({ refunds, isLoading, pagination, selectedId, onView, onViewPayment, onDownloadInvoice, onRefundReceipt, onCancel }) {
  const columns = [
    { key: "serial", header: "#", render: (row) => <span className="text-ink-subtle">{row.serial}</span> },
    { key: "id", header: "Refund ID", render: (row) => <span className="font-medium text-interactive-500">{row.id}</span> },
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
    { key: "amount", header: "Refund Amount", render: (row) => <span className="font-medium text-ink">{formatCurrency(row.amount)}</span> },
    {
      key: "paymentMethod", header: "Payment Method",
      render: (row) => {
        const style = REFUND_PAYMENT_METHOD_STYLE[row.paymentMethod] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.paymentMethod}</span>;
      },
    },
    { key: "refundDate", header: "Refund Date", render: (row) => <span className="text-ink-muted">{formatDate(row.refundDate)}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={REFUND_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
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
          <RefundRowActionsMenu refund={row} onViewPayment={onViewPayment} onDownloadInvoice={onDownloadInvoice} onRefundReceipt={onRefundReceipt} onCancel={onCancel} />
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={refunds}
      isLoading={isLoading}
      getRowId={(row) => row.id}
      emptyMessage="No refunds found"
      emptyDescription="Try adjusting your filters or search."
      pagination={pagination}
    />
  );
}
