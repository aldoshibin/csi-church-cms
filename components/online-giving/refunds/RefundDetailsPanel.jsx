"use client";

import { X, User, CreditCard, Download, Receipt, XCircle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { REFUND_STATUS_VARIANT } from "@/lib/mock/refundsMockData";
import { formatCurrency, formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 text-sm">
      <span className="shrink-0 text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

export function RefundDetailsPanel({ refund, onClose, onViewPayment, onDownloadInvoice, onRefundReceipt, onCancel }) {
  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Refund Details</h3>
        <button type="button" onClick={onClose} className="rounded-md p-1 text-ink-subtle hover:bg-surface-canvas hover:text-ink" aria-label="Close">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <Badge variant={REFUND_STATUS_VARIANT[refund.status] ?? "default"}>{refund.status}</Badge>
          <span className="text-xs text-ink-subtle">Refund ID: <span className="font-medium text-ink">{refund.id}</span></span>
        </div>

        <section className="mb-5">
          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent-700">
            <User className="h-4 w-4" /> Donor Information
          </h4>
          <div className="flex items-center gap-3 rounded-lg bg-surface-canvas p-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-interactive-100 text-sm font-semibold text-interactive-600">
              {refund.initials}
            </span>
            <div className="min-w-0">
              <p className="truncate font-medium text-ink">{refund.donor}</p>
              <p className="truncate text-xs text-ink-subtle">{refund.email}</p>
              <p className="truncate text-xs text-ink-subtle">{refund.phone}</p>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h4 className="mb-1 text-sm font-semibold text-accent-700">Refund Information</h4>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Fund / Purpose" value={refund.fund} />
            <Row label="Refund Amount" value={formatCurrency(refund.amount)} />
            <Row label="Reason for Refund" value={refund.reason} />
            <Row label="Refund Date" value={formatDate(refund.refundDate)} />
            <Row label="Status" value={<Badge variant={REFUND_STATUS_VARIANT[refund.status] ?? "default"}>{refund.status}</Badge>} />
            <Row label="Notes" value={refund.notes || "—"} />
          </div>
        </section>

        <section className="mb-5">
          <h4 className="mb-1 text-sm font-semibold text-accent-700">Original Payment Information</h4>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Payment ID" value={refund.paymentId} />
            <Row label="Payment Date" value={`${formatDate(refund.paymentDate)}, ${refund.paymentTime}`} />
            <Row label="Payment Method" value={refund.paymentMethod} />
            <Row label="Amount Paid" value={formatCurrency(refund.amountPaid)} />
          </div>
        </section>

        <section className="mb-5">
          <h4 className="mb-3 text-sm font-semibold text-ink">Timeline</h4>
          <div className="ml-1 flex flex-col gap-4 border-l-2 border-surface-muted pl-4">
            {refund.timeline.map((item, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[21px] flex h-3.5 w-3.5 items-center justify-center rounded-full bg-success-500">
                  <CheckCircle2 className="h-3 w-3 text-white" />
                </span>
                <p className="text-sm font-medium text-ink">{item.label}</p>
                <p className="text-xs text-ink-subtle">{item.date}</p>
                <p className="text-xs text-ink-subtle">{item.by}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-2">
          <h4 className="mb-2 text-sm font-semibold text-ink">Actions</h4>
          <div className="grid grid-cols-2 gap-2.5">
            <button type="button" onClick={() => onViewPayment?.(refund)} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-left text-xs font-medium text-ink-muted hover:bg-surface-canvas">
              <CreditCard className="h-4 w-4 shrink-0" /> View Payment
            </button>
            <button type="button" onClick={() => onDownloadInvoice?.(refund)} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-left text-xs font-medium text-ink-muted hover:bg-surface-canvas">
              <Download className="h-4 w-4 shrink-0" /> Download Invoice
            </button>
            <button type="button" onClick={() => onRefundReceipt?.(refund)} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-left text-xs font-medium text-ink-muted hover:bg-surface-canvas">
              <Receipt className="h-4 w-4 shrink-0" /> Refund Receipt
            </button>
            <button type="button" onClick={() => onCancel?.(refund)} className="flex items-center gap-2 rounded-lg border border-danger-100 px-3 py-2.5 text-left text-xs font-medium text-danger-600 hover:bg-danger-50">
              <XCircle className="h-4 w-4 shrink-0" /> Cancel Refund
            </button>
          </div>
        </section>

        <button type="button" onClick={onClose} className="mt-4 w-full rounded-md border border-border py-2.5 text-sm font-medium text-ink-muted hover:bg-surface-canvas">
          Close
        </button>
      </div>
    </div>
  );
}
