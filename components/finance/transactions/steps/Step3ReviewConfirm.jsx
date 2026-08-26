"use client";

import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function Step3ReviewConfirm({ form, payment, isSubmitting, onConfirm, onPrevious }) {
  const rows = [
    ["Transaction Type", form.type],
    ["Category", form.category],
    ["Account", form.account],
    ["Amount", formatCurrency(form.amount || 0)],
    ["Date", formatDate(form.date)],
    ["Payment Method", form.paymentMethod],
    ["Payer / From", form.payer],
    ["Reference No.", form.refNo],
    ["Received / Paid By", payment.receivedBy || "—"],
    ["Receipt / Voucher No.", payment.receiptNo || "—"],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-5 text-base font-semibold text-ink">Review &amp; Confirm</h3>

      <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between border-b border-surface-muted pb-2">
            <span className="text-ink-subtle">{label}</span>
            <span className="font-medium text-ink">{value}</span>
          </div>
        ))}
      </div>

      {form.description && (
        <div className="mt-5 rounded-lg bg-surface-canvas p-4 text-sm text-ink-muted">{form.description}</div>
      )}

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onPrevious}>
          Previous
        </Button>
        <Button type="button" isLoading={isSubmitting} leftIcon={<Check className="h-4 w-4" />} onClick={onConfirm}>
          Confirm &amp; Save
        </Button>
      </div>
    </div>
  );
}
