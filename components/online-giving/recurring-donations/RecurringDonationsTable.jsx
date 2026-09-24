"use client";

import { Eye } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { RecurringDonationRowActionsMenu } from "./RecurringDonationRowActionsMenu";
import { RD_STATUS_VARIANT } from "@/lib/mock/recurringDonationsMockData";
import { formatCurrency, formatDate } from "@/lib/utils";

export function RecurringDonationsTable({ subscriptions, isLoading, pagination, selectedId, onView, onEdit, onPause, onCancel, onUpdatePaymentMethod }) {
  const columns = [
    { key: "serial", header: "#", render: (row) => <span className="text-ink-subtle">{row.serial}</span> },
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
    {
      key: "fund", header: "Purpose / Fund",
      render: (row) => (
        <div>
          <p className="font-medium text-ink">{row.fund}</p>
          <p className="text-xs text-ink-subtle">{row.purpose}</p>
        </div>
      ),
    },
    {
      key: "amount", header: "Amount & Frequency",
      render: (row) => (
        <div>
          <p className="font-medium text-ink">{formatCurrency(row.amount)}</p>
          <p className="text-xs text-ink-subtle">{row.frequency}</p>
        </div>
      ),
    },
    { key: "nextPayment", header: "Next Payment", render: (row) => <span className="text-ink-muted">{formatDate(row.nextPayment)}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={RD_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    { key: "startDate", header: "Start Date", render: (row) => <span className="text-ink-muted">{formatDate(row.startDate)}</span> },
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
          <RecurringDonationRowActionsMenu subscription={row} onEdit={onEdit} onPause={onPause} onCancel={onCancel} onUpdatePaymentMethod={onUpdatePaymentMethod} />
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={subscriptions}
      isLoading={isLoading}
      getRowId={(row) => row.id}
      emptyMessage="No subscriptions found"
      emptyDescription="Try adjusting your filters or search."
      pagination={pagination}
    />
  );
}
