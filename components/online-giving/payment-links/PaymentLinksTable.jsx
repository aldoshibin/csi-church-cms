"use client";

import { useState } from "react";
import { Eye, Copy, Check } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { PaymentLinkRowActionsMenu } from "./PaymentLinkRowActionsMenu";
import { PAYMENT_LINK_STATUS_VARIANT } from "@/lib/mock/paymentLinksMockData";
import { formatCurrency, formatDate } from "@/lib/utils";

function CopyLinkCell({ url }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — no-op.
    }
  };
  return (
    <div className="flex items-center gap-2">
      <span className="truncate text-interactive-500">{url}</span>
      <button type="button" onClick={handleCopy} className="shrink-0 text-ink-subtle hover:text-ink" aria-label="Copy link">
        {copied ? <Check className="h-3.5 w-3.5 text-success-600" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}

export function PaymentLinksTable({ links, isLoading, pagination, selectedId, onView, onEdit, onDuplicate, onDeactivate, onDelete }) {
  const columns = [
    { key: "serial", header: "#", render: (row) => <span className="text-ink-subtle">{row.serial}</span> },
    {
      key: "linkName", header: "Link Name",
      render: (row) => (
        <div>
          <p className="font-medium text-ink">{row.linkName}</p>
          <p className="text-xs text-ink-subtle">{row.fund}</p>
        </div>
      ),
    },
    { key: "fund", header: "Purpose / Fund", render: (row) => <span className="text-ink-muted">{row.fund}</span> },
    { key: "linkUrl", header: "Link URL", render: (row) => <CopyLinkCell url={row.linkUrl} /> },
    { key: "clicks", header: "Clicks", render: (row) => <span className="text-ink">{row.clicks}</span> },
    { key: "amountRaised", header: "Amount Raised", render: (row) => <span className="font-medium text-ink">{formatCurrency(row.amountRaised)}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={PAYMENT_LINK_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    {
      key: "createdOn", header: "Created On",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.createdOn)}</p>
          <p className="text-xs text-ink-subtle">{row.createdTime}</p>
        </div>
      ),
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
            aria-label={`View ${row.linkName}`}
          >
            <Eye className="h-4 w-4" />
          </button>
          <PaymentLinkRowActionsMenu link={row} onEdit={onEdit} onDuplicate={onDuplicate} onDeactivate={onDeactivate} onDelete={onDelete} />
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={links}
      isLoading={isLoading}
      getRowId={(row) => row.id}
      emptyMessage="No payment links found"
      emptyDescription="Try adjusting your filters or search, or create a new payment link."
      pagination={pagination}
    />
  );
}
