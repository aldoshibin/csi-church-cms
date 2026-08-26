"use client";

import { ArrowRight, X, Upload } from "lucide-react";
import Link from "next/link";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { EXPENSE_CATEGORY_OPTIONS, EXPENSE_ACCOUNT_OPTIONS, EXPENSE_PAYMENT_METHOD_OPTIONS } from "@/lib/mock/expensesMockData";

export default function Step1ExpenseDetails({ form, setField, onNext }) {
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setField("attachmentName", file.name);
    setField("attachmentSize", `${(file.size / 1024).toFixed(0)} KB`);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Expense Details</h3>
      <p className="mb-5 text-sm text-ink-subtle">Enter the details of the expense.</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select
          label="Expense Category" required helperText="Select the expense category"
          value={form.category} onChange={(e) => setField("category", e.target.value)}
        >
          <option value="">Select Category</option>
          {EXPENSE_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>

        <Input
          label="Expense Date" required type="date" helperText="Date when the expense was incurred"
          value={form.date} onChange={(e) => setField("date", e.target.value)}
        />

        <Input
          label="Paid To / Vendor" required placeholder="Enter vendor or person name" helperText="Name of the vendor or person"
          value={form.paidTo} onChange={(e) => setField("paidTo", e.target.value)}
        />

        <Textarea
          label="Description" required rows={2} maxLength={250} placeholder="Enter expense description"
          helperText={`${form.description.length}/250 · Brief description about the expense`}
          value={form.description} onChange={(e) => setField("description", e.target.value)}
        />

        <Input
          label="Amount (₹)" required type="number" placeholder="Enter amount" leftIcon={<span className="text-sm">₹</span>}
          helperText="Enter the total expense amount"
          value={form.amount} onChange={(e) => setField("amount", e.target.value)}
        />

        <Select
          label="Expense Account" required helperText="Select the ledger account"
          value={form.expenseAccount} onChange={(e) => setField("expenseAccount", e.target.value)}
        >
          <option value="">Select Account</option>
          {EXPENSE_ACCOUNT_OPTIONS.map((a) => <option key={a}>{a}</option>)}
        </Select>

        <Select
          label="Payment Method" required helperText="Select the payment method"
          value={form.paymentMethod} onChange={(e) => setField("paymentMethod", e.target.value)}
        >
          <option value="">Select Payment Method</option>
          {EXPENSE_PAYMENT_METHOD_OPTIONS.map((p) => <option key={p}>{p}</option>)}
        </Select>

        <Input
          label="Reference Number (Optional)" placeholder="Enter reference number" helperText="Invoice / Bill / Receipt number"
          value={form.referenceNo} onChange={(e) => setField("referenceNo", e.target.value)}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Attach Receipt / Document (Optional)</label>
          <label className="flex h-[104px] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-border text-ink-subtle hover:border-interactive-300 hover:bg-interactive-50">
            <Upload className="h-5 w-5" />
            <span className="text-sm">{form.attachmentName || "Click to upload or drag and drop"}</span>
            <span className="text-xs">PNG, JPG, PDF up to 5MB</span>
            <input type="file" className="hidden" accept=".png,.jpg,.jpeg,.pdf" onChange={handleFile} />
          </label>
        </div>

        <Textarea
          label="Notes (Optional)" rows={3} maxLength={250} placeholder="Add any additional notes"
          helperText={`${form.notes.length}/250 · Additional notes if any`}
          value={form.notes} onChange={(e) => setField("notes", e.target.value)}
        />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <Link href="/finance/expenses">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" onClick={onNext} rightIcon={<ArrowRight className="h-4 w-4" />}>Next</Button>
      </div>
    </div>
  );
}
