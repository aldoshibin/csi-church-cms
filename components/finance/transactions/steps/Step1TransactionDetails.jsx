"use client";

import { ArrowRight } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  TRANSACTION_CATEGORY_OPTIONS,
  TRANSACTION_ACCOUNT_OPTIONS,
  PAYMENT_METHOD_OPTIONS,
  CURRENCY_OPTIONS,
} from "@/lib/mock/financeDashboardMockData";

export default function Step1TransactionDetails({ form, setField, onNext }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-5 text-base font-semibold text-ink">Transaction Details</h3>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select label="Transaction Type" required value={form.type} onChange={(e) => setField("type", e.target.value)}>
          <option>Income</option>
          <option>Expense</option>
        </Select>

        <Input label="Date" required type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} />

        <Input label="Reference No." value={form.refNo} onChange={(e) => setField("refNo", e.target.value)} />

        <Select label="Category" required value={form.category} onChange={(e) => setField("category", e.target.value)}>
          {TRANSACTION_CATEGORY_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <Select label="Account" required value={form.account} onChange={(e) => setField("account", e.target.value)}>
          {TRANSACTION_ACCOUNT_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <Input label="Payer / From" required placeholder="Full name" value={form.payer} onChange={(e) => setField("payer", e.target.value)} />

        <Select label="Payment Method" value={form.paymentMethod} onChange={(e) => setField("paymentMethod", e.target.value)}>
          {PAYMENT_METHOD_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>

        <Input
          label="Amount" required type="number" leftIcon={<span className="text-sm">₹</span>}
          value={form.amount} onChange={(e) => setField("amount", e.target.value)}
        />

        <Select label="Currency" value={form.currency} onChange={(e) => setField("currency", e.target.value)}>
          {CURRENCY_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
      </div>

      <div className="mt-5">
        <Textarea
          label="Description" required rows={2} maxLength={500}
          value={form.description} onChange={(e) => setField("description", e.target.value)}
          helperText={`${form.description.length}/500`}
        />
      </div>

      <div className="mt-4">
        <Input
          label="Tags / Remarks" maxLength={200} placeholder="Enter tags or remarks (optional)"
          value={form.tags} onChange={(e) => setField("tags", e.target.value)}
          helperText={`${form.tags.length}/200`}
        />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <label className="flex items-center gap-2 text-sm text-ink-muted">
          <input
            type="checkbox" className="h-4 w-4 accent-interactive-500"
            checked={form.saveAndAddAnother}
            onChange={(e) => setField("saveAndAddAnother", e.target.checked)}
          />
          Save and add another transaction
        </label>
        <Button type="button" onClick={onNext} rightIcon={<ArrowRight className="h-4 w-4" />}>
          Next
        </Button>
      </div>
    </div>
  );
}
