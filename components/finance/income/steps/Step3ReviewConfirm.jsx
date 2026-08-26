"use client";

import { ArrowLeft, Check, FileText, CreditCard, Paperclip, Eye, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function Step3ReviewConfirm({ form, isSubmitting, onConfirm, onPrevious }) {
  const incomeRows1 = [
    ["Income Category", form.category],
    ["Income Date", formatDate(form.date)],
    ["Received From", form.receivedFrom],
    ["Related Account", form.relatedAccount],
    ["Description", form.description],
  ];
  const incomeRows2 = [
    ["Amount (₹)", formatCurrency(form.amount || 0)],
    ["Income Type", form.incomeType],
    ["Received By", form.receivedBy || "-"],
    ["Payment Method", form.paymentMethod],
    ["Notes", form.notes || "-"],
  ];

  const paymentRows1 = [
    ["Payment Method", form.paymentMethod],
    ["Transaction / Receipt No.", form.transactionReceiptNo || "-"],
    ["Payment Mode Details", form.paymentModeDetails || "-"],
  ];
  const paymentRows2 = [
    ["Paid By", form.paidBy],
    ["Payment Received By", form.receivedBy],
    ["Reference Document", form.paymentAttachmentName || "-"],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Review &amp; Confirm</h3>
      <p className="mb-5 text-sm text-ink-subtle">Please review all details below before saving this income.</p>

      <div className="rounded-lg bg-surface-canvas p-5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
          <FileText className="h-4 w-4" /> Income Details
        </h4>
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            {incomeRows1.map(([label, value]) => (
              <div key={label} className="flex items-start justify-between gap-4">
                <span className="shrink-0 text-ink-subtle">{label}</span>
                <span className="text-right font-medium text-ink">{value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {incomeRows2.map(([label, value]) => (
              <div key={label} className="flex items-start justify-between gap-4">
                <span className="shrink-0 text-ink-subtle">{label}</span>
                <span className="text-right font-medium text-ink">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-lg bg-surface-canvas p-5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
          <CreditCard className="h-4 w-4" /> Payment Information
        </h4>
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            {paymentRows1.map(([label, value]) => (
              <div key={label} className="flex items-start justify-between gap-4">
                <span className="shrink-0 text-ink-subtle">{label}</span>
                <span className="text-right font-medium text-ink">{value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {paymentRows2.map(([label, value]) => (
              <div key={label} className="flex items-start justify-between gap-4">
                <span className="shrink-0 text-ink-subtle">{label}</span>
                <span className="text-right font-medium text-ink">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {form.paymentAttachmentName && (
        <div className="mt-5">
          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent-700">
            <Paperclip className="h-4 w-4" /> Attachments
          </h4>
          <div className="flex items-center justify-between rounded-lg border border-border p-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-success-50 text-success-600">
                <ImageIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">{form.paymentAttachmentName}</p>
                <p className="text-xs text-ink-subtle">{form.paymentAttachmentSize}</p>
              </div>
            </div>
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas">
              <Eye className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onPrevious}>Previous</Button>
        <Button type="button" isLoading={isSubmitting} rightIcon={<Check className="h-4 w-4" />} onClick={onConfirm}>Confirm &amp; Save</Button>
      </div>
    </div>
  );
}
