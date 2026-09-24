"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Printer, Mail, RotateCcw, Trash2, User, Info } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DONATION_STATUS_VARIANT } from "@/lib/mock/donationsMockData";
import { formatCurrency, formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 text-sm">
      <span className="shrink-0 text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

export function DonationDetailsPanel({ donation, onClose, onSendReceipt, onRefund, onDelete }) {
  return (
    <AnimatePresence>
      {donation && (
        <motion.aside
          initial={{ x: 420, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 420, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed right-0 top-0 z-40 flex h-screen w-full max-w-[420px] flex-col border-l border-border bg-white shadow-elevated"
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-base font-semibold text-ink">Donation Details</h2>
            <button type="button" onClick={onClose} className="rounded-md p-1 text-ink-subtle hover:bg-surface-canvas hover:text-ink" aria-label="Close">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="scroll-thin flex-1 overflow-y-auto px-5 py-4">
            <div className="mb-5 flex items-center justify-between">
              <Badge variant={DONATION_STATUS_VARIANT[donation.status] ?? "default"}>{donation.status}</Badge>
              <span className="flex items-center gap-1.5 text-sm text-ink-muted">
                Receipt: <span className="font-medium text-ink">{donation.id}</span>
                <Printer className="h-3.5 w-3.5 text-ink-subtle" />
              </span>
            </div>

            <section className="mb-5">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent-700">
                <User className="h-4 w-4" /> Donor Information
              </h3>
              <div className="flex items-center gap-3 rounded-lg bg-surface-canvas p-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-interactive-100 text-sm font-semibold text-interactive-600">
                  {donation.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-medium text-ink">{donation.donor}</p>
                  <p className="truncate text-xs text-ink-subtle">{donation.email}</p>
                  <p className="truncate text-xs text-ink-subtle">{donation.phone}</p>
                </div>
              </div>
            </section>

            <section className="mb-5">
              <h3 className="mb-1 text-sm font-semibold text-accent-700">Transaction Information</h3>
              <div className="flex flex-col divide-y divide-surface-muted">
                <Row label="Date & Time" value={<>{formatDate(donation.date)}, {donation.time} <span className="block text-xs font-normal text-ink-subtle">(Asia/Kolkata IST)</span></>} />
                <Row label="Payment Method" value={donation.paymentMethod} />
                <Row label="Transaction ID" value={donation.transactionId} />
                <Row label="Reference ID" value={donation.referenceId} />
                <Row label="Status" value={<Badge variant={DONATION_STATUS_VARIANT[donation.status] ?? "default"}>{donation.status}</Badge>} />
                <Row label="Amount" value={formatCurrency(donation.amount)} />
                <Row label="Fund / Purpose" value={donation.fund} />
                <Row label="Entered By" value={donation.enteredBy} />
                <Row label="Remarks" value={donation.remarks} />
              </div>
            </section>

            <section>
              <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-accent-700">
                <Info className="h-4 w-4" /> Additional Information
              </h3>
              <div className="flex flex-col divide-y divide-surface-muted">
                <Row label="Fund / Account" value={donation.fundAccount} />
                <Row label="Category" value={donation.category} />
                <Row label="Payment Link" value={donation.paymentLink} />
                <Row label="IP Address" value={donation.ipAddress} />
                <Row label="Device / Browser" value={donation.device} />
              </div>
            </section>
          </div>

          <div className="flex items-center gap-2 border-t border-border px-5 py-4">
            <Button type="button" variant="secondary" size="sm" leftIcon={<Mail className="h-4 w-4" />} onClick={() => onSendReceipt?.(donation)} className="flex-1">
              Send Receipt
            </Button>
            <Button type="button" variant="secondary" size="sm" leftIcon={<RotateCcw className="h-4 w-4" />} onClick={() => onRefund?.(donation)} className="flex-1">
              Refund
            </Button>
            <button
              type="button"
              onClick={() => onDelete?.(donation)}
              className="flex h-9 items-center gap-1.5 rounded-md border border-danger-200 bg-danger-50 px-3 text-sm font-medium text-danger-600 hover:bg-danger-100"
            >
              <Trash2 className="h-4 w-4" /> Delete
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
