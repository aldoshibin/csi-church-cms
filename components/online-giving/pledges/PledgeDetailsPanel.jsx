"use client";

import { X, User, Pencil, IndianRupee, XCircle, History, Download } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PLEDGE_STATUS_VARIANT } from "@/lib/mock/pledgesMockData";
import { formatCurrency, formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 text-sm">
      <span className="shrink-0 text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

export function PledgeDetailsPanel({ pledge, onClose, onEdit, onRecordPayment, onCancel, onViewPaymentHistory, onDownload }) {
  const remaining = pledge.pledgedAmount - pledge.paidAmount;
  const pct = pledge.pledgedAmount ? Math.round((pledge.paidAmount / pledge.pledgedAmount) * 100) : 0;
  const schedule = pledge.paymentSchedule.slice(0, 5);

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Pledge Details</h3>
        <button type="button" onClick={onClose} className="rounded-md p-1 text-ink-subtle hover:bg-surface-canvas hover:text-ink" aria-label="Close">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <Badge variant={PLEDGE_STATUS_VARIANT[pledge.status] ?? "default"}>{pledge.status}</Badge>
          <span className="text-xs text-ink-subtle">Pledge ID: <span className="font-medium text-ink">{pledge.id}</span></span>
        </div>

        <section className="mb-5">
          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent-700">
            <User className="h-4 w-4" /> Donor Information
          </h4>
          <div className="flex items-center gap-3 rounded-lg bg-surface-canvas p-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-interactive-100 text-sm font-semibold text-interactive-600">
              {pledge.initials}
            </span>
            <div className="min-w-0">
              <p className="truncate font-medium text-ink">{pledge.donor}</p>
              <p className="truncate text-xs text-ink-subtle">{pledge.email}</p>
              <p className="truncate text-xs text-ink-subtle">{pledge.phone}</p>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h4 className="mb-1 text-sm font-semibold text-accent-700">Pledge Information</h4>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Fund / Purpose" value={pledge.fund} />
            <Row label="Pledged Amount" value={formatCurrency(pledge.pledgedAmount)} />
            <Row label="Paid Amount" value={`${formatCurrency(pledge.paidAmount)} (${pct}%)`} />
            <Row label="Remaining Amount" value={formatCurrency(remaining)} />
            <Row label="Start Date" value={formatDate(pledge.startDate)} />
            <Row label="End Date" value={formatDate(pledge.endDate)} />
            <Row label="Pledge Status" value={<Badge variant={PLEDGE_STATUS_VARIANT[pledge.status] ?? "default"}>{pledge.status}</Badge>} />
          </div>
        </section>

        <section className="mb-5">
          <h4 className="mb-3 text-sm font-semibold text-ink">Payment Schedule</h4>
          <div className="ml-1 flex flex-col gap-4 border-l-2 border-surface-muted pl-4">
            {schedule.map((item, i) => (
              <div key={i} className="relative flex items-center justify-between gap-3">
                <span
                  className={`absolute -left-[21px] h-3 w-3 rounded-full border-2 border-white ${
                    item.status === "Paid" ? "bg-success-500" : "bg-interactive-500"
                  }`}
                />
                <div>
                  <p className="text-sm font-medium text-ink">{formatDate(item.date)}</p>
                  <p className="text-xs text-ink-subtle">{formatCurrency(item.amount)}</p>
                </div>
                <Badge variant={item.status === "Paid" ? "success" : "info"}>{item.status}</Badge>
              </div>
            ))}
          </div>
          <button type="button" className="mt-3 w-full rounded-md border border-border py-2 text-sm font-medium text-ink-muted hover:bg-surface-canvas">
            View Full Schedule
          </button>
        </section>

        <section className="mb-4">
          <h4 className="mb-2 text-sm font-semibold text-ink">Actions</h4>
          <div className="grid grid-cols-2 gap-2.5">
            <button type="button" onClick={() => onEdit?.(pledge)} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-left text-xs font-medium text-ink-muted hover:bg-surface-canvas">
              <Pencil className="h-4 w-4 shrink-0" /> Edit Pledge
            </button>
            <button type="button" onClick={() => onRecordPayment?.(pledge)} className="flex items-center gap-2 rounded-lg border border-interactive-100 px-3 py-2.5 text-left text-xs font-medium text-interactive-600 hover:bg-interactive-50">
              <IndianRupee className="h-4 w-4 shrink-0" /> Record Payment
            </button>
            <button type="button" onClick={() => onCancel?.(pledge)} className="flex items-center gap-2 rounded-lg border border-danger-100 px-3 py-2.5 text-left text-xs font-medium text-danger-600 hover:bg-danger-50">
              <XCircle className="h-4 w-4 shrink-0" /> Cancel Pledge
            </button>
            <button type="button" onClick={() => onViewPaymentHistory?.(pledge)} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-left text-xs font-medium text-ink-muted hover:bg-surface-canvas">
              <History className="h-4 w-4 shrink-0" /> View Payment History
            </button>
          </div>
        </section>

        <button type="button" onClick={() => onDownload?.(pledge)} className="mb-2.5 flex w-full items-center justify-center gap-2 rounded-md border border-border py-2.5 text-sm font-medium text-ink-muted hover:bg-surface-canvas">
          <Download className="h-4 w-4" /> Download Pledge
        </button>
        <button type="button" onClick={onClose} className="w-full rounded-md border border-border py-2.5 text-sm font-medium text-ink-muted hover:bg-surface-canvas">
          Close
        </button>
      </div>
    </div>
  );
}
