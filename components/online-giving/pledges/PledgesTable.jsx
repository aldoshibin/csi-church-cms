"use client";

import { Eye } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { PledgeRowActionsMenu } from "./PledgeRowActionsMenu";
import { PLEDGE_STATUS_VARIANT } from "@/lib/mock/pledgesMockData";
import { formatCurrency, formatDate } from "@/lib/utils";

export function PledgesTable({ pledges, isLoading, pagination, selectedId, onView, onEdit, onRecordPayment, onViewPaymentHistory, onCancel }) {
  const columns = [
    { key: "serial", header: "#", render: (row) => <span className="text-ink-subtle">{row.serial}</span> },
    { key: "id", header: "Pledge ID", render: (row) => <span className="font-medium text-interactive-500">{row.id}</span> },
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
    { key: "pledgedAmount", header: "Pledged Amount", render: (row) => <span className="font-medium text-ink">{formatCurrency(row.pledgedAmount)}</span> },
    {
      key: "paidAmount", header: "Paid Amount",
      render: (row) => {
        const pct = row.pledgedAmount ? Math.round((row.paidAmount / row.pledgedAmount) * 100) : 0;
        return (
          <div>
            <p className="text-ink">{formatCurrency(row.paidAmount)}</p>
            <p className="text-xs text-ink-subtle">({pct}%)</p>
          </div>
        );
      },
    },
    { key: "startDate", header: "Start Date", render: (row) => <span className="text-ink-muted">{formatDate(row.startDate)}</span> },
    { key: "endDate", header: "End Date", render: (row) => <span className="text-ink-muted">{formatDate(row.endDate)}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={PLEDGE_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
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
          <PledgeRowActionsMenu pledge={row} onEdit={onEdit} onRecordPayment={onRecordPayment} onViewPaymentHistory={onViewPaymentHistory} onCancel={onCancel} />
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={pledges}
      isLoading={isLoading}
      getRowId={(row) => row.id}
      emptyMessage="No pledges found"
      emptyDescription="Try adjusting your filters or search."
      pagination={pagination}
    />
  );
}
