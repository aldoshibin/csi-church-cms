"use client";

import { ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { EXPENSE_PAYMENT_METHOD_OPTIONS, BANK_ACCOUNT_OPTIONS } from "@/lib/mock/expensesMockData";

export default function Step2PaymentInformation({ form, setField, onNext, onPrevious }) {
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setField("paymentAttachmentName", file.name);
    setField("paymentAttachmentSize", `${(file.size / 1024).toFixed(0)} KB`);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Payment Information</h3>
      <p className="mb-5 text-sm text-ink-subtle">Enter how this expense will be paid.</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select
          label="Payment Method" required helperText="Select the payment method used"
          value={form.paymentMethod} onChange={(e) => setField("paymentMethod", e.target.value)}
        >
          <option value="">Select Payment Method</option>
          {EXPENSE_PAYMENT_METHOD_OPTIONS.map((p) => <option key={p}>{p}</option>)}
        </Select>

        <Select
          label="Paid From (Bank Account)" required helperText="Select the bank account"
          value={form.paidFromAccount} onChange={(e) => setField("paidFromAccount", e.target.value)}
        >
          <option value="">Select bank account</option>
          {BANK_ACCOUNT_OPTIONS.map((b) => <option key={b.code} value={b.label}>{b.label}</option>)}
        </Select>

        <Input
          label="Payment Date" required type="date" helperText="Date when the payment was made"
          value={form.paymentDate} onChange={(e) => setField("paymentDate", e.target.value)}
        />

        <Input
          label="Transaction / Reference No." required placeholder="Enter transaction or reference number" helperText="Enter transaction or reference number"
          value={form.transactionRefNo} onChange={(e) => setField("transactionRefNo", e.target.value)}
        />

        <Input
          label="Cheque / UTR / Payment ID (Optional)" placeholder="Enter cheque number, UTR or payment ID" helperText="Enter cheque number, UTR or payment ID"
          value={form.chequeUtrPaymentId} onChange={(e) => setField("chequeUtrPaymentId", e.target.value)}
        />

        <Input
          label="Payment Mode Details (Optional)" placeholder="Additional payment details" helperText="Additional details about the payment"
          value={form.paymentModeDetails} onChange={(e) => setField("paymentModeDetails", e.target.value)}
        />
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-ink">Attachment (Optional)</label>
        <label className="flex h-[104px] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-border text-ink-subtle hover:border-interactive-300 hover:bg-interactive-50">
          <Upload className="h-5 w-5" />
          <span className="text-sm">{form.paymentAttachmentName || "Click to upload or drag and drop"}</span>
          <span className="text-xs">PNG, JPG, PDF up to 5MB</span>
          <input type="file" className="hidden" accept=".png,.jpg,.jpeg,.pdf" onChange={handleFile} />
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={onPrevious}>Previous</Button>
        <Button type="button" onClick={onNext} rightIcon={<ArrowRight className="h-4 w-4" />}>Next</Button>
      </div>
    </div>
  );
}
