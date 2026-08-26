"use client";

import { ArrowRight, X, Upload } from "lucide-react";
import Link from "next/link";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { INCOME_CATEGORY_OPTIONS, INCOME_RELATED_ACCOUNT_OPTIONS, INCOME_PAYMENT_METHOD_OPTIONS } from "@/lib/mock/incomeMockData";

export default function Step1IncomeDetails({ form, setField, onNext }) {
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setField("attachmentName", file.name);
    setField("attachmentSize", `${(file.size / 1024).toFixed(0)} KB`);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Income Details</h3>
      <p className="mb-5 text-sm text-ink-subtle">Enter the details of the income to record.</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select
          label="Income Category" required helperText="Select the income category"
          value={form.category} onChange={(e) => setField("category", e.target.value)}
        >
          <option value="">Select Category</option>
          {INCOME_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>

        <Input
          label="Amount (₹)" required type="number" placeholder="Enter amount" leftIcon={<span className="text-sm">₹</span>}
          helperText="Enter the income amount"
          value={form.amount} onChange={(e) => setField("amount", e.target.value)}
        />

        <Input
          label="Income Date" required type="date" helperText="Date the income was received"
          value={form.date} onChange={(e) => setField("date", e.target.value)}
        />

        <Select
          label="Payment Method" required helperText="Select the payment method"
          value={form.paymentMethod} onChange={(e) => setField("paymentMethod", e.target.value)}
        >
          <option value="">Select Payment Method</option>
          {INCOME_PAYMENT_METHOD_OPTIONS.map((p) => <option key={p}>{p}</option>)}
        </Select>

        <Input
          label="Received From" required placeholder="Enter name of person / group / source" helperText="Name of the person / group / source"
          value={form.receivedFrom} onChange={(e) => setField("receivedFrom", e.target.value)}
        />

        <Select
          label="Related Account" required helperText="Select the ledger account"
          value={form.relatedAccount} onChange={(e) => setField("relatedAccount", e.target.value)}
        >
          <option value="">Select Account</option>
          {INCOME_RELATED_ACCOUNT_OPTIONS.map((a) => <option key={a}>{a}</option>)}
        </Select>

        <Textarea
          label="Description" required rows={2} maxLength={250} placeholder="Enter income description"
          helperText={`${form.description.length}/250 · Brief description about the income`}
          value={form.description} onChange={(e) => setField("description", e.target.value)}
        />

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Attach Receipt (Optional)</label>
          <label className="flex h-[104px] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-border text-ink-subtle hover:border-interactive-300 hover:bg-interactive-50">
            <Upload className="h-5 w-5" />
            <span className="text-sm">{form.attachmentName || "Click to upload or drag and drop"}</span>
            <span className="text-xs">PNG, JPG, PDF up to 5MB</span>
            <input type="file" className="hidden" accept=".png,.jpg,.jpeg,.pdf" onChange={handleFile} />
          </label>
        </div>
      </div>

      <div className="mt-5">
        <Input
          label="Reference Number" placeholder="Enter reference number" helperText="Optional reference or receipt number"
          value={form.referenceNo} onChange={(e) => setField("referenceNo", e.target.value)}
        />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <Link href="/finance/income">
          <Button type="button" variant="secondary" leftIcon={<X className="h-4 w-4" />}>Cancel</Button>
        </Link>
        <Button type="button" onClick={onNext} rightIcon={<ArrowRight className="h-4 w-4" />}>Next</Button>
      </div>
    </div>
  );
}
