"use client";

import { X, User, Pencil, PauseCircle, XCircle, CreditCard, History, Download } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { RD_STATUS_VARIANT } from "@/lib/mock/recurringDonationsMockData";
import { formatCurrency, formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 text-sm">
      <span className="shrink-0 text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

export function SubscriptionDetailsPanel({ subscription: sub, onClose, onEdit, onPause, onCancel, onUpdatePaymentMethod, onViewPaymentHistory, onDownloadReceipt }) {
  const actions = [
    { label: "Edit Subscription", icon: Pencil, onClick: () => onEdit?.(sub) },
    { label: "Pause Subscription", icon: PauseCircle, onClick: () => onPause?.(sub), warn: true },
    { label: "Cancel Subscription", icon: XCircle, onClick: () => onCancel?.(sub), danger: true },
    { label: "Update Payment Method", icon: CreditCard, onClick: () => onUpdatePaymentMethod?.(sub) },
    { label: "View Payment History", icon: History, onClick: () => onViewPaymentHistory?.(sub) },
    { label: "Download Receipt", icon: Download, onClick: () => onDownloadReceipt?.(sub) },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Subscription Details</h3>
        <button type="button" onClick={onClose} className="rounded-md p-1 text-ink-subtle hover:bg-surface-canvas hover:text-ink" aria-label="Close">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <Badge variant={RD_STATUS_VARIANT[sub.status] ?? "default"}>{sub.status}</Badge>
          <span className="text-xs text-ink-subtle">Subscription ID: <span className="font-medium text-ink">{sub.id}</span></span>
        </div>

        <section className="mb-5">
          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent-700">
            <User className="h-4 w-4" /> Donor Information
          </h4>
          <div className="flex items-center gap-3 rounded-lg bg-surface-canvas p-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-interactive-100 text-sm font-semibold text-interactive-600">
              {sub.initials}
            </span>
            <div className="min-w-0">
              <p className="truncate font-medium text-ink">{sub.donor}</p>
              <p className="truncate text-xs text-ink-subtle">{sub.email}</p>
              <p className="truncate text-xs text-ink-subtle">{sub.phone}</p>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h4 className="mb-1 text-sm font-semibold text-accent-700">Subscription Information</h4>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Purpose / Fund" value={`${sub.purpose} (${sub.fund})`} />
            <Row label="Amount" value={formatCurrency(sub.amount)} />
            <Row label="Frequency" value={sub.frequency} />
            <Row label="Next Payment" value={formatDate(sub.nextPayment)} />
            <Row
              label="Payment Method"
              value={
                sub.cardLast4 ? (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="rounded bg-interactive-50 px-1.5 py-0.5 text-[10px] font-bold uppercase text-interactive-600">{sub.paymentMethod}</span>
                    **** **** **** {sub.cardLast4}
                  </span>
                ) : (
                  sub.paymentMethod
                )
              }
            />
            <Row label="Start Date" value={formatDate(sub.startDate)} />
            <Row label="Last Payment" value={formatDate(sub.lastPayment)} />
            <Row label="Total Payments" value={sub.totalPayments} />
            <Row label="Total Collected" value={formatCurrency(sub.totalCollected)} />
          </div>
        </section>

        <section className="mb-5">
          <h4 className="mb-1 text-sm font-semibold text-ink">Billing Address</h4>
          <p className="text-sm text-ink-muted">{sub.billingAddress}</p>
        </section>

        <section className="mb-5">
          <h4 className="mb-1 text-sm font-semibold text-ink">Notes</h4>
          <p className="text-sm text-ink-subtle">{sub.notes || "—"}</p>
        </section>

        <section className="mb-4">
          <h4 className="mb-2 text-sm font-semibold text-ink">Actions</h4>
          <div className="grid grid-cols-2 gap-2.5">
            {actions.map((action) => (
              <button
                key={action.label}
                type="button"
                onClick={action.onClick}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-xs font-medium transition-colors ${
                  action.danger
                    ? "border-danger-100 text-danger-600 hover:bg-danger-50"
                    : action.warn
                    ? "border-warning-100 text-warning-600 hover:bg-warning-50"
                    : "border-border text-ink-muted hover:bg-surface-canvas"
                }`}
              >
                <action.icon className="h-4 w-4 shrink-0" /> {action.label}
              </button>
            ))}
          </div>
        </section>

        <button type="button" onClick={onClose} className="w-full rounded-md border border-border py-2.5 text-sm font-medium text-ink-muted hover:bg-surface-canvas">
          Close
        </button>
      </div>
    </div>
  );
}
