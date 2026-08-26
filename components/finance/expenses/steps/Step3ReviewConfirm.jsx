"use client";

import { ArrowLeft, Check, FileText, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AttachmentPreviewCard } from "../AttachmentPreviewCard";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function Step3ReviewConfirm({ form, isSubmitting, onConfirm, onPrevious }) {
  const expenseDetailRows = [
    ["Expense Category", form.category],
    ["Expense Date", formatDate(form.date)],
    ["Paid To / Vendor", form.paidTo],
    ["Description", form.description],
    ["Expense Account", form.expenseAccount],
  ];
  const expenseDetailRows2 = [
    ["Amount (₹)", formatCurrency(form.amount || 0)],
    ["Reference No.", form.referenceNo || "-"],
    ["Notes", form.notes || "-"],
  ];

  const paymentRows = [
    ["Payment Method", form.paymentMethod],
    ["Paid From (Bank Account)", form.paidFromAccount],
    ["Payment Date", formatDate(form.paymentDate)],
  ];
  const paymentRows2 = [
    ["Cheque / UTR / Payment ID", form.chequeUtrPaymentId || "-"],
    ["Payment Mode Details", form.paymentModeDetails || "-"],
    ["Attachment", form.paymentAttachmentName || "-"],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Review &amp; Confirm</h3>
      <p className="mb-5 text-sm text-ink-subtle">Please review all details before saving this expense.</p>

      <div className="rounded-lg bg-surface-canvas p-5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
          <FileText className="h-4 w-4" /> Expense Details
        </h4>
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            {expenseDetailRows.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4">
                <span className="shrink-0 text-ink-subtle">{label}</span>
                <span className="text-right font-medium text-ink">{value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {expenseDetailRows2.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4">
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
            {paymentRows.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4">
                <span className="shrink-0 text-ink-subtle">{label}</span>
                <span className="text-right font-medium text-ink">{value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {paymentRows2.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4">
                <span className="shrink-0 text-ink-subtle">{label}</span>
                <span className="text-right font-medium text-ink">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <AttachmentPreviewCard name={form.paymentAttachmentName} size={form.paymentAttachmentSize} />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onPrevious}>Previous</Button>
        <Button type="button" isLoading={isSubmitting} rightIcon={<Check className="h-4 w-4" />} onClick={onConfirm}>Confirm &amp; Save</Button>
      </div>
    </div>
  );
}
